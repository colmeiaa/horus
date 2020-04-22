import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator({
    Login: Login,
});


import Login from './pages/login/login';
import Settings from './pages/settings/settings'
import Home from './pages/home/home';


// export default function Routes(){
//     return(
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Login" component={Login} />
//                 <Stack.Screen name="Home" component={Home} />
//                 <Stack.Screen name="Settings" component={Settings} />
//             </Stack.Navigator>
//       </NavigationContainer>
//     );
// }
