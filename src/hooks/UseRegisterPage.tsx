import  { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { DependencyContext, DependencyContextType } from "../context/dependencyContext";
import Swal from "sweetalert2";

// import { TokenContext, TokenContextType } from "../tokenContext";

interface RegisterForm {
    companyName: string
    username: string
    email: string
    password: string
    confirmPassword: string
    phoneNumber: string
}

const UseRegisterPage = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const [userForm, setUserForm] = useState<RegisterForm>({
        companyName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: ''
    })

    const navigate = useNavigate()
    const { AuthService } =useContext(DependencyContext) as DependencyContextType

    
    const onClickLogin = () => {
        navigate('/', {replace: true})
    }

    const onChangeUserForm = (e: any) => {
        const { name, value } = e.target
        setUserForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const onClickRememberMe = () => {
        setRememberMe(!rememberMe)
    }

    const onClickRegister = async () => {
        const response = await AuthService.registerUser({
            companyName: userForm.companyName,
            userName: userForm.username,
            email: userForm.email,
            password: userForm.password,
            phoneNumber: userForm.phoneNumber
        })
        console.log(response);
        navigate('/', {replace: true})
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
        })
        
        Toast.fire({
        icon: 'success',
        title: 'Signed up successfully'
        })
    }

    return {
        rememberMe,
        onClickRememberMe,
        userForm,
        onChangeUserForm,
        onClickLogin,
        onClickRegister
    };
};

export default UseRegisterPage;
