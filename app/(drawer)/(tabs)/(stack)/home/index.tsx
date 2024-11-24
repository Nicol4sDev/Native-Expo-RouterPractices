import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/shared/CustomButton'
import { Link, router, useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation();

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer);
    }


    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>

                <CustomButton className='mb-2' onPress={() => router.push('/(drawer)/(tabs)/(stack)/products')}>Productos</CustomButton>

                <CustomButton color='secondary' className='mb-2' onPress={() => router.push('/(drawer)/(tabs)/(stack)/profile')}>Profile</CustomButton>

                <CustomButton color='tertiary' className='mb-2' onPress={() => router.push('/(drawer)/(tabs)/(stack)/settings')}>Settings</CustomButton>

                <Link href='/(drawer)/(tabs)/(stack)/products' asChild>
                    <CustomButton variant='text-only' className='mb-10'>Productos</CustomButton>
                </Link>

                <CustomButton onPress={onToggleDrawer}>Open menu</CustomButton>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen