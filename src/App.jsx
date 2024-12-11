import './App.css'
import Body from "./components/Body.jsx";
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';

export default function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  )
}