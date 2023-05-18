import React, {useState} from "react";

export type TokenContextType = {
    token: string;
    handleToken: (token: string) => void
};

export const TokenContext = React.createContext<TokenContextType | null>(null);

type ChildrenProps = {
    children: React.ReactNode;
}

const TokenProvider = ({children }: ChildrenProps) => {
    const [token, setToken] = useState("");

    const handleToken = (token: string) => {
        setToken(token)
    }

    return (
        <TokenContext.Provider value={{ token, handleToken }}>
            {children}
        </TokenContext.Provider>
    );
};

export default TokenProvider