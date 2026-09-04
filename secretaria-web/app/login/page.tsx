import Link from 'next/link'
import React from 'react'

const UserLogin = () => {
  return (
    <div className='p-4'>
      <Link href={"/register"}>Não possui uma conta? Cadastre-se</Link>
    </div>
  )
}

export default UserLogin
