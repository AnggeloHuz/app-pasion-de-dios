import React from 'react'; // No olvides importar React
import { View, Text, StyleSheet, Button, Image, Dimensions, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper.js';

const { width } = Dimensions.get("window");

const SelectMode = ({ navigation }) => {
  const shadowStyle = {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  };

  return (
    <ScreenWrapper statusBarBg="#F49404" statusBarColor="#fff">
      <View className="flex-1 bg-white">
        <Image
          source={require("../../assets/VectorA.png")}
          className="w-full"
          resizeMode="stretch"
        />

        {/* 2. EL CONTENIDO: En su propia caja centrada */}
        <View className="flex-1 items-center justify-center px-5">
          <Text className="text-3xl font-medium italic ">App Musical</Text>
          <Image
            source={require("../../assets/logoapp.png")}
            className="w-64 h-64"
            resizeMode="stretch"
          />

          <TouchableOpacity
            className="w-full bg-amarillo p-4 rounded-xl mb-6 items-center shadow-md"
            style={shadowStyle}
            onPress={() => navigation.navigate("Cantante")}
          >
            <Text className="text-white font-bold text-lg">
              🎤 Modo Cantante
            </Text>
          </TouchableOpacity>

          {/* Botón 2: Modo Músico (Estilo Bordeado/Outline) */}
          <TouchableOpacity
            className="w-full bg-amarillo p-4 rounded-xl mb-6 items-center"
            style={shadowStyle}
            onPress={() => navigation.navigate("Musico")}
          >
            <Text className="text-white font-bold text-lg">🎸 Modo Músico</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require("../../assets/VectorB.png")}
          className="w-full"
          resizeMode="stretch"
        />
      </View>
    </ScreenWrapper>
  );
};

export default SelectMode;