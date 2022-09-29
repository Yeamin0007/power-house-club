
import './App.css';
import Club from './components/Club/Club';
import Header from './components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      
       <Header></Header>
       <Club></Club>
    </div>
  );
}

export default App;
