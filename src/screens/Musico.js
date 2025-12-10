import { View, Text, StyleSheet, Button } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper.js';

const Musico = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.text}>Musico</Text>
        <Text>Aquí irían las opciones del modo...</Text>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: '',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});

export default Musico;