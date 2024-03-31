
import { getMorty } from '../../services';
import { useDispatch } from 'react-redux';
import { UserKey, createUser, resetUser } from '../../redux/states/user';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../../router';
import { useEffect } from 'react';
import { clearLocalStorage } from '../../utilities';
import {Roles} from '../../models';



function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();



  useEffect(() => {
    clearLocalStorage (UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);


  const login = async () => {

    try {
      const result = await getMorty();
      dispatch(createUser({...result, rol: Roles.ADMIN}));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
