import { Dispatch, SetStateAction, useEffect, useState } from 'react';
type Callback<T> = (value: T) => void;

function useSetThreekitHook<T>(
  callback: Callback<T>,
  delay: number = 1000
): [Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T | null>(null);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        if (value !== null) {
          callback(value);
        }
      }, delay)
    );
  }, [value]);
  //@ts-ignore
  return [setValue];
}

export default useSetThreekitHook;
