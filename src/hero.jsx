import { Button } from 'react-bootstrap'

export default function Hero(){
        return(
            <div className="h-fit flex flex-row" id='MainBg'>
                <div id='GlassmorphismBg' className='p-5'>
                    <br /><br /><br />
                    <div className='w-3/6'>
                        <p className=' text-5xl font-bold text-orange-500'>QUICK TECH COMPUTER COLLEGE</p>
                        <br />
                        <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At odit pariatur tenetur adipisci facere quo doloribus laborum a! Nesciunt neque, libero laudantium magnam veniam placeat deleniti dolores corrupti quo maiores? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, aperiam eos reiciendis deleniti est ea corporis unde aut dolorum voluptates quod, omnis quos, nam fuga inventore voluptatum aspernatur corrupti laudantium!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore libero laboriosam, quasi rerum recusandae earum qui porro maxime ut, error accusantium dignissimos quidem nam. Dolore est doloremque aliquam illum assumenda? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut assumenda ratione ipsum, corrupti eos porro fugit a dicta adipisci, ullam libero, velit obcaecati quam facilis! Iusto ea quisquam voluptate?</p>
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