import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


export default function Hero(){


        const scrollToSection = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
            section.scrollIntoView({ behavior: "smooth" }); // This will add Smooth scrolling effect instead of going to css.
            }
        };

        return(
            <div className="flex justify-center items-center" id='MainBg'>
                <div id='GlassmorphismBg' className='p-3'>
                    <br /><br /><br /><br /><br /><br /><br />
                    <div className='h-fit text-center justify-center flex flex-col items-center'>
                        <motion.p className=' text-6xl font-bold Desc' id='HomeText'
                         initial={{ opacity: 0, y: 20 }} // Starting position
                         whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                         transition={{ duration: 1 }} // Transition duration
                         viewport={{ once: true }} // Animation happens only once when it comes into view
                         >QUICK-TECH COMPUTER COLLEGE.</motion.p>
                        <br />

                        <motion.p
                            initial={{ opacity: 0, y: 30 }} // Starting position
                            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                            transition={{ duration: 1 }} // Transition duration
                            viewport={{ once: true }} // Animation happens only once when it comes into view
                            className='text-black text-xl Desc' id='HText2'
                         >Welcome to Quick-Tech College! We specialize in empowering students with the skills they need to thrive in today’s tech-driven world. From mastering cutting-edge cyber programming languages to gaining proficiency in essential computer packages, our courses are designed to prepare you for success in the digital age. Join us and take the first step towards a brighter, tech-savvy future!</motion.p>
                        <br />

                        <div className='gap-3 flex flex-row justify-center items-center' id='HomeBtns'>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }} // Starting position
                                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                                transition={{ duration: 1 }} // Transition duration
                                viewport={{ once: true }}>
                                <button className='Btns' onClick={() => scrollToSection("PKGS")}>Explore Courses</button>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }} // Starting position
                                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                                transition={{ duration: 1 }} // Transition duration
                                viewport={{ once: true }}>
                                    <Link to="/consultation"><button className='Btns text-black'>Book Consultation</button></Link>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 40 }} // Starting position
                                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                                transition={{ duration: 1 }} // Transition duration
                                viewport={{ once: true }}>
                                    <Link to="/contact"><button className='Btns text-black'>Contact Us</button></Link>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 60 }} // Starting position
                                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                                transition={{ duration: 1 }} // Transition duration
                                viewport={{ once: true }}
                            >
                                    <button className='Btns' onClick={() => scrollToSection("ABTBG")}>Why Quick Tech?</button>
                            </motion.div>
                            
                        </div>
                    </div>

                </div>
                
                
                
            </div>
        )
}