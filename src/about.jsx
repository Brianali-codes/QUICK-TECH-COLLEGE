import { motion } from 'framer-motion';

export default function About(){

    return( 
        <div className="p-5 bg-orange-500" id="ABTBG">
            <br /><br /><br /><br />
            <motion.p 
                    initial={{ opacity: 0, y: 20 }} // Starting position
                    whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                    className='text-center font-bold text-4xl text-black' id="ABTHEADING"
            >
            QUICK TECH COLLEGE EMPOWERS ME TO BE ME
            </motion.p>

            <br />
            <div>
            <motion.p 
                    initial={{ opacity: 0, y: 20 }} // Starting position
                    whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                    className="text-ellipsis text-center" id="DESC"
            >At Quick Tech Computer College, you’ll get personalized support from start to finish. You’ll cultivate the skills you need for success. And you’ll develop the confidence that will get you ready to thrive as a person and a professional. Here, you’ll find a welcoming and a diverse community that values you for who you are and who you want to become.
            </motion.p>
            </div>
            <br />
            <br />
            <br /><br /><br />
        </div>
    )


}