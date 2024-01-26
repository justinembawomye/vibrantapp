import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import RestuarantCard from "../components/Card";
// import IconLabel from "../components/IconLabel";

const restuarants = [
  {
    name: "Cafe Javas",
    category: "Desserts, cake, Bakery",
    deliveryTime: "50mins",
    distance: "6 km",
    image: require("../../assets/image1.jpg"),
    id: 1,
  },
  {
    name: "La pantry",
    category: "Desserts, cake, Bakery",
    deliveryTime: "30mins",
    distance: "3.5 km",
    image: require("../../assets/image2.jpg"),
    id: 2,
  },
  {
    name: "Food Hub",
    category: "Desserts, cake, Bakery",
    deliveryTime: "40mins",
    distance: "5 km",
    image: require("../../assets/image3.jpg"),
    id: 3,
  },
  {
    name: "KFC",
    category: "Desserts, cake, Bakery",
    deliveryTime: "25mins",
    distance: "2 km",
    image: require("../../assets/image4.jpg"),
    id: 4,
  },
  {
    name: "Middle East Restaurant",
    category: "Desserts, cake, Bakery",
    deliveryTime: "45mins",
    distance: "6.1 km",
    image: require("../../assets/image1.jpg"),
    id: 5,
  },
  {
    name: "Meza",
    category: "Desserts, cake, Bakery",
    deliveryTime: "55mins",
    distance: "7 km",
    image: require("../../assets/image2.jpg"),
    id: 6,
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header label="Vibrant Meal App" />
      {/* 
      <Text style={styles.text}>Hello Foodies!!</Text> */}
      {/* <RestuarantCard /> */}
      {/* <IconLabel /> */}
      {/* <Text style={styles.text}>Hello Justine</Text> */}

      <StatusBar style="dark-content" />

      <FlatList
        data={restuarants}
        renderItem={({ item }) => {
          return <RestuarantCard info={item} />;
        }}
        keyExtractor={(restuarant) => restuarant.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
export default HomeScreen;
