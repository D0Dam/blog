import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home(): JSX.Element {
  useEffect(() => {
    window.location.href = 'https://d0dam.xyz/blog';
  }, []);

  return (
    <main>
      <HomepageFeatures />
    </main>
  );
}
