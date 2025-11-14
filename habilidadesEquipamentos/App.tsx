import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import { styles } from "./styles";
import icon from './assets/CircleIcon.png';
import { Button } from "./src/components/Button";

const App = () => {
  const [newSkill, setNewSkill] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);

  function addSkill() {
    setSkills(oldSkills => [...oldSkills, newSkill]);
  }

  return <View style={styles.container}>
    <Text style={styles.title}>
      Habilidades
    </Text>
    <TextInput
      style={styles.input}
      value={newSkill}
      onChangeText={text => setNewSkill(text)}
    />
   <Button 
    buttonFunction={addSkill}
    buttonText="Adicionar Skill"
   />
    <FlatList
      data={skills}
      renderItem={({ item }) =>
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkill}>
          <Image
            source={icon}
            style={styles.image}
          />
          <Text style={styles.textSkill}>
            { item }
          </Text>
        </TouchableOpacity>
      }
    />
  </View>
};

export default App;
