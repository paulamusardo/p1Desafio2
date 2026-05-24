import React from "react";
import Principal from "./src/Telas/Principal";
import Italia from "./src/Telas/Italia";
import Franca from "./src/Telas/Franca";
import Suica from "./src/Telas/Suica";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        
        <Stack.Screen 
          name="Principal" 
          component={Principal}
          options={{
            title: "Tour Europeu",
            headerStyle: { backgroundColor: "#1A365D" }, // Azul Escuro
            headerTintColor: "white"
          }}
        />

        <Stack.Screen 
          name="Italia" 
          component={Italia}
          options={{
            title: "Itália",
            headerStyle: { backgroundColor: "#008C45" }, // Verde da bandeira da Itália
            headerTintColor: "white"
          }}
        />

        <Stack.Screen 
          name="Franca" 
          component={Franca}
          options={{
            title: "França",
            headerStyle: { backgroundColor: "#002395" }, // Azul da bandeira da França
            headerTintColor: "white"
          }}
        />

        <Stack.Screen 
          name="Suica" 
          component={Suica}
          options={{
            title: "Suíça",
            headerStyle: { backgroundColor: "#DA291C" }, // Vermelho da bandeira da Suíça
            headerTintColor: "white"
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}