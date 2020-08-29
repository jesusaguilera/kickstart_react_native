import {settings} from '../settings';

// Helpers
import {widthEdgeChecker} from '../../../helpers/edgeChecker';

export const food_card = {
  wrapper: {
    backgroundColor: settings.$pastel_blue,
    borderRadius: settings.$size_l,
    width: widthEdgeChecker.device / 2 - settings.$size_l - settings.$size_s,
    height: widthEdgeChecker.device / 2 - settings.$size_l - settings.$size_s,
    padding: settings.$size_default,
    marginBottom: settings.$size_l,
  },

  title: {
    fontSize: 20,
    fontFamily: settings.$font_semiBold,
    marginBottom: settings.$size_s,
  },

  image_wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};
