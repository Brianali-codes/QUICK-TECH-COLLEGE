import { Link } from "react-router-dom";

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
                        <p className=' text-6xl font-bold Desc' id='HomeText'>QUICK-TECH COMPUTER COLLEGE.</p>
                        <br />
                        <p className='text-black text-xl Desc' id='HText2'>Welcome to Quick-Tech College! We specialize in empowering students with the skills they need to thrive in today’s tech-driven world. From mastering cutting-edge cyber programming languages to gaining proficiency in essential computer packages, our courses are designed to prepare you for success in the digital age. Join us and take the first step towards a brighter, tech-savvy future!</p>
                        <br />
                        <div className='gap-3 flex flex-row justify-center items-center' id='HomeBtns'>
                            <button className='Btns' onClick={() => scrollToSection("PKGS")}>Explore Courses</button>
                            <Link to="/consultation"><button className='Btns text-black'>Book Consultation</button></Link>
                            <Link to="/contact"><button className='Btns text-black'>Contact Us</button></Link>
                            <button className='Btns' onClick={() => scrollToSection("ABTBG")}>Why Quick Tech?</button>
                        </div>
                    </div>

                </div>
                
                
                
            </div>
        )
}