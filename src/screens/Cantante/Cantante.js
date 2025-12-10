import { View, Text, StyleSheet, Button } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper.js';

const Cantante = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.text}>Cantante</Text>
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

export default Cantante;