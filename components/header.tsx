import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Header = (): JSX.Element => {
  const [cartItemLength, setCartItemLength] = useState(0);
  const cartData = useSelector((state: any) => {
    return state.reducer;
  });

  useEffect(() => {
    setCartItemLength(cartData.length);
  }, [cartData]);

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          padding: 10,
          textAlign: 'right',
          backgroundColor: 'orange',
        }}>
        {cartItemLength}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
