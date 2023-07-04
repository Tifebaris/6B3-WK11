import Link from 'next/link'
export default function Navbar() {
  return (
    <nav>
<ul  className="flex justify-end space-x-4 bg-blue-600 p-7 text-white h-[40px] items-center">
    <Link href='/'>
    <li>Home</li>
    </Link>
    <Link href='/students'>
    <li>Students</li>
    </Link>
    <Link href='/instructors'>
    <li>Intsructors</li>
    </Link>
    <Link href='/about'>
    <li>About</li>
    </Link>
    
</ul>
    </nav>
  )
}
