const SphereButton = ({ name, width = '11rem', onClick }) => {
  return (
    <div
      role="button-container"
      className="text-lg text-black hover:text-white hover:bg-specta-primary text-center align-middle px-3 py-2 h-12 border border-gray-300 hover:border-specta-primary rounded-2xl transition ease-in-out delay-100"
      style={{ width: width }}
      onClick={onClick}
    >
      <p role="button-name" className="font-medium">{name}</p>
    </div>
  )
}

export default SphereButton;
