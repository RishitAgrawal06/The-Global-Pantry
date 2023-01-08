import Typing from './Typing';

export default function Landing() {
  return (
    <section>
      <div className="max-w-4xl mx-8 md:mx-auto">
        <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-5 md:space-y-8">
            <h1 className="text-3xl font-semibold text-white sm:text-5xl md:text-6xl md:text-gray-300">
              <br className="sm:hidden" />
              <Typing />
            </h1>
            <h2 className="text-lg text-gray-100 md:text-2xl md:mx-10 md:text-gray-500">
              The Global Pantry features international food and cultural insights. Discover dishes from around the
              world and the rich flavors that make them unique. Join us on this culinary journey!"
            </h2>
          </div>
        </div>
      </div>
      <div className="relative w-full px-4 text-center sm:px-0 md:mx-auto md:my-12 md:w-3/5">
        <div className="relative z-10">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tasteatlas.com/"
          >
            <img
              className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
              src="images/product.png"
              alt="Product Image"
            />
          </a>
        </div>
      </div>
      <div className="mt-20 space-y-6 text-center mb-28 md:mt-32">
        <h1 className="text-lg font-semibold tracking-wide text-center text-gray-100 text-opacity-75 uppercase md:mx-10 md:text-gray-900">
          Stats for Nerds
        </h1>
        <div className="shadow-md w-3/5 p-6 mx-auto bg-gray-100 rounded-2xl bg-opacity-70 md:bg-opacity-100 md:p-10">
          <div className="flex flex-wrap items-center justify-center flex-shrink -mt-6 -ml-6 space-x-6 space-y-6">
            <img
              className="h-5 mt-6 ml-6 md:h-20"
              src="images/globe.png"
              alt=""
            />
            <div className="flex flex-col items-center justify-center space-y-5">
              <h1 className="text-xl font-semibold text-gray-900 md:text-xl">
                195 Countries 
                <p>In the World
                </p>
              </h1>
            </div>

            <img
              className="h-12 md:h-20"
              src="images/pizza.png"
              alt=""
            />

            <div className="flex flex-col items-center justify-center space-y-5">
              <h1 className="text-xl font-semibold text-gray-900 md:text-xl">
                Highest Rated
                <p>Cuisine: Italian
                </p>
              </h1>
            </div>

            <img
              className="h-10 md:h-20"
              src="images/restaurantimage.png"
              alt=""
            />

            <div className="flex flex-col items-center justify-center space-y-5">
              <h1 className="text-xl font-semibold text-gray-900 md:text-xl">
                Over 19,000 Dishes
                <p>Served in Modern-
                </p>
                <p>Day Restaurants
                </p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
