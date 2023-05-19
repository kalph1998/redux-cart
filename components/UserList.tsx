import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserList} from './redux/action';

const UserList = () => {
  const dispatch = useDispatch();
  const userList: any[] = useSelector((state: any) => {
    return state;
  });

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  useEffect(() => {
    console.warn(userList);
  }, [userList]);

  return (
    <View>
      <Text>UserList Screen</Text>
    </View>
  );
};

export default UserList;
