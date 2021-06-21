const themes = {
    dark: {
        backgroundColor: 'black',
        backgroundCard: '#25282c',
        color: 'white'
      },
     light: {
       backgroundColor: 'white',
       backgroundCard: '#fff',
       color: 'black'
     }
}

import React from 'react';
const initialState = {
   dark: false,
   theme: themes.light,
   toggle: () => {}
 }
const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
    const [dark, setDark] = React.useState(false) 

    const toggle = () => {
       setDark(!dark)
    }
    

    const theme = dark ? themes.dark : themes.light
    
    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
           {children}
        </ThemeContext.Provider>
        )
    }
    export { ThemeProvider, ThemeContext }