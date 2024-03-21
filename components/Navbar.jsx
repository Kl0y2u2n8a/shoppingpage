import React, {useState} from 'react'
import Image from "next/image"
import Logo from "../public/images/logonew.png";
import Link  from 'next/link';
import { SlMenu } from "react-icons/sl";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () =>{
        setOpenMenu(!openMenu);
    }

    return (
        <nav className='fixed top-0 left-0 z-10 w-full h-24 shadow-xl bg-[#ffefd5] '>
            <div className='flex justify-between items-center h-full w-full px-2 2xl:px-16'>
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="logo"
                        width="120"
                        height="50"
                        className="cursor-pointer"
                        priority
                    ></Image>
                </Link>
                
                <div>
                    <ul className='hidden md:flex gap-4 px-2'>
                        <Link href="/src/pages/About.js">
                            <li className='hover:font-bold hover:text-blue-400 hover:border-b-2 text-xl uppercase'>About us</li>
                        </Link>

                        <Link href="/">
                            <li className='hover:font-bold hover:text-blue-400 hover:border-b-2 text-xl uppercase'>Product</li>
                        </Link>

                        <Link href="/">
                            <li className='hover:font-bold hover:text-blue-400 hover:border-b-2 text-xl uppercase'>Contact us</li>
                        </Link>
                    </ul>
                </div>

                <div className='flex md:hidden text-3xl cursor-pointer' onClick={handleMenu}>
                    <SlMenu />
                </div>

            </div>
            
            {/* pop out menu */}
            <div className={
                openMenu 
                ? "fixed left-0 top-0 z-10 w-[65%] md:hidden h-screen bg-slate-500 p-10 ease-in duration-500"
                : "fixed left-[-300%] top-0 p-5 ease-in duration-500"
            }
            >
                <div className='flex w-full items-center justify-between'>
                    <div>
                        <Link href="/">
                            <Image
                                src={Logo}
                                alt="logo"
                                width="100"
                                height="50"
                                className="cursor-pointer"
                                priority
                            ></Image>
                        </Link>
                    </div>
                    <div onClick={handleMenu} className=' cursor-pointer text-2xl'>
                        <IoMdCloseCircle />
                    </div>
                </div>

                

                <div className='flex-col py-4'>
                    <ul>
                        <Link href="/">
                            <li className='text-xl uppercase cursor-pointer py-2' onClick={()=>setOpenMenu(false)}>Home</li>
                        </Link>

                        <Link href="/">
                            <li className='text-xl uppercase cursor-pointer py-2' onClick={()=>setOpenMenu(false)}>About us</li>
                        </Link>

                        <Link href="/">
                            <li className='text-xl uppercase cursor-pointer py-2' onClick={()=>setOpenMenu(false)}>Product</li>
                        </Link>

                        <Link href="/">
                            <li className='text-xl uppercase cursor-pointer py-2' onClick={()=>setOpenMenu(false)}>Contact us</li>
                        </Link>

                    </ul>

                </div>

                

            </div>

        </nav>
    )
}

export default Navbar
