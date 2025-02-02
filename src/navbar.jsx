
import LG from './assets/zzz.png'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    
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
            <div id='NAVBAR' className='flex'>
                <div>
                    <img src={LG} alt="LOGO" className='Logo'/>
                </div>
                <div id='ButtonContainer'>
                    <Button variant="" onClick={() => scrollToSection("MainBg")}>Home</Button>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Services
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Link to="/packages"><Button variant=''>Packages</Button></Link>
                            <Link to="/programming"><Button variant=''>Programming</Button></Link>
                            <Link to="/consultation"><Button variant=''>Consultation</Button></Link> 
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="" onClick={() => scrollToSection("ABTUS")}>About</Button>
                    <Button variant="" onClick={() => scrollToSection("FAQ")}>Faqs</Button>
                    <Link to="/contact"><Button variant="">Contacts</Button></Link>
                    <Link to="/vacancies"><Button variant="">Vacancies</Button></Link>
                </div>                
                <FontAwesomeIcon icon={faBars} size='1x' id='Menu' onClick={checkCollapsed}/>
                
                
                
            </div>

            <div className={collapsed} id='sidebar' >

                    <div className='flex flex-col'>
                        <Button variant="" onClick={() => {scrollToSection("MainBg");checkCollapsed()}}>Home</Button>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Services.
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Link to="/packages"><Button variant=''>Packages</Button></Link>
                                <Link to="/programming"><Button variant=''>Programming</Button></Link>
                                <Link to="/consultation"><Button variant=''>Consultation</Button></Link> 
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="" onClick={() => {scrollToSection("ABTUS");checkCollapsed()}}>About</Button>
                        <Button variant="" onClick={() => {scrollToSection("FAQ");checkCollapsed()}}>Faqs</Button>
                        <Link to="/contact"><Button variant="" className='text-black'>Contacts</Button></Link>
                        <Link to="/vacancies"><Button variant="">Vacancies</Button></Link>
                    </div>

                </div>
        </>
    )
}