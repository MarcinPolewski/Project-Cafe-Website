import ContactForm from "../components/ContactForm/ContactForm";
import Panel from "../components/Panel/Panel";
import { customerSentMessage } from "../util/serverComunication";

import classes from "./ContactPage.module.css";

function ContactPage() {
    return (
        <Panel id="contactPanel1">
            <ContactForm
                id="contactForm"
                heading="let's talks"
                onSubmit={customerSentMessage}
            />
            <div id="contactInfo">
                <h1>Contact us</h1>
                <p>Phone: +48 123 456 789</p>
                <p>Email:</p>
            </div>
        </Panel>


    );
}

export default ContactPage;