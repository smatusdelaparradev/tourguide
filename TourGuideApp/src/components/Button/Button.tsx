import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components/native';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button = ({ title, onPress }: ButtonProps) => {
  const theme = useTheme();
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: theme.colors.primary}]} onPress={onPress}>
      <Text style={[styles.text, { color: '#333'}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default Button;
