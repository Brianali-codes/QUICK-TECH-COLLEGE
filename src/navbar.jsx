
import LG from './assets/LOGO.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function Navbar(){
    return(
        <>
            <div className="flex flex-row justify-between p-4 shadow-lg NAV">
                <div>
                    <img src={LG} alt="LOGO" />
                </div>
                <div className="flex flex-row gap-7 font-medium">
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
                
                
            </div>
        </>
    )
}