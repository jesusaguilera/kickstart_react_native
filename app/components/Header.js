import React from 'react';
import propTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';

// Styles
import e_ from '../assets/styles/elements';
import o_ from '../assets/styles/objects';
import c_ from '../assets/styles/components';

const Header = (props) => {
  const isStackRoot = props.scene.route.params
    ? props.scene.route.params.stackRoot
    : false;

  return (
    <View style={[c_.header.wrapper]}>
      <View style={c_.header.left}>
        {!isStackRoot && (
          <TouchableOpacity
            style={c_.button.go_back}
            onPress={() => props.navigation.goBack()}>
            <Text style={[e_.paragraph.__s, o_.color.__red]}>Go Back</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={c_.header.center}>
        <Text style={[e_.heading.__6]}>{props.scene.route.name}</Text>
      </View>
      <View style={c_.header.right}></View>
    </View>
  );
};

Header.propTypes = {};

export default Header;
