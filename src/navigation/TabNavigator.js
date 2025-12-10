import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // O 'react-native-vector-icons/Ionicons' si usas CLI


// Importamos las pantallas que irán dentro de las pestañas
import Cantante from '../screens/Cantante/Cantante.js';
import { View, Text, StyleSheet, Button } from 'react-native';
import CancionesCantante from '../screens/Cantante/CancionesCantante.js';
import CategoriasCantante from '../screens/Cantante/CategoriasCantante.js';
import RepertoriosCantante from '../screens/Cantante/RepertoriosCantante.js';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Lógica para mostrar iconos según la ruta
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'InicioCantante') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'CancionesCantante') {
            iconName = focused ? 'musical-notes' : 'musical-notes-outline';
          } else if (route.name === 'CategoriasCantante') {
            iconName = focused ? 'options' : 'options-outline';
          } else if (route.name === 'RepertoriosCantante') {
            iconName = focused ? 'list' : 'list-outline';
          } 

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // Ocultamos el header del Tab para usar el del Stack o el propio de la pantalla
      })}
    >
      <Tab.Screen 
        name="InicioCantante" 
        component={Cantante} 
        options={{ title: 'Inicio' }}
      />
      <Tab.Screen 
        name="CancionesCantante" 
        component={CancionesCantante} 
        options={{ title: 'Canciones' }}
      />
      <Tab.Screen 
        name="CategoriasCantante" 
        component={CategoriasCantante} 
        options={{ title: 'Categorias' }}
      />
      <Tab.Screen 
        name="RepertoriosCantante" 
        component={RepertoriosCantante} 
        options={{ title: 'Repertorios' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;