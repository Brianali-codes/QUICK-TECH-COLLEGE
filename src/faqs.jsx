import { Accordion } from "react-bootstrap"

export default function Faqs(){
    return(

        <div className="p-5 flex flex-col" id="FAQ">
            <p className="text-center font-bold">Frequently Asked Questions.</p>
            <br />
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Do i get my own personal Computer?</Accordion.Header>
                    <Accordion.Body>
                        Yes! You do get your own personal Computer and are able to do your studies in a more convenient and safe manner.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How long will it take To complete?</Accordion.Header>
                    <Accordion.Body>
                        The courses mentioned have different periods that are taken to complete, its adviced for you to consult us first if you want to know the time taken for specific course completions.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How will i know what is right for me?</Accordion.Header>
                    <Accordion.Body>
                    You dont!, In order to actually know what you need to achieve your tech career you need to take risks and show us your interests, this in turn enables us help you find your place in the current Tech Abbyss.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>

        </div>

        
    )

}
