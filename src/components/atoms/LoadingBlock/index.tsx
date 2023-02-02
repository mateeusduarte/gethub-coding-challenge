import React from 'react';

import { LoadingSVG } from './styles';
import theme from '@/common/theme';

export type LoadingBlockProps = {
  size?: number;
};

const LoadingBlock: React.FC<LoadingBlockProps> = ({ size = 30 }) => {
  return (
    <LoadingSVG
      version="1.1"
      style={{ width: size, height: size }}
      xmlns="http://www.w3.org/2000/svg"
      width="100px"
      height="100px"
      viewBox="0 0 40 40"
      enableBackground="new 0 0 40 40"
    >
      <path
        opacity="1.0"
        fill={theme.grayScale.gray100}
        d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,
  14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,
  5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,
  5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,
  26.541,26.626,31.749,20.201,31.749z"
      />
      <path
        fill={theme.palette.primary.default}
        d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
  C22.32,8.481,24.301,9.057,26.013,10.047z"
      />
    </LoadingSVG>
  );
};

export default LoadingBlock;
