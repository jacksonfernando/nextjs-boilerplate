import Image from "next/image";
import Link from "next/link";

const GlassesCard = ({ name, price, imageUrl, linkUrl = '' }) => {
  return (
    <Link href={linkUrl}>
      <div className="flex flex-col w-64 sm:w-100 xl:w-98 2xl:w-120 h-80 sm:h-96 lg:h-120 rounded-md hover:shadow-lg">
        <Image
          role="glassescard-image"
          src={imageUrl}
          width={500}
          height={500}
          alt={name}
          style={{ height: '80%', width: '100%' }}
        />
        <div
          className="pl-2 text-lg text-black"
          role="glassescard-name"
        >
          {name}
        </div>
        <div
          className="pl-2 mt-2 text-base text-gray-700"
          role="glassescard-price"
        >
          {price}
        </div>
      </div>
    </Link>
  )
}

export default GlassesCard;
