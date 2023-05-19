import {Button} from 'react-native';
import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './header';
import Product from './product';

const ProductWrapper = ({navigation}) => {
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
      <Button
        title="go to user list"
        onPress={() => {
          navigation.navigate('User');
        }}
      />
      <Header />

      {products.map(product => {
        return <Product item={product} />;
      })}
    </SafeAreaView>
  );
};

export default ProductWrapper;
