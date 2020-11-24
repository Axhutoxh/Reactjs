import {useContext} from 'react'
import { Redirect, Route } from 'react-router-dom';
import FunContext from '../../store/FunContext'
import AnimatedRoute from './AnimatedRoute';

export default function GuestRoute({children,...rest}) {
const [isLoggedIn] = useContext(FunContext);


    if(!isLoggedIn) return <AnimatedRoute {...rest}>
        {children}
    </AnimatedRoute>;

    return <Redirect to='/' />;
}
