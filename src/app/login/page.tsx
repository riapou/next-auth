'use client'
import { login } from "@/app/lib/actions/auth";
export default function Login() {
  return (
    <div className='h-screen flex items-center justify-center'>
        <button onClick={()=>login()} className="bg-neutral-700 p-10 rounded-2xl text-white hover:bg-neutral-800 text-2xl">Login with GitHub </button>
    </div>
  )
}
