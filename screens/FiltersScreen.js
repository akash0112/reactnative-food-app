import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import CustomHeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { setFilters } from "../store/actions/meals";
import { useDispatch } from "react-redux";
const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: "white" }}
        thumbColor={"blue"}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};
const FiltersScreen = (props) => {
  const [isGluttenFree, setisGluttenFree] = useState(false);
  const [isLactoseFree, setisLactoseFree] = useState(false);
  const [isVegan, setisVegan] = useState(false);
  const [isVegetarian, setisVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedfilters = {
      gluttenFree: isGluttenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedfilters));
  }, [isVegetarian, isVegan, isGluttenFree, isLactoseFree, dispatch]);
  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters/ Restrictions</Text>
      <FilterSwitch
        label="Glutten-Free"
        state={isGluttenFree}
        onChange={(newvalue) => setisGluttenFree(newvalue)}
      />
      <FilterSwitch
        label="Lactose-Free"
        state={isLactoseFree}
        onChange={(newvalue) => setisLactoseFree(newvalue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newvalue) => setisVegan(newvalue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newvalue) => setisVegetarian(newvalue)}
      />
    </View>
  );
};
FiltersScreen.navigationOptions = (navdata) => {
  // console.log(navdata);
  return {
    headerTitle: "Filter Screen",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          iconSize={25}
          onPress={() => {
            navdata.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          iconSize={25}
          onPress={navdata.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
    //   headerStyle: {
    //     backgroundColor: "blue",
    //   },
    // headerTintColor:"white"
  };
};
export default FiltersScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent:'center',
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});
