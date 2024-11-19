import Nav2 from'../nav2.jsx'
import Footer from '../footer.jsx'
import { Button } from 'react-bootstrap'

export default function Consultation(){
    return(
        <>
        
        <Nav2/>
        <div className="p-5">
            <br /><br />
            <p className='text-xl font-bold'>Consultation</p>
            <div>
                <p>Do you Have Any Questions Or would like to Know what we offer indepth? We offer Consultations For free!, All you need to do is Book one , At the moment Physical consultations are more convenient, if you prefer an online consultation then book one below.</p>
                <Button variant='primary'>Book Consultation</Button>
            </div>

        </div>
        <Footer/>

        </>
    )
}