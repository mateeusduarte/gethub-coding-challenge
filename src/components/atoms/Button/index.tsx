import { ButtonContainer } from './styles';
import { TButtonMode } from './types';

export type TButtonProps = {
  mode?: TButtonMode;
  fullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  mode = 'contained',
  fullWidth,
  onClick,
  type,
  ...rest
}: TButtonProps) {
  return (
    <ButtonContainer
      mode={mode}
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
