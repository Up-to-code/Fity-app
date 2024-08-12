import { color } from "@/lib/Colors";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <Text className="text-white text-xl" style={{ fontFamily: "Cairo-Bold" }}>
        Fity
      </Text>
      <Image
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s",
        }}
        className="w-10 h-10 rounded-full"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get("screen").width - 40,
    height: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingVertical: 15,
    
  },
});

export default Header;
