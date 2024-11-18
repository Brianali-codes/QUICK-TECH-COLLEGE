import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IMG1 from './assets/PKG.webp'
import IMG2 from './assets/LANGS.webp'
import IMG3 from './assets/IMG3.webp'
import { motion } from 'framer-motion';
import './App.css'

export default function Packages(){
        return(

            <>
            <div className='p-5' id='PKGS'>
                <p className='text-center font-bold text-xl'>Some Services we Offer include.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsum. Quasi voluptates in corrupti dignissimos ducimus expedita maiores repellendus sunt porro alias, laborum quas, soluta a illo necessitatibus magni doloribus! Blanditiis aliquam praesentium iste sed quod provident veniam omnis debitis excepturi mollitia similique hic non, temporibus repellat! Incidunt vitae quod non natus!</p>
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
            <br />
            
            <div className='p-5'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsum. Quasi voluptates in corrupti dignissimos ducimus expedita maiores repellendus sunt porro alias, laborum quas, soluta a illo necessitatibus magni doloribus! Blanditiis aliquam praesentium iste sed quod provident veniam omnis debitis excepturi mollitia similique hic non, temporibus repellat! Incidunt vitae quod non natus!</p>
            </div>
           
           </>
            
        )
}   
