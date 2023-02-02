import { ErrorText, InputContainer, NativeInput } from './styles';

type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

function Input({ error, ...props }: TInputProps) {
  return (
    <InputContainer>
      <NativeInput {...props} />
      {!!error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
}

export default Input;
