// Dependencies
import {Platform} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import {settings} from '../settings';

export const footer = {
  wrapper: {
    backgroundColor: settings.$grey_lighter,
    width: '100%',
    height: settings.$size_mega,
    position: 'absolute',
    bottom: 0,
    ...ifIphoneX({
      paddingBottom: settings.$size_l,
    }),
  },

  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
};
