import React from "react";
import { Text, View } from "react-native";
import { StyleSheet, Dimensions, Image } from "react-native";
import IconLabel from "../components/IconLabel";

const iconColor = "#555";

const RestuarantCard = ({ info }) => {
  const { name, image, distance, deliveryTime, category } = info;
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.imageStyle} source={image} />
      <View style={styles.infoStyle}>
        <Text style={styles.titleStyle}>{name}</Text>
        <Text style={styles.categoryStyle}>{category}</Text>
        <View style={styles.iconLabelStyle}>
          <IconLabel name="ios-time" color={iconColor} label={deliveryTime} />
          <IconLabel name="ios-pin" color={iconColor} label={distance} />
        </View>
      </View>
    </View>
  );
};

const DeviceWidth = Math.round(Dimensions.get("window").width);

const radius = 20;
const styles = StyleSheet.create({
  cardContainer: {
    color: "#000",
    width: DeviceWidth - 25,
    height: 350,
    backgroundColor: "pink",
    borderRadius: 20,
    shadowColor: "white",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.77,
    shadowRadius: 5,
    elevation: 9,
    marginTop: 15,
  },

  imageStyle: {
    height: 200,
    width: DeviceWidth - 20,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
  },

  titleStyle: {
    fontSize: 25,
    fontWeight: "700",
  },

  text: {
    color: "white",
  },
  categoryStyle: {
    fontWeight: "200",
    fontSize: 20,
  },

  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },

  iconLabelStyle: {
    flexDirection: "row",
  },
});

export default RestuarantCard;
