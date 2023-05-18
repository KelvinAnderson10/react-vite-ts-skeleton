const AuthService = ({doPost}: any) => {
    const registerUser = async (body: any) => {
        try {
            return await doPost({
                url: `user`, data: body
            })
        } catch (e) {
            throw e
        }
    }

    const loginUser = async (body: any) => {
        try {
            return await doPost({
                url: `login`, data: body
            })
        } catch (e) {
            throw e
        }
    }

    return {
        registerUser,
        loginUser
    }
}

export default AuthService