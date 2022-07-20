import logo from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';

import './home.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders';


function Home() {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArr = ['a','w','e','ł'];
    const specializationArr = ['w','e','b',' ','d','e','w','e','l','o','p','e','r','.'];

    useEffect(() => {
        setTimeout( () => {
           return setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return ( 
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span> 
                        <span className={`${letterClass} _12`}>i,</span> 
                        <br /> 
                        <span className={`${letterClass} _13`}>I</span> 
                        <span className={`${letterClass} _14`}>'m</span>
                        <span style={{marginRight: '25px'}}></span> 
                        <span className={`${letterClass} _15`}><p>P</p></span> 

                        {/* <img src={logo} alt="developer" /> */}
                        <AnimatedLetters 
                            letterClass={letterClass}
                            nameArr={nameArr}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters 
                            letterClass={letterClass}
                            nameArr={specializationArr}
                            idx={22}
                        />
                    </h1>
                    <h2>Frontend Developer / JavaScript Developer  </h2>
                    <Link to="/contact" className='contact-button'>CONTACT ME</Link>
                </div>
            </div>
            <Loader type="ball-zig-zag-deflect" />
        </>
     );
}

export default Home;