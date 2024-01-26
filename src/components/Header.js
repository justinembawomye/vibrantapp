import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const Header = ({ label }) => {
  //   console.log(props);
  console.log(label);

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
};

const Devicewidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    width: Devicewidth,
    // width: 10,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
  labelStyle: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
export default Header;
