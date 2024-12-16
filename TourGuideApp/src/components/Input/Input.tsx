import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components/native';

type InputProps = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const Input = ({ label, value, onChangeText, placeholder }: InputProps) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, {color: theme.colors.textSecondary}]}>{label}</Text>}
      <TextInput
        style={[styles.input, { borderColor: theme.colors.secondary }]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16
  },
  label: {
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    fontSize: 16
  }
});

export default Input;
