import { useTranslation } from "react-i18next";
import ContactForm from "../../components/ContactForm/ContactForm";
import Panel from "../../components/Panel/Panel";
import { customerSentMessage } from "../../util/serverComunication";
import TitleValuePair from "../../components/TitleValuePair/TitleValuePair";

import _ from "./ContactPage.module.css";

function TranslatedContactInformation({ type, t }) {

    return (<TitleValuePair
        title={t(`contact.${type}.title`)}
        value={t(`contact.${type}.content`)}
    />);
}

function ContactPage() {
    const { t } = useTranslation();

    return (
        <Panel id="contactPanel1">
            <ContactForm
                id="contactForm"
                heading={t("contact.formTitle")}
                onSubmit={customerSentMessage}
            />
            <div id="contactInfo">
                <h1>{t("contact.informationTitle")}</h1>
                <TranslatedContactInformation type="email" t={t} />
                <TranslatedContactInformation type="phone" t={t} />
                <TranslatedContactInformation type="nip" t={t} />
                <TranslatedContactInformation type="krs" t={t} />
            </div>
        </Panel>


    );
}

export default ContactPage;