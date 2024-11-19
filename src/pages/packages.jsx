import Word from '../assets/word.webp'
import Access from '../assets/microsoft-access.webp'
import Excell from '../assets/excel.webp'
import Publisher from '../assets/microsoft-publisher.webp'
import Powerpoint from '../assets/powerpoint.webp'
import { Button, Card } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import Nav2 from'../nav2.jsx'

export default function Package(){
    return(
        <>
            <Nav2/>
            <div className="p-5 flex flex-col">
                <br /><br />
                <p className='text-center text-xl font-bold'>Packages</p>
                <br />
                <div className="PackageContainer">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} // Starting position
                    whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                    >
                        <Card style={{ width: '' , height:'',}} className='Cards'>
                            <Card.Img variant="top" src={Word} />
                            <Card.Body>
                                <Card.Title className='Desc'>Word</Card.Title>
                                <Card.Text className='Desc'>
                                Microsoft Word is a word processor program developed by Microsoft. It was first released on October 25, 1983,[13] under the name Multi-Tool Word for Xenix
                                </Card.Text>
                                <Card.Text className='Desc'>
                                    Duration : 3 weeks
                                </Card.Text>
                            <Button variant="dark" className='Desc'>Starts at ksh 1500</Button>
                            </Card.Body>
                        </Card>
                    </motion.div><motion.div
                    initial={{ opacity: 0, y: 20 }} // Starting position
                    whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                    >
                        <Card style={{ width: '' , height:'',}} className='Cards'>
                            <Card.Img variant="top" src={Access} />
                            <Card.Body>
                                <Card.Title className='Desc'>Acess</Card.Title>
                                <Card.Text className='Desc'>
                                    Microsoft Access is a database management system that combines the relational Access Database Engine (ACE) with a graphical user interface and software-development tools. 
                                     </Card.Text>
                                <Card.Text className='Desc'>
                                    Duration : 3 weeks
                                </Card.Text>
                            <Button variant="dark" className='Desc'>Starts at ksh 1500</Button>
                            </Card.Body>
                        </Card>
                    </motion.div>
                    
                    
                    
                    <motion.div
                    initial={{ opacity: 0, y: 20 }} // Starting position
                    whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                    >
                        <Card style={{ width: '' , height:'',}} className='Cards'>
                            <Card.Img variant="top" src={Excell} />
                            <Card.Body>
                                <Card.Title className='Desc'>Excell</Card.Title>
                                <Card.Text className='Desc'>
                                Microsoft Excel is a spreadsheet editor developed by Microsoft It features calculation or computation capabilities graphing tools and much more.
                                    </Card.Text>
                                    <Card.Text className='Desc'>
                                    Duration : 3 weeks
                                </Card.Text>
                            <Button variant="dark" className='Desc'>Starts at ksh 1500</Button>
                            </Card.Body>
                        </Card>
                    </motion.div><motion.div
                    initial={{ opacity: 0, y: 20 }} // Starting position
                    whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                    >
                        <Card style={{ width: '' , height:'',}} className='Cards'>
                            <Card.Img variant="top" src={Publisher} />
                            <Card.Body>
                                <Card.Title className='Desc'>Publisher</Card.Title>
                                <Card.Text className='Desc'>
                                Microsoft Publisher is a desktop publishing application from Microsoft, differing from Microsoft Word in that the emphasis is placed on page layout and graphic design rather than text composition and proofreading.   
                                </Card.Text>
                                <Card.Text className='Desc'>
                                    Duration : 3 weeks
                                </Card.Text>
                            <Button variant="dark" className='Desc'>Starts at ksh 1500</Button>
                            </Card.Body>
                        </Card>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 20 }} // Starting position
                    whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                    >
                        <Card style={{ width: '' , height:'',}} className='Cards'>
                            <Card.Img variant="top" src={Powerpoint} />
                            <Card.Body>
                                <Card.Title className='Desc'>Powerpoint</Card.Title>
                                <Card.Text className='Desc'>
                                     Microsoft PowerPoint is a presentation program,PowerPoint was originally designed to provide visuals for group presentations within business organizations, but has come to be widely used in other communication situations in business and beyond.
                                </Card.Text>
                                <Card.Text className='Desc'>
                                    Duration : 3 weeks
                                </Card.Text>
                            <Button variant="dark" className='Desc'>Starts at ksh 1500</Button>
                            </Card.Body>
                        </Card>
                    </motion.div>
                    
                </div>
            </div>
        </>
    )
}