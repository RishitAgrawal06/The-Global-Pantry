export default function Footer() {
  return (
    <footer className="pt-16 pb-12 bg-gray-900 md:pt-20">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="flex justify-center text-gray-400">
          <div className="grid grid-cols-2 gap-8 mb-20 md:gap-28 md:grid-cols-4">
            <ul className="space-y-1">
              <li className="mb-2 font-semibold text-white uppercase">
                <a href="#">The Global Pantry</a>
              </li>
            </ul>
            <ul className="space-y-1">
              <li className="mb-2 font-semibold text-white uppercase">
                <a href="#cuisines">&nbsp;&nbsp;&nbsp;&nbsp;Cuisines</a>
              </li>
            </ul>
            <ul className="space-y-1">
              <li className="mb-2 font-semibold text-white uppercase">
                <a href="#recipes">&nbsp;&nbsp;Recipes</a>
              </li>
            </ul>
            <ul className="space-y-1">
              <li className="mb-2 font-semibold text-white uppercase">
                <a href="#search">Search</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="-mt-8 text-center text-gray-300">
          Made by{' '}
          <a
            href="https://github.com/RishitAgrawal06"
            className="underline"
          >
            Rishit Agrawal
          </a>
          . &copy; The Global Pantry 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
