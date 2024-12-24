import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Slide = styled(View)`
  width: ${width}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  justify-content: flex-start;
  align-items: center;
  margin-top: 90px;
`;

export const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  height: 80px;
`;

export const OptionsContainer = styled(View)<{ optionsCount: number }>`
  flex-direction: row;
  flex-wrap: ${({ optionsCount }) => (optionsCount > 3 ? 'wrap' : 'nowrap')};
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.lg}px;
`;

export const OptionButtonContainer = styled(TouchableOpacity)<{ optionsCount: number }>`
  width: ${({ optionsCount }) => (optionsCount > 3 ? '45%' : '30%')};
  height: 120px;
  justify-content: center;
  align-items: center;
  background-color: #FFD700;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  margin-right: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const OptionText = styled(Text)`
  font-size: 18px;
  color: #000;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;