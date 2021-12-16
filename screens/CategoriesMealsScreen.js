import React from "react";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList";
import { CATEGORIES } from "../data/dummy-data";
const CategoriesMealsScreen = (props) => {
  const availablemeals = useSelector(state => state.meals.filteredmeals)
  const getId = props.navigation.getParam("CategoryId");
  // console.log(getId);
  // const selectedCategory = CATEGORIES.find((data) => getId == data.id);
  const displayedmeals = availablemeals.filter(
    (meal) => meal.categoryIds.indexOf(getId) >= 0
  );
  // console.log(displayedmeals);
 
  return (
  <MealsList listdata={displayedmeals} navigation={props.navigation}/>
  );
};
CategoriesMealsScreen.navigationOptions = (navigationdata) => {
  const catId = navigationdata.navigation.getParam("CategoryId");
  const selectedCategory1 = CATEGORIES.find((data) => catId == data.id);
  return {
    headerTitle: selectedCategory1.title,
  };
};
export default CategoriesMealsScreen;

