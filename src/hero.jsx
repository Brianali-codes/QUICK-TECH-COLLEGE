import { Button } from 'react-bootstrap'

export default function Hero(){
        return(
            <div className="h-fit flex flex-row" id='MainBg'>
                <div id='GlassmorphismBg' className='p-5'>
                    <br /><br /><br />
                    <div className='w-3/6'>
                        <p className=' text-5xl font-bold text-orange-500'>QUICK TECH COMPUTER COLLEGE</p>
                        <br />
                        <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, est sint. At ratione veritatis eligendi corrupti iusto voluptas et animi quibusdam voluptate totam ipsum, tempore maiores doloribus nobis sed ipsa.</p>
                        <br />
                        <div className='gap-3 flex flex-row'>
                            <Button variant="secondary">Explore Courses</Button>
                            <Button variant="secondary">Book a consultation</Button>
                        </div>
                        
                    
                    </div>

                </div>
                
                
                
            </div>
        )
}