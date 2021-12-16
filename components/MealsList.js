import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "./MealItem";
const MealsList = (props) => {
  // const currentmealisfav = useSelector(state => state.meals.favouritemeals)
  const renderItemMeal = (itemData) => {
    // const isFavourite=currentmealisfav.some((meal)=>meal.id===itemData.item.id)
    // console.log(isFavourite);
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onselect={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle:itemData.item.title,
              // isFav:isFavourite
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listdata}
        renderItem={renderItemMeal}
        keyExtractor={(item, index) => item.id}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default MealsList;
const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
