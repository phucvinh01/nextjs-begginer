import Link from 'next/link'

export default function Home() {
  return (
    <main>
     <li>
      <ul><Link href="/youtube">Youtute</Link></ul>
      <ul><Link href='/facebook'>Facebook</Link></ul>
      <ul><Link href='/google'>Google</Link></ul>
     </li>
    </main>
  )
}
