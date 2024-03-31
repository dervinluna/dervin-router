import './App.css'
//import { Dashboard } from './pages/Dashboard';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from './router';
import { AuthGuard, RolGuard } from './guards';
import { RoutesWithNotFound } from './utilities';
import { Suspense, lazy } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Logout } from './components/Logout';
import { Roles } from './models';
import Dashboard from './pages/Private/Dashboard/Dashboard';


const Login = lazy(() => import('./pages/Login/Login'));
const Private = lazy(() => import('./pages/Private/Private'));

function App() {

  return (
    <div className="App">
      <Suspense fallback={<>Cargando..</>}>
        <Provider store={store}>
          <BrowserRouter>
            <Logout />
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
              <Route element={<RolGuard rol={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              </Route>

            </RoutesWithNotFound>
          </BrowserRouter>

        </Provider>
      </ Suspense>
    </div>
  );
}

export default App
