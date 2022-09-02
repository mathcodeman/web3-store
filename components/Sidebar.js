import React from 'react'
import { ConnectButton } from 'web3uikit'
import { useMoralis } from "react-moralis";

export const Sidebar = () => {
    const { authenticate, isAuthenticated, user } = useMoralis();

    if (!isAuthenticated) {
        return (
            <div>
                <button onClick={() => authenticate()}>Authenticate</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Welcome {user.get("username")}</h1>
        </div>
    );
}
