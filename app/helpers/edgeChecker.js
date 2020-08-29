// Dependencies
import {Dimensions} from 'react-native';

export const heightEdgeChecker = {
  device: Dimensions.get('window').height,
  edge: 600,
};

export const widthEdgeChecker = {
  device: Dimensions.get('window').width,
  edge: 374,
  tablet: 599,
};

