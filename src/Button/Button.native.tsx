import React from 'react';
import { Button as RNButton } from 'react-native';
import styled from "styled-components"
import { ButtonProps, getButtonStyles } from "./buttonUtils"

const StyledButton = styled(RNButton)(() => getButtonStyles())

export const Button = (props: ButtonProps): React.ReactElement => {
  return (
    <StyledButton onPress={props.onClick} title="Hi from React Native" />
  )
}