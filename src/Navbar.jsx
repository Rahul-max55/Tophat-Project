import React ,{useState , useContext , useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import Context from './cardContext/createContext';


const Navbar = () => {


    const [count, setCount] = useState(0)

    const value = useContext(Context);
    const { state } = value
    const { cartProduct } = state;

    useEffect(() => {
        setCount(cartProduct.length);
    }, [cartProduct.length])
    


    return (
        <header>
            <div className="navbar">
                <nav>
                    <ul>
                        <li> <NavLink to="/"> Home </NavLink></li>
                        <li> <NavLink to="/services" > services </NavLink></li>
                        <li> <NavLink to="/cart" > Cart </NavLink></li>
                        <p>{count}</p>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar