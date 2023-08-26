import { Routes, Route } from 'react-router-dom';
import Reserve from './pages/Reserve';
// import About from './routes/about';
// import Contact from './routes/contact';

function App() {
  return (
    <div className="App">
      <h1>Hello React Router v6</h1>
      <Routes>
        <Route path="/" element={<Reserve />} />
      </Routes>
    </div>
  );
}

export default App;