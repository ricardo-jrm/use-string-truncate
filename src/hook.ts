import { Dispatch, SetStateAction, useState } from 'react';

/**
 * Exported Hook
 */
export const useHook = <T>(
  initialValue: T,
): (T | Dispatch<SetStateAction<T>>)[] => {
  const [state, stateSet] = useState<T>(initialValue);
  return [state, stateSet];
};
