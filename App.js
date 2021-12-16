import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';

const RootReducer=combineReducers({
  meals:mealsReducer
})
enableScreens();
const store=createStore(RootReducer)
export default function App() {
  return (
    <Provider store={store}>
<MealsNavigator/>
    </Provider>
   
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
