import React from "react";
import { Button, Image, ImageBackground, ImageBackgroundBase, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const MealItem = (props) => {
  // console.log(props.image);
  return (
    <View style={styles.MealItem}>
      <TouchableOpacity onPress={props.onselect}>
        <View>
          <View style={{ ...styles.MealRow, ...styles.MealHeader }}>
            <ImageBackground source={{ uri: props.image }} style={styles.bgImage} >
           <View style={styles.titleContaine}>
           <Text style={styles.title} >{props.title}</Text>
           </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.MealRow, ...styles.MealDetail }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;
const styles = StyleSheet.create({
  MealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius:10,
    overflow:"hidden"
  },
  MealRow: {
    flexDirection: "row",
  },
  MealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems:"center",
    height:"15%"
  },
  MealHeader: {
    height: "85%",
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent:"flex-end"
  },
  titleContaine:{
    backgroundColor: "rgba(0,0,0,0.5)",
    // paddingVertical: 2,
    paddingHorizontal:12,
  },
  title: {
    fontSize: 22,
    color: "white",
    padding: 5,
    textAlign:"center"
  },
});
