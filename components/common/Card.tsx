import { color } from "@/lib/Colors";
import { truncateString } from "@/lib/ShortText";
import { router } from "expo-router";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

interface Props {
  image: string;
  title: string;
  subtitle?: string;
  id: number;
}

const SpotifyCard = ({ image, title, subtitle, id }: Props) => {
  const [scale, setScale] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.timing(scale, {
      toValue: 0.95,
      duration: 150,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 150,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.cardContainer, { transform: [{ scale }] }]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.touchable}
        onPress={() =>
          router.push({
            pathname: `/details/[id]`,
            params: {
              id,
            },
          })
        }
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.cardImage} />
          <View style={styles.overlay} />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{truncateString(title, 20)}</Text>
          {subtitle && (
            <Text style={styles.cardSubtitle}>
              {truncateString(subtitle, 30)}
            </Text>
          )}
          <Ionicons
            name="play-circle"
            size={50}
            color="#1DB954"
            style={styles.playIcon}
          />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    overflow: "hidden",
    margin: 10,
    width: Dimensions.get("screen").width / 2 - 20,
    height: 230,
    backgroundColor: "#191414",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
    position: "relative",
  },
  touchable: {
    flex: 1,
  },
  imageContainer: {
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 8,
  },
  cardContent: {
    padding: 12,
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cardSubtitle: {
    color: "#B3B3B3",
    fontSize: 14,
  },
  playIcon: {
    position: "absolute",
    bottom: 6,
    right: 6,
    zIndex: 2,
  },
});

export default SpotifyCard;
