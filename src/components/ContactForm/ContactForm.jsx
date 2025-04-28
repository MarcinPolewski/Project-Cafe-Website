import classes from './ContactForm.module.css';

function ContactForm({ onSubmit, heading, ...props }) {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        onSubmit(data);
        event.target.reset();
    }

    return (
        <div className={classes.contactForm} {...props}>
            <h1>{heading}</h1>
            <form onSubmit={handleSubmit}>
                <div className={classes.inputWithHeading}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className={classes.inputWithHeading}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={classes.textAreaWithHeading}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <div>
                    <button type="submit">Send</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </div>

    );
}

export default ContactForm;