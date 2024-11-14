
import LG from './assets/LOGO.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Navbar(){
    return(
        <>
            <div className="flex flex-row justify-between p-4 shadow-lg NAV items-center">
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

                
                <FontAwesomeIcon icon={faBars} size='1x' id='Menu'/>
                
                
                
            </div>
        </>
    )
}