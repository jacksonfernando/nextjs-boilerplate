const ProductHeroCard = ({ backgroundImage, title, description }) => {
  return (
    <div
      role="productherocard-container"
      className='flex flex-col w-full h-100  hover:shadow-lg bg-feed1 bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col space-y-2 items-start justify-center bg-gray-400 p-4 w-full h-full bg-opacity-50 bg-specta-primary transition-all duration-1000 group">
        <h1
          className="text-4xl font-bold tracking-tight leading-none text-white 0md:text-5xl lg:text-5xl"
          role="productherocard-title"
        >{title}</h1>
        <p
          role="productherocard-description"
        >{description}</p>
      </div>
    </div >
  )
}

export default ProductHeroCard
