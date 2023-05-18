import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TokenProvider from './context/tokenContext.tsx'
import { BrowserRouter } from 'react-router-dom';
import { apiClientFactory } from './services/ApiClientFactory.tsx'
import { clientInstance } from './services/AxiosClient.tsx'
import ServiceFactory from './services/ServiceFactory.tsx'
import DependencyProvider from './context/dependencyContext.tsx'

const apiClient = apiClientFactory(clientInstance)
const services = ServiceFactory(apiClient)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <DependencyProvider services={services}>
    <TokenProvider>
        <App />
      </TokenProvider>
    </DependencyProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
