import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";

const IconLabel = ({ name, label, color }) => {
  return (
    <View style={styles.container}>
      <Icon
        name={name}
        type="ionicon"
        size={20}
        color={color}
        style={styles.iconStyle}
      />
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
  },
  container: {
    flexDirection: "row",
    marginRight: 10,
    alignItems: "center",
  },

  iconStyle: {
    marginRight: 2,
  },
});

export default IconLabel;
