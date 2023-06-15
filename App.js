import 'react-native-gesture-handler';
import MainRoute from "./route/index";
import { useFonts } from 'expo-font';
import CustomView from './components/CustomView';


export default function App() {

  let [fontsLoaded] = useFonts({
    SpaceBold: require('./assets/SpaceGrotesk-Bold.ttf'),
    SpaceLight: require('./assets/SpaceGrotesk-Regular.ttf'),
  });


  if (!fontsLoaded) {
    return null;
  } 

  else {
    return (
      <CustomView>
        <MainRoute />
      </CustomView>
    );
  }
}