import React, { createContext, useContext, useState } from "react";
import { User, auth, ParamsCreateAccount } from "@domain";

interface IProps {
    children: React.ReactNode;
}

interface IAuthContext {
    user: User | undefined;
    loading: boolean,
    signUp: (params: ParamsCreateAccount) => Promise<void>,

}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => {
    const [user, setUser] = useState<User | undefined>();
    const [loading, setLoading] = useState<boolean>(false);

    const signUp = async (params: ParamsCreateAccount): Promise<void> => {
        setLoading(true);
        const response = await auth.createAccount(params);
        setUser(response);
        setLoading(false);
    }

    return (
        <AuthContext.Provider
            value={{ user, signUp, loading }}
        >
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = (): IAuthContext => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth deve ser usado em um AuthProvider');
    }
    return context;
};
