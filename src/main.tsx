import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

const colors = {
  color: {
    100: '#F8AD15',
    200: '#919499',
    300: '#034B5E',
    400: '#C4C4C4',
    500: '#298097',
    600: '#98A0B2',
    700: '#919499',
    800: '#B3B3B3',
    900: '#000000',
    1000: '#ADADAD',
    1100: '#F8F8F8',
    1200: '#034B5E',
    1300: '#C4C4C4',
    1400: '#474747',
    1500: '#011258',
    1600: '#D70000',
    1700: '#FF5858',
    1800: '#298097'
   
  }

}
const theme = extendTheme({ colors })
ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <ChakraProvider theme = {theme}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
  ,
)
