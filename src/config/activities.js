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
  },
  {
    appId: 'Chromium',
    name: 'Chromium',
    hotKey: 'c',
    primaryCommand: 'open "{URL}" -a Chromium',
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
  },
  {
    appId: 'Firefox Nightly',
    name: 'Firefox Nightly',
    hotKey: 'n',
    primaryCommand: 'open "{URL}" -a "Firefox Nightly"',
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
  },
  {
    appId: 'Iridium',
    name: 'Iridium',
    hotKey: 'i',
    primaryCommand: 'open "{URL}" -a Iridium',
  },
  {
    appId: 'Maxthon',
    name: 'Maxthon',
    hotKey: 'm',
    primaryCommand: 'open "{URL}" -a Maxthon',
  },
  {
    appId: 'Min',
    name: 'Min',
    hotKey: '-',
    primaryCommand: 'open "{URL}" -a Min',
  },
  {
    appId: 'Opera',
    name: 'Opera',
    hotKey: 'o',
    primaryCommand: 'open "{URL}" -a Opera',
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
  },
  {
    appId: 'Vivaldi',
    name: 'Vivaldi',
    hotKey: 'v',
    primaryCommand: 'open "{URL}" -a Vivaldi',
  },
  {
    name: 'Copy To Clipboard',
    hotKey: 'space',
    primaryCommand: 'echo "{URL}" | pbcopy',
  },
]
