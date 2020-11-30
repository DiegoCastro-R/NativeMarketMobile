import React from 'react';
import { createStackNavigator} from '@react-navigation/stack'
import SignIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';
const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
  screenOptions={{
    headerShown: false,
    cardStyle: {backgroundColor: '#dbd4ce'}
  }}
  >
    <Auth.Screen name="SignIn" component={SignIn}></Auth.Screen>
    <Auth.Screen name="SignUp" component={SignUp}></Auth.Screen>
  </Auth.Navigator>
);

export default AuthRoutes;
