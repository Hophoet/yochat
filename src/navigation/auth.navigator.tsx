import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Presentation1 from '../layouts/presentation/GetStarted';
import Presentation2 from '../layouts/presentation/Presentation2';
import SignIn from '../layouts/auth/SignIn';
import SignUp from '../layouts/auth/SignUp';
import SendPasswordResetCode from '../layouts/auth/SendPasswordResetCode';
import ResetPasswordVerify from '../layouts/auth/ResetPasswordVerify';
import VerifyPasswordResetCode from '../layouts/auth/VerifyPasswordResetCode';
import SetNewPassword from '../layouts/auth/SetNewPassword';

const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Presentation1' component={Presentation1}/>
    <Stack.Screen name='Presentation2' component={Presentation2}/>
    <Stack.Screen name='SignIn' component={SignIn}/>
    <Stack.Screen name='SignUp' component={SignUp}/>
    <Stack.Screen name='SendPasswordResetCode' component={SendPasswordResetCode}/>
    <Stack.Screen name='VerifyPasswordResetCode' component={VerifyPasswordResetCode}/>
    <Stack.Screen name='ResetPasswordVerify' component={ResetPasswordVerify}/>
    <Stack.Screen name='SetNewPassword' component={SetNewPassword}/>
  </Stack.Navigator>
);
