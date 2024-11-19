import LG from './assets/LOGO.svg'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

export default function Nav2(){

    const [collapsed, setCollapsed] = useState('hidden')

    const checkCollapsed = ()=>{
        if (collapsed === 'hidden'){
            setCollapsed('flex')
        }
        else{
            setCollapsed('hidden')
        }
    }
    
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" }); // This will add Smooth scrolling effect instead of going to css.
        }
      };


    return(
        <>
            <div id='NAV2' className='flex'>
                <div>
                    <img src={LG} alt="LOGO" />
                </div>
                <div>
                    <Link to="/"><Button variant="" onClick={() => scrollToSection("MainBg")}>Back</Button></Link>
                    
                </div>                    
            </div>

        </>
    )
}
