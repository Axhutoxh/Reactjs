import {useContext} from 'react'
import { Redirect, Route } from 'react-router-dom';
import Loading from '../../components/Loading';
import FunContext from '../../store/FunContext'
import AnimatedRoute from './AnimatedRoute';

export default function AuthRoute({children,...rest}) {
const [isLoggedIn] = useContext(FunContext);



    if(isLoggedIn) return <AnimatedRoute {...rest}>
        {children}
    </AnimatedRoute>;

    return <Redirect to='/login' />;
}
