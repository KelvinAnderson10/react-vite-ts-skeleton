import React, { useContext, useState } from "react";
import { TokenContext, TokenContextType } from "../context/tokenContext";
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";

interface LoginForm {
    username: string
    password: string
}

const UseLoginPage = () => {
    const [userForm, setUserForm] = useState<LoginForm>({
        username: '',
        password: ''
    })

    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate()

    const { token, handleToken } = useContext(TokenContext) as TokenContextType;

    const onChangeUserForm = (e: any) => {
        const { name, value } = e.target
        setUserForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const onClickLogin = async () => {
        try {
            // const response = await Bla2
            var responseToken = "1231232302321";
            handleToken(responseToken);

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
            })
            
            Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
            })
        } catch (error) {
            
        }
    };

    const onClickRememberMe = () => {
        setRememberMe(!rememberMe)
    }

    const onClickRegister = () => {
        navigate('/register', {replace: true})
    }

    return {
        userForm,
        rememberMe,
        onChangeUserForm,
        onClickLogin,
        onClickRememberMe,
        onClickRegister
    };
};

export default UseLoginPage;
