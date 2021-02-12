// router 
import Routes from './router';
//store
import store from './store';
import { StoreProvider } from 'easy-peasy'
import { BrowserRouter } from 'react-router-dom';
// styles 
import './styles/transitions/index.css';

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <div style={{position: "relative"}}>
          <Routes />
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
