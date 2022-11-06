import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/configStore'
import HomeTemplate from './templates/HomeTemplate';
import { createBrowserHistory } from 'history';
import { Route, Router, unstable_HistoryRouter as HistoryRouter,Routes,Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import ListJod from './pages/ListJod/ListJod';
import JodDetail from './pages/JodDetail/JodDetail';
import Register from './pages/Register/Register';
import UserDetail from './pages/UserDetail/UserDetail';
import TypeJod from './pages/TypeJod/TypeJod';
import Admin from './pages/Admin/Admin';
import './assets/scss/style.scss'
import Join from './pages/Join/Join';
import SingIn from './pages/Signin/SingIn';
export const history = createBrowserHistory();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='hometemplate' element={<HomeTemplate/>}>
          <Route path='listjod' element={<ListJod/>}></Route>
          <Route path='joddetail' element={<JodDetail/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='usedetail' element={<UserDetail/>}></Route>
          <Route path='typejod' element={<TypeJod/>}></Route>
          <Route path='admin' element={<Admin/>}></Route>
        </Route>
        <Route path='join' element={<Join/>}></Route>
        <Route path='singin' element={<SingIn/>}></Route>
        <Route path='*' element={<Navigate to=''/>}></Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);


