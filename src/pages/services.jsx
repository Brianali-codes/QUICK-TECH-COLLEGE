import Nav2 from "../nav2"
import Footer from "../footer"

export default function Service(){
    return(
        <>
            <Nav2/>
            <p className='block text-transparent'>...</p>
            <p className='block text-transparent'>...</p>
           <div className="p-5">
            <p className="Desc">At QuickCyber We Offer Services Such as:</p>
                
                    <li className="Desc">Photocopying.</li>
                    <li className="Desc">Printing.</li>
                    <li className="Desc">Kra Pin registration.</li>
                    <li className="Desc">Sha/Nssf and other insurance registration</li>
                    <li className="Desc">Music and Movie downloading.</li>
                    <li className="Desc">Good conduct,Birth Certificate and Visa Applications</li>
                    <li className="Desc">Green Cards Applications.</li>

                    
                
            </div>
            <p className="Desc p-5">For More Info On Services contact us on 0712102014 or 0700844538</p>

            <Footer/>
        </>
    )
}