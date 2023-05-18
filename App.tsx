/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,

} from 'react-native';
import Header from './components/header';
import Product from './components/product';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Header  />

      <Product />
    </SafeAreaView>
  );
}

export default App;
