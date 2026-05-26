import { Outlet } from 'react-router';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            {/* dynamic content */}
            <Outlet></Outlet>

            <Footer></Footer>

            {/* react toastify */}
            <ToastContainer />
        </div>
    );
};

export default RootLayout;