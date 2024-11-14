import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IMG1 from './assets/PKG.jpg'
import IMG2 from './assets/LANGS.jpg'
import IMG3 from './assets/IMG3.jpg'
import './App.css'

export default function Packages(){
        return(
            <div className="h-fit justify-center items-center gap-5" id='packages'>
                 <Card style={{ width: '18rem' , height:'430px',}} h>
                    <Card.Img variant="top" src={IMG1} />
                    <Card.Body>
                        <Card.Title>Computer Packages</Card.Title>
                        <Card.Text>
                            At QuickTech we offer different Packages to view all Packages Click the button below.
                        </Card.Text>
                        <Button variant="secondary">Explore Packages.</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' , height:'430px', }}>
                    <Card.Img variant="top" src={IMG2} />
                    <Card.Body>
                        <Card.Title>Programming Languages</Card.Title>
                        <Card.Text>
                            We help you find the right language for you and then equip you with the skills needed.
                        </Card.Text>
                        <Button variant="secondary">Explore Languages.</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', height:'430px', }}>
                    <Card.Img variant="top" src={IMG3} />
                    <Card.Body>
                        <Card.Title>More Services</Card.Title>
                        <Card.Text>
                            We offer more Services such as normal Cyber Cafe services and much more.
                        </Card.Text>
                        <Button variant="secondary">View Services.</Button>
                    </Card.Body>
                </Card>
                
            </div>
        )
}   
