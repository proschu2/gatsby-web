import { useState, useEffect } from 'react';

const useMounted = (delay = 100) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return isMounted;
};

export default useMounted;
