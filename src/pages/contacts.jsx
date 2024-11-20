import Nav2 from'../nav2.jsx'
import Footer from '../footer.jsx'

export default function Contacts(){
    return(
        <>
            <Nav2/>
            <p className='block text-transparent'>...</p>
            <p className='block text-transparent'>...</p>
            <div className="p-5 flex flex-col justify-center items-center gap-0">

                <form action="https://formsubmit.co/quicktechcollege@gmail.com" method="POST" className='flex flex-col gap-1 justify-center items-center'>
                    <p className='Desc text-xl font-bold'>Contact Us:</p>
                    <p>You can contact us at Tel: +254712102014 or +254724382682</p>
                    <p>If you have More info Or would like to ask a question Please go to the consultation page, or use the one below.</p>
                    <input type="text" name="name" required placeholder='Name...' className='display'/ >
                    <br />
                    <input type="email" name="email" required placeholder='Email...' className='display'/>
                    <br />
                    <input type="text" className='display2' placeholder='Message...'/>
                    <br />
                    <button className='BTNsend' type="submit">Send.</button>
                    
                </form>

            </div>
            <Footer/>
           
        </>
    )
}