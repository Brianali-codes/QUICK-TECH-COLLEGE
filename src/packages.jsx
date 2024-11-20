import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IMG1 from './assets/PKG.webp'
import IMG2 from './assets/LANGS.webp'
import IMG3 from './assets/IMG3.webp'
import { motion } from 'framer-motion';
import './App.css'
import { Link } from 'react-router-dom';

export default function Packages(){
        return(

            <>
            <div className='p-5' id='PKGS'>
                <p className='text-center font-bold text-xl'>Some Services we Offer include.</p>
                <p className='Desc'>Our Services
At Quick-Tech College, we offer a range of courses designed to build your tech skills:

Web Development: Master HTML, CSS, and JavaScript to create stunning websites.
<li className='Desc'>Programming Languages: Learn Python and other in-demand languages for coding and automation.</li>
<li className='Desc'>Computer Packages: Gain proficiency in essential software tools like Microsoft Office and more.</li>
Take A look Below.</p>
            </div>
            <div className="flex justify-center items-center gap-5" id='packages'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }} // Starting position
                    whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                >
                    <Card style={{ width: '20rem' , height:'430px',}} className='Cards'>
                        <Card.Img variant="top" src={IMG1} />
                        <Card.Body>
                            <Card.Title className='Desc'>Computer Packages</Card.Title>
                            <Card.Text className='Desc'>
                                At QuickTech we offer different Packages, to view all Packages Click the button below.
                            </Card.Text>
                            <Link to="/packages"><Button variant="dark" className='Desc'>Explore Packages.</Button></Link>
                        </Card.Body>
                    </Card>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 60 }} // Starting position
                    whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                >
                    <Card style={{ width: '20rem' , height:'430px', }} className='Cards'>
                        <Card.Img variant="top" src={IMG2} />
                        <Card.Body>
                            <Card.Title className='Desc'>Programming Languages</Card.Title>
                            <Card.Text className='Desc'>
                                We help you find the right language for you and then equip you with the skills needed.
                            </Card.Text>
                            <Link to="/programming"><Button variant="primary" className='Desc'>Explore Languages.</Button></Link>
                        </Card.Body>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 80 }} // Starting position
                    whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                >

                    <Card style={{ width: '20rem', height:'430px', }} className='Cards'>
                        <Card.Img variant="top" src={IMG3} />
                        <Card.Body>
                            <Card.Title className='Desc'>More Services</Card.Title>
                            <Card.Text className='Desc'>
                                We offer more Services such as normal Cyber Cafe services and much much more.
                            </Card.Text>
                            <Link to="/services"><Button variant="warning" className='Desc'>View Services.</Button></Link>
                        </Card.Body>
                    </Card>
                </motion.div>
                
            </div>
            <br />
            
            <div className='p-5'>
                <p className='Desc'>Take the next step in your tech journey with us and unlock a world of opportunities. Whether you're looking to build dynamic websites, master versatile programming languages, or enhance your computer skills with essential packages, our courses are tailored to help you achieve your goals and thrive in the ever-evolving tech industry."</p>
            </div>
           
           </>
            
        )
}   
