import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
        <div className="flex flex-col justify-center bg-white" >
            <div className="flex flex-row justify-center gap-5 text-black">
                <button className='hover:text-orange-500'>QTC</button>
                <button className='hover:text-orange-500'>About us</button>
                <button className='hover:text-orange-500'>Contacts</button>
                <button className='hover:text-orange-500'>Faqs</button>
                <button className='hover:text-orange-500'>Privacy Policy</button>
            </div>
            <div className="flex flex-row justify-between text-black p-5 m-5">
                <div>
                    <img src="" alt="LOGO" />
                </div>
                <div className='gap-5 flex flex-row'>
                    <FontAwesomeIcon icon={faInstagram} size="2x" className='hover:text-orange-500 cursor-pointer'/>
                    <FontAwesomeIcon icon={faFacebook} size="2x" className='hover:text-orange-500 cursor-pointer'/>
                    <FontAwesomeIcon icon={faTwitter} size="2x" className='hover:text-orange-500 cursor-pointer'/>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className='hover:text-orange-500 cursor-pointer'/>
                </div>
                
            </div>
            <div className='text-blacke'>
                    <p>copyright © 2021. All rights reserved</p>
            </div>

        </div>
    )
}