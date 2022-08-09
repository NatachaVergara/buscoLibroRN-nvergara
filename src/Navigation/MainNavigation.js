import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector } from 'react-redux';

const MainNavigation = () => {
    const userId = useSelector(store => store.auth.userId)

    return (
        <NavigationContainer>
            {userId ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

export default MainNavigation