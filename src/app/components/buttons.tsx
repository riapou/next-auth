'use client'

import { logout, login } from '@/app/lib/actions/auth' // changed `login` to `logout`

export function SignoutBTN() {
  return (
    <button
      className='bg-sky-600 text-white py-2 px-5 rounded-2xl hover:bg-sky-700'
      onClick={() => logout()}
    >
      Sign out
    </button>
  )
}
export function SigninBTN({ provider }: { provider: string }) {
  return (
    <button
      className='bg-gray-800 text-white text-3xl py-10 px-15 rounded-2xl hover:bg-gray-950'
      onClick={() => login(provider)}
    >
      Sign in with {provider}
    </button>
  )
}
