import { Tabs } from "expo-router";
import { color } from "@/lib/Colors";
import Entypo from "@expo/vector-icons/Entypo";
const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: color.bg,
          borderTopColor: color.gray,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          lazy: true,
       
          tabBarIcon: ({ focused }) => (
            <>
              <Entypo
                name="home"
                size={32}
                color={focused ? color.white : color.gray}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="like"
        options={{
          lazy: true,
          tabBarIcon: ({ focused }) => (
            <>
              <Entypo
                name="heart"
                size={32}
                color={focused ? color.white : color.gray}
              />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
