import { useEffect } from 'react';


export const useClickAway = (ref: HTMLElement, onClickAway: () => void) => {
    
  const onAway = (e: MouseEvent | PointerEvent | TouchEvent) => {    
    if (ref && !ref.contains(e.target as Element)) onClickAway();
  };
  const events: ('mouseup' | 'pointerup' | 'touchend')[] = ['mouseup', 'pointerup', 'touchend'];
  const addEventListeners = () => events.forEach(event => document.addEventListener(event, onAway));
  const removeEventListeners = () => events.forEach(event => document.removeEventListener(event, onAway));
  useEffect(() => {
    if (!ref) return;
    else addEventListeners();
    return removeEventListeners;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
};