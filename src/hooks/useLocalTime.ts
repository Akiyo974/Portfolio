import { useState, useEffect } from 'react';

export const useLocalTime = () => {
  const [time, setTime] = useState(getFormattedTime());

  function getFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return time;
};