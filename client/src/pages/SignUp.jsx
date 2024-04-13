import{ Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl test-center font-semibold'>SignUp</h1>
    <form className='flex flex-col gap-4'>
      <input type='text' placeholder='Username' 
      id='username' className='bg-slate-100 p-3 rounded-lg'/>
      <input type='email' placeholder='Email' 
      id='email' className='bg-slate-100 p-3 rounded-lg'/>
      <input type='password' placeholder='Password' 
      id='password' className='bg-slate-100 p-3 rounded-lg'/>
      <button type='submit' className='bg-slate-900 text-white p-3 
      rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>signUp</button>
    </form>
    <div className='flex gap-2 mt-2'>
      <p>Already have an account?</p>
      <Link to='/signin' >
      <span className='text-blue-500'>Sign In</span>
      </Link>
    </div>
    </div>
  );
}
