import { useState } from 'react';
import Login from '../../pure/login/Login';

const LoginContainer = () => {
    const [showPassword, setShowPassword ] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return <Login showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />
}

export default LoginContainer;