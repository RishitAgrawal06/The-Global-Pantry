import { useState } from 'react';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header>
      <div className="flex flex-col px-4 pt-4 mx-auto text-black roboto-regular max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center justify-between p-4">
          <a
            href="/"
            className="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-500"
          >
            The Global Pantry
          </a>
          <button
            className="px-3 py-1 bg-white rounded-full cursor-pointer bg-opacity-30 focus:outline-none md:hidden"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            'mt-3 flex-grow items-start md:flex lg:mt-0' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <div className="flex-col pl-4 text-xl md:flex-grow md:pl-0">
            <ul className="flex flex-wrap items-center justify-end flex-grow gap-2 pr-4 space-x-2 md:gap-6 md:space-x-6">
              <li>
                <a
                  href="#cuisines"
                  className="text-lg text-white md:text-gray-200"
                >
                  Cuisines
                </a>
              </li>
              <li>
                <a
                  href="#recipes"
                  className="text-lg text-white md:text-gray-200"
                >
                  Recipes
                </a>
              </li>
              <li>
                <a
                  href="#search"
                  className="text-lg text-white md:text-gray-200"
                >
                  Search
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
