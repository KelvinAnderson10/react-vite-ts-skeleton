import InputField from "../components/InputField"
import UseRegisterPage from "../hooks/UseRegisterPage"

const RegisterPage = () => {
    const { rememberMe, onClickRememberMe, userForm, onChangeUserForm, onClickLogin, onClickRegister } = UseRegisterPage()

    return (
        <div className="bg-auth-background bg-[length:100%_100%] w-screen h-screen flex flex-row justify-center">
            <div className="flex flex-col justify-center items-end sm:basis-1/2 basis-full">
                <div className="w-max flex flex-col items-center sm:mr-10 mr-0">
                    <p className="text-[2.45rem] font-bold text-center text-white mb-4 tracking-wide">Create New Account</p>
                    <InputField name="companyName" placeholder="Company Name" value={userForm.companyName} onChange={onChangeUserForm}></InputField>
                    <InputField name="username" placeholder="Full Name" value={userForm.username} onChange={onChangeUserForm}></InputField>
                    <InputField name="email" placeholder="Email" value={userForm.email} onChange={onChangeUserForm}></InputField>
                    <InputField type="password" name="password" placeholder="Password" value={userForm.password} onChange={onChangeUserForm}></InputField>
                    <InputField type="password" name="confirmPassword" placeholder="Confirm Password" value={userForm.confirmPassword} onChange={onChangeUserForm}></InputField>
                    <InputField name="phoneNumber" placeholder="Phone Number" value={userForm.phoneNumber} onChange={onChangeUserForm}></InputField>
                    <div className="flex flex-row items-center justify-center self-start mb-8 cursor-pointer" onClick={onClickRememberMe}>
                        {rememberMe ? <div className="h-[1.2rem] w-[1.2rem] mr-2 cursor-pointer">
                            <img className="object-cover" src="src/assets/checked-checkbox.png"></img>
                        </div> : <div className="h-[1.2rem] w-[1.2rem] mr-2 cursor-pointer">
                            <img className="object-cover" src="src/assets/unchecked-checkbox.png"></img>
                        </div>}
                        <label className=" text-white text-xl cursor-pointer select-none">Remember Me</label>
                    </div>
                    <div className="bg-green-button bg-[length:100%_100%] px-8 py-3 cursor-pointer" onClick={onClickRegister}>
                        <p className="text-white text-4xl font-bold select-none">Register</p>
                    </div>
                    <p className="text-white text-xl font-thin mt-4">Already have an account ? <span className="text-blue-300 underline cursor-pointer" onClick={onClickLogin}>Login</span></p>
                </div>
            </div>
            <div className="bg-red basis-1/2 sm:flex hidden justify-end">
                <div className="w-40 h-40 mr-24 mt-12">
                    <img className="object-cover" src="src/assets/logo-1.png"></img>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage