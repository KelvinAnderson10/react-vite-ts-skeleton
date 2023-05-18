import AuthService from "./AuthService"

const ServiceFactory = (apiClient: any) => {
    return {
        AuthService: AuthService(apiClient),
    }
}

export default ServiceFactory