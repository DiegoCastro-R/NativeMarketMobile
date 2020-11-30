import React from 'react';
import { createStackNavigator} from '@react-navigation/stack'
import Dashboard from '../pages/Dashboard';
import CategoryProducts from '../pages/CategoryProducts';
const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
  screenOptions={{
    headerShown: false,
    cardStyle: {backgroundColor: '#dbd4ce'}
  }}
  >
    <App.Screen name="Dashboard" component={Dashboard}/>
    <App.Screen name="CategoryProducts" component={CategoryProducts}/>
  </App.Navigator>
);

export default AppRoutes;
