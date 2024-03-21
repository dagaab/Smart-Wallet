import React from 'react';
import Navbar from './Navbar'

const Header = () => {
    return (
        <div>
            <Navbar />
        </div>
    );
};

const DefaultPage = () => {
    // const navigate = useNavigate();
    React.useEffect(() => {
        navigate('/signIn');
    }, [navigate]);

    return null;
};

export default Header;