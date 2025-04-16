"use client"
import { useRouter } from 'next/navigation'

const About = () => {

  const router = useRouter();

  return (
    <div className='flex flex-col m-auto items-center min-h-[50vh]'>
      <div>About Us</div>
      <button onClick={() => router.push("/")}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >Home</button>
    </div>
    
  )
}

export default About