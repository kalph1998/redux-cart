/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import Header from './components/header';
import Product from './components/product';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const products = [
    {
      id: 1,
      name: 'samsung',
      color: 'red',
      price: 300,
    },
    {
      id: 2,
      name: 'nokia',
      color: 'blue',
      price: 400,
    },
    {
      id: 3,
      name: 'apple',
      color: 'green',
      price: 800,
    },
  ];

  return (
    <SafeAreaView>
      <Header />

      {products.map(product => {
        return <Product item={product} />;
      })}
    </SafeAreaView>
  );
}

export default App;
