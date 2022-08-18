import './App.css';
import Auth from './components/Auth';
import Home from './components/Home';
import Profile from './components/Profile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/auth/kakao/callback" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
