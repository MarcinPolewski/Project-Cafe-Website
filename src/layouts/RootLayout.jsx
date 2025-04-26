import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar/NavigationBar';
function RootLayout() {
    return (
        <div>
            <NavigationBar />
            <Outlet />
            <h1>Footer</h1>
        </div>
    );
}
export default RootLayout;