import React from 'react'
import { router, Stack, useNavigation } from 'expo-router'
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const StackLayout = () => {
    
    const navigation = useNavigation();

    const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
        if (canGoBack){
            router.back();
            return;
        }

        navigation.dispatch(DrawerActions.toggleDrawer);
    }

  return (
    <Stack
        screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
                backgroundColor: 'white'
            },
            headerLeft: ({tintColor, canGoBack}) => <Ionicons 
            className='mr-5'
            name={canGoBack ? 'arrow-back-outline'  : 'grid-outline'} 
            size={20} 
            onPress={() => onHeaderLeftClick(canGoBack)}/> 
        }}
    >
        <Stack.Screen
            name='home/index'
            options={{
                title: 'Home Screen',
                animation: 'ios_from_right'
            }}
        />
        <Stack.Screen
            name='products/index'
            options={{
                title: 'Products',
                animation: 'ios_from_left'

            }}
        />
        <Stack.Screen
            name='profile/index'
            options={{
                title: 'Profile'
            }}
        />
        <Stack.Screen
            name='settings/index'
            options={{
                title: 'Settings'
            }}
        />
    </Stack>
  )
}

export default StackLayout