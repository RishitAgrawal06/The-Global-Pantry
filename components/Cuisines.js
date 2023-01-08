export default function Features() {
  return (
    <section
      id="cuisines"
      className="py-20 bg-gradient-to-t from-[#d12f0f] to-[#ed9458]"
    >
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="space-y-16 md:space-y-24">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="space-y-5 md:text-center">
              <div className="inline-block rounded-lg bg-[#302953] bg-opacity-60 px-3 py-1 text-sm font-semibold text-indigo-100 hover:cursor-pointer hover:bg-opacity-40 hover:scale-110">
                <a href="https://www.tasteatlas.com/best/cuisines"> Popular Cuisines </a>
              </div>
              <h1 className="text-3xl font-semibold text-gray-100 md:text-5xl">
                Rich Food Around the World.
              </h1>
              <p className="text-xl text-gray-200 md:text-2xl">
                Each cuisine possessing a blast of flavor (Oftentimes, with the same ingredients).
                <br></br>
                Take a look at the most popular cuisines, and if get a craving for these <span className="font-semibold">world foods</span>{' '}
                swing by the <a href="#recipes"><u>Recipes</u></a> section to cook up some inspiration.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-8 text-lg md:grid-cols-2 lg:grid-cols-3">
            <div className="flex shadow-md hover:shadow-[#c0ebf0] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#c0ebf0] group-hover:shadow-[#c0ebf0] group-hover:shadow-sm"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                <a href="https://www.tasteatlas.com/italy"> <u>Italian Cuisine</u></a>
              </h3>
              <p className="text-gray-200">
                Italian cuisine is known for its diverse flavors, use of pasta, vegetables, olive oil, and grains, as well as meats and cheeses. It includes popular dishes such as pizza, pasta, lasagna, and risotto, as well as regional specialties. Italian cuisine has had a major influence on global eating habits and remains popular.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#c0ebf0] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#c0ebf0] group-hover:shadow-[#c0ebf0] group-hover:shadow-sm"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                <a href="https://www.tasteatlas.com/greece"> <u>Greek Cuisine</u></a>
              </h3>
              <p className="text-gray-200">
              Greek cuisine is a Mediterranean cuisine that includes dishes prepared using ingredients such as olives, olive oil, grains, vegetables, seafood, and meat. Some popular Greek dishes include gyros, moussaka, and tzatziki sauce. It focuses on fresh, seasonal ingredients and bold, savory flavors.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#c0ebf0] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#c0ebf0] group-hover:shadow-[#c0ebf0] group-hover:shadow-sm"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                <a href="https://www.tasteatlas.com/spain"> <u>Spanish Cuisine</u></a>
              </h3>
              <p className="text-gray-200">
                Spanish cuisine is a diverse and flavorful cuisine known for its use of fresh ingredients, such as tomatoes, peppers, onions, garlic, and herbs, as well as for its emphasis on seafood, which is abundant in many parts of the country. Some popular Spanish dishes include paella, tapas, and churros.  
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#c0ebf0] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#c0ebf0] group-hover:shadow-[#c0ebf0] group-hover:shadow-sm"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                <a href="https://www.tasteatlas.com/japan"> <u>Japanese Cuisine</u></a>
              </h3>
              <p className="text-gray-200">
                Japanese cuisine is characterized by its use of fresh ingredients, minimalist presentation, and an emphasis on balance and harmony. Rice is a staple food in Japanese cuisine, and it is often served with fish, seafood, and vegetables. Popular Japanese dishes include ramen, tempura, tonkatsu, and okonomiyaki.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#c0ebf0] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#c0ebf0] group-hover:shadow-[#c0ebf0] group-hover:shadow-sm"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                <a href="https://www.tasteatlas.com/india"> <u>Indian Cuisine</u></a>
              </h3>
              <p className="text-gray-200">
                Indian cuisine includes a wide variety of regional and traditional cuisines native to India. Dishes vary from each using local spices, herbs, vegetables, and fruits.
                It is heavily influence by religious and cultural choices and traditions. Popular dishes include curry, biryani, daal, and naan.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#c0ebf0] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5 hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#c0ebf0] group-hover:shadow-[#c0ebf0] group-hover:shadow-sm"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                <a href="https://www.tasteatlas.com/mexico"> <u>Mexican Cuisine</u></a>
              </h3>
              <p className="text-gray-200">
                Mexican cuisine is known for its varied flavors, colorful presentation, and the use of a wide range of ingredients,
                including chiles, beans, and corn. It is influenced by the indigenous and the Spanish. Popular dishes include tacos, burritos,
                enchalidas, quesadillas, and nachos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
