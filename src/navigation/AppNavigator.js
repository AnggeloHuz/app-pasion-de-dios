import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Importamos el TabNavigator en lugar de HomeScreen directo
import TabNavigator from './TabNavigator.js'; 
import SelectMode from '../screens/SelectMode.js';
import Musico from '../screens/Musico.js';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Seleccion">
        <Stack.Screen 
          name="Seleccion" 
          component={SelectMode} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Cantante" 
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Musico" 
          component={Musico} 
          options={{ headerShown: false }} 
        />
        {/*{ La pantalla principal ahora contiene los TABS.
           Ponemos headerShown: false porque los tabs ya tienen su propia barra arriba 
           o queremos controlarlo dentro.
        }
        <Stack.Screen 
          name="Principal" 
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />

        { La pantalla Detalles se queda en el Stack.
           Esto significa que cuando navegues a ella, TAPARÁ los tabs.
        }
        <Stack.Screen 
          name="Detalles" 
          component={DetailsScreen} 
          options={{ headerShown: false }}
        /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;