import Link from 'next/link'
import React from 'react'

interface User {
  id: string;
  name: string;

}

const UserLogin = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { next: {revalidate: 10}}); // a cada 10s, re-fetch (guardando no caching)
  const users: User[] = await res.json();

  return (
    
    <div className='p-4'>
      <h1 className='text-blue-500'>Usuários logados (teste de request)</h1>
      <ul>
        {users.map(user => 
        <li key={user.id}>
          {user.name}
        </li>
      )}
      </ul>
      <Link href={"/register"} className='text-red-500'>Não possui uma conta? Cadastre-se</Link>
    </div>

  )
}

export default UserLogin
