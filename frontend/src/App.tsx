import { ConnectedRouter } from 'connected-react-router';
import { Provider, useSelector } from 'react-redux';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
// import '/index.css'

import {
  configureStore,
  getHistory,
} from 'src/modules/store';
import RoutesComponent from 'src/view/shared/routes/RoutesComponent';

const store = configureStore();

const App = (props) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={getHistory()}>
        <AppInnerComponent />
      </ConnectedRouter>
    </Provider>
  );
};

const AppInnerComponent = (props) => {
  const isDarkMode = useSelector(
    layoutSelectors.selectDarkMode,
  );
  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <RoutesComponent />
    </div>
  );
};

export default App;
