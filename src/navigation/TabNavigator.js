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
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: {
          justifyContent: 'center', // Centrado vertical
          alignItems: 'center',     // Centrado horizontal
        },
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

const styles = StyleSheet.create({
  tabBar: {
    height: 70, // Altura total de la barra
    
    // Ajustamos el padding para dar aire abajo pero mantener el centro
    paddingBottom: 5, // Empuja todo un poco hacia arriba (protege del borde)
    paddingTop: 5,    // Equilibra el espacio arriba para que el icono quede en medio
    
    backgroundColor: '#F49404',
    borderTopWidth: 1,
    borderTopColor: '#F49404',
  }
});

export default TabNavigator;