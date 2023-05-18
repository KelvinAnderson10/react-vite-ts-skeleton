import React from "react";

export type DependencyContextType = {
    AuthService: any
};

export const DependencyContext = React.createContext<DependencyContextType | null>(null);

type ChildrenProps = {
    children: React.ReactNode;
    services: any
}

const DependencyProvider = ({children, services }: ChildrenProps) => {
    return (
        <DependencyContext.Provider value={services}>
            {children}
        </DependencyContext.Provider>
    );
};

export default DependencyProvider