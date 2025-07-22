'use client';

import React, { useEffect, useState } from 'react';

const PanchangFetcher = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchPanchang = async () => {
      try {
        const response = await fetch('/api/'); // Defaults to today's date & Delhi
        const json = await response.json();
        console.log('Panchang Data:', json);
        setData(json);
      } catch (error) {
        console.error('Error fetching Panchang:', error);
      }
    };

    fetchPanchang();
  }, []);

  return (
    <div>
      <h2>Panchang API Raw Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default PanchangFetcher;
