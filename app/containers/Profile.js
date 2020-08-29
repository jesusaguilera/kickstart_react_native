import React from 'react';
import propTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Styles
import e_ from '../assets/styles/elements';
import o_ from '../assets/styles/objects';
import c_ from '../assets/styles/components';

const Profile = (props) => {
  console.log('Profile', props);
  return (
    <View style={o_.wrapper.__default}>
      <View style={[o_.container.__default, o_.container.__centered]}>
        <Text style={e_.paragraph.__l}>Profile Screen</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
          <Text style={[e_.paragraph.__default]}>Go to details</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

Profile.propTypes = {};

export default Profile;
