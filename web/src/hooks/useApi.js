import { useState, useEffect } from 'react';
import { API_URL } from '../constants';

export default function useApi() {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    fetch(`${API_URL}/healthcheck`)
      .then((res) => res.json())
      .then((res) => setIsOnline(!!res?.success))
      .catch(() => setIsOnline(false));
  }, []);

  return {
    isOnline,
  };
}
