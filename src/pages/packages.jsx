import Word from '../assets/word.webp'
import Access from '../assets/microsoft-access.webp'
import Excell from '../assets/excel.webp'
import Publisher from '../assets/microsoft-publisher.webp'
import Powerpoint from '../assets/powerpoint.webp'
import { Button, Card } from 'react-bootstrap'
import { motion } from 'framer-motion';
import Nav2 from'../nav2.jsx'
import Footer from '../footer.jsx'

export default function Package(){
    return(
        <>
            <Nav2/>
            <div className="p-5 flex flex-col" id='PkGs1'>
                <p className='block text-transparent'>...</p>
                <p className='block text-transparent'>...</p>
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

                                <a href="https://calendly.com/quicktechcollege/15min" target='_blank'><Button variant='primary'>Learn More</Button></a>
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
                                     <a href="https://calendly.com/quicktechcollege/15min" target='_blank'><Button variant='primary'>Learn More</Button></a>
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

                                    <a href="https://calendly.com/quicktechcollege/15min" target='_blank'><Button variant='primary'>Learn More</Button></a>
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

                                <a href="https://calendly.com/quicktechcollege/15min" target='_blank'><Button variant='primary'>Learn More</Button></a>
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

                                <a href="https://calendly.com/quicktechcollege/15min" target='_blank'><Button variant='primary'>Learn More</Button></a>
                            </Card.Body>
                        </Card>
                    </motion.div>
                    
                </div>

                    <br />

                <div>
                    <p className='Desc'>More Packages include:</p>
                    <li className='Desc'>Introduction To Computer</li>
                    <li className='Desc'>Microsoft Windows</li>
                    <li className='Desc'>Computerized Speed typing</li>
                    <li className='Desc'>Microsoft Excel</li>
                    <li className='Desc'>Internet, Email, Google, Zoom, etc.</li>
                    <li className='Desc'>Formating Skills</li>
                    <li className='Desc'>Pc troubleshooting</li>
                    <li className='Desc'>Scanning,Printing and photocopying.</li>
                </div>

<br />

                <div>
                    <p className='Desc'>Get Computer Packages All at a fee of <span className='text-blue-500 text-lg'>ksh 4,500/= </span></p>
                </div>
            </div>
            <Footer/>
            <a href="#PkGs1"><button className="UptoTop">⏫</button></a>
        </>
    )
}