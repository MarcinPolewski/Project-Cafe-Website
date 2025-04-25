import { Outlet } from 'react-router-dom';
function RootLayout() {
    return (
        <div>
            <h1>Navigation</h1>
            <Outlet />
            <h1>Footer</h1>
        </div>
    );
}
export default RootLayout;