import Keycloak from "keycloak-js";
import { useEffect, useRef, useState } from "react";

const useAuth = () => {
    const isRun = useRef(false);

    const [isLogin, setLogin] = useState(false);
    const [token, setToken] = useState({})
    useEffect(() => {
        const client = new Keycloak({
            url: "http://127.0.0.1:8090",
            realm: 'myrealm',
            clientId: 'react',
        });
        if (isRun.current) return;

        isRun.current = true;
        client
            .init({ onLoad: "login-required" })
            .then((res) => {


                localStorage.setItem("token", client.token as string)
                setToken(client.token as string)
                setLogin(res);

            });
    }, [token]);

    return isLogin
};

export default useAuth;