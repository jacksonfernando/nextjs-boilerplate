import Link from "next/link";
import { BsInstagram, BsWhatsapp, BsTiktok } from "react-icons/bs";
import Shopee from "../Svg/Shopee";
import Tokopedia from "../Svg/Tokopedia";
import {
  INSTAGRAM_LINK,
  SHOPEE_LINK,
  TOKOPEDIA_LINK,
  TIKTOK_LINK
} from "@/constants/global";

const SOCIAL_MEDIA = {
  instagram: {
    icon: <BsInstagram
      size={30}
    />,
    link: INSTAGRAM_LINK
  },
  shopee: {
    icon: <Shopee />,
    link: SHOPEE_LINK
  },
  tokopedia: {
    icon: <Tokopedia />,
    link: TOKOPEDIA_LINK
  },
  tiktok: {
    icon: <BsTiktok
      size={25}
    />,
    link: TIKTOK_LINK
  },
  whatsapp: {
    icon: <BsWhatsapp
      size={30}
    />,
    link: '#'
  }
}

const Footer = () => {
  return (
    <footer className="sticky top-[100vh] z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 sm:text-center">© 2023
        <Link
          href="/"
          className="hover:underline"
        > Specta
        </Link>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap space-x-3 items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
        {Object.entries(SOCIAL_MEDIA).map(([key, value]) => {
          return (
            <Link
              href={value.link}
              key={key}
            >
              <li className="text-gray hover:text-specta-primary">
                {value.icon}
              </li>
            </Link>
          )
        })}
      </ul>
    </footer >
  )
}

export default Footer;
