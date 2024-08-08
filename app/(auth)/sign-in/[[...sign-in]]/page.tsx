"use client"
import { SignIn } from "@clerk/clerk-react"

const SignInPage = () => {
  return (
    <main className="auth-page">
        <SignIn />
    </main>
  )
}

export default SignInPage