const restaurants = [
  {
    "name": "A2B New Jersey",
    "icon": "restaurant",
    "distance": "nearby"
  },
  {
    "name": "Agri Cola Eatery",
    "icon": "restaurant",
    "distance": "nearby"
  },
  {
    "name": "Ajiten Princeton",
    "icon": "restaurant",
    "distance": "nearby"
  },
  {
    "name": "Amazing Thai NJ",
    "icon": "restaurant",
    "distance": "nearby"
  },
  {
    "name": "Alfonso's Pizzeria",
    "icon": "restaurant",
    "distance": "nearby"
  },
  {
    "name": "Aljon's Pizza West Windsor",
    "icon": "restaurant",
    "distance": "nearby"
  }
  /*
  ,
  {
    "name": "brickhousetavernandtap",
    "icon": "restaurant",
    "distance": "nearby"
  },
  {
    "name": "elementsprinceton",
    "icon": "restaurant",
    "distance": "nearby"
  },
  {
    "name": "localgreeknj",
    "icon": "restaurant",
    "distance": "nearby"
  },
  {
    "name": "mistralprinceton",
    "icon": "restaurant",
    "distance": "nearby"
  },
  {
    "name": "pizzadenprinceton",
    "icon": "restaurant",
    "distance": "nearby"
  },
  {
    "name": "rootssteakhouse",
    "icon": "restaurant",
    "distance": "nearby"
  }
    */
];

const menus = [
  {
    "name": "A2B New Jersey",
    "items": [
      {
        "item": "All the items in this restaurant are Vegetarian",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      }
    ]
  },
  {
    "name": "Agri Cola Eatery",
    "items": [
      {
        "item": "Roasted Eggplant, Red Pepper & Tomato Soup (V) sourdough fig jam grilled cheese bite",
        "price": "10.95",
        "menu_section": "Lunch",
        "category_section": "Farmer's Market",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "New England Clam Chowder garlic parmesan croutons & crispy bacon",
        "price": "13.95",
        "menu_section": "Lunch",
        "category_section": "Farmer's Market",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Harvest Fall Salad (GF/V) young lettuces, port wine poached pears, candied walnuts, smoked moody blue cheese, radish, cucumber, roise vinaigrette",
        "price": "15.95",
        "menu_section": "Lunch",
        "category_section": "Farmer's Market",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Organic Kale Salad (GF/V) young kale, roasted acorn squash, sun dried tomatoes, pickled cauliflower, feta cheese, radish and carrot, pumpkin seed vinaigrette",
        "price": "14.95",
        "menu_section": "Lunch",
        "category_section": "Farmer's Market",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fall Hummus Board (V) heirloom carrot and dill, zaatar, warm pita pillow, feta cheese, garden vegetables",
        "price": "19.95",
        "menu_section": "Lunch",
        "category_section": "Farmer's Market",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Local Yellowfin Tuna Tartare avocado, deviled egg, sliced watermelon radish, filone crisps",
        "price": "20.95",
        "menu_section": "Lunch",
        "category_section": "Farmer's Market",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Artisan Cheeseboard (V) local honeycomb, golden raisins sunflower seed crackers",
        "price": "20.95",
        "menu_section": "Lunch",
        "category_section": "Farmer's Market",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bang Bang Cauliflower (GF/VGN) sweet & sour chili glaze, fresno chiles, sesame seeds, scallions",
        "price": "15.95",
        "menu_section": "Lunch",
        "category_section": "Farmer's Market",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Crispy Rhode Island Calamari house- made pickled vegetables, arugula, pickled jalapeño, basil aioli",
        "price": "19.95",
        "menu_section": "Lunch",
        "category_section": "Farmer's Market",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local Burrata (V) figs, Aleppo spiced honeynut squash, pomegranate seeds, arugula and basil oil, filone toast",
        "price": "16.95",
        "menu_section": "Lunch",
        "category_section": "Farmer's Market",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Marinated Beet Salad (GF/V) arugula, pistachios, blood oranges, radish, gold and chioggia beets, truffle oil, goat yogurt, chives",
        "price": "15.95",
        "menu_section": "Lunch",
        "category_section": "Farmer's Market",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Margherita (V) fresh mozzarella, crushed tomatoes, basil",
        "price": "17.95",
        "menu_section": "Lunch",
        "category_section": "Flatbreads From Our “Fiero” Oven",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Local Mushroom Flatbread (V) spinach, Fulper Farms riccota cheese, local egg, pecorino romano, truffle oil",
        "price": "19.95",
        "menu_section": "Lunch",
        "category_section": "Flatbreads From Our “Fiero” Oven",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fig Flatbread fig jam, Speck, duck fat potatoes, fontina cheese, rosemary",
        "price": "19.95",
        "menu_section": "Lunch",
        "category_section": "Flatbreads From Our “Fiero” Oven",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pepperoni Flatbread local artisanal pepperoni, local burrata, pickled jalapeño, baby arugula, basil",
        "price": "19.95",
        "menu_section": "Lunch",
        "category_section": "Flatbreads From Our “Fiero” Oven",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Organic Egg Frittata (GF/V) Fulper Farms Ricotta, spinach, perserved tomato, pickled red onion, arugula salad",
        "price": "21.95",
        "menu_section": "Lunch",
        "category_section": "Oceans and Fields",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Jerk Shrimp Tacos (3 pcs) (GF) red cabbage, pickled red onion, avocado puree, chili salsa, cilantro",
        "price": "17.95",
        "menu_section": "Lunch",
        "category_section": "Oceans and Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crispy Chicken Sandwich house-made b&b pickles, honey-mustard slaw, pickled jalapeno",
        "price": "20.95",
        "menu_section": "Lunch",
        "category_section": "Oceans and Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hand Pressed Beef Burger Midwest 100% ground chuck, aged cheddar, house-made b&b pickles, lettuce, aioli (add bacon +2)",
        "price": "21.95",
        "menu_section": "Lunch",
        "category_section": "Oceans and Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Grain Bowl (V) sauteed kale, roasted cauliflower, cranberries, cashews, crispy fried brussels sprout leaves",
        "price": "28.95",
        "menu_section": "Lunch",
        "category_section": "Oceans and Fields",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Grilled Chicken Pita Pillow hummus, avocado, tomato, cucumber, arugula, lemon-oregano dressing, sweet potato chips",
        "price": "19.95",
        "menu_section": "Lunch",
        "category_section": "Oceans and Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spaghetti Squash & Chicken Ricotta Meatballs (GF) charred tomato sauce, swiss chard, hon shimeji mushrooms, basil, parmesan",
        "price": "24.95",
        "menu_section": "Lunch",
        "category_section": "Oceans and Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Butternut Squash Ravioli (VGN) Chanterelle mushrooms, leeks, swiss chard, toasted walnuts, pomegranate seeds, vegan tree nut butter, basil",
        "price": "29.95",
        "menu_section": "Lunch",
        "category_section": "Oceans and Fields",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Katsu Salad mango, cherry tomatoes, red peppers, carrots, Napa cabbage, arugula, asian cilantro dressing, peanuts, jalapeno",
        "price": "24.95",
        "menu_section": "Lunch",
        "category_section": "Oceans and Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sourdough Grilled Cheese (V) fig jam, fontina and Comte cheese, red endive & roasted eggplant, red pepper. & tomato soup",
        "price": "16.95",
        "menu_section": "Lunch",
        "category_section": "Oceans and Fields",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spiced Faroe Island Salmon Salad (GF) young spinach, quinoa, lentils, cauliflower, pickles red onion, raisins, saffron emulsion",
        "price": "25.95",
        "menu_section": "Lunch",
        "category_section": "Oceans and Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Steak & Eggs Flat iron steak, organic eggs, acorn squash hash, crispy fingerling potatoes, salsa verde",
        "price": "29.95",
        "menu_section": "Lunch",
        "category_section": "Oceans and Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Stir-Fried Pork & Soba Noodles roasted broccoli, Jimmy Nardello peppers, green onions, ginger, heirloom garlic, cilantro",
        "price": "28.95",
        "menu_section": "Lunch",
        "category_section": "Oceans and Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Warm Buttered Cinnamon Roll (V) cream cheese frosting",
        "price": "13.95",
        "menu_section": "Brunch",
        "category_section": "Brunch",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roasted Eggplant, Red Pepper & Tomato Soup (V) sourdough fig jam grilled cheese bite",
        "price": "10.95",
        "menu_section": "Brunch",
        "category_section": "Brunch",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "New England Clam Chowder garlic parmesan croutons & crispy bacon",
        "price": "13.95",
        "menu_section": "Brunch",
        "category_section": "Brunch",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Harvest Salad (GF/V) young lettuces, port wine poached pears, candied walnuts, smoked moody blue cheese, radish, cucumber, rose vinagrette",
        "price": "15.95",
        "menu_section": "Brunch",
        "category_section": "Brunch",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spring Hummus Board (V) heirloom carrot and dill, zaatar, warm pita pillow, feta cheese, garden vegetables",
        "price": "19.95",
        "menu_section": "Brunch",
        "category_section": "Brunch",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Yogurt Parafait (V) granola, figs, fresh strawberries, blueberry compote, basil",
        "price": "15.95",
        "menu_section": "Brunch",
        "category_section": "Brunch",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Organic Kale Salad (GF/V) young kale, roasted acorn squash, sun dried tomatoes, pickled cauliflower, feta cheese, radish and carrot, pumpkin seed vinaigrette",
        "price": "14.95",
        "menu_section": "Brunch",
        "category_section": "Brunch",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Local Yellowfin Tuna Tartare avocado, deviled egg, sliced watermelon radish, filone crisps",
        "price": "20.95",
        "menu_section": "Brunch",
        "category_section": "Brunch",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Artisan Cheeseboard (V) local honeycomb, golden raisins, sunflower seed crackers",
        "price": "20.95",
        "menu_section": "Brunch",
        "category_section": "Brunch",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bang Bang Cauliflower (GF/VGN) sweet & sour glaze, Fresno chilis, sesame seeds, scallions",
        "price": "15.95",
        "menu_section": "Brunch",
        "category_section": "Brunch",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Crispy Rhode Island Calamari house made pickled vegetables, pickled jalapenos, arugula, basil aioli",
        "price": "19.95",
        "menu_section": "Brunch",
        "category_section": "Brunch",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local Burrata (V) figs, Aleppo spiced honeynut squash, pomegranate seeds, arugula and basil oil, filone toast",
        "price": "16.95",
        "menu_section": "Brunch",
        "category_section": "Brunch",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Marinated Beet Salad (GF/V) arugula, pistachios, blood oranges, radish, gold and Chioggia beets, truffle oil, goat yogurt, chives",
        "price": "15.95",
        "menu_section": "Brunch",
        "category_section": "Brunch",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Harvest 3 Egg Omelet choose three toppings, additional toppings +1, served with tater tots & arugula salad. cheddar- sauteed onion- red pepper- spinach- gruyere cheese- fingerling potato- mushrooms- bacon- ham- tomato",
        "price": "16.95",
        "menu_section": "Brunch",
        "category_section": "Brunch",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Margherita Flatbread (V) house- smoked mozzarella, crushed tomatoes, basil",
        "price": "17.95",
        "menu_section": "Brunch",
        "category_section": "Flatbreads from our \"Fiero\" Oven",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Local Mushroom Flatbread (V) spinach, ricotta cheese,local egg, pecorino Romano",
        "price": "19.95",
        "menu_section": "Brunch",
        "category_section": "Flatbreads from our \"Fiero\" Oven",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fig Flatbread fig jam, Speck, duck fat potatoes, fontina cheese, rosemary",
        "price": "19.95",
        "menu_section": "Brunch",
        "category_section": "Flatbreads from our \"Fiero\" Oven",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pepperoni Flatbread local artisanal pepperoni, local burrata, pickled jalapeño, baby arugula, basil",
        "price": "19.95",
        "menu_section": "Brunch",
        "category_section": "Flatbreads from our \"Fiero\" Oven",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "The Golden Pancake honey maple butter & maple- honey syrup",
        "price": "17.95",
        "menu_section": "Brunch",
        "category_section": "Skillet & Coop",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brioche French Toast (V) seasonal compote, maple syrup, chantilly cream",
        "price": "18.95",
        "menu_section": "Brunch",
        "category_section": "Skillet & Coop",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spinach Mushroom & 3 Cheese Quiche (V) leeks, salsa verde, arugula salad",
        "price": "19.95",
        "menu_section": "Brunch",
        "category_section": "Skillet & Coop",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Short Rib Hash smoked mozzarella, fingerling potatoes, sourdough toast, sous vide egg, red wine demi",
        "price": "21.95",
        "menu_section": "Brunch",
        "category_section": "Skillet & Coop",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Steak & Eggs flat iron steak, organic eggs, acorn squash hash, crispy fingerling potatoes, salsa verde",
        "price": "29.95",
        "menu_section": "Brunch",
        "category_section": "Skillet & Coop",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eggs Any Style Over Idaho organic eggs, crispy tater tots, Nueske's smoked bacon, chipotle hollandaise, arugula, chives",
        "price": "19.95",
        "menu_section": "Brunch",
        "category_section": "Skillet & Coop",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Avocado Toast (VGN) sourdough bread, toasted seeds, watermelon radish, crispy kale (add a poached egg +3)",
        "price": "13.95",
        "menu_section": "Brunch",
        "category_section": "Skillet & Coop",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Porkroll, Egg & Cooper Sharp Cheese Sandwich toasted brioche bun, tater tots, arugula salad",
        "price": "14.95",
        "menu_section": "Brunch",
        "category_section": "Skillet & Coop",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roasted Butternut Squash Ravioli (VGN) Chanterelle mushrooms, leeks, swiss chard, toasted walnuts, pomegranate seeds, vegan tree nut butter, basil",
        "price": "29.95",
        "menu_section": "Brunch",
        "category_section": "Ocean & Fields",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Hand Pressed Beef Burger Midwest 100% ground chuck, aged cheddar, house-made b&b pickles, aioli, lettuce (add house-made bacon +2)",
        "price": "21.95",
        "menu_section": "Brunch",
        "category_section": "Ocean & Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spiced Faroe Island Salmon Salad (GF) young spinach, quinoa, lentils, cauliflower, pickled red onion, raisins, saffron emulsion",
        "price": "25.95",
        "menu_section": "Brunch",
        "category_section": "Ocean & Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Grilled Chicken Pita Pillow hummus, avocado, tomato, cucumbers, arugula, lemon oregano dressing, sweet potato chips",
        "price": "19.95",
        "menu_section": "Brunch",
        "category_section": "Ocean & Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jerk Shrimp Tacos (3 pcs) (GF) red cabbage, pickled red onion, avocado puree, chili salsa, cilantro",
        "price": "17.95",
        "menu_section": "Brunch",
        "category_section": "Ocean & Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Katsu Salad mango, cherry tomatoes, red peppers, carrots, Napa cabbage, arugula, Asian cilantro dressing, peanuts, jalapeno",
        "price": "24.95",
        "menu_section": "Brunch",
        "category_section": "Ocean & Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sourdough Grilled Cheese (V) fig jam, fontina and Comte cheese, red endive & roasted eggplant, red pepper & tomato soup",
        "price": "16.95",
        "menu_section": "Brunch",
        "category_section": "Ocean & Fields",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Stir- Fried Pork & Soba Noodles roasted broccoli, Jimmy Nardello peppers, green onions, ginger, heirloom garlic, cilantro",
        "price": "28.95",
        "menu_section": "Brunch",
        "category_section": "Ocean & Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Porkroll",
        "price": "6.95",
        "menu_section": "Brunch",
        "category_section": "Sides to Share",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fingerling Potatoes (VGN/GF) rosemary oil",
        "price": "10.95",
        "menu_section": "Brunch",
        "category_section": "Sides to Share",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Hand-Cut Fries (VGN)",
        "price": "9.95",
        "menu_section": "Brunch",
        "category_section": "Sides to Share",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hand Cut Truffle fries (V) sea salt",
        "price": "11.95",
        "menu_section": "Brunch",
        "category_section": "Sides to Share",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hand-Rolled Cheesy Potato Tots",
        "price": "9.95",
        "menu_section": "Brunch",
        "category_section": "Sides to Share",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Nueske's Smoked Bacon",
        "price": "6.95",
        "menu_section": "Brunch",
        "category_section": "Sides to Share",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Avocado (GF/VGN) sea salt, olive oil",
        "price": "3.95",
        "menu_section": "Brunch",
        "category_section": "Sides to Share",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Flatiron Steak",
        "price": "15.95",
        "menu_section": "Brunch",
        "category_section": "Add-Ons",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Faroe Island Salmon",
        "price": "12.95",
        "menu_section": "Brunch",
        "category_section": "Add-Ons",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jerk Shrimp",
        "price": "10.95",
        "menu_section": "Brunch",
        "category_section": "Add-Ons",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Grilled Chicken",
        "price": "12.95",
        "menu_section": "Brunch",
        "category_section": "Add-Ons",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Grilled Yellowfin Tuna",
        "price": "13.95",
        "menu_section": "Brunch",
        "category_section": "Add-Ons",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "New England Clam Chowder garlic parmesan croutons & crispy bacon",
        "price": "13.95",
        "menu_section": "Dinner",
        "category_section": "Farmer’s Market",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Eggplant, Red Pepper & Tomato Soup (V) sourdough fig jam grilled cheese bite",
        "price": "10.95",
        "menu_section": "Dinner",
        "category_section": "Farmer’s Market",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Harvest Fall Salad (GF/V) young lettuces, port wine poached pears, candied walnuts, smoked moody blue cheese, radish, cucumber, rose vinaigrette",
        "price": "15.95",
        "menu_section": "Dinner",
        "category_section": "Farmer’s Market",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Organic Kale Salad (GF/V) young kale, roasted acorn squash, sun dried tomatoes, pickled cauliflower, feta cheese, radish and carrot, pumpkin seed vinaigrette",
        "price": "14.95",
        "menu_section": "Dinner",
        "category_section": "Farmer’s Market",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Crispy Rhode Island Calamari house-made pickled vegetables, pickled jalapeño, arugula, basil aioli",
        "price": "19.95",
        "menu_section": "Dinner",
        "category_section": "Farmer’s Market",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fall Hummus Board (V) heirloom carrot and dill, zaatar, warm pita pillow, feta cheese, garden vegetables",
        "price": "20.95",
        "menu_section": "Dinner",
        "category_section": "Farmer’s Market",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Local Yellowfin Tuna Tartare avocado, deviled egg, sliced watermelon radish, filone crisps",
        "price": "20.95",
        "menu_section": "Dinner",
        "category_section": "Farmer’s Market",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jerk Shrimp Tacos (3 Pcs) (GF) red cabbage, pickled red onion, avocado purée, chili salsa, cilantro",
        "price": "17.95",
        "menu_section": "Dinner",
        "category_section": "Farmer’s Market",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local Burrata (V) figs, Aleppo spiced honeynut squash, pomegranate seeds, arugula and basil oil, filone toast",
        "price": "16.95",
        "menu_section": "Dinner",
        "category_section": "Farmer’s Market",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Artisan Cheeseboard (V) Wild honeycomb, golden raisins, sunflower seed crackers",
        "price": "20.95",
        "menu_section": "Dinner",
        "category_section": "Farmer’s Market",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bang Bang Cauliflower (GF/VGN) sweet & sour glaze, fresno chiles, sesame seeds, scallions",
        "price": "15.95",
        "menu_section": "Dinner",
        "category_section": "Farmer’s Market",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Marinated Beet Salad (GF/V) arugula, pistachios, blood oranges, radish, gold and Chioggia beets, truffle oil, goat yogurt, chives",
        "price": "15.95",
        "menu_section": "Dinner",
        "category_section": "Farmer’s Market",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Margherita Flatbread (V) house-smoked mozzarella, crushed tomatoes, basi",
        "price": "17.95",
        "menu_section": "Dinner",
        "category_section": "Flatbreads From Our Oven",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Local Mushroom Flatbread (V) spinach, asparagus, Fulper Farms ricotta cheese, local egg, Pecorino Romano",
        "price": "19.95",
        "menu_section": "Dinner",
        "category_section": "Flatbreads From Our Oven",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fig Flatbread fig jam, speck, duck fat potatoes, fontina cheese, rosemary",
        "price": "19.95",
        "menu_section": "Dinner",
        "category_section": "Flatbreads From Our Oven",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pepperoni Flatbread local artisanal pepperoni, local burrata, pickled jalapeño, arugula, basil",
        "price": "19.95",
        "menu_section": "Dinner",
        "category_section": "Flatbreads From Our Oven",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Katsu Salad mango, cherry tomatoes, red peppers, carrots, Napa cabbage, arugula, Asian cilantro dressing, peanuts, jalapeno",
        "price": "28.95",
        "menu_section": "Dinner",
        "category_section": "Oceans & Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Glazed Prime Short Rib butternut-pumpkin puree, baby carrots, brussels sprouts, pomegranate",
        "price": "38.95",
        "menu_section": "Dinner",
        "category_section": "Oceans & Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seared Faroe Island Salmon (GF) mushroom risotto, butternut squash, broccolini, lemon caper sauce",
        "price": "36.95",
        "menu_section": "Dinner",
        "category_section": "Oceans & Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Maine Pineland Farms Strip Steak (12 oz) roasted fingerling potatoes, broccolini, caesar dressing, garlic herb butter",
        "price": "49.95",
        "menu_section": "Dinner",
        "category_section": "Oceans & Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Grain Bowl (V) sauteed kale, roasted cauliflower, cranberries, cashews, crispy fried brussels sprout leaves",
        "price": "28.95",
        "menu_section": "Dinner",
        "category_section": "Oceans & Fields",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Goffle Farms Boneless Chicken Parm local burrata, heirloom tomatoes, grilled romaine, parmesan focaccia",
        "price": "32.95",
        "menu_section": "Dinner",
        "category_section": "Oceans & Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spaghetti Squash & Chicken Ricotta Meatballs (GF) charred tomato sauce, swiss chard, hon shimeji mushrooms, basil, parmesan cheese",
        "price": "28.95",
        "menu_section": "Dinner",
        "category_section": "Oceans & Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Branzino (GF) mulitcolor peewee potatoes, peppers, fennel confit, spinach, saffron rouille sauce, cilantro, walnuts",
        "price": "35.95",
        "menu_section": "Dinner",
        "category_section": "Oceans & Fields",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roasted Butternut Squash Ravioli (VGN) Chanterelle mushrooms, leeks, Swiss chard, toasted walnuts, pomegranate seeds, vegan tree nut butter, basil",
        "price": "29.95",
        "menu_section": "Dinner",
        "category_section": "Oceans & Fields",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Line Caught Seared Halibut (GF) delicata squash, romanesco, cauliflower puree, romesco sauce, fennel- raisin compote",
        "price": "38.95",
        "menu_section": "Dinner",
        "category_section": "Oceans & Fields",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Stir-Fried Pork & Soba Noodles roasted broccoli, Jimmy Nardello peppers, green onions, ginger, heirloom garlic, cilantro",
        "price": "28.95",
        "menu_section": "Dinner",
        "category_section": "Oceans & Fields",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Root Vegetables carrot caramel",
        "price": "10.95",
        "menu_section": "Dinner",
        "category_section": "Sides to Share",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roasted Local Mushrooms (GF/VGN) black truffle oil",
        "price": "13.95",
        "menu_section": "Dinner",
        "category_section": "Sides to Share",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Broccolini Caesar fresh lemon, parmesan crumbs, garlic chips",
        "price": "9.95",
        "menu_section": "Dinner",
        "category_section": "Sides to Share",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Brussels Sprouts, Grapes & Shallots (VGN) caraway-mustard vinaigrette",
        "price": "10.95",
        "menu_section": "Dinner",
        "category_section": "Sides to Share",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Fingerling Potatoes (VGN) rosemary oil",
        "price": "10.95",
        "menu_section": "Dinner",
        "category_section": "Sides to Share",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Hand-cut Fries (VGN) sea salt",
        "price": "9.95",
        "menu_section": "Dinner",
        "category_section": "Sides to Share",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hand-cut Truffle Fries (V) sea salt",
        "price": "11.95",
        "menu_section": "Dinner",
        "category_section": "Sides to Share",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Avocado (GF/VGN) sea salt. olive oil",
        "price": "3.95",
        "menu_section": "Dinner",
        "category_section": "Sides to Share",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Caramelia Creme Brulee ~ SEASONAL DESSERTS ~. caramel, milk chocolate, whipped cream, strawberry, mint",
        "price": "13.95",
        "menu_section": "Dessert",
        "category_section": "~ SEASONAL DESSERTS ~",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Recommended Pairing - Espresso Martini ~ SEASONAL DESSERTS ~",
        "price": "15.95",
        "menu_section": "Dessert",
        "category_section": "~ SEASONAL DESSERTS ~",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Peanut Butter Cup [GF/V] ~ SEASONAL DESSERTS ~. peanut butter & dark chocolate layers, dark chocolate pearls, candied peanuts, dulce de leche sauce",
        "price": "13.95",
        "menu_section": "Dessert",
        "category_section": "~ SEASONAL DESSERTS ~",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Recommended Pairing: Taylor 20yr Port ~ SEASONAL DESSERTS ~",
        "price": "32.95",
        "menu_section": "Dessert",
        "category_section": "~ SEASONAL DESSERTS ~",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Warm Double Chocolate Fudge Brownie ~ SEASONAL DESSERTS ~. vanilla ice cream, toasted marshmallow, chocolate sauce",
        "price": "13.95",
        "menu_section": "Dessert",
        "category_section": "~ SEASONAL DESSERTS ~",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Recommended Pairing: Auslese, Kracher ~ SEASONAL DESSERTS ~",
        "price": "20.95",
        "menu_section": "Dessert",
        "category_section": "~ SEASONAL DESSERTS ~",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cinnamon Swirl Bread Pudding ~ SEASONAL DESSERTS ~. vanilla ice cream & dulce de leche sauce Recommended Pairing: Ice Wine, Lamoreaux Landing,",
        "price": "13.95",
        "menu_section": "Dessert",
        "category_section": "~ SEASONAL DESSERTS ~",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Finger Lakes, NY ~ SEASONAL DESSERTS ~",
        "price": "19.95",
        "menu_section": "Dessert",
        "category_section": "~ SEASONAL DESSERTS ~",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Funfetti Donut Sundae ~ SEASONAL DESSERTS ~. warm funfetti donut, caramel, blueberry compote, vanilla ice cream, caramel sea-salt ice cream, fresh strawberries",
        "price": "13.95",
        "menu_section": "Dessert",
        "category_section": "~ SEASONAL DESSERTS ~",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Recommended Pairing: Sauternes, Chateau de Rieussec, FR ~ SEASONAL DESSERTS ~",
        "price": "17.95",
        "menu_section": "Dessert",
        "category_section": "~ SEASONAL DESSERTS ~",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ice Cream or Sorbet ~ SEASONAL DESSERTS ~. [GF] = GLUTEN FREE [VG] = VEGAN",
        "price": "9.95",
        "menu_section": "Dessert",
        "category_section": "~ SEASONAL DESSERTS ~",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Coﬀee ~ SEASONAL DESSERTS ~",
        "price": "4.95 | 4.95",
        "menu_section": "Dessert",
        "category_section": "~ SEASONAL DESSERTS ~",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cappuccino & Latte ~ SEASONAL DESSERTS ~",
        "price": "6.95",
        "menu_section": "Dessert",
        "category_section": "~ SEASONAL DESSERTS ~",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tea Forte Hot Tea ~ SEASONAL DESSERTS ~. blueberry merlot (decaf) ~ chamomile citron (decaf) green mango peach ~ jasmine green english breakfast ~ white ginger pear",
        "price": "4.95",
        "menu_section": "Dessert",
        "category_section": "~ SEASONAL DESSERTS ~",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Espresso Martini ~ SEASONAL DESSERTS ~",
        "price": "15.95",
        "menu_section": "Dessert",
        "category_section": "~ SEASONAL DESSERTS ~",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Port, Taylor Fladgate 20 yr Ports & Dessert Wines",
        "price": "32.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Port, Taylor Fladgate 30 yr Ports & Dessert Wines",
        "price": "47.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Port, Warres Otima 10 yr Ports & Dessert Wines",
        "price": "22.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Auslese Late Harvest, Kracher Ports & Dessert Wines",
        "price": "20.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vidal Ice Wine, Lamoreaux Landing Ports & Dessert Wines",
        "price": "20.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Moscato d’Asti, Vietti Ports & Dessert Wines",
        "price": "12.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sauternes, Chateau de Rieussec, FR Ports & Dessert Wines",
        "price": "17.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Angel’s Envy Ports & Dessert Wines",
        "price": "18.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Basil Hayden’s Ports & Dessert Wines",
        "price": "16.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Blanton’s ‘Single Barrel’ Ports & Dessert Wines",
        "price": "27.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bomberger’s ‘Declaration’ Ports & Dessert Wines",
        "price": "33.00",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bulleit Ports & Dessert Wines",
        "price": "15.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Elijah Craig ‘Small Batch’ Ports & Dessert Wines",
        "price": "15.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Elijah Craig ‘Barrel Proof’ Ports & Dessert Wines",
        "price": "27.00",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jeﬀerson’s Ocean Ports & Dessert Wines",
        "price": "27.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Knob Creek Ports & Dessert Wines",
        "price": "16.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Maker’s Mark Ports & Dessert Wines",
        "price": "16.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Michter’s ‘Small Batch’ Ports & Dessert Wines",
        "price": "17.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Michter’s ‘Toasted Barrel’ Ports & Dessert Wines",
        "price": "39.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Old Rip Van Winkle 10 yr Ports & Dessert Wines",
        "price": "99.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shenk’s ‘Homestead’ Ports & Dessert Wines",
        "price": "30.00",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Stagg ‘24D’ Ports & Dessert Wines",
        "price": "34.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "W.L. Weller 12 yr Ports & Dessert Wines",
        "price": "37.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Widow Jane 10 yr Ports & Dessert Wines",
        "price": "28.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Woodford Reserve Ports & Dessert Wines. Rye",
        "price": "16.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Elijah Craig Ports & Dessert Wines",
        "price": "15.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Michter’s ‘Single Barrel’ Ports & Dessert Wines",
        "price": "17.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Michter’s ‘Barrel Strength’ Ports & Dessert Wines",
        "price": "32.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "WhistlePig 6 yr ‘PiggyBack’ Ports & Dessert Wines",
        "price": "21.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "WhistlePig 10 yr Ports & Dessert Wines. Agave",
        "price": "26.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Casamigos Blanco Ports & Dessert Wines",
        "price": "17.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Casamigos Reposado Ports & Dessert Wines",
        "price": "18.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Casamigos Anejo Ports & Dessert Wines",
        "price": "20.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Casa Dragones Blanco Ports & Dessert Wines",
        "price": "31.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Clase Azul Plata Ports & Dessert Wines",
        "price": "54.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Clase Azul Reposado Ports & Dessert Wines",
        "price": "61.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Don Julio Blanco Ports & Dessert Wines",
        "price": "16.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Don Julio Reposado Ports & Dessert Wines",
        "price": "19.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Don Julio Anejo Ports & Dessert Wines",
        "price": "21.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Don Julio ‘1942’ Anejo Ports & Dessert Wines",
        "price": "52.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "LALO Blanco Ports & Dessert Wines",
        "price": "16.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Patron Silver Ports & Dessert Wines",
        "price": "17.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tequila Ocho Plata Ports & Dessert Wines",
        "price": "16.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tequila Ocho Reposado Ports & Dessert Wines",
        "price": "17.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tequila Ocho Anejo Ports & Dessert Wines",
        "price": "24.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fosforo Tobala Mezcal Ports & Dessert Wines",
        "price": "28.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Los Vecinos Mezcal Ports & Dessert Wines. Whiskey",
        "price": "14.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crown Royal Ports & Dessert Wines",
        "price": "15.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Green Spot Ports & Dessert Wines",
        "price": "27.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jack Daniel’s Ports & Dessert Wines",
        "price": "13.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jameson Ports & Dessert Wines",
        "price": "15.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Redbreast 12 yr Ports & Dessert Wines. Cognac & Brandy",
        "price": "26.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Apple Brandy, Laird’s Applejack Ports & Dessert Wines",
        "price": "10.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "B&B Liqueur Ports & Dessert Wines",
        "price": "14.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cognac, Courvoisier V.S Ports & Dessert Wines",
        "price": "16.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cognac, Hennessey V.S Ports & Dessert Wines",
        "price": "17.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cognac, Remy Martin V.S.O.P Ports & Dessert Wines",
        "price": "23.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Orange Cognac, Grand Mariner Ports & Dessert Wines",
        "price": "18.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Orange Cognac, Cointreau Ports & Dessert Wines. Scotch",
        "price": "13.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Balvenie 12 yr ‘DoubleWood’ Ports & Dessert Wines",
        "price": "27.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Balvenie 14 yr ‘Caribbean Cask’ Ports & Dessert Wines",
        "price": "35.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Dewars 12 yr Ports & Dessert Wines",
        "price": "14.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Glenlivet 12 yr Ports & Dessert Wines",
        "price": "20.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Johnnie Walker ‘Black Label’ Ports & Dessert Wines",
        "price": "17.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Johnnie Walker ‘Blue Label’ Ports & Dessert Wines",
        "price": "54.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lagavulin 16 yr Ports & Dessert Wines",
        "price": "32.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Laphroaig 10 yr Ports & Dessert Wines",
        "price": "25.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Macallan 12 yr ‘Double Cask’ Ports & Dessert Wines",
        "price": "24.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Macallan 18 yr Ports & Dessert Wines",
        "price": "79.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Oban 14 yr Ports & Dessert Wines. Cordials",
        "price": "29.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Amaretto, Disaronno Ports & Dessert Wines",
        "price": "14.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Amaro, Averna Ports & Dessert Wines",
        "price": "15.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Aperol Ports & Dessert Wines",
        "price": "13.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bailey’s Irish Cream Ports & Dessert Wines",
        "price": "13.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Campari Ports & Dessert Wines",
        "price": "13.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chambord Ports & Dessert Wines",
        "price": "13.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fernet Branca Ports & Dessert Wines",
        "price": "15.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Frangelico Hazelnut Liqueur Ports & Dessert Wines",
        "price": "13.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kahlua Liqueur Ports & Dessert Wines",
        "price": "14.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Licor 43 Vanilla Liqueur Ports & Dessert Wines",
        "price": "12.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Limoncello Ports & Dessert Wines",
        "price": "12.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pimm’s No. 1 Ports & Dessert Wines",
        "price": "8.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sambuca Romana Ports & Dessert Wines",
        "price": "14.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "St. Germain Ports & Dessert Wines. 3/7/26 Bourbon",
        "price": "15.95",
        "menu_section": "Dessert",
        "category_section": "Ports & Dessert Wines",
        "is_food": true,
        "is_vegetarian": false
      }
    ]
  },
  {
    "name": "brickhousetavernandtap",
    "items": [
      {
        "item": "California Chicken Club Triple layered toasted sourdough bread, blackened California Chicken Club",
        "price": "$ 17",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Southern Fried Southern Fried Chicken Sandwich",
        "price": "$ 16.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Philly Cheesesteak Ribeye & Provolone cheese, with onions & peppers. $ 17 Philly Cheesesteak",
        "price": "$ 17",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fig & Pig Prosciutto, creamy goat cheese, fig preserves, sliced figs, Fig & Pig",
        "price": "$ 16.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wild Mushroom Wild mushrooms, parmesan, brick cheese, arugula Wild Mushroom",
        "price": "$ 17.50",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "MVP Pepperoni, classic meatballs, ham, candied bacon MVP",
        "price": "$ 18.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pepperoni Hand-cut pepperoni & brick cheese. $ 16.50 Pepperoni",
        "price": "$ 16.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fries",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet Potato Tots",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Broccoli",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Jasmine Rice",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Coleslaw",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Cheddar Mashed Potatoes",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Southern Green Beans",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Macaroni and Cheese",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Grilled Shrimp",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fried Shrimp",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "St. Louis Style St. Louis Style Pork Spareribs",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mixed Berries Cheesecake New York style cheesecake with seasonal berries, Mixed Berries Cheesecake",
        "price": "$ 11",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Apple Crumble Granny Smith apples, caramel sauce & vanilla ice cream. $ 9.50 Apple Crumble",
        "price": "$ 9.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ultimate Brownie Warm chocolate walnut brownie, vanilla ice cream, Ultimate Brownie",
        "price": "$ 9.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Homerun App Classic meatballs, chicken tenders, white queso and Homerun App",
        "price": "$ 23",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spiked Calamari Tossed with cherry peppers & a side of spicy marinara. $ 15 Spiked Calamari",
        "price": "$ 15",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "House Baked Jumbo Pretzel Salted pretzel with white queso & sriracha ranch. $ 12.50 House Baked Jumbo Pretzel",
        "price": "$ 12.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Loaded Game Day Nachos Choice of chicken or spicy beef, black beans, Loaded Game Day Nachos",
        "price": "$ 20",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "White Queso and Chips With pico de gallo. $ 10.50 White Queso and Chips",
        "price": "$ 10.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Classic Meatballs Ground beef & pork, spicy marinara, grated parmesan Classic Meatballs",
        "price": "$ 12.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fried Deviled Eggs Golden fried egg whites, candied bacon, jalapeño & Fried Deviled Eggs",
        "price": "$ 11",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mozzarella Bricks Hand cut, panko parmesan crusted mozzarella Mozzarella Bricks",
        "price": "$ 12.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Knockout Shrimp Lightly fried shrimp with our sweet & spicy knockout Knockout Shrimp",
        "price": "$ 15",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Duck Wings Crispy duck wings, brick sauce & cilantro with Duck Wings",
        "price": "$ 18.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Salad Choice of grilled or Cajun spiced shrimp, mesclun mix, Shrimp Salad",
        "price": "$ 19.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Thai Chicken Salad Chicken, red bell peppers, Napa cabbage, cilantro, Thai Chicken Salad",
        "price": "$ 18.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "House or Caesar Salad $ 8.50 House or Caesar Salad",
        "price": "$ 8.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "cup Brick House Chili",
        "price": "$ 9.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "cup Soup of the Day",
        "price": "$ 8",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Soup & Salad Soup of the Day with choice of House, Caesar, Soup & Salad",
        "price": "$ 16",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fish & Chips Beer battered wild caught white fish served with malt Fish & Chips",
        "price": "$ 19",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mahi Mahi Grilled or blackened wild caught Mahi Mahi, roasted Mahi Mahi",
        "price": "$ 23",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seared Atlantic Salmon* Jasmine rice & green beans. $ 22 Seared Atlantic Salmon*",
        "price": "$ 22",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Add House Salad, Caesar Salad Add House Salad, Caesar Salad or Cup of Soup of the Day",
        "price": "$ 6",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "5 Wings $ 11 5 Wings",
        "price": "$ 11",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "10 Wings $ 20 10 Wings",
        "price": "$ 20",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "20 Wings $ 38 20 Wings",
        "price": "$ 38",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tavern BBQ Sauce",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Buffalo Sauce",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Brick Sauce",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Lemon Pepper",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Nashville Hot",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Hot Honey",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Add A Patty $ 5 Add A Patty",
        "price": "$ 5",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brick Burger Classic The classic double patty with American cheese, Brick Burger Classic",
        "price": "$ 17",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Triple Play Cheeseburger Triple decker, American cheese, Provolone cheese, Triple Play Cheeseburger",
        "price": "$ 19",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "South Paw Double patty, guacamole, caramelized red onions, South Paw",
        "price": "$ 18",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "No Bun Intended Bunless, double patty, shaved ham, bacon, white No Bun Intended",
        "price": "$ 18",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Beyond Burger® Plant-based burger, smoked Provolone cheese, grilled Beyond Burger®",
        "price": "$ 18",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Colossal Burger 4 Decker Burger, cheddar, Colossal Burger",
        "price": "$ 24",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mushrooms",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Caramelized Caramelized Red Onions",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Jalapeños",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Pico de Gallo",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Fried Egg",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Bacon",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Guacamole",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "BBQ Ribs Half rack of St. Louis style pork spareribs, Tavern BBQ BBQ Ribs",
        "price": "$ 29",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken & Waffles Homemade Belgian waffles, hand battered Chicken & Waffles",
        "price": "$ 18.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Tenders Hand battered crispy tenders with Chicken Tenders",
        "price": "$ 16.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Pot Pie Pulled chicken, red potatoes, peas, thyme, Chicken Pot Pie",
        "price": "$ 18",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ribeye Steak* 12oz Ribeye steak with garlic butter, cheddar mashed potatoes & broccoli. $ 35 Ribeye Steak*",
        "price": "$ 35",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sirloin Steak* 8 oz Sirloin steak marinated for 24 hours, Sirloin Steak*",
        "price": "$ 24",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Drunken Chops Two brined center cut pork chops with whiskey glaze, Drunken Chops",
        "price": "$ 30",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Rigatoni Pasta Spicy basil marinara sauce, mozzarella cheese, topped Baked Rigatoni Pasta",
        "price": "$ 20",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Add House Salad, Caesar Salad or Cup of Soup of the Day $ 6 Add House Salad, Caesar Salad or Cup of Soup of the Day",
        "price": "$ 6",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Call Me Old Fashioned Woodford Reserve Bourbon Whiskey, Call Me Old Fashioned",
        "price": "$ 13.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Up in Smoke Bulleit Straight American Rye Whiskey, Up in Smoke",
        "price": "$ 13.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Manhattan Maker’s Mark Bourbon Whisky, sweet vermouth, Manhattan",
        "price": "$ 14.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Luxury Rita Patrón Silver Tequila, Cointreau Orange Liqueur, Luxury Rita",
        "price": "$ 15",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mi Casa Margarita Casamigos Blanco Tequila, Cointreau Orange Liqueur, Mi Casa Margarita",
        "price": "$ 14.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Watermelon Sunrise Don Julio Blanco Tequila, triple sec, Red Bull Red Edition, Watermelon Sunrise",
        "price": "$ 13.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ranch Water Teremana Resposado Tequila, Topo Chico, lime juice $ 14.50 Ranch Water",
        "price": "$ 14.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Blackberry Collins Tito’s Handmade Vodka, St-Germain Elderflower Liqueur, Blackberry Collins",
        "price": "$ 11.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crown Apple Mule Crown Royal Regal Apple Whisky, Crown Apple Mule",
        "price": "$ 14",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Moscow Mule Tito’s Handmade Vodka, Fever-Tree Ginger Beer, Moscow Mule",
        "price": "$ 10",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Raspberry Mule Svedka Raspberry Vodka, Fever-Tree Ginger Beer, Raspberry Mule",
        "price": "$ 11.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bullish Mule Tito's Handmade Vodka, fresh lime juice, Bullish Mule",
        "price": "$ 13",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mango Mojito Cruzan Mango Rum, Monin Mojito Syrup, triple sec, Mango Mojito",
        "price": "$ 10.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sparkling Sangria New Amsterdam Mango Vodka, La Marca Prosecco, Sparkling Sangria",
        "price": "$ 12.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Game Day Punch Bacardí Superior Rum, Fever-Tree Ginger Ale, Game Day Punch",
        "price": "$ 13.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Unneccessary Freshness Bulleit Bourbon, triple sec, pineapple & lime juices, Unneccessary Freshness",
        "price": "$ 15",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Loaded Strawberry Lemonade Grey Goose Vodka, Reál Strawberry Purée, Loaded Strawberry Lemonade",
        "price": "$ 13.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Espresso Martini Smirnoff Vanilla Vodka, Kahlúa Coffee Liqueur, Espresso Martini",
        "price": "$ 14.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bloody Good Mary Tito’s Handmade Vodka, Zing Zang Bloody Mary Mix, Bloody Good Mary",
        "price": "$ 13",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Zombie Bacardí Superior Rum, Don Q 151 Rum, Zombie",
        "price": "$ 12.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bud Light",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Budweiser",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Coors Light",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Corona Extra",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Heineken 0.0 Heineken 0.0 (Non-Alcoholic)",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Heineken",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "High Noon High Noon Hard Seltzers (Varies By Location)",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Michelob Ultra",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Miller Lite",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Modelo Especial",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Bell’s Brewery Bell’s Brewery Two Hearted IPA",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Blue Moon Blue Moon Belgian White Ale",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Dos Equis Especial Lager",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Elysian Space Dust IPA",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Guinness Draught Stout",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Kona Big Wave Golden Ale",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Pacifico",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Samuel Adams Samuel Adams (Seasonal)",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Shiner Bock",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Stella Artois",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Yuengling",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "New Belgium New Belgium Voodoo Ranger Juicy Haze IPA",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "glass Carmel Road",
        "price": "$ 13",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "glass Ecco Domani",
        "price": "$ 10",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "glass Decoy by Duckhorn",
        "price": "$ 14",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "(Bottle) Sonoma-Cutrer 'Russian River Ranches'",
        "price": "$ 42",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "glass La Marca",
        "price": "$ 12",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "(Split) Chandon Rosé",
        "price": "$ 13",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "(Half Bottle) Veuve Clicquot 'Yellow Label'",
        "price": "$ 59",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Monday - Friday 3pm-6pm",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Knockout Shrimp $ 7 Knockout Shrimp",
        "price": "$ 7",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fried Deviled Eggs $ 5 Fried Deviled Eggs",
        "price": "$ 5",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tavern Wings (Pick Your Flavor | Pick Your Spice Level) $ 8.50 Tavern Wings",
        "price": "$ 8.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Classic Meatballs $ 5.75 Classic Meatballs",
        "price": "$ 5.75",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "White Queso and Chips $ 4.75 White Queso and Chips",
        "price": "$ 4.75",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "House Baked Jumbo Pretzel $ 5.50 House Baked Jumbo Pretzel",
        "price": "$ 5.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spiked Calamari $ 7 Spiked Calamari",
        "price": "$ 7",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Duck Wings $ 8.50 Duck Wings",
        "price": "$ 8.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mozzarella Bricks $ 5.75 Mozzarella Bricks",
        "price": "$ 5.75",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Well Spirits | Domestic Draft Pints",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Imports & Craft Draft Pints",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Tito’s Handmade Vodka | Bacardi Superior Rum",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Tanqueray Gin | Jack Daniel’s Whiskey",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Captain Morgan Spiced Rum | Jose Cuervo Gold Tequila",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "House Gold Margarita | Mango Mojito | Moscow Mule",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Sparkling Sangria | Call Me Old Fashioned",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Deviled Eggs Hardboiled eggs, candied bacon, jalapeño & paprika. Deviled Eggs",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Tavern Wings A full pound with buffalo or brick sauce, served with ranch, blue cheese or sriracha ranch. Tavern Wings",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "HOUSE SALAD Mixed greens, tomatoes, cheddar cheese HOUSE SALAD",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Thai Chicken Salad Chicken, red bell peppers, napa cabbage, cilantro, peanut sauce & honey lime vinaigrette. Thai Chicken Salad",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Salad Choice of grilled or Cajun spiced shrimp, Shrimp Salad",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "CAESAR Crisp romaine, Caesar dressing, CAESAR",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Mahi Mahi Grilled or blackened wild caught Mahi Mahi, roasted Mahi Mahi",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Seared Atlantic Salmon Seared Atlantic Salmon, jasmine rice & Seared Atlantic Salmon",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ribeye Steak* 12oz Ribeye steak with garlic butter, cheddar mashed potatoes & broccoli. Ribeye Steak*",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Southern Green Southern Green Beans",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cheddar Mashed Cheddar Mashed Potatoes",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "MONDAY - FRIDAY 3pm-6pm",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Fried Deviled Eggs",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "House Baked Jumbo Pretzel",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Knockout Shrimp",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Domestic Draft Pints",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Well Spirits",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "$5 Imports & Craft Draft Pints",
        "price": "$5",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$7 Select Wines by The Glass",
        "price": "$7",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Moscow Mule",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Mango Mojito",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "House Gold Margarita",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Twisted Old Fashioned",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Sparkling Sangria",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Jose Cuervo Tequila",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Captain Morgan Rum",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Jack Daniel’s Whiskey",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Tanqueray Gin",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Bacardi Superior Rum",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Tito's Handmade Vodka",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      }
    ]
  },
  {
    "name": "elementsprinceton",
    "items": [
      {
        "item": "Menus A La Carte Menu 5-Course Tasting Menu Chef's Tasting Menu Bar Menu Easter Brunch 2026 Mother's Day 2026 Menus",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Menus A La Carte Menu 5-Course Tasting Menu Chef's Tasting Menu Bar Menu Easter Brunch 2026 Mother's Day 2026 Menus",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Menus A La Carte Menu 5-Course Tasting Menu Chef's Tasting Menu Bar Menu Easter Brunch 2026 Mother's Day 2026 Menus",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      },
      {
        "item": "Menus A La Carte Menu 5-Course Tasting Menu Chef's Tasting Menu Bar Menu Easter Brunch 2026 Mother's Day 2026 Menus",
        "price": "",
        "is_food": false,
        "is_vegetarian": false
      }
    ]
  },
  {
    "name": "localgreeknj",
    "items": [
      {
        "item": "$ 10.95 AVGOLEMONO Chicken soup thickened with egg and lemon mixture $ 10.95",
        "price": "$ 10.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 17.95 THE VILLAGE SALAD (HORIATIKI) Local tomato, red onions, cucumber, green peppers, feta cheese, Kalamata olives, topped with organic olive oil and vinegar (gf,vg,vn*) $ 17.95",
        "price": "$ 17.95",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 17.95 MAROULI SALAD Fresh romaine lettuce mixed with olive oil, herbs, and feta cheese $ 17.95",
        "price": "$ 17.95",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 17.95 BEETS SALAD Beets, arugula, oranges, walnuts, fresh Greek herbs, topped with yogurt sauce and balsamic vinaigrette (gf,vg) $ 17.95",
        "price": "$ 17.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 24.95 GREEK SPREADS Tzatziki, spicy feta, eggplant & hummus served with pita bread (gf,vg) $ 24.95",
        "price": "$ 24.95",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 26.95 OCTOPUS Grilled marinated octopus with fava beans purée, Greek herbs, olive oil vinaigrette (gf) $ 26.95",
        "price": "$ 26.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 18.95 FETA FOURNOU Baked feta with tomatoes, peppers, olive oil and herbs, baked in oven $ 18.95",
        "price": "$ 18.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 21.95 FRIED CALAMARI Fried squid olive and lemon vinaigrette Greek herbs & marinara sauce $ 21.95",
        "price": "$ 21.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 18.95 HALLOUMI Grilled halloumi cheese, drunken figs and honey with balsamic glaze (gf,vg) $ 18.95",
        "price": "$ 18.95",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 19.95 ZUCCHINI FRITTERS Pan fried savory zucchini patties made from shredded zucchini, eggs and flour $ 19.95",
        "price": "$ 19.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 15.95 DOLMADES Grape leaves stuffed with rice & Greek herbs, yogurt (gf, vg, vn*) $ 15.95",
        "price": "$ 15.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 10.95 HUMMUS Chick pea, garlic, lemon, tahini & olive oil served with pita bread (vg,vn) $ 10.95",
        "price": "$ 10.95",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 19.95 KEFTEDES Greek homestyle meatballs $ 19.95",
        "price": "$ 19.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 17.95 GIGANTES large white beans baked in rich herby tomato sauce w/ onions, garlic, olive oil $ 17.95",
        "price": "$ 17.95",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 22.95 SHRIMP SAGANAKI Shrimp with cherry tomoatoes, feta, and ouzo $ 22.95",
        "price": "$ 22.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 26.95 GREEK GYRO PLATTER Choice of (Pork, chicken, beef/lamb, veggies, tomato fritters), wrapped in pita with tzatziki, onions & tomatoes, served with village salad & one side (gf*,vg*,vn*) $ 26.95",
        "price": "$ 26.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 34.95 LAMB SOUVLAKI Grilled lamb kebab served with village salad & one side (gf) $ 34.95",
        "price": "$ 34.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 36.95 STIFADO BEEF BRISKET Slow cooked tender brisket with mashed potatoes $ 36.95",
        "price": "$ 36.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 44.95 LAMB CHOPS Grilled marinated lamb chops, village salad & one side (gf) $ 44.95",
        "price": "$ 44.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 26.95 CHICKEN SOUVLAKI Grilled chicken kebab served with village salad & one side (gf) $ 26.95",
        "price": "$ 26.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 32.95 VILLAGE STUFFED CHICKEN Stuffed chicken breast filled with feta, spinach, tomatoes, onions, peppers, dill, lemon butter sauce, village salad & one side (gf) $ 32.95",
        "price": "$ 32.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 98.95 MIX GRILL PLATTER FOR 2 Pork gyro, chicken gyro, beef/ lamb gyro, Greek sausage, sticks of pork & chicken souvlaki, keftedes, Greek fries, pita bread, grilled vegetables, feta cheese & tomatoes $ 98.95",
        "price": "$ 98.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 179.95 MIX GRILL PLATTER FOR 4 Pork gyro, chicken gyro, beef/ lamb gyro, Greek sausage, sticks of pork & chicken souvlaki, keftedes, Greek fries, pita bread, grilled vegetables, feta cheese & tomatoes $ 179.95",
        "price": "$ 179.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 28.95 MOUSAKAS Slow cooked ground beef, eggplant, potatoes & bechamel sauce on the top $ 28.95",
        "price": "$ 28.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 28.95 PASTITSIO Greek style lasagna with slow cooked ground beef and bechamel sauce on the top $ 28.95",
        "price": "$ 28.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 41.95 GRILLED BRANZINO Grilled whole bone - in branzino with olive oil lemon vinaigrette, served with village salad & one side (gf) $ 41.95",
        "price": "$ 41.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 24.95 GREEK TERINA Eggplant layers with cheese, tomato, olive oil and herbs $ 24.95",
        "price": "$ 24.95",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 33.95 SOLOMOS Grilled Alaskan salmon served with village salad & one side (gf) $ 33.95",
        "price": "$ 33.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 23.95 HOMESTYLE SPINACH PIE Served with village salad (vg) $ 23.95",
        "price": "$ 23.95",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 30.95 SHRIMP SOUVLAKI Shrimp kebab over rice, baby kale & avocado (gf) $ 30.95",
        "price": "$ 30.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 38.95 GREEK PAELLA FOR ONE Variety of shrimp, mussels, calamari, octopus, chicken, greek sausage, greek herbs, olive oil & pita bread $ 38.95",
        "price": "$ 38.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 76.95 GREEK PAELLA FOR TWO Variety of shrimp, mussels, calamari, octopus, chicken, greek sausage, greek herbs, olive oil & pita bread $ 76.95",
        "price": "$ 76.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 24.95 STUFFED PEPPERS Roasted bell peppers with rice, eggplant, tomatoes, Greek herbs, olive oil, served with lemon potatoes & yogurt (gf,vg,vn*) $ 24.95",
        "price": "$ 24.95",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 8.95 GREEK FRIES Hand cut fries topped with feta & oregano (vg,vn*) $ 8.95",
        "price": "$ 8.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 8.95 GREEK STYLE LEMON POTATOES Baked in the oven potatoes with lemon juice and olive oil (vg,vn) $ 8.95",
        "price": "$ 8.95",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 8.95 GREEK RICE Rice with olive oil and lemon (vg) $ 8.95",
        "price": "$ 8.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 8.95 GREEK SALAD Tomato, cucumbers, onions, with feta cheese and olives (vg,vn*) $ 8.95",
        "price": "$ 8.95",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 12.95 GALAKTOBOUREKO Fillo dough filled with semolina custard, topped with Greek honey & syrup $ 12.95",
        "price": "$ 12.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 12.95 BAKLAVA Fillo dough filled with crushed almond & walnuts, topped with Greek honey & syrup $ 12.95",
        "price": "$ 12.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 12.95 BOUGATSA Handmade dough filled with a blend of semolina custard $ 12.95",
        "price": "$ 12.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 12.95 PORTOKALOPITA Homemade orange cake $ 12.95",
        "price": "$ 12.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 12.95 EKMEK KATAIFI Shredded dough with Greek honey, layers of Greek and french cream topped with walnuts $ 12.95",
        "price": "$ 12.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 3.95",
        "price": "$ 3.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 4.95 AMERICANO $ 4.95",
        "price": "$ 4.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 6.95 LATTE / CAPPUCCINO $ 6.95",
        "price": "$ 6.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 5.95",
        "price": "$ 5.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 6.95 GREEK FRAPPE (ICED) $ 6.95",
        "price": "$ 6.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 3.95 AMERICAN COFFEE $ 3.95",
        "price": "$ 3.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 5.95 GREEK MOUNTAIN TEA $ 5.95",
        "price": "$ 5.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 4.95 SODA / ICED TEA / LEMONADE $ 4.95",
        "price": "$ 4.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 14.95 THE GREEK PARFAIT Granola, organic Greek yogurt, fresh fruits & Greek honey $ 14.95",
        "price": "$ 14.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 15.95 GREEK STYLE PANCAKES Topped with crushed walnuts, powder sugar, maple syrup 15.95 | add fresh fruits 4.50 $ 15.95",
        "price": "$ 15.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 15.95 GREEK FRENCH TOAST Topped with crushed walnuts, sugar powder, maple syrup 15.95 | add fresh fruits 4.50 $ 15.95",
        "price": "$ 15.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 14.95 SPANAKI SANDWICH Scrambled eggs, local spinach, cherry tomatoes, feta cheese served with Greek fries $ 14.95",
        "price": "$ 14.95",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 16.95 THE SUPER GREEK Three over medium eggs, onions, peppers, cherry tomatoes, Kalamata olives, feta, mushrooms, avocado & Greek fries 16.95 | add Greek sausage 2.95 $ 16.95",
        "price": "$ 16.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 14.95 LOCAL SPINACH FETA OMELETTE Fresh spinach, feta, cherry tomatoes, onions, with Greek fries $ 14.95",
        "price": "$ 14.95",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 15.95 LOCAL GYRO OMELETTE Choice of (beef/lamb, pork) onions, cherry tomatoes, feta cheese & Greek fries $ 15.95",
        "price": "$ 15.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 16.95 LAMB BURGER Lamb patty, spicy feta yogurt sauce, kasseri cheese, onions, tomatoes served on pita & Greek fries $ 16.95",
        "price": "$ 16.95",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 4.95 Breakfast sides (4.95) Bacon, Greek sausage, Greek fries, Fruits, Avocado $ 4.95",
        "price": "$ 4.95",
        "is_food": true,
        "is_vegetarian": false
      }
    ]
  },
  {
    "name": "mistralprinceton",
    "items": [
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "is_food": true,
        "is_vegetarian": false
      }
    ]
  },
  {
    "name": "pizzadenprinceton",
    "items": [
      {
        "item": "Beach in Hawaii Pie...$19.50/$26",
        "price": "$19.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eye of The Tiger...$19/$26",
        "price": "$19",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hooked on Honey Pie...$18.75/$24.50",
        "price": "$18.75",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "The V Thang..$19.50/$26",
        "price": "$19.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meat Meat Meat Pie...$19.50/$26",
        "price": "$19.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Buffalo Soldier..$18/$23",
        "price": "$18",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "The Greek..$19.50/$26",
        "price": "$19.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "The Diva...$21.50/$27.50",
        "price": "$21.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "The French Onion...$19/$24",
        "price": "$19",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jamming With You...$18/$24",
        "price": "$18",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Classic Pies...$10/$14/$18.50",
        "price": "$10",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brooklyn Pie...$10.50/$15/$20",
        "price": "$10.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sauceless Pie...$11/$16.50/$21",
        "price": "$11",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tomato Pie...$9.50/$13/$17.50",
        "price": "$9.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Arugula Salad...$8.50",
        "price": "$8.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baby Kale...$8.50",
        "price": "$8.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Extra Virgin Olive Oil...$12/$20",
        "price": "$12",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Add chicken....$3.75",
        "price": "$3.75",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pepperoni Slider...$5.25",
        "price": "$5.25",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken or Eggplant Parm Slider...$5.75",
        "price": "$5.75",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Bread Pizza...$9.50",
        "price": "$9.50",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Large Bavarian Pretzel...$11",
        "price": "$11",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Nutella Pie...$11.50",
        "price": "$11.50",
        "is_food": true,
        "is_vegetarian": false
      }
    ]
  },
  {
    "name": "rootssteakhouse",
    "items": [
      {
        "item": "French Onion Soup10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Bisque13.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kobe Sliders20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheesesteak Sliders20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "NJ Burrata16.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Maine Lobster Bites24.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hamachi Crudo20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Yellowfin Tuna Tartare20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Rhode Island Crispy Calamari18.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Crispy Shrimp Scampi19.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crispy Wagyu Dumplings21.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Fall Off The Bone Ribs17.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Colossal Lump Crab Cake25.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Applewood Smoked Slab Bacon15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilled Jumbo Shrimp19.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snow Crab Claws23.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local East Coast Oysters18.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Cocktail31.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "1/4 lb Colossal Lump Crab Cocktail23.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caesar Salad15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wedge of Iceberg Lettuce15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Heirloom Tomato Salad13.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Arugula Salad15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chopped Salad15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Petite Prime NY Strip Steak49.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz. Prime NY Strip Steak54.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "8 oz Petit Filet Mignon49.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Filet Mignon59.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "20 oz Dry Aged Cowboy Steak59.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz Prime Ribeye Steak59.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "42 oz Prime Porterhouse Steak for TwoMP",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu79.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu84.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu74.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Beef Wellington52.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Tailors Plate47.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Chicken Parm31.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces3.50",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "East Coast Halibut40.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish-Crusted Faroe Island Salmon35.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "True Dover Sole64.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Blue cheese hat4.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Lobster & Cherry peppers20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jumbo Shrimp6.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Oscar Style22.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Steak Sauce (Complimentary)",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Au Poivre3.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Béarnaise3.953.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hollandaise3.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish Cream3.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Our Famous Mac & Cheese10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Truffle Pommes Frites13.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Macaroni and Cheese29.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Onion Rings10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pomme Frites10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Potatoes Au Gratin11.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Classic Whipped Potatoes10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Loaded Colossal Baked Potato10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Creamed Corn10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Creamed Spinach10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Asparagus11.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Broccoli Garlic & Oil10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roasted Wild Mushrooms10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brussels Sprouts10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Onion Soup10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Bisque13.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kobe Sliders20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "NJ Burrata16.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Petite Maine Lobster Bites24.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hamachi Crudo20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Yellowfin Tuna Tartare20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Rhode Island Crispy Calamari18.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Crispy Shrimp Scampi19.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crispy Wagyu Dumplings21.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Fall Off The Bone Ribs17.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Colossal Lump Crab Cake25.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Applewood Smoked Slab Bacon15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilled Jumbo Shrimp19.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snow Crab Claws23.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local East Coast Oysters18.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Cocktail31.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "1/4 lb Colossal Lump Crab Cocktail23.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caesar Salad15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wedge of Iceberg Lettuce15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Heirloom Tomato Salad13.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Arugula Salad15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chopped Salad15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Petite Prime NY Strip Steak49.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz. Prime NY Strip Steak54.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "8 oz Petit Filet Mignon49.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Filet Mignon59.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "20 oz Dry Aged Cowboy Steak59.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz Prime Ribeye Steak59.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "42 oz Prime Porterhouse Steak for Two(MP)",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz. NY Strip Steak79.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz. Ribeye84.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "8 oz. Petite Filet Mignon74.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces, truffle aioli, blue cheese crust or roots cowboy butter4.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Beef Wellington52.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Tailors Plate47.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Chicken Parm31.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "True Dover Sole64.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "East Coast Halibut40.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish-Crusted Faroe Island Salmon35.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan Seared Sea Scallops38.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Our Famous Mac & Cheese10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Truffle Macaroni and Cheese18.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Macaroni and Cheese29.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Truffle Pommes Frites13.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pomme Frites10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Onion Rings10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Broccoli10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Potatoes Au Gratin11.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Classic Whipped Potatoes10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Loaded Colossal Baked Potato10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Creamed Corn10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Creamed Spinach10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Asparagus11.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Wild Mushrooms10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brussels Sprouts10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Onion Soup10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Bisque13.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kobe Sliders20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheesesteak Sliders20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "NJ Burrata16.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Maine Lobster Bites24.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Yellowfin Tuna Tartare20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Rhode Island Crispy Calamari18.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Crispy Shrimp Scampi19.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crispy Wagyu Dumplings21.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Fall Off The Bone Ribs17.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Colossal Lump Crab Cake25.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Applewood Smoked Slab Bacon15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilled Jumbo Shrimp19.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snow Crab Claws23.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local East Coast Oysters18.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Cocktail31.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "1/4 lb Colossal Lump Crab Cocktail23.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caesar Salad15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wedge of Iceberg Lettuce15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Arugula Salad15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chopped Salad15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Heirloom Tomato Salad13.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Petite Prime NY Strip Steak49.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz. Prime NY Strip Steak54.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "8 oz Petit Filet Mignon49.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Filet Mignon59.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "20 oz Dry Aged Cowboy Steak59.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz. Prime Ribeye Steak59.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "42 oz Prime Porterhouse Steak for Two(MP)(MP)",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu79.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu84.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu74.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Beef Wellington52.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Tailors Plate47.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Chicken Parm31.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "East Coast Halibut40.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan Seared Sea Scallops38.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish Crusted Faroe Island Salmon35.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "True Dover Sole64.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Blue cheese hat4.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Lobster & Cherry peppers28.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jumbo Shrimp6.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Oscar Style23.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Steak Sauce (Complimentary)",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Au Poivre, Béarnaise sauce, hollandaise, horseradish cream, truffle aioli, Roots cowboy butter4.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Our Famous Mac & Cheese10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Truffle Mac & Cheese18.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Mac & Cheese29.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pomme Frites10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Truffle Pommes Frites13.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Classic Whipped Potatoes10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Asparagus11.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brussels Sprouts10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Onion Rings10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Colossal Loaded Baked Potato10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Creamed Spinach10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Wild Mushrooms10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Broccoli Garlic & Oil10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Potatoes Au Gratin11.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Creamed Corn10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Onion Soup10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Bisque13.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kobe Sliders20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "NJ Burrata16.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Maine Lobster Bites24.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hamachi Crudo20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Yellowfin Tuna Tartare20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Rhode Island Crispy Calamari18.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Crispy Shrimp Scampi19.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crispy Wagyu Dumplings21.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Fall Off The Bone Ribs17.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Colossal Lump Crab Cake25.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Applewood Smoked Slab Bacon15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilled Jumbo Shrimp19.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snow Crab Claws23.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local East Coast Oysters18.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Cocktail31.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "1/4 lb Colossal Lump Crab Cocktail23.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caesar Salad15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wedge of Iceberg Lettuce15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Arugula Salad15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chopped Salad15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Heirloom Tomato Salad13.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Petite Prime NY Strip Steak49.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz. Prime NY Strip Steak54.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "8 oz Petit Filet Mignon49.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Filet Mignon59.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "20 oz Dry Aged Cowboy Steak59.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz. Prime Ribeye Steak59.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "42 oz Prime Porterhouse Steak for Two(MP)",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu79.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu84.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: Petite Filet Mignon74.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Beef Wellington52.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Tailors Plate47.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Chicken Parm31.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces, truffle aioli, blue cheese crust, or Roots Cowboy Butter4.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "East Coast Halibut40.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish-Crusted Faroe Island Salmon35.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "True Dover Sole64.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan Seared Sea Scallops38.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Blue cheese hat4.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Lobster & Cherry peppers20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jumbo Shrimp6.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Oscar Style22.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Steak Sauce (Complimentary)",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Au Poivre3.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Béarnaise3.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hollandaise3.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish Cream3.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Our Famous Mac & Cheese10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Truffle Macaroni & Cheese18.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Macaroni & Cheese29.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Onion Rings10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pomme Frites10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Truffle Pommes Frites13.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Potatoes Au Gratin11.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Loaded Colossal Baked Potato10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Classic Whipped Potatoes10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Creamed Corn10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brussels Sprouts10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Asparagus11.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Broccoli10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Wild Mushrooms10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Creamed Spinach10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Onion Soup10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "New England Clam Chowder13.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "NJ Burrata16.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kobe Sliders20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheesesteak Sliders20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Maine Lobster Bites24.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Yellowfin Tuna Tartare20.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Rhode Island Crispy Calamari18.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Crispy Shrimp Scampi21.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crispy Wagyu Dumplings21.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Fall Off The Bone Ribs19.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Colossal Lump Crab Cake25.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Applewood Smoked Slab Bacon15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilled Jumbo Shrimp19.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snow Crab Claws23.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local East Coast Oysters19.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Cocktail31.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "1/4 lb Colossal Lump Crab Cocktail23.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caesar Salad15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Warm Shrimp Salad27.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wedge of Iceberg Lettuce15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Arugula Salad15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chopped Salad15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Heirloom Tomato Salad13.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Salad34.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Katsu Salad24.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Petite Prime NY Strip Steak49.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz. Prime NY Strip Steak54.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "8 oz Petit Filet Mignon49.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Filet Mignon59.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "20 oz Dry Aged Cowboy Steak59.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz Prime Ribeye Steak59.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "42 oz Prime Porterhouse Steak for Two(MP)",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu79.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu84.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu74.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces, Truffle aioli, blue cheese crust or Roots Cowboy Butter4.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roots Tailors Plate47.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Beef Wellington52.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Chicken Parm31.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "East Coast Halibut40.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish-Crusted Faroe Island Salmon35.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "True Dover Sole64.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan Seared Sea Scallops38.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Grilled Yellowfin Tuna38.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Blue cheese hat4.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Lobster & Cherry peppers28.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Two Shrimp15.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Oscar Style23.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Au Poivre4.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Béarnaise4.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hollandaise4.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish Cream4.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cowboy Butter4.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Our Famous Mac & Cheese10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Macaroni and Cheese29.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pomme Frites10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Truffle Pommes Frites13.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Potatoes Au Gratin11.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Loaded Colossal Baked Potato10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Classic Whipped Potatoes10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Loaded Whipped Stuffed Potatoes11.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Onion Rings10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Creamed Corn10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brussels Sprouts10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Asparagus11.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Broccoli Garlic & Oil10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roasted Wild Mushrooms10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Creamed Spinach10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sauteed Spinach & Garlic10.95",
        "price": "",
        "is_food": true,
        "is_vegetarian": true
      }
    ]
  },
  {
    "name": "Ajiten Princeton",
    "items": [
      {
        "item": "Age Gyoza SIDE",
        "price": "$ 9.00",
        "menu_section": "",
        "category_section": "SIDE",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Edamame SIDE",
        "price": "$11.00",
        "menu_section": "",
        "category_section": "SIDE",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Takoyaki Toufu Salad",
        "price": "$11.00",
        "menu_section": "",
        "category_section": "Toufu Salad",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wasabi/Ebi Shumai Toufu Salad",
        "price": "$10.00",
        "menu_section": "",
        "category_section": "Toufu Salad",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vegetable Croquet Toufu Salad. Kaki Fry",
        "price": "$10.00",
        "menu_section": "",
        "category_section": "Toufu Salad",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Ankimo Steak Toufu Salad",
        "price": "$22.00",
        "menu_section": "",
        "category_section": "Toufu Salad",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "(All platter served with miso soup, salad and rice) TERIYAKI & KATSU PLATTER",
        "price": "$23.50",
        "menu_section": "",
        "category_section": "TERIYAKI & KATSU PLATTER",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Teriyaki Platter TERIYAKI & KATSU PLATTER",
        "price": "$28.00",
        "menu_section": "",
        "category_section": "TERIYAKI & KATSU PLATTER",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Salmon Teriyaki Platter TERIYAKI & KATSU PLATTER. TonKatsu Platter",
        "price": "$27.00",
        "menu_section": "",
        "category_section": "TERIYAKI & KATSU PLATTER",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Deep fried breaded pork loin TERIYAKI & KATSU PLATTER. Chicken Katsu Platter",
        "price": "$26.00",
        "menu_section": "",
        "category_section": "TERIYAKI & KATSU PLATTER",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Deep fried breaded chicken thigh TERIYAKI & KATSU PLATTER. Tuna Katsu Platter",
        "price": "$30.00",
        "menu_section": "",
        "category_section": "TERIYAKI & KATSU PLATTER",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Deep fried breaded tuna cutlet TERIYAKI & KATSU PLATTER. Ankimo Steak Platter Japanese style fried Monkfish Liver",
        "price": "$29.00",
        "menu_section": "",
        "category_section": "TERIYAKI & KATSU PLATTER",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kaki Fry Platter TERIYAKI & KATSU PLATTER. Deep fried breaded Oyster",
        "price": "$29.00",
        "menu_section": "",
        "category_section": "TERIYAKI & KATSU PLATTER",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pork Katsu Curry JAPANESE",
        "price": "$24.00",
        "menu_section": "",
        "category_section": "JAPANESE",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vegetable Croquet Curry JAPANESE",
        "price": "$22.00",
        "menu_section": "",
        "category_section": "JAPANESE",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Katsu Curry JAPANESE. SPECIAL (Tue-Sun. 11:80AM-2PM)",
        "price": "$23.00",
        "menu_section": "",
        "category_section": "JAPANESE",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Today's hot dish (with california roll, salad, miso soup and rice)",
        "price": "$22.00",
        "menu_section": "",
        "category_section": "",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "1 Vegetable croquet and cold tofu drizzled with miso sauce Vegetarian Lunch. Chicken Teriyaki Don",
        "price": "$20.00",
        "menu_section": "",
        "category_section": "Vegetarian Lunch",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken teriyaki over rice (served with miso soup ) Vegetarian Lunch",
        "price": "$23.00",
        "menu_section": "",
        "category_section": "Vegetarian Lunch",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Tuna Roll ROLL",
        "price": "$14.00",
        "menu_section": "",
        "category_section": "ROLL",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Negi Toro Hand Roll ROLL",
        "price": "$16.00",
        "menu_section": "",
        "category_section": "ROLL",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Yellowtail Roll ROLL",
        "price": "$14.00",
        "menu_section": "",
        "category_section": "ROLL",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Salmon Roll ROLL",
        "price": "$13.00",
        "menu_section": "",
        "category_section": "ROLL",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Salmon Avocado Roll ROLL",
        "price": "$13.00",
        "menu_section": "",
        "category_section": "ROLL",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Salmon Skin Avocado Roll ROLL. Shrimp Tempura Avocado Roll",
        "price": "$14.00",
        "menu_section": "",
        "category_section": "ROLL",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eel Avocado Roll ROLL. DONBURI (served with miso soup)",
        "price": "$14.00",
        "menu_section": "",
        "category_section": "ROLL",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Salmon & Ikura Don SUSHI",
        "price": "$43.00",
        "menu_section": "",
        "category_section": "SUSHI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tekka Don SUSHI",
        "price": "$48.00",
        "menu_section": "",
        "category_section": "SUSHI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hokkai Don (Hokkaido Uni) SUSHI",
        "price": "$45.00",
        "menu_section": "",
        "category_section": "SUSHI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Unagi Don SUSHI",
        "price": "$43.00",
        "menu_section": "",
        "category_section": "SUSHI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chirashi Regular SUSHI. Chirashi Deluxe (Hokkaido Uni)",
        "price": "$63.00",
        "menu_section": "",
        "category_section": "SUSHI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chirashi Premium (Hokkaido Uni) SUSHI",
        "price": "$68.00",
        "menu_section": "",
        "category_section": "SUSHI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bluefin Tuna、 Salmon. Yellowtail & Madai PLATTER. Sashimi Platter B",
        "price": "$36.00",
        "menu_section": "",
        "category_section": "PLATTER",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bluefin Tuna、 Salmon、 Yellowtail & Scallop PLATTER. Sashimi Platter C",
        "price": "$43.00",
        "menu_section": "",
        "category_section": "PLATTER",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bluefin Tuna, Salmon Belly、 Yellowtail Belly & Madai PLATTER. Sashimi Platter D Bluefin Tuna、 Salmon Belly、 Yellowtail Belly & Scallop",
        "price": "$43.00",
        "menu_section": "",
        "category_section": "PLATTER",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bluefin Tuna、 Salmon、 Yellowtail & Uni[Hokkaido] PLATTER. Sashimi Platter E",
        "price": "$50.00",
        "menu_section": "",
        "category_section": "PLATTER",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bluefin Tuna、 Salmon、 Scallop & Uni[Hokkaido] PLATTER. Sashimi Platter F",
        "price": "$50.00",
        "menu_section": "",
        "category_section": "PLATTER",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Plain Rice & Miso Soup PLATTER",
        "price": "$8.50",
        "menu_section": "",
        "category_section": "PLATTER",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sushi Rice & Miso Soup PLATTER",
        "price": "$9.50",
        "menu_section": "",
        "category_section": "PLATTER",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Akami NIGIRI SUSHI & SASHIMI",
        "price": "$15.00",
        "menu_section": "",
        "category_section": "NIGIRI SUSHI & SASHIMI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bluefin Tuna NIGIRI SUSHI & SASHIMI",
        "price": "$18.00",
        "menu_section": "",
        "category_section": "NIGIRI SUSHI & SASHIMI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Otoro NIGIRI SUSHI & SASHIMI",
        "price": "$40.00",
        "menu_section": "",
        "category_section": "NIGIRI SUSHI & SASHIMI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hamachi NIGIRI SUSHI & SASHIMI",
        "price": "$14.00",
        "menu_section": "",
        "category_section": "NIGIRI SUSHI & SASHIMI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hamachi Hara NIGIRI SUSHI & SASHIMI",
        "price": "$17.00",
        "menu_section": "",
        "category_section": "NIGIRI SUSHI & SASHIMI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Yellow Tail Belly NIGIRI SUSHI & SASHIMI",
        "price": "$34.00",
        "menu_section": "",
        "category_section": "NIGIRI SUSHI & SASHIMI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Salmon NIGIRI SUSHI & SASHIMI",
        "price": "$13.00",
        "menu_section": "",
        "category_section": "NIGIRI SUSHI & SASHIMI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Salmon Belly NIGIRI SUSHI & SASHIMI",
        "price": "$16.00",
        "menu_section": "",
        "category_section": "NIGIRI SUSHI & SASHIMI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Scallop NIGIRI SUSHI & SASHIMI",
        "price": "$13.00",
        "menu_section": "",
        "category_section": "NIGIRI SUSHI & SASHIMI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet Shrimp NIGIRI SUSHI & SASHIMI",
        "price": "$22.00",
        "menu_section": "",
        "category_section": "NIGIRI SUSHI & SASHIMI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Unagi NIGIRI SUSHI & SASHIMI",
        "price": "$13.00",
        "menu_section": "",
        "category_section": "NIGIRI SUSHI & SASHIMI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Uni NIGIRI SUSHI & SASHIMI",
        "price": "$20.00",
        "menu_section": "",
        "category_section": "NIGIRI SUSHI & SASHIMI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Uni NIGIRI SUSHI & SASHIMI",
        "price": "$29.00",
        "menu_section": "",
        "category_section": "NIGIRI SUSHI & SASHIMI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ikura NIGIRI SUSHI & SASHIMI",
        "price": "$19.00",
        "menu_section": "",
        "category_section": "NIGIRI SUSHI & SASHIMI",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Egg Cake N/A",
        "price": "$9.00",
        "menu_section": "",
        "category_section": "N/A",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Dragon Roll (5 orders per day) ROLL",
        "price": "$22.00",
        "menu_section": "",
        "category_section": "ROLL",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Rainbow Roll ROLL",
        "price": "$23.00",
        "menu_section": "",
        "category_section": "ROLL",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Tempura Deluxe Roll ROLL",
        "price": "$22.00",
        "menu_section": "",
        "category_section": "ROLL",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vegetable Deluxe Roll ROLL",
        "price": "$19.00",
        "menu_section": "",
        "category_section": "ROLL",
        "is_food": true,
        "is_vegetarian": true
      }
    ]
  },
  {
    "name": "Alfonso's Pizzeria",
    "items": [
      {
        "item": "Regular Slices",
        "price": "$4.75",
        "menu_section": "",
        "category_section": "Slices",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheese Pizza",
        "price": "Mini $15.99; Sm $17.99; Lg $19.99; Xl $21.99; Sic $27.99",
        "menu_section": "",
        "category_section": "Pizzas",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Hawaiian Pizza Ham and Pineapple",
        "price": "Sm $25.99; Lg $27.99",
        "menu_section": "",
        "category_section": "Pizzas",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meat Pizza Pepperoni, Sausage, Meatball, Ham",
        "price": "Sm $27.99; Lg $31.99",
        "menu_section": "",
        "category_section": "Pizzas",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "White Pizza No sauce, Mozzarella and Ricotta Cheese",
        "price": "Sm $22.99; Lg $26.99",
        "menu_section": "",
        "category_section": "Pizzas",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Veggie Pizza Green Peppers, Mushrooms, Tomatoes, and Onions",
        "price": "Sm $30.99; Lg $32.99",
        "menu_section": "",
        "category_section": "Pizzas",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Four Cheese Pizza Mozzarella, Ricotta, Feta, and Romano",
        "price": "Sm $27.99; Lg $31.99",
        "menu_section": "",
        "category_section": "Pizzas",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Patti Special Pizza Bacon, Garlic, Jalapeno, and Pepperoni",
        "price": "Sm $30.99; Lg $32.99",
        "menu_section": "",
        "category_section": "Pizzas",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "White Spinach Pizza No sauce, Mozzarella, Ricotta Cheese, and Spinach",
        "price": "Sm $27.99; Lg $31.99",
        "menu_section": "",
        "category_section": "Pizzas",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "BBQ Chicken Pizza",
        "price": "Sm $30.99; Lg $34.99",
        "menu_section": "",
        "category_section": "Pizzas",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Buffalo Chicken Pizza",
        "price": "Sm $30.99; Lg $34.99",
        "menu_section": "",
        "category_section": "Pizzas",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Parm Pizza",
        "price": "Sm $30.99; Lg $34.99",
        "menu_section": "",
        "category_section": "Pizzas",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Chicken Parm Pizza",
        "price": "Sm $30.99; Lg $34.99",
        "menu_section": "",
        "category_section": "Pizzas",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Margherita Pizza",
        "price": "Sm $27.99; Lg $31.99",
        "menu_section": "",
        "category_section": "Pizzas",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "House Special Pizza Pepperoni, Sausage, Meatball, Green Peppers, Mushrooms, Olives, and Onions",
        "price": "Mini $26.50; Sm $32.99; Lg $36.99; Xl $39.99; Sic $44.99",
        "menu_section": "",
        "category_section": "Pizzas",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Supreme Pizza Pepperoni, Sausage, Green Peppers, Mushrooms, and Onions",
        "price": "Mini $25.50; Sm $30.99; Lg $32.99; Xl $34.99; Sic $42.99",
        "menu_section": "",
        "category_section": "Pizzas",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Wings",
        "price": "10 . $17.99; 20 . $29.99",
        "menu_section": "",
        "category_section": "Appetizers",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "4 Garlic Knots with Sauce",
        "price": "$9.50",
        "menu_section": "",
        "category_section": "Appetizers",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "8 Garlic Knots with Sauce",
        "price": "$13.50",
        "menu_section": "",
        "category_section": "Appetizers",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 Garlic Knots with Sauce",
        "price": "$17.50",
        "menu_section": "",
        "category_section": "Appetizers",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Bread",
        "price": "8in. $7.99; 12in. $8.99",
        "menu_section": "",
        "category_section": "Appetizers",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Bread with Cheese",
        "price": "8in. $9.99; 12in. $10.99",
        "menu_section": "",
        "category_section": "Appetizers",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Meatball Appetizer",
        "price": "$14.50",
        "menu_section": "",
        "category_section": "Appetizers",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sausage Appetizer",
        "price": "$14.50",
        "menu_section": "",
        "category_section": "Appetizers",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Onion Rings",
        "price": "Sm. $8.99; Lg. $11.99",
        "menu_section": "",
        "category_section": "Appetizers",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Fries",
        "price": "Sm. $6.25; Lg. $9.25",
        "menu_section": "",
        "category_section": "Appetizers",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mozzarella Sticks",
        "price": "$12.50",
        "menu_section": "",
        "category_section": "Appetizers",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jalapeno Poppers",
        "price": "$12.50",
        "menu_section": "",
        "category_section": "Appetizers",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lasagna",
        "price": "$17.50",
        "menu_section": "",
        "category_section": "Entrees",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ravioli",
        "price": "$16.50",
        "menu_section": "",
        "category_section": "Entrees",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Ziti",
        "price": "$14.50",
        "menu_section": "",
        "category_section": "Entrees",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Ziti with Meatballs or Sausage",
        "price": "$16.50",
        "menu_section": "",
        "category_section": "Entrees",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spaghetti with Marinara Sauce",
        "price": "$14.00",
        "menu_section": "",
        "category_section": "Entrees",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spaghetti with Meatballs or Sausage",
        "price": "$15.50",
        "menu_section": "",
        "category_section": "Entrees",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Spaghetti",
        "price": "$14.50",
        "menu_section": "",
        "category_section": "Entrees",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Spaghetti with Meatballs or Sausage",
        "price": "$16.50",
        "menu_section": "",
        "category_section": "Entrees",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eggplant Parmigiana",
        "price": "$16.50",
        "menu_section": "",
        "category_section": "Entrees",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Eggplant Parmigiana with Spaghetti and Marinara sauce",
        "price": "$18.50",
        "menu_section": "",
        "category_section": "Entrees",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Parmigiana",
        "price": "$16.50",
        "menu_section": "",
        "category_section": "Entrees",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Parmigiana with Spaghetti and Marinara sauce",
        "price": "$18.50",
        "menu_section": "",
        "category_section": "Entrees",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meatball Parmigiana Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": "",
        "category_section": "Hot Heroes",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sausage Parmigiana Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": "",
        "category_section": "Hot Heroes",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eggplant Parmigiana Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": "",
        "category_section": "Hot Heroes",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Parmigiana Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": "",
        "category_section": "Hot Heroes",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken, Bacon, and Ranch Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": "",
        "category_section": "Hot Heroes",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sausage, Peppers, and Onions Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": "",
        "category_section": "Hot Heroes",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Philly Cheese Steak Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": "",
        "category_section": "Hot Heroes",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Philly Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": "",
        "category_section": "Hot Heroes",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Buffalo Chicken Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": "",
        "category_section": "Hot Heroes",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Extra Cheese Hot Heroes",
        "price": "8 in. $2.50; 12 in. $2.99",
        "menu_section": "",
        "category_section": "Hot Heroes",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Submarine Deli Sandwiches. Ham, Salami, American Cheese, Lettuce, Sliced Tomatoes, Oregano, Salt & Pepper, Oil & Vinegar",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": "",
        "category_section": "Deli Sandwiches",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ham & Cheese Deli Sandwiches. Ham, American Cheese, Lettuce, Sliced Tomatoes, Pickles, Mayonnaise, and Mustard",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": "",
        "category_section": "Deli Sandwiches",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Large Calzone with Ricotta and Mozzarella Cheese Calzone. Add regular toppings for $3.99 or premium toppings for $4.99",
        "price": "$19.99",
        "menu_section": "",
        "category_section": "Calzone",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Stromboli Stromboli. Add regular toppings for $3.99 or premium toppings for $4.99",
        "price": "$18.99",
        "menu_section": "",
        "category_section": "Stromboli",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Greek Salad Lettuce, Tomatoes, Cucumbers, Peperoncinis, Greek Olives, Onions, and Feta Cheese. A scoop of potato salad may be added at $0.99",
        "price": "Sm. $12.50; Lg. $16.50",
        "menu_section": "",
        "category_section": "Salads",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Tossed Salad Lettuce, Tomatoes, Cucumbers and Sliced Onions",
        "price": "Sm. $8.50; Lg. $11.50",
        "menu_section": "",
        "category_section": "Salads",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chef Salad Lettuce, Tomatoes, Mozzarella Cheese, Ham, Salami, Banana Peppers, and Olives",
        "price": "Sm. $14.50; Lg. $18.50",
        "menu_section": "",
        "category_section": "Salads",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Antipasto Salad Lettuce, Tomatoes, Mozzarella Cheese, Ham, Peperoncinis, Greek Olives, and Onions",
        "price": "Sm. $14.50; Lg. $18.50",
        "menu_section": "",
        "category_section": "Salads",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spinach Salad",
        "price": "Sm. $12.50; Lg. $16.50",
        "menu_section": "",
        "category_section": "Salads",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Buffalo Chicken Salad",
        "price": "Lg. $17.50",
        "menu_section": "",
        "category_section": "Salads",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Potato Salad",
        "price": "Lg. $10.25/td>",
        "menu_section": "",
        "category_section": "Salads",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Extra salad dressing",
        "price": "Sm. $1.99; Lg. $2.25",
        "menu_section": "",
        "category_section": "Salads",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cannoli",
        "price": "1 . $7.25; 4 . $27.99",
        "menu_section": "",
        "category_section": "Desserts",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brownie",
        "price": "$5.25",
        "menu_section": "",
        "category_section": "Desserts",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brownoli Vanilla cannoli cream in the center of two chocolate chip brownies and dusted with powdered sugar",
        "price": "$13.99",
        "menu_section": "",
        "category_section": "Desserts",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Zeppoli add chocolate sauce for $1.99",
        "price": "$10.99",
        "menu_section": "",
        "category_section": "Desserts",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cookie (dozen by request in advance)",
        "price": "$5.25",
        "menu_section": "",
        "category_section": "Desserts",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Side Cannoli Cream",
        "price": "$1.99",
        "menu_section": "",
        "category_section": "Desserts",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Side of Marinara Sauce Others",
        "price": "$2.25",
        "menu_section": "",
        "category_section": "Others",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pint of Marinara Sauce Others",
        "price": "$9.99",
        "menu_section": "",
        "category_section": "Others",
        "is_food": true,
        "is_vegetarian": false
      }
    ]
  },
  {
    "name": "Aljon's Pizza West Windsor",
    "items": [
      {
        "item": "Chicken Fingers Snack Incl french fries, cole slaw ​ Incl french fries, cole slaw ​",
        "price": "3 Pieces- $9.95 | Dinner- $11.95 (5 pcs)",
        "menu_section": "",
        "category_section": "Chicken Fingers Snack",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Nacho Grande Beef, Cheese, Tomatoes, Black Olives, Onions add Jalapeños for .95",
        "price": "$11.95",
        "menu_section": "",
        "category_section": "Nacho Grande",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Fries",
        "price": "Small- $4.25, Large- $5.45",
        "menu_section": "",
        "category_section": "French Fries",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheese Fries",
        "price": "Small- $4.95, Large- $5.95",
        "menu_section": "",
        "category_section": "Cheese Fries",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Pizza Fries ​",
        "price": "$5.95",
        "menu_section": "",
        "category_section": "Pizza Fries",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet Potato Fries",
        "price": "Small- $4.75, Large- $5.25",
        "menu_section": "",
        "category_section": "Sweet Potato Fries",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Onion Rings ​",
        "price": "$6.25",
        "menu_section": "",
        "category_section": "Onion Rings",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mozzarella Sticks (6) ​",
        "price": "$8.25",
        "menu_section": "",
        "category_section": "Mozzarella Sticks (6)",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Bread",
        "price": "$6.25 | With Cheese $7.25",
        "menu_section": "",
        "category_section": "Garlic Bread",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Nachos With Cheese Or Salsa: With Cheese & Salsa",
        "price": "Small $4.75, Large $5.75 | Small- $5.75, Large- $6.75",
        "menu_section": "",
        "category_section": "Nachos",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Or Meatballs ​",
        "price": "$10.95",
        "menu_section": "",
        "category_section": "Or Meatballs",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wings",
        "price": "(12) $16.95, (24) $31.95, (36) $46.95, (50) $64.95, (75) $89.95, (100) $109.95",
        "menu_section": "",
        "category_section": "Wings",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Side of Sautéed Broccoli or Spinach ​",
        "price": "$9.95",
        "menu_section": "",
        "category_section": "Side of Sautéed Broccoli or Spinach",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Side of Sautéed Broccoli Rabe ​ Fried Calamari ​ Soup ​",
        "price": "$12.95 | $11.95 | $6.25",
        "menu_section": "",
        "category_section": "Side of Sautéed Broccoli Rabe",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tossed Green Salad Lettuce, tomatoes, green peppers & onions",
        "price": "Small- $5.45, Large- $6.95",
        "menu_section": "",
        "category_section": "Tossed Green Salad",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Antipasto Ham, capicola, provolone, salami & black olives",
        "price": "$12.95",
        "menu_section": "",
        "category_section": "Antipasto",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chef Salad Ham, turkey, egg & provolone",
        "price": "$12.95",
        "menu_section": "",
        "category_section": "Chef Salad",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tuna Salad Tossed salad with a scoop of tuna",
        "price": "$12.95",
        "menu_section": "",
        "category_section": "Tuna Salad",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caesar Salad",
        "price": "$8.95 | Romaine lettuce, oven toasted croutons mixed with classic Caesar dressing. Add Chicken for $4.00",
        "menu_section": "",
        "category_section": "Caesar Salad",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caprese Salad",
        "price": "Romaine lettuce w fresh mozzarella, sliced tomatoes & garn w roasted peppers. Balsamic dressing on side. Small- $9.25, Large- $12.95",
        "menu_section": "",
        "category_section": "Caprese Salad",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Extra Dressing ​",
        "price": "$0.50",
        "menu_section": "",
        "category_section": "Extra Dressing",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Greek Salad ​ ​",
        "price": "$11.95",
        "menu_section": "",
        "category_section": "Greek Salad",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheese ​",
        "price": "10” Personal - $9.95, 14” Medium- $13.45, Large- 16” $16.95, 18” Jumbo- $18.95 | Sicilian- $21.95 | Deep Dish- $15.94",
        "menu_section": "",
        "category_section": "Cheese",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gluten-free 12” (One Size Only)",
        "price": "$15.95",
        "menu_section": "",
        "category_section": "Gluten-free 12”",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Veggie Broccoli, spinach, tomatoes, mushrooms & onions:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95, Sicilian- $32.95",
        "menu_section": "",
        "category_section": "Veggie",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Works Pepperoni, sausage, mushrooms, green peppers, onions:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95, Sicilian- $32.95",
        "menu_section": "",
        "category_section": "Works",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Ziti ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": "",
        "category_section": "Baked Ziti",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Parmigiana ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": "",
        "category_section": "Chicken Parmigiana",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eggplant Parmigiana ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": "",
        "category_section": "Eggplant Parmigiana",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Buffalo Chicken",
        "price": "10” Personal- $15.95, 14” Medium- $21.95, 16” Large- $25.95, 18” Jumbo- $27.95",
        "menu_section": "",
        "category_section": "Buffalo Chicken",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cool Ranch Chicken Chicken, bacon, tomatoes & ranch dressing:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": "",
        "category_section": "Cool Ranch Chicken",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Special Sauce ​",
        "price": "10” Personal- $15.95, 14” Medium- $20.95, 16” Large- $24.95, 18” Jumbo- $27.95, Sicilian- $29.95",
        "menu_section": "",
        "category_section": "Special Sauce",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tomato Pie",
        "price": "10” Personal- $15.95, 14” Medium- $21.95, 16” Large- $17.95, 18” Jumbo- $20.95, Sicilian- $22.95",
        "menu_section": "",
        "category_section": "Tomato Pie",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bruschetta Tomatoes, garlic & pesto sauce: ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": "",
        "category_section": "Bruschetta",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Taco Pizza Ground beef, lettuce, tomatoes & cheddar:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": "",
        "category_section": "Taco Pizza",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Deep Dish",
        "price": "14” Medium- $14.95",
        "menu_section": "",
        "category_section": "Deep Dish",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vodka Sauce",
        "price": "10” Personal- $13.95, 14” Medium- $21.95, 16” Large- $24.95, 18” Jumbo- $26.95",
        "menu_section": "",
        "category_section": "Vodka Sauce",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Penne Vodka Pizza",
        "price": "10” Personal- $16.95, 14” Medium- $21.95, 16” Large- $25.95, 18” Jumbo- $27.95",
        "menu_section": "",
        "category_section": "Penne Vodka Pizza",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Margarita Pizza",
        "price": "10” Personal- $13.45, 14” Medium- $15.95, 16” Large- $18.95, 18” Jumbo- $20.95",
        "menu_section": "",
        "category_section": "Margarita Pizza",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brooklyn Pizza Square 16”x16”, Extra Thin:",
        "price": "Sicilian- $22.95",
        "menu_section": "",
        "category_section": "Brooklyn Pizza",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meat Lover ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95, Sicilian- $32.95",
        "menu_section": "",
        "category_section": "Meat Lover",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "BBQ Chicken ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95, Sicilian- $32.95",
        "menu_section": "",
        "category_section": "BBQ Chicken",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Four Cheese Red or White:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": "",
        "category_section": "Four Cheese",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Mexico Ground beef, jalapeños, onions & tomatoes",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": "",
        "category_section": "Mexico",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Al’s Favorite Chicken, spinach & romano cheese:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": "",
        "category_section": "Al’s Favorite",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Texas Bacon, onions & tomatoes ​ Pan Pizzas All pan pizzas take one hour.",
        "price": "10” Personal- $15.95, 14” Medium- $21.95, 16” Large- $25.95, 18” Jumbo- $27.95",
        "menu_section": "",
        "category_section": "Texas",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bacon, Ham & Mushroom ​",
        "price": "$25.95",
        "menu_section": "",
        "category_section": "Bacon, Ham & Mushroom",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Primavera",
        "price": "$25.95",
        "menu_section": "",
        "category_section": "Chicken Primavera",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Alfredo",
        "price": "$25.95",
        "menu_section": "",
        "category_section": "Chicken Alfredo",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Veggie ​",
        "price": "$25.95",
        "menu_section": "",
        "category_section": "Veggie",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cheese Steak Special",
        "price": "$25.95",
        "menu_section": "",
        "category_section": "Cheese Steak Special",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meat Lover ​",
        "price": "$25.95",
        "menu_section": "",
        "category_section": "Meat Lover",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Special Sauce Pan Pizzas ​",
        "price": "$22.95",
        "menu_section": "",
        "category_section": "Special Sauce Pan Pizzas",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spaghetti",
        "price": "with: Tomato Sauce- $13.95, Meatballs- $16.95, Sausage- $17.95, Garlic & Mushroom Red or White Sauce- $16.95, Meat Sauce- $16.95, Spaghetti Marinara (Sautéed garlic in red sauce)- $14.95, Clam Sauce (Red or white)- 17.95, Pesto Sauce (Nuts-Free) - $16.95",
        "menu_section": "",
        "category_section": "Spaghetti",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Penne Arrabiata Hot & spicy. Prosciutto & sautéed onions",
        "price": "$16.95",
        "menu_section": "",
        "category_section": "Penne Arrabiata",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Marsala ​ ​",
        "price": "$21.95",
        "menu_section": "",
        "category_section": "Chicken Marsala",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Francese",
        "price": "$21.95",
        "menu_section": "",
        "category_section": "Chicken Francese",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Ziti",
        "price": "$16.95",
        "menu_section": "",
        "category_section": "Baked Ziti",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pasta Primavera Broccoli, tomatoes & mushrooms in a cream sauce.",
        "price": "$17.95 | Add Chicken for $3.00.",
        "menu_section": "",
        "category_section": "Pasta Primavera",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fettuccine Alfredo",
        "price": "$16.95 | Add Chicken for $4.00.",
        "menu_section": "",
        "category_section": "Fettuccine Alfredo",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Stuffed Shells ​",
        "price": "$16.95",
        "menu_section": "",
        "category_section": "Stuffed Shells",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vodka Rigatoni",
        "price": "$16.95 | Add Chicken $4.00",
        "menu_section": "",
        "category_section": "Vodka Rigatoni",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meat Or Cheese Tortellini Choice of sauce",
        "price": "$18.95",
        "menu_section": "",
        "category_section": "Meat Or Cheese Tortellini",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gnocchi Choice of alfredo, tomato or vodka sauce",
        "price": "$16.95",
        "menu_section": "",
        "category_section": "Gnocchi",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meat Sauce ​",
        "price": "$17.95",
        "menu_section": "",
        "category_section": "Meat Sauce",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ravioli",
        "price": "$16.95",
        "menu_section": "",
        "category_section": "Ravioli",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Ravioli ​",
        "price": "$16.95",
        "menu_section": "",
        "category_section": "Baked Ravioli",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lasagna ​",
        "price": "$16.95",
        "menu_section": "",
        "category_section": "Lasagna",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Manicotti ​",
        "price": "$16.95",
        "menu_section": "",
        "category_section": "Manicotti",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Ravioli With Pink Sauce ​",
        "price": "$18.95",
        "menu_section": "",
        "category_section": "Lobster Ravioli With Pink Sauce",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Parmigiana ​ Calzones & Stromboli",
        "price": "with: Chicken $20.95, Eggplant $20.95, Veal $21.95",
        "menu_section": "",
        "category_section": "Parmigiana",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Calzone Ricotta, mozzarella & ham:",
        "price": "Small- $10.95, Large- $21.95",
        "menu_section": "",
        "category_section": "Calzone",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Stromboli Sausage, peppers, mushrooms, onions, pepperoni & mozzarella:",
        "price": "Small- $10.95, Large- $21.95",
        "menu_section": "",
        "category_section": "Stromboli",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Extra Toppings",
        "price": "Small- .85, Large- $1.35",
        "menu_section": "",
        "category_section": "Extra Toppings",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Extra Sauce ​ Nutella Pizza ​ Hot Subs Subs are 12” long.",
        "price": "$0.50 | $11.95",
        "menu_section": "",
        "category_section": "Extra Sauce",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eggplant Parmigiana",
        "price": "$11.95",
        "menu_section": "",
        "category_section": "Eggplant Parmigiana",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Parmigiana ​",
        "price": "$12.95",
        "menu_section": "",
        "category_section": "Chicken Parmigiana",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Veal Parmigiana ​",
        "price": "$13.95",
        "menu_section": "",
        "category_section": "Veal Parmigiana",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Veal Cutlet Lettuce & tomatoes",
        "price": "$13.95",
        "menu_section": "",
        "category_section": "Veal Cutlet",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pepper & Egg ​",
        "price": "$11.95",
        "menu_section": "",
        "category_section": "Pepper & Egg",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pepper & Egg with Cheese ​",
        "price": "$12.95",
        "menu_section": "",
        "category_section": "Pepper & Egg with Cheese",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Sausage Sub",
        "price": "$12.95 | Peppers & Onions .60, Parmigiana 1.00",
        "menu_section": "",
        "category_section": "Sausage Sub",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meatball",
        "price": "$11.95",
        "menu_section": "",
        "category_section": "Meatball",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meatball Parmigiana ​",
        "price": "$11.95",
        "menu_section": "",
        "category_section": "Meatball Parmigiana",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheese Steak Toppings Additional .60 ​",
        "price": "$11.95",
        "menu_section": "",
        "category_section": "Cheese Steak",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pizza Steak ​",
        "price": "$12.95",
        "menu_section": "",
        "category_section": "Pizza Steak",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Cheese Steak Toppings Additional .60",
        "price": "$11.95",
        "menu_section": "",
        "category_section": "Chicken Cheese Steak",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sausage & Broccoli Rabe Add Cheese .60",
        "price": "$13.95",
        "menu_section": "",
        "category_section": "Sausage & Broccoli Rabe",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Ranch Sub Fried chicken with mozzarella, bacon, tomatoes & ranch dressing ​ Cold Subs All served with lettuce, tomato, onions, spices, oil & vinegar. Subs come in 7” Half and 14” Whole sizes.",
        "price": "$13.95",
        "menu_section": "",
        "category_section": "Chicken Ranch Sub",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Italian Hoagie Ham, salami, prosciutto, capicola & provolone:",
        "price": "7” Half- $7.45, 14” Whole- $13.95",
        "menu_section": "",
        "category_section": "Italian Hoagie",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "American Ham, salami & provolone:",
        "price": "7” Half- $6.55, 14” Whole- $11.95",
        "menu_section": "",
        "category_section": "American",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Turkey Hoagie",
        "price": "7” Half- $7.45, 14” Whole- $13.95",
        "menu_section": "",
        "category_section": "Turkey Hoagie",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roast Beef",
        "price": "7” Half- $7.45, 14” Whole- $13.95",
        "menu_section": "",
        "category_section": "Roast Beef",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tuna",
        "price": "7” Half- $7.45, 14” Whole- $13.95",
        "menu_section": "",
        "category_section": "Tuna",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ham",
        "price": "7” Half- $7.45, 14” Whole- $13.95",
        "menu_section": "",
        "category_section": "Ham",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ham & Cheese",
        "price": "7” Half- $7.45, 14” Whole- $12.95",
        "menu_section": "",
        "category_section": "Ham & Cheese",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12” Prosciutto & Fresh Mozzarella ​ Wraps All served with French fries.",
        "price": "12” Whole- $13.95",
        "menu_section": "",
        "category_section": "12” Prosciutto & Fresh Mozzarella",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Caesar Wrap ​",
        "price": "$12.95",
        "menu_section": "",
        "category_section": "Chicken Caesar Wrap",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Prosciutto & Mozzarella Wrap ​",
        "price": "$12.95",
        "menu_section": "",
        "category_section": "Prosciutto & Mozzarella Wrap",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "The Mercer Lettuce, tomato, onion, mayo, and choice of cheese:",
        "price": "$9.95 burger, $12.95 platter",
        "menu_section": "",
        "category_section": "The Mercer",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "The “T” State Topped with sauteed mushrooms, onions, and Monterey Jack cheese:",
        "price": "$9.95 burger, $12.95 platter",
        "menu_section": "",
        "category_section": "The “T” State",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "The Rider Mozzarella cheese. pizza sauce, mushrooms:",
        "price": "$9.95 burger, $12.95 platter",
        "menu_section": "",
        "category_section": "The Rider",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "The Rutgers Cheddar cheese, bacon, diced tomatoes, and onions:",
        "price": "$9.95 burger, $12.95 platter",
        "menu_section": "",
        "category_section": "The Rutgers",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "The Princeton Swiss cheese, tomato, sautéed onions, and mushrooms:",
        "price": "$9.95 burger, $12.95 platter",
        "menu_section": "",
        "category_section": "The Princeton",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "The Windsor Grilled burger or chicken breast: ​ Desserts",
        "price": "$8.95 burger, $10.95 platter",
        "menu_section": "",
        "category_section": "The Windsor",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cannoli ​",
        "price": "$5.25",
        "menu_section": "",
        "category_section": "Cannoli",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "10” Nutella Pizza ​ ​ ​ ​",
        "price": "$12.95",
        "menu_section": "",
        "category_section": "10” Nutella Pizza",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Ziti",
        "price": "1/2 Tray- $65, Full Tray- $110",
        "menu_section": "",
        "category_section": "Baked Ziti",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ziti",
        "price": "1/2 Tray- $40, Full Tray- $75",
        "menu_section": "",
        "category_section": "Ziti",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lasagna",
        "price": "1/2 Tray- $75, Full Tray- $120",
        "menu_section": "",
        "category_section": "Lasagna",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Penne Vodka",
        "price": "1/2 Tray- $65, Full Tray- $110",
        "menu_section": "",
        "category_section": "Penne Vodka",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pasta Aglio & Oil WIth Broccoli",
        "price": "1/2 Tray- $65 , Full Tray- $110",
        "menu_section": "",
        "category_section": "Pasta Aglio & Oil WIth Broccoli",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Meatballs",
        "price": "1/2 Tray- $65, Full Tray- $110",
        "menu_section": "",
        "category_section": "Meatballs",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eggplant",
        "price": "1/2 Tray- $65, Full Tray- $110",
        "menu_section": "",
        "category_section": "Eggplant",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Parm",
        "price": "1/2 Tray- $65, Full Tray- $110",
        "menu_section": "",
        "category_section": "Chicken Parm",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sausage & Sauce",
        "price": "1/2 Tray $70, Full Tray- $120 | With Peppers & Onions: 1/2 Tray- $80, Full Tray- $130",
        "menu_section": "",
        "category_section": "Sausage & Sauce",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gnocchi",
        "price": "1/2 Tray- $70, Full Tray- $120",
        "menu_section": "",
        "category_section": "Gnocchi",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Fingers",
        "price": "25 Pieces- $49.95",
        "menu_section": "",
        "category_section": "Chicken Fingers",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mozzarella Sticks ​ Party Subs Available in 3 Foot and 6 foot sizes.",
        "price": "40 Pieces- $52.50",
        "menu_section": "",
        "category_section": "Mozzarella Sticks",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Turkey",
        "price": "3 Foot- $70, 6 Foot- $120",
        "menu_section": "",
        "category_section": "Turkey",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Italian",
        "price": "3 Foot- $70, 6 Foot- $120",
        "menu_section": "",
        "category_section": "Italian",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tuna",
        "price": "3 Foot- $70, 6 Foot- $120",
        "menu_section": "",
        "category_section": "Tuna",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "American",
        "price": "3 Foot- $60, 6 Foot- $110",
        "menu_section": "",
        "category_section": "American",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roast Beef",
        "price": "3 Foot- $70, 6 Foot- $120 | Add Cheese: 3 Foot- $20, 6 Foot- $30",
        "menu_section": "",
        "category_section": "Roast Beef",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mixed Cheese ​ Salad Trays 1/2 Tray serves 8, Full Tray serves 15.",
        "price": "3 Foot- $50, 6 Foot- $95",
        "menu_section": "",
        "category_section": "Mixed Cheese",
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Tossed Salad",
        "price": "1/2 Tray- $35, Full Tray- $50",
        "menu_section": "",
        "category_section": "Tossed Salad",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caesar Salad",
        "price": "1/2 Tray- $40, Full Tray- $70",
        "menu_section": "",
        "category_section": "Caesar Salad",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chef Salad",
        "price": "1/2 Tray- $60, Full Tray- $90",
        "menu_section": "",
        "category_section": "Chef Salad",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Antipasto",
        "price": "1/2 Tray- $60, Full Tray- $90",
        "menu_section": "",
        "category_section": "Antipasto",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Add Chicken ​ Wings Hot Sauce or BBQ",
        "price": "1/2 Tray- $20, Full Tray- $35",
        "menu_section": "",
        "category_section": "Add Chicken",
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wings ​ ​ ​ ​",
        "price": "12 Wings- $14.95, 24 Wings- $28.95, 36 Wings- $43.95, 50 Wings- $59.95, 100 Wings- $109.95",
        "menu_section": "",
        "category_section": "Wings",
        "is_food": true,
        "is_vegetarian": false
      }
    ]
  },
  {
    "name": "Amazing Thai NJ",
    "items": [
      {
        "item": "Catering Menu",
        "price": "",
        "menu_section": "",
        "category_section": "",
        "is_food": true,
        "is_vegetarian": false
      }
    ]
  }
];
