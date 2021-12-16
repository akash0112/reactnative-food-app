import React, { useCallback, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import { toggleFavoourite } from '../store/actions/meals';
const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const availablemeals = useSelector(state => state.meals.meals)
  const selectedMeal = availablemeals.find(meal => meal.id === mealId);
  const currentmealisfav = useSelector(state => state.meals.favouritemeals.some((meal)=>meal.id===mealId))
  const dispatch = useDispatch()
  const tooglefavhandler=useCallback(()=>{
    dispatch(toggleFavoourite(mealId));
  },[dispatch,mealId])
useEffect(() => {
  // props.navigation.setParams({mealTitle:selectedMeal.title})
  props.navigation.setParams({toggleFav:tooglefavhandler})
}, [tooglefavhandler])

useEffect(() => {
  props.navigation.setParams({isFav:currentmealisfav})
}, [currentmealisfav])
  return (
    <ScrollView>
      <Image
      source={{uri:selectedMeal.imageUrl}}
      style={styles.bgImage}
      />
      <View style={styles.details}>
            <Text>{selectedMeal.duration}m</Text>
            <Text>{selectedMeal.complexity.toUpperCase()}</Text>
            <Text>{selectedMeal.affordability.toUpperCase()}</Text>
          </View>
          <Text style={styles.title}>Ingrediantes</Text>
          {selectedMeal.ingredients.map((ingredient)=><Text style={styles.listItem} key={ingredient}>{ingredient}</Text>)}
          <Text style={styles.title}>Steps</Text>
          {selectedMeal.steps.map((step,i)=><Text style={styles.listItem} key={step}>{i+1}:- { step}</Text>)}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  // const mealId = navigationData.navigation.getParam('mealId');
  // const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const togglefavfunct = navigationData.navigation.getParam('toggleFav');
  const favmeal=navigationData.navigation.getParam('isFav')
  // console.log(favmeal);
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={favmeal?"ios-star":"ios-star-outline"}
          onPress={togglefavfunct}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
bgImage:{
  width:"100%",
  height:200
},
details:{
  flexDirection:"row",
  padding:15,
  justifyContent:"space-around"
},
title:{
  fontSize:22,
  textAlign:"center"
},
listItem:{
  marginVertical:10,
  marginHorizontal:20,
  borderColor:"#ccc",
  borderWidth:2,
  padding:10
}
});

export default MealDetailScreen;