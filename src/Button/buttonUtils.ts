import { CSSObject } from "styled-components";

export type ButtonProps = {
  onClick: () => void;
}

export const getButtonStyles = (): CSSObject => {
  return {
    backgroundColor: '#09f',
    color: '#fff',
    border: 'none',
    padding: '12px 24px'
  }
}