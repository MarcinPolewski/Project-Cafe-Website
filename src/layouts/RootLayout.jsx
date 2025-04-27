import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Footer from '../components/Footer/Footer';
function RootLayout() {
    return (
        <div>
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    );
}
export default RootLayout;