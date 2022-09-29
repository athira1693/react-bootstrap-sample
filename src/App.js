import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Home';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
    </div>
  );
}

export default App;
