
import './App.css';
import Club from './components/Club/Club';
import Header from './components/Header/Header';
// import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
      
       <Header></Header>
       <Club></Club>
       <Blog></Blog>
    </div>
  );
}

export default App;
