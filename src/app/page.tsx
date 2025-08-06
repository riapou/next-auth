import Link from 'next/link'

export default function Home() {
  return (
    <div className='p-10 h-screen flex flex-col items-center'>
      <h1 className='text-3xl font-bold'>Welcome To Home Page 👋</h1>
      <div className='flex items-center justify-center h-full'>
        <Link className='bg-sky-600 text-white py-2 px-5 rounded-2xl hover:bg-sky-700' href='/login'>LogIn</Link>
      </div>
    </div>
  )
}
