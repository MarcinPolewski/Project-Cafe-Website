import { useTranslation } from 'react-i18next';
import classes from './ContactForm.module.css';

function ContactForm({ onSubmit, heading, ...props }) {
    const { t } = useTranslation();

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
                    <label htmlFor="name">{t("contact.form.name")}:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className={classes.inputWithHeading}>
                    <label htmlFor="email">{t("contact.form.email")}:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={classes.textAreaWithHeading}>
                    <label htmlFor="message">{t("contact.form.message")}:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <div className={classes.buttonContainer}>
                    <button type="submit">{t("contact.form.submit")}</button>
                    <button type="reset">{t("contact.form.reset")}</button>
                </div>
            </form>
        </div>

    );
}

export default ContactForm;