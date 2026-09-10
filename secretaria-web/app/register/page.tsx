import Link from 'next/link'
import React from 'react'

const UserRegister = () => {
  return (
    <div className='p-4'>
      <Link href={"/login"}>Já possui uma conta? Faça o Login</Link>
    </div>
  )
}

export default UserRegister
