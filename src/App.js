import './App.css';
import 'antd/dist/antd.css';
import Header from './Components/Header/header';
import Main from './Components/Sidemenu/sidemenu';
function App() {
  return (
    <div className='App'>
      <div id='app-body'>
        <div>
          <Header />
          <div className='margin-top'>
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
