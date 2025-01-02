import styled from 'styled-components/native';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled(View)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md}px;
  justify-content: center;
`;

export const Title = styled(Text)`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  text-align: center;
`;

export const WelcomeMessage = styled(Text)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const ItineraryContainer = styled(Animated.View)`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing.md}px;
`;