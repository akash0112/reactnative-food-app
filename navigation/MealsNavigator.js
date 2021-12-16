import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavouriteScreen from "../screens/Favourite";
import FiltersScreen from "../screens/FiltersScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS == "android" ? "blue" : "red",
  },
  headerTintColor: Platform.OS == "android" ? "white" : "red",
};
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoriesMeals: {
      screen: CategoriesMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favourites: FavouriteScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-restaurant" size={25} />;
      },
      tabBarColor: "green",
    },
  },
  Favourites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Ionicons name="ios-star" size={25} />;
      },
      tabBarColor: "yellow",
    },
  },
};

const MealsNavFavNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "blue",
        shifting: true,
        barStyle: {
          backgroundColor: "red",
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: "red",
        },
      });

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
},  {
  defaultNavigationOptions: defaultStackNavOptions,
});
const MainNavigator = createDrawerNavigator({
  MealsFavs: {screen:MealsNavFavNavigator,navigationOptions:{drawerLabel:"Meals"}},
  Filter: FiltersNavigator,
},{
  contentOptions:{
    activeTintColor:"red"
  }
});
export default createAppContainer(MainNavigator);

// export default createAppContainer(MealsNavFavNavigator);


