import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const renderCloseButton = () => {
    return <button
      type="button"
      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
      onClick={() => setShowSidebar(!showSidebar)}
    >
      <IoCloseOutline size={30} color="gray" />
    </button >
  }

  const renderMenus = () => {
    const menus = {
      'Optical': '/opticals',
      'Sunglasses': '/glasses',
    }
    return <div className="py-4 overflow-y-auto">
      <ul className="space-y-2 font-medium">
        {Object.entries(menus).map(([title, link], index) => {
          return (
            <li key={`sidebarMenu-${index}`}>
              <Link
                href={link}
                className="flex items-center p-2 text-gray-900 hover:text-specta-primary rounded-lg group"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  }

  return (
    <div id="drawer-navigation" className="fixed top-0 left-0 z-40 w-screen h-screen p-4 bg-white" >
      <h5 id="drawer-navigation-label" className="text-center font-semibold text-gray-500 uppercase">Menu</h5>
      {renderCloseButton()}
      {renderMenus()}
    </div >
  )
}

export default Sidebar;
