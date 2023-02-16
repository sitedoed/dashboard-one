import React from 'react';
import Layout from '../components/Layout';
import CardGrid from '../components/CardGrid';
import GeoChart from '../components/charts/GeoChart';


export default function Home() {
  return (
    <Layout>
      <CardGrid />
      <GeoChart />
    </Layout>
  )
}
