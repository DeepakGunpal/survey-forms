import './App.css';
import HomePage from './components/homePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import FormPage from './components/formPage/FormPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form/:id" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
