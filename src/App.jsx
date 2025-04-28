import './App.css'
// import LanguageSwitcher from './components/LanguageSwitcher'
// import { useTranslation } from 'react-i18next';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import RootLayout from './layouts/RootLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ]
  }]);


function App() {
  return (
    <RouterProvider router={router} />
  )
  // const { t } = useTranslation();

  // return <>
  //   <h1>{t('test')}</h1>
  //   <LanguageSwitcher />
  // </>
}

export default App;
