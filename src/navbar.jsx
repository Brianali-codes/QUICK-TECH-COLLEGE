
import LG from './assets/LOGO.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


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
    
    return(
        <>
            <div id='NAVBAR' className='flex'>
                <div>
                    <img src={LG} alt="LOGO" />
                </div>
                <div id='ButtonContainer'>
                    <Button variant="">Home</Button>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Services
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Packages</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Programming</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Consultation</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="">About</Button>
                    <Button variant="">Faqs</Button>
                    <Button variant="">Contacts</Button>
                </div>                
                <FontAwesomeIcon icon={faBars} size='1x' id='Menu' onClick={checkCollapsed}/>
                
                
                
            </div>

            <div className={collapsed} id='sidebar' >

                    <div className='flex flex-col'>
                        <Button variant="" onClick={checkCollapsed}>Home</Button>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Services
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Packages</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Programming</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Consultation</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="" onClick={checkCollapsed}>About</Button>
                        <Button variant="" onClick={checkCollapsed}>Faqs</Button>
                        <Button variant="" onClick={checkCollapsed}>Contacts</Button>
                    </div>

                </div>
        </>
    )
}