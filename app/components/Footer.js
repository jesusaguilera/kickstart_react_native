import React from 'react';
import propTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';

// Styles
import e_ from '../assets/styles/elements';
import o_ from '../assets/styles/objects';
import c_ from '../assets/styles/components';

const Footer = (props) => {
  return (
    <View style={[c_.footer.wrapper]}>
      <View style={[c_.footer.container]}>
        <Text style={[e_.heading.__6]}>Footer</Text>
      </View>
    </View>
  );
};

Footer.propTypes = {};

export default Footer;
