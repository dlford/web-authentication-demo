import React from 'react';
import useApi from '../../hooks/useApi';

export default function ApiStatus() {
  const { isOnline } = useApi();

  const message = isOnline ? '🟢 API is Online' : '🔴 API is Offline';

  return <p>{message}</p>;
}
