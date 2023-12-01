import styled from "styled-components"
import { ButtonProps, getButtonStyles } from "./buttonUtils"

const StyledButton = styled.button(() => getButtonStyles())

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton onClick={props.onClick}>Hi from Web</StyledButton>
  )
}