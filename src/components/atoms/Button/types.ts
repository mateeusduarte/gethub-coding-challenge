import { TButtonProps } from './index';
export type TButtonMode = 'contained' | 'outlined' | 'text';

export type TButtonContainerProps = Pick<TButtonProps, 'mode' | 'fullWidth'>;
