import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import Movimento from "./components/Movimento"
import Pedometro from "./components/Pedometro"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Movimento"
          component={Movimento}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="body-outline" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Pedômetro"
          component={Pedometro}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="footsteps-outline" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}