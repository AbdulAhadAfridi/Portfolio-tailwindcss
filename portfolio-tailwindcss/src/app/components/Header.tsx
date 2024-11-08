
import { Menu } from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
  return (
    <header className='max-w-screen-xl mx-auto px-6 xl:px-0'>
    <div className='container pt-2  items-center mb-2 sticky top-0 '>
        <div className='flex justify-between items-center '>
            <div className='font-medium text-xl'>Abdul Ahad</div>
            <ul className='hidden md:block'>
            <li className='space-x-6 py-4'>
             <Link className='hover:text-[#F2AA4CFF]' href="/">Home</Link>
             <Link  className='hover:text-[#F2AA4CFF]'href="/project">Projects</Link>
             <Link  className='hover:text-[#F2AA4CFF]'href="/about">About</Link>
             <Link  className='hover:text-[#F2AA4CFF]'href="/contact">Contact</Link>
             </li>
              </ul> 
              <Sheet >
  <SheetTrigger className='md:hidden'>
    <Menu />
    </SheetTrigger>
    
  <SheetContent className='bg-white text-black'>
   <SheetHeader className='text-3xl font-bold'>
    Abdul Ahad
   
   <ul>
            <li className='py-16 flex flex-col text-xl font-semibold mt-4  gap-y-8'>
             <Link className='hover:text-[#F2AA4CFF]' href="/">Home</Link>
             <Link  className='hover:text-[#F2AA4CFF]'href="/project">Projects</Link>
             <Link  className='hover:text-[#F2AA4CFF]'href="/about">About</Link>
             <Link className='hover:text-[#F2AA4CFF]' href="/contact">Contact</Link>
             </li>
              </ul> 
              </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
     
    </div>
    </header>
  )
}

export default Header
    