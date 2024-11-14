import { Card } from "react-bootstrap"
import IMG2 from './assets/LANGS.jpg'

export default function About(){

    return( 
        <div className="p-10 bg-orange-500" id="ABTBG">
            <br /><br /><br /><br />
            <p className='text-center font-bold text-4xl text-black' id="ABTHEADING">QUICK TECH COLLEGE EMPOWERS ME TO BE ME</p>
            <br />
            <div>
                <p className="text-ellipsis text-center" id="DESC">At Quick Tech Computer College, you’ll get personalized support from start to finish. You’ll cultivate the skills you need for success. And you’ll develop the confidence that will get you ready to thrive as a person and a professional. Here, you’ll find a welcoming and a diverse community that values you for who you are and who you want to become.</p>
            </div>
            <br />
            <br />
            <br /><br /><br />
        </div>
    )


}