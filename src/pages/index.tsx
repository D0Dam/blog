import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9737695122539343"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <HomepageFeatures />
    </Layout>
  );
}
