import { Button } from 'react-bootstrap'

export default function Hero(){
        return(
            <div className="flex flex-row" id='MainBg'>
                <div id='GlassmorphismBg' className='p-5'>
                    <br /><br /><br /><br /><br /><br /><br />
                    <div className='w-full h-fit text-center'>
                        <p className=' text-6xl font-bold text-orange-500 Desc'>QUICK TECH COMPUTER COLLEGE.</p>
                        <br />
                        <p className='text-black text-xl Desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur minus blanditiis harum, voluptatibus consequuntur laboriosam optio quaerat deleniti ea consequatur corporis accusamus quae nemo nisi vero dignissimos amet nihil inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, est sint. At ratione veritatis eligendi corrupti iusto voluptas et animi quibusdam voluptate totam ipsum, tempore maiores doloribus nobis sed ipsa.</p>
                        <br />
                        <div className='gap-3 flex flex-row justify-center items-center'>
                            <Button variant="secondary">Explore Courses</Button>
                            <Button variant="secondary">Book a consultation</Button>
                            <Button variant="secondary">Why Quick Tech?</Button>
                        </div>
                    </div>

                </div>
                
                
                
            </div>
        )
}