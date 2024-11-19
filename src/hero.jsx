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
                        <p className='text-black text-xl Desc' id='HText2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur minus blanditiis harum, voluptatibus consequuntur laboriosam optio quaerat deleniti ea consequatur corporis accusamus quae nemo nisi vero dignissimos amet nihil inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, est sint. At ratione veritatis eligendi corrupti iusto voluptas et animi quibusdam voluptate totam ipsum, tempore maiores doloribus nobis sed ipsa.</p>
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