export default function Cards({ name, position, image }) {
  return (
    <div>
      <div className="flex items-start">
        <img
          src={image}
          alt={name}
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-96 object-cover"
        />
        <p className="transform rotate-90 origin-top-left text-xs sm:text-xs md:text-sm lg:text-base text-gray-600 uppercase whitespace-nowrap ml-3.5 sm:ml-4 md:ml-4 lg:ml-4.5 xl:ml-5">
          {position}
        </p>
      </div>
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>
    </div>
  );
}