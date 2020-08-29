import {settings} from '../settings';

export const container = {
  __default: {
    backgroundColor: settings.$grey_lighter,
    flex: 1,
    paddingHorizontal: settings.$size_l,
  },

  __centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};
