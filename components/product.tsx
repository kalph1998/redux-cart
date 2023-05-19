import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_TO_CART} from './redux/constants';
import {addToCart, removeFromCart} from './redux/action';

const Product = (props: any) => {
  const [itemExists, setItemExists] = useState(false);
  const cartData: any[] = useSelector((state: any) => {
    return state.reducer;
  });
  const dispatch = useDispatch();

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  const removeItemFromCart = () => {
    dispatch(removeFromCart(props.item.id));
  };

  useEffect(() => {
    let reuslt = cartData.filter(item => {
      return item.id === props.item.id;
    });
    if (reuslt.length) {
      setItemExists(true);
    } else {
      setItemExists(false);
    }
  }, [cartData]);

  const handleClick = (item: any) => {
    handleAddToCart(item);
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

        {itemExists ? (
          <Button
            onPress={() => {
              removeItemFromCart();
            }}
            title="remove from cart"
          />
        ) : (
          <Button
            onPress={() => {
              handleClick(props.item);
            }}
            title="add to cart"
          />
        )}
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
