import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Containers
import Home from './Home';
import Profile from './Profile';
import Details from './Details';

// Components
import Header from '../components/Header';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export const HomeStackScreen = (props) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        initialParams={{stackRoot: true}}
        options={{
          header: (props) => <Header {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={{
          header: (props) => <Header {...props} />,
        }}
      />
    </HomeStack.Navigator>
  );
};

export const ProfileStackScreen = (props) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        initialParams={{stackRoot: true}}
        options={{
          header: (props) => <Header {...props} />,
        }}
      />
      <ProfileStack.Screen
        name="Details"
        component={Details}
        options={{
          header: (props) => <Header {...props} />,
        }}
      />
    </ProfileStack.Navigator>
  );
};
