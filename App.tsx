import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import ListThemeScreen from './screens/theme/ListThemeScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <>
      <RootNavigator />
    </>
  );
}

function AuthStack() {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

function ListThemeStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="ListTheme" component={ListThemeScreen} />
    </Stack.Navigator>
  )
}

function RootNavigator() {
  return(
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
  
}


