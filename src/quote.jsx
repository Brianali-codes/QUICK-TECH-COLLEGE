import './App.css'
import IMG from './assets/quote.webp'

export default function Quote(){
    return(
        <div className='flex flex-col justify-center items-center h-fit'>
            <img src={IMG} alt="Quotes" id='Steve'/>
        </div>
       

    )
    
}