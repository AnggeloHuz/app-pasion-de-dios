import { View, Text, StyleSheet, Button, Image, ScrollView, SectionList, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper.js';
import { Ionicons } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// 1. Añadimos un ID único a cada sección para un mejor manejo del estado
const DATA = [
  {
    id: 'sec1',
    title: 'Canciones',
    data: [
      { name: 'Tener un listado de todas tus canciones', iconName: 'playlist-music-outline', color: '#ADD8E6' },
      { name: 'Buscar canciones fácilmente', iconName: 'clipboard-text-search-outline', color: '#ADD8E6' },
      { name: 'Letra de cada canción completa', iconName: 'format-letter-case', color: '#ADD8E6' },
      { name: 'Agregar nuevas canciones con su letra', iconName: 'music-note-plus', color: '#32CD32' },
      { name: 'Agregar categorias a las canciones', iconName: 'flag-variant-plus', color: '#32CD32' },
      { name: 'Editar el nombre, letra, categoria o detalles de una canción', iconName: 'circle-edit-outline', color: '#FFD700' },
      { name: 'Compartir tus canciones con amigos', iconName: 'share-variant-outline', color: '#ff8000' },
      { name: 'Eliminar canciones', iconName: 'delete', color: '#FF6347' },
    ],
  },
  {
    id: 'sec2',
    title: 'Categorías',
    data: [
      { name: 'Listar canciones por una o varias categorias', iconName: 'playlist-music-outline', color: '#ADD8E6' }, // Oro
      { name: 'Agregar nuevas categorías', iconName: 'plus-thick', color: '#32CD32' }, // Oro
      { name: 'Editar categorías', iconName: 'circle-edit-outline', color: '#FFD700' }, // Orquídea
      { name: 'Compartir fichero de categorías', iconName: 'share-variant-outline', color: '#ff8000' }, // Orquídea
      { name: 'Eliminar categorías', iconName: 'delete', color: '#FF6347' }, // Carmesí
    ],
  },
  {
    id: 'sec3',
    title: 'Repertorios',
    data: [
      { name: 'Listar todos mis repertorios personalizados', iconName: 'playlist-music-outline', color: '#ADD8E6' }, // Oro
      { name: 'Buscar repertorio específico', iconName: 'text-search', color: '#ADD8E6' }, // Oro
      { name: 'Crear repertorios personalizados', iconName: 'playlist-plus', color: '#32CD32' }, // Oro
      { name: 'Editar nombre y canciones de los repertorios', iconName: 'circle-edit-outline', color: '#FFD700' }, // Orquídea
      { name: 'Compartir mi repertorio con amigos', iconName: 'share-variant-outline', color: '#ff8000' }, // Oro
      { name: 'Eliminar repertorios', iconName: 'delete', color: '#FF6347' }, // Carmesí
    ],
  },
  // ... más secciones
];

const Cantante = () => {
  const tabBarHeight = useBottomTabBarHeight();

  // Estado para manejar qué secciones están colapsadas (ocultas)
  // Inicialmente, ninguna sección está oculta, el array está vacío.
  const [collapsedSections, setCollapsedSections] = useState([]);

  // Función que alterna el estado de colapso de una sección por su ID
  const toggleCollapse = (sectionId) => {
    setCollapsedSections(prevCollapsed => {
      if (prevCollapsed.includes(sectionId)) {
        // Si ya estaba colapsada, la removemos del array (la mostramos)
        return prevCollapsed.filter(id => id !== sectionId);
      } else {
        // Si no estaba colapsada, la añadimos al array (la ocultamos)
        return [...prevCollapsed, sectionId];
      }
    });
  };

  // Función para renderizar cada elemento individual (el contenido)
  const renderItem = ({ item, section }) => {
    // Comprobamos si la sección actual está en la lista de colapsadas
    if (collapsedSections.includes(section.id)) {
      return null; // No renderizamos nada si está oculta
    }

    // Función de ayuda para convertir HEX a RGBA, necesaria para la opacidad
    const hexToRgb = (hex) => {
      const bigint = parseInt(hex.substring(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `${r}, ${g}, ${b}`;
    };
    const backgroundColorWithOpacity = `rgba(${hexToRgb(item.color)}, 0.2)`; 
    
    // Ahora 'item' es un objeto { name, iconName }
    return (
      <View className="mx-4 mb-2 rounded-md py-2 px-4 flex flex-row items-center">
        {/* Usamos el icono que viene del array */}
        <MaterialCommunityIcons
          style={{ backgroundColor: backgroundColorWithOpacity }}
          className={`mr-2 rounded-full p-1`}
          name={item.iconName}
          size={24}
          color={item.color}
        />
        <Text className="text-base">{item.name}</Text>
      </View>
    );
  };

  // Función para renderizar el encabezado de cada sección
  const renderSectionHeader = ({ section }) => {
    const isCollapsed = collapsedSections.includes(section.id);
    const toggleIcon = isCollapsed ? '▼' : '▲'; // Icono visual para el estado

    return (
      // Usamos TouchableOpacity para hacer el encabezado clickeable
      <TouchableOpacity
        className="mx-4 flex flex-row justify-between mb-2 py-2 bg-white" 
        onPress={() => toggleCollapse(section.id)}
      >
        <Text className="text-lg italic font-medium rounded-md">{section.title}</Text>
        <Text style={styles.toggleIcon}>{toggleIcon}</Text>
      </TouchableOpacity>
    );
  };

  const HeaderContent = () => (
    <View className="w-full">
      <Image
        source={require("../../../assets/modo-cantante/banner.jpg")}
        className="w-full"
        resizeMode="cover"
      />
      <View className="px-4 py-8">
        <Text className="font-bold text-2xl">
          Herramientas Disponibles:
        </Text>
      </View>
    </View>
  );

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

        <SectionList
          className="mt-[5vh]"
          sections={DATA} // Datos con IDs
          renderItem={renderItem} // Lógica de ocultar/mostrar
          renderSectionHeader={renderSectionHeader} // Lógica del botón clickeable
          keyExtractor={(item, index) => item + index}
          stickySectionHeadersEnabled={true}
          ListHeaderComponent={HeaderContent} // <-- Agrega contenido estático aquí
          ListFooterComponent={<View className="pb-8" />}
        />
      </View>
    </ScreenWrapper>
  );
};


  const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 4, // Espacio reducido ya que los headers tienen margen
    borderRadius: 5,
  },
  header: {
    backgroundColor: '#fff', 
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10, // Separación entre secciones
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  toggleIcon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
});


export default Cantante;