import { clearLocalStorage } from '../../utilities';
import { UserKey, resetUser } from '../../redux/states/user';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../router';
import { useDispatch } from 'react-redux';


function Logout() {
    const navigate = useNavigate();
    const distpatch = useDispatch();
    const logOut = () => {
        clearLocalStorage(UserKey);
        distpatch(resetUser());
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
    };

    return (
        <button onClick={logOut}>
           Log out
        </button>
    );
}

export default Logout;