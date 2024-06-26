import React from 'react';
import {useTranslation} from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation();


    return (
        <footer>
            <i>&copy; {t('footer.copyright-date')} {t('footer.copyright-name')} {t('footer.copyright-notice')}</i>
        </footer>
    );
};

export default Footer;