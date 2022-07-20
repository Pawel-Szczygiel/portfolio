import { Link, NavLink } from 'react-router-dom';
import './sidebar.scss';

import { faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 


const Sidebar = () => {
    return ( 
        <>
            <div className='nav-bar'>
              
                <nav>
                    <NavLink exact="true" activeclassname='active' to='/'>
                        <FontAwesomeIcon icon={faHome} color="4d4d4d" />
                    </NavLink>
                    <NavLink exact="true" activeclassname='active' className='about-link' to='/about'>
                        <FontAwesomeIcon icon={faUser} color="4d4d4d" />
                    </NavLink>
                    <NavLink exact="true" activeclassname='active' className='contact-link' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color="4d4d4d" />
                    </NavLink>
                </nav>
                <ul>
                    <li>
                        <a href="#" target="_blank" >
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" >
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" >
                            <FontAwesomeIcon icon={faSkype} color="#4d4d4e"/>
                        </a>
                    </li>
                </ul>
            </div>
        
        </>
     );
}
 
export default Sidebar;