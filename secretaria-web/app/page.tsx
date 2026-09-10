import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<<<<<<< HEAD
    <main className="p-4 bg-amber-400">
      <h1>Hello world!</h1>
    </main>
=======
    <div className="p-4">
      <main className="w-full flex justify-between">
        <h1>
          Landing Page
        </h1>
        <span className="flex gap-4">
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Cadastro</Link>          
        </span>
      </main>
    </div>
>>>>>>> estudando-nextjs
  );
}
