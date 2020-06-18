import React from 'react';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import{Provider as AuthProvider} from './src/context/AuthContext';
import{setNavigator} from './src/navigationRef';



import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";


const switchNavigator = createSwitchNavigator({
   loginFlow: createStackNavigator({
     Signup: SignupScreen,
     Sigin: SigninScreen
   })  ,
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate:TrackCreateScreen,
    Account: AccountScreen
  })
});

const App =  createAppContainer(switchNavigator);
export default () =>{
  return(
      <AuthProvider>
        <App ref={(navigator) =>{setNavigator(navigator)}}/>
      </AuthProvider>
  );
};


