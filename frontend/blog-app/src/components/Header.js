import { NavLink } from 'react-router-dom';
import '../styles/header.css';


const Header = () => {


return(

    <nav className='nav-main'>
    <ul className='nav-ulist'>
    <li className='nav-li-home'><NavLink exact to='/' className='nav-a' activeClassName='nav-a-active'>Home</NavLink></li>
    <li className='nav-li-about'><NavLink exact to='/about' className='nav-a' activeClassName='nav-a-active'>About</NavLink></li>
    <li className='nav-li-create-blog'><NavLink exact to='/addBlog' className='nav-a' activeClassName='nav-a-active'>Create Blog</NavLink></li>
    </ul>
    </nav>
    

);
}


export default Header;
