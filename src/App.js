import Header from './components/Header';
import Content from './components/content';
import Rouces from './components/footer';
import './App.css';

function App() {
  document.cookie = "witcher=Geralt; SameSite=None; Secure"
  return (
    <div>
    <Content />
    <Rouces />
    </div>
  );
}

export default App;
