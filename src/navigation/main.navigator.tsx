import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from '@react-navigation/stack';
import {AuthNavigator} from './auth.navigator';
import { colors } from '../assets/colors/main'
import Contacts from '../layouts/contacts/Contacts';
import Notifications from '../layouts/notifications/Notifications';
import Home from '../layouts/home/Home';
import Chats from '../layouts/chats/Chats';
import ChatDetail from '../layouts/chats/ChatDetail';

import Groups from '../layouts/groups/Groups';
import GroupDetail from '../layouts/groups/GroupDetail';

import Profile from '../layouts/profile/Profile';
import User from '../layouts/user/User';

import SelectLanguage from '../layouts/language/SelectLanguage';
import DeleteAccount from '../layouts/account/DeleteAccount';
import PrivacyPolicy from '../layouts/privacyPolicy/PrivacyPolicy';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
 function App() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor:'black',
        inactiveTintColor:'gray',
        activeBackgroundColor:'white',
        inactiveBackgroundColor:'white',
        showLabel:false,
      }}
    >
      <Tab.Screen
        name="Chats" 
        component={Chats}
        options = {{
          tabBarLabel:'Chats',
          tabBarIcon: ({color, size, focused}) => {
            let iconName = (focused)?'chatbox':'chatbox-outline';
            let iconSize = (focused)?35:30; 
            let iconColor = (focused)?colors.main:'gray';
            return (<Icon name={iconName} color={iconColor} size={iconSize} />);
          },
        }}
      
      />
      <Tab.Screen
        name="Groups" 
        component={Groups}
        options = {{
          tabBarLabel:'Groups',
          tabBarIcon: ({color, size, focused}) => {
            let iconName = (focused)?'chatbubbles':'chatbubbles-outline';
            let iconSize = (focused)?35:30; 
            let iconColor = (focused)?colors.main:'gray';
            return (<Icon name={iconName} color={iconColor} size={iconSize} />);
          },
        }}
      
      />
      <Tab.Screen
        name="Contacts" 
        component={Contacts}
        options = {{
          tabBarLabel:'Contacts',
          tabBarIcon: ({color, size, focused}) => {
            let iconName = (focused)?'people':'people-outline';
            let iconSize = (focused)?35:30; 
            let iconColor = (focused)?colors.main:'gray';
            return (<Icon name={iconName} color={iconColor} size={iconSize} />);
          },
          
        }}
      
      />
      <Tab.Screen
        name="Home" 
        component={Home}
        options = {{
          tabBarLabel:'Home',
          tabBarIcon: ({color, size, focused}) => {
            let iconName = (focused)?'home':'home-outline';
            let iconSize = (focused)?35:30; 
            let iconColor = (focused)?colors.main:'gray';
            return (<Icon name={iconName} color={iconColor} size={iconSize} />);
          },
        }}
      
      />
      <Tab.Screen
        name="Notification" 
        component={Notifications}
        options = {{
          tabBarLabel:'Home',
          tabBarIcon: ({color, size, focused}) => {
            let iconName = (focused)?'notifications':'notifications-outline';
            let iconSize = (focused)?35:30; 
            let iconColor = (focused)?colors.main:'gray';
            return (<Icon name={iconName} color={iconColor} size={iconSize} />);
          },
        }}
      
      />
      <Tab.Screen
        name="User" 
        component={User}
        options = {{
          tabBarLabel:'Favorite',
          tabBarIcon: ({color, size, focused}) => {
            let iconName = (focused)?'person':'person-outline';
            let iconSize = (focused)?35:30; 
            let iconColor = (focused)?colors.main:'gray';
            return (<Icon name={iconName} color={iconColor} size={iconSize} />);
          },
          
        }}
      
      />
      </Tab.Navigator>
  );
}



const Nav = (): React.ReactElement => (
  <Stack.Navigator 
    // headerMode='none'
    >
    <Stack.Screen 
			options={{
				headerShown:false,
			}}
      name='Auth' 
      component={AuthNavigator}/>
    <Stack.Screen 
			options={{
				headerShown:false,
			}}
      name='Main' 
      component={App}/>
    <Stack.Screen 
      name='PrivacyPolicy' 
      component={PrivacyPolicy}/>
    <Stack.Screen 
      name='DeleteAccount' 
      component={DeleteAccount}/>
    <Stack.Screen 
      name='SelectLanguage' 
      component={SelectLanguage}/>
    <Stack.Screen 
			options={{
				headerShown:false,
			}}
      name='User' 
      component={User}/>
    <Stack.Screen 
      name='Profile' 
      component={Profile}/>
    <Stack.Screen 
      name='Groups' 
			options={{
				headerShown:false,
			}}
      component={Groups}/>
    <Stack.Screen 
      name='GroupDetail' 
      component={GroupDetail}/>
    <Stack.Screen 
      name='ChatDetail' 
      component={ChatDetail}/>
    <Stack.Screen 
      name='Home' 
      component={Home}/>
    <Stack.Screen 
      name='Notifications' 
      component={Notifications}/>
    <Stack.Screen 
      name='Contacts' 
      component={Contacts}/>
  </Stack.Navigator>
)
export default Nav;
