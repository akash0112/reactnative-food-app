import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CategoryGridTile from "../components/CategoryGridTile";
import CustomHeaderButton from "../components/HeaderButton";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemdata) => {
    return (
      <CategoryGridTile
        title={itemdata.item.title}
        color={itemdata.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoriesMeals",
            params: { CategoryId: itemdata.item.id },
          });
        }}
      />
      // <TouchableOpacity style={styles.gridItem}
      // onPress={()=>{props.navigation.navigate({routeName:'CategoriesMeals'
      // ,params:{CategoryId:itemdata.item.id}})}}>
      //   <View >
      //     <Text>{itemdata.item.title}</Text>
      //   </View>
      // </TouchableOpacity>
    );
  };
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};
CategoriesScreen.navigationOptions = (navdata) => {
  // console.log(navdata);
  return {
    headerTitle: "Meals Screen",
    headerLeft: 
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          iconSize={25}
          onPress={() => {navdata.navigation.toggleDrawer();}}
        />
      </HeaderButtons>
    ,
    headerStyle: {
      backgroundColor: "blue",
    },
    // headerTintColor:"white"
  };
};
export default CategoriesScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
