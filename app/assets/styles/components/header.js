// Dependencies
import {ifIphoneX} from 'react-native-iphone-x-helper';

// Styles
import {settings} from '../settings';

export const header = {
  wrapper: {
    backgroundColor: settings.$grey_lighter,
    height: settings.$size_kilo,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    ...ifIphoneX({
      height: 88,
      paddingTop: 32,
    }),
  },

  left: {
    width: settings.$size_giga,
    height: '100%',
    justifyContent: 'center',
    paddingLeft: settings.$size_l,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  right: {
    width: settings.$size_giga,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: settings.$size_l,
  },
};
