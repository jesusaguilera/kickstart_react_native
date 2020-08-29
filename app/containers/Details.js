import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Styles
import e_ from '../assets/styles/elements';
import o_ from '../assets/styles/objects';
import c_ from '../assets/styles/components';

const Details = (props) => {
  console.log('Details', props);
  return (
    <View style={o_.wrapper.__default}>
      <View style={[o_.container.__default, o_.container.__centered]}>
        <Text style={[e_.paragraph.__l]}>Details Screen</Text>
        <Text style={[e_.paragraph.__default]}>
          Parameter itemId Home :
          {/* <Text style={o_.color.__green}>{props.route.params.id}</Text> */}
        </Text>
        <Text style={[e_.paragraph.__default]}>
          Parameter otherParam Home :
          {/* <Text style={o_.color.__green}>{props.route.params.otherParam}</Text> */}
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text style={[e_.paragraph.__default, o_.underline]}>Go to Home</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

Details.propTypes = {};

export default Details;
