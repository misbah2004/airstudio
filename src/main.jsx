import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';

const  queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBoundary fallback={<div className='h-screen flex justify-center items-center'>Something went wrong</div>}>
          <QueryClientProvider client={queryClient}>
          <App />
          </QueryClientProvider>
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </StrictMode>
  </BrowserRouter>
);
``