import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './hooks';
import Routes from './routes';
const App: React.FC = () => (
    <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor='#59324c'></StatusBar>
    <AppProvider>
    <View style={{backgroundColor: '#dbd4ce', flex: 1}} >
      <Routes />
    </View>
    </AppProvider>
    </NavigationContainer>
)

export default App;
