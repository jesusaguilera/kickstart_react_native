import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

// Components
import FoodCard from '../components/FoodCard';

// Styles
import e_ from '../assets/styles/elements';
import o_ from '../assets/styles/objects';
import c_ from '../assets/styles/components';

const foodData = [
  {
    title: 'Ikura',
    image: '../assets/images/japanese_food/ikura.pgn',
    color: '#C0F0F4',
  },
  {
    title: 'Maki',
    image: '../assets/images/japanese_food/maki_sushi.pgn',
    color: '#BED7EA',
  },
  {
    title: 'Niguiri',
    image: '../assets/images/japanese_food/niguiri.pgn',
    color: '#D5C2E1',
  },
  {
    title: 'Onigiri',
    image: '../assets/images/japanese_food/onigiri.pgn',
    color: '#F0C9D7',
  },
  {
    title: 'Sushi',
    image: '../assets/images/japanese_food/sushi.pgn',
    color: '#D0F1D1',
  },
  {
    title: 'Yoshoku',
    image: '../assets/images/japanese_food/yoshoku.pgn',
    color: '#F7DBCF',
  },
  {
    title: 'Urimaki',
    image: '../assets/images/urimaki.pgn',
    color: '#D9C9F9',
  },
];

const Home = (props) => {
  return (
    <View style={o_.wrapper.__default}>
      <View style={[o_.container.__default, o_.container.__centered]}>
        <Text style={e_.paragraph.__l}>Home Screen</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{width: '100%'}}>
          <View
            style={[
              {
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              },
            ]}>
            {foodData.map((item, index) => {
              return (
                <FoodCard
                  key={`food-${index}`}
                  title={item.title}
                  image={item.image}
                  colorCode={item.color}
                  navigation={props.navigation}
                />
              );
            })}
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('Details', {
              id: 190,
              otherParam: 'My param',
            })
          }>
          <Text style={[e_.paragraph.__default]}>Go to details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Home.propTypes = {};

export default Home;
