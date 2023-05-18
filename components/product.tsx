import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_TO_CART} from './redux/constants';
import {addToCart} from './redux/action';

const Product = (props: any) => {
  const [itemExists, setItemExists] = useState(false);
  const cartData: any[] = useSelector((state: any) => {
    return state.reducer;
  });
  const dispatch = useDispatch();

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  const removeItemFromCart = (id: number) => {
    console.log('removed');
  };

  const handleClick = (item: any) => {
    let isItemExisit = cartData.some(cart => cart.id === item.id);
    setItemExists(isItemExisit);
    if (itemExists) {
      removeItemFromCart(item.id);
    } else {
      handleAddToCart(item);
    }
  };

  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          borderBottomColor: 'orange',
          borderBottomWidth: 2,
          margin: 5,
        }}>
        <Text style={{fontSize: 24}}>{props.item.name}</Text>
        <Text style={{fontSize: 24}}>{props.item.price}</Text>
        <Text style={{fontSize: 24}}>{props.item.color}</Text>
        <Button
          onPress={() => {
            handleClick(props.item);
          }}
          title={itemExists ? 'remove item' : 'add to cart'}
        />
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
