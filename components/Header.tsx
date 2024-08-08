import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href='/' className="md:flex-1">

      <div className='flex'>

      <Image 
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          // className="mr-2 md:hidden"
        />



        <div className="hidden md:inline-block w-24 h-9">
          <span className='font-bold text-3xl text-slate-300'>co<span className='font-bold text-3xl text-slate-300'>Edit</span></span>
        </div>
      </div>
        
      
        {/* <Image 
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        /> */}
      </Link> 
      {children}
    </div>
  )
}

export default Header