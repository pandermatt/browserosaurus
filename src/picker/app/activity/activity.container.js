import { spawn } from 'child_process'
import mousetrap from 'mousetrap'
import React, { Component } from 'react'

import Activity from './activity.component'

class ActivityContainer extends Component {
  state = {
    isActive: false, // used for styling when selecting an activity with a hot-key
  }

  componentDidMount() {
    mousetrap.bind(this.props.activity.hotKey, this.hotKeyOpenActivity)
    this.setupDefault()
  }

  componentWillUnmount() {
    mousetrap.unbind(this.props.activity.hotKey)
  }

  componentDidUpdate() {
    this.setupDefault()
  }

  hotKeyOpenActivity = () => {
    this.setState({ isActive: true }, () => {
      setTimeout(() => {
        // timeout is to show the active state briefly before opening activity.
        this.runPrimaryCommand()
      }, 200)
    })
  }

  /**
   * Setup default activity hot-key
   *
   * The default activity is the one at the top and always opens by hitting the
   * enter key.
   */
  setupDefault = () => {
    if (this.props.defaultActivity) {
      mousetrap.unbind('enter')
      mousetrap.bind('enter', () => this.hotKeyOpenActivity())
    }
  }

  /**
   * Run Primary Command
   *
   * Tells the OS to open chosen activity with this.props.url.
   */
  runPrimaryCommand = () => {
    spawn('sh', [
      '-c',
      this.props.activity.primaryCommand.replace('{URL}', this.props.url),
    ])
  }

  runCmdCommand = () => {
    if (this.props.activity.cmdCommand) {
      spawn('sh', [
        '-c',
        this.props.activity.cmdCommand.replace('{URL}', this.props.url),
      ])
    }
  }

  handleClick = e => {
    if (this.props.isAppVisible) {
      if (e.metaKey) {
        this.runCmdCommand()
      } else {
        this.runPrimaryCommand()
      }

      this.props.onClick()

      this.setState({ isActive: false })
    }
  }

  handleMouseEnter = () => {
    if (this.props.isAppVisible) {
      this.setState({ isActive: true })
    }
  }

  handleMouseLeave = () => {
    this.setState({ isActive: false })
  }

  render() {
    const { isAppVisible } = this.props
    const { isActive } = this.state
    const isTooltipOpen = isAppVisible && isActive

    return (
      <Activity
        activity={this.props.activity}
        defaultActivity={this.props.defaultActivity}
        isActive={isActive}
        isTooltipOpen={isTooltipOpen}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      />
    )
  }
}

export default ActivityContainer
