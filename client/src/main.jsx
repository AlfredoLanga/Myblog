
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import App from './App.jsx'
import { store, persistor } from './redux/store.js';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>,
)



