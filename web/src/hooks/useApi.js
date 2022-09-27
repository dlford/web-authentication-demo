import { useState, useEffect } from 'react';

export default function useApi() {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    fetch('/api/healthcheck')
      .then((res) => res.json())
      .then((res) => setIsOnline(!!res?.success))
      .catch(() => setIsOnline(false));
  }, []);

  return {
    isOnline,
  };
}
