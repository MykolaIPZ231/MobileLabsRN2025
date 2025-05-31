import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import { HomeScreen } from "./screens/home";
import { ProfileScreen } from "./screens/profile";
import { GalleryScreen } from "./screens/gallery";
import { Credit } from "./components/credit";
import { Footer } from "./components/footer";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
      <View style={{ paddingTop: StatusBar.currentHeight, backgroundColor: "#000" }} />

      <Footer />

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
            tabBarIndicatorStyle: { backgroundColor: "blue" },
            tabBarLabelStyle: { margin: 0, padding: 0 },
            tabBarStyle: { backgroundColor: "#ededed", shadowColor: "transparent" },
            sceneContainerStyle: { backgroundColor: "white" },

            tabBarIcon: ({ color }) => {
              let iconName;
              switch (route.name) {
                case "Home":
                  iconName = "home";
                  break;
                case "Gallery":
                  iconName = "image";
                  break;
                case "Profile":
                  iconName = "person-fill";
                  break;
                default:
                  iconName = "question";
              }
              return <Icon name={iconName} size={20} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Gallery" component={GalleryScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>

      <Credit />
    </>
  );
}
