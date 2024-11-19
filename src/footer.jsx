import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import LG from './assets/LOGO.svg'
import './App.css';


export default function Footer(){
    return(
        <div className="flex flex-col justify-center bg-white" id='CONTS'>
            <div className="justify-center gap-3 text-black" id='footerInfo'>
                <button className='hover:text-orange-500'>QTC</button>
                <button className='hover:text-orange-500'>About us</button>
                <button className='hover:text-orange-500'>Contacts</button>
                <button className='hover:text-orange-500'>Faqs</button>
                <button className='hover:text-orange-500'>Privacy Policy</button>
                <button className='hover:text-orange-500'>Terms of use</button>
            </div>
            <br /><br />
            <hr />
            <div className="flex flex-row justify-between text-black p-3 m-3">
                <div>
                    <img src={LG} alt="LOGO" />
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