import './Layout.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { LeftArrowIcon } from '../Icons';

const Layout = ({children}) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const locationType = location.pathname.split('/')[1];

    return <>
    <div className='layoutHeading'>
        { locationType !== "" && <LeftArrowIcon className="layoutHeading-svg" onClick={()=>navigate(-1)} />}
        <h1 className='heading1' onClick={()=>navigate('/')}>Trip Advisor</h1>
    </div>
    <main>
        {children}
    </main>
    </>
};

export default Layout;