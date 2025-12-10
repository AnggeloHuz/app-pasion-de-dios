import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StyleSheet, StatusBar, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreenWrapper = ({
  children,
  style,
  statusBarColor = "dark-content",
  statusBarBg = "transparent", // Nuevo: Color de fondo de la barra
  translucent = true, // Nuevo: Por defecto es transparente (moderno)
  edges = ["top", "bottom", "left", "right"],
}) => {

  useFocusEffect(
    useCallback(() => {
      // Configurar estilo de iconos (dark/light)
      StatusBar.setBarStyle(statusBarColor);

      // Configurar transparencia y color (Solo Android)
      if (Platform.OS === 'android') {
        StatusBar.setTranslucent(translucent);
        StatusBar.setBackgroundColor(statusBarBg);
      }
    }, [statusBarColor, statusBarBg, translucent]) // Se ejecuta si cambian estas props o el foco
  );

  return (
    <SafeAreaView style={[styles.container, style]} edges={edges}>
      <StatusBar
        barStyle={statusBarColor}
        backgroundColor={statusBarBg} // Usamos el color dinámico
        translucent={translucent} // Activamos/Desactivamos la superposición
      />
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  }
});

export default ScreenWrapper;