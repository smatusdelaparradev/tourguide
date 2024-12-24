import React from 'react';
import { FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, OptionButtonContainer, OptionText, OptionsContainer, Slide, Title } from './OnboardingStyles';
import { OnboardingQuestion } from '../../types/entities/OnboardingQuestion';
import { useOnboardingLogic } from './hooks/useOnboardingLogic';
import onboardingQuestions from './data/OnboardingQuestions';

const OnboardingScreen = () => {
  const { currentStep, answers, flatListRef, handleOptionPress } = useOnboardingLogic(onboardingQuestions);
  
  const renderStep = ({ item, index }: { item: OnboardingQuestion, index: number }) => (
    <Slide>
      <Title>{item.question}</Title>
      <OptionsContainer optionsCount={item.options.length}>
        {item.options.map((opt, i) => (
          <OptionButtonContainer optionsCount={item.options.length}
            key={i}
            onPress={() => handleOptionPress(opt.text)}
          >
            <Ionicons name={opt.icon} size={24} color="#000" />
            <OptionText>{opt.text}</OptionText>
          </OptionButtonContainer>
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
        renderItem={renderStep}
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
