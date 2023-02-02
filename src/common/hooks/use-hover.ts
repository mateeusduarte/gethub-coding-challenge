import { useState } from 'react';

type TUseHoverReturn = {
  hover: boolean;
  hoverElement: () => void;
  hoverOutOfElement: () => void;
};

function useHover(): TUseHoverReturn {
  const [hover, setHover] = useState(false);

  const hoverElement = () => setHover(true);
  const hoverOutOfElement = () => setHover(false);

  return { hover, hoverElement, hoverOutOfElement };
}

export default useHover;
