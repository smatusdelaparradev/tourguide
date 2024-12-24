import { useState, useRef } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types/navigation';
import { OnboardingQuestion } from '../../../types/entities/OnboardingQuestion';

export const useOnboardingLogic = (questions: OnboardingQuestion[]) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const flatListRef = useRef<FlatList<any>>(null);

  const handleOptionPress = (option: string) => {
    setAnswers(prev => ({ ...prev, [currentStep]: option }));

    if (currentStep < questions.length - 1) {
      const nextIndex = currentStep + 1;
      setCurrentStep(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    } else {
      navigation.navigate('Main');
    }
  };

  return {
    currentStep,
    answers,
    flatListRef,
    handleOptionPress,
  };
};
