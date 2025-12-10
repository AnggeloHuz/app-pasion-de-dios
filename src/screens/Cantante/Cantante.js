import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper.js';
import { Ionicons } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const Cantante = () => {
  const tabBarHeight = useBottomTabBarHeight();
  
  return (
    <ScreenWrapper statusBarBg="#F3F4F6">
      <View className="flex-1 bg-white relative">
        <View className="w-full absolute h-[5vh] flex flex-row items-center justify-between px-4 bg-gray-100 border-b-2 border-naranja">
          <Image
            source={require("../../../assets/logoapp.png")}
            className="w-10 h-10"
            resizeMode="stretch"
          />
          <Text className="w-auto text-lg flex flex-row items-center">
            <Ionicons name={"home"} size={16} color={"#000"} /> Inicio
          </Text>
        </View>

        <ScrollView contentContainerStyle={{ 
          paddingBottom: tabBarHeight
        }} className="p-4  mt-[5vh]">
          <View>
            <Text className="font-bold text-xl mb-2.5">Cantante</Text>
            <Text>Aquí irían las opciones del modo...</Text>
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default Cantante;