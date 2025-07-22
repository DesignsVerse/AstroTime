'use client';

import { useEffect, useState } from 'react';

const PanchangFetcher = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchPanchang = async () => {
      try {
        const datetime = new Date().toISOString(); // or your selected date/time
        const res = await fetch(`/api/panchang?datetime=${encodeURIComponent(datetime)}&coordinates=28.6139,77.2090`);
        const json = await res.json();
        console.log('Panchang response:', json);
        setData(json);
      } catch (err) {
        console.error('Error:', err);
      }
    };

    fetchPanchang();
  }, []);

  return (
    <div>
      <h1>Panchang Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default PanchangFetcher;
