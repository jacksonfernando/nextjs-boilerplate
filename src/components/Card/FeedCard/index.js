import { PiInstagramLogoThin } from "react-icons/pi";

const FeedCard = ({ title, imageUrl }) => {
  const containerClassName = `flex flex-col w-full h-80 sm:h-96 lg:h-120 hover:shadow-lg bg-feed1 bg-cover bg-center`

  return (
    <div
      className={containerClassName}
      style={{ backgroundImage: `url(${imageUrl})` }}
      role="feedcard-container"
    >
      <div className="flex flex-col space-y-2 items-center justify-center bg-specta-primary bg-opacity-0 p-4 w-full h-full hover:bg-opacity-50 transition-all duration-1000 group">
        <PiInstagramLogoThin
          size={35}
          className="hidden group-hover:block text-white"
        />
        <p role="feedcard-title" className="hidden text-white justify-center group-hover:block">{title}</p>
      </div>
    </div>
  )
}

export default FeedCard;
