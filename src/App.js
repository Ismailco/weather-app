import './App.css';
import { Provider } from 'react-redux';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import store from './redux/store';
import HomePage from './components/Home/HomePage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
