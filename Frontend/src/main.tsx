import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import router from './routing/routes'
import { ChakraProvider } from '@chakra-ui/react'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <ChakraProvider>
  {/* <RouterProvider router={router}></RouterProvider> */}
  <App />
</ChakraProvider>
  </React.StrictMode>,
)
