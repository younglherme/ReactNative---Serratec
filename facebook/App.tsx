import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import icon from "./assets/meta.png";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} activeOpacity={0.7}>
        <Text style={styles.backArrow}>{"<"}</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Encontre sua conta</Text>
        <Text style={styles.subtitle}>Insira o número do seu celular.</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Número do celular"
          placeholderTextColor="#7e858a"
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.primaryButton} activeOpacity={0.85}>
        <Text style={styles.primaryButtonText}>Continuar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.85}>
        <Text style={styles.secondaryButtonText}>Pesquisar por email</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Image source={icon} style={styles.img} />
      </View>
    </View>
  );
};

export default App;
