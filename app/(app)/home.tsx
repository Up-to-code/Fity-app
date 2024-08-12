import Card from "@/components/common/Card";
import Header from "@/components/common/Header";
import { color } from "@/lib/Colors";
import { List } from "@/lib/data";
import { BlurView } from "expo-blur";
import React, { useEffect } from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  const [data, setData] = React.useState<any>([]);

  useEffect(() => {
    setData(List);
  }, []);

  return (
    <>
      <LinearGradient
        colors={[color.primary, "#0D0D0D", "#1d1d1dae"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <View style={styles.headerContainer}>
          <BlurView style={styles.blurView} intensity={50} tint="dark">
            <SafeAreaView style={styles.safeAreaHeader}>
              <Header />
              <StatusBar barStyle="light-content" />
            </SafeAreaView>
          </BlurView>
        </View>
        <SafeAreaView style={styles.safeAreaContent}>
          <FlatList
            numColumns={2}
            ListHeaderComponent={() => (
              <Text style={styles.headerText}>Welcome back</Text>
            )}
            data={data}
            renderItem={({ item }) => (
              <Card
                image={item.image}
                title={item.title}
                id={item.id}
                subtitle="test"
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={() => (
              <Text style={styles.emptyText}>No items available</Text>
            )}
          />
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // Fallback color
  },
  headerContainer: {
    width: "100%",
    height: 80,
    backgroundColor: "transparent",
  },
  blurView: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  safeAreaHeader: {
    width: "100%",
    height: "100%",
  },
  safeAreaContent: {
    flex: 1,
    marginTop: -13,
  },
  headerText: {
    fontFamily: "Cairo-Bold",
    color: "white",
    fontSize: 32,
    marginLeft: 20,
    marginTop: 10,
  },
  emptyText: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
});

export default Home;
