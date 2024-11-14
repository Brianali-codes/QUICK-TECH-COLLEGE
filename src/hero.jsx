import { Button } from 'react-bootstrap'

export default function Hero(){
        return(
            <div className="h-fit flex flex-row justify-center items-center p-5">

                <div className='w-3/6'>
                    <br /><br /><br /><br />
                    <p className="text-4xl font-bold text-start text-orange-400">QUICK TECH COMPUTER COLLEGE</p>
                    <br />
                    <p className='text-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus soluta dolor consequuntur. Explicabo vel rem amet, soluta quaerat placeat. Doloremque suscipit enim, magnam dolores voluptatum reiciendis? Quasi explicabo architecto excepturi.</p>
                    <br />
                    <div className='flex flex-row justify-start gap-3'>
                        <Button variant="secondary">Consult us</Button>
                        <Button variant="secondary">View Services</Button>
                    </div>
                
                </div>
                
                <div className='w-3/6'>
                        
                </div>
                
            </div>
        )
}