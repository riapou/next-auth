'use server'

import { signIn, signOut } from '@/auth'

export const login = async (provider: string) => {
  switch (provider) {
    case 'github':
      await signIn('github', { redirectTo: '/dashboard' })
      break
    case 'google':
      await signIn('google', { redirectTo: '/dashboard' })
      break
    default:
      throw new Error(`Unsupported provider: ${provider}`)
  }
}

export const logout = async () => {
  await signOut({ redirectTo: '/' })
}
