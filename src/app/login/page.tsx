'use client'
import { SigninBTN } from '@/app/components/buttons'

export default function Login() {
  return (
    <div className='h-screen flex items-center justify-center flex-col gap-4'>
      <SigninBTN provider="github" />
    </div>
  )
}
