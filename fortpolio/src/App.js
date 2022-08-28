import { BrowserRouter as Router} from 'react-router-dom'
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Home from './screens/Home'
// import Main from './screens/Main'
import classNames from 'classnames/bind';
import styles from './component/GlobalStyle/GlobalStyle.module.scss'

const cx = classNames.bind(styles)

const options = {
  timeout: 1000,
  position: positions.TOP_RIGHT,
  containerStyle: {
    
    positions:'fixed',
    top:'50px',
    right:'0'
  }
};

function App() {
  
  return (
    <Router>
      <Provider template={AlertTemplate} {...options}>
      <div className={cx('container')}>
        <Home />
      </div>
      </Provider>
    </Router>
  );
}

export default App;
