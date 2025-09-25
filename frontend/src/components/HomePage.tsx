import { Button } from "antd"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <main className="flex flex-col items-center gap-5">
      <h1>👋 Welcome!</h1>
      <p className="text-2xl max-w-96 text-center">We're so glad you're here. This space is designed for connection, support, and inspiration. Feel free to reach out — we're always ready to listen and help.</p>
      <Button onClick={() => navigate('/message')}>Next</Button>
    </main>
  )
}