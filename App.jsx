import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import fonts from './src/global/fonts'
import Navigator from './src/Navigation/Navigator'
import TabsNavigator from './src/Navigation/TabsNavigator'

const App = () => {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      {/* <Navigator /> */}
      <TabsNavigator />
    </NavigationContainer>

  )
}

export default App

/*
Home: 🏠 Home
Lista de Equipos: 🏟️ Lista de Equipos
Detalle: 📄 Detalle
Configuración: ⚙️ Configuración
Notificaciones: 🔔 Notificaciones
Perfil: 👤 Perfil
Mensajes: 💬 Mensajes
Buscar: 🔍 Buscar
Favoritos: ⭐ Favoritos
Calendario: 📅 Calendario
Ajustes: ⚖️ Ajustes
Ayuda: ❓ Ayuda
Chat en Vivo: 🎙️ Chat en Vivo
Galería de Fotos: 🖼️ Galería de Fotos
Vídeos: 📹 Vídeos
Noticias: 📰 Noticias
Eventos: 🎉 Eventos
Mapa: 🗺️ Mapa
Búsqueda de Amigos: 👫 Búsqueda de Amigos
*/
