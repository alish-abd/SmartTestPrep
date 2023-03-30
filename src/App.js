
import './App.css';
import AppRoutes from './router/AppRoutes';
import {Provider} from "react-redux";
import { history } from './services/history';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

// import { unstable_HistoryRouter as BrowserRouter } from "react-router-dom/dist";

function App() {
  return (
    <div className="App">
     <Provider store={store}>
				<BrowserRouter history={history}>
					<AppRoutes />
				</BrowserRouter>
			</Provider>
    </div>
  );
}

export default App;
