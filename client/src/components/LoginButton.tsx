
function LoginButton() {
    return (
        <button
            className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded"
            style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
            }}
            onClick={() => {
                window.location.href = 'http://localhost:8090/realms/myrealm/protocol/openid-connect/logout';
            }}
        >
            Logout
        </button>


    )
}

export default LoginButton