import Nav2 from "./nav2"
import Footer from "./footer"
import { Card } from "react-bootstrap"
import { motion } from 'framer-motion';
import Lec from './assets/Lec.webp'
import Sec from './assets/Sec.webp'
import { Button } from 'react-bootstrap'

export default function Vacancies(){



    return(
        <>
         <Nav2/>
         <br /><br /><br /><br /><br />
            <p className="Desc text-center">Apply For Jobs.</p>
         <div className="p-5 gap-5" id="JobContainer">
            
            <motion.div
                            initial={{ opacity: 0, y: 20 }} // Starting position
                            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                            transition={{ duration: 1 }} // Transition duration
                            viewport={{ once: true }} // Animation happens only once when it comes into view
                            >
                            <Card style={{ width: '20rem' , height:'',}} className='Cards'>
                                    <Card.Img variant="top" src={Lec} />
                            <Card.Body>
                            <Card.Title className='Desc'>Lecturer Full Time</Card.Title>
                                <Card.Text className='Desc'>
                                        Apply Now for position of Lecturer Full time, We will get back to you as soon as possible.</Card.Text>
                                <a href="https://forms.zohopublic.com/quicktechcollegegm1/form/JobApplication/formperma/m-9smw9HoM2VTr5U5CNuBErVpAF4w8ECFfjWYvqTZ3Q" target='_blank'><Button variant='primary'>Apply For Job</Button></a>
                            </Card.Body>
                        </Card>
            </motion.div>

            <motion.div
                            initial={{ opacity: 0, y: 20 }} // Starting position
                            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                            transition={{ duration: 1 }} // Transition duration
                            viewport={{ once: true }} // Animation happens only once when it comes into view
                            >
                            <Card style={{ width: '20rem' , height:'',}} className='Cards'>
                                    <Card.Img variant="top" src={Sec} />
                            <Card.Body>
                            <Card.Title className='Desc'>Secretary.</Card.Title>
                                <Card.Text className='Desc'>
                                Apply Now for position of Secretary, and We will get back to you as soon as possible. </Card.Text>
                                <a href="https://forms.zohopublic.com/quicktechcollegegm1/form/JobApplication1/formperma/nw6hVDmYNY3KiT08SIA8v8Ffu06ic47BKGIQg75GOhA" target='_blank'><Button variant='primary'>Apply For Job</Button></a>
                            </Card.Body>
                        </Card>
            </motion.div>
                
        </div>.
           <Footer/>
        </>
       
      
    )

}