import React, { useContext } from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import Tabs from './navigation/tabs'
import {ThemeProvider, ThemeContext} from './themes/themes'

const App = () => {   
  const { dark } = useContext(ThemeContext);
  
  const appTheme = dark ? DarkTheme : DefaultTheme;

  return(
    <ThemeProvider>
        <NavigationContainer theme={appTheme}>
         <Tabs/>
        </NavigationContainer>
    </ThemeProvider>

  )
}

export default App;