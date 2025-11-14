import React from "react";
import{TouchableOpacity, Text} from"react-native";
import { styles } from "./styles";

interface ButtonProps {
  buttonText: string;
  buttonFunction: () => void;
}

export const Button = ({ buttonText, buttonFunction }: ButtonProps) => {
  return  <TouchableOpacity onPress={buttonFunction} style={styles.button}>
        <Text style={styles.buttonText}>
          {buttonText}
        </Text>
      </TouchableOpacity>
}