export default function Demo() {
  return (
    <section id="recipes" className="py-20 bg-opacity-50 bg-emerald-50">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 text-left md:mb-20 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80 hover:scale-110">
              <a href="https://www.tasteatlas.com/best"> Discover Recipes </a>
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 md:text-5xl">
              Want to Try?
            </h1>
            <p className="mx-auto text-xl md:w-2/3 md:text-1xl">
              Bring your taste buds to the next level with recipes from top-rated cuisines
              around the world. 
              <br></br> <u>Here is a specially curated, 6-course meal boasting the best of international cuisine.</u>
            </p>
          </div>
        </div>
      </div>


      <div className="max-w-3xl px-8 mx-auto sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-300 bg-opacity-60 text-emerald-900">
          Japanese Cuisine
        </div>
        <h3 className="mt-3 text-lg font-medium bg-clip-text text-3xl lg:max-w-3xl text-gray-400">
          <i>HORS D'OEUVRE</i>
          <br></br>
        </h3>
        <h2 className="mt-2 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-emerald-500">
          <a href="https://sharedappetite.com/recipes/sweet-and-spicy-soy-glazed-edamame/"> <u>SWEET AND SPICY SOY GLAZED EDAMAME</u></a>
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
        Sweet and spicy soy glazed edamame is a snack or appetizer made with edamame, which are young soybeans in the pod, that are coated in a sweet and spicy glaze made with soy sauce, sugar, and chili flakes. Edamame are often served in Japanese cuisine as a snack or appetizer, and the sweet and spicy soy glazed version adds an extra layer of flavor to the dish. 
        <br></br><br></br>To make this snack, the edamame are boiled until tender and then coated in the glaze, which can be prepared by combining soy sauce, sugar, and chili flakes in a small saucepan and heating until the sugar is dissolved. The edamame are then roasted or grilled until the glaze is caramelized and the beans are tender and flavorful. This snack is a popular choice at sushi restaurants and bars, and can also be easily made at home.
        </p>
        <img
          src="images/edamame.png"
          className="mt-8 transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
          // className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <h2 className="mt-8 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-small text-emerald-500">
          Recipe
        </h2>
        <p className="mt-2 text-lg font-medium text-md lg:max-w-3xl">
          PREP 5min | COOK 10min | SERVES 4
          <br></br>
        </p>
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl md:col-span-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                INSTRUCTIONS:
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                1. Preheat your oven to 400°F (200°C). Line a baking sheet with parchment paper. <br></br>
                2. Bring a pot of water to a boil and add the edamame. Cook for 5-7 minutes, or until tender. Drain the edamame and pat dry with paper towels. <br></br>
                3. In a small saucepan, combine the soy sauce, sugar, and chili flakes. Cook over medium heat, stirring constantly, until the sugar is dissolved. <br></br>
                4. Place the edamame on the prepared baking sheet and brush with the soy sauce mixture. <br></br>
                5. Roast the edamame for 8-10 minutes, or until the glaze is caramelized and the edamame are tender. <br></br>
                6. Remove the edamame from the oven and let them cool for a few minutes before serving. Enjoy! <br></br>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                INGREDIENTS:
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                1. 1 pound of frozen edamame, thawed <br></br>
                2. 1/4 cup of soy sauce <br></br>
                3. 1/4 cup of granulated sugar <br></br>
                4. 1 teaspoon of chili flakes (more or less to taste) <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-300 bg-opacity-60 text-emerald-900">
          Mexican Cuisine
        </div>
        <h3 className="mt-3 text-lg font-medium bg-clip-text text-3xl lg:max-w-3xl text-gray-400">
          <i>SOUP</i>
          <br></br>
        </h3>
        <h2 className="mt-2 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-emerald-500">
          <a href="https://cooking.nytimes.com/recipes/1019107-vegetarian-tortilla-soup"> <u>VEGETARIAN MEXICAN TORTILLA SOUP</u></a>
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
        Vegetarian Mexican tortilla soup is a hearty and flavorful soup made with a variety of vegetables and spices, and often served with tortilla chips or strips as a garnish. It is a type of Mexican soup that is suitable for vegetarians as it does not contain meat. 
        <br></br><br></br>Traditional Mexican tortilla soup is often made with chicken broth, but vegetarian versions can be made with vegetable broth or water. Common ingredients in vegetarian Mexican tortilla soup include tomatoes, onions, bell peppers, corn, beans, and spices such as cumin, chili powder, and oregano. 
        <br></br><br></br>The soup is typically served hot and garnished with a variety of toppings such as cheese, avocado, cilantro, and lime wedges. It is a popular and nourishing meal that is enjoyed by vegetarians and meat-eaters alike.
        </p>
        <img
          src="images/tortillasoup.png"
          className="mt-8 transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
          // className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <h2 className="mt-8 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-small text-emerald-500">
          Recipe
        </h2>
        <p className="mt-2 text-lg font-medium text-md lg:max-w-3xl">
          PREP 15min | COOK 1h | SERVES 4
          <br></br>
        </p>
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl md:col-span-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                INSTRUCTIONS:
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                1. In a large pot or Dutch oven, heat the olive oil over medium heat. <br></br>
                2. Add the onion, bell pepper, garlic, and jalapeño pepper (if using) and cook until the vegetables are tender, about 5 minutes. <br></br>
                3. Stir in the cumin, chili powder, oregano, paprika, cayenne pepper (if using), salt, and pepper. Cook for 1 minute more. <br></br>
                4. Add the tomatoes, corn, beans, and vegetable broth to the pot. <br></br>
                5. Bring the mixture to a boil, then reduce the heat to low and simmer for 15-20 minutes. <br></br>
                6. Ladle the soup into bowls and garnish with the crushed tortilla chips, cheese, avocado, cilantro, and lime wedges. <br></br>
                7. Serve hot. Enjoy! <br></br>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                INGREDIENTS:
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                1. 2 tablespoons of olive oil <br></br>
                2. 1 onion, diced <br></br>
                3. 1 bell pepper, diced <br></br>
                4. 2 cloves of garlic, minced <br></br>
                5. 1 jalapeño pepper, seeded and minced (optional) <br></br>
                6. 1 teaspoon of ground cumin <br></br>
                7. 1 teaspoon of chili powder <br></br>
                8. 1/2 teaspoon of oregano <br></br>
                9. 1/4 teaspoon of paprika <br></br>
                10. 1/4 teaspoon of cayenne pepper (optional) <br></br>
                11. salt and pepper to taste <br></br>
                12. 1 (14.5-ounce) can of diced tomatoes <br></br>
                13. 1 cup of corn kernels (frozen or canned) <br></br>
                14. 1 cup of cooked black beans or kidney beans <br></br>
                15. 4 cups of vegetable broth <br></br>
                16. 1 cup of crushed tortilla chips or strips, for garnish <br></br>
                17. 1/2 cup of shredded cheese, for garnish <br></br>
                18. 1 avocado, diced, for garnish <br></br>
                19. 1/4 cup of chopped cilantro, for garnish <br></br>
                20. 1 lime, cut into wedges, for garnish <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-300 bg-opacity-60 text-emerald-900">
          Greek Cuisine
        </div>
        <h3 className="mt-3 text-lg font-medium bg-clip-text text-3xl lg:max-w-3xl text-gray-400">
          <i>APPETIZER</i>
          <br></br>
        </h3>
        <h2 className="mt-2 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-emerald-500">
          <a href="https://www.tasteatlas.com/spanakopita"> <u>SPANAKOPITA</u></a>
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
        Spanakopita (also spelled "spanakopitta") is a traditional Greek dish made with phyllo dough and a filling of chopped spinach, feta cheese, and onions or scallions. It is typically formed into a triangular or rectangular shape and baked until the phyllo is crisp and flaky. Some variations of spanakopita may also include other ingredients such as eggs, herbs, and spices. 
        <br></br><br></br>The dish is often served as an appetizer or snack, but can also be served as a main course when accompanied by a salad or other side dish. It is a popular and beloved food in Greece and around the world, and is often served at Greek restaurants and festivals.
        <br></br><br></br>The traditional way to serve the pie is to cut it into small triangles and consume it while slightly warm, accompanied by tzatziki sauce - a flavorful dip consisting of yogurt, garlic, and cucumbers.
        </p>
        <img
          src="images/spanakopita.png"
          className="mt-8 transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
          // className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <h2 className="mt-8 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-small text-emerald-500">
          Recipe
        </h2>
        <p className="mt-2 text-lg font-medium text-md lg:max-w-3xl">
          PREP 1h 10min | COOK 1h 25m | SERVES 8
          <br></br>
        </p>
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl md:col-span-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                INSTRUCTIONS:
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                1. Preheat your oven to 375°F (190°C). <br></br>
                2. In a large bowl, combine the spinach, feta cheese, onions or scallions, melted butter, parsley, dill, nutmeg, salt, and pepper. Mix well to combine. <br></br>
                3. Lay out a sheet of phyllo dough on a clean work surface and brush it lightly with melted butter. Lay another sheet of phyllo dough on top of the first and brush it with butter. Repeat with the remaining phyllo sheets, making sure to keep them covered with a damp cloth to prevent them from drying out. <br></br>
                4. Spread the spinach mixture evenly over the top of the phyllo sheets, leaving a border of about 1 inch around the edges. <br></br>
                5. Starting from one of the short ends, roll up the phyllo dough tightly, enclosing the filling. Brush the top with more melted butter. <br></br>
                6. Place the spanakopita seam-side down on a baking sheet and bake for 35-45 minutes, or until the phyllo is golden brown and crisp. <br></br>
                7. Remove the spanakopita from the oven and let it cool for a few minutes before slicing and serving. Enjoy! <br></br>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                INGREDIENTS:
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                1. 1 pound of fresh spinach, washed and finely chopped <br></br>
                2. 1/2 cup of crumbled feta cheese <br></br>
                3. 1/2 cup of finely chopped onions or scallions <br></br>
                4. 3 tablespoons of butter, melted <br></br>
                5. 1/2 cup of finely chopped fresh parsley <br></br>
                6. 1/4 cup of finely chopped fresh dill <br></br>
                7. 1/4 teaspoon of ground nutmeg <br></br>
                8. salt and pepper to taste <br></br>
                9. 1 pound of phyllo dough, thawed <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-300 bg-opacity-60 text-emerald-900">
          Spanish Cuisine
        </div>
        <h3 className="mt-3 text-lg font-medium bg-clip-text text-3xl lg:max-w-3xl text-gray-400">
          <i>SALAD</i>
          <br></br>
        </h3>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-emerald-500">
          <a href="https://www.tasteatlas.com/pipirrana"> <u>PIPIRRANA</u></a>
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
        Pipirrana is a traditional Spanish cold salad or appetizer made with raw vegetables, typically tomatoes, peppers, and onions, mixed with canned tuna, boiled eggs, and olives, and dressed with olive oil and vinegar. It is often served with bread or crackers as a tapa (small snack or appetizer) or as a light summer meal. 
        <br></br><br></br>The vegetables used in pipirrana are typically diced or finely chopped, and the salad may also include additional ingredients such as garlic, parsley, and other herbs. Pipirrana is a popular and refreshing dish in Spain, particularly in the Andalusia region.
        </p>
        <img
          src="images/pipirrana.png"
          className="mt-8 transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
          // className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <h2 className="mt-8 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-small text-emerald-500">
          Recipe
        </h2>
        <p className="mt-2 text-lg font-medium text-md lg:max-w-3xl">
          PREP 15min | COOK 10min | SERVES 4
          <br></br>
        </p>
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl md:col-span-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                INSTRUCTIONS:
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                1. In a large bowl, combine the tomatoes, bell pepper, onion, eggs, and olives. <br></br>
                2. In a small bowl, whisk together the olive oil, vinegar, salt, and pepper. Pour the dressing over the vegetables and mix well to combine. <br></br>
                3. Garnish the pipirrana with parsley, if using, and serve chilled with bread or crackers. Enjoy! <br></br>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                INGREDIENTS:
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                1. 2 tomatoes, diced <br></br>
                2. 1 green bell pepper, diced <br></br>
                3. 1 red onion, diced <br></br>
                4. 2 boiled eggs, peeled and diced <br></br>
                5. 1/2 cup of green olives, pitted and halved <br></br>
                6. 3 tablespoons of olive oil <br></br>
                7. 2 tablespoons of red wine vinegar <br></br>
                8. salt and pepper to taste <br></br>
                9. a handful of fresh parsley, chopped (optional) <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-300 bg-opacity-60 text-emerald-900">
          Italian Cuisine
        </div>
        <h3 className="mt-3 text-lg font-medium bg-clip-text text-3xl lg:max-w-3xl text-gray-400">
          <i>MAIN COURSE</i>
          <br></br>
        </h3>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-emerald-500">
          <a href="https://www.tasteatlas.com/pizza"> <u>PIZZA MARGHERITA</u></a>
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
        Pizza Margherita is a type of pizza that originated in Italy and is named after Queen Margherita of Savoy. It is made with tomato sauce, mozzarella cheese, and fresh basil, and is intended to represent the colors of the Italian flag. 
        <br></br><br></br>The story goes that in 1889, Queen Margherita visited the city of Naples and requested a special meal of local dishes. The chef, Raffaele Esposito, created a pizza topped with tomatoes, mozzarella, and basil to represent the colors of the Italian flag, and named it "Pizza Margherita" in honor of the queen. Today, Pizza Margherita is a popular and classic choice at pizzerias around the world.
        </p>
        <img
          src="images/pizzarecipe.png"
          className="mt-8 transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
          // className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <h2 className="mt-8 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-small text-emerald-500">
          Recipe
        </h2>
        <p className="mt-2 text-lg font-medium text-md lg:max-w-3xl">
          PREP 1h | COOK 15m | SERVES 4
          <br></br>
        </p>
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl md:col-span-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                INSTRUCTIONS:
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                1. Preheat your oven to 450°F (230°C). If you have a pizza stone, place it in the oven to preheat as well. <br></br>
                2. On a lightly floured surface, roll out the pizza dough to your desired shape and thickness. Transfer the dough to a lightly floured pizza peel or the back of a baking sheet. <br></br>
                3. Spread the crushed tomatoes over the dough, leaving a small border around the edge. <br></br>
                4. Arrange the mozzarella slices over the top of the tomatoes. <br></br>
                5. Scatter the basil leaves over the top of the mozzarella. <br></br>
                6. Drizzle the olive oil over the top of the pizza. <br></br>
                7. Season with salt and pepper to taste. <br></br>
                8. If using a pizza stone, carefully slide the pizza from the peel onto the stone. If using a baking sheet, place the baking sheet in the oven. <br></br>
                9. Bake the pizza for 8-12 minutes, or until the crust is golden brown and the cheese is melted and bubbly. <br></br>
                10. Remove the pizza from the oven and let it cool for a few minutes before slicing and serving. Enjoy! <br></br>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                INGREDIENTS:
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                1. 1 pound of pizza dough (store-bought or homemade) <br></br>
                2. 1 cup of crushed tomatoes <br></br>
                3. 4 ounces of fresh mozzarella cheese, thinly sliced <br></br>
                4. a handful of fresh basil leaves <br></br>
                5. 2 tablespoons of olive oil <br></br>
                6. salt and pepper, to taste <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-300 bg-opacity-60 text-emerald-900">
          Indian Cuisine
        </div>
        <h3 className="mt-3 text-lg font-medium bg-clip-text text-3xl lg:max-w-3xl text-gray-400">
          <i>DESSERT</i>
          <br></br>
        </h3>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-emerald-500">
          <a href="https://www.tasteatlas.com/ras-malai"> <u>RASMALAI</u></a>
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
        Rasmalai is a dessert from the Indian subcontinent made with small, soft balls of paneer (a type of fresh cheese) soaked in a thick, sweet milk sauce. The word "rasmalai" means "juice cream" in Hindi, referring to the sweet milk sauce. The paneer balls are often flavored with cardamom and saffron, and the milk sauce is made by reducing and sweetening milk with sugar. 
        <br></br><br></br>Rasmalai is typically served chilled, garnished with almonds, pistachios, and rose petals. It is a popular and beloved dessert in India and around the world, and is often served at celebrations and special occasions.
        </p>
        <img
          src="images/rasmalai.png"
          className="mt-8 transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
          // className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <h2 className="mt-8 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-small text-emerald-500">
          Recipe
        </h2>
        <p className="mt-2 text-lg font-medium text-md lg:max-w-3xl">
          PREP 1h | COOK 1h 15min | SERVES 6
          <br></br>
        </p>
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl md:col-span-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                INSTRUCTIONS:
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                1. In a large saucepan, combine the milk, sugar, cardamom seeds, and saffron. Bring to a boil over medium heat, stirring occasionally. Reduce the heat to low and simmer for 1 hour, or until the milk has reduced by half and is thick and creamy. <br></br>
                2. In a separate saucepan, bring the water to a boil. Reduce the heat to low and add the heavy cream, ricotta cheese, flour, melted butter, baking powder, and salt. Cook over low heat, stirring constantly, until the mixture forms a smooth dough. <br></br>
                3. Using your hands or a cookie scoop, shape the dough into small balls about the size of a cherry. Drop the balls into the simmering milk sauce and cook for 5-7 minutes, or until they are cooked through and puffed up. <br></br>
                4. Remove the pan from the heat and let the rasmalai cool to room temperature. Transfer the rasmalai to the refrigerator and chill for at least 2 hours, or until chilled through. <br></br>
                5. To serve, spoon the rasmalai into bowls or onto a platter and garnish with almonds, pistachios, and rose petals. Enjoy! <br></br>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                INGREDIENTS:
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                1. 1 quart of whole milk <br></br>
                2. 1/2 cup of granulated sugar <br></br>
                3. 1/2 teaspoon of cardamom seeds, crushed <br></br>
                4. a pinch of saffron threads <br></br>
                5. 1/2 cup of water <br></br>
                6. 1/4 cup of heavy cream <br></br>
                7. 1/4 cup of ricotta cheese <br></br>
                8. 1/4 cup of ricotta cheese <br></br>
                9. 2 tablespoons of unsalted butter, melted <br></br>
                10. 1/4 teaspoon of baking powder <br></br>
                11. 1/4 teaspoon of salt <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
