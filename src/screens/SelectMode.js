import { View, Text, StyleSheet, Button } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper.js';

const SelectMode = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.text}>Selecciona el modo</Text>
        <Text>Aquí irían las opciones de modo...</Text>
        <Button
          title="Modo Cantante"
          // Usamos navigation.navigate con el nombre de la ruta definido abajo
          onPress={() => navigation.navigate("Cantante")}
        />
        <Button
          title="Modo Musico"
          // Usamos navigation.navigate con el nombre de la ruta definido abajo
          onPress={() => navigation.navigate("Musico")}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});

export default SelectMode;