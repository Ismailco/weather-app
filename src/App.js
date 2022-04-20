import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import store from './redux/store';
import HomePage from './components/Home/HomePage';

function App() {
  return (
    <BrowserRouter className="App">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
