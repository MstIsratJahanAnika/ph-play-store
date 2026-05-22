
import logoImg from '../../assets/images/logo.png';
import { FaGithub } from 'react-icons/fa';
import MyNavLink from './MyNavLink';

const navItems = [
    {
        path: '/',
        text: 'Home'
    },
    {
        path: '/apps',
        text: 'Apps'
    },
    {
        path: '/installedApps',
        text: 'Installation'
    }
]
const Navbar = () => {
    return (
        <nav className='shadow'>
            <div className='container mx-auto py-2'>
                <div className='flex justify-between items-center mx-[80px]'>
                <img src={logoImg} alt='logoImg' className='w-[40px]'></img>

                <ul className='flex justify-between items-center gap-8'>

                    {/* more precise */}
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <MyNavLink to={item.path}>
                                {item.text}
                            </MyNavLink>
                        </li>
                    ))}

                    {/* alternative */}

                    {/* <li><MyNavLink to={'/'}>Home</MyNavLink></li>
                    <li><MyNavLink to={'/apps'}>Apps</MyNavLink></li>
                    <li><MyNavLink to={'/installedApps'}>Installation</MyNavLink></li> */}
                </ul>

                <button className='bg-purple-500 text-white px-4 py-3 rounded-sm flex justify-center items-center gap-2'><FaGithub />Contribute</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;