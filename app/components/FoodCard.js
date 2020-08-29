import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Image} from 'react-native';

// Styles
import {settings} from '../assets/styles/settings';
import e_ from '../assets/styles/elements';
import o_ from '../assets/styles/objects';
import c_ from '../assets/styles/components';

const FoodCard = (props) => {
  console.log(props.image);
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('Details', {
          title: props.title,
          food: props.image,
        })
      }
      style={[
        c_.food_card.wrapper,
        {
          backgroundColor: props.colorCode,
        },
      ]}>
      <Text style={c_.food_card.title}>{props.title}</Text>
      <View style={c_.food_card.image_wrapper}>
        <Image
          style={{height: 100}}
          resizeMode="contain"
          source={require('../assets/images/japanese_food/ikura.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

FoodCard.propTypes = {
  title: PropTypes.string.isRequired,
  // food: PropTypes.element.isRequired,
};

export default FoodCard;
