import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { styled } from '../../theme/styled';
import { OnboardingQuestion } from '../../types/entities/OnboardingQuestion';
import onboardingQuestions from './OnboardingQuestions';
import { RootStackParamList } from '../../types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

const { width } = Dimensions.get('window');

const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Slide = styled(View)`
  width: ${width}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  justify-content: center;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

const OptionsContainer = styled(View)`
  margin-top: ${({ theme }) => theme.spacing.lg}px;
`;

const OptionButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  background-color: #FFD700;  /* Fondo amarillo */
  padding: ${({ theme }) => theme.spacing.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
`;

const OptionText = styled(Text)`
  font-size: 16px;
  margin-left: ${({ theme }) => theme.spacing.md}px;
  color: #000; /* Texto negro para contraste sobre amarillo */
`;


const OnboardingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [currentStep, setCurrentStep] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);

  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleOptionPress = (option: string) => {
    setAnswers(prev => ({ ...prev, [currentStep]: option }));

    if (currentStep < onboardingQuestions.length - 1) {
      const nextIndex = currentStep + 1;
      setCurrentStep(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    } else {
      navigation.navigate('Main');
    }
  };

  const renderItem = ({ item, index }: { item: OnboardingQuestion, index: number }) => (
    <Slide>
      <Title>{item.question}</Title>
      <OptionsContainer>
        {item.options.map((opt, i) => (
          <OptionButton
            key={i}
            onPress={() => handleOptionPress(opt.text)}
          >
            <Ionicons name={opt.icon} size={24} color="#000" />
            <OptionText>{opt.text}</OptionText>
          </OptionButton>
        ))}
      </OptionsContainer>
    </Slide>
  );

  return (
    <Container>
      <FlatList
        ref={flatListRef}
        data={onboardingQuestions}
        keyExtractor={(_, idx) => String(idx)}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        scrollEnabled={false} 
        showsHorizontalScrollIndicator={false}
        extraData={answers}
      />
    </Container>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  selectedOption: {
    backgroundColor: '#E3F2FD'
  }
});
