import { auth } from '@/auth'
import { SignoutBTN } from '@/app/components/buttons'
import { redirect } from 'next/navigation'
export default async function Login() {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }

  return (
    <div className='h-screen flex flex-col items-center p-10 gap-10'>
      <h1 className='text-3xl font-bold'>welcome to your dashboard</h1>
      <h1 className='text-2xl font-bold'>Name: {session?.user?.name ?? ''}</h1>
      <h1 className='text-9xl font-bold'>🐳</h1>
      <SignoutBTN />
    </div>
  )
}
