import useAuth from '../hooks/useAuth'

export default function Blockchain() {
    const isLogin = useAuth()
    return (
        isLogin ? <h1>Test</h1>: <div>Not logged in</div>
    )
  }
