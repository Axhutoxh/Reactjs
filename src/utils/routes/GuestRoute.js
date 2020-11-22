import {useContext} from 'react'
import { Redirect, Route } from 'react-router-dom';
import Loading from '../../components/Loading';
import FunContext from '../../store/FunContext'

export default function GuestRoute(props) {
const [isLoggedIn] = useContext(FunContext);


    if(!isLoggedIn) return <Route {...props}/>;

    return <Redirect to='/' />;
}
