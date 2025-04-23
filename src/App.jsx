import './App.css'
import LanguageSwitcher from './components/LanguageSwitcher'
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return <>
    <h1>{t('test')}</h1>
    <LanguageSwitcher />
  </>
}

export default App;
