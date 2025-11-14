import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import icon from "./assets/x.png";

export const App = () => {
  return (
    <View style={styles.container}>
     <Image source={icon} style={styles.image} />
    </View>
  );
};

export default App;
