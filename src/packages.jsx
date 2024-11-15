import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IMG1 from './assets/PKG.jpg'
import IMG2 from './assets/LANGS.jpg'
import IMG3 from './assets/IMG3.jpg'
import { motion } from 'framer-motion';
import './App.css'

export default function Packages(){
        return(

            <>
            <div>
                <p className='text-center font-bold text-xl'>Some Services we Offer include.</p>
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
                            <Button variant="dark" className='Desc'>Explore Packages.</Button>
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
                            <Button variant="primary" className='Desc'>Explore Languages.</Button>
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
                            <Button variant="warning" className='Desc'>View Services.</Button>
                        </Card.Body>
                    </Card>
                </motion.div>
                
            </div>
            
            </>
            
        )
}   
