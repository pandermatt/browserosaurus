/**
 * Activities
 *
 */

export default [
  {
    appId: 'Brave',
    name: 'Brave',
    hotKey: 'b',
    primaryCommand: 'open "{URL}" -a Brave',
    cmdCommand: 'open "{URL}" -a Brave -g',
  },
  {
    appId: 'Chromium',
    name: 'Chromium',
    hotKey: 'c',
    primaryCommand: 'open "{URL}" -a Chromium',
    cmdCommand: 'open "{URL}" -a Chromium -g',
  },
  {
    appId: 'Firefox',
    name: 'Firefox',
    hotKey: 'f',
    primaryCommand: 'open "{URL}" -a Firefox',
    cmdCommand: 'open "{URL}" -a Firefox -g',
  },
  {
    appId: 'Firefox Developer Edition',
    name: 'Firefox Developer Edition',
    hotKey: 'd',
    primaryCommand: 'open "{URL}" -a "Firefox Developer Edition"',
    cmdCommand: 'open "{URL}" -a "Firefox Developer Edition" -g',
  },
  {
    appId: 'Firefox Nightly',
    name: 'Firefox Nightly',
    hotKey: 'n',
    primaryCommand: 'open "{URL}" -a "Firefox Nightly"',
    cmdCommand: 'open "{URL}" -a "Firefox Nightly" -g',
  },
  {
    appId: 'Google Chrome',
    name: 'Google Chrome',
    hotKey: 'g',
    primaryCommand: 'open "{URL}" -a "Google Chrome"',
    cmdCommand: 'open "{URL}" -a "Google Chrome" -g',
  },
  {
    appId: 'Google Chrome Canary',
    name: 'Google Chrome Canary',
    hotKey: 'y',
    primaryCommand: 'open "{URL}" -a "Google Chrome Canary"',
    cmdCommand: 'open "{URL}" -a "Google Chrome Canary" -g',
  },
  {
    appId: 'Iridium',
    name: 'Iridium',
    hotKey: 'i',
    primaryCommand: 'open "{URL}" -a Iridium',
    cmdCommand: 'open "{URL}" -a Iridium -g',
  },
  {
    appId: 'Maxthon',
    name: 'Maxthon',
    hotKey: 'm',
    primaryCommand: 'open "{URL}" -a Maxthon',
    cmdCommand: 'open "{URL}" -a Maxthon -g',
  },
  {
    appId: 'Min',
    name: 'Min',
    hotKey: '-',
    primaryCommand: 'open "{URL}" -a Min',
    cmdCommand: 'open "{URL}" -a Min -g',
  },
  {
    appId: 'Opera',
    name: 'Opera',
    hotKey: 'o',
    primaryCommand: 'open "{URL}" -a Opera',
    cmdCommand: 'open "{URL}" -a Opera -g',
  },
  {
    appId: 'Safari',
    name: 'Safari',
    hotKey: 's',
    primaryCommand: 'open "{URL}" -a Safari',
    cmdCommand: 'open "{URL}" -a Safari -g',
  },
  {
    appId: 'TorBrowser',
    name: 'TorBrowser',
    hotKey: 't',
    primaryCommand: 'open "{URL}" -a TorBrowser',
    cmdCommand: 'open "{URL}" -a TorBrowser -g',
  },
  {
    appId: 'Vivaldi',
    name: 'Vivaldi',
    hotKey: 'v',
    primaryCommand: 'open "{URL}" -a Vivaldi',
    cmdCommand: 'open "{URL}" -a Vivaldi -g',
  },
  {
    name: 'Copy To Clipboard',
    hotKey: 'space',
    primaryCommand: 'echo "{URL}" | pbcopy',
  },
]
