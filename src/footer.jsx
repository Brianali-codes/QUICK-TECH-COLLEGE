import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import LG from './assets/zzz.png'
import './App.css';
import { Link } from 'react-router-dom';


export default function Footer(){
    return(
        <div className="flex flex-col justify-center p-1" id='CONTS'>
            <br />

            <div className="justify-center items-center gap-3 text-black" id='footerInfo'>
                <a href="#ABTUS"><button className='hover:text-orange-500'>About us</button></a>
                <Link to="/contact"><button className='hover:text-orange-500'>Contacts</button></Link>
                <a href="https://www.termsfeed.com/live/6615406e-351e-4fa0-8bdf-fa3ae04f7007" target='_blank'><button className='hover:text-orange-500'>Privacy Policy</button></a>
                <a href="https://www.termsfeed.com/live/4b4d1b5d-f0ce-4fa4-9480-e74690395ec2" target='_blank'><button className='hover:text-orange-500'>Terms of use</button></a>
            </div>
            <br /><br />
            <hr />
            <div className="flex flex-row justify-between text-black p-3 m-3">
                <div>
                    <img src={LG} alt="LOGO" className='Logo' />
                </div>
                <div className='gap-3 flex flex-row'>
                    <FontAwesomeIcon icon={faInstagram} size="2x" className='hover:text-orange-500 cursor-pointer'/>
                    <FontAwesomeIcon icon={faFacebook} size="2x" className='hover:text-orange-500 cursor-pointer'/>
                    <FontAwesomeIcon icon={faTwitter} size="2x" className='hover:text-orange-500 cursor-pointer'/>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className='hover:text-orange-500 cursor-pointer'/>
                </div>
                
            </div>
            <div className='text-black text-center'>
                    <p>Copyright © 2021. All rights reserved</p>
            </div>

        </div>
    )
}