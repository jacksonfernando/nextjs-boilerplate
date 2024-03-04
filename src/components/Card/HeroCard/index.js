import Link from "next/link"

const HeroCard = ({ backgroundImage, title, url = '' }) => {
  return (
    <div
      className='flex flex-col w-full h-100 sm:h-120 lg:h-140 hover:shadow-lg bg-feed1 bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
      role="herocard-container"
    >
      <div className="flex flex-col space-y-2 items-center justify-end bg-gray-400 p-4 w-full h-full bg-specta-primary bg-opacity-50 transition-all duration-1000 group pb-20">
        <h1
          className="mb-4 text-4xl font-bold tracking-tight leading-none text-white 0md:text-5xl lg:text-5xl"
          role="herocard-title"
        >{title}</h1>
        <div
          className="text-lg text-white  bg-specta-primary hover:bg-black text-center align-middle px-3 py-3 h-14 border border-specta-primary rounded-3xl transition ease-in-out delay-100 mb-10"
          style={{ width: 200 }}
        >
          <Link
            href={url}
            role="herocard-url"
          >
            Shop now
          </Link>
        </div>
      </div>
    </div >
  )
}

export default HeroCard
