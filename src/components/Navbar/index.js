'use client';

import Link from "next/link"
import { useState } from "react";
import { HiOutlineMoon } from "react-icons/hi2";
import { HiOutlineBars3 } from "react-icons/hi2";
import Sidebar from "../Sidebar";
import { SUNGLASSES, OPTICAL } from "@/constants/global";
import Image from "next/image";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const renderLeftMenu = () => {
    const menus = [OPTICAL, SUNGLASSES]
    const link = ['opticals', 'glasses']

    return (
      <>
        <ul className="hidden lg:flex flex-row justify-items-center font-normal px-4 md:flex-row space-x-2 lg:space-x-8">
          {menus.map((menu, index) => {
            return (
              <li key={index}>
                <Link
                  href={`/${link[index]}`}
                  className="pl-3 pr-4 text-black hover:text-specta-primary rounded md:bg-transparent md:p-0" >
                  {menu}
                </Link>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  const renderMidMenu = () => {
    return (
      <div className="text-center mr-11 md:mr-52 md:md-0">
        <Link
          href={'/'}
        >
          <h1 className="text-xl font-semibold tracking-tight leading-none text-gray-900 text-md sm:text-xl lg:text-2xl">
          </h1>
          <Image
            src={'/logo-specta-new.webp'}
            width={100}
            height={100}
            priority={true}
            alt='specta-logo'
          />
        </Link>
      </div >
    );
  }

  const renderRightMenu = () => {
    const icons = {
      moonIcon: <HiOutlineMoon size={22} key='moon' color="black" className="hover:stroke-specta-primary" />,
    }
    return <div className="hidden lg:flex flex-row font-medium space-x-4">
      {Object.values(icons).map(icon => icon)}
    </div>
  }

  const renderDropdownMenu = () => {
    return <div className="lg:hidden flex flex-row font-medium space-x-4">
      <HiOutlineBars3
        key='menu'
        size={30}
        color="black"
        onClick={() => setShowSidebar(!showSidebar)}
      />
    </div>
  }


  const renderSidebar = () => {
    return showSidebar && <Sidebar
      showSidebar={showSidebar}
      setShowSidebar={setShowSidebar}
    />
  }

  return (
    <>
      <nav className="sticky top-0 bg-white border-b border-gray-200">
        <div className="max-w-screen flex items-center justify-between mx-auto py-6 px-2">
          {renderLeftMenu()}
          {renderMidMenu()}
          {renderRightMenu()}
          {renderDropdownMenu()}
        </div>
        {renderSidebar()}
      </nav >
    </>
  )
}

export default Navbar
