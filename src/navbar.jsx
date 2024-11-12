export default function Navbar(){
    return(
        <>
            <div className="flex flex-row justify-between">
                <div>
                    <img src="" alt="LOGO" />
                </div>
                <div className="flex flex-row gap-5">
                    <button className='hover:text-orange-500'>Home</button>
                    <button className='hover:text-orange-500'>Services</button>
                    <button className='hover:text-orange-500'>About</button>
                    <button className='hover:text-orange-500'>Faqs</button>
                    <button className='hover:text-orange-500'>Contacts</button>
                </div>
                
                
            </div>
        </>
    )
}