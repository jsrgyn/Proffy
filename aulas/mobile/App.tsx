import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View } from "react-native";

import Landing from "./src/pages/Landing";

import { AppLoading } from "expo";

import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function App() {
  // return (
  //   // <View style={styles.container}>
  //   //   {/* <Text>Open up App.tsx to start working on your app!</Text> */}
  //   //   <Text>Hello NLW!</Text>
  //   //   <StatusBar style="auto" />
  //   // </View>

  //   <>
  //     <Landing />
  //     <StatusBar style="auto" />
  //   </>
  // );

  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Landing />
        <StatusBar style="auto" />
      </>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
