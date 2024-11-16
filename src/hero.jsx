import { Button } from 'react-bootstrap'

export default function Hero(){
        return(
            <div className="flex justify-center items-center" id='MainBg'>
                <div id='GlassmorphismBg' className='p-3'>
                    <br /><br /><br /><br /><br /><br /><br />
                    <div className='h-fit text-center justify-center flex flex-col items-center'>
                        <p className=' text-6xl font-bold text-orange-500 Desc' id='HomeText'>QUICK TECH COMPUTER COLLEGE.</p>
                        <br />
                        <p className='text-black text-xl Desc' id='HText2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur minus blanditiis harum, voluptatibus consequuntur laboriosam optio quaerat deleniti ea consequatur corporis accusamus quae nemo nisi vero dignissimos amet nihil inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, est sint. At ratione veritatis eligendi corrupti iusto voluptas et animi quibusdam voluptate totam ipsum, tempore maiores doloribus nobis sed ipsa.</p>
                        <br />
                        <div className='gap-3 flex flex-row justify-center items-center' id='HomeBtns'>
                            <button className='Btns'>Explore Courses</button>
                            <button className='Btns'>Book Consultation</button>
                            <button className='Btns'>Contact Us</button>
                            <button className='Btns'>Why Quick Tech?</button>
                        </div>
                    </div>

                </div>
                
                
                
            </div>
        )
}