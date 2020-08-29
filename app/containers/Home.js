import React from 'react';
import propTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';

// Components
import Footer from '../components/Footer';

// Styles
import e_ from '../assets/styles/elements';
import o_ from '../assets/styles/objects';
import c_ from '../assets/styles/components';

const Home = (props) => {
  console.log('Home', props);
  return (
    <View style={o_.wrapper.__default}>
      <View style={[o_.container.__default, o_.container.__centered]}>
        <Text style={e_.paragraph.__l}>Home Screen</Text>
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
      <Footer />
    </View>
  );
};

Home.propTypes = {};

export default Home;
