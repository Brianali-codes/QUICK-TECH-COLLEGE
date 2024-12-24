import { Accordion } from "react-bootstrap"

export default function Faqs(){
    return(

        <div className="p-3 flex flex-col" id="FAQ">
            <p className="text-center font-bold">Frequently Asked Questions.</p>
            <br />
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Do i get my own personal Computer?</Accordion.Header>
                    <Accordion.Body>
                    Yes, at QuickTech College, we provide each student with a personal computer to use during their studies. This ensures you have the tools you need to practice, complete assignments, and gain hands-on experience with the latest software and technologies. We believe that access to the right equipment is essential for effective learning and success in the tech field.
                            </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How long will it take To complete?</Accordion.Header>
                    <Accordion.Body>
                    The duration of your course at QuickTech College varies depending on the program you choose and your learning pace. We offer flexible timelines to accommodate different schedules, ensuring you have the time you need to master the skills. Whether you’re a fast learner or prefer a more gradual approach, our programs are designed to adapt to your needs while maintaining quality education.
                           </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How will i know what is right for me?</Accordion.Header>
                    <Accordion.Body>
                    Choosing the right course at QuickTech College starts with understanding your goals and interests. Are you passionate about coding and creating software? Our programming courses might be your perfect fit. Looking to boost your computer skills for everyday tasks? Our computer packages offer practical, hands-on training.
If you're unsure, don't worry! Our friendly team is here to guide you. We'll discuss your aspirations, explore your strengths, and help you choose the program that aligns with your career dreams and personal growth. At QuickTech College, your success is our priority.
                     </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header> Do you offer certificates after completing a course?</Accordion.Header>
                    <Accordion.Body>
                    Yes, every student who successfully completes a course at QuickTech College receives a certificate of completion. Our certificates are recognized as proof of your skills and can be a valuable addition to your CV, helping you stand out in the job market.
                           </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Can I study part-time?</Accordion.Header>
                    <Accordion.Body>
                    Absolutely! At QuickTech College, we offer both full-time and part-time learning options to fit your schedule. Whether you’re balancing work, family, or other commitments, our flexible programs ensure you can learn at a pace that works for you without compromising on quality.
                         </Accordion.Body>
                </Accordion.Item>
                </Accordion>

        </div>

        
    )

}
