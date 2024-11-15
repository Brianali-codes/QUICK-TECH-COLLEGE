import './App.css'
import IMG from './assets/Quote.png'

export default function Quote(){
    return(
        <div className='flex flex-col justify-center items-center h-fit'>
            <img src={IMG} alt="Quotes" id='Steve'/>
        </div>
       

    )
    
}