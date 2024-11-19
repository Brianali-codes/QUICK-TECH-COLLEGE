import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FED from '../assets/frontend.webp'
import BED from '../assets/backend.webp'
import UIX from '../assets/UIUX.webp'
import COD from '../assets/coding.webp'
import HTM from '../assets/html.webp'
import JS from '../assets/javascript.webp'
import WEB from '../assets/wdwd.webp'
import DAS from '../assets/Da.webp'
import DM from '../assets/Dm.webp'
import GFX from '../assets/gfx.webp'
import SD from '../assets/SD.webp'
import MOB from '../assets/Mob.webp'
import PTN from '../assets/python.webp'
import CSS from '../assets/css.webp'



export default function Programs(){
    return(
        <>

            <div className="p-5 flex flex-col">
                    <Link to="/"><p className='text-start text-black font-bold'>  Go Back</p></Link>
                    <p className='text-center text-xl font-bold'>Programming languages and Courses.</p>
                    <br />
                    <div className="PackageContainer">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }} // Starting position
                            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                            transition={{ duration: 1 }} // Transition duration
                            viewport={{ once: true }} // Animation happens only once when it comes into view
                            >
                                <Card style={{ width: '' , height:'',}} className='Cards'>
                                    <Card.Img variant="top" src={FED} />
                                    <Card.Body>
                                        <Card.Title className='Desc'>Front-End development</Card.Title>
                                        <Card.Text className='Desc'>
                                        Front-end development focuses on creating user-friendly interfaces, ensuring elegance, usability, speed, and security through coding and design techniques, enhancing user engagement and interaction.
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
                                    <Card.Img variant="top" src={BED} />
                                    <Card.Body>
                                        <Card.Title className='Desc'>Back-end Development</Card.Title>
                                        <Card.Text className='Desc'>
                                        Back-end development focuses on server-side software, managing databases, back-end logic, APIs, architecture, and servers to ensure websites function correctly by handling everything not visible to users. </Card.Text>
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
                                    <Card.Img variant="top" src={UIX} />
                                    <Card.Body>
                                        <Card.Title className='Desc'>Ui/Ux design</Card.Title>
                                        <Card.Text className='Desc'>
                                        UI/UX design focuses on crafting  visually appealing interfaces and enhancing user experiences by ensuring seamless interaction between users products or applications.
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
                                    <Card.Img variant="top" src={COD} />
                                    <Card.Body>
                                        <Card.Title className='Desc'>Coding</Card.Title>
                                        <Card.Text className='Desc'>
                                        Coding involves writing instructions in programming languages to create software applications, websites, and systems. It focuses on problem-solving, logic, and structure to build functional, efficient, and maintainable digital solutions.
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
                                    <Card.Img variant="top" src={HTM} />
                                    <Card.Body>
                                        <Card.Title className='Desc'>HTML</Card.Title>
                                        <Card.Text className='Desc'>
                                        HTML (Hypertext Markup Language) structures web content using elements like headings, paragraphs, and links. It defines the content and layout, serving as the foundation for many web pages and applications.
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
                                    <Card.Img variant="top" src={JS} />
                                    <Card.Body>
                                        <Card.Title className='Desc'>Javascript</Card.Title>
                                        <Card.Text className='Desc'>
                                        JavaScript is a programming language used to create dynamic and interactive web content. It enables features like form validation, animations, and real-time updates, enhancing the functionality and user experience of websites.
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
                                    <Card.Img variant="top" src={WEB} />
                                    <Card.Body>
                                        <Card.Title className='Desc'>Web Development and Design</Card.Title>
                                        <Card.Text className='Desc'>
                                        Web design and development involves creating and maintaining visually appealing websites. It combines UI/UX design with front-end and back-end development to deliver responsive, functional, and interactive digital experiences.
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
                                    <Card.Img variant="top" src={DAS} />
                                    <Card.Body>
                                        <Card.Title className='Desc'>Data Analysis</Card.Title>
                                        <Card.Text className='Desc'>
                                        Data analysis involves collecting, processing, and interpreting data to uncover trends, patterns, and insights. It helps businesses make informed decisions by using statistical tools and techniques to transform raw data into actionable knowledge.
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
                                    <Card.Img variant="top" src={DM} />
                                    <Card.Body>
                                        <Card.Title className='Desc'>Digital Marketing</Card.Title>
                                        <Card.Text className='Desc'>
                                        Digital marketing promotes products or services using online platforms. It includes strategies like SEO, social media marketing, email campaigns, and content marketing to engage audiences, drive traffic, and increase brand visibility and sales.
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
                                    <Card.Img variant="top" src={GFX} />
                                    <Card.Body>
                                        <Card.Title className='Desc'>Graphics Design</Card.Title>
                                        <Card.Text className='Desc'>
                                        Graphic design involves creating visual content to communicate messages. it enhances user experience in branding, advertising, print media, and digital platforms, blending creativity with effective communication.
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
                                    <Card.Img variant="top" src={SD} />
                                    <Card.Body>
                                        <Card.Title className='Desc'>Software Development</Card.Title>
                                        <Card.Text className='Desc'>
                                        Software development is the process of designing, coding, testing, and maintaining software applications. It focuses on creating programs that solve problems or fulfill needs, using various programming languages and methodologies to build efficient solutions.
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
                                    <Card.Img variant="top" src={MOB} />
                                    <Card.Body>
                                        <Card.Title className='Desc'>Mobile App Development</Card.Title>
                                        <Card.Text className='Desc'>
                                        Mobile app development involves creating applications for smartphones and tablets. Developers use platforms like Android and iOS to design, code, and test apps that provide users with various functionalities and services on mobile devices.
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
                                    <Card.Img variant="top" src={PTN} />
                                    <Card.Body>
                                        <Card.Title className='Desc'>Python</Card.Title>
                                        <Card.Text className='Desc'>
                                        Python is a high-level, versatile programming language known for its simplicity and readability. It’s used for web development, data analysis, machine learning, and more, with a large, supportive community and extensive libraries.
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
                                    <Card.Img variant="top" src={CSS} />
                                    <Card.Body>
                                        <Card.Title className='Desc'>CSS</Card.Title>
                                        <Card.Text className='Desc'>
                                        CSS (Cascading Style Sheets) controls the presentation of web content, including layout, colors, fonts, and spacing. It enhances the appearance of HTML elements, ensuring visually appealing and responsive web designs.
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