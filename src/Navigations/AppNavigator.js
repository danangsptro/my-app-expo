import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import DashboardScreen from "../Screens/DashboardScreen";
// import FeedScreen from "../Screens/FeedScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      options={{
        activeBackgroundColor: "#ffd600",
        activeTintColor: "#eee",
        inactiveBackgroundColor: "#eee",
        inactiveTintColor: "black",
      }}
    >
      {/* <Tab.Screen name="DashboardScreen " component={DashboardScreen} />
      <Tab.Screen name="FeedScreen " component={FeedScreen} /> */}

      <Tab.Screen name="LoginScreen " component={LoginScreen} />
      <Tab.Screen name="SignUpScreen " component={SignUpScreen} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
