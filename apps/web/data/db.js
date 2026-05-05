const restaurants = [
  {
    "name": "A2B Indian Veg",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "3817, US 1, Princeton, NJ, 08540",
    "cuisine": "indian",
    "website": "https://www.a2bnewjersey.com/",
    "latitude": 40.3408352,
    "longitude": -74.6279718
  },
  {
    "name": "Agricola Eatery",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "11, Witherspoon Street, Princeton, NJ, 08542",
    "website": "https://www.agricolaeatery.com",
    "latitude": 40.3501239,
    "longitude": -74.6598063
  },
  {
    "name": "Alfonso's",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "1225 State Rd, Princeton, NJ, 08540",
    "cuisine": "pizza",
    "website": "https://alfonsospizzeria.com/",
    "latitude": 40.4004648,
    "longitude": -74.648795
  },
  {
    "name": "Aljon's Pizza & Restaurant",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "64, Princeton Hightstown Road, Princeton Junction, NJ, 08550",
    "cuisine": "pizza",
    "website": "https://aljonspizzawestwindsor.com/",
    "latitude": 40.3131719,
    "longitude": -74.6209828
  },
  {
    "name": "Amazing Thai",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "260, Nassau Street, NJ, 08542",
    "cuisine": "thai",
    "website": "https://www.amazingthainj.com/",
    "latitude": 40.3525147,
    "longitude": -74.6508617
  },
  {
    "name": "Asian Bistro",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "31, Station Drive, Princeton Junction, NJ, 08850",
    "cuisine": "korean;asian",
    "website": "https://asianbistronj.us/",
    "latitude": 40.3183741,
    "longitude": -74.6217483
  },
  {
    "name": "Beniamiono's Cucina",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "1325 US Highway 206, Skillman, NJ, 08558",
    "cuisine": "pizza",
    "website": "https://beniaminoscucina.com/",
    "latitude": 40.4053245,
    "longitude": -74.6469933
  },
  {
    "name": "Brick House Tavern",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "3569, US 1, Princeton, NJ, 08540",
    "cuisine": "american;grill",
    "website": "https://www.brickhousetavernandtap.com/location/brick-house-tavern-and-tap-princeton-nj/",
    "latitude": 40.3165108,
    "longitude": -74.657924
  },
  {
    "name": "Cross Culture",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "301 N Harrison St, Princeton, NJ, 08540",
    "cuisine": "indian",
    "website": "https://crossculturerestaurant.com/",
    "latitude": 40.364945,
    "longitude": -74.6531621
  },
  {
    "name": "elements",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "66, Witherspoon Street, princeton, NJ, 08542",
    "cuisine": "american",
    "website": "https://www.elementsprinceton.com",
    "latitude": 40.3514827,
    "longitude": -74.6607477
  },
  {
    "name": "Genteel's Brick Oven Pizza",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "1378 US Highway 206, Skillman, NJ, 08558",
    "cuisine": "pizza",
    "website": "https://www.genteelsbrickovenpizza.com/",
    "latitude": 40.4064548,
    "longitude": -74.6507292
  },
  {
    "name": "Local Greek",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "44, Leigh Avenue, Princeton, NJ, 08542",
    "cuisine": "greek",
    "website": "https://localgreeknj.com/",
    "latitude": 40.3559209,
    "longitude": -74.6645738
  },
  {
    "name": "Mistral",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "66, Witherspoon Street, princeton, NJ, 08542",
    "cuisine": "american",
    "website": "https://www.mistralprinceton.com/",
    "latitude": 40.3514827,
    "longitude": -74.6607477
  },
  {
    "name": "Olives",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "22, Witherspoon Street, Princeton, NJ, 08542",
    "cuisine": "greek",
    "website": "https://olivesprinceton.com",
    "latitude": 40.3504895,
    "longitude": -74.66028
  },
  {
    "name": "Pizza Den",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "242 1/2, Nassau Street, Princeton, NJ, 08542",
    "cuisine": "pizza",
    "website": "https://www.pizzadenprinceton.com/",
    "latitude": 40.352217,
    "longitude": -74.6518307
  },
  {
    "name": "Pj's Pancake House",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "64, Princeton Hightstown Road, Princeton Junction, NJ, 08550",
    "cuisine": "breakfast",
    "website": "https://pancakes.com",
    "latitude": 40.3131719,
    "longitude": -74.6209828
  },
  {
    "name": "Roots Ocean Prime",
    "icon": "restaurant",
    "distance": "nearby",
    "address": "98, University Place, Princeton, NJ, 08540",
    "cuisine": "fish_and_chips;american;steak_house",
    "website": "https://rootssteakhouse.com/roots_ocean_prime",
    "latitude": 40.3433019,
    "longitude": -74.6594289
  }
];

const menus = [
  {
    "name": "A2B Indian Veg",
    "items": [
      {
        "item": "Rasam Spicy Tamarind based delicacy with South Indian Spices",
        "item_name": "Rasam",
        "item_desc": "Spicy Tamarind based delicacy with South Indian Spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cream of Vegetable Soup A recipe brimming with the freshness of vegetables and the delicate flavor of cream",
        "item_name": "Cream of Vegetable Soup",
        "item_desc": "A recipe brimming with the freshness of vegetables and the delicate flavor of cream",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Sweet Corn Veg Soup Chinese Style creamy soup with sweet corn & diced vegetables",
        "item_name": "Sweet Corn Veg Soup",
        "item_desc": "Chinese Style creamy soup with sweet corn & diced vegetables",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cream of Tomato Soup Thick and hearty classic tomato soup spiced up with hints of butter & freshly fried croutons",
        "item_name": "Cream of Tomato Soup",
        "item_desc": "Thick and hearty classic tomato soup spiced up with hints of butter & freshly fried croutons",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hot & Sour Veg Soup Chinese Style creamy soup with sweet corn & diced vegetables",
        "item_name": "Hot & Sour Veg Soup",
        "item_desc": "Chinese Style creamy soup with sweet corn & diced vegetables",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Veg Clear Soup Continental Style Veg broth with juliennes of crispy fresh vegetables",
        "item_name": "Veg Clear Soup",
        "item_desc": "Continental Style Veg broth with juliennes of crispy fresh vegetables",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Medhu Vadai Crispy deep fried South Indian lentil doughnut served with varieties of chutney & sambar",
        "item_name": "Medhu Vadai",
        "item_desc": "Crispy deep fried South Indian lentil doughnut served with varieties of chutney & sambar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Sambar Vadai South Indian lentil doughnut soaked in sambar and garnished with chopped onions & cilantro",
        "item_name": "Sambar Vadai",
        "item_desc": "South Indian lentil doughnut soaked in sambar and garnished with chopped onions & cilantro",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Masala Vadai South Indian deep fried snack made with lentils, onions and traditional spices",
        "item_name": "Masala Vadai",
        "item_desc": "South Indian deep fried snack made with lentils, onions and traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Keerai Vadai South Indian deep fried snack made with chopped spinach, lentils, onions and traditional spices",
        "item_name": "Keerai Vadai",
        "item_desc": "South Indian deep fried snack made with chopped spinach, lentils, onions and traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Vaazhaipoo Vadai Chef’s Special deep fried South Indian snack made with chopped plantain flowers, lentils, onions and traditional spices",
        "item_name": "Vaazhaipoo Vadai",
        "item_desc": "Chef’s Special deep fried South Indian snack made with chopped plantain flowers, lentils, onions and traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Onion Pakoda Deep fried juliennes of onion mixed with besan flour & Indian house spices",
        "item_name": "Onion Pakoda",
        "item_desc": "Deep fried juliennes of onion mixed with besan flour & Indian house spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mixed Veg Pakoda Deep fried juliennes of vegetables mixed with besan flour & Indian house spices",
        "item_name": "Mixed Veg Pakoda",
        "item_desc": "Deep fried juliennes of vegetables mixed with besan flour & Indian house spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Paneer Tikka Cubes of Paneer marinate with all the festive flavors cooked to perfection in traditional style Clay Oven",
        "item_name": "Paneer Tikka",
        "item_desc": "Cubes of Paneer marinate with all the festive flavors cooked to perfection in traditional style Clay Oven",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Aloo Bonda Seasoned potato dumpling coated with besan flour and deep fried",
        "item_name": "Aloo Bonda",
        "item_desc": "Seasoned potato dumpling coated with besan flour and deep fried",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Kuzhi Paniyaram South Indian style seasoned rice & lentil batter balls blended with onion, green chillies shallow fried in cast pans",
        "item_name": "Kuzhi Paniyaram",
        "item_desc": "South Indian style seasoned rice & lentil batter balls blended with onion, green chillies shallow fried in cast pans",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bajji( Only for Dinner) South Indian street delicacy made with choice of above vegetables coated with besan flour blended with traditional spices & deep fried served with chutneys",
        "item_name": "Bajji( Only for Dinner)",
        "item_desc": "South Indian street delicacy made with choice of above vegetables coated with besan flour blended with traditional spices & deep fried served with chutneys",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Bajji( Only for Dinner) South Indian street delicacy made with choice of above vegetables coated with besan flour blended with traditional spices & deep fried",
        "item_desc": "served with chutneys"
      },
      {
        "item": "Choice of 65's Classic South Indian appetizer with choice of above options marinated in traditional spice blend and deep fried to perfection",
        "item_name": "Choice of 65's",
        "item_desc": "Classic South Indian appetizer with choice of above options marinated in traditional spice blend and deep fried to perfection",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Choice of 65's",
        "item_desc": "Classic South Indian appetizer with choice of above options marinated in traditional spice blend and deep fried to perfection"
      },
      {
        "item": "Choice of Chilli Fries Indo-Chinese creation with choice of above options stir-fried with capsicum, onion and tantalizing Chinese sauces",
        "item_name": "Choice of Chilli Fries",
        "item_desc": "Indo-Chinese creation with choice of above options stir-fried with capsicum, onion and tantalizing Chinese sauces",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Choice of Chilli Fries",
        "item_desc": "Indo-Chinese creation with choice of above options stir-fried with capsicum, onion and tantalizing Chinese sauces"
      },
      {
        "item": "Choice of Pepper Fries Indo-Chinese creation with choice of above options stir-fried with pepper, capsicum, onion and tantalizing Chinese sauces",
        "item_name": "Choice of Pepper Fries",
        "item_desc": "Indo-Chinese creation with choice of above options stir-fried with pepper, capsicum, onion and tantalizing Chinese sauces",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Choice of Pepper Fries",
        "item_desc": "Indo-Chinese creation with choice of above options stir-fried with pepper, capsicum, onion and tantalizing Chinese sauces"
      },
      {
        "item": "Bonda Deep fried dumpling made with lentil batter & peppercorns",
        "item_name": "Bonda",        
        "item_desc": "Deep fried dumpling made with lentil batter & peppercorns",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Bonda Deep fried dumpling",
        "item_desc": "made with lentil batter & peppercorns"
      },
      {
        "item": "French Fries Yummy deep fried potato fingers tossed with salt and pepper to taste",
        "item_name": "French Fries",
        "item_desc": "Yummy deep fried potato fingers tossed with salt and pepper to taste",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "French Fries",
        "item_desc": "Yummy deep fried potato fingers tossed with salt and pepper to taste"
      },
      {
        "item": "Rasamalai Rich Bengali dessert made from spongy cottage cheese & sweetened milk",
        "item_name": "Rasamalai",
        "item_desc": "Rich Bengali dessert made from spongy cottage cheese & sweetened milk",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gulab Jamun Deep fried sweet dumplings stewed in sugar syrup",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gulab Jamun Deep fried",
        "item_desc": "sweet dumplings stewed in sugar syrup"
      },
      {
        "item": "Pineapple Rava Kesari South Indian dessert made with semolina, pineapple & sugar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pineapple Rava Kesari",
        "item_desc": "South Indian dessert made with semolina, pineapple & sugar"
      },
      {
        "item": "Brown Sugar Kesari South Indian dessert made with semolina, pineapple & brown sugar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brown Sugar Kesari",
        "item_desc": "South Indian dessert made with semolina, pineapple & brown sugar"
      },
      {
        "item": "Payasam of the Day South Indian milk pudding flavored with cardamom, raisins & nuts",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Payasam of the Day",
        "item_desc": "South Indian milk pudding flavored with cardamom, raisins & nuts"
      },
      {
        "item": "Kulfi Frozen Indian dessert made from thickened milk & nuts",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kulfi Frozen Indian dessert",
        "item_desc": "made from thickened milk & nuts"
      },
      {
        "item": "Idly Most popular South-Indian steamed rice & lentil cakes served with varieties of chutney, sambar & gun powder/milagaipodi",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Idly Most",
        "item_desc": "popular South-Indian steamed rice & lentil cakes served with varieties of chutney, sambar & gun powder/milagaipodi"
      },
      {
        "item": "Rava Idly( Weekends Only) Popular idli with a difference made with semolina, nuts and traditional spices served with varieties of chutney, sambar & gun powder/milagaipodi",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Rava Idly( Weekends Only) Popular idli with a difference",
        "item_desc": "made with semolina, nuts and traditional spices served with varieties of chutney, sambar & gun powder/milagaipodi"
      },
      {
        "item": "Idiyappam( For Dinner only) Steamed rice flour string hoopers a South Indian culinary speciality served with vegetable kurma & coconut milk",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Idiyappam( For Dinner only) Steamed rice flour string hoopers",
        "item_desc": "a South Indian culinary speciality served with vegetable kurma & coconut milk"
      },
      {
        "item": "Cocktail Sambar Idly Mini idlies soaked in sambar & topped with ghee",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Cocktail Sambar Idly Mini idlies soaked in sambar &",
        "item_desc": "topped with ghee"
      },
      {
        "item": "Ghee Pongal South Indian speciality made from rice & lentil cooked to perfection with peppercorns, nuts & house spices seasoned with ghee served with varieties of chutney & sambar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Ghee Pongal South Indian speciality made from rice & lentil cooked to perfection with peppercorns, nuts & house spices seasoned with ghee",
        "item_desc": "served with varieties of chutney & sambar"
      },
      {
        "item": "Rava Kichadi A healthy breakfast option made with semolina and vegetables lightly tempered with spices cooked to perfection",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Rava Kichadi A healthy breakfast option",
        "item_desc": "made with semolina and vegetables lightly tempered with spices cooked to perfection"
      },
      {
        "item": "Chapathi Kurma South Asian unleavened flat wheat bread served with vegetable kurma & raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Chapathi Kurma South Asian unleavened flat wheat bread",
        "item_desc": "served with vegetable kurma & raitha"
      },
      {
        "item": "Poori Masala Fluffy deep fried Indian bread served with seasoned potato masala",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Poori Masala",
        "item_desc": "Fluffy deep fried Indian bread served with seasoned potato masala"
      },
      {
        "item": "Parotta Kurma South Indian layered flat bread served with vegetable kurma & raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Parotta Kurma",
        "item_desc": "South Indian layered flat bread served with vegetable kurma & raitha"
      },
      {
        "item": "Plain Dosai Classic South Indian thin crepe made of rice & lentil",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Plain Dosai",
        "item_desc": "Classic South Indian thin crepe made of rice & lentil"
      },
      {
        "item": "Onion Dosai Classic South Indian thin crepe made of rice & lentil topped with chopped onions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Onion Dosai",
        "item_desc": "Classic South Indian thin crepe made of rice & lentil topped with chopped onions"
      },
      {
        "item": "Podi Dosai Classic South Indian thin crepe made of rice & lentil topped with gun powder / milagaipodi",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Podi Dosai",
        "item_desc": "Classic South Indian thin crepe made of rice & lentil topped with gun powder / milagaipodi"
      },
      {
        "item": "Masala Dosai Classic South Indian thin crepe made of rice & lentil filled with seasoned potato masala",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Masala Dosai",
        "item_desc": "Classic South Indian thin crepe made of rice & lentil filled with seasoned potato masala"
      },
      {
        "item": "Mysore Masala Dosai Classic South Indian thin crepe made of rice & lentil spread with spicy house chutney & filled with seasoned potato masala",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Mysore Masala Dosai",
        "item_desc": "Classic South Indian thin crepe made of rice & lentil spread with spicy house chutney & filled with seasoned potato masala"
      },
      {
        "item": "Paneer Masala Dosai Classic South Indian thin crepe made of rice & lentil filled with shredded cottage cheese and spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paneer Masala Dosai",
        "item_desc": "Classic South Indian thin crepe made of rice & lentil filled with shredded cottage cheese and spices"
      },
      {
        "item": "Cheese Dosai Classic South Indian thin crepe made of rice & lentil filled with shredded mozzarella cheese",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Cheese Dosai",
        "item_desc": "Classic South Indian thin crepe made of rice & lentil filled with shredded mozzarella cheese"
      },
      {
        "item": "Paper Roast Classic South Indian crispy thin shaped crepe made of rice & lentil",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paper Roast",
        "item_desc": "Classic South Indian crispy thin shaped crepe made of rice & lentil"
      },
      {
        "item": "Ghee Roast Classic South Indian crispy thin cone shaped crepe made of rice & lentil topped with ghee",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Ghee Roast",
        "item_desc": "Classic South Indian crispy thin cone shaped crepe made of rice & lentil topped with ghee"
      },
      {
        "item": "Kal Dosai Classic South Indian thick crepe made of rice & lentil",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kal Dosai",
        "item_desc": "Classic South Indian thick crepe made of rice & lentil"
      },
      {
        "item": "Rava Dosai Popular Dosai with a difference made with semolina",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Rava Dosai Popular Dosai with a difference",
        "item_desc": "made with semolina"
      },
      {
        "item": "Onion Rava Dosai Popular Dosai with a difference made with semolina topped with chopped onions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Onion Rava Dosai Popular Dosai with a difference",
        "item_desc": "made with semolina topped with chopped onions"
      },
      {
        "item": "Rava Masala Dosai Popular Dosai with a difference made with semolina filled with seasoned potato masala",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Rava Masala Dosai Popular Dosai with a difference",
        "item_desc": "made with semolina filled with seasoned potato masala"
      },
      {
        "item": "Plain Uthappam South Indian soft pancake made of rice & lentil",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Plain Uthappam",
        "item_desc": "South Indian soft pancake made of rice & lentil"
      },
      {
        "item": "Onion Uthappam South Indian soft pancake made of rice & lentil topped with chopped onions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Onion Uthappam",
        "item_desc": "South Indian soft pancake made of rice & lentil topped with chopped onions"
      },
      {
        "item": "Small Onion Uthappam South Indian soft pancake made of rice & lentil topped with sliced shallots of small onions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Small Onion Uthappam",
        "item_desc": "South Indian soft pancake made of rice & lentil topped with sliced shallots of small onions"
      },
      {
        "item": "Podi Uthappam South Indian soft pancake made of rice & lentil topped with gun powder / milagaipodi",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Podi Uthappam",
        "item_desc": "South Indian soft pancake made of rice & lentil topped with gun powder / milagaipodi"
      },
      {
        "item": "Masala Uthappam South Indian soft pancake made of rice & lentil topped with onions, tomatoes, green chillies, cilantro, curry leaves & gun powder / milagaipodi",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Masala Uthappam",
        "item_desc": "South Indian soft pancake made of rice & lentil topped with onions, tomatoes, green chillies, cilantro, curry leaves & gun powder / milagaipodi"
      },
      {
        "item": "Idly Vadai 2 pcs Idli & Medhu Vadai served with varieties of chutney, sambar & gun powder/milagaipodi",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Idly Vadai 2 pcs Idli & Medhu Vadai",
        "item_desc": "served with varieties of chutney, sambar & gun powder/milagaipodi"
      },
      {
        "item": "Pongal Vadai Ghee Pongal & Medhu Vadai served with varieties of chutney & sambar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Pongal Vadai Ghee Pongal & Medhu Vadai",
        "item_desc": "served with varieties of chutney & sambar"
      },
      {
        "item": "Mini Tiffin Perfect way to begin the day Idli, Medhu Vada, Ghee Pongal, Rava Kichudi & Mini Dosa served with chutney & sambar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Mini Tiffin Perfect way to begin the day",
        "item_desc": "Idli, Medhu Vada, Ghee Pongal, Rava Kichudi & Mini Dosa served with chutney & sambar"
      },
      {
        "item": "South Indian Rush Lunch Vegetable Biriyani, Rice of the day, Poriyal, Yogurt Rice, Chapati & Veg Kurma",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "South Indian Rush Lunch Vegetable Biriyani, Rice of the day, Poriyal, Yogurt Rice, Chapati & Veg Kurma",
        "item_desc": ""
      },
      {
        "item": "South Indian Thali Steamed Rice, Sambar, Rasam, Kootu, Poriyal, Kaara Kozhambu, Chapati, Kurma, Yoghurt, Appalam, Pickle & Sweet",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "South Indian Thali Steamed Rice, Sambar, Rasam, Kootu, Poriyal, Kaara Kozhambu, Chapati, Kurma, Yoghurt, Appalam, Pickle & Sweet",
        "item_desc": ""
      },
      {
        "item": "Appam South Indian delight made with fermented rice batter & coconut milk served with vegetable kurma & coconut milk",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Appam South Indian delight made with fermented rice batter & coconut milk",
        "item_desc": "served with vegetable kurma & coconut milk"
      },
      {
        "item": "Adai Aviyal( Only for Dinner) Spicy & flavourful variant of dosa served with an assortment of vegetables in yogurt and coconut gravy A Kerala speciality",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Adai Aviyal( Only for Dinner) Spicy & flavourful variant of dosa served with an assortment of vegetables in yogurt and coconut gravy",
        "item_desc": "A Kerala speciality"
      },
      {
        "item": "Chole Bhature( Only for Dinner) Big fluffy deep fried Indian bread served with Punjabi style spicy chick peas masala",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chole Bhature( Only for Dinner) Big",
        "item_desc": "fluffy deep fried Indian bread served with Punjabi style spicy chick peas masala"
      },
      {
        "item": "Veg Kothu Parotta South Indian street delicacy made with minced layered flat bread sautéed with vegetables, green chillies & house spices served with vegetable kurma & raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Veg Kothu Parotta South Indian street delicacy made with minced layered flat bread sautéed with vegetables, green chillies & house spices",
        "item_desc": "served with vegetable kurma & raitha"
      },
      {
        "item": "Chilli Parotta South Indian street delicacy made with diced layered flat bread sautéed with onions, bell peppers & chilli sauce served with raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chilli Parotta South Indian street delicacy made with diced layered flat bread sautéed with onions, bell peppers & chilli sauce",
        "item_desc": "served with raitha"
      },
      {
        "item": "Ceylon Parotta Sri Lankan style hand tossed folded soft flat bread served with vegetable kurma & raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Ceylon Parotta Sri Lankan style hand tossed folded soft flat bread",
        "item_desc": "served with vegetable kurma & raitha"
      },
      {
        "item": "Set Dosai Vada Curry(Only for Dinner) South Indian soft yellow crepe made of rice, lentil & seasonings served with Chettinad special tasty lentil curry",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Set Dosai Vada Curry(Only for Dinner) South Indian soft yellow crepe made of rice, lentil & seasonings",
        "item_desc": "served with Chettinad special tasty lentil curry"
      },
      {
        "item": "Ennai Kathirikai Kuzhambu Tamarind based tangy curry cooked with marinated Egg-plant, onions & tomatoes",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Ennai Kathirikai Kuzhambu Tamarind based tangy curry",
        "item_desc": "cooked with marinated Egg-plant, onions & tomatoes"
      },
      {
        "item": "Paruppu Urundai Tamarind based tangy curry cooked with lentil dumpling, onions & tomatoes",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paruppu Urundai Tamarind based tangy curry",
        "item_desc": "cooked with lentil dumpling, onions & tomatoes"
      },
      {
        "item": "Karuvepillai Poondu Kuzhambu Tamarind based tangy curry cooked with whole garlic, onions, curry leaves & tomatoes",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Karuvepillai Poondu Kuzhambu Tamarind based tangy curry",
        "item_desc": "cooked with whole garlic, onions, curry leaves & tomatoes"
      },
      {
        "item": "Sundakkai Vathal Kuzhambu Tamarind based tangy curry cooked with dried turkey berries (Sundakaai Vathal), onions & tomatoes",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sundakkai Vathal Kuzhambu Tamarind based tangy curry",
        "item_desc": "cooked with dried turkey berries (Sundakaai Vathal), onions & tomatoes"
      },
      {
        "item": "Paal Katti Pattani Kurma Mildly spiced South Indian style preparation with cottage cheese, green peas & house spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paal Katti Pattani Kurma Mildly spiced",
        "item_desc": "South Indian style preparation with cottage cheese, green peas & house spices"
      },
      {
        "item": "Kaai Kari Kurma Mixed vegetables cooked in coconut based curry with traditional South Indian spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kaai Kari Kurma Mixed vegetables",
        "item_desc": "cooked in coconut based curry with traditional South Indian spices"
      },
      {
        "item": "Mushroom Chettinad Spicy Chettinad style preparation with mushroom, onions & traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Mushroom Chettinad",
        "item_desc": "Spicy Chettinad style preparation with mushroom, onions & traditional spices"
      },
      {
        "item": "Koon Curry Mushroom curry made in Kerala style coconut based preparation",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Koon Curry Mushroom curry",
        "item_desc": "made in Kerala style coconut based preparation"
      },
      {
        "item": "Dal Tadka Moong Dal boiled and cooked with onion, tomatoes and tempered with traditional Indian spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Dal Tadka Moong Dal boiled and",
        "item_desc": "cooked with onion, tomatoes and tempered with traditional Indian spices"
      },
      {
        "item": "Dal Makhani Delicious creamy lentil preparation as made in the traditional Punjabi Dhabas",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Dal Makhani Delicious",
        "item_desc": "creamy lentil preparation as made in the traditional Punjabi Dhabas"
      },
      {
        "item": "Dal Palak Punjabi style nutritious spinach & lentil recipe cooked with traditional Indian spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Dal Palak Punjabi style nutritious spinach & lentil recipe",
        "item_desc": "cooked with traditional Indian spices"
      },
      {
        "item": "Chana Masala Popular Punjabi curry made with chickpeas onion, tomatoes and house spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Chana Masala",
        "item_desc": "Popular Punjabi curry made with chickpeas onion, tomatoes and house spices"
      },
      {
        "item": "Paneer Butter Masala Cottage cheese cubes cooked in a rich & creamy mildly spiced masala base",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paneer Butter Masala Cottage cheese cubes",
        "item_desc": "cooked in a rich & creamy mildly spiced masala base"
      },
      {
        "item": "Paneer Makhani Cottage cheese cubes simmered in a creamy tomato based Indian gravy",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paneer Makhani Cottage cheese cubes simmered in a",
        "item_desc": "creamy tomato based Indian gravy"
      },
      {
        "item": "Palak Paneer Chunks of soft cottage cheese simmered in a spiced spinach puree garnished with cream",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Palak Paneer Chunks of soft cottage cheese simmered in a spiced spinach puree garnished",
        "item_desc": "with cream"
      },
      {
        "item": "Kadai Paneer Cottage cheese cubes tossed with onions, tomatoes & bell peppers in a flavorful Indian masala base",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kadai Paneer Cottage cheese cubes tossed",
        "item_desc": "with onions, tomatoes & bell peppers in a flavorful Indian masala base"
      },
      {
        "item": "Malai Kofta Shallow fried shredded cottage cheese dumplings cooked in a rich smooth gravy",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Malai Kofta Shallow fried shredded cottage cheese dumplings",
        "item_desc": "cooked in a rich smooth gravy"
      },
      {
        "item": "Kadai Mushroom Mushroom tossed with onions, tomatoes & bell peppers in a flavorful Indian masala base",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kadai Mushroom Mushroom tossed",
        "item_desc": "with onions, tomatoes & bell peppers in a flavorful Indian masala base"
      },
      {
        "item": "Paneer Khurchan Strips of cottage cheese tossed with juliennes of onion, tomato and capsicum sautéed in onion sauce & Indian spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paneer Khurchan Strips of cottage cheese tossed",
        "item_desc": "with juliennes of onion, tomato and capsicum sautéed in onion sauce & Indian spices"
      },
      {
        "item": "Paneer Mughlai Cottage cheese cubes cooked in creamy, fragrant and delicately spiced curry",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paneer Mughlai Cottage cheese cubes",
        "item_desc": "cooked in creamy, fragrant and delicately spiced curry"
      },
      {
        "item": "Methi Malai Matar Shredded cottage cheese, fenugreek leaves & green peas cooked with mild spices in a rich creamy gravy",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Methi Malai Matar Shredded cottage cheese, fenugreek leaves & green peas",
        "item_desc": "cooked with mild spices in a rich creamy gravy"
      },
      {
        "item": "Kadai Vegetables Mixed vegetables tossed with onions, tomatoes & bell peppers in a flavourful Indian masala base",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kadai Vegetables Mixed vegetables tossed",
        "item_desc": "with onions, tomatoes & bell peppers in a flavourful Indian masala base"
      },
      {
        "item": "Vegetable Jalfrezi Juliennes of mixed vegetables tossed with onion, tomato and capsicum in onion sauce & Indian spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable Jalfrezi Juliennes of mixed vegetables tossed",
        "item_desc": "with onion, tomato and capsicum in onion sauce & Indian spices"
      },
      {
        "item": "Aloo Matar Cubes of fried potato & green peas sautéed in a flavorful Indian sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Aloo Matar Cubes of fried potato & green peas sautéed in a flavorful Indian sauce",
        "item_desc": ""
      },
      {
        "item": "Khumb Masala Punjabi style preparation made with mushroom, onion, tomato & traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Khumb Masala Punjabi style preparation",
        "item_desc": "made with mushroom, onion, tomato & traditional spices"
      },
      {
        "item": "Bhindi Masala Ladies finger pieces deep fried & sautéed with onions, tomatoes & Indian spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bhindi Masala Ladies finger pieces deep fried & sautéed",
        "item_desc": "with onions, tomatoes & Indian spices"
      },
      {
        "item": "Navratan Korma Rich Mughal style mildly spiced curry made with mixed vegetables, fruits, nuts and traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Navratan Korma",
        "item_desc": "Rich Mughal style mildly spiced curry made with mixed vegetables, fruits, nuts and traditional spices"
      },
      {
        "item": "Mili Juli Sabzi Creamy curry cooked to perfection with mixed vegetables, onions, tomatoes & traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Mili Juli Sabzi",
        "item_desc": "Creamy curry cooked to perfection with mixed vegetables, onions, tomatoes & traditional spices"
      },
      {
        "item": "Matar Mushroom Mushroom and green peas cooked with khoa & traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Matar Mushroom Mushroom and green peas",
        "item_desc": "cooked with khoa & traditional spices"
      },
      {
        "item": "Matar Paneer Cottage cheese and green peas cooked in a flavorful onion & tomato sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Matar Paneer Cottage cheese and green peas",
        "item_desc": "cooked in a flavorful onion & tomato sauce"
      },
      {
        "item": "Parotta South Indian multi layered flat bread",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Parotta",
        "item_desc": "South Indian multi layered flat bread"
      },
      {
        "item": "Chapathi South Asian unleavened flat wheat bread",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chapathi South Asian unleavened flat wheat bread",
        "item_desc": ""
      },
      {
        "item": "Naan Traditional Punjabi bread baked in clay oven",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Naan",
        "item_desc": "Traditional Punjabi bread baked in clay oven"
      },
      {
        "item": "Butter Naan Traditional Punjabi bread baked in clay oven & brushed with butter",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Butter Naan",
        "item_desc": "Traditional Punjabi bread baked in clay oven & brushed with butter"
      },
      {
        "item": "Garlic Naan Traditional Punjabi bread baked in clay oven topped with chopped garlic & brushed with butter",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Garlic Naan Traditional Punjabi bread baked in clay oven topped with chopped garlic & brushed with butter",
        "item_desc": ""
      },
      {
        "item": "Roti Traditional Punjabi wheat bread baked in clay oven",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roti",
        "item_desc": "Traditional Punjabi wheat bread baked in clay oven"
      },
      {
        "item": "Lacha Parotta Multi Layered wheat bread baked in clay oven",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lacha Parotta Multi Layered wheat bread baked in clay oven",
        "item_desc": ""
      },
      {
        "item": "Onion Kulcha Traditional Punjabi bread stuffed with finely chopped Onion & baked in clay oven",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Onion Kulcha",
        "item_desc": "Traditional Punjabi bread stuffed with finely chopped Onion & baked in clay oven"
      },
      {
        "item": "Aloo Kulcha Traditional Punjabi bread stuffed with seasoned potato & baked in clay oven",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Aloo Kulcha",
        "item_desc": "Traditional Punjabi bread stuffed with seasoned potato & baked in clay oven"
      },
      {
        "item": "Paneer Kulcha Traditional Punjabi bread stuffed with seasoned grated cottage cheese & baked in clay oven",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paneer Kulcha",
        "item_desc": "Traditional Punjabi bread stuffed with seasoned grated cottage cheese & baked in clay oven"
      },
      {
        "item": "Kashmiri Naan Traditional Punjabi bread baked in clay oven topped with chopped dry fruits, nuts & brushed with butter",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kashmiri Naan",
        "item_desc": "Traditional Punjabi bread baked in clay oven topped with chopped dry fruits, nuts & brushed with butter"
      },
      {
        "item": "Variety Rice Traditional South Indian lunch box rice recipes)",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Variety Rice",
        "item_desc": "Traditional South Indian lunch box rice recipes)"
      },
      {
        "item": "Vegetable Dum Biryani Classic South Indian preparation made of long grain basmati rice, mixed vegetables & traditional spices cooked under dum served with veg kurma & raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable Dum Biryani Classic South Indian preparation made of long grain basmati rice, mixed vegetables & traditional spices cooked under dum",
        "item_desc": "served with veg kurma & raitha"
      },
      {
        "item": "Jeera Rice Long grain basmati rice cooked with cumin seeds, whole spices & ghee",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jeera Rice Long grain basmati rice",
        "item_desc": "cooked with cumin seeds, whole spices & ghee"
      },
      {
        "item": "Choice of Pulao's Aromatic & flavourful recipe made from long grain basmati rice cooked with choice of above option& whole spices tempered in ghee",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Choice of Pulao's",
        "item_desc": "Aromatic & flavourful recipe made from long grain basmati rice cooked with choice of above option& whole spices tempered in ghee"
      },
      {
        "item": "Choice of Fried Rice Chinese classic preparation made from long grain basmati rice cooked with choice of above option garnished with scallions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Choice of Fried Rice Chinese",
        "item_desc": "classic preparation made from long grain basmati rice cooked with choice of above option garnished with scallions"
      },
      {
        "item": "Choice of Noodles Chinese classic preparation made from steamed noodles cooked with choice of above option garnished with scallions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Choice of Noodles Chinese",
        "item_desc": "classic preparation made from steamed noodles cooked with choice of above option garnished with scallions"
      },
      {
        "item": "Plantastik Vegetable Laba South Indian Street Delicacy made with thick layered bread coated with Plantastik. 100 % plant based protein(moong bean) to a delicate bundle of perfection served with Vegetable kurma & raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Plantastik Vegetable Laba South Indian Street Delicacy made with thick layered bread coated with Plantastik. 100 % plant based protein(moong bean) to a delicate bundle of perfection",
        "item_desc": "served with Vegetable kurma & raitha"
      },
      {
        "item": "Plantastik Veg Fried Rice Chinese classic preparation made from long grain basmati rice cooked with fresh vegetables and Plantastik 100% plant based protein(moong bean) garnished with scallions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Plantastik Veg Fried Rice Chinese",
        "item_desc": "classic preparation made from long grain basmati rice cooked with fresh vegetables and Plantastik 100% plant based protein(moong bean) garnished with scallions"
      },
      {
        "item": "Plantastik Dosai Classic South Indian thin crepe made of rice & lentil with a generous coat of Plantastik 100% plant based protein(moong bean) made to perfection",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Plantastik Dosai",
        "item_desc": "Classic South Indian thin crepe made of rice & lentil with a generous coat of Plantastik 100% plant based protein(moong bean) made to perfection"
      },
      {
        "item": "Plantastik Veg Kothu Parotta South Indian street delicacy made with minced layered flat bread sauteed with vegetables, Plantastik 100% plant based protein (moong bean), green chillies & house spices Served with Vegetable kurma & raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Plantastik Veg Kothu Parotta South Indian street delicacy made with minced layered flat bread sauteed with vegetables, Plantastik 100% plant based protein (moong bean), green chillies & house spices",
        "item_desc": "Served with Vegetable kurma & raitha"
      },
      {
        "item": "Plantastik Schezwan Fried Rice Spicy Chinese classic preparation made from long grain basmati rice cooked with fresh vegetables and Plantastik 100% plant based protein (moong bean) garnished with scallions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Plantastik Schezwan Fried Rice",
        "item_desc": "Spicy Chinese classic preparation made from long grain basmati rice cooked with fresh vegetables and Plantastik 100% plant based protein (moong bean) garnished with scallions"
      },
      {
        "item": "Vegetable Cutlet Deep fried snack seasoned with mixed vegetables served with chutney",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable Cutlet Deep fried snack seasoned with mixed vegetables",
        "item_desc": "served with chutney"
      },
      {
        "item": "Vegetable Samosa Deep fried snack stuffed with seasoned potatoes, peas and traditional spices served with 2 chutney’s",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable Samosa Deep fried snack stuffed with seasoned potatoes, peas and traditional spices",
        "item_desc": "served with 2 chutney’s"
      },
      {
        "item": "Bhel Puri Puffed rice mixed with sev, crisp puris, roasted peanuts, onions and spiced with traditional chutney’s",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bhel Puri Puffed rice mixed",
        "item_desc": "with sev, crisp puris, roasted peanuts, onions and spiced with traditional chutney’s"
      },
      {
        "item": "Chana Samosa Lip smacking chat recipe with samosas, chick pea masala, various chutneys and spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Chana Samosa Lip smacking chat recipe",
        "item_desc": "with samosas, chick pea masala, various chutneys and spices"
      },
      {
        "item": "Cutlet Chana Famous street food chat recipe with seasoned potato cutlet, chick pea masala, various chutneys and spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Cutlet Chana Famous street food chat recipe",
        "item_desc": "with seasoned potato cutlet, chick pea masala, various chutneys and spices"
      },
      {
        "item": "Madras Filter Coffee",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Madras Filter Coffee",
        "item_desc": ""
      },
      {
        "item": "Masala Tea",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Masala Tea",
        "item_desc": ""
      },
      {
        "item": "Green Tea",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Green Tea",
        "item_desc": ""
      },
      {
        "item": "Avocado Milkshake",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Avocado Milkshake",
        "item_desc": ""
      },
      {
        "item": "Soda",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Soda",
        "item_desc": ""
      },
      {
        "item": "Watermelon Juice",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Watermelon Juice",
        "item_desc": ""
      },
      {
        "item": "Adhirasam",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Adhirasam",
        "item_desc": ""
      }
    ]
  },
  {
    "name": "Agricola Eatery",
    "items": [
      {
        "item": "New England Clam Chowder garlic parmesan croutons & crispy bacon",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "New England Clam Chowder",
        "item_desc": "garlic parmesan croutons & crispy bacon"
      },
      {
        "item": "Roasted Eggplant, Red Pepper & Tomato Soup (V) sourdough fig jam grilled cheese bite",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Roasted Eggplant, Red Pepper & Tomato Soup (V)",
        "item_desc": "sourdough fig jam grilled cheese bite"
      },
      {
        "item": "Artisan Cheeseboard (V) local honeycomb, golden raisins, pumpkin seed crackers",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Artisan Cheeseboard (V)",
        "item_desc": "local honeycomb, golden raisins, pumpkin seed crackers"
      },
      {
        "item": "Winter Hummus Board (V) heirloom carrot and dill, zaatar, warm pita pillow, feta cheese, garden vegetables",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Winter Hummus Board (V)",
        "item_desc": " heirloom carrot and dill, zaatar, warm pita pillow, feta cheese, garden vegetables"
      },
      {
        "item": "Wedge Salad crispy fried shallots, cherry tomatoes, bacon, Fulper Farm Feta, pickled red onions, buttermilk blue",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Wedge Salad",
        "item_desc": "crispy fried shallots, cherry tomatoes, bacon, Fulper Farm Feta, pickled red onions, buttermilk blue"
      },
      {
        "item": "Harvest Winter Salad (GF/V) young lettuces, port wine poached pears, candied walnuts, smoked moody blue cheese, radish, cucumber, rose vinaigrette",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Harvest Winter Salad (GF/V) young lettuces, port wine poached pears, candied walnuts, smoked moody blue cheese, radish, cucumber, rose vinaigrette",
        "item_desc": ""
      },
      {
        "item": "Organic Kale Salad (GF/VGN) young kale, roasted acorn squash, sun dried tomatoes, pickled cauliflower, feta cheese, radish and carrot, pumpkin seed vinaigrette",
        "price": "14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Organic Kale Salad (GF/VGN) young kale, roasted acorn squash, sun dried tomatoes, pickled cauliflower, feta cheese, radish and carrot, pumpkin seed vinaigrette",
        "item_desc": ""
      },
      {
        "item": "Crispy Rhode Island Calamari house-made pickled vegetables, pickled jalapeño, arugula, basil aioli",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Crispy Rhode Island Calamari house-made pickled vegetables, pickled jalapeño, arugula, basil aioli",
        "item_desc": ""
      },
      {
        "item": "Local Yellowfin Tuna Tartare avocado, deviled egg, sliced watermelon radish, filone crisps",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Local Yellowfin Tuna Tartare avocado, deviled egg, sliced watermelon radish, filone crisps",
        "item_desc": ""
      },
      {
        "item": "Local Burrata (V) figs, aleppo pepper spiced honeynut squash, pomegranate seeds, arugula and basil oil, filone toast",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Local Burrata (V) figs, aleppo pepper spiced honeynut squash, pomegranate seeds, arugula and basil oil, filone toast",
        "item_desc": ""
      },
      {
        "item": "Bang Bang Cauliflower (GF/V) sweet & sour chili glaze, fresno chiles, sesame seeds, scallions",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Bang Bang Cauliflower (GF/V)",
        "item_desc": "sweet & sour chili glaze, fresno chiles, sesame seeds, scallions"
      },
      {
        "item": "Marinated Beet Salad (GF/V) arugula, blood oranges, radish, gold and chioggia beets, truffle oil, goat yogurt, chives",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Marinated Beet Salad (GF/V) arugula, blood oranges, radish, gold and chioggia beets, truffle oil, goat yogurt, chives",
        "item_desc": ""
      },
      {
        "item": "Margherita (V) fresh mozzarella, crushed tomatoes, basil",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Margherita (V)",
        "item_desc": "fresh mozzarella, crushed tomatoes, basil"
      },
      {
        "item": "Local Mushroom Flatbread (V) spinach, ricotta cheese, pecorino romano",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Local Mushroom Flatbread (V) spinach, ricotta cheese, pecorino romano",
        "item_desc": ""
      },
      {
        "item": "Fig Flatbread fig jam, Speck, duck fat potatoes, fontina cheese, rosemary",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fig Flatbread fig jam, Speck, duck fat potatoes, fontina cheese, rosemary",
        "item_desc": ""
      },
      {
        "item": "Pepperoni Flatbread local artsanal pepperoni, local burrata, pickled jalapeño, baby arugula, basil",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pepperoni Flatbread",
        "item_desc": "local artsanal pepperoni, local burrata, pickled jalapeño, baby arugula, basil"
      },
      {
        "item": "Roasted Butternut Squash Ravioli (VGN) Chanterelle mushrooms, leeks, swiss chard, toasted walnuts, pomegranate seeds, vegan tree nut butter, basil",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Roasted Butternut Squash Ravioli (VGN) Chanterelle mushrooms, leeks, swiss chard, toasted walnuts, pomegranate seeds, vegan tree nut butter, basil",
        "item_desc": ""
      },
      {
        "item": "Chicken Katsu Salad mango, cherry tomatoes, red peppers, carrots, Napa cabbage, arugula, Asian cilantro dressing, peanuts, jalapeno",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Katsu Salad mango, cherry tomatoes, red peppers, carrots, Napa cabbage, arugula, Asian cilantro dressing, peanuts, jalapeno",
        "item_desc": ""
      },
      {
        "item": "Spinach Mushroom & 3 Cheese Quiche (V) leeks, salsa verde, arugula salad",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Spinach Mushroom & 3 Cheese Quiche (V) leeks, salsa verde, arugula salad",
        "item_desc": ""
      },
      {
        "item": "Jerk Shrimp Tacos (3 pcs) (GF) red cabbage, pickled red onion, avocado puree, chili salsa, cilantro",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jerk Shrimp Tacos (3 pcs) (GF) red cabbage, pickled red onion, avocado puree, chili salsa, cilantro",
        "item_desc": ""
      },
      {
        "item": "Hand Pressed Beef Burger Midwest 100% ground chuck, aged cheddar, house-made b&b pickles, aioli, lettuce (add bacon +2)",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hand Pressed Beef Burger",
        "item_desc": "Midwest 100% ground chuck, aged cheddar, house-made b&b pickles, aioli, lettuce (add bacon +2)"
      },
      {
        "item": "Grain Bowl (V) sauteed kale, roasted cauliflower, cranberries, cashews crispy fried brussels sprout leaves",
        "price": "28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Grain Bowl (V) sauteed kale, roasted cauliflower, cranberries, cashews",
        "item_desc": "crispy fried brussels sprout leaves"
      },
      {
        "item": "Grilled Chicken Pita Pillow hummus, avocado, tomato, cucumber, arugula, lemon-oregano dressing sweet potato chips",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Grilled Chicken Pita Pillow hummus, avocado, tomato, cucumber, arugula, lemon-oregano dressing",
        "item_desc": "sweet potato chips"
      },
      {
        "item": "Spaghetti Squash & Chicken Ricotta Meatballs (GF) charred tomato sauce, swiss chard, hon shimeji mushrooms, basil, parmesan",
        "price": "28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spaghetti Squash & Chicken Ricotta Meatballs (GF) charred tomato sauce, swiss chard, hon shimeji mushrooms, basil, parmesan",
        "item_desc": ""
      },
      {
        "item": "Crispy Chicken Sandwich gruyere, tomato, house-made b&b pickles, savoy cabbage ranch slaw, fries",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Crispy Chicken Sandwich gruyere, tomato, house-made b&b pickles, savoy cabbage ranch slaw, fries",
        "item_desc": ""
      },
      {
        "item": "Sourdough Grilled Cheese (V) fig jam, fontina and Comte cheese, red endive & roasted eggplant, red pepper & tomato soup",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Sourdough Grilled Cheese (V) fig jam, fontina and Comte cheese, red endive & roasted eggplant, red pepper & tomato soup",
        "item_desc": ""
      },
      {
        "item": "Spiced Faroe Island Salmon Salad (GF) young spinach, quinoa, lentils, cauliflower, pickled red onion, raisins, saffron emulsion",
        "price": "25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spiced Faroe Island Salmon Salad (GF) young spinach, quinoa, lentils, cauliflower, pickled red onion, raisins, saffron emulsion",
        "item_desc": ""
      },
      {
        "item": "Stir Fried Pork & Soba Noodles roasted broccoli, Jimmy Nardello peppers, green onions, ginger, heirloom garlic, cilantro",
        "price": "28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Stir Fried Pork & Soba Noodles roasted broccoli, Jimmy Nardello peppers, green onions, ginger, heirloom",
        "item_desc": "garlic, cilantro"
      },
      {
        "item": "Roasted Root Vegetables carrot caramel",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Roasted Root Vegetables carrot caramel",
        "item_desc": ""
      },
      {
        "item": "Roasted Local Mushrooms (GF/VGN) black truffle oil",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Roasted",
        "item_desc": "Local Mushrooms (GF/VGN) black truffle oil"
      },
      {
        "item": "Broccolini Caesar fresh lemon, parmesan crumbs, garlic chips",
        "price": "9.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Broccolini Caesar",
        "item_desc": "fresh lemon, parmesan crumbs, garlic chips"
      },
      {
        "item": "Roasted Brussels Sprouts, Grapes and Shallots (VGN) caraway-mustard vinaigrette",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roasted Brussels Sprouts, Grapes and Shallots (VGN) caraway-mustard vinaigrette",
        "item_desc": ""
      },
      {
        "item": "Roasted Fingerling Potatoes (GF/VGN) rosemary oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Roasted Fingerling Potatoes (GF/VGN) rosemary oil",
        "item_desc": ""
      },
      {
        "item": "Hand-Cut Fries (VGN) sea salt",
        "price": "9.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hand-Cut Fries (VGN) sea salt",
        "item_desc": ""
      },
      {
        "item": "Hand Cut Truffle Fries (V) sea salt",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hand Cut Truffle Fries (V) sea salt",
        "item_desc": ""
      },
      {
        "item": "Avocado (GF/VGN) sea salt, olive oil",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Avocado (GF/VGN) sea salt, olive oil",
        "item_desc": ""
      },
      {
        "item": "Roasted Eggplant, Red Pepper & Tomato Soup (V) sourdough fig jam grilled cheese bite",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Roasted Eggplant, Red Pepper & Tomato Soup (V)",
        "item_desc": "sourdough fig jam grilled cheese bite"
      },
      {
        "item": "New England Clam Chowder garlic parmesan croutons & crispy bacon",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "New England Clam Chowder",
        "item_desc": "garlic parmesan croutons & crispy bacon"
      },
      {
        "item": "Harvest Fall Salad (GF/V) young lettuces, port wine poached pears, candied walnuts, smoked moody blue cheese, radish, cucumber, roise vinaigrette",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Harvest Fall Salad (GF/V) young lettuces, port wine poached pears, candied walnuts, smoked moody blue cheese, radish, cucumber, roise vinaigrette",
        "item_desc": ""
      },
      {
        "item": "Organic Kale Salad (GF/V) young kale, roasted acorn squash, sun dried tomatoes, pickled cauliflower, feta cheese, radish and carrot, pumpkin seed vinaigrette",
        "price": "14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Organic Kale Salad (GF/V) young kale, roasted acorn squash, sun dried tomatoes, pickled cauliflower, feta cheese, radish and carrot, pumpkin seed vinaigrette",
        "item_desc": ""
      },
      {
        "item": "Fall Hummus Board (V) heirloom carrot and dill, zaatar, warm pita pillow, feta cheese, garden vegetables",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Fall Hummus Board (V) heirloom carrot and dill, zaatar, warm pita pillow, feta cheese, garden vegetables",
        "item_desc": ""
      },
      {
        "item": "Local Yellowfin Tuna Tartare avocado, deviled egg, sliced watermelon radish, filone crisps",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Local Yellowfin Tuna Tartare avocado, deviled egg, sliced watermelon radish, filone crisps",
        "item_desc": ""
      },
      {
        "item": "Artisan Cheeseboard (V) local honeycomb, golden raisins sunflower seed crackers",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Artisan Cheeseboard (V)",
        "item_desc": "local honeycomb, golden raisins sunflower seed crackers"
      },
      {
        "item": "Bang Bang Cauliflower (GF/VGN) sweet & sour chili glaze, fresno chiles, sesame seeds, scallions",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Bang Bang Cauliflower (GF/VGN)",
        "item_desc": "sweet & sour chili glaze, fresno chiles, sesame seeds, scallions"
      },
      {
        "item": "Crispy Rhode Island Calamari house- made pickled vegetables, arugula, pickled jalapeño, basil aioli",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Crispy Rhode Island Calamari house- made pickled vegetables, arugula, pickled jalapeño, basil aioli",
        "item_desc": ""
      },
      {
        "item": "Local Burrata (V) figs, Aleppo spiced honeynut squash, pomegranate seeds, arugula and basil oil, filone toast",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Local Burrata (V) figs, Aleppo spiced honeynut squash, pomegranate seeds, arugula and basil oil, filone toast",
        "item_desc": ""
      },
      {
        "item": "Marinated Beet Salad (GF/V) arugula, pistachios, blood oranges, radish, gold and chioggia beets, truffle oil, goat yogurt, chives",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Marinated Beet Salad (GF/V) arugula, pistachios, blood oranges, radish, gold and chioggia beets, truffle oil, goat yogurt, chives",
        "item_desc": ""
      },
      {
        "item": "Margherita (V) fresh mozzarella, crushed tomatoes, basil",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Margherita (V)",
        "item_desc": "fresh mozzarella, crushed tomatoes, basil"
      },
      {
        "item": "Local Mushroom Flatbread (V) spinach, Fulper Farms riccota cheese, local egg, pecorino romano, truffle oil",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Local Mushroom Flatbread (V) spinach, Fulper Farms riccota cheese, local egg, pecorino romano, truffle oil",
        "item_desc": ""
      },
      {
        "item": "Fig Flatbread fig jam, Speck, duck fat potatoes, fontina cheese, rosemary",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fig Flatbread fig jam, Speck, duck fat potatoes, fontina cheese, rosemary",
        "item_desc": ""
      },
      {
        "item": "Pepperoni Flatbread local artisanal pepperoni, local burrata, pickled jalapeño, baby arugula, basil",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pepperoni Flatbread",
        "item_desc": "local artisanal pepperoni, local burrata, pickled jalapeño, baby arugula, basil"
      },
      {
        "item": "Organic Egg Frittata (GF/V) Fulper Farms Ricotta, spinach, perserved tomato, pickled red onion, arugula salad",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Organic Egg Frittata (GF/V) Fulper Farms Ricotta, spinach, perserved tomato, pickled red onion, arugula salad",
        "item_desc": ""
      },
      {
        "item": "Jerk Shrimp Tacos (3 pcs) (GF) red cabbage, pickled red onion, avocado puree, chili salsa, cilantro",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jerk Shrimp Tacos (3 pcs) (GF) red cabbage, pickled red onion, avocado puree, chili salsa, cilantro",
        "item_desc": ""
      },
      {
        "item": "Crispy Chicken Sandwich house-made b&b pickles, honey-mustard slaw, pickled jalapeno",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Crispy Chicken Sandwich house-made b&b pickles, honey-mustard slaw, pickled jalapeno",
        "item_desc": ""
      },
      {
        "item": "Hand Pressed Beef Burger Midwest 100% ground chuck, aged cheddar, house-made b&b pickles, lettuce, aioli (add bacon +2)",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hand Pressed Beef Burger",
        "item_desc": "Midwest 100% ground chuck, aged cheddar, house-made b&b pickles, lettuce, aioli (add bacon +2)"
      },
      {
        "item": "Grain Bowl (V) sauteed kale, roasted cauliflower, cranberries, cashews crispy fried brussels sprout leaves",
        "price": "28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Grain Bowl (V) sauteed kale, roasted cauliflower, cranberries, cashews",
        "item_desc": "crispy fried brussels sprout leaves"
      },
      {
        "item": "Grilled Chicken Pita Pillow hummus, avocado, tomato, cucumber, arugula, lemon-oregano dressing sweet potato chips",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Grilled Chicken Pita Pillow hummus, avocado, tomato, cucumber, arugula, lemon-oregano dressing",
        "item_desc": "sweet potato chips"
      },
      {
        "item": "Spaghetti Squash & Chicken Ricotta Meatballs (GF) charred tomato sauce, swiss chard, hon shimeji mushrooms, basil, parmesan",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spaghetti Squash & Chicken Ricotta Meatballs (GF) charred tomato sauce, swiss chard, hon shimeji mushrooms, basil, parmesan",
        "item_desc": ""
      },
      {
        "item": "Roasted Butternut Squash Ravioli (VGN) Chanterelle mushrooms, leeks, swiss chard, toasted walnuts, pomegranate seeds, vegan tree nut butter, basil",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Roasted Butternut Squash Ravioli (VGN) Chanterelle mushrooms, leeks, swiss chard, toasted walnuts, pomegranate seeds, vegan tree nut butter, basil",
        "item_desc": ""
      },
      {
        "item": "Chicken Katsu Salad mango, cherry tomatoes, red peppers, carrots, Napa cabbage, arugula, asian cilantro dressing, peanuts, jalapeno",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Katsu Salad mango, cherry tomatoes, red peppers, carrots, Napa cabbage, arugula, asian cilantro dressing, peanuts, jalapeno",
        "item_desc": ""
      },
      {
        "item": "Sourdough Grilled Cheese (V) fig jam, fontina and Comte cheese, red endive & roasted eggplant, red pepper. & tomato soup",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Sourdough Grilled Cheese (V) fig jam, fontina and Comte cheese, red endive & roasted eggplant, red pepper. & tomato soup",
        "item_desc": ""
      },
      {
        "item": "Spiced Faroe Island Salmon Salad (GF) young spinach, quinoa, lentils, cauliflower, pickles red onion, raisins, saffron emulsion",
        "price": "25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spiced Faroe Island Salmon Salad (GF) young spinach, quinoa, lentils, cauliflower, pickles red onion, raisins, saffron emulsion",
        "item_desc": ""
      },
      {
        "item": "Steak & Eggs Flat iron steak, organic eggs, acorn squash hash crispy fingerling potatoes, salsa verde",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Steak & Eggs Flat iron steak, organic eggs, acorn squash hash",
        "item_desc": "crispy fingerling potatoes, salsa verde"
      },
      {
        "item": "Stir-Fried Pork & Soba Noodles roasted broccoli, Jimmy Nardello peppers, green onions, ginger, heirloom garlic, cilantro",
        "price": "28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Stir-Fried Pork & Soba Noodles roasted broccoli, Jimmy Nardello peppers, green onions, ginger, heirloom",
        "item_desc": "garlic, cilantro"
      }
    ]
  },
  {
    "name": "Alfonso's",
    "items": [
      {
        "item": "Regular Slices",
        "price": "$4.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Regular Slices",
        "item_desc": ""
      },
      {
        "item": "Cheese Pizza",
        "price": "Mini $15.99; Sm $17.99; Lg $19.99; Xl $21.99; Sic $27.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Cheese Pizza",
        "item_desc": ""
      },
      {
        "item": "Hawaiian Pizza Ham and Pineapple",
        "price": "Sm $25.99; Lg $27.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hawaiian Pizza Ham and Pineapple",
        "item_desc": ""
      },
      {
        "item": "Meat Pizza Pepperoni, Sausage, Meatball, Ham",
        "price": "Sm $27.99; Lg $31.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Meat Pizza Pepperoni, Sausage, Meatball, Ham",
        "item_desc": ""
      },
      {
        "item": "White Pizza No sauce, Mozzarella and Ricotta Cheese",
        "price": "Sm $22.99; Lg $26.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "White Pizza No sauce, Mozzarella and Ricotta Cheese",
        "item_desc": ""
      },
      {
        "item": "Veggie Pizza Green Peppers, Mushrooms, Tomatoes, and Onions",
        "price": "Sm $30.99; Lg $32.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Veggie Pizza Green Peppers, Mushrooms, Tomatoes, and Onions",
        "item_desc": ""
      },
      {
        "item": "Four Cheese Pizza Mozzarella, Ricotta, Feta, and Romano",
        "price": "Sm $27.99; Lg $31.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Four Cheese Pizza Mozzarella, Ricotta, Feta, and Romano",
        "item_desc": ""
      },
      {
        "item": "Patti Special Pizza Bacon Garlic, Jalapeno, and Pepperoni",
        "price": "Sm $30.99; Lg $32.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Patti Special Pizza Bacon",
        "item_desc": "Garlic, Jalapeno, and Pepperoni"
      },
      {
        "item": "White Spinach Pizza No sauce, Mozzarella, Ricotta Cheese, and Spinach",
        "price": "Sm $27.99; Lg $31.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "White Spinach Pizza No sauce, Mozzarella, Ricotta Cheese, and Spinach",
        "item_desc": ""
      },
      {
        "item": "BBQ Chicken Pizza",
        "price": "Sm $30.99; Lg $34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "BBQ Chicken Pizza",
        "item_desc": ""
      },
      {
        "item": "Buffalo Chicken Pizza",
        "price": "Sm $30.99; Lg $34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Buffalo Chicken Pizza",
        "item_desc": ""
      },
      {
        "item": "Chicken Parm Pizza",
        "price": "Sm $30.99; Lg $34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Parm Pizza",
        "item_desc": ""
      },
      {
        "item": "Garlic Chicken Parm Pizza",
        "price": "Sm $30.99; Lg $34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Garlic Chicken Parm Pizza",
        "item_desc": ""
      },
      {
        "item": "Margherita Pizza",
        "price": "Sm $27.99; Lg $31.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Margherita Pizza",
        "item_desc": ""
      },
      {
        "item": "House Special Pizza Pepperoni, Sausage, Meatball, Green Peppers, Mushrooms, Olives, and Onions",
        "price": "Mini $26.50; Sm $32.99; Lg $36.99; Xl $39.99; Sic $44.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "House Special Pizza Pepperoni, Sausage, Meatball, Green Peppers, Mushrooms, Olives, and Onions",
        "item_desc": ""
      },
      {
        "item": "Supreme Pizza Pepperoni, Sausage, Green Peppers, Mushrooms, and Onions",
        "price": "Mini $25.50; Sm $30.99; Lg $32.99; Xl $34.99; Sic $42.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Supreme Pizza Pepperoni, Sausage, Green Peppers, Mushrooms, and Onions",
        "item_desc": ""
      },
      {
        "item": "Chicken Wings",
        "price": "10 . $17.99; 20 . $29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Wings",
        "item_desc": ""
      },
      {
        "item": "4 Garlic Knots with Sauce",
        "price": "$9.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "4",
        "item_desc": "Garlic Knots with Sauce"
      },
      {
        "item": "8 Garlic Knots with Sauce",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "8",
        "item_desc": "Garlic Knots with Sauce"
      },
      {
        "item": "12 Garlic Knots with Sauce",
        "price": "$17.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "12",
        "item_desc": "Garlic Knots with Sauce"
      },
      {
        "item": "Garlic Bread",
        "price": "8in. $7.99; 12in. $8.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Garlic Bread",
        "item_desc": ""
      },
      {
        "item": "Garlic Bread with Cheese",
        "price": "8in. $9.99; 12in. $10.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Garlic Bread with Cheese",
        "item_desc": ""
      },
      {
        "item": "Meatball Appetizer",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Meatball Appetizer",
        "item_desc": ""
      },
      {
        "item": "Sausage Appetizer",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sausage Appetizer",
        "item_desc": ""
      },
      {
        "item": "Onion Rings",
        "price": "Sm. $8.99; Lg. $11.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Onion Rings",
        "item_desc": ""
      },
      {
        "item": "French Fries",
        "price": "Sm. $6.25; Lg. $9.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French Fries",
        "item_desc": ""
      },
      {
        "item": "Mozzarella Sticks",
        "price": "$12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mozzarella Sticks",
        "item_desc": ""
      },
      {
        "item": "Jalapeno Poppers",
        "price": "$12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jalapeno Poppers",
        "item_desc": ""
      },
      {
        "item": "Lasagna",
        "price": "$17.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lasagna",
        "item_desc": ""
      },
      {
        "item": "Ravioli",
        "price": "$16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Ravioli",
        "item_desc": ""
      },
      {
        "item": "Baked Ziti",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Baked Ziti",
        "item_desc": ""
      },
      {
        "item": "Baked Ziti with Meatballs or Sausage",
        "price": "$16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Baked Ziti",
        "item_desc": "with Meatballs or Sausage"
      },
      {
        "item": "Spaghetti with Marinara Sauce",
        "price": "$14.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spaghetti",
        "item_desc": "with Marinara Sauce"
      },
      {
        "item": "Spaghetti with Meatballs or Sausage",
        "price": "$15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spaghetti",
        "item_desc": "with Meatballs or Sausage"
      },
      {
        "item": "Baked Spaghetti",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Baked Spaghetti",
        "item_desc": ""
      },
      {
        "item": "Baked Spaghetti with Meatballs or Sausage",
        "price": "$16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Baked Spaghetti",
        "item_desc": "with Meatballs or Sausage"
      },
      {
        "item": "Eggplant Parmigiana",
        "price": "$16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Eggplant Parmigiana",
        "item_desc": ""
      },
      {
        "item": "Eggplant Parmigiana with Spaghetti and Marinara sauce",
        "price": "$18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Eggplant Parmigiana",
        "item_desc": "with Spaghetti and Marinara sauce"
      },
      {
        "item": "Chicken Parmigiana",
        "price": "$16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Parmigiana",
        "item_desc": ""
      },
      {
        "item": "Chicken Parmigiana with Spaghetti and Marinara sauce",
        "price": "$18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Parmigiana",
        "item_desc": "with Spaghetti and Marinara sauce"
      },
      {
        "item": "Meatball Parmigiana Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Meatball Parmigiana Hot Heroes",
        "item_desc": ""
      },
      {
        "item": "Sausage Parmigiana Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sausage Parmigiana Hot Heroes",
        "item_desc": ""
      },
      {
        "item": "Eggplant Parmigiana Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Eggplant Parmigiana Hot Heroes",
        "item_desc": ""
      },
      {
        "item": "Chicken Parmigiana Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Parmigiana Hot Heroes",
        "item_desc": ""
      },
      {
        "item": "Chicken, Bacon, and Ranch Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken, Bacon, and Ranch Hot Heroes",
        "item_desc": ""
      },
      {
        "item": "Sausage, Peppers, and Onions Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sausage, Peppers, and Onions Hot Heroes",
        "item_desc": ""
      },
      {
        "item": "Philly Cheese Steak Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Philly Cheese Steak Hot Heroes",
        "item_desc": ""
      },
      {
        "item": "Chicken Philly Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Philly Hot Heroes",
        "item_desc": ""
      },
      {
        "item": "Buffalo Chicken Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Buffalo Chicken Hot Heroes",
        "item_desc": ""
      },
      {
        "item": "Extra Cheese Hot Heroes",
        "price": "8 in. $2.50; 12 in. $2.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Extra Cheese Hot Heroes",
        "item_desc": ""
      },
      {
        "item": "Submarine Deli Sandwiches. Ham, Salami, American Cheese, Lettuce, Sliced Tomatoes, Oregano, Salt & Pepper, Oil & Vinegar",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Submarine Deli Sandwiches. Ham, Salami, American Cheese, Lettuce, Sliced Tomatoes, Oregano, Salt & Pepper, Oil & Vinegar",
        "item_desc": ""
      },
      {
        "item": "Ham & Cheese Deli Sandwiches. Ham, American Cheese, Lettuce, Sliced Tomatoes, Pickles, Mayonnaise, and Mustard",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Ham & Cheese Deli Sandwiches. Ham, American Cheese, Lettuce, Sliced Tomatoes, Pickles, Mayonnaise, and Mustard",
        "item_desc": ""
      },
      {
        "item": "Large Calzone with Ricotta and Mozzarella Cheese Calzone. Add regular toppings for $3.99 or premium toppings for $4.99",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Large Calzone",
        "item_desc": "with Ricotta and Mozzarella Cheese Calzone. Add regular toppings for $3.99 or premium toppings for $4.99"
      },
      {
        "item": "Stromboli Stromboli. Add regular toppings for $3.99 or premium toppings for $4.99",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Stromboli Stromboli. Add regular toppings for $3.99 or premium toppings for $4.99",
        "item_desc": ""
      },
      {
        "item": "Greek Salad Lettuce, Tomatoes, Cucumbers, Peperoncinis, Greek Olives, Onions, and Feta Cheese. A scoop of potato salad may be added at $0.99",
        "price": "Sm. $12.50; Lg. $16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Greek Salad Lettuce, Tomatoes, Cucumbers, Peperoncinis, Greek Olives, Onions, and Feta Cheese. A scoop of potato salad may be added at $0.99",
        "item_desc": ""
      },
      {
        "item": "Tossed Salad Lettuce, Tomatoes, Cucumbers and Sliced Onions",
        "price": "Sm. $8.50; Lg. $11.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tossed Salad Lettuce, Tomatoes, Cucumbers and Sliced Onions",
        "item_desc": ""
      },
      {
        "item": "Chef Salad Lettuce, Tomatoes, Mozzarella Cheese, Ham, Salami, Banana Peppers, and Olives",
        "price": "Sm. $14.50; Lg. $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chef Salad Lettuce, Tomatoes, Mozzarella Cheese, Ham, Salami, Banana Peppers, and Olives",
        "item_desc": ""
      },
      {
        "item": "Antipasto Salad Lettuce, Tomatoes, Mozzarella Cheese, Ham, Peperoncinis, Greek Olives, and Onions",
        "price": "Sm. $14.50; Lg. $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Antipasto Salad Lettuce, Tomatoes, Mozzarella Cheese, Ham, Peperoncinis, Greek Olives, and Onions",
        "item_desc": ""
      },
      {
        "item": "Spinach Salad",
        "price": "Sm. $12.50; Lg. $16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Spinach Salad",
        "item_desc": ""
      },
      {
        "item": "Buffalo Chicken Salad",
        "price": "Lg. $17.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Buffalo Chicken Salad",
        "item_desc": ""
      },
      {
        "item": "Potato Salad",
        "price": "Lg. $10.25/td>",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Potato Salad",
        "item_desc": ""
      },
      {
        "item": "Extra salad dressing",
        "price": "Sm. $1.99; Lg. $2.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Extra salad dressing",
        "item_desc": ""
      },
      {
        "item": "Cannoli",
        "price": "1 . $7.25; 4 . $27.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cannoli",
        "item_desc": ""
      },
      {
        "item": "Brownie",
        "price": "$5.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brownie",
        "item_desc": ""
      },
      {
        "item": "Brownoli Vanilla cannoli cream in the center of two chocolate chip brownies and dusted with powdered sugar",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brownoli Vanilla cannoli cream in the center of two chocolate chip brownies and dusted",
        "item_desc": "with powdered sugar"
      },
      {
        "item": "Zeppoli add chocolate sauce for $1.99",
        "price": "$10.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Zeppoli add chocolate sauce for $1.99",
        "item_desc": ""
      },
      {
        "item": "Cookie (dozen by request in advance)",
        "price": "$5.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cookie (dozen by request in advance)",
        "item_desc": ""
      },
      {
        "item": "Side Cannoli Cream",
        "price": "$1.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Side Cannoli Cream",
        "item_desc": ""
      },
      {
        "item": "Side of Marinara Sauce Others",
        "price": "$2.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Side of Marinara Sauce Others",
        "item_desc": ""
      },
      {
        "item": "Pint of Marinara Sauce Others",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pint of Marinara Sauce Others",
        "item_desc": ""
      }
    ]
  },
  {
    "name": "Aljon's Pizza & Restaurant",
    "items": [
      {
        "item": "Chicken Fingers Snack Incl french fries, cole slaw ​ Incl french fries, cole slaw ​",
        "price": "3 Pieces- $9.95 | Dinner- $11.95 (5 pcs)",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Fingers Snack Incl french fries, cole slaw ​ Incl french fries, cole slaw ​",
        "item_desc": ""
      },
      {
        "item": "Nacho Grande Beef, Cheese, Tomatoes, Black Olives, Onions add Jalapeños for .95",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Nacho Grande Beef, Cheese, Tomatoes, Black Olives, Onions add Jalapeños for .95",
        "item_desc": ""
      },
      {
        "item": "French Fries",
        "price": "Small- $4.25, Large- $5.45",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French Fries",
        "item_desc": ""
      },
      {
        "item": "Cheese Fries",
        "price": "Small- $4.95, Large- $5.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Cheese Fries",
        "item_desc": ""
      },
      {
        "item": "Pizza Fries ​",
        "price": "$5.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pizza Fries ​",
        "item_desc": ""
      },
      {
        "item": "Sweet Potato Fries",
        "price": "Small- $4.75, Large- $5.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Sweet Potato Fries",
        "item_desc": ""
      },
      {
        "item": "Onion Rings ​",
        "price": "$6.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Onion Rings ​",
        "item_desc": ""
      },
      {
        "item": "Mozzarella Sticks (6) ​",
        "price": "$8.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mozzarella Sticks (6) ​",
        "item_desc": ""
      },
      {
        "item": "Garlic Bread",
        "price": "$6.25 | With Cheese $7.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Garlic Bread",
        "item_desc": ""
      },
      {
        "item": "Nachos With Cheese Or Salsa With Cheese & Salsa",
        "price": "Small $4.75, Large $5.75 | Small- $5.75, Large- $6.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Nachos With Cheese Or Salsa",
        "item_desc": "With Cheese & Salsa"
      },
      {
        "item": "Or Meatballs ​",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Or Meatballs ​",
        "item_desc": ""
      },
      {
        "item": "Wings",
        "price": "(12) $16.95, (24) $31.95, (36) $46.95, (50) $64.95, (75) $89.95, (100) $109.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Wings",
        "item_desc": ""
      },
      {
        "item": "Side of Sautéed Broccoli or Spinach ​",
        "price": "$9.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Side of Sautéed Broccoli or Spinach ​",
        "item_desc": ""
      },
      {
        "item": "Side of Sautéed Broccoli Rabe ​ Fried Calamari ​ Soup ​",
        "price": "$12.95 | $11.95 | $6.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Side of Sautéed Broccoli Rabe ​ Fried Calamari ​ Soup ​",
        "item_desc": ""
      },
      {
        "item": "Tossed Green Salad Lettuce, tomatoes, green peppers & onions",
        "price": "Small- $5.45, Large- $6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tossed Green Salad Lettuce, tomatoes, green peppers & onions",
        "item_desc": ""
      },
      {
        "item": "Antipasto Ham, capicola, provolone, salami & black olives",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Antipasto Ham, capicola, provolone, salami & black olives",
        "item_desc": ""
      },
      {
        "item": "Chef Salad Ham, turkey, egg & provolone",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chef Salad Ham, turkey, egg & provolone",
        "item_desc": ""
      },
      {
        "item": "Tuna Salad Tossed salad with a scoop of tuna",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tuna Salad Tossed salad",
        "item_desc": "with a scoop of tuna"
      },
      {
        "item": "Caesar Salad",
        "price": "$8.95 | Romaine lettuce, oven toasted croutons mixed with classic Caesar dressing. Add Chicken for $4.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Caesar Salad",
        "item_desc": ""
      },
      {
        "item": "Caprese Salad",
        "price": "Romaine lettuce w fresh mozzarella, sliced tomatoes & garn w roasted peppers. Balsamic dressing on side. Small- $9.25, Large- $12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Caprese Salad",
        "item_desc": ""
      },
      {
        "item": "Extra Dressing ​",
        "price": "$0.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Extra Dressing ​",
        "item_desc": ""
      },
      {
        "item": "Greek Salad ​ ​",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Greek Salad ​ ​",
        "item_desc": ""
      },
      {
        "item": "Cheese ​",
        "price": "10” Personal - $9.95, 14” Medium- $13.45, Large- 16” $16.95, 18” Jumbo- $18.95 | Sicilian- $21.95 | Deep Dish- $15.94",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Cheese ​",
        "item_desc": ""
      },
      {
        "item": "Gluten-free 12” (One Size Only)",
        "price": "$15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten-free 12” (One Size Only)",
        "item_desc": ""
      },
      {
        "item": "Veggie Broccoli, spinach, tomatoes, mushrooms & onions:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95, Sicilian- $32.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Veggie Broccoli, spinach, tomatoes, mushrooms & onions:",
        "item_desc": ""
      },
      {
        "item": "Works Pepperoni, sausage, mushrooms, green peppers, onions:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95, Sicilian- $32.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Works Pepperoni, sausage, mushrooms, green peppers, onions:",
        "item_desc": ""
      },
      {
        "item": "Baked Ziti ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Baked Ziti ​",
        "item_desc": ""
      },
      {
        "item": "Chicken Parmigiana ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Parmigiana ​",
        "item_desc": ""
      },
      {
        "item": "Eggplant Parmigiana ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Eggplant Parmigiana ​",
        "item_desc": ""
      },
      {
        "item": "Buffalo Chicken",
        "price": "10” Personal- $15.95, 14” Medium- $21.95, 16” Large- $25.95, 18” Jumbo- $27.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Buffalo Chicken",
        "item_desc": ""
      },
      {
        "item": "Cool Ranch Chicken Chicken, bacon, tomatoes & ranch dressing:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cool Ranch Chicken Chicken, bacon, tomatoes & ranch dressing:",
        "item_desc": ""
      },
      {
        "item": "Special Sauce ​",
        "price": "10” Personal- $15.95, 14” Medium- $20.95, 16” Large- $24.95, 18” Jumbo- $27.95, Sicilian- $29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Special Sauce ​",
        "item_desc": ""
      },
      {
        "item": "Tomato Pie",
        "price": "10” Personal- $15.95, 14” Medium- $21.95, 16” Large- $17.95, 18” Jumbo- $20.95, Sicilian- $22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tomato Pie",
        "item_desc": ""
      },
      {
        "item": "Bruschetta Tomatoes, garlic & pesto sauce ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Bruschetta Tomatoes, garlic & pesto sauce",
        "item_desc": "​"
      },
      {
        "item": "Taco Pizza Ground beef, lettuce, tomatoes & cheddar:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Taco Pizza Ground beef, lettuce, tomatoes & cheddar:",
        "item_desc": ""
      },
      {
        "item": "Deep Dish",
        "price": "14” Medium- $14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Deep Dish",
        "item_desc": ""
      },
      {
        "item": "Vodka Sauce",
        "price": "10” Personal- $13.95, 14” Medium- $21.95, 16” Large- $24.95, 18” Jumbo- $26.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Vodka Sauce",
        "item_desc": ""
      },
      {
        "item": "Penne Vodka Pizza",
        "price": "10” Personal- $16.95, 14” Medium- $21.95, 16” Large- $25.95, 18” Jumbo- $27.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Penne Vodka Pizza",
        "item_desc": ""
      },
      {
        "item": "Margarita Pizza",
        "price": "10” Personal- $13.45, 14” Medium- $15.95, 16” Large- $18.95, 18” Jumbo- $20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Margarita Pizza",
        "item_desc": ""
      },
      {
        "item": "Brooklyn Pizza Square 16”x16”, Extra Thin:",
        "price": "Sicilian- $22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brooklyn Pizza Square 16”x16”, Extra Thin:",
        "item_desc": ""
      },
      {
        "item": "Meat Lover ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95, Sicilian- $32.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Meat Lover ​",
        "item_desc": ""
      },
      {
        "item": "BBQ Chicken ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95, Sicilian- $32.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "BBQ Chicken ​",
        "item_desc": ""
      },
      {
        "item": "Four Cheese Red or White:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Four Cheese Red or White:",
        "item_desc": ""
      },
      {
        "item": "Mexico Ground beef, jalapeños, onions & tomatoes",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mexico Ground beef, jalapeños, onions & tomatoes",
        "item_desc": ""
      },
      {
        "item": "Al’s Favorite Chicken, spinach & romano cheese:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Al’s Favorite Chicken, spinach & romano cheese:",
        "item_desc": ""
      },
      {
        "item": "Texas Bacon, onions & tomatoes ​ Pan Pizzas All pan pizzas take one hour.",
        "price": "10” Personal- $15.95, 14” Medium- $21.95, 16” Large- $25.95, 18” Jumbo- $27.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Texas Bacon, onions & tomatoes ​ Pan Pizzas All pan pizzas take one hour.",
        "item_desc": ""
      },
      {
        "item": "Bacon, Ham & Mushroom ​",
        "price": "$25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bacon, Ham & Mushroom ​",
        "item_desc": ""
      },
      {
        "item": "Chicken Primavera",
        "price": "$25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Primavera",
        "item_desc": ""
      },
      {
        "item": "Chicken Alfredo",
        "price": "$25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Alfredo",
        "item_desc": ""
      },
      {
        "item": "Veggie ​",
        "price": "$25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Veggie ​",
        "item_desc": ""
      },
      {
        "item": "Cheese Steak Special",
        "price": "$25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cheese Steak Special",
        "item_desc": ""
      },
      {
        "item": "Meat Lover ​",
        "price": "$25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Meat Lover ​",
        "item_desc": ""
      },
      {
        "item": "Special Sauce Pan Pizzas ​",
        "price": "$22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Special Sauce Pan Pizzas ​",
        "item_desc": ""
      },
      {
        "item": "Spaghetti",
        "price": "with: Tomato Sauce- $13.95, Meatballs- $16.95, Sausage- $17.95, Garlic & Mushroom Red or White Sauce- $16.95, Meat Sauce- $16.95, Spaghetti Marinara (Sautéed garlic in red sauce)- $14.95, Clam Sauce (Red or white)- 17.95, Pesto Sauce (Nuts-Free) - $16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spaghetti",
        "item_desc": ""
      },
      {
        "item": "Penne Arrabiata Hot & spicy. Prosciutto & sautéed onions",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Penne Arrabiata Hot &",
        "item_desc": "spicy. Prosciutto & sautéed onions"
      },
      {
        "item": "Chicken Marsala ​ ​",
        "price": "$21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Marsala ​ ​",
        "item_desc": ""
      },
      {
        "item": "Chicken Francese",
        "price": "$21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Francese",
        "item_desc": ""
      },
      {
        "item": "Baked Ziti",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Baked Ziti",
        "item_desc": ""
      },
      {
        "item": "Pasta Primavera Broccoli, tomatoes & mushrooms in a cream sauce.",
        "price": "$17.95 | Add Chicken for $3.00.",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Pasta Primavera Broccoli, tomatoes & mushrooms in a cream sauce.",
        "item_desc": ""
      },
      {
        "item": "Fettuccine Alfredo",
        "price": "$16.95 | Add Chicken for $4.00.",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fettuccine Alfredo",
        "item_desc": ""
      },
      {
        "item": "Stuffed Shells ​",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Stuffed Shells ​",
        "item_desc": ""
      },
      {
        "item": "Vodka Rigatoni",
        "price": "$16.95 | Add Chicken $4.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Vodka Rigatoni",
        "item_desc": ""
      },
      {
        "item": "Meat Or Cheese Tortellini Choice of sauce",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Meat Or Cheese Tortellini Choice of sauce",
        "item_desc": ""
      },
      {
        "item": "Gnocchi Choice of alfredo, tomato or vodka sauce",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gnocchi Choice of alfredo, tomato or vodka sauce",
        "item_desc": ""
      },
      {
        "item": "Meat Sauce ​",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Meat Sauce ​",
        "item_desc": ""
      },
      {
        "item": "Ravioli",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Ravioli",
        "item_desc": ""
      },
      {
        "item": "Baked Ravioli ​",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Baked Ravioli ​",
        "item_desc": ""
      },
      {
        "item": "Lasagna ​",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lasagna ​",
        "item_desc": ""
      },
      {
        "item": "Manicotti ​",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Manicotti ​",
        "item_desc": ""
      },
      {
        "item": "Lobster Ravioli With Pink Sauce ​",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Ravioli",
        "item_desc": "With Pink Sauce ​"
      },
      {
        "item": "Parmigiana ​ Calzones & Stromboli",
        "price": "with: Chicken $20.95, Eggplant $20.95, Veal $21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Parmigiana ​ Calzones & Stromboli",
        "item_desc": ""
      },
      {
        "item": "Calzone Ricotta, mozzarella & ham:",
        "price": "Small- $10.95, Large- $21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Calzone Ricotta, mozzarella & ham:",
        "item_desc": ""
      },
      {
        "item": "Stromboli Sausage, peppers, mushrooms, onions, pepperoni & mozzarella:",
        "price": "Small- $10.95, Large- $21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Stromboli Sausage, peppers, mushrooms, onions, pepperoni & mozzarella:",
        "item_desc": ""
      },
      {
        "item": "Extra Toppings",
        "price": "Small- .85, Large- $1.35",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Extra Toppings",
        "item_desc": ""
      },
      {
        "item": "Extra Sauce ​ Nutella Pizza ​ Hot Subs Subs are 12” long.",
        "price": "$0.50 | $11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Extra Sauce ​ Nutella Pizza ​ Hot Subs Subs are 12” long.",
        "item_desc": ""
      },
      {
        "item": "Eggplant Parmigiana",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Eggplant Parmigiana",
        "item_desc": ""
      },
      {
        "item": "Chicken Parmigiana ​",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Parmigiana ​",
        "item_desc": ""
      },
      {
        "item": "Veal Parmigiana ​",
        "price": "$13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Veal Parmigiana ​",
        "item_desc": ""
      },
      {
        "item": "Veal Cutlet Lettuce & tomatoes",
        "price": "$13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Veal Cutlet Lettuce & tomatoes",
        "item_desc": ""
      },
      {
        "item": "Pepper & Egg ​",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pepper & Egg ​",
        "item_desc": ""
      },
      {
        "item": "Pepper & Egg with Cheese ​",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Pepper & Egg",
        "item_desc": "with Cheese ​"
      },
      {
        "item": "Sausage Sub Peppers & Onions .60, Parmigiana 1.00",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sausage Sub Peppers & Onions .60, Parmigiana 1.00",
        "item_desc": ""
      },
      {
        "item": "Meatball",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Meatball",
        "item_desc": ""
      },
      {
        "item": "Meatball Parmigiana ​",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Meatball Parmigiana ​",
        "item_desc": ""
      },
      {
        "item": "Cheese Steak Toppings Additional .60 ​",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cheese Steak Toppings Additional .60 ​",
        "item_desc": ""
      },
      {
        "item": "Pizza Steak ​",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pizza Steak ​",
        "item_desc": ""
      },
      {
        "item": "Chicken Cheese Steak Toppings Additional .60",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Cheese Steak Toppings Additional .60",
        "item_desc": ""
      },
      {
        "item": "Sausage & Broccoli Rabe Add Cheese .60",
        "price": "$13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sausage & Broccoli Rabe Add Cheese .60",
        "item_desc": ""
      },
      {
        "item": "Chicken Ranch Sub Fried chicken with mozzarella, bacon, tomatoes & ranch dressing ​ Cold Subs All served with lettuce, tomato, onions, spices, oil & vinegar. Subs come in 7” Half and 14” Whole sizes.",
        "price": "$13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Ranch Sub Fried chicken",
        "item_desc": "with mozzarella, bacon, tomatoes & ranch dressing ​ Cold Subs All served with lettuce, tomato, onions, spices, oil & vinegar. Subs come in 7” Half and 14” Whole sizes."
      },
      {
        "item": "Italian Hoagie Ham, salami, prosciutto, capicola & provolone:",
        "price": "7” Half- $7.45, 14” Whole- $13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Italian Hoagie Ham, salami, prosciutto, capicola & provolone:",
        "item_desc": ""
      },
      {
        "item": "American Ham, salami & provolone:",
        "price": "7” Half- $6.55, 14” Whole- $11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "American Ham, salami & provolone:",
        "item_desc": ""
      },
      {
        "item": "Turkey Hoagie",
        "price": "7” Half- $7.45, 14” Whole- $13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Turkey Hoagie",
        "item_desc": ""
      },
      {
        "item": "Roast Beef",
        "price": "7” Half- $7.45, 14” Whole- $13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roast Beef",
        "item_desc": ""
      },
      {
        "item": "Tuna",
        "price": "7” Half- $7.45, 14” Whole- $13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tuna",
        "item_desc": ""
      },
      {
        "item": "Ham",
        "price": "7” Half- $7.45, 14” Whole- $13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Ham",
        "item_desc": ""
      },
      {
        "item": "Ham & Cheese",
        "price": "7” Half- $7.45, 14” Whole- $12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Ham & Cheese",
        "item_desc": ""
      },
      {
        "item": "12” Prosciutto & Fresh Mozzarella ​ Wraps All served with French fries.",
        "price": "12” Whole- $13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "12” Prosciutto &",
        "item_desc": "Fresh Mozzarella ​ Wraps All served with French fries."
      },
      {
        "item": "Chicken Caesar Wrap ​",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Caesar Wrap ​",
        "item_desc": ""
      },
      {
        "item": "Prosciutto & Mozzarella Wrap ​",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Prosciutto & Mozzarella Wrap ​",
        "item_desc": ""
      },
      {
        "item": "The Mercer Lettuce, tomato, onion, mayo, and choice of cheese:",
        "price": "$9.95 burger, $12.95 platter",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "The Mercer Lettuce, tomato, onion, mayo, and choice of cheese:",
        "item_desc": ""
      },
      {
        "item": "The “T” State Topped with sauteed mushrooms, onions, and Monterey Jack cheese:",
        "price": "$9.95 burger, $12.95 platter",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "The “T” State",
        "item_desc": "Topped with sauteed mushrooms, onions, and Monterey Jack cheese:"
      },
      {
        "item": "The Rider Mozzarella cheese. pizza sauce, mushrooms:",
        "price": "$9.95 burger, $12.95 platter",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "The Rider Mozzarella cheese. pizza sauce, mushrooms:",
        "item_desc": ""
      },
      {
        "item": "The Rutgers Cheddar cheese, bacon, diced tomatoes, and onions:",
        "price": "$9.95 burger, $12.95 platter",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "The Rutgers Cheddar cheese, bacon, diced tomatoes, and onions:",
        "item_desc": ""
      },
      {
        "item": "The Princeton Swiss cheese, tomato, sautéed onions, and mushrooms:",
        "price": "$9.95 burger, $12.95 platter",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "The Princeton Swiss cheese, tomato, sautéed onions, and mushrooms:",
        "item_desc": ""
      },
      {
        "item": "The Windsor Grilled burger or chicken breast ​ Desserts",
        "price": "$8.95 burger, $10.95 platter",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "The Windsor Grilled burger or chicken breast",
        "item_desc": "​ Desserts"
      },
      {
        "item": "Cannoli ​",
        "price": "$5.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cannoli ​",
        "item_desc": ""
      },
      {
        "item": "10” Nutella Pizza ​ ​ ​ ​",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "10” Nutella Pizza ​ ​ ​ ​",
        "item_desc": ""
      }
    ]
  },
  {
    "name": "Amazing Thai",
    "items": [
      {
        "item": "Catering Menu",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Catering Menu",
        "item_desc": ""
      }
    ]
  },
  {
    "name": "Asian Bistro",
    "items": [
      {
        "item": "Beef Bulgogi (불고기) Grilled thinly sliced beef marinated in sweet soy, ginger, garlic, and sesame sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Beef Bulgogi (불고기) Grilled thinly sliced beef",
        "item_desc": "marinated in sweet soy, ginger, garlic, and sesame sauce."
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Bulgogi (치킨 불고기) Grilled chicken",
        "item_desc": "marinated in sweet soy sauce"
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kalbi (갈비) Grilled beef short ribs",
        "item_desc": "marinated in sweet say, ginger, garlic, and sesame sauce."
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in",
        "item_desc": "sweet and tangy sauce"
      },
      {
        "item": "Chicken cutlet Panko breaded, deep-fried chicken cutlet.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken cutlet Panko breaded, deep-fried chicken cutlet.",
        "item_desc": ""
      },
      {
        "item": "Shrimp tempura Breaded and fried shrimp",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp tempura Breaded and fried shrimp",
        "item_desc": ""
      },
      {
        "item": "Tofu Tofu lightly battered and fried with teriyaki sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Tofu Tofu lightly battered and fried",
        "item_desc": "with teriyaki sauce"
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "item_desc": ""
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "White rice Steamed white rice",
        "item_desc": "served as a side dish."
      },
      {
        "item": "Japchae (잡채) Cellophane noodles stir-fried with julienned vegetables.",
        "price": "$17.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Japchae (잡채) Cellophane noodles stir-fried",
        "item_desc": "with julienned vegetables."
      },
      {
        "item": "Broccoli With oyster sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Broccoli",
        "item_desc": "With oyster sauce"
      },
      {
        "item": "Gold Pumpkin mash salad Mashed pumpkin with dried cranberries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gold Pumpkin mash salad Mashed pumpkin",
        "item_desc": "with dried cranberries"
      },
      {
        "item": "Edamame Steamed whole soy bean",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Edamame Steamed whole soy bean",
        "item_desc": ""
      },
      {
        "item": "Fried veg. gyoza 2 fried vegi dumplings",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Fried veg. gyoza 2 fried vegi dumplings",
        "item_desc": ""
      },
      {
        "item": "Seaweed salad Seaweed tossed in sesame and rice vinegar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seaweed salad Seaweed tossed in sesame and rice vinegar",
        "item_desc": ""
      },
      {
        "item": "French fries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French fries",
        "item_desc": ""
      },
      {
        "item": "French Fries Deep fried skin-on potato",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "French Fries Deep fried skin-on potato",
        "item_desc": ""
      },
      {
        "item": "Edamame Steamed whole soybean in pod lightly salted.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Edamame Steamed whole soybean in pod lightly salted.",
        "item_desc": ""
      },
      {
        "item": "Gyoza Fried or steamed dumplings (6pcs beef or 5pcs veg).",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gyoza Fried or steamed dumplings (6pcs beef or 5pcs veg).",
        "item_desc": ""
      },
      {
        "item": "Seafood and Scallion Pancake (해물파전) Shrimp, calamari, and green onion grilled pancake.",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seafood and Scallion Pancake (해물파전) Shrimp, calamari, and green onion grilled pancake.",
        "item_desc": ""
      },
      {
        "item": "Kimchi Pancake (김치전) Kimchi and vegetable grilled pancake.",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kimchi Pancake (김치전) Kimchi and vegetable grilled pancake.",
        "item_desc": ""
      },
      {
        "item": "Vegetable pancake(야채전) Mixed vegetable grilled pancake",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable pancake(야채전) Mixed vegetable grilled pancake",
        "item_desc": ""
      },
      {
        "item": "Spring Roll (3 pcs) Crispy fried vegetables in a wonton wrapper.",
        "price": "$5.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Spring Roll (3 pcs)",
        "item_desc": "Crispy fried vegetables in a wonton wrapper."
      },
      {
        "item": "Shrimp Shumai (6 pcs) Japanese steamed shrimp dumpling.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Shumai (6 pcs) Japanese steamed shrimp dumpling.",
        "item_desc": ""
      },
      {
        "item": "Seaweed Salad Seaweed tossed in sesame and rice vinegar.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seaweed Salad Seaweed tossed in sesame and rice vinegar.",
        "item_desc": ""
      },
      {
        "item": "Gyoza Soup Beef or vegetable dumpling soup.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gyoza Soup Beef or vegetable dumpling soup.",
        "item_desc": ""
      },
      {
        "item": "Miso Soup Miso broth with cubed tofu and scallion.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Miso Soup Miso broth",
        "item_desc": "with cubed tofu and scallion."
      },
      {
        "item": "Fried butterfly Shrimp 8 breaded and deep-fried shrimp",
        "price": "$10.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fried butterfly Shrimp 8 breaded and deep-fried shrimp",
        "item_desc": ""
      },
      {
        "item": "Kimchi Fried Rice(김치 볶음밥) Fried rice stir-fried with kimchi and assorted vegetables.",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kimchi Fried Rice(김치 볶음밥) Fried rice stir-fried",
        "item_desc": "with kimchi and assorted vegetables."
      },
      {
        "item": "Bibimbap (비빔밥) Rice mixed with julienned vegetables , egg and choice of meat in red chili past or soy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Bibimbap (비빔밥) Rice mixed",
        "item_desc": "with julienned vegetables , egg and choice of meat in red chili past or soy sauce"
      },
      {
        "item": "Bulgogi (불고기) Grilled thinly sliced beef marinated in sweet soy, ginger, garlic, and sesame sauce.",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bulgogi (불고기) Grilled thinly sliced beef",
        "item_desc": "marinated in sweet soy, ginger, garlic, and sesame sauce."
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "$34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kalbi (갈비) Grilled beef short ribs",
        "item_desc": "marinated in sweet say, ginger, garlic, and sesame sauce."
      },
      {
        "item": "Pan-fried Pork (제육볶음) Pan-fried sliced pork mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pan-fried Pork (제육볶음) Pan-fried sliced pork mixed vegetables in",
        "item_desc": "sweet and spicy red pepper garlic sauce with wheat noodle"
      },
      {
        "item": "Pan-Fried Calamari (오징어 볶음) Panfried squid and mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pan-Fried Calamari (오징어 볶음) Panfried squid and mixed vegetables in",
        "item_desc": "sweet and spicy red pepper garlic sauce with wheat noodle"
      },
      {
        "item": "Bossam (보쌈) Boiled pork, salted napa cabbage, radish kimchi and salted shrimp",
        "price": "$39.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bossam (보쌈) Boiled pork, salted napa cabbage, radish kimchi and salted shrimp",
        "item_desc": ""
      },
      {
        "item": "Black bean fried rice(짜장 볶음밥) Black bean ragu with sauteed pork sauce over the fried rice",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Black bean fried rice(짜장 볶음밥) Black bean ragu",
        "item_desc": "with sauteed pork sauce over the fried rice"
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "$22.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "item_desc": ""
      },
      {
        "item": "Soft tofu stew (순두부 찌개) Spicy stew of soft tofu, red chili paste, assorted vegetables and choice of meat",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Soft tofu stew (순두부 찌개)",
        "item_desc": "Spicy stew of soft tofu, red chili paste, assorted vegetables and choice of meat"
      },
      {
        "item": "Black Bean Noodle(짜장면) Wheat noodles in black bean ragu with sauteed pork and vegetables",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Black Bean Noodle(짜장면) Wheat noodles in black bean ragu",
        "item_desc": "with sauteed pork and vegetables"
      },
      {
        "item": "Spicy Asian Noodle Cioppino (해물짬뽕) Wheat noodles in a spicy stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Spicy Asian Noodle Cioppino (해물짬뽕) Wheat noodles in a spicy stew with vegetables and choice of topping",
        "item_desc": ""
      },
      {
        "item": "Spicy Beef Stew (육개장) Shredded beef and vegetables in a spicy broth.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spicy Beef Stew (육개장) Shredded beef and vegetables in a spicy broth.",
        "item_desc": ""
      },
      {
        "item": "Jumbo Kalbi Tang (왕 갈비 탕) Beef rib soup with Jumbo beef rib, jujube, glass noodles, mushroom & sliced egg",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jumbo Kalbi Tang (왕 갈비 탕) Beef rib soup",
        "item_desc": "with Jumbo beef rib, jujube, glass noodles, mushroom & sliced egg"
      },
      {
        "item": "Pho Noodle Soup (쌀국수) Rice noodles in clear beef broth. Served with bean sprouts, thai basil, cilantro, and peppers.",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pho Noodle Soup (쌀국수) Rice noodles in clear beef broth.",
        "item_desc": "Served with bean sprouts, thai basil, cilantro, and peppers."
      },
      {
        "item": "non spicy asian noodle (백짬뽕) Wheat noodles in a white stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "non",
        "item_desc": "spicy asian noodle (백짬뽕) Wheat noodles in a white stew with vegetables and choice of topping"
      },
      {
        "item": "Curry Rice (카레 라이스) Vegetable Japanese curry",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Curry Rice (카레 라이스) Vegetable Japanese curry",
        "item_desc": ""
      },
      {
        "item": "Katsu with Curry (카레 돈까스) Katsu with vegetables Japanese curry",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Katsu",
        "item_desc": "with Curry (카레 돈까스) Katsu with vegetables Japanese curry"
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in",
        "item_desc": "sweet and tangy sauce"
      },
      {
        "item": "Cold Soba Noodle with Shrimp Tempura(새우튀김 냉모밀) Chilled buckwheat noodles garnished with radish, scallions & seaweed in Cold Katsuobushi broth and Shrimp Tempura",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cold Soba Noodle",
        "item_desc": "with Shrimp Tempura(새우튀김 냉모밀) Chilled buckwheat noodles garnished with radish, scallions & seaweed in Cold Katsuobushi broth and Shrimp Tempura"
      },
      {
        "item": "Sweet and Sour Pork (탕수육) Lightly battered and fried pork and vegetable mixed with sweet and sour glaze.",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sweet and Sour Pork (탕수육) Lightly battered and fried pork and vegetable mixed with sweet and sour glaze.",
        "item_desc": ""
      },
      {
        "item": "Sweet & sour chicken (치킨 탕수육) Lightly battered and fried chicken mixed vegetables with sweet & sour glaze",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sweet & sour chicken (치킨 탕수육) Lightly battered and fried chicken mixed vegetables with sweet & sour glaze",
        "item_desc": ""
      },
      {
        "item": "Fried rice (볶음밥) Fried rice with assorted vegetables and choice of meat",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Fried rice (볶음밥) Fried rice",
        "item_desc": "with assorted vegetables and choice of meat"
      },
      {
        "item": "Basil fried rice (베이즐 볶음밥) Fried rice with assorted vegetables and choice of meat with thai basil",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Basil fried rice (베이즐 볶음밥) Fried rice",
        "item_desc": "with assorted vegetables and choice of meat with thai basil"
      },
      {
        "item": "Katsu (돈까스) Panko breaded, deep-fried meat, and over white rice (chicken , pork, fish ).",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Katsu (돈까스) Panko breaded, deep-fried meat, and over white rice (chicken , pork, fish ).",
        "item_desc": ""
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "$25.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Bulgogi (치킨 불고기) Grilled chicken",
        "item_desc": "marinated in sweet soy sauce"
      },
      {
        "item": "Pork Bulgogi (돼지 불고기) Grilled thinly sliced pork marinated in sweet soy, ginger, garlic and sesame sauce",
        "price": "$26.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pork Bulgogi (돼지 불고기) Grilled thinly sliced pork",
        "item_desc": "marinated in sweet soy, ginger, garlic and sesame sauce"
      },
      {
        "item": "K1 BULGOGI BEEF Maki (불고기 롤) Beef marinated in bulgogi sauce, egg, carrots, cucumbers, mayo with onion",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "K1 BULGOGI BEEF Maki (불고기 롤) Beef",
        "item_desc": "marinated in bulgogi sauce, egg, carrots, cucumbers, mayo with onion"
      },
      {
        "item": "K3 YUBU Maki (유부 롤) V Marinated yubu(tofu skin), egg, carrots, radish pickle , mayo with onion",
        "price": "$11.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "K3 YUBU Maki (유부 롤) V",
        "item_desc": "Marinated yubu(tofu skin), egg, carrots, radish pickle , mayo with onion"
      },
      {
        "item": "K2 SHRIMP TEMPURA Maki (새우튀김 롤) Shrimp tempura, egg, carrots, cucumbers, mayo with onion",
        "price": "$12.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "K2 SHRIMP TEMPURA Maki (새우튀김 롤) Shrimp tempura, egg, carrots, cucumbers, mayo",
        "item_desc": "with onion"
      },
      {
        "item": "Brow Rice Whole grain brown rice.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brow Rice Whole grain brown rice.",
        "item_desc": ""
      },
      {
        "item": "Panchan (Single) Season Korean side dishes.",
        "price": "$6.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Panchan (Single) Season Korean side dishes.",
        "item_desc": ""
      },
      {
        "item": "Panchan (Set of Three) Season Korean side dishes.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Panchan (Set of Three) Season Korean side dishes.",
        "item_desc": ""
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "$2.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "White rice Steamed white rice",
        "item_desc": "served as a side dish."
      },
      {
        "item": "San Pelligrino Sparkling Water (16 oz)",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "San Pelligrino Sparkling Water (16 oz)",
        "item_desc": ""
      },
      {
        "item": "Boylan's (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Boylan's (12 oz)",
        "item_desc": ""
      },
      {
        "item": "San Pelligrino Limonata (11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "San Pelligrino Limonata (11.15 oz) can",
        "item_desc": ""
      },
      {
        "item": "Seagrams Ginger Ale (10 oz) Ginger-flavored ale",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seagrams Ginger Ale (10 oz) Ginger-flavored ale",
        "item_desc": ""
      },
      {
        "item": "Coca-Cola (12 oz) Classic cola flavor in a 12 oz",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Coca-Cola (12 oz)",
        "item_desc": "Classic cola flavor in a 12 oz"
      },
      {
        "item": "Sprite (12 oz)",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sprite (12 oz)",
        "item_desc": ""
      },
      {
        "item": "Coca-Cola Mexican Cola (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Coca-Cola Mexican Cola (12 oz)",
        "item_desc": ""
      },
      {
        "item": "Fiji Still Water (16 oz) Refreshing still water from Fiji, perfect for any occasion.",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fiji Still Water (16 oz) Refreshing still water from Fiji, perfect for any occasion.",
        "item_desc": ""
      },
      {
        "item": "Joe's Tea (20 oz) Refreshing brew served in a 20 oz cup.",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Joe's Tea (20 oz) Refreshing brew",
        "item_desc": "served in a 20 oz cup."
      },
      {
        "item": "Mott's Apple Juice (8 oz) 100% Juice , No Sugar added, NON-GMO",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mott's Apple Juice (8 oz) 100% Juice , No Sugar added, NON-GMO",
        "item_desc": ""
      },
      {
        "item": "Sanpellegrino sparkling Orange ( 11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sanpellegrino sparkling Orange ( 11.15 oz) can",
        "item_desc": ""
      },
      {
        "item": "Tropicana Orange Juice (10oz) 100 % Juice",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tropicana Orange Juice (10oz) 100 % Juice",
        "item_desc": ""
      },
      {
        "item": "Beef Bulgogi (불고기) Grilled thinly sliced beef marinated in sweet soy, ginger, garlic, and sesame sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Beef Bulgogi (불고기) Grilled thinly sliced beef",
        "item_desc": "marinated in sweet soy, ginger, garlic, and sesame sauce."
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Bulgogi (치킨 불고기) Grilled chicken",
        "item_desc": "marinated in sweet soy sauce"
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kalbi (갈비) Grilled beef short ribs",
        "item_desc": "marinated in sweet say, ginger, garlic, and sesame sauce."
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in",
        "item_desc": "sweet and tangy sauce"
      },
      {
        "item": "Chicken cutlet Panko breaded, deep-fried chicken cutlet.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken cutlet Panko breaded, deep-fried chicken cutlet.",
        "item_desc": ""
      },
      {
        "item": "Shrimp tempura Breaded and fried shrimp",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp tempura Breaded and fried shrimp",
        "item_desc": ""
      },
      {
        "item": "Tofu Tofu lightly battered and fried with teriyaki sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Tofu Tofu lightly battered and fried",
        "item_desc": "with teriyaki sauce"
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "item_desc": ""
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "White rice Steamed white rice",
        "item_desc": "served as a side dish."
      },
      {
        "item": "Japchae (잡채) Cellophane noodles stir-fried with julienned vegetables.",
        "price": "$17.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Japchae (잡채) Cellophane noodles stir-fried",
        "item_desc": "with julienned vegetables."
      },
      {
        "item": "Broccoli With oyster sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Broccoli",
        "item_desc": "With oyster sauce"
      },
      {
        "item": "Gold Pumpkin mash salad Mashed pumpkin with dried cranberries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gold Pumpkin mash salad Mashed pumpkin",
        "item_desc": "with dried cranberries"
      },
      {
        "item": "Edamame Steamed whole soy bean",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Edamame Steamed whole soy bean",
        "item_desc": ""
      },
      {
        "item": "Fried veg. gyoza 2 fried vegi dumplings",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Fried veg. gyoza 2 fried vegi dumplings",
        "item_desc": ""
      },
      {
        "item": "Seaweed salad Seaweed tossed in sesame and rice vinegar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seaweed salad Seaweed tossed in sesame and rice vinegar",
        "item_desc": ""
      },
      {
        "item": "French fries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French fries",
        "item_desc": ""
      },
      {
        "item": "French Fries Deep fried skin-on potato",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "French Fries Deep fried skin-on potato",
        "item_desc": ""
      },
      {
        "item": "Edamame Steamed whole soybean in pod lightly salted.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Edamame Steamed whole soybean in pod lightly salted.",
        "item_desc": ""
      },
      {
        "item": "Gyoza Fried or steamed dumplings (6pcs beef or 5pcs veg).",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gyoza Fried or steamed dumplings (6pcs beef or 5pcs veg).",
        "item_desc": ""
      },
      {
        "item": "Seafood and Scallion Pancake (해물파전) Shrimp, calamari, and green onion grilled pancake.",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seafood and Scallion Pancake (해물파전) Shrimp, calamari, and green onion grilled pancake.",
        "item_desc": ""
      },
      {
        "item": "Kimchi Pancake (김치전) Kimchi and vegetable grilled pancake.",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kimchi Pancake (김치전) Kimchi and vegetable grilled pancake.",
        "item_desc": ""
      },
      {
        "item": "Vegetable pancake(야채전) Mixed vegetable grilled pancake",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable pancake(야채전) Mixed vegetable grilled pancake",
        "item_desc": ""
      },
      {
        "item": "Spring Roll (3 pcs) Crispy fried vegetables in a wonton wrapper.",
        "price": "$5.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Spring Roll (3 pcs)",
        "item_desc": "Crispy fried vegetables in a wonton wrapper."
      },
      {
        "item": "Shrimp Shumai (6 pcs) Japanese steamed shrimp dumpling.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Shumai (6 pcs) Japanese steamed shrimp dumpling.",
        "item_desc": ""
      },
      {
        "item": "Seaweed Salad Seaweed tossed in sesame and rice vinegar.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seaweed Salad Seaweed tossed in sesame and rice vinegar.",
        "item_desc": ""
      },
      {
        "item": "Gyoza Soup Beef or vegetable dumpling soup.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gyoza Soup Beef or vegetable dumpling soup.",
        "item_desc": ""
      },
      {
        "item": "Miso Soup Miso broth with cubed tofu and scallion.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Miso Soup Miso broth",
        "item_desc": "with cubed tofu and scallion."
      },
      {
        "item": "Fried butterfly Shrimp 8 breaded and deep-fried shrimp",
        "price": "$10.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fried butterfly Shrimp 8 breaded and deep-fried shrimp",
        "item_desc": ""
      },
      {
        "item": "Kimchi Fried Rice(김치 볶음밥) Fried rice stir-fried with kimchi and assorted vegetables.",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kimchi Fried Rice(김치 볶음밥) Fried rice stir-fried",
        "item_desc": "with kimchi and assorted vegetables."
      },
      {
        "item": "Bibimbap (비빔밥) Rice mixed with julienned vegetables , egg and choice of meat in red chili past or soy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Bibimbap (비빔밥) Rice mixed",
        "item_desc": "with julienned vegetables , egg and choice of meat in red chili past or soy sauce"
      },
      {
        "item": "Bulgogi (불고기) Grilled thinly sliced beef marinated in sweet soy, ginger, garlic, and sesame sauce.",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bulgogi (불고기) Grilled thinly sliced beef",
        "item_desc": "marinated in sweet soy, ginger, garlic, and sesame sauce."
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "$34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kalbi (갈비) Grilled beef short ribs",
        "item_desc": "marinated in sweet say, ginger, garlic, and sesame sauce."
      },
      {
        "item": "Pan-fried Pork (제육볶음) Pan-fried sliced pork mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pan-fried Pork (제육볶음) Pan-fried sliced pork mixed vegetables in",
        "item_desc": "sweet and spicy red pepper garlic sauce with wheat noodle"
      },
      {
        "item": "Pan-Fried Calamari (오징어 볶음) Panfried squid and mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pan-Fried Calamari (오징어 볶음) Panfried squid and mixed vegetables in",
        "item_desc": "sweet and spicy red pepper garlic sauce with wheat noodle"
      },
      {
        "item": "Bossam (보쌈) Boiled pork, salted napa cabbage, radish kimchi and salted shrimp",
        "price": "$39.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bossam (보쌈) Boiled pork, salted napa cabbage, radish kimchi and salted shrimp",
        "item_desc": ""
      },
      {
        "item": "Black bean fried rice(짜장 볶음밥) Black bean ragu with sauteed pork sauce over the fried rice",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Black bean fried rice(짜장 볶음밥) Black bean ragu",
        "item_desc": "with sauteed pork sauce over the fried rice"
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "$22.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "item_desc": ""
      },
      {
        "item": "Soft tofu stew (순두부 찌개) Spicy stew of soft tofu, red chili paste, assorted vegetables and choice of meat",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Soft tofu stew (순두부 찌개)",
        "item_desc": "Spicy stew of soft tofu, red chili paste, assorted vegetables and choice of meat"
      },
      {
        "item": "Black Bean Noodle(짜장면) Wheat noodles in black bean ragu with sauteed pork and vegetables",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Black Bean Noodle(짜장면) Wheat noodles in black bean ragu",
        "item_desc": "with sauteed pork and vegetables"
      },
      {
        "item": "Spicy Asian Noodle Cioppino (해물짬뽕) Wheat noodles in a spicy stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Spicy Asian Noodle Cioppino (해물짬뽕) Wheat noodles in a spicy stew with vegetables and choice of topping",
        "item_desc": ""
      },
      {
        "item": "Spicy Beef Stew (육개장) Shredded beef and vegetables in a spicy broth.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spicy Beef Stew (육개장) Shredded beef and vegetables in a spicy broth.",
        "item_desc": ""
      },
      {
        "item": "Jumbo Kalbi Tang (왕 갈비 탕) Beef rib soup with Jumbo beef rib, jujube, glass noodles, mushroom & sliced egg",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jumbo Kalbi Tang (왕 갈비 탕) Beef rib soup",
        "item_desc": "with Jumbo beef rib, jujube, glass noodles, mushroom & sliced egg"
      },
      {
        "item": "Pho Noodle Soup (쌀국수) Rice noodles in clear beef broth. Served with bean sprouts, thai basil, cilantro, and peppers.",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pho Noodle Soup (쌀국수) Rice noodles in clear beef broth.",
        "item_desc": "Served with bean sprouts, thai basil, cilantro, and peppers."
      },
      {
        "item": "non spicy asian noodle (백짬뽕) Wheat noodles in a white stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "non",
        "item_desc": "spicy asian noodle (백짬뽕) Wheat noodles in a white stew with vegetables and choice of topping"
      },
      {
        "item": "Curry Rice (카레 라이스) Vegetable Japanese curry",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Curry Rice (카레 라이스) Vegetable Japanese curry",
        "item_desc": ""
      },
      {
        "item": "Katsu with Curry (카레 돈까스) Katsu with vegetables Japanese curry",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Katsu",
        "item_desc": "with Curry (카레 돈까스) Katsu with vegetables Japanese curry"
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in",
        "item_desc": "sweet and tangy sauce"
      },
      {
        "item": "Cold Soba Noodle with Shrimp Tempura(새우튀김 냉모밀) Chilled buckwheat noodles garnished with radish, scallions & seaweed in Cold Katsuobushi broth and Shrimp Tempura",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cold Soba Noodle",
        "item_desc": "with Shrimp Tempura(새우튀김 냉모밀) Chilled buckwheat noodles garnished with radish, scallions & seaweed in Cold Katsuobushi broth and Shrimp Tempura"
      },
      {
        "item": "Sweet and Sour Pork (탕수육) Lightly battered and fried pork and vegetable mixed with sweet and sour glaze.",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sweet and Sour Pork (탕수육) Lightly battered and fried pork and vegetable mixed with sweet and sour glaze.",
        "item_desc": ""
      },
      {
        "item": "Sweet & sour chicken (치킨 탕수육) Lightly battered and fried chicken mixed vegetables with sweet & sour glaze",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sweet & sour chicken (치킨 탕수육) Lightly battered and fried chicken mixed vegetables with sweet & sour glaze",
        "item_desc": ""
      },
      {
        "item": "Fried rice (볶음밥) Fried rice with assorted vegetables and choice of meat",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Fried rice (볶음밥) Fried rice",
        "item_desc": "with assorted vegetables and choice of meat"
      },
      {
        "item": "Basil fried rice (베이즐 볶음밥) Fried rice with assorted vegetables and choice of meat with thai basil",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Basil fried rice (베이즐 볶음밥) Fried rice",
        "item_desc": "with assorted vegetables and choice of meat with thai basil"
      },
      {
        "item": "Katsu (돈까스) Panko breaded, deep-fried meat, and over white rice (chicken , pork, fish ).",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Katsu (돈까스) Panko breaded, deep-fried meat, and over white rice (chicken , pork, fish ).",
        "item_desc": ""
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "$25.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Bulgogi (치킨 불고기) Grilled chicken",
        "item_desc": "marinated in sweet soy sauce"
      },
      {
        "item": "Pork Bulgogi (돼지 불고기) Grilled thinly sliced pork marinated in sweet soy, ginger, garlic and sesame sauce",
        "price": "$26.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pork Bulgogi (돼지 불고기) Grilled thinly sliced pork",
        "item_desc": "marinated in sweet soy, ginger, garlic and sesame sauce"
      },
      {
        "item": "K1 BULGOGI BEEF Maki (불고기 롤) Beef marinated in bulgogi sauce, egg, carrots, cucumbers, mayo with onion",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "K1 BULGOGI BEEF Maki (불고기 롤) Beef",
        "item_desc": "marinated in bulgogi sauce, egg, carrots, cucumbers, mayo with onion"
      },
      {
        "item": "K3 YUBU Maki (유부 롤) V Marinated yubu(tofu skin), egg, carrots, radish pickle , mayo with onion",
        "price": "$11.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "K3 YUBU Maki (유부 롤) V",
        "item_desc": "Marinated yubu(tofu skin), egg, carrots, radish pickle , mayo with onion"
      },
      {
        "item": "K2 SHRIMP TEMPURA Maki (새우튀김 롤) Shrimp tempura, egg, carrots, cucumbers, mayo with onion",
        "price": "$12.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "K2 SHRIMP TEMPURA Maki (새우튀김 롤) Shrimp tempura, egg, carrots, cucumbers, mayo",
        "item_desc": "with onion"
      },
      {
        "item": "Brow Rice Whole grain brown rice.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brow Rice Whole grain brown rice.",
        "item_desc": ""
      },
      {
        "item": "Panchan (Single) Season Korean side dishes.",
        "price": "$6.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Panchan (Single) Season Korean side dishes.",
        "item_desc": ""
      },
      {
        "item": "Panchan (Set of Three) Season Korean side dishes.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Panchan (Set of Three) Season Korean side dishes.",
        "item_desc": ""
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "$2.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "White rice Steamed white rice",
        "item_desc": "served as a side dish."
      },
      {
        "item": "San Pelligrino Sparkling Water (16 oz)",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "San Pelligrino Sparkling Water (16 oz)",
        "item_desc": ""
      },
      {
        "item": "Boylan's (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Boylan's (12 oz)",
        "item_desc": ""
      },
      {
        "item": "San Pelligrino Limonata (11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "San Pelligrino Limonata (11.15 oz) can",
        "item_desc": ""
      },
      {
        "item": "Seagrams Ginger Ale (10 oz) Ginger-flavored ale",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seagrams Ginger Ale (10 oz) Ginger-flavored ale",
        "item_desc": ""
      },
      {
        "item": "Coca-Cola (12 oz) Classic cola flavor in a 12 oz",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Coca-Cola (12 oz)",
        "item_desc": "Classic cola flavor in a 12 oz"
      },
      {
        "item": "Sprite (12 oz)",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sprite (12 oz)",
        "item_desc": ""
      },
      {
        "item": "Coca-Cola Mexican Cola (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Coca-Cola Mexican Cola (12 oz)",
        "item_desc": ""
      },
      {
        "item": "Fiji Still Water (16 oz) Refreshing still water from Fiji, perfect for any occasion.",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fiji Still Water (16 oz) Refreshing still water from Fiji, perfect for any occasion.",
        "item_desc": ""
      },
      {
        "item": "Joe's Tea (20 oz) Refreshing brew served in a 20 oz cup.",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Joe's Tea (20 oz) Refreshing brew",
        "item_desc": "served in a 20 oz cup."
      },
      {
        "item": "Mott's Apple Juice (8 oz) 100% Juice , No Sugar added, NON-GMO",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mott's Apple Juice (8 oz) 100% Juice , No Sugar added, NON-GMO",
        "item_desc": ""
      },
      {
        "item": "Sanpellegrino sparkling Orange ( 11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sanpellegrino sparkling Orange ( 11.15 oz) can",
        "item_desc": ""
      },
      {
        "item": "Tropicana Orange Juice (10oz) 100 % Juice",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tropicana Orange Juice (10oz) 100 % Juice",
        "item_desc": ""
      },
      {
        "item": "Beef Bulgogi (불고기) Grilled thinly sliced beef marinated in sweet soy, ginger, garlic, and sesame sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Beef Bulgogi (불고기) Grilled thinly sliced beef",
        "item_desc": "marinated in sweet soy, ginger, garlic, and sesame sauce."
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Bulgogi (치킨 불고기) Grilled chicken",
        "item_desc": "marinated in sweet soy sauce"
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kalbi (갈비) Grilled beef short ribs",
        "item_desc": "marinated in sweet say, ginger, garlic, and sesame sauce."
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in",
        "item_desc": "sweet and tangy sauce"
      },
      {
        "item": "Chicken cutlet Panko breaded, deep-fried chicken cutlet.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken cutlet Panko breaded, deep-fried chicken cutlet.",
        "item_desc": ""
      },
      {
        "item": "Shrimp tempura Breaded and fried shrimp",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp tempura Breaded and fried shrimp",
        "item_desc": ""
      },
      {
        "item": "Tofu Tofu lightly battered and fried with teriyaki sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Tofu Tofu lightly battered and fried",
        "item_desc": "with teriyaki sauce"
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "item_desc": ""
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "White rice Steamed white rice",
        "item_desc": "served as a side dish."
      },
      {
        "item": "Japchae (잡채) Cellophane noodles stir-fried with julienned vegetables.",
        "price": "$17.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Japchae (잡채) Cellophane noodles stir-fried",
        "item_desc": "with julienned vegetables."
      },
      {
        "item": "Broccoli With oyster sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Broccoli",
        "item_desc": "With oyster sauce"
      },
      {
        "item": "Gold Pumpkin mash salad Mashed pumpkin with dried cranberries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gold Pumpkin mash salad Mashed pumpkin",
        "item_desc": "with dried cranberries"
      },
      {
        "item": "Edamame Steamed whole soy bean",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Edamame Steamed whole soy bean",
        "item_desc": ""
      },
      {
        "item": "Fried veg. gyoza 2 fried vegi dumplings",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Fried veg. gyoza 2 fried vegi dumplings",
        "item_desc": ""
      },
      {
        "item": "Seaweed salad Seaweed tossed in sesame and rice vinegar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seaweed salad Seaweed tossed in sesame and rice vinegar",
        "item_desc": ""
      },
      {
        "item": "French fries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French fries",
        "item_desc": ""
      },
      {
        "item": "French Fries Deep fried skin-on potato",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "French Fries Deep fried skin-on potato",
        "item_desc": ""
      },
      {
        "item": "Edamame Steamed whole soybean in pod lightly salted.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Edamame Steamed whole soybean in pod lightly salted.",
        "item_desc": ""
      },
      {
        "item": "Gyoza Fried or steamed dumplings (6pcs beef or 5pcs veg).",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gyoza Fried or steamed dumplings (6pcs beef or 5pcs veg).",
        "item_desc": ""
      },
      {
        "item": "Seafood and Scallion Pancake (해물파전) Shrimp, calamari, and green onion grilled pancake.",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seafood and Scallion Pancake (해물파전) Shrimp, calamari, and green onion grilled pancake.",
        "item_desc": ""
      },
      {
        "item": "Kimchi Pancake (김치전) Kimchi and vegetable grilled pancake.",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kimchi Pancake (김치전) Kimchi and vegetable grilled pancake.",
        "item_desc": ""
      },
      {
        "item": "Vegetable pancake(야채전) Mixed vegetable grilled pancake",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable pancake(야채전) Mixed vegetable grilled pancake",
        "item_desc": ""
      },
      {
        "item": "Spring Roll (3 pcs) Crispy fried vegetables in a wonton wrapper.",
        "price": "$5.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Spring Roll (3 pcs)",
        "item_desc": "Crispy fried vegetables in a wonton wrapper."
      },
      {
        "item": "Shrimp Shumai (6 pcs) Japanese steamed shrimp dumpling.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Shumai (6 pcs) Japanese steamed shrimp dumpling.",
        "item_desc": ""
      },
      {
        "item": "Seaweed Salad Seaweed tossed in sesame and rice vinegar.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seaweed Salad Seaweed tossed in sesame and rice vinegar.",
        "item_desc": ""
      },
      {
        "item": "Gyoza Soup Beef or vegetable dumpling soup.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gyoza Soup Beef or vegetable dumpling soup.",
        "item_desc": ""
      },
      {
        "item": "Miso Soup Miso broth with cubed tofu and scallion.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Miso Soup Miso broth",
        "item_desc": "with cubed tofu and scallion."
      },
      {
        "item": "Fried butterfly Shrimp 8 breaded and deep-fried shrimp",
        "price": "$10.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fried butterfly Shrimp 8 breaded and deep-fried shrimp",
        "item_desc": ""
      },
      {
        "item": "Kimchi Fried Rice(김치 볶음밥) Fried rice stir-fried with kimchi and assorted vegetables.",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kimchi Fried Rice(김치 볶음밥) Fried rice stir-fried",
        "item_desc": "with kimchi and assorted vegetables."
      },
      {
        "item": "Bibimbap (비빔밥) Rice mixed with julienned vegetables , egg and choice of meat in red chili past or soy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Bibimbap (비빔밥) Rice mixed",
        "item_desc": "with julienned vegetables , egg and choice of meat in red chili past or soy sauce"
      },
      {
        "item": "Bulgogi (불고기) Grilled thinly sliced beef marinated in sweet soy, ginger, garlic, and sesame sauce.",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bulgogi (불고기) Grilled thinly sliced beef",
        "item_desc": "marinated in sweet soy, ginger, garlic, and sesame sauce."
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "$34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kalbi (갈비) Grilled beef short ribs",
        "item_desc": "marinated in sweet say, ginger, garlic, and sesame sauce."
      },
      {
        "item": "Pan-fried Pork (제육볶음) Pan-fried sliced pork mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pan-fried Pork (제육볶음) Pan-fried sliced pork mixed vegetables in",
        "item_desc": "sweet and spicy red pepper garlic sauce with wheat noodle"
      },
      {
        "item": "Pan-Fried Calamari (오징어 볶음) Panfried squid and mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pan-Fried Calamari (오징어 볶음) Panfried squid and mixed vegetables in",
        "item_desc": "sweet and spicy red pepper garlic sauce with wheat noodle"
      },
      {
        "item": "Bossam (보쌈) Boiled pork, salted napa cabbage, radish kimchi and salted shrimp",
        "price": "$39.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bossam (보쌈) Boiled pork, salted napa cabbage, radish kimchi and salted shrimp",
        "item_desc": ""
      },
      {
        "item": "Black bean fried rice(짜장 볶음밥) Black bean ragu with sauteed pork sauce over the fried rice",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Black bean fried rice(짜장 볶음밥) Black bean ragu",
        "item_desc": "with sauteed pork sauce over the fried rice"
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "$22.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "item_desc": ""
      },
      {
        "item": "Soft tofu stew (순두부 찌개) Spicy stew of soft tofu, red chili paste, assorted vegetables and choice of meat",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Soft tofu stew (순두부 찌개)",
        "item_desc": "Spicy stew of soft tofu, red chili paste, assorted vegetables and choice of meat"
      },
      {
        "item": "Black Bean Noodle(짜장면) Wheat noodles in black bean ragu with sauteed pork and vegetables",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Black Bean Noodle(짜장면) Wheat noodles in black bean ragu",
        "item_desc": "with sauteed pork and vegetables"
      },
      {
        "item": "Spicy Asian Noodle Cioppino (해물짬뽕) Wheat noodles in a spicy stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Spicy Asian Noodle Cioppino (해물짬뽕) Wheat noodles in a spicy stew with vegetables and choice of topping",
        "item_desc": ""
      },
      {
        "item": "Spicy Beef Stew (육개장) Shredded beef and vegetables in a spicy broth.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spicy Beef Stew (육개장) Shredded beef and vegetables in a spicy broth.",
        "item_desc": ""
      },
      {
        "item": "Jumbo Kalbi Tang (왕 갈비 탕) Beef rib soup with Jumbo beef rib, jujube, glass noodles, mushroom & sliced egg",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jumbo Kalbi Tang (왕 갈비 탕) Beef rib soup",
        "item_desc": "with Jumbo beef rib, jujube, glass noodles, mushroom & sliced egg"
      },
      {
        "item": "Pho Noodle Soup (쌀국수) Rice noodles in clear beef broth. Served with bean sprouts, thai basil, cilantro, and peppers.",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pho Noodle Soup (쌀국수) Rice noodles in clear beef broth.",
        "item_desc": "Served with bean sprouts, thai basil, cilantro, and peppers."
      },
      {
        "item": "non spicy asian noodle (백짬뽕) Wheat noodles in a white stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "non",
        "item_desc": "spicy asian noodle (백짬뽕) Wheat noodles in a white stew with vegetables and choice of topping"
      },
      {
        "item": "Curry Rice (카레 라이스) Vegetable Japanese curry",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Curry Rice (카레 라이스) Vegetable Japanese curry",
        "item_desc": ""
      },
      {
        "item": "Katsu with Curry (카레 돈까스) Katsu with vegetables Japanese curry",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Katsu",
        "item_desc": "with Curry (카레 돈까스) Katsu with vegetables Japanese curry"
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in",
        "item_desc": "sweet and tangy sauce"
      },
      {
        "item": "Cold Soba Noodle with Shrimp Tempura(새우튀김 냉모밀) Chilled buckwheat noodles garnished with radish, scallions & seaweed in Cold Katsuobushi broth and Shrimp Tempura",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cold Soba Noodle",
        "item_desc": "with Shrimp Tempura(새우튀김 냉모밀) Chilled buckwheat noodles garnished with radish, scallions & seaweed in Cold Katsuobushi broth and Shrimp Tempura"
      },
      {
        "item": "Sweet and Sour Pork (탕수육) Lightly battered and fried pork and vegetable mixed with sweet and sour glaze.",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sweet and Sour Pork (탕수육) Lightly battered and fried pork and vegetable mixed with sweet and sour glaze.",
        "item_desc": ""
      },
      {
        "item": "Sweet & sour chicken (치킨 탕수육) Lightly battered and fried chicken mixed vegetables with sweet & sour glaze",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sweet & sour chicken (치킨 탕수육) Lightly battered and fried chicken mixed vegetables with sweet & sour glaze",
        "item_desc": ""
      },
      {
        "item": "Fried rice (볶음밥) Fried rice with assorted vegetables and choice of meat",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Fried rice (볶음밥) Fried rice",
        "item_desc": "with assorted vegetables and choice of meat"
      },
      {
        "item": "Basil fried rice (베이즐 볶음밥) Fried rice with assorted vegetables and choice of meat with thai basil",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Basil fried rice (베이즐 볶음밥) Fried rice",
        "item_desc": "with assorted vegetables and choice of meat with thai basil"
      },
      {
        "item": "Katsu (돈까스) Panko breaded, deep-fried meat, and over white rice (chicken , pork, fish ).",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Katsu (돈까스) Panko breaded, deep-fried meat, and over white rice (chicken , pork, fish ).",
        "item_desc": ""
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "$25.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Bulgogi (치킨 불고기) Grilled chicken",
        "item_desc": "marinated in sweet soy sauce"
      },
      {
        "item": "Pork Bulgogi (돼지 불고기) Grilled thinly sliced pork marinated in sweet soy, ginger, garlic and sesame sauce",
        "price": "$26.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pork Bulgogi (돼지 불고기) Grilled thinly sliced pork",
        "item_desc": "marinated in sweet soy, ginger, garlic and sesame sauce"
      },
      {
        "item": "K1 BULGOGI BEEF Maki (불고기 롤) Beef marinated in bulgogi sauce, egg, carrots, cucumbers, mayo with onion",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "K1 BULGOGI BEEF Maki (불고기 롤) Beef",
        "item_desc": "marinated in bulgogi sauce, egg, carrots, cucumbers, mayo with onion"
      },
      {
        "item": "K3 YUBU Maki (유부 롤) V Marinated yubu(tofu skin), egg, carrots, radish pickle , mayo with onion",
        "price": "$11.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "K3 YUBU Maki (유부 롤) V",
        "item_desc": "Marinated yubu(tofu skin), egg, carrots, radish pickle , mayo with onion"
      },
      {
        "item": "K2 SHRIMP TEMPURA Maki (새우튀김 롤) Shrimp tempura, egg, carrots, cucumbers, mayo with onion",
        "price": "$12.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "K2 SHRIMP TEMPURA Maki (새우튀김 롤) Shrimp tempura, egg, carrots, cucumbers, mayo",
        "item_desc": "with onion"
      },
      {
        "item": "Brow Rice Whole grain brown rice.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brow Rice Whole grain brown rice.",
        "item_desc": ""
      },
      {
        "item": "Panchan (Single) Season Korean side dishes.",
        "price": "$6.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Panchan (Single) Season Korean side dishes.",
        "item_desc": ""
      },
      {
        "item": "Panchan (Set of Three) Season Korean side dishes.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Panchan (Set of Three) Season Korean side dishes.",
        "item_desc": ""
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "$2.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "White rice Steamed white rice",
        "item_desc": "served as a side dish."
      },
      {
        "item": "San Pelligrino Sparkling Water (16 oz)",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "San Pelligrino Sparkling Water (16 oz)",
        "item_desc": ""
      },
      {
        "item": "Boylan's (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Boylan's (12 oz)",
        "item_desc": ""
      },
      {
        "item": "San Pelligrino Limonata (11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "San Pelligrino Limonata (11.15 oz) can",
        "item_desc": ""
      },
      {
        "item": "Seagrams Ginger Ale (10 oz) Ginger-flavored ale",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seagrams Ginger Ale (10 oz) Ginger-flavored ale",
        "item_desc": ""
      },
      {
        "item": "Coca-Cola (12 oz) Classic cola flavor in a 12 oz",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Coca-Cola (12 oz)",
        "item_desc": "Classic cola flavor in a 12 oz"
      },
      {
        "item": "Sprite (12 oz)",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sprite (12 oz)",
        "item_desc": ""
      },
      {
        "item": "Coca-Cola Mexican Cola (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Coca-Cola Mexican Cola (12 oz)",
        "item_desc": ""
      },
      {
        "item": "Fiji Still Water (16 oz) Refreshing still water from Fiji, perfect for any occasion.",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fiji Still Water (16 oz) Refreshing still water from Fiji, perfect for any occasion.",
        "item_desc": ""
      },
      {
        "item": "Joe's Tea (20 oz) Refreshing brew served in a 20 oz cup.",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Joe's Tea (20 oz) Refreshing brew",
        "item_desc": "served in a 20 oz cup."
      },
      {
        "item": "Mott's Apple Juice (8 oz) 100% Juice , No Sugar added, NON-GMO",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mott's Apple Juice (8 oz) 100% Juice , No Sugar added, NON-GMO",
        "item_desc": ""
      },
      {
        "item": "Sanpellegrino sparkling Orange ( 11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sanpellegrino sparkling Orange ( 11.15 oz) can",
        "item_desc": ""
      },
      {
        "item": "Tropicana Orange Juice (10oz) 100 % Juice",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tropicana Orange Juice (10oz) 100 % Juice",
        "item_desc": ""
      },
      {
        "item": "Beef Bulgogi (불고기) Grilled thinly sliced beef marinated in sweet soy, ginger, garlic, and sesame sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Beef Bulgogi (불고기) Grilled thinly sliced beef",
        "item_desc": "marinated in sweet soy, ginger, garlic, and sesame sauce."
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Bulgogi (치킨 불고기) Grilled chicken",
        "item_desc": "marinated in sweet soy sauce"
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kalbi (갈비) Grilled beef short ribs",
        "item_desc": "marinated in sweet say, ginger, garlic, and sesame sauce."
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in",
        "item_desc": "sweet and tangy sauce"
      },
      {
        "item": "Chicken cutlet Panko breaded, deep-fried chicken cutlet.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken cutlet Panko breaded, deep-fried chicken cutlet.",
        "item_desc": ""
      },
      {
        "item": "Shrimp tempura Breaded and fried shrimp",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp tempura Breaded and fried shrimp",
        "item_desc": ""
      },
      {
        "item": "Tofu Tofu lightly battered and fried with teriyaki sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Tofu Tofu lightly battered and fried",
        "item_desc": "with teriyaki sauce"
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "item_desc": ""
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "White rice Steamed white rice",
        "item_desc": "served as a side dish."
      },
      {
        "item": "Japchae (잡채) Cellophane noodles stir-fried with julienned vegetables.",
        "price": "$17.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Japchae (잡채) Cellophane noodles stir-fried",
        "item_desc": "with julienned vegetables."
      },
      {
        "item": "Broccoli With oyster sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Broccoli",
        "item_desc": "With oyster sauce"
      },
      {
        "item": "Gold Pumpkin mash salad Mashed pumpkin with dried cranberries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gold Pumpkin mash salad Mashed pumpkin",
        "item_desc": "with dried cranberries"
      },
      {
        "item": "Edamame Steamed whole soy bean",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Edamame Steamed whole soy bean",
        "item_desc": ""
      },
      {
        "item": "Fried veg. gyoza 2 fried vegi dumplings",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Fried veg. gyoza 2 fried vegi dumplings",
        "item_desc": ""
      },
      {
        "item": "Seaweed salad Seaweed tossed in sesame and rice vinegar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seaweed salad Seaweed tossed in sesame and rice vinegar",
        "item_desc": ""
      },
      {
        "item": "French fries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French fries",
        "item_desc": ""
      },
      {
        "item": "French Fries Deep fried skin-on potato",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "French Fries Deep fried skin-on potato",
        "item_desc": ""
      },
      {
        "item": "Edamame Steamed whole soybean in pod lightly salted.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Edamame Steamed whole soybean in pod lightly salted.",
        "item_desc": ""
      },
      {
        "item": "Gyoza Fried or steamed dumplings (6pcs beef or 5pcs veg).",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gyoza Fried or steamed dumplings (6pcs beef or 5pcs veg).",
        "item_desc": ""
      },
      {
        "item": "Seafood and Scallion Pancake (해물파전) Shrimp, calamari, and green onion grilled pancake.",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seafood and Scallion Pancake (해물파전) Shrimp, calamari, and green onion grilled pancake.",
        "item_desc": ""
      },
      {
        "item": "Kimchi Pancake (김치전) Kimchi and vegetable grilled pancake.",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kimchi Pancake (김치전) Kimchi and vegetable grilled pancake.",
        "item_desc": ""
      },
      {
        "item": "Vegetable pancake(야채전) Mixed vegetable grilled pancake",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable pancake(야채전) Mixed vegetable grilled pancake",
        "item_desc": ""
      },
      {
        "item": "Spring Roll (3 pcs) Crispy fried vegetables in a wonton wrapper.",
        "price": "$5.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Spring Roll (3 pcs)",
        "item_desc": "Crispy fried vegetables in a wonton wrapper."
      },
      {
        "item": "Shrimp Shumai (6 pcs) Japanese steamed shrimp dumpling.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Shumai (6 pcs) Japanese steamed shrimp dumpling.",
        "item_desc": ""
      },
      {
        "item": "Seaweed Salad Seaweed tossed in sesame and rice vinegar.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seaweed Salad Seaweed tossed in sesame and rice vinegar.",
        "item_desc": ""
      },
      {
        "item": "Gyoza Soup Beef or vegetable dumpling soup.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gyoza Soup Beef or vegetable dumpling soup.",
        "item_desc": ""
      },
      {
        "item": "Miso Soup Miso broth with cubed tofu and scallion.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Miso Soup Miso broth",
        "item_desc": "with cubed tofu and scallion."
      },
      {
        "item": "Fried butterfly Shrimp 8 breaded and deep-fried shrimp",
        "price": "$10.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fried butterfly Shrimp 8 breaded and deep-fried shrimp",
        "item_desc": ""
      },
      {
        "item": "Kimchi Fried Rice(김치 볶음밥) Fried rice stir-fried with kimchi and assorted vegetables.",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kimchi Fried Rice(김치 볶음밥) Fried rice stir-fried",
        "item_desc": "with kimchi and assorted vegetables."
      },
      {
        "item": "Bibimbap (비빔밥) Rice mixed with julienned vegetables , egg and choice of meat in red chili past or soy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Bibimbap (비빔밥) Rice mixed",
        "item_desc": "with julienned vegetables , egg and choice of meat in red chili past or soy sauce"
      },
      {
        "item": "Bulgogi (불고기) Grilled thinly sliced beef marinated in sweet soy, ginger, garlic, and sesame sauce.",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bulgogi (불고기) Grilled thinly sliced beef",
        "item_desc": "marinated in sweet soy, ginger, garlic, and sesame sauce."
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "$34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kalbi (갈비) Grilled beef short ribs",
        "item_desc": "marinated in sweet say, ginger, garlic, and sesame sauce."
      },
      {
        "item": "Pan-fried Pork (제육볶음) Pan-fried sliced pork mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pan-fried Pork (제육볶음) Pan-fried sliced pork mixed vegetables in",
        "item_desc": "sweet and spicy red pepper garlic sauce with wheat noodle"
      },
      {
        "item": "Pan-Fried Calamari (오징어 볶음) Panfried squid and mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pan-Fried Calamari (오징어 볶음) Panfried squid and mixed vegetables in",
        "item_desc": "sweet and spicy red pepper garlic sauce with wheat noodle"
      },
      {
        "item": "Bossam (보쌈) Boiled pork, salted napa cabbage, radish kimchi and salted shrimp",
        "price": "$39.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bossam (보쌈) Boiled pork, salted napa cabbage, radish kimchi and salted shrimp",
        "item_desc": ""
      },
      {
        "item": "Black bean fried rice(짜장 볶음밥) Black bean ragu with sauteed pork sauce over the fried rice",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Black bean fried rice(짜장 볶음밥) Black bean ragu",
        "item_desc": "with sauteed pork sauce over the fried rice"
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "$22.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "item_desc": ""
      },
      {
        "item": "Soft tofu stew (순두부 찌개) Spicy stew of soft tofu, red chili paste, assorted vegetables and choice of meat",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Soft tofu stew (순두부 찌개)",
        "item_desc": "Spicy stew of soft tofu, red chili paste, assorted vegetables and choice of meat"
      },
      {
        "item": "Black Bean Noodle(짜장면) Wheat noodles in black bean ragu with sauteed pork and vegetables",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Black Bean Noodle(짜장면) Wheat noodles in black bean ragu",
        "item_desc": "with sauteed pork and vegetables"
      },
      {
        "item": "Spicy Asian Noodle Cioppino (해물짬뽕) Wheat noodles in a spicy stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Spicy Asian Noodle Cioppino (해물짬뽕) Wheat noodles in a spicy stew with vegetables and choice of topping",
        "item_desc": ""
      },
      {
        "item": "Spicy Beef Stew (육개장) Shredded beef and vegetables in a spicy broth.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spicy Beef Stew (육개장) Shredded beef and vegetables in a spicy broth.",
        "item_desc": ""
      },
      {
        "item": "Jumbo Kalbi Tang (왕 갈비 탕) Beef rib soup with Jumbo beef rib, jujube, glass noodles, mushroom & sliced egg",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jumbo Kalbi Tang (왕 갈비 탕) Beef rib soup",
        "item_desc": "with Jumbo beef rib, jujube, glass noodles, mushroom & sliced egg"
      },
      {
        "item": "Pho Noodle Soup (쌀국수) Rice noodles in clear beef broth. Served with bean sprouts, thai basil, cilantro, and peppers.",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pho Noodle Soup (쌀국수) Rice noodles in clear beef broth.",
        "item_desc": "Served with bean sprouts, thai basil, cilantro, and peppers."
      },
      {
        "item": "non spicy asian noodle (백짬뽕) Wheat noodles in a white stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "non",
        "item_desc": "spicy asian noodle (백짬뽕) Wheat noodles in a white stew with vegetables and choice of topping"
      },
      {
        "item": "Curry Rice (카레 라이스) Vegetable Japanese curry",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Curry Rice (카레 라이스) Vegetable Japanese curry",
        "item_desc": ""
      },
      {
        "item": "Katsu with Curry (카레 돈까스) Katsu with vegetables Japanese curry",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Katsu",
        "item_desc": "with Curry (카레 돈까스) Katsu with vegetables Japanese curry"
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in",
        "item_desc": "sweet and tangy sauce"
      },
      {
        "item": "Cold Soba Noodle with Shrimp Tempura(새우튀김 냉모밀) Chilled buckwheat noodles garnished with radish, scallions & seaweed in Cold Katsuobushi broth and Shrimp Tempura",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cold Soba Noodle",
        "item_desc": "with Shrimp Tempura(새우튀김 냉모밀) Chilled buckwheat noodles garnished with radish, scallions & seaweed in Cold Katsuobushi broth and Shrimp Tempura"
      },
      {
        "item": "Sweet and Sour Pork (탕수육) Lightly battered and fried pork and vegetable mixed with sweet and sour glaze.",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sweet and Sour Pork (탕수육) Lightly battered and fried pork and vegetable mixed with sweet and sour glaze.",
        "item_desc": ""
      },
      {
        "item": "Sweet & sour chicken (치킨 탕수육) Lightly battered and fried chicken mixed vegetables with sweet & sour glaze",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sweet & sour chicken (치킨 탕수육) Lightly battered and fried chicken mixed vegetables with sweet & sour glaze",
        "item_desc": ""
      },
      {
        "item": "Fried rice (볶음밥) Fried rice with assorted vegetables and choice of meat",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Fried rice (볶음밥) Fried rice",
        "item_desc": "with assorted vegetables and choice of meat"
      },
      {
        "item": "Basil fried rice (베이즐 볶음밥) Fried rice with assorted vegetables and choice of meat with thai basil",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Basil fried rice (베이즐 볶음밥) Fried rice",
        "item_desc": "with assorted vegetables and choice of meat with thai basil"
      },
      {
        "item": "Katsu (돈까스) Panko breaded, deep-fried meat, and over white rice (chicken , pork, fish ).",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Katsu (돈까스) Panko breaded, deep-fried meat, and over white rice (chicken , pork, fish ).",
        "item_desc": ""
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "$25.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Bulgogi (치킨 불고기) Grilled chicken",
        "item_desc": "marinated in sweet soy sauce"
      },
      {
        "item": "Pork Bulgogi (돼지 불고기) Grilled thinly sliced pork marinated in sweet soy, ginger, garlic and sesame sauce",
        "price": "$26.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pork Bulgogi (돼지 불고기) Grilled thinly sliced pork",
        "item_desc": "marinated in sweet soy, ginger, garlic and sesame sauce"
      },
      {
        "item": "K1 BULGOGI BEEF Maki (불고기 롤) Beef marinated in bulgogi sauce, egg, carrots, cucumbers, mayo with onion",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "K1 BULGOGI BEEF Maki (불고기 롤) Beef",
        "item_desc": "marinated in bulgogi sauce, egg, carrots, cucumbers, mayo with onion"
      },
      {
        "item": "K3 YUBU Maki (유부 롤) V Marinated yubu(tofu skin), egg, carrots, radish pickle , mayo with onion",
        "price": "$11.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "K3 YUBU Maki (유부 롤) V",
        "item_desc": "Marinated yubu(tofu skin), egg, carrots, radish pickle , mayo with onion"
      },
      {
        "item": "K2 SHRIMP TEMPURA Maki (새우튀김 롤) Shrimp tempura, egg, carrots, cucumbers, mayo with onion",
        "price": "$12.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "K2 SHRIMP TEMPURA Maki (새우튀김 롤) Shrimp tempura, egg, carrots, cucumbers, mayo",
        "item_desc": "with onion"
      },
      {
        "item": "Brow Rice Whole grain brown rice.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brow Rice Whole grain brown rice.",
        "item_desc": ""
      },
      {
        "item": "Panchan (Single) Season Korean side dishes.",
        "price": "$6.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Panchan (Single) Season Korean side dishes.",
        "item_desc": ""
      },
      {
        "item": "Panchan (Set of Three) Season Korean side dishes.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Panchan (Set of Three) Season Korean side dishes.",
        "item_desc": ""
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "$2.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "White rice Steamed white rice",
        "item_desc": "served as a side dish."
      },
      {
        "item": "San Pelligrino Sparkling Water (16 oz)",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "San Pelligrino Sparkling Water (16 oz)",
        "item_desc": ""
      },
      {
        "item": "Boylan's (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Boylan's (12 oz)",
        "item_desc": ""
      },
      {
        "item": "San Pelligrino Limonata (11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "San Pelligrino Limonata (11.15 oz) can",
        "item_desc": ""
      },
      {
        "item": "Seagrams Ginger Ale (10 oz) Ginger-flavored ale",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seagrams Ginger Ale (10 oz) Ginger-flavored ale",
        "item_desc": ""
      },
      {
        "item": "Coca-Cola (12 oz) Classic cola flavor in a 12 oz",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Coca-Cola (12 oz)",
        "item_desc": "Classic cola flavor in a 12 oz"
      },
      {
        "item": "Sprite (12 oz)",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sprite (12 oz)",
        "item_desc": ""
      },
      {
        "item": "Coca-Cola Mexican Cola (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Coca-Cola Mexican Cola (12 oz)",
        "item_desc": ""
      },
      {
        "item": "Fiji Still Water (16 oz) Refreshing still water from Fiji, perfect for any occasion.",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fiji Still Water (16 oz) Refreshing still water from Fiji, perfect for any occasion.",
        "item_desc": ""
      },
      {
        "item": "Joe's Tea (20 oz) Refreshing brew served in a 20 oz cup.",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Joe's Tea (20 oz) Refreshing brew",
        "item_desc": "served in a 20 oz cup."
      },
      {
        "item": "Mott's Apple Juice (8 oz) 100% Juice , No Sugar added, NON-GMO",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mott's Apple Juice (8 oz) 100% Juice , No Sugar added, NON-GMO",
        "item_desc": ""
      },
      {
        "item": "Sanpellegrino sparkling Orange ( 11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sanpellegrino sparkling Orange ( 11.15 oz) can",
        "item_desc": ""
      },
      {
        "item": "Tropicana Orange Juice (10oz) 100 % Juice",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tropicana Orange Juice (10oz) 100 % Juice",
        "item_desc": ""
      }
    ]
  },
  {
    "name": "Beniamiono's Cucina",
    "items": [
      {
        "item": "Italian Antipasto",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Italian Antipasto",
        "item_desc": ""
      },
      {
        "item": "Caprese Skewers (25/50)",
        "price": "$35",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Caprese Skewers (25/50)",
        "item_desc": ""
      },
      {
        "item": "Vodka or Alfredo Choice of Pasta",
        "price": "$45",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Vodka or Alfredo Choice of Pasta",
        "item_desc": ""
      },
      {
        "item": "Baked Ziti",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Baked Ziti",
        "item_desc": ""
      },
      {
        "item": "ItalianAntipasto Skewers (25/50)",
        "price": "$45",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "ItalianAntipasto Skewers (25/50)",
        "item_desc": ""
      },
      {
        "item": "Fried Calamari",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fried Calamari",
        "item_desc": ""
      },
      {
        "item": "Clams Oreganato/Casino Puttanesca Choice of Pasta",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Clams Oreganato/Casino Puttanesca Choice of Pasta",
        "item_desc": ""
      },
      {
        "item": "Choiceof Sauce:PinkCreamorMarinara Puttanesca Choice of Pasta",
        "price": "$30",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Choiceof Sauce:PinkCreamorMarinara Puttanesca Choice of Pasta",
        "item_desc": ""
      },
      {
        "item": "Garlic Knots Puttanesca Choice of Pasta",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Garlic Knots Puttanesca Choice of Pasta",
        "item_desc": ""
      },
      {
        "item": "Rigatoni Bolognese Puttanesca Choice of Pasta. Mozzarella Sticks (20/40)",
        "price": "$35",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Rigatoni Bolognese Puttanesca Choice of Pasta. Mozzarella Sticks (20/40)",
        "item_desc": ""
      },
      {
        "item": "Meat Lasagna Puttanesca Choice of Pasta",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Meat Lasagna Puttanesca Choice of Pasta",
        "item_desc": ""
      },
      {
        "item": "Veggie Lasagna Puttanesca Choice of Pasta",
        "price": "$45",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Veggie Lasagna Puttanesca Choice of Pasta",
        "item_desc": ""
      },
      {
        "item": "Eggplant Rollatini (12/24) Puttanesca Choice of Pasta",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Eggplant Rollatini (12/24) Puttanesca Choice of Pasta",
        "item_desc": ""
      },
      {
        "item": "Stuffed Shells Puttanesca Choice of Pasta",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Stuffed Shells Puttanesca Choice of Pasta",
        "item_desc": ""
      },
      {
        "item": "Meatballs (20/40) Puttanesca Choice of Pasta",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Meatballs (20/40) Puttanesca Choice of Pasta",
        "item_desc": ""
      },
      {
        "item": "Manicotti Puttanesca Choice of Pasta. Jumbo Party Wings",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Manicotti Puttanesca Choice of Pasta. Jumbo Party Wings",
        "item_desc": ""
      },
      {
        "item": "Sausage,Peppers&Onion (rollsextra) Puttanesca Choice of Pasta",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sausage,Peppers&Onion (rollsextra) Puttanesca Choice of Pasta",
        "item_desc": ""
      },
      {
        "item": "(Half Tray 50 wings / Full Tray 100 Wings) Puttanesca Choice of Pasta",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "(Half Tray 50 wings / Full Tray 100 Wings) Puttanesca Choice of Pasta",
        "item_desc": ""
      },
      {
        "item": "Bufalo, BBQor Garlic Parmesan, Puttanesca Choice of Pasta",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bufalo, BBQor",
        "item_desc": "Garlic Parmesan, Puttanesca Choice of Pasta"
      },
      {
        "item": "Eggplant Parmigiano Puttanesca Choice of Pasta. Drunken Fried Gnocchi",
        "price": "$60",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Eggplant Parmigiano Puttanesca Choice of Pasta. Drunken Fried Gnocchi",
        "item_desc": ""
      },
      {
        "item": "Chicken Fingers & French Fries(20/40) Puttanesca Choice of Pasta. Vodka SauceToppedwithFreshMozzarella Half/Full",
        "price": "$52",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Fingers & French Fries(20/40) Puttanesca Choice of Pasta. Vodka SauceToppedwithFreshMozzarella Half/Full",
        "item_desc": ""
      },
      {
        "item": "with Orecchiette Caesar Salad",
        "price": "$35",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "with Orecchiette Caesar Salad",
        "item_desc": ""
      },
      {
        "item": "Tortellini Prosciutto E Piselli Arugula Salad",
        "price": "$60",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tortellini Prosciutto E Piselli Arugula Salad",
        "item_desc": ""
      },
      {
        "item": "RigatoniwithPestoCream Seasonal Salad",
        "price": "$55",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "RigatoniwithPestoCream Seasonal Salad",
        "item_desc": ""
      },
      {
        "item": "Cacciatore Chicken Entree",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cacciatore Chicken Entree",
        "item_desc": ""
      },
      {
        "item": "Tortellini Choice of Sauce Chicken Entree",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tortellini Choice of Sauce Chicken Entree",
        "item_desc": ""
      },
      {
        "item": "Francese Chicken Entree. 3ft/ 6ft Subs 2ayotiead",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Francese Chicken Entree. 3ft/ 6ft Subs 2ayotiead",
        "item_desc": ""
      },
      {
        "item": "Marsala Chicken Entree",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Marsala Chicken Entree",
        "item_desc": ""
      },
      {
        "item": "Parmigiano Chicken Entree. Piccata",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Parmigiano Chicken Entree. Piccata",
        "item_desc": ""
      },
      {
        "item": "Italian Chicken Entree. /145",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Italian Chicken Entree. /145",
        "item_desc": ""
      },
      {
        "item": "Turkey Chicken Entree. /145",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Turkey Chicken Entree. /145",
        "item_desc": ""
      },
      {
        "item": "Saltimbocca Chicken Entree. Chicken Cutlet s75/145",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Saltimbocca Chicken Entree. Chicken Cutlet s75/145",
        "item_desc": ""
      },
      {
        "item": "Roast Beef s Chicken Entree. /155",
        "price": "$80",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roast Beef s Chicken Entree. /155",
        "item_desc": ""
      },
      {
        "item": "Creamy Chicken Cutlet Marsala Chicken Entree",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Creamy Chicken Cutlet Marsala Chicken Entree",
        "item_desc": ""
      },
      {
        "item": "Vegetarian Chicken Entree. /145",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Vegetarian Chicken Entree. /145",
        "item_desc": ""
      },
      {
        "item": "Napolitano Chicken Entree. /175",
        "price": "$90",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Napolitano Chicken Entree. /175",
        "item_desc": ""
      },
      {
        "item": "Drunken Chicken Parmigiano Chicken Entree. VodkaSauce ToppedwithFreshMozzarella Grilled Chicken Italian s80/155",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Drunken Chicken Parmigiano Chicken Entree. VodkaSauce ToppedwithFreshMozzarella Grilled Chicken Italian s80/155",
        "item_desc": ""
      },
      {
        "item": "Tuna Chicken Entree. /145",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tuna Chicken Entree. /145",
        "item_desc": ""
      },
      {
        "item": "Chicken Caesar Veal Entree",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Caesar Veal Entree",
        "item_desc": ""
      },
      {
        "item": "Chicken Bacon Ranch Veal Entree",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Bacon Ranch Veal Entree",
        "item_desc": ""
      },
      {
        "item": "Cacciatore Veal Entree",
        "price": "$90",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cacciatore Veal Entree",
        "item_desc": ""
      },
      {
        "item": "Francese Veal Entree",
        "price": "$90",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Francese Veal Entree",
        "item_desc": ""
      },
      {
        "item": "Chicken Buffalo Veal Entree",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Buffalo Veal Entree",
        "item_desc": ""
      },
      {
        "item": "Chicken BBQ Veal Entree",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken BBQ Veal Entree",
        "item_desc": ""
      },
      {
        "item": "Marsala Veal Entree",
        "price": "$90",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Marsala Veal Entree",
        "item_desc": ""
      },
      {
        "item": "Chicken Fingers Veal Entree",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Fingers Veal Entree",
        "item_desc": ""
      },
      {
        "item": "Roast Beef Bacon Veal Entree",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roast Beef Bacon Veal Entree",
        "item_desc": ""
      },
      {
        "item": "Milanese Veal Entree",
        "price": "$90",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Milanese Veal Entree",
        "item_desc": ""
      },
      {
        "item": "Spicy Fried Eggplant Veal Entree",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spicy Fried Eggplant Veal Entree",
        "item_desc": ""
      },
      {
        "item": "Parmigiano Veal Entree. Sub Platters",
        "price": "$90",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Parmigiano Veal Entree. Sub Platters",
        "item_desc": ""
      },
      {
        "item": "Piccata Veal Entree. Chooseupto3optionspertray",
        "price": "$90",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Piccata Veal Entree. Chooseupto3optionspertray",
        "item_desc": ""
      },
      {
        "item": "Saltimbocca Veal Entree. Italian S75",
        "price": "$100",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Saltimbocca Veal Entree. Italian S75",
        "item_desc": ""
      },
      {
        "item": "Roast Beef Tray",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roast Beef Tray",
        "item_desc": ""
      },
      {
        "item": "Chicken Cutlet",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Cutlet",
        "item_desc": ""
      },
      {
        "item": "Napolitano",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Napolitano",
        "item_desc": ""
      },
      {
        "item": "Grilled Salmon",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Grilled Salmon",
        "item_desc": ""
      },
      {
        "item": "Salmon Puttanesca",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Salmon Puttanesca",
        "item_desc": ""
      },
      {
        "item": "Chicken Italiano",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Italiano",
        "item_desc": ""
      },
      {
        "item": "Salmon Piccata",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Salmon Piccata",
        "item_desc": ""
      },
      {
        "item": "Shrimp Choice of sauce Fra Diavolo, Francese, Parmigianoor Scampi",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Choice of sauce",
        "item_desc": "Fra Diavolo, Francese, Parmigianoor Scampi"
      },
      {
        "item": "Tiramisu Serves 12-15 people Scallops Choice of sauce Market Large Cannoli",
        "price": "$48",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tiramisu Serves 12-15 people Scallops Choice of sauce Market Large Cannoli",
        "item_desc": ""
      },
      {
        "item": "Mussels or Clams Choice of sauce New York Style Cheesecake Market price Bianco, Fra Diavolo or Marinara",
        "price": "$60",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mussels or Clams Choice of sauce New York Style Cheesecake Market price Bianco, Fra Diavolo or Marinara",
        "item_desc": ""
      },
      {
        "item": "Mussels & Clams Mixed Choice of sauce Market price",
        "price": "$60",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mussels & Clams Mixed Choice of sauce Market price",
        "item_desc": ""
      }
    ]
  },
  {
    "name": "Brick House Tavern",
    "items": [
      {
        "item": "California Chicken Club Triple layered toasted sourdough bread, blackened California Chicken Club",
        "price": "$ 17",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "California Chicken Club Triple layered toasted",
        "item_desc": "sourdough bread, blackened California Chicken Club"
      },
      {
        "item": "Southern Fried Southern Fried Chicken Sandwich",
        "price": "$ 16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Southern Fried Southern Fried Chicken Sandwich",
        "item_desc": ""
      },
      {
        "item": "Philly Cheesesteak Ribeye & Provolone cheese with onions & peppers. $ 17 Philly Cheesesteak",
        "price": "$ 17",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Philly Cheesesteak Ribeye & Provolone cheese",
        "item_desc": "with onions & peppers. $ 17 Philly Cheesesteak"
      },
      {
        "item": "Fig & Pig Prosciutto creamy goat cheese, fig preserves, sliced figs, Fig & Pig",
        "price": "$ 16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fig & Pig Prosciutto",
        "item_desc": "creamy goat cheese, fig preserves, sliced figs, Fig & Pig"
      },
      {
        "item": "Wild Mushroom Wild mushrooms, parmesan, brick cheese, arugula Wild Mushroom",
        "price": "$ 17.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Wild Mushroom Wild mushrooms, parmesan, brick cheese, arugula Wild Mushroom",
        "item_desc": ""
      },
      {
        "item": "MVP Pepperoni classic meatballs, ham, candied bacon MVP",
        "price": "$ 18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "MVP Pepperoni",
        "item_desc": "classic meatballs, ham, candied bacon MVP"
      },
      {
        "item": "Pepperoni Hand-cut pepperoni & brick cheese. $ 16.50 Pepperoni",
        "price": "$ 16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pepperoni Hand-cut pepperoni & brick cheese. $ 16.50 Pepperoni",
        "item_desc": ""
      },
      {
        "item": "Fries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fries",
        "item_desc": ""
      },
      {
        "item": "Sweet Potato Tots",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Sweet Potato Tots",
        "item_desc": ""
      },
      {
        "item": "Broccoli",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Broccoli",
        "item_desc": ""
      },
      {
        "item": "Jasmine Rice",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jasmine Rice",
        "item_desc": ""
      },
      {
        "item": "Coleslaw",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Coleslaw",
        "item_desc": ""
      },
      {
        "item": "Cheddar Mashed Potatoes",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Cheddar Mashed Potatoes",
        "item_desc": ""
      },
      {
        "item": "Southern Green Beans",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Southern Green Beans",
        "item_desc": ""
      },
      {
        "item": "Macaroni and Cheese",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Macaroni and Cheese",
        "item_desc": ""
      },
      {
        "item": "Grilled Shrimp",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Grilled Shrimp",
        "item_desc": ""
      },
      {
        "item": "Fried Shrimp",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fried Shrimp",
        "item_desc": ""
      },
      {
        "item": "St. Louis Style St. Louis Style Pork Spareribs",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "St. Louis Style St. Louis Style Pork Spareribs",
        "item_desc": ""
      },
      {
        "item": "Mixed Berries Cheesecake New York style cheesecake with seasonal berries, Mixed Berries Cheesecake",
        "price": "$ 11",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mixed Berries Cheesecake New York style cheesecake",
        "item_desc": "with seasonal berries, Mixed Berries Cheesecake"
      },
      {
        "item": "Apple Crumble Granny Smith apples, caramel sauce & vanilla ice cream. $ 9.50 Apple Crumble",
        "price": "$ 9.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Apple Crumble Granny Smith apples, caramel sauce & vanilla ice cream. $ 9.50 Apple Crumble",
        "item_desc": ""
      },
      {
        "item": "Ultimate Brownie Warm chocolate walnut brownie, vanilla ice cream, Ultimate Brownie",
        "price": "$ 9.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Ultimate Brownie Warm chocolate walnut brownie, vanilla ice cream, Ultimate Brownie",
        "item_desc": ""
      },
      {
        "item": "Homerun App Classic meatballs, chicken tenders, white queso and Homerun App",
        "price": "$ 23",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Homerun App",
        "item_desc": "Classic meatballs, chicken tenders, white queso and Homerun App"
      },
      {
        "item": "Spiked Calamari Tossed with cherry peppers & a side of spicy marinara. $ 15 Spiked Calamari",
        "price": "$ 15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spiked Calamari Tossed",
        "item_desc": "with cherry peppers & a side of spicy marinara. $ 15 Spiked Calamari"
      },
      {
        "item": "House Baked Jumbo Pretzel Salted pretzel with white queso & sriracha ranch. $ 12.50 House Baked Jumbo Pretzel",
        "price": "$ 12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "House Baked Jumbo Pretzel Salted pretzel",
        "item_desc": "with white queso & sriracha ranch. $ 12.50 House Baked Jumbo Pretzel"
      },
      {
        "item": "Loaded Game Day Nachos Choice of chicken or spicy beef, black beans, Loaded Game Day Nachos",
        "price": "$ 20",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Loaded Game Day Nachos Choice of chicken or",
        "item_desc": "spicy beef, black beans, Loaded Game Day Nachos"
      },
      {
        "item": "White Queso and Chips With pico de gallo. $ 10.50 White Queso and Chips",
        "price": "$ 10.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "White Queso and Chips",
        "item_desc": "With pico de gallo. $ 10.50 White Queso and Chips"
      },
      {
        "item": "Classic Meatballs Ground beef & pork, spicy marinara, grated parmesan Classic Meatballs",
        "price": "$ 12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Classic Meatballs Ground beef & pork, spicy marinara, grated parmesan Classic Meatballs",
        "item_desc": ""
      },
      {
        "item": "Fried Deviled Eggs Golden fried egg whites, candied bacon, jalapeño & Fried Deviled Eggs",
        "price": "$ 11",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fried Deviled Eggs Golden fried egg whites, candied bacon, jalapeño & Fried Deviled Eggs",
        "item_desc": ""
      },
      {
        "item": "Mozzarella Bricks Hand cut, panko parmesan crusted mozzarella Mozzarella Bricks",
        "price": "$ 12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mozzarella Bricks Hand cut, panko parmesan crusted mozzarella Mozzarella Bricks",
        "item_desc": ""
      },
      {
        "item": "Knockout Shrimp Lightly fried shrimp with our sweet & spicy knockout Knockout Shrimp",
        "price": "$ 15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Knockout Shrimp Lightly fried shrimp",
        "item_desc": "with our sweet & spicy knockout Knockout Shrimp"
      },
      {
        "item": "Duck Wings Crispy duck wings, brick sauce & cilantro with Duck Wings",
        "price": "$ 18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Duck Wings",
        "item_desc": "Crispy duck wings, brick sauce & cilantro with Duck Wings"
      },
      {
        "item": "Shrimp Salad Choice of grilled or Cajun spiced shrimp, mesclun mix, Shrimp Salad",
        "price": "$ 19.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Salad Choice of grilled or Cajun spiced shrimp, mesclun mix, Shrimp Salad",
        "item_desc": ""
      },
      {
        "item": "Thai Chicken Salad Chicken, red bell peppers, Napa cabbage, cilantro, Thai Chicken Salad",
        "price": "$ 18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Thai Chicken Salad Chicken, red bell peppers, Napa cabbage, cilantro, Thai Chicken Salad",
        "item_desc": ""
      },
      {
        "item": "House or Caesar Salad $ 8.50 House or Caesar Salad",
        "price": "$ 8.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "House or Caesar Salad $ 8.50 House or Caesar Salad",
        "item_desc": ""
      },
      {
        "item": "cup Brick House Chili",
        "price": "$ 9.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "cup Brick House Chili",
        "item_desc": ""
      },
      {
        "item": "cup Soup of the Day",
        "price": "$ 8",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "cup Soup of the Day",
        "item_desc": ""
      },
      {
        "item": "Soup & Salad Soup of the Day with choice of House, Caesar, Soup & Salad",
        "price": "$ 16",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Soup & Salad Soup of the Day",
        "item_desc": "with choice of House, Caesar, Soup & Salad"
      },
      {
        "item": "Fish & Chips Beer battered wild caught white fish served with malt Fish & Chips",
        "price": "$ 19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fish & Chips Beer battered wild caught white fish",
        "item_desc": "served with malt Fish & Chips"
      },
      {
        "item": "Mahi Mahi Grilled or blackened wild caught Mahi Mahi, roasted Mahi Mahi",
        "price": "$ 23",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mahi Mahi Grilled or blackened wild caught Mahi Mahi, roasted Mahi Mahi",
        "item_desc": ""
      },
      {
        "item": "Seared Atlantic Salmon* Jasmine rice & green beans. $ 22 Seared Atlantic Salmon*",
        "price": "$ 22",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seared Atlantic Salmon* Jasmine rice & green beans. $ 22 Seared Atlantic Salmon*",
        "item_desc": ""
      },
      {
        "item": "Add House Salad, Caesar Salad Add House Salad, Caesar Salad or Cup of Soup of the Day",
        "price": "$ 6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Add House Salad, Caesar Salad Add House Salad, Caesar Salad or Cup of Soup of the Day",
        "item_desc": ""
      },
      {
        "item": "5 Wings $ 11 5 Wings",
        "price": "$ 11",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "5 Wings $ 11 5 Wings",
        "item_desc": ""
      },
      {
        "item": "10 Wings $ 20 10 Wings",
        "price": "$ 20",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "10 Wings $ 20 10 Wings",
        "item_desc": ""
      },
      {
        "item": "20 Wings $ 38 20 Wings",
        "price": "$ 38",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "20 Wings $ 38 20 Wings",
        "item_desc": ""
      },
      {
        "item": "Tavern BBQ Sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tavern BBQ Sauce",
        "item_desc": ""
      },
      {
        "item": "Buffalo Sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Buffalo Sauce",
        "item_desc": ""
      },
      {
        "item": "Brick Sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brick Sauce",
        "item_desc": ""
      },
      {
        "item": "Lemon Pepper",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lemon Pepper",
        "item_desc": ""
      },
      {
        "item": "Nashville Hot",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Nashville Hot",
        "item_desc": ""
      },
      {
        "item": "Hot Honey",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hot Honey",
        "item_desc": ""
      },
      {
        "item": "Add A Patty $ 5 Add A Patty",
        "price": "$ 5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Add A Patty $ 5 Add A Patty",
        "item_desc": ""
      },
      {
        "item": "Brick Burger Classic The classic double patty with American cheese, Brick Burger Classic",
        "price": "$ 17",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Brick Burger",
        "item_desc": "Classic The classic double patty with American cheese, Brick Burger Classic"
      },
      {
        "item": "Triple Play Cheeseburger Triple decker, American cheese, Provolone cheese, Triple Play Cheeseburger",
        "price": "$ 19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Triple Play Cheeseburger Triple decker, American cheese, Provolone cheese, Triple Play Cheeseburger",
        "item_desc": ""
      },
      {
        "item": "South Paw Double patty, guacamole, caramelized red onions, South Paw",
        "price": "$ 18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "South Paw Double patty, guacamole, caramelized red onions, South Paw",
        "item_desc": ""
      },
      {
        "item": "No Bun Intended Bunless, double patty, shaved ham, bacon, white No Bun Intended",
        "price": "$ 18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "No Bun Intended Bunless, double patty, shaved ham, bacon, white No Bun Intended",
        "item_desc": ""
      },
      {
        "item": "Beyond Burger® Plant-based burger, smoked Provolone cheese, grilled Beyond Burger®",
        "price": "$ 18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Beyond Burger® Plant-based burger, smoked Provolone cheese, grilled Beyond Burger®",
        "item_desc": ""
      },
      {
        "item": "Colossal Burger 4 Decker Burger, cheddar, Colossal Burger",
        "price": "$ 24",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Colossal Burger 4 Decker Burger, cheddar, Colossal Burger",
        "item_desc": ""
      },
      {
        "item": "Mushrooms",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Mushrooms",
        "item_desc": ""
      },
      {
        "item": "Caramelized Caramelized Red Onions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Caramelized Caramelized Red Onions",
        "item_desc": ""
      },
      {
        "item": "Jalapeños",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jalapeños",
        "item_desc": ""
      },
      {
        "item": "Pico de Gallo",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pico de Gallo",
        "item_desc": ""
      },
      {
        "item": "Fried Egg",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fried Egg",
        "item_desc": ""
      },
      {
        "item": "Bacon",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bacon",
        "item_desc": ""
      },
      {
        "item": "Guacamole",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Guacamole",
        "item_desc": ""
      },
      {
        "item": "BBQ Ribs Half rack of St. Louis style pork spareribs, Tavern BBQ BBQ Ribs",
        "price": "$ 29",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "BBQ Ribs Half rack of St. Louis style pork spareribs, Tavern BBQ BBQ Ribs",
        "item_desc": ""
      },
      {
        "item": "Chicken & Waffles Homemade Belgian waffles, hand battered Chicken & Waffles",
        "price": "$ 18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken & Waffles Homemade Belgian waffles, hand battered Chicken & Waffles",
        "item_desc": ""
      },
      {
        "item": "Chicken Tenders Hand battered crispy tenders with Chicken Tenders",
        "price": "$ 16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Tenders Hand battered",
        "item_desc": "crispy tenders with Chicken Tenders"
      },
      {
        "item": "Chicken Pot Pie Pulled chicken, red potatoes, peas, thyme, Chicken Pot Pie",
        "price": "$ 18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Pot Pie Pulled chicken, red potatoes, peas, thyme, Chicken Pot Pie",
        "item_desc": ""
      },
      {
        "item": "Ribeye Steak* 12oz Ribeye steak with garlic butter, cheddar mashed potatoes & broccoli. $ 35 Ribeye Steak*",
        "price": "$ 35",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Ribeye Steak* 12oz Ribeye steak",
        "item_desc": "with garlic butter, cheddar mashed potatoes & broccoli. $ 35 Ribeye Steak*"
      },
      {
        "item": "Sirloin Steak* 8 oz Sirloin steak marinated for 24 hours, Sirloin Steak*",
        "price": "$ 24",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sirloin Steak* 8 oz Sirloin steak",
        "item_desc": "marinated for 24 hours, Sirloin Steak*"
      },
      {
        "item": "Drunken Chops Two brined center cut pork chops with whiskey glaze, Drunken Chops",
        "price": "$ 30",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Drunken Chops Two brined center cut pork chops",
        "item_desc": "with whiskey glaze, Drunken Chops"
      },
      {
        "item": "Baked Rigatoni Pasta Spicy basil marinara sauce, mozzarella cheese, topped Baked Rigatoni Pasta",
        "price": "$ 20",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Baked Rigatoni Pasta",
        "item_desc": "Spicy basil marinara sauce, mozzarella cheese, topped Baked Rigatoni Pasta"
      },
      {
        "item": "Add House Salad, Caesar Salad or Cup of Soup of the Day $ 6 Add House Salad, Caesar Salad or Cup of Soup of the Day",
        "price": "$ 6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Add House Salad, Caesar Salad or Cup of Soup of the Day $ 6 Add House Salad, Caesar Salad or Cup of Soup of the Day",
        "item_desc": ""
      },
      {
        "item": "Call Me Old Fashioned Woodford Reserve Bourbon Whiskey, Call Me Old Fashioned",
        "price": "$ 13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Call Me Old Fashioned Woodford Reserve Bourbon Whiskey, Call Me Old Fashioned",
        "item_desc": ""
      },
      {
        "item": "Up in Smoke Bulleit Straight American Rye Whiskey, Up in Smoke",
        "price": "$ 13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Up in Smoke Bulleit Straight American Rye Whiskey, Up in Smoke",
        "item_desc": ""
      },
      {
        "item": "Manhattan Maker’s Mark Bourbon Whisky sweet vermouth, Manhattan",
        "price": "$ 14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Manhattan Maker’s Mark Bourbon Whisky",
        "item_desc": "sweet vermouth, Manhattan"
      },
      {
        "item": "Luxury Rita Patrón Silver Tequila, Cointreau Orange Liqueur, Luxury Rita",
        "price": "$ 15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Luxury Rita Patrón Silver Tequila, Cointreau Orange Liqueur, Luxury Rita",
        "item_desc": ""
      },
      {
        "item": "Mi Casa Margarita Casamigos Blanco Tequila, Cointreau Orange Liqueur, Mi Casa Margarita",
        "price": "$ 14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mi Casa Margarita Casamigos Blanco Tequila, Cointreau Orange Liqueur, Mi Casa Margarita",
        "item_desc": ""
      },
      {
        "item": "Watermelon Sunrise Don Julio Blanco Tequila, triple sec, Red Bull Red Edition, Watermelon Sunrise",
        "price": "$ 13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Watermelon Sunrise Don Julio Blanco Tequila, triple sec, Red Bull Red Edition, Watermelon Sunrise",
        "item_desc": ""
      },
      {
        "item": "Ranch Water Teremana Resposado Tequila, Topo Chico, lime juice $ 14.50 Ranch Water",
        "price": "$ 14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Ranch Water Teremana Resposado Tequila, Topo Chico, lime juice $ 14.50 Ranch Water",
        "item_desc": ""
      },
      {
        "item": "Blackberry Collins Tito’s Handmade Vodka, St-Germain Elderflower Liqueur, Blackberry Collins",
        "price": "$ 11.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Blackberry Collins Tito’s Handmade Vodka, St-Germain Elderflower Liqueur, Blackberry Collins",
        "item_desc": ""
      },
      {
        "item": "Crown Apple Mule Crown Royal Regal Apple Whisky, Crown Apple Mule",
        "price": "$ 14",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Crown Apple Mule Crown Royal Regal Apple Whisky, Crown Apple Mule",
        "item_desc": ""
      },
      {
        "item": "Moscow Mule Tito’s Handmade Vodka, Fever-Tree Ginger Beer, Moscow Mule",
        "price": "$ 10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Moscow Mule Tito’s Handmade Vodka, Fever-Tree Ginger Beer, Moscow Mule",
        "item_desc": ""
      },
      {
        "item": "Raspberry Mule Svedka Raspberry Vodka, Fever-Tree Ginger Beer, Raspberry Mule",
        "price": "$ 11.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Raspberry Mule Svedka Raspberry Vodka, Fever-Tree Ginger Beer, Raspberry Mule",
        "item_desc": ""
      },
      {
        "item": "Bullish Mule Tito's Handmade Vodka fresh lime juice, Bullish Mule",
        "price": "$ 13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bullish Mule Tito's Handmade Vodka",
        "item_desc": "fresh lime juice, Bullish Mule"
      },
      {
        "item": "Mango Mojito Cruzan Mango Rum, Monin Mojito Syrup, triple sec, Mango Mojito",
        "price": "$ 10.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mango Mojito Cruzan Mango Rum, Monin Mojito Syrup, triple sec, Mango Mojito",
        "item_desc": ""
      },
      {
        "item": "Sparkling Sangria New Amsterdam Mango Vodka, La Marca Prosecco, Sparkling Sangria",
        "price": "$ 12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sparkling Sangria New Amsterdam Mango Vodka, La Marca Prosecco, Sparkling Sangria",
        "item_desc": ""
      },
      {
        "item": "Game Day Punch Bacardí Superior Rum, Fever-Tree Ginger Ale, Game Day Punch",
        "price": "$ 13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Game Day Punch Bacardí Superior Rum, Fever-Tree Ginger Ale, Game Day Punch",
        "item_desc": ""
      },
      {
        "item": "Unneccessary Freshness Bulleit Bourbon, triple sec, pineapple & lime juices, Unneccessary Freshness",
        "price": "$ 15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Unneccessary Freshness Bulleit Bourbon, triple sec, pineapple & lime juices, Unneccessary Freshness",
        "item_desc": ""
      },
      {
        "item": "Loaded Strawberry Lemonade Grey Goose Vodka, Reál Strawberry Purée, Loaded Strawberry Lemonade",
        "price": "$ 13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Loaded Strawberry Lemonade Grey Goose Vodka, Reál Strawberry Purée, Loaded Strawberry Lemonade",
        "item_desc": ""
      },
      {
        "item": "Espresso Martini Smirnoff Vanilla Vodka, Kahlúa Coffee Liqueur, Espresso Martini",
        "price": "$ 14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Espresso Martini Smirnoff Vanilla Vodka, Kahlúa Coffee Liqueur, Espresso Martini",
        "item_desc": ""
      },
      {
        "item": "Bloody Good Mary Tito’s Handmade Vodka, Zing Zang Bloody Mary Mix, Bloody Good Mary",
        "price": "$ 13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bloody Good Mary Tito’s Handmade Vodka, Zing Zang Bloody Mary Mix, Bloody Good Mary",
        "item_desc": ""
      },
      {
        "item": "Zombie Bacardí Superior Rum, Don Q 151 Rum, Zombie",
        "price": "$ 12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Zombie Bacardí Superior Rum, Don Q 151 Rum, Zombie",
        "item_desc": ""
      },
      {
        "item": "Bud Light",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bud Light",
        "item_desc": ""
      },
      {
        "item": "Budweiser",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Budweiser",
        "item_desc": ""
      },
      {
        "item": "Coors Light",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Coors Light",
        "item_desc": ""
      },
      {
        "item": "Corona Extra",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Corona Extra",
        "item_desc": ""
      },
      {
        "item": "Heineken 0.0 Heineken 0.0 (Non-Alcoholic)",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Heineken 0.0 Heineken 0.0 (Non-Alcoholic)",
        "item_desc": ""
      },
      {
        "item": "Heineken",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Heineken",
        "item_desc": ""
      },
      {
        "item": "High Noon High Noon Hard Seltzers (Varies By Location)",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "High Noon High Noon Hard Seltzers (Varies By Location)",
        "item_desc": ""
      },
      {
        "item": "Michelob Ultra",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Michelob Ultra",
        "item_desc": ""
      },
      {
        "item": "Miller Lite",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Miller Lite",
        "item_desc": ""
      },
      {
        "item": "Modelo Especial",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Modelo Especial",
        "item_desc": ""
      },
      {
        "item": "Bell’s Brewery Bell’s Brewery Two Hearted IPA",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bell’s Brewery Bell’s Brewery Two Hearted IPA",
        "item_desc": ""
      },
      {
        "item": "Blue Moon Blue Moon Belgian White Ale",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Blue Moon Blue Moon Belgian White Ale",
        "item_desc": ""
      },
      {
        "item": "Dos Equis Especial Lager",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Dos Equis Especial Lager",
        "item_desc": ""
      },
      {
        "item": "Elysian Space Dust IPA",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Elysian Space Dust IPA",
        "item_desc": ""
      },
      {
        "item": "Guinness Draught Stout",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Guinness Draught Stout",
        "item_desc": ""
      },
      {
        "item": "Kona Big Wave Golden Ale",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kona Big Wave Golden Ale",
        "item_desc": ""
      },
      {
        "item": "Pacifico",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pacifico",
        "item_desc": ""
      },
      {
        "item": "Samuel Adams Samuel Adams (Seasonal)",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Samuel Adams Samuel Adams (Seasonal)",
        "item_desc": ""
      },
      {
        "item": "Shiner Bock",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shiner Bock",
        "item_desc": ""
      },
      {
        "item": "Stella Artois",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Stella Artois",
        "item_desc": ""
      },
      {
        "item": "Yuengling",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Yuengling",
        "item_desc": ""
      },
      {
        "item": "New Belgium New Belgium Voodoo Ranger Juicy Haze IPA",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "New Belgium New Belgium Voodoo Ranger Juicy Haze IPA",
        "item_desc": ""
      },
      {
        "item": "glass Carmel Road",
        "price": "$ 13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "glass Carmel Road",
        "item_desc": ""
      },
      {
        "item": "glass Ecco Domani",
        "price": "$ 10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "glass Ecco Domani",
        "item_desc": ""
      },
      {
        "item": "glass Decoy by Duckhorn",
        "price": "$ 14",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "glass Decoy by Duckhorn",
        "item_desc": ""
      },
      {
        "item": "(Bottle) Sonoma-Cutrer 'Russian River Ranches'",
        "price": "$ 42",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "(Bottle) Sonoma-Cutrer 'Russian River Ranches'",
        "item_desc": ""
      },
      {
        "item": "glass La Marca",
        "price": "$ 12",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "glass La Marca",
        "item_desc": ""
      },
      {
        "item": "(Split) Chandon Rosé",
        "price": "$ 13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "(Split) Chandon Rosé",
        "item_desc": ""
      },
      {
        "item": "(Half Bottle) Veuve Clicquot 'Yellow Label'",
        "price": "$ 59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "(Half Bottle) Veuve Clicquot 'Yellow Label'",
        "item_desc": ""
      },
      {
        "item": "Monday Friday 3pm-6pm",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Monday",
        "item_desc": "Friday 3pm-6pm"
      },
      {
        "item": "Knockout Shrimp $ 7 Knockout Shrimp",
        "price": "$ 7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Knockout Shrimp $ 7 Knockout Shrimp",
        "item_desc": ""
      },
      {
        "item": "Fried Deviled Eggs $ 5 Fried Deviled Eggs",
        "price": "$ 5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fried Deviled Eggs $ 5 Fried Deviled Eggs",
        "item_desc": ""
      },
      {
        "item": "Tavern Wings (Pick Your Flavor Pick Your Spice Level) $ 8.50 Tavern Wings",
        "price": "$ 8.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tavern Wings (Pick Your Flavor",
        "item_desc": "Pick Your Spice Level) $ 8.50 Tavern Wings"
      },
      {
        "item": "Classic Meatballs $ 5.75 Classic Meatballs",
        "price": "$ 5.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Classic Meatballs $ 5.75 Classic Meatballs",
        "item_desc": ""
      },
      {
        "item": "White Queso and Chips $ 4.75 White Queso and Chips",
        "price": "$ 4.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "White Queso and Chips $ 4.75 White Queso and Chips",
        "item_desc": ""
      },
      {
        "item": "House Baked Jumbo Pretzel $ 5.50 House Baked Jumbo Pretzel",
        "price": "$ 5.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "House Baked Jumbo Pretzel $ 5.50 House Baked Jumbo Pretzel",
        "item_desc": ""
      },
      {
        "item": "Spiked Calamari $ 7 Spiked Calamari",
        "price": "$ 7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spiked Calamari $ 7 Spiked Calamari",
        "item_desc": ""
      },
      {
        "item": "Duck Wings $ 8.50 Duck Wings",
        "price": "$ 8.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Duck Wings $ 8.50 Duck Wings",
        "item_desc": ""
      },
      {
        "item": "Mozzarella Bricks $ 5.75 Mozzarella Bricks",
        "price": "$ 5.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mozzarella Bricks $ 5.75 Mozzarella Bricks",
        "item_desc": ""
      },
      {
        "item": "Well Spirits Domestic Draft Pints",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Well Spirits",
        "item_desc": "Domestic Draft Pints"
      },
      {
        "item": "Imports & Craft Draft Pints",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Imports & Craft Draft Pints",
        "item_desc": ""
      },
      {
        "item": "Tito’s Handmade Vodka Bacardi Superior Rum",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tito’s Handmade Vodka",
        "item_desc": "Bacardi Superior Rum"
      },
      {
        "item": "Tanqueray Gin Jack Daniel’s Whiskey",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tanqueray Gin",
        "item_desc": "Jack Daniel’s Whiskey"
      },
      {
        "item": "Captain Morgan Spiced Rum Jose Cuervo Gold Tequila",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Captain Morgan Spiced Rum",
        "item_desc": "Jose Cuervo Gold Tequila"
      },
      {
        "item": "House Gold Margarita Mango Mojito | Moscow Mule",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "House Gold Margarita",
        "item_desc": "Mango Mojito | Moscow Mule"
      },
      {
        "item": "Sparkling Sangria Call Me Old Fashioned",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sparkling Sangria",
        "item_desc": "Call Me Old Fashioned"
      },
      {
        "item": "Deviled Eggs Hardboiled eggs, candied bacon, jalapeño & paprika. Deviled Eggs",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Deviled Eggs Hardboiled eggs, candied bacon, jalapeño & paprika. Deviled Eggs",
        "item_desc": ""
      },
      {
        "item": "Tavern Wings A full pound with buffalo or brick sauce, served with ranch, blue cheese or sriracha ranch. Tavern Wings",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Tavern Wings A full pound",
        "item_desc": "with buffalo or brick sauce, served with ranch, blue cheese or sriracha ranch. Tavern Wings"
      },
      {
        "item": "HOUSE SALAD Mixed greens, tomatoes, cheddar cheese HOUSE SALAD",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "HOUSE SALAD Mixed greens, tomatoes, cheddar cheese HOUSE SALAD",
        "item_desc": ""
      },
      {
        "item": "Thai Chicken Salad Chicken, red bell peppers, napa cabbage, cilantro, peanut sauce & honey lime vinaigrette. Thai Chicken Salad",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Thai Chicken Salad Chicken, red bell peppers, napa cabbage, cilantro, peanut sauce & honey lime vinaigrette. Thai Chicken Salad",
        "item_desc": ""
      },
      {
        "item": "Shrimp Salad Choice of grilled or Cajun spiced shrimp, Shrimp Salad",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Salad Choice of grilled or Cajun spiced shrimp, Shrimp Salad",
        "item_desc": ""
      },
      {
        "item": "CAESAR Crisp romaine, Caesar dressing, CAESAR",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "CAESAR Crisp romaine, Caesar dressing, CAESAR",
        "item_desc": ""
      },
      {
        "item": "Mahi Mahi Grilled or blackened wild caught Mahi Mahi, roasted Mahi Mahi",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mahi Mahi Grilled or blackened wild caught Mahi Mahi, roasted Mahi Mahi",
        "item_desc": ""
      },
      {
        "item": "Seared Atlantic Salmon Seared Atlantic Salmon, jasmine rice & Seared Atlantic Salmon",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seared Atlantic Salmon Seared Atlantic Salmon, jasmine rice & Seared Atlantic Salmon",
        "item_desc": ""
      },
      {
        "item": "Ribeye Steak* 12oz Ribeye steak with garlic butter, cheddar mashed potatoes & broccoli. Ribeye Steak*",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Ribeye Steak* 12oz Ribeye steak",
        "item_desc": "with garlic butter, cheddar mashed potatoes & broccoli. Ribeye Steak*"
      },
      {
        "item": "Southern Green Southern Green Beans",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Southern Green Southern Green Beans",
        "item_desc": ""
      },
      {
        "item": "Cheddar Mashed Cheddar Mashed Potatoes",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Cheddar Mashed Cheddar Mashed Potatoes",
        "item_desc": ""
      },
      {
        "item": "MONDAY FRIDAY 3pm-6pm",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "MONDAY",
        "item_desc": "FRIDAY 3pm-6pm"
      },
      {
        "item": "Fried Deviled Eggs",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fried Deviled Eggs",
        "item_desc": ""
      },
      {
        "item": "House Baked Jumbo Pretzel",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "House Baked Jumbo Pretzel",
        "item_desc": ""
      },
      {
        "item": "Knockout Shrimp",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Knockout Shrimp",
        "item_desc": ""
      },
      {
        "item": "Domestic Draft Pints",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Domestic Draft Pints",
        "item_desc": ""
      },
      {
        "item": "Well Spirits",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Well Spirits",
        "item_desc": ""
      },
      {
        "item": "$5 Imports & Craft Draft Pints",
        "price": "$5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$5 Imports & Craft Draft Pints",
        "item_desc": ""
      },
      {
        "item": "$7 Select Wines by The Glass",
        "price": "$7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$7 Select Wines by The Glass",
        "item_desc": ""
      },
      {
        "item": "Moscow Mule",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Moscow Mule",
        "item_desc": ""
      },
      {
        "item": "Mango Mojito",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mango Mojito",
        "item_desc": ""
      },
      {
        "item": "House Gold Margarita",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "House Gold Margarita",
        "item_desc": ""
      },
      {
        "item": "Twisted Old Fashioned",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Twisted Old Fashioned",
        "item_desc": ""
      },
      {
        "item": "Sparkling Sangria",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sparkling Sangria",
        "item_desc": ""
      },
      {
        "item": "Jose Cuervo Tequila",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jose Cuervo Tequila",
        "item_desc": ""
      },
      {
        "item": "Captain Morgan Rum",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Captain Morgan Rum",
        "item_desc": ""
      },
      {
        "item": "Jack Daniel’s Whiskey",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jack Daniel’s Whiskey",
        "item_desc": ""
      },
      {
        "item": "Tanqueray Gin",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tanqueray Gin",
        "item_desc": ""
      },
      {
        "item": "Bacardi Superior Rum",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bacardi Superior Rum",
        "item_desc": ""
      },
      {
        "item": "Tito's Handmade Vodka",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tito's Handmade Vodka",
        "item_desc": ""
      }
    ]
  },
  {
    "name": "Cross Culture",
    "items": [
      {
        "item": "CHICKEN TIKKA Marinated chunks of chicken barbecued in the charcoal oven.",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "CHICKEN TIKKA",
        "item_desc": "Marinated chunks of chicken barbecued in the charcoal oven."
      },
      {
        "item": "MALAI CHICKEN KABAB Chicken chunks marinated in ginger and garlic broiled in the Tandoor",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "MALAI CHICKEN KABAB Chicken chunks",
        "item_desc": "marinated in ginger and garlic broiled in the Tandoor"
      },
      {
        "item": "FISH TANDOORI Chunks of fresh salmon marinated in herbs and spices broiled in the Tandoor",
        "price": "$16.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "FISH TANDOORI Chunks of",
        "item_desc": "fresh salmon marinated in herbs and spices broiled in the Tandoor"
      },
      {
        "item": "Shrimp Tandoori Fresh, king size shrimp gently seasoned and slowly broiled over charcoal in the Tandoor",
        "price": "$16.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Tandoori",
        "item_desc": "Fresh, king size shrimp gently seasoned and slowly broiled over charcoal in the Tandoor"
      },
      {
        "item": "Tawa Chicken Chicken grilled to perfection with onions, green peppers and oriental spices",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tawa Chicken Chicken grilled to perfection",
        "item_desc": "with onions, green peppers and oriental spices"
      },
      {
        "item": "Chicken Samosas Fried turnover deliciously filled with mildly spiced savory spiced ground chicken",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Samosas Fried turnover deliciously",
        "item_desc": "filled with mildly spiced savory spiced ground chicken"
      },
      {
        "item": "Shrimp Tawa Large King size shrimp sauteed with onions, green peppers and mild tender spices",
        "price": "$17.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Tawa Large King size shrimp sauteed",
        "item_desc": "with onions, green peppers and mild tender spices"
      },
      {
        "item": "Tandoori Mixed Grill A combination of our appetizing Tandoori Chicken, Chicken Tikka, Malai kabab, Boti Kabab, Shrimp Tandoori and Fish Tikka",
        "price": "$28.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tandoori Mixed Grill A combination of our appetizing Tandoori Chicken, Chicken Tikka, Malai kabab, Boti Kabab, Shrimp Tandoori and Fish Tikka",
        "item_desc": ""
      },
      {
        "item": "Vegetable Samosa Fried turnover deliciously filled with mildly spiced potatoes and peas",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable Samosa Fried turnover deliciously",
        "item_desc": "filled with mildly spiced potatoes and peas"
      },
      {
        "item": "Aloo Tikki Potato Patties and peas flavoured with chilli peppers and coriander",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Aloo Tikki Potato Patties and peas flavoured",
        "item_desc": "with chilli peppers and coriander"
      },
      {
        "item": "Harabhara Kabab Fresh spinach balls scrumptiously spiced and deep fried",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Harabhara Kabab",
        "item_desc": "Fresh spinach balls scrumptiously spiced and deep fried"
      },
      {
        "item": "Assorted Pakora Fresh vegetables dipped in a deliciously spiced batter and fried to golden perfection",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Assorted Pakora",
        "item_desc": "Fresh vegetables dipped in a deliciously spiced batter and fried to golden perfection"
      },
      {
        "item": "Mix Appetizer For Two A combination of vegetable samosa assorted pakoras and papdam",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Mix Appetizer For Two A combination of vegetable samosa assorted pakoras and papdam",
        "item_desc": ""
      },
      {
        "item": "Aloo Tikki Chaat Crispy aloo tikki topped with chickpeas, yogurt & delicious chutneys.",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Aloo Tikki Chaat",
        "item_desc": "Crispy aloo tikki topped with chickpeas, yogurt & delicious chutneys."
      },
      {
        "item": "Samosa Chaat Vegetable samosas topped with chickpeas, yogurt & delicious chutneys.",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Samosa Chaat Vegetable samosas",
        "item_desc": "topped with chickpeas, yogurt & delicious chutneys."
      },
      {
        "item": "Panir Tikka Marinated cubes of homemade cheese barbecued in charcoal oven",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Panir Tikka",
        "item_desc": "Marinated cubes of homemade cheese barbecued in charcoal oven"
      },
      {
        "item": "Chili Paneer Cubes of homemade cheese tossed in a sweet spicy and tangy-chili sauce",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Chili Paneer Cubes of homemade cheese tossed in a",
        "item_desc": "sweet spicy and tangy-chili sauce"
      },
      {
        "item": "Tomato Soup Delicately spiced tomato soup",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tomato Soup Delicately spiced tomato soup",
        "item_desc": ""
      },
      {
        "item": "Mulligatawny Soup An Anglo-Indian invention of spicy split pea soup",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mulligatawny Soup An Anglo-Indian invention of",
        "item_desc": "spicy split pea soup"
      },
      {
        "item": "Navratna Korma A royal entree.. nine garden fresh vegetables gently simmered in coconut spice laced cream sauce with nuts",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Navratna Korma A royal entree.. nine garden",
        "item_desc": "fresh vegetables gently simmered in coconut spice laced cream sauce with nuts"
      },
      {
        "item": "Vegetable Jalfrezi Garden fresh vegetables cooked in a tangy tomato based sauce with Indian herbs & Spices.",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable Jalfrezi Garden",
        "item_desc": "fresh vegetables cooked in a tangy tomato based sauce with Indian herbs & Spices."
      },
      {
        "item": "Vegetable Makhani Fresh vegetables cooked in a rich onion, tomato & cream based sauce.",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable Makhani",
        "item_desc": "Fresh vegetables cooked in a rich onion, tomato & cream based sauce."
      },
      {
        "item": "Malai Kofta Homemade vegetable balls cooked in a mildly spiced creamy sauce with coconut and nuts",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Malai Kofta Homemade vegetable balls",
        "item_desc": "cooked in a mildly spiced creamy sauce with coconut and nuts"
      },
      {
        "item": "Paneer Masala Homemade cheese cubes mixed with onions and tomatoes cooked in our special sauce",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paneer Masala Homemade cheese cubes mixed",
        "item_desc": "with onions and tomatoes cooked in our special sauce"
      },
      {
        "item": "Kadhai Paneer Tender cubes of homemade cheese with sauteed garlic, ginger and tomatoes",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kadhai Paneer Tender cubes of homemade cheese",
        "item_desc": "with sauteed garlic, ginger and tomatoes"
      },
      {
        "item": "Kashmiri Dum Aloo Potatoes filled with cheese and then cooked in a mild creamy sauce",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kashmiri Dum Aloo Potatoes",
        "item_desc": "filled with cheese and then cooked in a mild creamy sauce"
      },
      {
        "item": "Palak Paneer Fresh, homemade Indian cheese gently cooked with garden spinach and mild spices",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Palak Paneer",
        "item_desc": "Fresh, homemade Indian cheese gently cooked with garden spinach and mild spices"
      },
      {
        "item": "Chana Saag Chickpea gently cooked with garden spinach and mild spices.",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Chana Saag Chickpea gently",
        "item_desc": "cooked with garden spinach and mild spices."
      },
      {
        "item": "Aloo Palak Potato gently cooked with garden spinach and mild spices",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Aloo Palak Potato gently",
        "item_desc": "cooked with garden spinach and mild spices"
      },
      {
        "item": "Mutter Panir Peas and homemade cheese cubes cooked in mildly spiced sauce",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Mutter Panir Peas and homemade cheese cubes",
        "item_desc": "cooked in mildly spiced sauce"
      },
      {
        "item": "Aloo Gobhi Fresh cauliflower and potatoes cooked with onions tomatoes, green beans and Indian seasoning",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Aloo Gobhi",
        "item_desc": "Fresh cauliflower and potatoes cooked with onions tomatoes, green beans and Indian seasoning"
      },
      {
        "item": "Baingan Bhartha Eggplant roasted in tandoor cooked with green peas, fresh tomatoes, onions, ginger and garlic",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Baingan Bhartha Eggplant roasted in tandoor",
        "item_desc": "cooked with green peas, fresh tomatoes, onions, ginger and garlic"
      },
      {
        "item": "Bhindi Masala Okra sauteed with onions, tomatoes and oriental spices",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bhindi Masala Okra sauteed",
        "item_desc": "with onions, tomatoes and oriental spices"
      },
      {
        "item": "Chicken Tikka Masala Tender boneless pieces of chicken broiled in the Tandoor then cooked in a rich tomato, onion and cream sauce",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Tikka Masala Tender boneless pieces of chicken broiled in the Tandoor then",
        "item_desc": "cooked in a rich tomato, onion and cream sauce"
      },
      {
        "item": "Chicken Makhani Tandoor baked chicken cooked in oriental spices with tomatoes and butter",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Makhani Tandoor baked chicken",
        "item_desc": "cooked in oriental spices with tomatoes and butter"
      },
      {
        "item": "Chicken Curry Curried chicken pieces cooked in light Asian spices",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Curry Curried chicken pieces",
        "item_desc": "cooked in light Asian spices"
      },
      {
        "item": "Chicken Vindaloo Fresh chicken exotically prepared in very spicy gravy",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Vindaloo",
        "item_desc": "Fresh chicken exotically prepared in very spicy gravy"
      },
      {
        "item": "Chicken Korma Chicken pieces cooked in a mild cream sauce with fresh green coriander",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Korma Chicken pieces",
        "item_desc": "cooked in a mild cream sauce with fresh green coriander"
      },
      {
        "item": "Chicken Cashmere Chunks of chicken cooked in a mild cream sauce with cashew nuts and golden raisins",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Cashmere Chunks of chicken",
        "item_desc": "cooked in a mild cream sauce with cashew nuts and golden raisins"
      },
      {
        "item": "Chicken Saagwala Boneless chicken pieces sauteed with spinach and enhanced with mild Indian spices",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Saagwala Boneless chicken pieces sauteed",
        "item_desc": "with spinach and enhanced with mild Indian spices"
      },
      {
        "item": "Chicken Karahi Boneless white chicken sauteed with garlic, ginger and tomatoes",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Karahi Boneless white chicken sauteed",
        "item_desc": "with garlic, ginger and tomatoes"
      },
      {
        "item": "Chili Chicken Chunks of white chicken marinated and cooked with onions, green peppers and chili Sauce.",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chili Chicken Chunks of white chicken",
        "item_desc": "marinated and cooked with onions, green peppers and chili Sauce."
      },
      {
        "item": "Chicken Jalfrezi Tender pieces of chicken with veggies, onions, tomato's and spices",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Jalfrezi Tender pieces of chicken",
        "item_desc": "with veggies, onions, tomato's and spices"
      },
      {
        "item": "Lamb Curry Chunks of tender lamb cooked in a mildly spiced sauce",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Curry Chunks of tender lamb",
        "item_desc": "cooked in a mildly spiced sauce"
      },
      {
        "item": "Lamb Vindaloo Spiced lamb cooked in a very spicy sauce",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Vindaloo Spiced lamb",
        "item_desc": "cooked in a very spicy sauce"
      },
      {
        "item": "Lamb Tikka Masala Tender boneless chunks of lamb cooked in a rich tomato, onion and cream sauce",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Tikka Masala Tender boneless chunks of lamb",
        "item_desc": "cooked in a rich tomato, onion and cream sauce"
      },
      {
        "item": "Lamb Rogan Josh Tender cubes of lamb marinated in Eastern spices sauteed with chopped tomatoes in a creamy sauce",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Rogan Josh Tender cubes of lamb",
        "item_desc": "marinated in Eastern spices sauteed with chopped tomatoes in a creamy sauce"
      },
      {
        "item": "Lamb Korma An exotic preparation of lamb in a creamy spiced sauce",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Korma An exotic preparation of lamb in a",
        "item_desc": "creamy spiced sauce"
      },
      {
        "item": "Lamb Nargisi Tender lamb prepared in a mildly spiced creamy and coconut sauce with eggs.",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Nargisi Tender lamb prepared in a mildly spiced",
        "item_desc": "creamy and coconut sauce with eggs."
      },
      {
        "item": "Lamb Karahi Chunks of lamb and Northern spices cooked with tomatoes, onions and green peppers",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Karahi Chunks of lamb and Northern spices",
        "item_desc": "cooked with tomatoes, onions and green peppers"
      },
      {
        "item": "Lamb Saagwala Tender lamb prepared with fresh spinach, coriander and other fragrant herbs",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Saagwala Tender lamb prepared",
        "item_desc": "with fresh spinach, coriander and other fragrant herbs"
      },
      {
        "item": "Lamb Achari Lamb cooked with onions, garlic, tomatoes and fresh chili peppers, flavored with pickled spices",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Achari Lamb",
        "item_desc": "cooked with onions, garlic, tomatoes and fresh chili peppers, flavored with pickled spices"
      },
      {
        "item": "Fish Curry Cooked with fresh ginger and garlic in a lightly spiced sauce",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fish Curry",
        "item_desc": "Cooked with fresh ginger and garlic in a lightly spiced sauce"
      },
      {
        "item": "Shrimp Curry Cooked with fresh ginger and garlic in a lightly spiced sauce",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Curry",
        "item_desc": "Cooked with fresh ginger and garlic in a lightly spiced sauce"
      },
      {
        "item": "Fish Vindaloo Exotically prepared in a very spicy sauce",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fish Vindaloo Exotically prepared in a very",
        "item_desc": "spicy sauce"
      },
      {
        "item": "Shrimp Vindaloo Exotically prepared in a very spicy sauce",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Vindaloo Exotically prepared in a very",
        "item_desc": "spicy sauce"
      },
      {
        "item": "Shrimp Nargisi Large fresh shrimp prepared in a special coconut sauce with eggs",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Nargisi Large",
        "item_desc": "fresh shrimp prepared in a special coconut sauce with eggs"
      },
      {
        "item": "Shrimp Karahi Shrimp cooked with onions, tomatoes, green peppers and light spices and uncommon flavour",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Karahi Shrimp",
        "item_desc": "cooked with onions, tomatoes, green peppers and light spices and uncommon flavour"
      },
      {
        "item": "Shrimp Tikka Masala Extra large shrimp broiled in the tandoor cooked in a rich tomato, onion and cream sauce",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Tikka Masala Extra large shrimp broiled in the tandoor",
        "item_desc": "cooked in a rich tomato, onion and cream sauce"
      },
      {
        "item": "Fish Tikka Masala Fresh salmon broiled in the tandoor, then cooked in a rich tomato, onion and cream sauce",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fish Tikka Masala",
        "item_desc": "Fresh salmon broiled in the tandoor, then cooked in a rich tomato, onion and cream sauce"
      },
      {
        "item": "Chili Fish Fresh salmon marinated and cooked with onions, green peppers and chili sauce",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chili Fish",
        "item_desc": "Fresh salmon marinated and cooked with onions, green peppers and chili sauce"
      },
      {
        "item": "CHICKEN TIKKA Marinated chunks of chicken barbecued in the charcoal oven",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "CHICKEN TIKKA",
        "item_desc": "Marinated chunks of chicken barbecued in the charcoal oven"
      },
      {
        "item": "MALAI CHICKEN KABAB Chicken chunks marinated in ginger and garlic, broiled in the tandoor",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "MALAI CHICKEN KABAB Chicken chunks",
        "item_desc": "marinated in ginger and garlic, broiled in the tandoor"
      },
      {
        "item": "Tandoori Chicken Chicken marinated in fresh spices & lemon, then barbecued over flaming charcoal in the tandoor",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tandoori Chicken Chicken",
        "item_desc": "marinated in fresh spices & lemon, then barbecued over flaming charcoal in the tandoor"
      },
      {
        "item": "TANDOORI FISH TIKKA Chunks of fresh salmon marinated in herbs and spices, broiled in the Tandoor",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "TANDOORI FISH TIKKA Chunks of",
        "item_desc": "fresh salmon marinated in herbs and spices, broiled in the Tandoor"
      },
      {
        "item": "Tandoori Shrimp Fresh, king-size Shrimp gently seasoned and slowly broiled over charcoal in the Tandoor",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tandoori Shrimp",
        "item_desc": "Fresh, king-size Shrimp gently seasoned and slowly broiled over charcoal in the Tandoor"
      },
      {
        "item": "BOTI KABAB Tender morsels of lamb marinated in special spices, then broiled in the Tandoor",
        "price": "$26.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "BOTI KABAB Tender morsels of lamb",
        "item_desc": "marinated in special spices, then broiled in the Tandoor"
      },
      {
        "item": "Seekh Kabab Mildly spiced minced lamb skewered & grilled over charcoal",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seekh Kabab Mildly spiced minced lamb skewered & grilled over charcoal",
        "item_desc": ""
      },
      {
        "item": "Paneer Tikka Marinated cubes of homemade cheese barbecued in charcoal oven",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paneer Tikka",
        "item_desc": "Marinated cubes of homemade cheese barbecued in charcoal oven"
      },
      {
        "item": "Chicken Biryani Basmati rice cooked with chicken mixed with onions, fresh ginger, cashew nuts and golden raisins, flavored with delicate spices",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Biryani Basmati rice",
        "item_desc": "cooked with chicken mixed with onions, fresh ginger, cashew nuts and golden raisins, flavored with delicate spices"
      },
      {
        "item": "Lamb Biryani Gorgeously tender pieces of lamb cooked with long grain basmati rice, cashew nuts, golden raisins and exotic spices",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Biryani Gorgeously tender pieces of lamb",
        "item_desc": "cooked with long grain basmati rice, cashew nuts, golden raisins and exotic spices"
      },
      {
        "item": "Shrimp Biryani Special basmati rice cooked with shrimp, cashew nuts, golden raisins and delicate light spices",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Biryani Special basmati rice",
        "item_desc": "cooked with shrimp, cashew nuts, golden raisins and delicate light spices"
      },
      {
        "item": "Vegetable Biryani Indian basmati rice cooked with fresh vegetables, cashew nuts, raisins and exotic spices",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable Biryani Indian basmati rice",
        "item_desc": "cooked with fresh vegetables, cashew nuts, raisins and exotic spices"
      },
      {
        "item": "Naan Traditional white bread, baked in the tandoor",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Naan",
        "item_desc": "Traditional white bread, baked in the tandoor"
      },
      {
        "item": "Garlic Naan Healthy unleavened bread stuffed with fresh garlic",
        "price": "$6.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Garlic Naan Healthy unleavened bread stuffed with fresh garlic",
        "item_desc": ""
      },
      {
        "item": "Paneer Kulcha Exotic unleavened bread filled with homemade cheese and spices",
        "price": "$7.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paneer Kulcha Exotic unleavened bread",
        "item_desc": "filled with homemade cheese and spices"
      },
      {
        "item": "Onion Kulcha Scrumptiously unleavened bread stuffed with onions and spices",
        "price": "$7.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Onion Kulcha Scrumptiously unleavened bread",
        "item_desc": "stuffed with onions and spices"
      },
      {
        "item": "Tandoori Roti Whole wheat bread baked in the tandoor",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tandoori Roti Whole wheat bread baked in the tandoor",
        "item_desc": ""
      },
      {
        "item": "Paratha Buttered pan-baked, wheat flat bread",
        "price": "$8.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Paratha Buttered pan-baked, wheat flat bread",
        "item_desc": ""
      },
      {
        "item": "Aloo Paratha Paratha bread stuffed with delicately spiced potatoes",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Aloo Paratha Paratha bread",
        "item_desc": "stuffed with delicately spiced potatoes"
      },
      {
        "item": "Bread Basket A combo of three house favorite breads Naan, Onion Kulcha and Tandoori Roti",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bread Basket A combo of three house favorite breads Naan, Onion Kulcha and Tandoori Roti",
        "item_desc": ""
      },
      {
        "item": "Daal Makhani Black beans and lentils simmered in cream for hours lightly fried in butter with fresh onion, ginger and garlic",
        "price": "$17.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Daal Makhani Black beans and lentils simmered in cream for hours lightly fried in butter",
        "item_desc": "with fresh onion, ginger and garlic"
      },
      {
        "item": "Yellow Dal Tadka Yellow lentils delicately cooked with browned onions in aromatic spices",
        "price": "$17.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Yellow Dal Tadka Yellow lentils delicately",
        "item_desc": "cooked with browned onions in aromatic spices"
      },
      {
        "item": "Chana Masala Chick peas and tomatoes cooked in traditional spices",
        "price": "$17.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Chana Masala Chick peas and tomatoes",
        "item_desc": "cooked in traditional spices"
      },
      {
        "item": "Raita Grated cucumber made in homemade yogurt",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Raita Grated cucumber",
        "item_desc": "made in homemade yogurt"
      },
      {
        "item": "Achar Hot and spicy Indian pickle",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Achar Hot and",
        "item_desc": "spicy Indian pickle"
      },
      {
        "item": "Papdam Three thin and crispy lentil flat breads",
        "price": "$6.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Papdam Three thin and",
        "item_desc": "crispy lentil flat breads"
      },
      {
        "item": "Kachumber Diced onions, tomatoes, chili peppers and chopped coriander with hint of lemon juice",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kachumber Diced onions, tomatoes, chili peppers and chopped coriander",
        "item_desc": "with hint of lemon juice"
      },
      {
        "item": "Mango Chutney A special preparation of sweet and mango slices",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mango Chutney A special preparation of",
        "item_desc": "sweet and mango slices"
      },
      {
        "item": "Persian Falooda Rose flavoured milk mixed with falooda sev. tukmurla seeds and topped with ice cream",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Persian Falooda Rose flavoured milk mixed",
        "item_desc": "with falooda sev. tukmurla seeds and topped with ice cream"
      },
      {
        "item": "Mango D'fengo Chef's special creation with fresh mangoes and fruits",
        "price": "$8.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mango D'fengo Chef's special creation",
        "item_desc": "with fresh mangoes and fruits"
      },
      {
        "item": "Gulab Jamun Milk and cheese balls dipped in syrup served warm",
        "price": "$8.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Gulab Jamun Milk and cheese balls dipped in syrup",
        "item_desc": "served warm"
      },
      {
        "item": "Rasmalai Homemade cheese simmered with milk and nuts, served cold",
        "price": "$8.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Rasmalai Homemade cheese simmered",
        "item_desc": "with milk and nuts, served cold"
      },
      {
        "item": "Kulfi Authentic Indian Ice Cream, flavored with pistachio and cashew nuts",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kulfi Authentic Indian Ice Cream, flavored",
        "item_desc": "with pistachio and cashew nuts"
      },
      {
        "item": "Lassi Sweet and Salted",
        "price": "$7.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lassi",
        "item_desc": "Sweet and Salted"
      },
      {
        "item": "Flavoured Lassi Mango",
        "price": "$7.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Flavoured Lassi Mango",
        "item_desc": ""
      },
      {
        "item": "Mango Milk Shake",
        "price": "$7.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mango Milk Shake",
        "item_desc": ""
      },
      {
        "item": "Indian Masala Iced Tea",
        "price": "$7.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Indian Masala Iced Tea",
        "item_desc": ""
      },
      {
        "item": "Indian Masala Tea",
        "price": "$4.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Indian Masala Tea",
        "item_desc": ""
      },
      {
        "item": "Coffee",
        "price": "$4.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Coffee",
        "item_desc": ""
      },
      {
        "item": "Soda Coke, Diet Coke, Sprite or Ginger Ale",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Soda Coke, Diet Coke, Sprite or Ginger Ale",
        "item_desc": ""
      },
      {
        "item": "Veg Combo",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Veg Combo",
        "item_desc": ""
      },
      {
        "item": "Chicken Combo",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Combo",
        "item_desc": ""
      },
      {
        "item": "Lamb Combo",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Combo",
        "item_desc": ""
      },
      {
        "item": "Seafood Combo",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seafood Combo",
        "item_desc": ""
      },
      {
        "item": "Tandoori Combo",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tandoori Combo",
        "item_desc": ""
      },
      {
        "item": "CHICKEN TIKKA Marinated chunks of chicken barbecued in the charcoal oven.",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "CHICKEN TIKKA",
        "item_desc": "Marinated chunks of chicken barbecued in the charcoal oven."
      },
      {
        "item": "MALAI CHICKEN KABAB Chicken chunks marinated in ginger and garlic broiled in the Tandoor",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "MALAI CHICKEN KABAB Chicken chunks",
        "item_desc": "marinated in ginger and garlic broiled in the Tandoor"
      },
      {
        "item": "FISH TANDOORI Chunks of fresh salmon marinated in herbs and spices broiled in the Tandoor",
        "price": "$16.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "FISH TANDOORI Chunks of",
        "item_desc": "fresh salmon marinated in herbs and spices broiled in the Tandoor"
      },
      {
        "item": "Shrimp Tandoori Fresh, king size shrimp gently seasoned and slowly broiled over charcoal in the Tandoor",
        "price": "$16.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Tandoori",
        "item_desc": "Fresh, king size shrimp gently seasoned and slowly broiled over charcoal in the Tandoor"
      },
      {
        "item": "Tawa Chicken Chicken grilled to perfection with onions, green peppers and oriental spices",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tawa Chicken Chicken grilled to perfection",
        "item_desc": "with onions, green peppers and oriental spices"
      },
      {
        "item": "Chicken Samosas Fried turnover deliciously filled with mildly spiced savory spiced ground chicken",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Samosas Fried turnover deliciously",
        "item_desc": "filled with mildly spiced savory spiced ground chicken"
      },
      {
        "item": "Shrimp Tawa Large King size shrimp sauteed with onions, green peppers and mild tender spices",
        "price": "$17.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Tawa Large King size shrimp sauteed",
        "item_desc": "with onions, green peppers and mild tender spices"
      },
      {
        "item": "Tandoori Mixed Grill A combination of our appetizing Tandoori Chicken, Chicken Tikka, Malai kabab, Boti Kabab, Shrimp Tandoori and Fish Tikka",
        "price": "$28.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tandoori Mixed Grill A combination of our appetizing Tandoori Chicken, Chicken Tikka, Malai kabab, Boti Kabab, Shrimp Tandoori and Fish Tikka",
        "item_desc": ""
      },
      {
        "item": "Vegetable Samosa Fried turnover deliciously filled with mildly spiced potatoes and peas",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable Samosa Fried turnover deliciously",
        "item_desc": "filled with mildly spiced potatoes and peas"
      },
      {
        "item": "Aloo Tikki Potato Patties and peas flavoured with chilli peppers and coriander",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Aloo Tikki Potato Patties and peas flavoured",
        "item_desc": "with chilli peppers and coriander"
      },
      {
        "item": "Harabhara Kabab Fresh spinach balls scrumptiously spiced and deep fried",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Harabhara Kabab",
        "item_desc": "Fresh spinach balls scrumptiously spiced and deep fried"
      },
      {
        "item": "Assorted Pakora Fresh vegetables dipped in a deliciously spiced batter and fried to golden perfection",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Assorted Pakora",
        "item_desc": "Fresh vegetables dipped in a deliciously spiced batter and fried to golden perfection"
      },
      {
        "item": "Mix Appetizer For Two A combination of vegetable samosa assorted pakoras and papdam",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Mix Appetizer For Two A combination of vegetable samosa assorted pakoras and papdam",
        "item_desc": ""
      },
      {
        "item": "Aloo Tikki Chaat Crispy aloo tikki topped with chickpeas, yogurt & delicious chutneys.",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Aloo Tikki Chaat",
        "item_desc": "Crispy aloo tikki topped with chickpeas, yogurt & delicious chutneys."
      },
      {
        "item": "Samosa Chaat Vegetable samosas topped with chickpeas, yogurt & delicious chutneys.",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Samosa Chaat Vegetable samosas",
        "item_desc": "topped with chickpeas, yogurt & delicious chutneys."
      },
      {
        "item": "Panir Tikka Marinated cubes of homemade cheese barbecued in charcoal oven",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Panir Tikka",
        "item_desc": "Marinated cubes of homemade cheese barbecued in charcoal oven"
      },
      {
        "item": "Chili Paneer Cubes of homemade cheese tossed in a sweet spicy and tangy-chili sauce",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Chili Paneer Cubes of homemade cheese tossed in a",
        "item_desc": "sweet spicy and tangy-chili sauce"
      },
      {
        "item": "Assorted Pakora",
        "price": "$130.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Assorted Pakora",
        "item_desc": ""
      },
      {
        "item": "Vegetable Samosa",
        "price": "$130.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable Samosa",
        "item_desc": ""
      },
      {
        "item": "Aloo Tikki",
        "price": "$130.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Aloo Tikki",
        "item_desc": ""
      },
      {
        "item": "Harabhara Kabab",
        "price": "$130.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Harabhara Kabab",
        "item_desc": ""
      },
      {
        "item": "All-In-One Pakora",
        "price": "$130.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "All-In-One Pakora",
        "item_desc": ""
      },
      {
        "item": "Chili Paneer",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Chili Paneer",
        "item_desc": ""
      },
      {
        "item": "Paneer Tikka",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paneer Tikka",
        "item_desc": ""
      },
      {
        "item": "Chicken Tikka",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Tikka",
        "item_desc": ""
      },
      {
        "item": "Malai Chicken Kabab",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Malai Chicken Kabab",
        "item_desc": ""
      },
      {
        "item": "Tawi Chicken",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tawi Chicken",
        "item_desc": ""
      },
      {
        "item": "Chicken 65",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken 65",
        "item_desc": ""
      },
      {
        "item": "Tandoori Chicken",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tandoori Chicken",
        "item_desc": ""
      },
      {
        "item": "Seekh Kabab",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seekh Kabab",
        "item_desc": ""
      },
      {
        "item": "Meat Samosa",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Meat Samosa",
        "item_desc": ""
      },
      {
        "item": "Navratan Korma",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Navratan Korma",
        "item_desc": ""
      },
      {
        "item": "Malai Kofta",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Malai Kofta",
        "item_desc": ""
      },
      {
        "item": "Paneer Masala",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paneer Masala",
        "item_desc": ""
      },
      {
        "item": "Vegetable Jalfrezi",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable Jalfrezi",
        "item_desc": ""
      },
      {
        "item": "Methi Mutter Malai",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Methi Mutter Malai",
        "item_desc": ""
      },
      {
        "item": "Baingan Bhartha",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Baingan Bhartha",
        "item_desc": ""
      },
      {
        "item": "Aloo Baingan",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Aloo Baingan",
        "item_desc": ""
      },
      {
        "item": "Kashmiri Dum Aloo",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Kashmiri Dum Aloo",
        "item_desc": ""
      },
      {
        "item": "Mutter Paneer",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Mutter Paneer",
        "item_desc": ""
      },
      {
        "item": "Aloo Gobi",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Aloo Gobi",
        "item_desc": ""
      },
      {
        "item": "Bhindi Masala",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bhindi Masala",
        "item_desc": ""
      },
      {
        "item": "Vegetable Makhani",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable Makhani",
        "item_desc": ""
      },
      {
        "item": "Palak Paneer",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Palak Paneer",
        "item_desc": ""
      },
      {
        "item": "Shahi Paneer Bhurjee",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Shahi Paneer Bhurjee",
        "item_desc": ""
      },
      {
        "item": "Paneer Karahi",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paneer Karahi",
        "item_desc": ""
      },
      {
        "item": "Chilli Paneer",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Chilli Paneer",
        "item_desc": ""
      },
      {
        "item": "Vegetable Biryani",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable Biryani",
        "item_desc": ""
      },
      {
        "item": "Chicken Tikka Masala",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Tikka Masala",
        "item_desc": ""
      },
      {
        "item": "Chicken Makhani",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Makhani",
        "item_desc": ""
      },
      {
        "item": "Chicken Maharaja ( With Bones)",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Maharaja (",
        "item_desc": "With Bones)"
      },
      {
        "item": "Chicken Cashmere",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Cashmere",
        "item_desc": ""
      },
      {
        "item": "Chicken Roganjosh",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Roganjosh",
        "item_desc": ""
      },
      {
        "item": "Chicken Curry",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Curry",
        "item_desc": ""
      },
      {
        "item": "Chicken Vindaloo",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Vindaloo",
        "item_desc": ""
      },
      {
        "item": "Chilli Chicken",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chilli Chicken",
        "item_desc": ""
      },
      {
        "item": "Chicken Madras",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Madras",
        "item_desc": ""
      },
      {
        "item": "Dhaba Chicken",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Dhaba Chicken",
        "item_desc": ""
      },
      {
        "item": "Chicken Karahi",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Karahi",
        "item_desc": ""
      },
      {
        "item": "Chicken Saagwala",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Saagwala",
        "item_desc": ""
      },
      {
        "item": "Hariyali Chicken",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hariyali Chicken",
        "item_desc": ""
      },
      {
        "item": "Chicken Korma",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Korma",
        "item_desc": ""
      },
      {
        "item": "Chicken Achari",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Achari",
        "item_desc": ""
      },
      {
        "item": "Chicken Biryani",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Biryani",
        "item_desc": ""
      },
      {
        "item": "Lamb Curry",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Curry",
        "item_desc": ""
      },
      {
        "item": "Lamb Vindaloo",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Vindaloo",
        "item_desc": ""
      },
      {
        "item": "Lamb Karahi",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Karahi",
        "item_desc": ""
      },
      {
        "item": "Lamb Nargisi",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Nargisi",
        "item_desc": ""
      },
      {
        "item": "Lamb Roganjosh",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Roganjosh",
        "item_desc": ""
      },
      {
        "item": "Lamb Korma",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Korma",
        "item_desc": ""
      },
      {
        "item": "Lamb Pasanda",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Pasanda",
        "item_desc": ""
      },
      {
        "item": "Lamb Saagwala",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Saagwala",
        "item_desc": ""
      },
      {
        "item": "Lamb Achari",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Achari",
        "item_desc": ""
      },
      {
        "item": "Lamb Biryani",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lamb Biryani",
        "item_desc": ""
      },
      {
        "item": "Fish Curry",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fish Curry",
        "item_desc": ""
      },
      {
        "item": "Fish Chilli",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fish Chilli",
        "item_desc": ""
      },
      {
        "item": "Shrimp Curry",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Curry",
        "item_desc": ""
      },
      {
        "item": "Shrimp Vindaloo",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Vindaloo",
        "item_desc": ""
      },
      {
        "item": "Shrimp Karahi",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Karahi",
        "item_desc": ""
      },
      {
        "item": "Tawa Shrimp",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tawa Shrimp",
        "item_desc": ""
      },
      {
        "item": "Shrimp Biryani",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Biryani",
        "item_desc": ""
      },
      {
        "item": "Tandoori Fish Tikka",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tandoori Fish Tikka",
        "item_desc": ""
      },
      {
        "item": "Shrimp Tandoori",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Tandoori",
        "item_desc": ""
      },
      {
        "item": "Dal Makhani",
        "price": "$120.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Dal Makhani",
        "item_desc": ""
      },
      {
        "item": "Chana Masala",
        "price": "$120.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Chana Masala",
        "item_desc": ""
      },
      {
        "item": "Rajma Masala",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Rajma Masala",
        "item_desc": ""
      },
      {
        "item": "Punjabi Kadi Pakora",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Punjabi Kadi Pakora",
        "item_desc": ""
      },
      {
        "item": "Jira Rice",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jira Rice",
        "item_desc": ""
      },
      {
        "item": "Pea Pulav",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pea Pulav",
        "item_desc": ""
      },
      {
        "item": "Vegetable Mughlai Pulav",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable Mughlai Pulav",
        "item_desc": ""
      },
      {
        "item": "White Rice",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "White Rice",
        "item_desc": ""
      },
      {
        "item": "Naan",
        "price": "$100.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Naan",
        "item_desc": ""
      },
      {
        "item": "Tandoori Roti",
        "price": "$100.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tandoori Roti",
        "item_desc": ""
      },
      {
        "item": "Paratha",
        "price": "$140.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Paratha",
        "item_desc": ""
      },
      {
        "item": "Garlic Naan",
        "price": "$110.00 | $60.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Garlic Naan",
        "item_desc": ""
      },
      {
        "item": "Aloo Paratha",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Aloo Paratha",
        "item_desc": ""
      },
      {
        "item": "Onion Kulcha",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Onion Kulcha",
        "item_desc": ""
      },
      {
        "item": "Paneer Kulcha",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Paneer Kulcha",
        "item_desc": ""
      },
      {
        "item": "Cucumber Raita",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cucumber Raita",
        "item_desc": ""
      },
      {
        "item": "Boondi Raita",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Boondi Raita",
        "item_desc": ""
      },
      {
        "item": "Dahi Wada",
        "price": "$130.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Dahi Wada",
        "item_desc": ""
      },
      {
        "item": "Kachumbar",
        "price": "$70.00 | $40.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kachumbar",
        "item_desc": ""
      },
      {
        "item": "Cut-Indian Salad",
        "price": "$70.00 | $40.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cut-Indian Salad",
        "item_desc": ""
      },
      {
        "item": "Mango Chutney",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mango Chutney",
        "item_desc": ""
      },
      {
        "item": "Papadum",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Papadum",
        "item_desc": ""
      },
      {
        "item": "Achar",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Achar",
        "item_desc": ""
      },
      {
        "item": "Gulab Jamun",
        "price": "$120.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gulab Jamun",
        "item_desc": ""
      },
      {
        "item": "Rasmalai",
        "price": "$120.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Rasmalai",
        "item_desc": ""
      },
      {
        "item": "Gajar Halwa",
        "price": "$120.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gajar Halwa",
        "item_desc": ""
      },
      {
        "item": "Kheer",
        "price": "$120.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kheer",
        "item_desc": ""
      },
      {
        "item": "Panchratan Halwa",
        "price": "$120.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Panchratan Halwa",
        "item_desc": ""
      }
    ]
  },
  {
    "name": "elements",
    "items": [
      {
        "item": "Menus A La Carte Menu 5-Course Tasting Menu Chef's Tasting Menu Bar Menu Easter Brunch 2026 Mother's Day 2026 Menus",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Menus A La Carte Menu 5-Course Tasting Menu Chef's Tasting Menu Bar Menu Easter Brunch 2026 Mother's Day 2026 Menus",
        "item_desc": ""
      },
      {
        "item": "​ Tuna tartare, cabbage, nori ​ _ ​ Oxtail Papardelle pecorino, parsley, olive oil ​ or ​ Hokkaido Sea Scallops vin blanc, radish, beet vinaigrette ​ _ ​ Black Cod saffron, leeks, hedgehog mushrooms ​ _ ​ Duck fregola, mushroom, black truffle ​ or ​ Wagyu Delmonico potato, mushroom, braised greens ​ _",
        "price": "($10 supplement) | ($30 supplement)",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "​ Tuna tartare, cabbage, nori ​ _ ​ Oxtail Papardelle pecorino, parsley, olive oil ​ or ​ Hokkaido Sea Scallops vin blanc, radish, beet vinaigrette ​ _ ​ Black Cod saffron, leeks, hedgehog mushrooms ​ _ ​ Duck fregola, mushroom, black truffle ​ or ​ Wagyu Delmonico potato, mushroom, braised greens ​ _",
        "item_desc": ""
      },
      {
        "item": "Menus A La Carte Menu 5-Course Tasting Menu Chef's Tasting Menu Bar Menu Easter Brunch 2026 Mother's Day 2026 Menus",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Menus A La Carte Menu 5-Course Tasting Menu Chef's Tasting Menu Bar Menu Easter Brunch 2026 Mother's Day 2026 Menus",
        "item_desc": ""
      },
      {
        "item": "Menus A La Carte Menu 5-Course Tasting Menu Chef's Tasting Menu Bar Menu Easter Brunch 2026 Mother's Day 2026 Menus",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Menus A La Carte Menu 5-Course Tasting Menu Chef's Tasting Menu Bar Menu Easter Brunch 2026 Mother's Day 2026 Menus",
        "item_desc": ""
      }
    ]
  },
  {
    "name": "Genteel's Brick Oven Pizza",
    "items": [
      {
        "item": "Napolitana Plain Pie",
        "price": "$13.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Napolitana Plain Pie",
        "item_desc": ""
      },
      {
        "item": "White Pizza Mozzarella & white sauce.",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "White Pizza Mozzarella & white sauce.",
        "item_desc": ""
      },
      {
        "item": "Tomato Basil Pizza Tomatoes fresh basil & garlic.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tomato Basil Pizza Tomatoes",
        "item_desc": "fresh basil & garlic."
      },
      {
        "item": "Hawaiian Pizza Pineapple & ham.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hawaiian Pizza Pineapple & ham.",
        "item_desc": ""
      },
      {
        "item": "Cheese Steak Pizza Cheese steak, peppers & onions.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cheese Steak Pizza Cheese steak, peppers & onions.",
        "item_desc": ""
      },
      {
        "item": "Buffalo Chicken & Blue Cheese Pizza",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Buffalo Chicken & Blue Cheese Pizza",
        "item_desc": ""
      },
      {
        "item": "BBQ Chicken Pizza",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "BBQ Chicken Pizza",
        "item_desc": ""
      },
      {
        "item": "Meat Lover's Pizza Bacon, ham, sausage, pepperoni.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Meat Lover's Pizza Bacon, ham, sausage, pepperoni.",
        "item_desc": ""
      },
      {
        "item": "Chicken Parm Pizza",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Parm Pizza",
        "item_desc": ""
      },
      {
        "item": "Trio Cheese White Sauce Pizza Extra cheese, mozzarella & ricotta.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Trio Cheese White Sauce Pizza Extra cheese, mozzarella & ricotta.",
        "item_desc": ""
      },
      {
        "item": "Spinaci e Fungi White Sauce Pizza Mushrooms, spinach & garlic.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Spinaci e Fungi White Sauce Pizza Mushrooms, spinach &",
        "item_desc": "garlic."
      },
      {
        "item": "Veggie Pizza Tomatoes, mushrooms, green peppers, black olives, onions.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Veggie Pizza Tomatoes, mushrooms, green peppers, black olives, onions.",
        "item_desc": ""
      },
      {
        "item": "The Works Pizza Onions, green peppers, sausage, pepperoni, mushrooms & black olives.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "The Works Pizza Onions, green peppers, sausage, pepperoni, mushrooms & black olives.",
        "item_desc": ""
      },
      {
        "item": "Chicken Fajita Pizza",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Fajita Pizza",
        "item_desc": ""
      },
      {
        "item": "Chicken Bacon Ranch Pizza",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Bacon Ranch Pizza",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cheese Pizza",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Gluten Free Cheese Pizza",
        "item_desc": ""
      },
      {
        "item": "Margherita Pizza Italian plum tomato sauce fresh mozzarella, basil & olive oil.",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Margherita Pizza Italian plum tomato sauce",
        "item_desc": "fresh mozzarella, basil & olive oil."
      },
      {
        "item": "Pizza Alla Vodka Pizza Fresh mozzarella, tomato cream vodka sauce, seasonal fresh mushrooms, peas & prosciutto di parma.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pizza Alla Vodka Pizza",
        "item_desc": "Fresh mozzarella, tomato cream vodka sauce, seasonal fresh mushrooms, peas & prosciutto di parma."
      },
      {
        "item": "Arugula Con Prosciutto Pizza Fresh mozzarella, Sliced prosciutto di Parma topped with baby arugula, shaved Parmigiano & drizzled with balsamic reduction.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Arugula Con Prosciutto Pizza",
        "item_desc": "Fresh mozzarella, Sliced prosciutto di Parma topped with baby arugula, shaved Parmigiano & drizzled with balsamic reduction."
      },
      {
        "item": "Clam Pie Oreganata Fresh mozzarella, baby clams & our gourmet bread crumbs seasoned & baked to perfection.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Clam Pie Oreganata",
        "item_desc": "Fresh mozzarella, baby clams & our gourmet bread crumbs seasoned & baked to perfection."
      },
      {
        "item": "Mushroom Madness Pizza Fresh mozzarella, freshly seasoned sliced mushrooms, shitake mushrooms, plum tomato sauce & drizzled with imported white truffle oil.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Mushroom Madness Pizza",
        "item_desc": "Fresh mozzarella, freshly seasoned sliced mushrooms, shitake mushrooms, plum tomato sauce & drizzled with imported white truffle oil."
      },
      {
        "item": "Quattro Stagioni 4 Seasons Pizza Plum tomato sauce fresh mozzarella, sun dried tomatoes, geate olives, prosciutto di parma, & freshly seasoned mushrooms, great for any season.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Quattro Stagioni 4 Seasons Pizza Plum tomato sauce",
        "item_desc": "fresh mozzarella, sun dried tomatoes, geate olives, prosciutto di parma, & freshly seasoned mushrooms, great for any season."
      },
      {
        "item": "Quattro Formaggi 4 Cheese Pizza Fresh mozzarella, plum tomato sauce & a delicious blend of imported Provolone, fontina & pecorino Romano cheese.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Quattro Formaggi 4 Cheese Pizza",
        "item_desc": "Fresh mozzarella, plum tomato sauce & a delicious blend of imported Provolone, fontina & pecorino Romano cheese."
      },
      {
        "item": "Smoking Genteel Pizza Smoked fresh mozzarella, roasted pepper cream sauce wood-fired roasted peppers, sausage & topped with Imported Pecorino Romano.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Smoking Genteel Pizza Smoked",
        "item_desc": "fresh mozzarella, roasted pepper cream sauce wood-fired roasted peppers, sausage & topped with Imported Pecorino Romano."
      },
      {
        "item": "Dawn's Burrata Pizza Fresh mozzarella, garlic sauce, burrata, cherry tomatoes, basil & balsamic syrup.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Dawn's Burrata Pizza",
        "item_desc": "Fresh mozzarella, garlic sauce, burrata, cherry tomatoes, basil & balsamic syrup."
      },
      {
        "item": "Hot Honey Pizza Cup & char pepperoni & hot honey.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hot Honey Pizza Cup & char pepperoni & hot honey.",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cauliflower Cheese Pizza",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Gluten Free Cauliflower Cheese Pizza",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cauliflower Napolitana Plain Pie",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Gluten Free Cauliflower Napolitana Plain Pie",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cauliflower White Pizza Mozzarella & white sauce.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Gluten Free Cauliflower White Pizza Mozzarella & white sauce.",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cauliflower Tomato Basil Pizza Tomatoes fresh basil & garlic.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Gluten Free Cauliflower Tomato Basil Pizza Tomatoes",
        "item_desc": "fresh basil & garlic."
      },
      {
        "item": "Gluten Free Cauliflower Hawaiian Pizza Pineapple & ham.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Cauliflower Hawaiian Pizza Pineapple & ham.",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cauliflower Cheese Steak Pizza Cheese steak, peppers & onions.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Cauliflower Cheese Steak Pizza Cheese steak, peppers & onions.",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cauliflower Buffalo Chicken & Blue Cheese Pizza",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Cauliflower Buffalo Chicken & Blue Cheese Pizza",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cauliflower BBQ Chicken Pizza",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Cauliflower BBQ Chicken Pizza",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cauliflower Meat Lover's Pizza Bacon, ham, sausage, pepperoni.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Cauliflower Meat Lover's Pizza Bacon, ham, sausage, pepperoni.",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cauliflower Chicken Parm Pizza",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Cauliflower Chicken Parm Pizza",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cauliflower Trio Cheese White Sauce Pizza Extra cheese, mozzarella & ricotta.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Gluten Free Cauliflower Trio Cheese White Sauce Pizza Extra cheese, mozzarella & ricotta.",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cauliflower Spinaci e Fungi White Sauce Pizza Mushrooms, spinach & garlic.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Gluten Free Cauliflower Spinaci e Fungi White Sauce Pizza Mushrooms, spinach &",
        "item_desc": "garlic."
      },
      {
        "item": "Gluten Free Cauliflower Veggie Pizza Tomatoes, mushrooms, green peppers, black olives, onions.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Gluten Free Cauliflower Veggie Pizza Tomatoes, mushrooms, green peppers, black olives, onions.",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cauliflower The Works Pizza Onions, green peppers, sausage, pepperoni, mushrooms & black olives.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Cauliflower The Works Pizza Onions, green peppers, sausage, pepperoni, mushrooms & black olives.",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cauliflower Chicken Fajita Pizza",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Cauliflower Chicken Fajita Pizza",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cauliflower Chicken Bacon Ranch Pizza",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Cauliflower Chicken Bacon Ranch Pizza",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Cauliflower Margherita Pizza Italian plum tomato sauce fresh mozzarella, basil & olive oil.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Gluten Free Cauliflower Margherita Pizza Italian plum tomato sauce",
        "item_desc": "fresh mozzarella, basil & olive oil."
      },
      {
        "item": "Gluten Free Cauliflower Pizza Alla Vodka Pizza Fresh mozzarella, tomato cream vodka sauce, seasonal fresh mushrooms, peas & prosciutto di parma.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Cauliflower Pizza Alla Vodka Pizza",
        "item_desc": "Fresh mozzarella, tomato cream vodka sauce, seasonal fresh mushrooms, peas & prosciutto di parma."
      },
      {
        "item": "Gluten Free Cauliflower Arugula Con Prosciutto Pizza Fresh mozzarella, Sliced prosciutto di Parma topped with baby arugula, shaved Parmigiano & drizzled with balsamic reduction.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Cauliflower Arugula Con Prosciutto Pizza",
        "item_desc": "Fresh mozzarella, Sliced prosciutto di Parma topped with baby arugula, shaved Parmigiano & drizzled with balsamic reduction."
      },
      {
        "item": "Gluten Free Cauliflower Clam Pie Oreganata Fresh mozzarella, baby clams & our gourmet bread crumbs seasoned & baked to perfection.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Cauliflower Clam Pie Oreganata",
        "item_desc": "Fresh mozzarella, baby clams & our gourmet bread crumbs seasoned & baked to perfection."
      },
      {
        "item": "Gluten Free Cauliflower Mushroom Madness Pizza Fresh mozzarella, freshly seasoned sliced mushrooms, shitake mushrooms, plum tomato sauce & drizzled with imported white truffle oil.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Gluten Free Cauliflower Mushroom Madness Pizza",
        "item_desc": "Fresh mozzarella, freshly seasoned sliced mushrooms, shitake mushrooms, plum tomato sauce & drizzled with imported white truffle oil."
      },
      {
        "item": "Gluten Free Cauliflower Quattro Stagioni 4 Seasons Pizza Plum tomato sauce fresh mozzarella, sun dried tomatoes, geate olives, prosciutto di parma, & freshly seasoned mushrooms, great for any season.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Cauliflower Quattro Stagioni 4 Seasons Pizza Plum tomato sauce",
        "item_desc": "fresh mozzarella, sun dried tomatoes, geate olives, prosciutto di parma, & freshly seasoned mushrooms, great for any season."
      },
      {
        "item": "Gluten Free Cauliflower Quattro Formaggi 4 Cheese Pizza Fresh mozzarella, plum tomato sauce & a delicious blend of imported Provolone, fontina & pecorino Romano cheese.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Gluten Free Cauliflower Quattro Formaggi 4 Cheese Pizza",
        "item_desc": "Fresh mozzarella, plum tomato sauce & a delicious blend of imported Provolone, fontina & pecorino Romano cheese."
      },
      {
        "item": "Gluten Free Cauliflower Smoking Genteel Pizza Smoked fresh mozzarella, roasted pepper cream sauce wood-fired roasted peppers, sausage & topped with Imported Pecorino Romano.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Cauliflower Smoking Genteel Pizza Smoked",
        "item_desc": "fresh mozzarella, roasted pepper cream sauce wood-fired roasted peppers, sausage & topped with Imported Pecorino Romano."
      },
      {
        "item": "Gluten Free Cauliflower Dawn's Burrata Pizza Fresh mozzarella, garlic sauce, burrata, cherry tomatoes, basil & balsamic syrup.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Gluten Free Cauliflower Dawn's Burrata Pizza",
        "item_desc": "Fresh mozzarella, garlic sauce, burrata, cherry tomatoes, basil & balsamic syrup."
      },
      {
        "item": "Gluten Free Cauliflower Hot Honey Pizza Cup & char pepperoni & hot honey.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Cauliflower Hot Honey Pizza Cup & char pepperoni & hot honey.",
        "item_desc": ""
      },
      {
        "item": "Garlic Bread",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Garlic Bread",
        "item_desc": ""
      },
      {
        "item": "Garlic Bread with Melted Mozzarella Cheese",
        "price": "$6.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Garlic Bread with Melted Mozzarella Cheese",
        "item_desc": ""
      },
      {
        "item": "French Fries",
        "price": "$6.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French Fries",
        "item_desc": ""
      },
      {
        "item": "Mozzarella Sticks",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mozzarella Sticks",
        "item_desc": ""
      },
      {
        "item": "Chicken Tenders",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Tenders",
        "item_desc": ""
      },
      {
        "item": "Cheese Fries",
        "price": "$8.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Cheese Fries",
        "item_desc": ""
      },
      {
        "item": "Fresh Mussels",
        "price": "$16.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fresh Mussels",
        "item_desc": ""
      },
      {
        "item": "Fried Calamari",
        "price": "$16.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fried Calamari",
        "item_desc": ""
      },
      {
        "item": "Buffalo Wings",
        "price": "$15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Buffalo Wings",
        "item_desc": ""
      },
      {
        "item": "Breaded Zucchini Sticks",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Breaded Zucchini Sticks",
        "item_desc": ""
      },
      {
        "item": "Broccoli Bites",
        "price": "$8.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Broccoli Bites",
        "item_desc": ""
      },
      {
        "item": "Loaded Fries Fries with bacon.",
        "price": "$9.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Loaded Fries Fries",
        "item_desc": "with bacon."
      },
      {
        "item": "Buffalo Fries Hot sauce & blue cheese dressing.",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Buffalo Fries Hot sauce & blue cheese dressing.",
        "item_desc": ""
      },
      {
        "item": "Cajun Fries",
        "price": "$7.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cajun Fries",
        "item_desc": ""
      },
      {
        "item": "Garlic Knots",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Garlic Knots",
        "item_desc": ""
      },
      {
        "item": "Jalapeno Poppers",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jalapeno Poppers",
        "item_desc": ""
      },
      {
        "item": "Side Meatballs",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Side Meatballs",
        "item_desc": ""
      },
      {
        "item": "Side Broccoli",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Side Broccoli",
        "item_desc": ""
      },
      {
        "item": "Cream of Tomato Basil Soup",
        "price": "$6.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cream of Tomato Basil Soup",
        "item_desc": ""
      },
      {
        "item": "Garden Salad Spring mix, tomatoes, onions, peppers, cucumbers with balsamic dressing.",
        "price": "$11.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Garden Salad Spring mix, tomatoes, onions, peppers, cucumbers",
        "item_desc": "with balsamic dressing."
      },
      {
        "item": "Verde Salad Spring mix, sliced apples, tomatoes, walnuts, crumbled blue cheese and blue cheese dressing.",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Verde Salad Spring mix, sliced apples, tomatoes, walnuts, crumbled blue cheese and blue cheese dressing.",
        "item_desc": ""
      },
      {
        "item": "Caesar Salad Romaine lettuce and homemade croutons tossed with a caesar dressing.",
        "price": "$12.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Caesar Salad Romaine lettuce and homemade croutons tossed",
        "item_desc": "with a caesar dressing."
      },
      {
        "item": "Prosciutto, Mozzarella & Tomato Salad Mozzarella wrapped in prosciutto and tomato servel over spring mix with a balsamic vinaigrette.",
        "price": "$15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Prosciutto, Mozzarella & Tomato Salad Mozzarella wrapped in prosciutto and tomato servel over spring mix",
        "item_desc": "with a balsamic vinaigrette."
      },
      {
        "item": "Spinach Salad Spinach, bacon fresh mozzarella, tomatoes, boiled eggs and creamy italian dressing.",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spinach Salad Spinach, bacon",
        "item_desc": "fresh mozzarella, tomatoes, boiled eggs and creamy italian dressing."
      },
      {
        "item": "Antipasto Salad Mozzarella, ham, pepperoni, salami, roasted peppers black olive, artichokes over spring mix with creamy italian dressing.",
        "price": "$15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Antipasto Salad Mozzarella, ham, pepperoni, salami, roasted peppers black olive, artichokes over spring mix",
        "item_desc": "with creamy italian dressing."
      },
      {
        "item": "Sauteed Scallop Salad Scallops sauteed in a mediterranean mix of vegetables over spring mix.",
        "price": "$15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Sauteed Scallop Salad Scallops sauteed in a mediterranean mix of vegetables over spring mix.",
        "item_desc": ""
      },
      {
        "item": "Caprese Salad Sliced tomatoes fresh mozzarella, basil, roasted peppers drizzled with balsamic syrup.",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Caprese Salad Sliced tomatoes",
        "item_desc": "fresh mozzarella, basil, roasted peppers drizzled with balsamic syrup."
      },
      {
        "item": "Arugula Salad Pears, walnuts, tomatoes, lemon vinaigrette.",
        "price": "$12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Arugula Salad Pears, walnuts, tomatoes, lemon vinaigrette.",
        "item_desc": ""
      },
      {
        "item": "Brianna’s Strawberry Salad Spring mix, romaine, strawberries, walnuts, blue cheese crumbled & balsamic syrup.",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Brianna’s Strawberry Salad Spring mix, romaine, strawberries, walnuts, blue cheese crumbled & balsamic syrup.",
        "item_desc": ""
      },
      {
        "item": "Burrata Salad Spring mix, tomato, and roasted peppers drizzled with balsamic.",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Burrata Salad Spring mix, tomato, and roasted peppers drizzled",
        "item_desc": "with balsamic."
      },
      {
        "item": "Greek Salad Iceberg lettuce, tomato, cucumbers, onions, kalamata olives feta cheese, & peppers with greek dressing.",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Greek Salad Iceberg lettuce, tomato, cucumbers, onions, kalamata olives feta cheese, & peppers",
        "item_desc": "with greek dressing."
      },
      {
        "item": "Calzone Calzones & Strombolis. Filled with ricotta & mozzarella cheese",
        "price": "$13.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Calzone Calzones & Strombolis.",
        "item_desc": "Filled with ricotta & mozzarella cheese"
      },
      {
        "item": "Stromboli Calzones & Strombolis. Mozzarella cheese wrapped in pizza dough",
        "price": "$13.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Stromboli Calzones & Strombolis. Mozzarella cheese wrapped in pizza dough",
        "item_desc": ""
      },
      {
        "item": "Calzedia Calzones & Strombolis. Stuffed with fresh tomato, chicken, spinach, mozzarella & pesto dipping sauce",
        "price": "$15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Calzedia Calzones & Strombolis.",
        "item_desc": "Stuffed with fresh tomato, chicken, spinach, mozzarella & pesto dipping sauce"
      },
      {
        "item": "Cheesesteak Sandwich",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cheesesteak Sandwich",
        "item_desc": ""
      },
      {
        "item": "Chicken Cheesesteak Sandwich",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Cheesesteak Sandwich",
        "item_desc": ""
      },
      {
        "item": "Italian Sub Ham, pepperoni, salami, mozzarella, lettuce, tomato, onions, oil & vinegar served on hoagie roll.",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Italian Sub Ham, pepperoni, salami, mozzarella, lettuce, tomato, onions, oil & vinegar",
        "item_desc": "served on hoagie roll."
      },
      {
        "item": "Grilled Chicken Mozzarella Sandwich Chicken, melted mozzarella, lettuce, tomato, onions & mayo served on a hoagie roll.",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Grilled Chicken Mozzarella Sandwich Chicken, melted mozzarella, lettuce, tomato, onions & mayo",
        "item_desc": "served on a hoagie roll."
      },
      {
        "item": "Tomato, Eggplant & Mozzarella Sandwich Tomato, eggplant & mozzarella drizzled with balsamic a served on a hoagie roll.",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Tomato, Eggplant & Mozzarella Sandwich Tomato, eggplant & mozzarella drizzled",
        "item_desc": "with balsamic a served on a hoagie roll."
      },
      {
        "item": "Smoked Turkey Sandwich Turkey, lettuce, sliced tomatoes, onion drizzle with oil and vinegar severd on a hoagie roll.",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Smoked Turkey Sandwich Turkey, lettuce, sliced tomatoes, onion drizzle",
        "item_desc": "with oil and vinegar severd on a hoagie roll."
      },
      {
        "item": "Eggplant Parmigiana Sandwich",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Eggplant Parmigiana Sandwich",
        "item_desc": ""
      },
      {
        "item": "Grilled Buffalo Chicken Sandwich Chicken tossed in buffalo sauce, lettuce & blue cheese served on a hoagie roll.",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Grilled Buffalo Chicken Sandwich Chicken tossed in buffalo sauce, lettuce & blue cheese",
        "item_desc": "served on a hoagie roll."
      },
      {
        "item": "Meatball Parmigiana Sandwich",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Meatball Parmigiana Sandwich",
        "item_desc": ""
      },
      {
        "item": "Chicken Parmigiana Sandwich",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Parmigiana Sandwich",
        "item_desc": ""
      },
      {
        "item": "Drunken Chicken Parmigiana Sandwich With vodka sauce.",
        "price": "$11.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Drunken Chicken Parmigiana Sandwich",
        "item_desc": "With vodka sauce."
      },
      {
        "item": "Sausage Parmigiana Sandwich",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sausage Parmigiana Sandwich",
        "item_desc": ""
      },
      {
        "item": "Sausage, Peppers & Onions Sandwich",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sausage, Peppers & Onions Sandwich",
        "item_desc": ""
      },
      {
        "item": "Spring Veggie Wrap Tomato, eggplant, mushrooms, roasted peppers, mozzarella, lettuce & balsamic.",
        "price": "$12.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Spring Veggie Wrap Tomato, eggplant, mushrooms, roasted peppers, mozzarella, lettuce & balsamic.",
        "item_desc": ""
      },
      {
        "item": "Cajun Chicken Sandwich Cajun Chicken, lettuce, tomato, onions & mayo served on a hoagie roll.",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cajun Chicken Sandwich Cajun Chicken, lettuce, tomato, onions & mayo",
        "item_desc": "served on a hoagie roll."
      },
      {
        "item": "Turkey Wrap Turkey, tomatoes, roasted peppers, mozzarella, lettuce & honey mustard.",
        "price": "$12.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Turkey Wrap Turkey, tomatoes, roasted peppers, mozzarella, lettuce & honey mustard.",
        "item_desc": ""
      },
      {
        "item": "Veal Parmigiana Sandwich",
        "price": "$11.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Veal Parmigiana Sandwich",
        "item_desc": ""
      },
      {
        "item": "Chicken Caesar Wrap",
        "price": "$12.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Caesar Wrap",
        "item_desc": ""
      },
      {
        "item": "Brielle’s Chicken Caprese Sandwich Grilled chicken, arugula, sliced tomato fresh mozzarella, roasted peppers and balsamic syrup",
        "price": "$10.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brielle’s Chicken Caprese Sandwich Grilled chicken, arugula, sliced tomato",
        "item_desc": "fresh mozzarella, roasted peppers and balsamic syrup"
      },
      {
        "item": "Chicken Cutlet Sandwich Chicken cutlet with lettuce, tomato, onions & mayo.",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Cutlet Sandwich Chicken cutlet",
        "item_desc": "with lettuce, tomato, onions & mayo."
      },
      {
        "item": "Spaghetti Marinara Pasta",
        "price": "$15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spaghetti Marinara Pasta",
        "item_desc": ""
      },
      {
        "item": "Spaghetti with Meatballs Pasta",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spaghetti",
        "item_desc": "with Meatballs Pasta"
      },
      {
        "item": "Penne with Broccoli Pasta. Penne and broccoli in garlic and oil or marinara sauce",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Penne",
        "item_desc": "with Broccoli Pasta. Penne and broccoli in garlic and oil or marinara sauce"
      },
      {
        "item": "Cheese Tortellini Marinara Pasta",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Cheese Tortellini Marinara Pasta",
        "item_desc": ""
      },
      {
        "item": "Pasta Alfredo Pasta",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pasta Alfredo Pasta",
        "item_desc": ""
      },
      {
        "item": "Cheese Ravioli Pasta",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Cheese Ravioli Pasta",
        "item_desc": ""
      },
      {
        "item": "Spaghetti Vongole Pasta. Baby clams sautéed in white wine and garlic or in a marinara sauce",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spaghetti Vongole Pasta. Baby clams sautéed in white wine and",
        "item_desc": "garlic or in a marinara sauce"
      },
      {
        "item": "Linguine & Sun Dried Tomatoes Pasta. Spinach & sun-dried tomatoes served in a light alfredo sauce",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Linguine & Sun Dried Tomatoes Pasta. Spinach & sun-dried tomatoes",
        "item_desc": "served in a light alfredo sauce"
      },
      {
        "item": "Baked Ziti Pasta. Ricotta cheese, marinara topped with melted mozzarella",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Baked Ziti Pasta. Ricotta cheese, marinara",
        "item_desc": "topped with melted mozzarella"
      },
      {
        "item": "Spaghetti Bolognese Pasta. With pink meat sauce",
        "price": "$18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spaghetti Bolognese Pasta.",
        "item_desc": "With pink meat sauce"
      },
      {
        "item": "Fusilli Puttanesca Pasta. Fusilli pasta, black olives, capers and anchovies served in a spicy sauce",
        "price": "$18.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fusilli Puttanesca Pasta. Fusilli pasta, black olives, capers and anchovies",
        "item_desc": "served in a spicy sauce"
      },
      {
        "item": "Penne Vodka Pasta. Penne served in a pink vodka cream sauce",
        "price": "$17.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Penne Vodka Pasta. Penne",
        "item_desc": "served in a pink vodka cream sauce"
      },
      {
        "item": "Cavatelli & Sausage Pasta. Cavatelli with hot sausage and broccoli rabe served in a light marinara sauce",
        "price": "$19.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cavatelli & Sausage Pasta. Cavatelli",
        "item_desc": "with hot sausage and broccoli rabe served in a light marinara sauce"
      },
      {
        "item": "Penne with Broccoli Rabe & Sausage Pasta. Sauteed broccoli rabe with white wine, garlic, olive oil and sausage",
        "price": "$19.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Penne",
        "item_desc": "with Broccoli Rabe & Sausage Pasta. Sauteed broccoli rabe with white wine, garlic, olive oil and sausage"
      },
      {
        "item": "Tortellini Fungi Pasta. Tortellini, wild mushroom, chicken, peas and prosciutto in a demi cream sauce",
        "price": "$19.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tortellini Fungi Pasta. Tortellini, wild mushroom, chicken, peas and prosciutto in a demi cream sauce",
        "item_desc": ""
      },
      {
        "item": "Fettuccine Alfredo Pasta",
        "price": "$18.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fettuccine Alfredo Pasta",
        "item_desc": ""
      },
      {
        "item": "Penne Classico Pasta. Fresh diced tomatoes, garlic, basil, fresh mozzarella with a touch of marinara",
        "price": "$18.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Penne Classico Pasta.",
        "item_desc": "Fresh diced tomatoes, garlic, basil, fresh mozzarella with a touch of marinara"
      },
      {
        "item": "Pasta Arrabiata Pasta. Pepperoncini peppers, diced tomatoes fresh garlic & marinara",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pasta Arrabiata Pasta. Pepperoncini peppers, diced tomatoes",
        "item_desc": "fresh garlic & marinara"
      },
      {
        "item": "Gluten Free Penne Pasta",
        "price": "$13.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Penne Pasta",
        "item_desc": ""
      },
      {
        "item": "Eggplant Parmigiana Fresh breaded eggplant served with our own homemade marinara sauce and topped with mozzarella and served on a bed of linguini.",
        "price": "$20.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Eggplant Parmigiana",
        "item_desc": "Fresh breaded eggplant served with our own homemade marinara sauce and topped with mozzarella and served on a bed of linguini."
      },
      {
        "item": "Chicken Francaise Chicken breast sauteed with lemon butter sauce served over linguini.",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Francaise Chicken breast sauteed",
        "item_desc": "with lemon butter sauce served over linguini."
      },
      {
        "item": "Chicken Marsala Grilled breast of chicken with sauteed mushrooms and our own marsala wine sauce served on a bed of linguini.",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Marsala Grilled breast of chicken",
        "item_desc": "with sauteed mushrooms and our own marsala wine sauce served on a bed of linguini."
      },
      {
        "item": "Chicken Parmigiana Lightly breaded chicken breasts served with our homemade marinara sauce and mozzarella cheese over a bed of linguini.",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Parmigiana Lightly breaded chicken breasts",
        "item_desc": "served with our homemade marinara sauce and mozzarella cheese over a bed of linguini."
      },
      {
        "item": "Chicken A La Gentel Sauteed Chicken with Prosciutto, Spinach, Tomatoes and Fresh Mozzarella. Served Napoleon Style",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken A La Gentel Sauteed Chicken",
        "item_desc": "with Prosciutto, Spinach, Tomatoes and Fresh Mozzarella. Served Napoleon Style"
      },
      {
        "item": "Veal Francaise",
        "price": "$23.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Veal Francaise",
        "item_desc": ""
      },
      {
        "item": "Veal Parmigiana Fresh Veal Cutlets Served on a Bed of Linguini with Our Homemade Marinara Sauce. and Topped with Melted Mozzarella",
        "price": "$23.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Veal Parmigiana",
        "item_desc": "Fresh Veal Cutlets Served on a Bed of Linguini with Our Homemade Marinara Sauce. and Topped with Melted Mozzarella"
      },
      {
        "item": "Veal Marsala Veal gently sauteed in our own marsala wine sauce with fresh mushrooms. Served over a bed a linguini.",
        "price": "$23.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Veal Marsala Veal gently sauteed in our own marsala wine sauce",
        "item_desc": "with fresh mushrooms. Served over a bed a linguini."
      },
      {
        "item": "Eggplant Rollotini Breaded eggplant stuffed with spinach, ricotta cheese and garlic topped with our homemade marinara sauce and melted mozzarella served with linguini.",
        "price": "$21.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Eggplant Rollotini Breaded eggplant",
        "item_desc": "stuffed with spinach, ricotta cheese and garlic topped with our homemade marinara sauce and melted mozzarella served with linguini."
      },
      {
        "item": "Veal Saltimbucca Pan seared veal cutlet topped with sliced ham, spinach. Mushrooms and melted mozzarella served over linguini in a demi sauce..",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Veal Saltimbucca Pan seared veal cutlet",
        "item_desc": "topped with sliced ham, spinach. Mushrooms and melted mozzarella served over linguini in a demi sauce.."
      },
      {
        "item": "Chicken Saltimbucca Pan seared chicken topped with sliced ham, spinach, mushrooms and melted mozzarella, served over linguini in a demi sauce.",
        "price": "$23.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Saltimbucca Pan seared chicken",
        "item_desc": "topped with sliced ham, spinach, mushrooms and melted mozzarella, served over linguini in a demi sauce."
      },
      {
        "item": "Gluten Free Chicken Marsala",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Chicken Marsala",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Chicken Frances",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Chicken Frances",
        "item_desc": ""
      },
      {
        "item": "Calmarone Breaded and fried calamari served sauteed in our homemade marinara sauce. Served over linguini.",
        "price": "$22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Calmarone Breaded and fried calamari",
        "item_desc": "served sauteed in our homemade marinara sauce. Served over linguini."
      },
      {
        "item": "Shrimp Fusilli Jumbo shrimp with sauteed mushrooms, shallots, roasted red peppers and artichoke hearts in a lemon white wine sauce.",
        "price": "$22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Fusilli Jumbo shrimp",
        "item_desc": "with sauteed mushrooms, shallots, roasted red peppers and artichoke hearts in a lemon white wine sauce."
      },
      {
        "item": "Shrimp Pomodoro Jumbo shrimp, diced tomatoes garlic feta cheese and baby spinach sauteed in white wine served over fettuccini.",
        "price": "$22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Pomodoro Jumbo shrimp, diced tomatoes",
        "item_desc": "garlic feta cheese and baby spinach sauteed in white wine served over fettuccini."
      },
      {
        "item": "Seafood Fra Diavolo Mussels, shrimp, scallops, clams and calamari served over linguini in a spicy marinara.",
        "price": "$24.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Seafood Fra Diavolo Mussels, shrimp, scallops, clams and calamari",
        "item_desc": "served over linguini in a spicy marinara."
      },
      {
        "item": "Shrimp Scampi Shrimp sauteed with white wine and fresh garlic over linguini.",
        "price": "$22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shrimp Scampi Shrimp sauteed",
        "item_desc": "with white wine and fresh garlic over linguini."
      },
      {
        "item": "Mussels Linguine Mussels sauteed in a white wine garlic sauce or in a homemade marinara sauce over linguini.",
        "price": "$22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mussels Linguine Mussels sauteed in a white wine",
        "item_desc": "garlic sauce or in a homemade marinara sauce over linguini."
      },
      {
        "item": "Tea",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tea",
        "item_desc": ""
      },
      {
        "item": "Coffee",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Coffee",
        "item_desc": ""
      },
      {
        "item": "Soda",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Soda",
        "item_desc": ""
      },
      {
        "item": "Iced Tea",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Iced Tea",
        "item_desc": ""
      },
      {
        "item": "Lemonade",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lemonade",
        "item_desc": ""
      },
      {
        "item": "Pellegrino",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pellegrino",
        "item_desc": ""
      },
      {
        "item": "Cannoli",
        "price": "$4.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cannoli",
        "item_desc": ""
      },
      {
        "item": "Zeppoli",
        "price": "$6.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Zeppoli",
        "item_desc": ""
      },
      {
        "item": "Chicken Tenders Catering",
        "price": "$47.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Tenders Catering",
        "item_desc": ""
      },
      {
        "item": "French Fries Catering",
        "price": "$35.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French Fries Catering",
        "item_desc": ""
      },
      {
        "item": "Gralic Knots Catering",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gralic Knots Catering",
        "item_desc": ""
      },
      {
        "item": "Turkey Sub Catering",
        "price": "$70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Turkey Sub Catering",
        "item_desc": ""
      },
      {
        "item": "Italian Sub Catering",
        "price": "$70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Italian Sub Catering",
        "item_desc": ""
      },
      {
        "item": "Grilled Chicken Sandwich With roasted peppers & mixed greens.",
        "price": "$82.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Grilled Chicken Sandwich",
        "item_desc": "With roasted peppers & mixed greens."
      },
      {
        "item": "Caesar Salad Catering 24-HOUR NOTICE.",
        "price": "$45.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Caesar Salad Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Garden Salad Catering 24-HOUR NOTICE.",
        "price": "$45.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Garden Salad Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Green Salad 24-HOUR NOTICE.",
        "price": "$50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Green Salad 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Brianna's Strawberry Salad 24-HOUR NOTICE.",
        "price": "$50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brianna's Strawberry Salad 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Antipasto Salad Catering 24-HOUR NOTICE.",
        "price": "$55.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Antipasto Salad Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Mussels Marinara Catering 24-HOUR NOTICE.",
        "price": "$60.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mussels Marinara Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Meatballs Marinara Catering 24-HOUR NOTICE.",
        "price": "$60.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Meatballs Marinara Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Italian Sausage Marinara Catering 24-HOUR NOTICE.",
        "price": "$60.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Italian Sausage Marinara Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Sausage, Peppers, Onions Catering 24-HOUR NOTICE.",
        "price": "$65.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sausage, Peppers, Onions Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Penne Classico Catering 24-HOUR NOTICE.",
        "price": "$65.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Penne Classico Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Baked Ziti Catering 24-HOUR NOTICE.",
        "price": "$52.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Baked Ziti Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Penne Vodka Catering 24-HOUR NOTICE.",
        "price": "$55.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Penne Vodka Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Spaghetti Bolognese Catering 24-HOUR NOTICE.",
        "price": "$60.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spaghetti Bolognese Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Cavatelli Sausage Catering 24-HOUR NOTICE.",
        "price": "$60.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cavatelli Sausage Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Penne Broccoli Catering 24-HOUR NOTICE.",
        "price": "$55.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Penne Broccoli Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Spaghetti Marinara Catering 24-HOUR NOTICE.",
        "price": "$44.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spaghetti Marinara Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Baked Manicotti Catering 24-HOUR NOTICE.",
        "price": "$45.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Baked Manicotti Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Chicken Marsala Catering 24-HOUR NOTICE.",
        "price": "$65.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Marsala Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Eggplant Parmigiana Catering 24-HOUR NOTICE.",
        "price": "$50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Eggplant Parmigiana Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Chicken Parmigiana Catering 24-HOUR NOTICE.",
        "price": "$65.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Parmigiana Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Chicken Francaise Catering 24-HOUR NOTICE.",
        "price": "$65.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Francaise Catering 24-HOUR NOTICE.",
        "item_desc": ""
      },
      {
        "item": "Napolitana Plain Pie Non Display Products",
        "price": "$18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Napolitana Plain Pie Non Display Products",
        "item_desc": ""
      }
    ]
  },
  {
    "name": "Local Greek",
    "items": [
      {
        "item": "$ 10.95 AVGOLEMONO Chicken soup thickened with egg and lemon mixture $ 10.95",
        "price": "$ 10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "AVGOLEMONO Chicken soup",
        "item_desc": "AVGOLEMONO Chicken soup thickened with egg and lemon mixture"
      },
      {
        "item": "$ 17.95 THE VILLAGE SALAD (HORIATIKI) Local tomato, red onions, cucumber, green peppers, feta cheese, Kalamata olives, topped with organic olive oil and vinegar (gf,vg,vn*) $ 17.95",
        "price": "$ 17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "THE VILLAGE SALAD (HORIATIKI)",
        "item_desc": "Local tomato, red onions, cucumber, green peppers, feta cheese, Kalamata olives, topped with organic olive oil and vinegar (gf,vg,vn*)"
      },
      {
        "item": "$ 17.95 MAROULI SALAD Fresh romaine lettuce mixed with olive oil, herbs, and feta cheese $ 17.95",
        "price": "$ 17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "MAROULI SALAD",
        "item_desc": "Fresh romaine lettuce mixed with olive oil, herbs, and feta cheese"
      },
      {
        "item": "$ 17.95 BEETS SALAD Beets, arugula, oranges, walnuts fresh Greek herbs, topped with yogurt sauce and balsamic vinaigrette (gf,vg) $ 17.95",
        "price": "$ 17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "BEETS SALAD",
        "item_desc": "Beets, arugula, oranges, walnuts fresh Greek herbs, topped with yogurt sauce and balsamic vinaigrette (gf,vg)"
      },
      {
        "item": "$ 24.95 GREEK SPREADS Tzatziki spicy feta, eggplant & hummus served with pita bread (gf,vg) $ 24.95",
        "price": "$ 24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "GREEK SPREADS Tzatziki",
        "item_desc": "spicy feta, eggplant & hummus served with pita bread (gf,vg)"
      },
      {
        "item": "$ 26.95 OCTOPUS Grilled marinated octopus with fava beans purée, Greek herbs, olive oil vinaigrette (gf) $ 26.95",
        "price": "$ 26.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "OCTOPUS Grilled",
        "item_desc": "Grilled marinated octopus with fava beans purée, Greek herbs, olive oil vinaigrette (gf)"
      },
      {
        "item": "$ 18.95 FETA FOURNOU Baked feta with tomatoes, peppers, olive oil and herbs, baked in oven $ 18.95",
        "price": "$ 18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "FETA FOURNOU Baked feta",
        "item_desc": "Baked feta with tomatoes, peppers, olive oil and herbs, baked in oven"
      },
      {
        "item": "$ 21.95 FRIED CALAMARI Fried squid olive and lemon vinaigrette Greek herbs & marinara sauce $ 21.95",
        "price": "$ 21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "FRIED CALAMARI",
        "item_desc": "Fried squid olive and lemon vinaigrette Greek herbs & marinara sauce"
      },
      {
        "item": "$ 18.95 HALLOUMI Grilled halloumi cheese, drunken figs and honey with balsamic glaze (gf,vg) $ 18.95",
        "price": "$ 18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "HALLOUMI Grilled halloumi cheese, drunken figs and honey",
        "item_desc": "with balsamic glaze (gf,vg)"
      },
      {
        "item": "$ 19.95 ZUCCHINI FRITTERS Pan fried savory zucchini patties made from shredded zucchini, eggs and flour $ 19.95",
        "price": "$ 19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "ZUCCHINI FRITTERS Pan fried savory zucchini patties",
        "item_desc": "made from shredded zucchini, eggs and flour"
      },
      {
        "item": "$ 15.95 DOLMADES Grape leaves stuffed with rice & Greek herbs, yogurt (gf, vg, vn*) $ 15.95",
        "price": "$ 15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "DOLMADES Grape leaves",
        "item_desc": "stuffed with rice & Greek herbs, yogurt (gf, vg, vn*)"
      },
      {
        "item": "$ 10.95 HUMMUS Chick pea garlic, lemon, tahini & olive oil served with pita bread (vg,vn) $ 10.95",
        "price": "$ 10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "HUMMUS Chick pea",
        "item_desc": "garlic, lemon, tahini & olive oil served with pita bread (vg,vn)"
      },
      {
        "item": "$ 19.95 KEFTEDES Greek homestyle meatballs $ 19.95",
        "price": "$ 19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "KEFTEDES Greek homestyle meatballs",
        "item_desc": "Greek homestyle meatballs"
      },
      {
        "item": "$ 17.95 GIGANTES large white beans baked in rich herby tomato sauce w/ onions, garlic, olive oil $ 17.95",
        "price": "$ 17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "GIGANTES large white beans baked in",
        "item_desc": "rich herby tomato sauce w/ onions, garlic, olive oil"
      },
      {
        "item": "$ 22.95 SHRIMP SAGANAKI Shrimp with cherry tomoatoes, feta, and ouzo $ 22.95",
        "price": "$ 22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "SHRIMP SAGANAKI Shrimp",
        "item_desc": "with cherry tomoatoes, feta, and ouzo"
      },
      {
        "item": "$ 26.95 GREEK GYRO PLATTER Choice of (Pork, chicken, beef/lamb, veggies, tomato fritters), wrapped in pita with tzatziki, onions & tomatoes, served with village salad & one side (gf*,vg*,vn*) $ 26.95",
        "price": "$ 26.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "GREEK GYRO PLATTER Choice of (Pork, chicken, beef/lamb, veggies, tomato fritters), wrapped in pita",
        "item_desc": "with tzatziki, onions & tomatoes, served with village salad & one side (gf*,vg*,vn*)"
      },
      {
        "item": "$ 34.95 LAMB SOUVLAKI Grilled lamb kebab served with village salad & one side (gf) $ 34.95",
        "price": "$ 34.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 34.95 LAMB SOUVLAKI Grilled lamb kebab",
        "item_desc": "served with village salad & one side (gf) $ 34.95"
      },
      {
        "item": "$ 36.95 STIFADO BEEF BRISKET Slow cooked tender brisket with mashed potatoes $ 36.95",
        "price": "$ 36.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 36.95 STIFADO BEEF BRISKET Slow",
        "item_desc": "cooked tender brisket with mashed potatoes $ 36.95"
      },
      {
        "item": "$ 44.95 LAMB CHOPS Grilled marinated lamb chops, village salad & one side (gf) $ 44.95",
        "price": "$ 44.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 44.95 LAMB CHOPS Grilled",
        "item_desc": "marinated lamb chops, village salad & one side (gf) $ 44.95"
      },
      {
        "item": "$ 26.95 CHICKEN SOUVLAKI Grilled chicken kebab served with village salad & one side (gf) $ 26.95",
        "price": "$ 26.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 26.95 CHICKEN SOUVLAKI Grilled chicken kebab",
        "item_desc": "served with village salad & one side (gf) $ 26.95"
      },
      {
        "item": "$ 32.95 VILLAGE STUFFED CHICKEN Stuffed chicken breast filled with feta, spinach, tomatoes, onions, peppers, dill, lemon butter sauce, village salad & one side (gf) $ 32.95",
        "price": "$ 32.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 32.95 VILLAGE",
        "item_desc": "STUFFED CHICKEN Stuffed chicken breast filled with feta, spinach, tomatoes, onions, peppers, dill, lemon butter sauce, village salad & one side (gf) $ 32.95"
      },
      {
        "item": "$ 98.95 MIX GRILL PLATTER FOR 2 Pork gyro, chicken gyro, beef/ lamb gyro, Greek sausage, sticks of pork & chicken souvlaki, keftedes, Greek fries, pita bread, grilled vegetables, feta cheese & tomatoes $ 98.95",
        "price": "$ 98.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 98.95 MIX GRILL PLATTER FOR 2 Pork gyro, chicken gyro, beef/ lamb gyro, Greek sausage, sticks of pork & chicken souvlaki, keftedes, Greek fries, pita bread, grilled vegetables, feta cheese & tomatoes $ 98.95",
        "item_desc": ""
      },
      {
        "item": "$ 179.95 MIX GRILL PLATTER FOR 4 Pork gyro, chicken gyro, beef/ lamb gyro, Greek sausage, sticks of pork & chicken souvlaki, keftedes, Greek fries, pita bread, grilled vegetables, feta cheese & tomatoes $ 179.95",
        "price": "$ 179.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 179.95 MIX GRILL PLATTER FOR 4 Pork gyro, chicken gyro, beef/ lamb gyro, Greek sausage, sticks of pork & chicken souvlaki, keftedes, Greek fries, pita bread, grilled vegetables, feta cheese & tomatoes $ 179.95",
        "item_desc": ""
      },
      {
        "item": "$ 28.95 MOUSAKAS Slow cooked ground beef, eggplant, potatoes & bechamel sauce on the top $ 28.95",
        "price": "$ 28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 28.95 MOUSAKAS Slow",
        "item_desc": "cooked ground beef, eggplant, potatoes & bechamel sauce on the top $ 28.95"
      },
      {
        "item": "$ 28.95 PASTITSIO Greek style lasagna with slow cooked ground beef and bechamel sauce on the top $ 28.95",
        "price": "$ 28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 28.95 PASTITSIO Greek style lasagna",
        "item_desc": "with slow cooked ground beef and bechamel sauce on the top $ 28.95"
      },
      {
        "item": "$ 41.95 GRILLED BRANZINO Grilled whole bone in branzino with olive oil lemon vinaigrette, served with village salad & one side (gf) $ 41.95",
        "price": "$ 41.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 41.95 GRILLED BRANZINO Grilled whole bone",
        "item_desc": "in branzino with olive oil lemon vinaigrette, served with village salad & one side (gf) $ 41.95"
      },
      {
        "item": "$ 24.95 GREEK TERINA Eggplant layers with cheese, tomato, olive oil and herbs $ 24.95",
        "price": "$ 24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "$ 24.95 GREEK TERINA Eggplant layers",
        "item_desc": "with cheese, tomato, olive oil and herbs $ 24.95"
      },
      {
        "item": "$ 33.95 SOLOMOS Grilled Alaskan salmon served with village salad & one side (gf) $ 33.95",
        "price": "$ 33.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 33.95 SOLOMOS Grilled Alaskan salmon",
        "item_desc": "served with village salad & one side (gf) $ 33.95"
      },
      {
        "item": "$ 23.95 HOMESTYLE SPINACH PIE Served with village salad (vg) $ 23.95",
        "price": "$ 23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "$ 23.95 HOMESTYLE SPINACH PIE",
        "item_desc": "Served with village salad (vg) $ 23.95"
      },
      {
        "item": "$ 30.95 SHRIMP SOUVLAKI Shrimp kebab over rice, baby kale & avocado (gf) $ 30.95",
        "price": "$ 30.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 30.95 SHRIMP SOUVLAKI Shrimp kebab over rice, baby kale & avocado (gf) $ 30.95",
        "item_desc": ""
      },
      {
        "item": "$ 38.95 GREEK PAELLA FOR ONE Variety of shrimp, mussels, calamari, octopus, chicken, greek sausage, greek herbs, olive oil & pita bread $ 38.95",
        "price": "$ 38.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 38.95 GREEK PAELLA FOR ONE Variety of shrimp, mussels, calamari, octopus, chicken, greek sausage, greek herbs, olive oil & pita bread $ 38.95",
        "item_desc": ""
      },
      {
        "item": "$ 76.95 GREEK PAELLA FOR TWO Variety of shrimp, mussels, calamari, octopus, chicken, greek sausage, greek herbs, olive oil & pita bread $ 76.95",
        "price": "$ 76.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 76.95 GREEK PAELLA FOR TWO Variety of shrimp, mussels, calamari, octopus, chicken, greek sausage, greek herbs, olive oil & pita bread $ 76.95",
        "item_desc": ""
      },
      {
        "item": "$ 24.95 STUFFED PEPPERS Roasted bell peppers with rice, eggplant, tomatoes, Greek herbs, olive oil, served with lemon potatoes & yogurt (gf,vg,vn*) $ 24.95",
        "price": "$ 24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "$ 24.95",
        "item_desc": "STUFFED PEPPERS Roasted bell peppers with rice, eggplant, tomatoes, Greek herbs, olive oil, served with lemon potatoes & yogurt (gf,vg,vn*) $ 24.95"
      },
      {
        "item": "$ 8.95 GREEK FRIES Hand cut fries topped with feta & oregano (vg,vn*) $ 8.95",
        "price": "$ 8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 8.95 GREEK FRIES Hand cut fries",
        "item_desc": "topped with feta & oregano (vg,vn*) $ 8.95"
      },
      {
        "item": "$ 8.95 GREEK STYLE LEMON POTATOES Baked in the oven potatoes with lemon juice and olive oil (vg,vn) $ 8.95",
        "price": "$ 8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "$ 8.95 GREEK STYLE LEMON POTATOES Baked in the oven potatoes",
        "item_desc": "with lemon juice and olive oil (vg,vn) $ 8.95"
      },
      {
        "item": "$ 8.95 GREEK RICE Rice with olive oil and lemon (vg) $ 8.95",
        "price": "$ 8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 8.95 GREEK RICE Rice",
        "item_desc": "with olive oil and lemon (vg) $ 8.95"
      },
      {
        "item": "$ 8.95 GREEK SALAD Tomato, cucumbers, onions with feta cheese and olives (vg,vn*) $ 8.95",
        "price": "$ 8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "$ 8.95 GREEK SALAD Tomato, cucumbers, onions",
        "item_desc": "with feta cheese and olives (vg,vn*) $ 8.95"
      },
      {
        "item": "$ 12.95 GALAKTOBOUREKO Fillo dough filled with semolina custard, topped with Greek honey & syrup $ 12.95",
        "price": "$ 12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 12.95 GALAKTOBOUREKO Fillo dough",
        "item_desc": "filled with semolina custard, topped with Greek honey & syrup $ 12.95"
      },
      {
        "item": "$ 12.95 BAKLAVA Fillo dough filled with crushed almond & walnuts, topped with Greek honey & syrup $ 12.95",
        "price": "$ 12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 12.95 BAKLAVA Fillo dough",
        "item_desc": "filled with crushed almond & walnuts, topped with Greek honey & syrup $ 12.95"
      },
      {
        "item": "$ 12.95 BOUGATSA Handmade dough filled with a blend of semolina custard $ 12.95",
        "price": "$ 12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 12.95 BOUGATSA Handmade dough",
        "item_desc": "filled with a blend of semolina custard $ 12.95"
      },
      {
        "item": "$ 12.95 PORTOKALOPITA Homemade orange cake $ 12.95",
        "price": "$ 12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 12.95 PORTOKALOPITA Homemade orange cake $ 12.95",
        "item_desc": ""
      },
      {
        "item": "$ 12.95 EKMEK KATAIFI Shredded dough with Greek honey, layers of Greek and french cream topped with walnuts $ 12.95",
        "price": "$ 12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 12.95 EKMEK KATAIFI Shredded dough",
        "item_desc": "with Greek honey, layers of Greek and french cream topped with walnuts $ 12.95"
      },
      {
        "item": "$ 3.95",
        "price": "$ 3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 3.95",
        "item_desc": ""
      },
      {
        "item": "$ 4.95 AMERICANO $ 4.95",
        "price": "$ 4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 4.95 AMERICANO $ 4.95",
        "item_desc": ""
      },
      {
        "item": "$ 6.95 LATTE / CAPPUCCINO $ 6.95",
        "price": "$ 6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 6.95 LATTE / CAPPUCCINO $ 6.95",
        "item_desc": ""
      },
      {
        "item": "$ 5.95",
        "price": "$ 5.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 5.95",
        "item_desc": ""
      },
      {
        "item": "$ 6.95 GREEK FRAPPE (ICED) $ 6.95",
        "price": "$ 6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 6.95 GREEK FRAPPE (ICED) $ 6.95",
        "item_desc": ""
      },
      {
        "item": "$ 3.95 AMERICAN COFFEE $ 3.95",
        "price": "$ 3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 3.95 AMERICAN COFFEE $ 3.95",
        "item_desc": ""
      },
      {
        "item": "$ 5.95 GREEK MOUNTAIN TEA $ 5.95",
        "price": "$ 5.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 5.95 GREEK MOUNTAIN TEA $ 5.95",
        "item_desc": ""
      },
      {
        "item": "$ 4.95 SODA / ICED TEA / LEMONADE $ 4.95",
        "price": "$ 4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 4.95 SODA / ICED TEA / LEMONADE $ 4.95",
        "item_desc": ""
      },
      {
        "item": "$ 14.95 THE GREEK PARFAIT Granola, organic Greek yogurt fresh fruits & Greek honey $ 14.95",
        "price": "$ 14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 14.95 THE GREEK PARFAIT Granola, organic Greek yogurt",
        "item_desc": "fresh fruits & Greek honey $ 14.95"
      },
      {
        "item": "$ 15.95 GREEK STYLE PANCAKES Topped with crushed walnuts, powder sugar, maple syrup 15.95 add fresh fruits 4.50 $ 15.95",
        "price": "$ 15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 15.95 GREEK STYLE PANCAKES Topped with crushed walnuts, powder sugar, maple syrup 15.95",
        "item_desc": "add fresh fruits 4.50 $ 15.95"
      },
      {
        "item": "$ 15.95 GREEK FRENCH TOAST Topped with crushed walnuts, sugar powder, maple syrup 15.95 add fresh fruits 4.50 $ 15.95",
        "price": "$ 15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 15.95 GREEK FRENCH TOAST Topped with crushed walnuts, sugar powder, maple syrup 15.95",
        "item_desc": "add fresh fruits 4.50 $ 15.95"
      },
      {
        "item": "$ 14.95 SPANAKI SANDWICH Scrambled eggs local spinach, cherry tomatoes, feta cheese served with Greek fries $ 14.95",
        "price": "$ 14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "$ 14.95 SPANAKI SANDWICH Scrambled eggs",
        "item_desc": "local spinach, cherry tomatoes, feta cheese served with Greek fries $ 14.95"
      },
      {
        "item": "$ 16.95 THE SUPER GREEK Three over medium eggs, onions, peppers, cherry tomatoes, Kalamata olives, feta, mushrooms, avocado & Greek fries 16.95 add Greek sausage 2.95 $ 16.95",
        "price": "$ 16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 16.95 THE SUPER GREEK Three over medium eggs, onions, peppers, cherry tomatoes, Kalamata olives, feta, mushrooms, avocado & Greek fries 16.95",
        "item_desc": "add Greek sausage 2.95 $ 16.95"
      },
      {
        "item": "$ 14.95 LOCAL SPINACH FETA OMELETTE Fresh spinach, feta, cherry tomatoes, onions, with Greek fries $ 14.95",
        "price": "$ 14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "$ 14.95",
        "item_desc": "LOCAL SPINACH FETA OMELETTE Fresh spinach, feta, cherry tomatoes, onions, with Greek fries $ 14.95"
      },
      {
        "item": "$ 15.95 LOCAL GYRO OMELETTE Choice of (beef/lamb, pork) onions, cherry tomatoes, feta cheese & Greek fries $ 15.95",
        "price": "$ 15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 15.95",
        "item_desc": "LOCAL GYRO OMELETTE Choice of (beef/lamb, pork) onions, cherry tomatoes, feta cheese & Greek fries $ 15.95"
      },
      {
        "item": "$ 16.95 LAMB BURGER Lamb patty spicy feta yogurt sauce, kasseri cheese, onions, tomatoes served on pita & Greek fries $ 16.95",
        "price": "$ 16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 16.95 LAMB BURGER Lamb patty",
        "item_desc": "spicy feta yogurt sauce, kasseri cheese, onions, tomatoes served on pita & Greek fries $ 16.95"
      },
      {
        "item": "$ 4.95 Breakfast sides (4.95) Bacon, Greek sausage, Greek fries, Fruits, Avocado $ 4.95",
        "price": "$ 4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$ 4.95 Breakfast sides (4.95) Bacon, Greek sausage, Greek fries, Fruits, Avocado $ 4.95",
        "item_desc": ""
      }
    ]
  },
  {
    "name": "Mistral",
    "items": [
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$39 Two Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$49 Three Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$59 Three Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$39 Two Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$49 Three Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$59 Three Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$39 Two Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$49 Three Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$59 Three Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$39 Two Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$49 Three Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$59 Three Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$39 Two Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$49 Three Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$59 Three Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$39 Two Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$49 Three Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$59 Three Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$39 Two Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$49 Three Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$59 Three Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$39 Two Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$49 Three Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$59 Three Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$39 Two Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$49 Three Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$59 Three Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$39 Two Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$49 Three Course Brunch Menu",
        "item_desc": ""
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$59 Three Course Dinner Menu",
        "item_desc": ""
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "$69 Four Course Dinner Menu",
        "item_desc": ""
      }
    ]
  },
  {
    "name": "Olives",
    "items": [
      {
        "item": "Olives Oversized Sugar Cookies Cold Sandwiches and Hoagies",
        "price": "$3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Olives Oversized Sugar Cookies Cold Sandwiches and Hoagies",
        "item_desc": ""
      },
      {
        "item": "baguettes and 7 Grain Heroes (lettuce, tomato, onion included) Cold Sandwiches and Hoagies",
        "price": "$3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "baguettes and 7 Grain Heroes (lettuce, tomato, onion included) Cold Sandwiches and Hoagies",
        "item_desc": ""
      },
      {
        "item": "OatmealRaisinCookies Cold Sandwiches and Hoagies. w/creamcheese&lox",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "OatmealRaisinCookies Cold Sandwiches and Hoagies. w/creamcheese&lox",
        "item_desc": ""
      },
      {
        "item": "Double FudgeBrownie Hoagie",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Double FudgeBrownie Hoagie",
        "item_desc": ""
      },
      {
        "item": "w/egg Olives Famous Chicken Salad. PorkRoll&Cheese",
        "price": "$3.79",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "w/egg Olives Famous Chicken Salad. PorkRoll&Cheese",
        "item_desc": ""
      },
      {
        "item": "RockyRoad Brownie Olives Famous Chicken Salad",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "RockyRoad Brownie Olives Famous Chicken Salad",
        "item_desc": ""
      },
      {
        "item": "Baklava (best in town!) Egg White Sandwich",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Baklava (best in town!) Egg White Sandwich",
        "item_desc": ""
      },
      {
        "item": "Western Omelet Egg White Sandwich",
        "price": "$8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Western Omelet Egg White Sandwich",
        "item_desc": ""
      },
      {
        "item": "Pecan Bar Egg White Sandwich",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pecan Bar Egg White Sandwich",
        "item_desc": ""
      },
      {
        "item": "Turkey Breast Egg White Sandwich",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Turkey Breast Egg White Sandwich",
        "item_desc": ""
      },
      {
        "item": "Egg White Omelet (Choice of2 of the following Spinach, Egg White Sandwich. Lemon Bar",
        "price": "$3.79",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Egg White Omelet (Choice of2 of the following",
        "item_desc": "Spinach, Egg White Sandwich. Lemon Bar"
      },
      {
        "item": "Ham Egg White Sandwich",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Ham Egg White Sandwich",
        "item_desc": ""
      },
      {
        "item": "Onion, Tomato, or Pepper) Egg White Sandwich. Baby Cakes (assorted flavors)",
        "price": "$6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Onion, Tomato, or Pepper) Egg White Sandwich. Baby Cakes (assorted flavors)",
        "item_desc": ""
      },
      {
        "item": "Turbo Omelet (Six egg whites with grilled chicken or Tuna Salad (white albacore)",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Turbo Omelet (Six egg whites",
        "item_desc": "with grilled chicken or Tuna Salad (white albacore)"
      },
      {
        "item": "Assorted Cheese Tuna Salad (white albacore)",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Assorted Cheese Tuna Salad (white albacore)",
        "item_desc": ""
      },
      {
        "item": "Linzer Tarts Egg Salad",
        "price": "$3.79",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Linzer Tarts Egg Salad",
        "item_desc": ""
      },
      {
        "item": "w/ Greek Honey or Banana Egg Salad",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "w/ Greek Honey or Banana Egg Salad",
        "item_desc": ""
      },
      {
        "item": "CaramelFlan Seafood Salad",
        "price": "$3.49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "CaramelFlan Seafood Salad",
        "item_desc": ""
      },
      {
        "item": "Muffin (assorted flavors) Seafood Salad",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Muffin (assorted flavors) Seafood Salad",
        "item_desc": ""
      },
      {
        "item": "Plain Croissant/Chocolate Croissant Seafood Salad",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Plain Croissant/Chocolate Croissant Seafood Salad",
        "item_desc": ""
      },
      {
        "item": "Grilled Chicken w/ Fresh Mozzarlla & Tomato on a Baguette BreakfastSpecials. #1 Egg Whites with spinach, feta and tomato ona",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Grilled Chicken w/",
        "item_desc": "Fresh Mozzarlla & Tomato on a Baguette BreakfastSpecials. #1 Egg Whites with spinach, feta and tomato ona"
      },
      {
        "item": "Extras Cheese BreakfastSpecials",
        "price": "$1 | $1 | $2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Extras",
        "item_desc": "Cheese BreakfastSpecials"
      },
      {
        "item": "whole wheat wrap Beverages&Snacks",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "whole wheat wrap Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "Roasted Peppers Beverages&Snacks",
        "price": "$2 | $1",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roasted Peppers Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "#2Egg Whites with avocado and sliced tomatoon apita Beverages&Snacks",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "#2Egg Whites",
        "item_desc": "with avocado and sliced tomatoon apita Beverages&Snacks"
      },
      {
        "item": "Avocado Beverages&Snacks",
        "price": "$2 | $2 | $4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Avocado Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "lg Beverages&Snacks",
        "price": "$2.10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "lg Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "sm Beverages&Snacks. Fresh brewed coffee (reg./decaf.) #3 — Two eggs over easy or hard on corn tortillas",
        "price": "$1.85",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "sm Beverages&Snacks.",
        "item_desc": "Fresh brewed coffee (reg./decaf.) #3 — Two eggs over easy or hard on corn tortillas"
      },
      {
        "item": "Gluten Free Wrap Beverages&Snacks",
        "price": "$2 | $2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Wrap Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "1g Beverages&Snacks",
        "price": "$2.10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "1g Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "with cheese Beverages&Snacks",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "with cheese Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "toasted 7-grain bread Beverages&Snacks",
        "price": "$8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "toasted 7-grain bread Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "Milk Beverages&Snacks",
        "price": "$2.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Milk Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "ChocolateMilk Beverages&Snacks. Fresh Mozzarella, Tomato & Basil #5—Protein Egg Sandwich Six Egg whites w/your choice of",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "ChocolateMilk Beverages&Snacks. Fresh Mozzarella, Tomato & Basil #5—Protein Egg Sandwich",
        "item_desc": "Six Egg whites w/your choice of"
      },
      {
        "item": "Soda (20 oz.) Beverages&Snacks",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Soda (20 oz.) Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "turkey or grilled chicken on a whole wheat wrap Beverages&Snacks",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "turkey or grilled chicken on a whole wheat wrap Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "Waters (sm./lg.) Beverages&Snacks",
        "price": "$1.75 | $2.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Waters (sm./lg.) Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "Sparkling Water (sm./lg.) Beverages&Snacks",
        "price": "$3 | $4.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sparkling Water (sm./lg.) Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "white tortilla wrap w/avocado and salsa verde Beverages&Snacks",
        "price": "$8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "white tortilla wrap w/avocado and salsa verde Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "Chips (small bags) Beverages&Snacks",
        "price": "$2.49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chips (small bags) Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "Middle Eastern Platter (w/pita) Beverages&Snacks",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Middle Eastern Platter (w/pita) Beverages&Snacks",
        "item_desc": ""
      },
      {
        "item": "#7The SoCal-Two fried eggs with avocado, sprouts and Beverages&Snacks",
        "price": "$9.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "#7The SoCal-Two fried eggs",
        "item_desc": "with avocado, sprouts and Beverages&Snacks"
      },
      {
        "item": "tomatoes on sliced 7-grain toast Greek Salad (w/pita)",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "tomatoes on sliced 7-grain toast Greek Salad (w/pita)",
        "item_desc": ""
      },
      {
        "item": "assortment of prepared food made fresh Greek Salad (w/pita). Falafel Platter (tzatziki, hummus, grape leaves, pita)",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "assortment of prepared food",
        "item_desc": "made fresh Greek Salad (w/pita). Falafel Platter (tzatziki, hummus, grape leaves, pita)"
      },
      {
        "item": "on a croissant Greek Salad (w/pita)",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "on a croissant Greek Salad (w/pita)",
        "item_desc": ""
      },
      {
        "item": "Avocado & Salsa Verde on a bed ofgarden salad",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Avocado & Salsa Verde on a bed ofgarden salad",
        "item_desc": ""
      },
      {
        "item": "Cheddar, Avocado, house Spicy Aioli on Brioche on a bed ofgarden salad. Spanakopita (Greek spinach pie)",
        "price": "$6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Cheddar, Avocado, house",
        "item_desc": "Spicy Aioli on Brioche on a bed ofgarden salad. Spanakopita (Greek spinach pie)"
      },
      {
        "item": "(Your Choice of Bacon or Sausage) on a bed ofgarden salad. Ives",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "(Your Choice of Bacon or Sausage) on a bed ofgarden salad. Ives",
        "item_desc": ""
      },
      {
        "item": "Halloumi Pita ( with fries, lettuce, tomato, tzatziki & hot sauce) on a bed ofgarden salad. Add avocado or tator tots to any sandwich+s2.00 each Hot Specials",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Halloumi Pita (",
        "item_desc": "with fries, lettuce, tomato, tzatziki & hot sauce) on a bed ofgarden salad. Add avocado or tator tots to any sandwich+s2.00 each Hot Specials"
      },
      {
        "item": "We have an assortmentof fresh salads available on a bed ofgarden salad. daily...delicious! Check out our lunch and dinner specials",
        "price": "$9.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "We have an assortmentof",
        "item_desc": "fresh salads available on a bed ofgarden salad. daily...delicious! Check out our lunch and dinner specials"
      },
      {
        "item": "Gyro in Pita ( with tzatiki sauce on a gilled pita, lettuce, tomato, onion) on a bed ofgarden salad. Online! Grilled Italian Chicken Sandwich (w/provolone, lettuce, tomato, mayo)",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gyro in Pita (",
        "item_desc": "with tzatiki sauce on a gilled pita, lettuce, tomato, onion) on a bed ofgarden salad. Online! Grilled Italian Chicken Sandwich (w/provolone, lettuce, tomato, mayo)"
      },
      {
        "item": "Chicken Souvlaki in Pita (gilled chicken, tzatziki, letuce, tomato, onion) on a bed ofgarden salad. Good Food... Always",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Souvlaki in Pita (gilled chicken, tzatziki, letuce, tomato, onion) on a bed ofgarden salad. Good Food... Always",
        "item_desc": ""
      },
      {
        "item": "Malibu Chicken Souvlaki (w/avocado, crumbled feta, tzatziki,lettuce, tomato) on a bed ofgarden salad",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Malibu Chicken Souvlaki (w/avocado, crumbled feta, tzatziki,lettuce, tomato) on a bed ofgarden salad",
        "item_desc": ""
      },
      {
        "item": "Teriyaki Chicken Sandwich (withmontereyjack,lettuce, tomato, mayo) Kid's Menu",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Teriyaki Chicken Sandwich (withmontereyjack,lettuce, tomato, mayo) Kid's Menu",
        "item_desc": ""
      },
      {
        "item": "SantaFe Chicken Sandwich(w/bacon, avocado, monterey jack, chipotle mayo) Kid's Menu",
        "price": "$14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "SantaFe Chicken Sandwich(w/bacon, avocado, monterey jack, chipotle mayo) Kid's Menu",
        "item_desc": ""
      },
      {
        "item": "sm Peanut Butter & Jelly Sandwich. Meatball Sub (w/melted provolone)",
        "price": "$10.95 | $18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "sm Peanut Butter & Jelly Sandwich. Meatball Sub (w/melted provolone)",
        "item_desc": ""
      },
      {
        "item": "Nutella on White or Wheat Toast Peanut Butter & Jelly Sandwich",
        "price": "$4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Nutella on White or Wheat Toast Peanut Butter & Jelly Sandwich",
        "item_desc": ""
      },
      {
        "item": "Moussaka (Wonderfully delicious Greek eggplant casserole) Peanut Butter & Jelly Sandwich",
        "price": "$5.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Moussaka (Wonderfully delicious Greek eggplant casserole) Peanut Butter & Jelly Sandwich",
        "item_desc": ""
      },
      {
        "item": "Hot Dog on Torpedo Roll Peanut Butter & Jelly Sandwich. 609-921-1569",
        "price": "$5.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hot Dog on Torpedo Roll Peanut Butter & Jelly Sandwich. 609-921-1569",
        "item_desc": ""
      },
      {
        "item": "Boars Head Hot Dog (on torpedo roll) Peanut Butter & Jelly Sandwich",
        "price": "$8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Boars Head Hot Dog (on torpedo roll) Peanut Butter & Jelly Sandwich",
        "item_desc": ""
      },
      {
        "item": "B.L.T. (Bacon, lettuce, tomato on white toast with mahyo Peanut Butter & Jelly Sandwich. 22 Witherspoon Street·Princeton B.A.L.T. (Bacon, avocado, lettuce, tomato on 7-grain toast withranch dressing)",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "B.L.T. (Bacon, lettuce, tomato on white toast",
        "item_desc": "with mahyo Peanut Butter & Jelly Sandwich. 22 Witherspoon Street·Princeton B.A.L.T. (Bacon, avocado, lettuce, tomato on 7-grain toast withranch dressing)"
      },
      {
        "item": "sm Peanut Butter & Jelly Sandwich. French Fries Prices subiect to change www.olivesprinceton.com",
        "price": "$5.95 | $7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "sm Peanut Butter & Jelly Sandwich. French Fries Prices subiect to change www.olivesprinceton.com",
        "item_desc": ""
      },
      {
        "item": "BROWN SUGAR GLAZED BONELESS HAM (8-12ppl)",
        "price": "$87",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "BROWN SUGAR GLAZED BONELESS HAM (8-12ppl)",
        "item_desc": ""
      },
      {
        "item": "BONELESS ROASTED LEG OF LAMB sliced lemon herb roasted leg of lamb (4 lbs min, 8 ppl) lb",
        "price": "$23",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "BONELESS ROASTED LEG OF LAMB sliced lemon herb roasted leg of lamb (4 lbs min, 8 ppl) lb",
        "item_desc": ""
      },
      {
        "item": "GRILLED SALMON with tomato and basil or yogurt cucumber dill sauce Minimum 2 pieces per piece WHOLE ROASTED TENDERLOIN OF BEEF",
        "price": "$18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "GRILLED SALMON",
        "item_desc": "with tomato and basil or yogurt cucumber dill sauce Minimum 2 pieces per piece WHOLE ROASTED TENDERLOIN OF BEEF"
      },
      {
        "item": "w/merlot wine sauce or creamy horseradish sauce (6-8ppl) 5 lb",
        "price": "$265",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "w/merlot wine sauce or",
        "item_desc": "creamy horseradish sauce (6-8ppl) 5 lb"
      },
      {
        "item": "PENNE VODKA 9x13 (8-12ppl) VEGETABLES & SIDES DISHES (minimum 2 lbs.)",
        "price": "$55",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "PENNE VODKA 9x13 (8-12ppl) VEGETABLES & SIDES DISHES (minimum 2 lbs.)",
        "item_desc": ""
      },
      {
        "item": "Herb Roasted or Greek Lemon Potatoes /lb",
        "price": "$9",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Herb Roasted or Greek Lemon Potatoes /lb",
        "item_desc": ""
      },
      {
        "item": "Wild Rice Pilaf /lb",
        "price": "$9",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Wild Rice Pilaf /lb",
        "item_desc": ""
      },
      {
        "item": "Asparagus with Red Peppers & Cashews /lb",
        "price": "$14",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Asparagus",
        "item_desc": "with Red Peppers & Cashews /lb"
      },
      {
        "item": "Green Beans Almondine /lb",
        "price": "$12",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Green Beans Almondine /lb",
        "item_desc": ""
      },
      {
        "item": "Sweet Potato Wedges /lb",
        "price": "$12",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Sweet Potato Wedges /lb",
        "item_desc": ""
      },
      {
        "item": "Balsamic Grilled Vegetables /lb Order by 4 p.m. Monday, March 30th Call us at 609-921-1569 to place your orders!",
        "price": "$12",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Balsamic Grilled Vegetables /lb Order by 4 p.m. Monday, March 30th Call us at 609-921-1569 to place your orders!",
        "item_desc": ""
      },
      {
        "item": "Mini Maryland Crabcakes with Cocktail Sauce Menu 2026. dz",
        "price": "$36",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mini Maryland Crabcakes",
        "item_desc": "with Cocktail Sauce Menu 2026. dz"
      },
      {
        "item": "Grilled Baby Lamb Chops with Tzatziki Sauce Menu 2026. dz",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Grilled Baby Lamb Chops",
        "item_desc": "with Tzatziki Sauce Menu 2026. dz"
      },
      {
        "item": "Buffalo Chicken Spring Rolls Menu 2026. dz",
        "price": "$24",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Buffalo Chicken Spring Rolls Menu 2026. dz",
        "item_desc": ""
      },
      {
        "item": "Assorted Mini Quiche Menu 2026. dz",
        "price": "$24",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Assorted Mini Quiche Menu 2026. dz",
        "item_desc": ""
      },
      {
        "item": "Pigs in a Blanket Menu 2026. dz",
        "price": "$18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pigs in a Blanket Menu 2026. dz",
        "item_desc": ""
      },
      {
        "item": "Spinach Phyllo Triangles Menu 2026. dz",
        "price": "$24",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Spinach Phyllo Triangles Menu 2026. dz",
        "item_desc": ""
      },
      {
        "item": "Vegetable Spring Rolls Menu 2026. dz",
        "price": "$14",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Vegetable Spring Rolls Menu 2026. dz",
        "item_desc": ""
      },
      {
        "item": "Jumbo Coconut Shrimp Menu 2026. dz Minimum 2 dozen",
        "price": "$30",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jumbo Coconut Shrimp Menu 2026. dz Minimum 2 dozen",
        "item_desc": ""
      },
      {
        "item": "Small (3 lbs.) SHRIMP COCKTAIL",
        "price": "$110 | $198",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Small (3 lbs.) SHRIMP COCKTAIL",
        "item_desc": ""
      },
      {
        "item": "prepared in oven ready dish (6-10ppl) SPINACH ARTICHOKE DIP",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "prepared in oven ready dish (6-10ppl) SPINACH ARTICHOKE DIP",
        "item_desc": ""
      },
      {
        "item": "Bacon Cheddar, Ham & Brie, Broccoli Cheddar, Spinach Mushroom (10”, 4-6 ppl) HOMEMADE QUICHE",
        "price": "$30",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bacon Cheddar, Ham & Brie, Broccoli Cheddar, Spinach Mushroom (10”, 4-6 ppl) HOMEMADE QUICHE",
        "item_desc": ""
      },
      {
        "item": "small (5-8 ppl) BREAKFAST TRAY",
        "price": "$35 | $55 | $85",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "small (5-8 ppl) BREAKFAST TRAY",
        "item_desc": ""
      },
      {
        "item": "butter, & jelly (min 6ppl) BAGEL TRAY. pp Olives Open April 5th 8 a.m. 3 p.m",
        "price": "$3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "butter, & jelly (min 6ppl) BAGEL TRAY. pp Olives Open April 5th 8 a.m.",
        "item_desc": "3 p.m"
      },
      {
        "item": "ganache and beautifully decorated EASTER EGG CAKE",
        "price": "$40",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "ganache and beautifully decorated EASTER EGG CAKE",
        "item_desc": ""
      },
      {
        "item": "with vanilla butter cream topped with white chocolate shavings 3-D EASTER BUNNY CAKE",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "with vanilla butter cream topped with white chocolate shavings 3-D EASTER BUNNY CAKE",
        "item_desc": ""
      },
      {
        "item": "fresh lemon curd LEMON CHIFFON",
        "price": "$55",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "fresh lemon curd LEMON CHIFFON",
        "item_desc": ""
      },
      {
        "item": "decorated with walnuts CARROT CAKE",
        "price": "$45",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "decorated",
        "item_desc": "with walnuts CARROT CAKE"
      },
      {
        "item": "topped with fresh whipped cream and glazed strawberries STRAWBERRY & CREAM CHEESECAKE",
        "price": "$45",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "topped with fresh whipped cream and glazed strawberries STRAWBERRY & CREAM CHEESECAKE",
        "item_desc": ""
      },
      {
        "item": "vanilla, chocolate, raspberry, pistachio (1 dozen min) FRENCH MACARONS. ea",
        "price": "$3.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "vanilla, chocolate, raspberry, pistachio (1 dozen min) FRENCH MACARONS. ea",
        "item_desc": ""
      },
      {
        "item": "choice of vanilla or chocolate SPRING & EASTER CUPCAKES. each",
        "price": "$3.79",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "choice of vanilla or chocolate SPRING & EASTER CUPCAKES. each",
        "item_desc": ""
      },
      {
        "item": "with fresh toasted meringue RASPBERRY LEMON MERINGUE TART",
        "price": "$40",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "with fresh toasted meringue RASPBERRY LEMON MERINGUE TART",
        "item_desc": ""
      },
      {
        "item": "small (8 ppl) COOKIE TRAY",
        "price": "$54 | $89",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "small (8 ppl) COOKIE TRAY",
        "item_desc": ""
      },
      {
        "item": "small (8 ppl) MINIATURE SWEETS",
        "price": "$64 | $112",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "small (8 ppl) MINIATURE SWEETS",
        "item_desc": ""
      },
      {
        "item": "EASTER BREAD long braided MINIATURE SWEETS",
        "price": "$12 | $15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "EASTER BREAD long braided MINIATURE SWEETS",
        "item_desc": ""
      },
      {
        "item": "CIABATTA sm MINIATURE SWEETS",
        "price": "$5 | $7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "CIABATTA sm MINIATURE SWEETS",
        "item_desc": ""
      },
      {
        "item": "small (2-4ppl) GREEN SALADS. CAESAR SALAD- romaine with homemade croutons, grated parmesan, and our signature caesar dressing SPINACH STRAWBERRY SALAD with pecans & goat cheese with a poppy seed dressing Easter",
        "price": "$21 | $49 | $75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "small (2-4ppl) GREEN SALADS. CAESAR SALAD- romaine with homemade croutons, grated parmesan, and our signature caesar dressing SPINACH STRAWBERRY SALAD",
        "item_desc": "with pecans & goat cheese with a poppy seed dressing Easter"
      }
    ]
  },
  {
    "name": "Pizza Den",
    "items": [
      {
        "item": "Beach in Hawaii Pie...$19.50/$26",
        "price": "$19.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Beach in Hawaii Pie...$19.50/$26",
        "item_desc": ""
      },
      {
        "item": "Eye of The Tiger...$19/$26",
        "price": "$19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Eye of The Tiger...$19/$26",
        "item_desc": ""
      },
      {
        "item": "Hooked on Honey Pie...$18.75/$24.50",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hooked on Honey Pie...$18.75/$24.50",
        "item_desc": ""
      },
      {
        "item": "The V Thang..$19.50/$26",
        "price": "$19.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "The V Thang..$19.50/$26",
        "item_desc": ""
      },
      {
        "item": "Meat Meat Meat Pie...$19.50/$26",
        "price": "$19.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Meat Meat Meat Pie...$19.50/$26",
        "item_desc": ""
      },
      {
        "item": "Buffalo Soldier..$18/$23",
        "price": "$18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Buffalo Soldier..$18/$23",
        "item_desc": ""
      },
      {
        "item": "The Greek..$19.50/$26",
        "price": "$19.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "The Greek..$19.50/$26",
        "item_desc": ""
      },
      {
        "item": "The Diva...$21.50/$27.50",
        "price": "$21.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "The Diva...$21.50/$27.50",
        "item_desc": ""
      },
      {
        "item": "The French Onion...$19/$24",
        "price": "$19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "The French Onion...$19/$24",
        "item_desc": ""
      },
      {
        "item": "Jamming With You...$18/$24",
        "price": "$18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jamming",
        "item_desc": "With You...$18/$24"
      },
      {
        "item": "Classic Pies...$10/$14/$18.50",
        "price": "$10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Classic Pies...$10/$14/$18.50",
        "item_desc": ""
      },
      {
        "item": "Brooklyn Pie...$10.50/$15/$20",
        "price": "$10.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brooklyn Pie...$10.50/$15/$20",
        "item_desc": ""
      },
      {
        "item": "Sauceless Pie...$11/$16.50/$21",
        "price": "$11",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Sauceless Pie...$11/$16.50/$21",
        "item_desc": ""
      },
      {
        "item": "Tomato Pie...$9.50/$13/$17.50",
        "price": "$9.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tomato Pie...$9.50/$13/$17.50",
        "item_desc": ""
      },
      {
        "item": "Arugula Salad...$8.50",
        "price": "$8.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Arugula Salad...$8.50",
        "item_desc": ""
      },
      {
        "item": "Baby Kale...$8.50",
        "price": "$8.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Baby Kale...$8.50",
        "item_desc": ""
      },
      {
        "item": "Extra Virgin Olive Oil...$12/$20",
        "price": "$12",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Extra Virgin Olive Oil...$12/$20",
        "item_desc": ""
      },
      {
        "item": "Add chicken....$3.75",
        "price": "$3.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Add chicken....$3.75",
        "item_desc": ""
      },
      {
        "item": "Pepperoni Slider...$5.25",
        "price": "$5.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pepperoni Slider...$5.25",
        "item_desc": ""
      },
      {
        "item": "Chicken or Eggplant Parm Slider...$5.75",
        "price": "$5.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken or Eggplant Parm Slider...$5.75",
        "item_desc": ""
      },
      {
        "item": "Garlic Bread Pizza...$9.50",
        "price": "$9.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Garlic Bread Pizza...$9.50",
        "item_desc": ""
      },
      {
        "item": "Large Bavarian Pretzel...$11",
        "price": "$11",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Large Bavarian Pretzel...$11",
        "item_desc": ""
      },
      {
        "item": "Nutella Pie...$11.50",
        "price": "$11.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Nutella Pie...$11.50",
        "item_desc": ""
      }
    ]
  },
  {
    "name": "Pj's Pancake House",
    "items": [
      {
        "item": "Gluten Free Pancakes",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Pancakes",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Waffle",
        "price": "$17.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Waffle",
        "item_desc": ""
      },
      {
        "item": "Gluten Free French Toast",
        "price": "$18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free French Toast",
        "item_desc": ""
      },
      {
        "item": "One Sausage Link Pj’s Famous Breakfast Combo",
        "price": "$18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "One Sausage Link Pj’s Famous Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "upgrade Pancakes Pj’s Famous Breakfast Combo",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "upgrade Pancakes Pj’s Famous Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "sub French Toast or Waffle Pj’s Famous Breakfast Combo. with Mashed Brown Potatoes & Toast",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "sub French Toast or Waffle Pj’s Famous Breakfast Combo.",
        "item_desc": "with Mashed Brown Potatoes & Toast"
      },
      {
        "item": "French Toast, Waffle or Upgrade Egg Breakfast",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French Toast, Waffle or Upgrade Egg Breakfast",
        "item_desc": ""
      },
      {
        "item": "substitute Bagel* OR. served with Fresh Fruit or Mashed Brown Potatoes",
        "price": "$2 | $3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "substitute Bagel* OR.",
        "item_desc": "served with Fresh Fruit or Mashed Brown Potatoes"
      },
      {
        "item": "substitute Bagel, Croissant, Wrap, or Gluten Free Breakfast Classics. Lox, Stock & Bagel",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "substitute Bagel, Croissant, Wrap, or Gluten Free Breakfast Classics. Lox, Stock & Bagel",
        "item_desc": ""
      },
      {
        "item": "lox, tomato, onion, capers, cream cheese Breakfast Classics",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "lox, tomato, onion, capers, cream cheese Breakfast Classics",
        "item_desc": ""
      },
      {
        "item": "with choice of meat and cheese, kaiser Fried Egg Sandwich. Trenton Pork Roll, Egg, & Cheese",
        "price": "$14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "with choice of meat and cheese, kaiser Fried Egg Sandwich. Trenton Pork Roll, Egg, & Cheese",
        "item_desc": ""
      },
      {
        "item": "american, sauteed onions, tomato, kaiser Fried Egg Sandwich. Huevos Ranchero Wrap eggs over hard, sausage,",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "american, sauteed onions, tomato, kaiser Fried Egg Sandwich. Huevos Ranchero Wrap eggs over hard, sausage,",
        "item_desc": ""
      },
      {
        "item": "ranchero sauce Fried Egg Sandwich",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "ranchero sauce Fried Egg Sandwich",
        "item_desc": ""
      },
      {
        "item": "eggs, chorizo, pepper jack, potatoes, peppers Breakfast Burrito",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "eggs, chorizo, pepper jack, potatoes, peppers Breakfast Burrito",
        "item_desc": ""
      },
      {
        "item": "eggs, bacon, cheddar, guac, sour cream Breakfast Scramble Quesadilla. Skillets with Fresh Fruit or Mashed Browns Benedicts",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "eggs, bacon, cheddar, guac, sour cream Breakfast Scramble Quesadilla. Skillets",
        "item_desc": "with Fresh Fruit or Mashed Browns Benedicts"
      },
      {
        "item": "canadian bacon, on english muffin Breakfast Scramble Quesadilla. Sammy Benny",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "canadian bacon, on english muffin Breakfast Scramble Quesadilla. Sammy Benny",
        "item_desc": ""
      },
      {
        "item": "lox, onions, capers, on english muffin Breakfast Scramble Quesadilla. Porky Benny famous Trenton pork roll, sautéed onions, on",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "lox, onions, capers, on english muffin Breakfast Scramble Quesadilla. Porky Benny famous Trenton pork roll, sautéed onions, on",
        "item_desc": ""
      },
      {
        "item": "english muffin Breakfast Scramble Quesadilla. Veggie Benny grilled portabello caps, wilted spinach, roasted",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "english muffin Breakfast Scramble Quesadilla. Veggie Benny grilled portabello caps, wilted spinach, roasted",
        "item_desc": ""
      },
      {
        "item": "red peppers, on english muffin Breakfast Scramble Quesadilla. Shakshuka over easy eggs spicy crushed tomato sauce,",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "red peppers, on english muffin Breakfast Scramble Quesadilla. Shakshuka over easy eggs",
        "item_desc": "spicy crushed tomato sauce,"
      },
      {
        "item": "onions, peppers, spinach, feta, crostini Breakfast Scramble Quesadilla. Mexishuka scrambled eggs, crumbled chorizo, mashed",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "onions, peppers, spinach, feta, crostini Breakfast Scramble Quesadilla. Mexishuka scrambled eggs, crumbled chorizo, mashed",
        "item_desc": ""
      },
      {
        "item": "avocado, pico de gallo, queso fresco Breakfast Scramble Quesadilla. Country Boy Hash over easy eggs, diced sirloin, peppers &",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "avocado, pico de gallo, queso fresco Breakfast Scramble Quesadilla. Country Boy Hash over easy eggs, diced sirloin, peppers &",
        "item_desc": ""
      },
      {
        "item": "onions, over mashed browns Breakfast Scramble Quesadilla. Indian Ramen ramen noodles, diced tomato, onions, peppers, shredded amul, cilantro, fried over",
        "price": "$21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "onions, over mashed browns Breakfast Scramble Quesadilla. Indian Ramen ramen noodles, diced tomato, onions, peppers, shredded amul, cilantro, fried over",
        "item_desc": ""
      },
      {
        "item": "easy egg Breakfast Scramble Quesadilla. Poached Eggs with Hollandaise Sauce Buttermilk Pancakes our signature Large Buttermilk Pancakes since 1962",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "easy egg Breakfast Scramble Quesadilla. Poached Eggs",
        "item_desc": "with Hollandaise Sauce Buttermilk Pancakes our signature Large Buttermilk Pancakes since 1962"
      },
      {
        "item": "Pigs in a Blanket Breakfast Scramble Quesadilla",
        "price": "$19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pigs in a Blanket Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Nutty Multi-Grain Breakfast Scramble Quesadilla",
        "price": "$11.50 | $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Nutty Multi-Grain Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Silver Dollars Breakfast Scramble Quesadilla",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Silver Dollars Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Pecan Breakfast Scramble Quesadilla",
        "price": "$12.50 | $16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pecan Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Chocolate Chip Breakfast Scramble Quesadilla. Peanut Butter",
        "price": "$11.50 | $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chocolate Chip Breakfast Scramble Quesadilla. Peanut Butter",
        "item_desc": ""
      },
      {
        "item": "Oreo Breakfast Scramble Quesadilla. Chai, Vanilla,",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Oreo Breakfast Scramble Quesadilla. Chai, Vanilla,",
        "item_desc": ""
      },
      {
        "item": "Whipped Cream Breakfast Scramble Quesadilla. Brown Sugar Pineapple &",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Whipped Cream Breakfast Scramble Quesadilla. Brown Sugar Pineapple &",
        "item_desc": ""
      },
      {
        "item": "Ham Cakes Breakfast Scramble Quesadilla",
        "price": "$14.50 | $19.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Ham Cakes Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Blueberry Breakfast Scramble Quesadilla",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Blueberry Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Banana Breakfast Scramble Quesadilla",
        "price": "$11.50 | $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Banana Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Banana Pecan Breakfast Scramble Quesadilla",
        "price": "$14.50 | $19.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Banana Pecan Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Banana Caramel Foster Breakfast Scramble Quesadilla",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Banana Caramel Foster Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Cinnamon Swirl Breakfast Scramble Quesadilla. Nutella, Banana,",
        "price": "$11.50 | $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cinnamon Swirl Breakfast Scramble Quesadilla. Nutella, Banana,",
        "item_desc": ""
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla",
        "price": "$15.50 | $21.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Strawberry Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Strawberry Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Tres Leches Breakfast Scramble Quesadilla",
        "price": "$14.50 | $19.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tres Leches Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Smores Breakfast Scramble Quesadilla",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Smores Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Tiramisu Breakfast Scramble Quesadilla",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tiramisu Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "add a scoop of Ice Cream Breakfast Scramble Quesadilla. Waffle French Toast Pj’s Hand-Spun Milkshakes",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "add a scoop of Ice Cream Breakfast Scramble Quesadilla. Waffle",
        "item_desc": "French Toast Pj’s Hand-Spun Milkshakes"
      },
      {
        "item": "your flavor Ice Cream Breakfast Scramble Quesadilla. Espresso Chip Black & White Plain",
        "price": "$10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "your flavor Ice Cream Breakfast Scramble Quesadilla. Espresso Chip Black & White Plain",
        "item_desc": ""
      },
      {
        "item": "choice of two Breakfast Scramble Quesadilla. Strawberry Banana Blueberry",
        "price": "$8",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "choice of two Breakfast Scramble Quesadilla. Strawberry Banana Blueberry",
        "item_desc": ""
      },
      {
        "item": "without meat Breakfast Scramble Quesadilla. ham, bacon, sausage, turkey sausage, pork roll, corned beef hash, canadian bacon, pastrami, turkey bacon, veggie sausage",
        "price": "$15.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "without meat Breakfast Scramble Quesadilla. ham, bacon, sausage, turkey sausage, pork roll, corned beef hash, canadian bacon, pastrami, turkey bacon, veggie sausage",
        "item_desc": ""
      },
      {
        "item": "Plain Jane Breakfast Scramble Quesadilla",
        "price": "$13.95 | $15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Plain Jane Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Banana Breakfast Scramble Quesadilla. Banana Caramel",
        "price": "$16.95 | $18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Banana Breakfast Scramble Quesadilla. Banana Caramel",
        "item_desc": ""
      },
      {
        "item": "Foster Breakfast Scramble Quesadilla",
        "price": "$17.95 | $19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Foster Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla. Chicken & Waffles chicken fritters, fries, real",
        "price": "$16.95 | $18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla. Chicken & Waffles chicken fritters, fries, real",
        "item_desc": ""
      },
      {
        "item": "maple syrup Breakfast Scramble Quesadilla",
        "price": "$23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "maple syrup Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla. Nutella, Banana,",
        "price": "$16.95 | $18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Strawberry Breakfast Scramble Quesadilla. Nutella, Banana,",
        "item_desc": ""
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla",
        "price": "$17.95 | $19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Strawberry Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Blueberry Breakfast Scramble Quesadilla",
        "price": "$15.95 | $17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Blueberry Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Strawberry & Cannoli Breakfast Scramble Quesadilla. Choice of Meat ham, bacon, sausage, turkey sausage, pork roll, corned beef hash, canadian bacon, pastrami,",
        "price": "$17.95 | $19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Strawberry & Cannoli Breakfast Scramble Quesadilla. Choice of Meat ham, bacon, sausage, turkey sausage, pork roll, corned beef hash, canadian bacon, pastrami,",
        "item_desc": ""
      },
      {
        "item": "turkey bacon, veggie sausage Breakfast Scramble Quesadilla",
        "price": "$7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "turkey bacon, veggie sausage Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Pj’s Mashed Browns Breakfast Scramble Quesadilla",
        "price": "$6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pj’s Mashed Browns Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Two Eggs Breakfast Scramble Quesadilla. Croissant",
        "price": "$6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Two Eggs Breakfast Scramble Quesadilla. Croissant",
        "item_desc": ""
      },
      {
        "item": "strawberry jam, marmalade, or nutella Breakfast Scramble Quesadilla. Steak & Eggs sirloin, onions,",
        "price": "$5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "strawberry jam, marmalade, or nutella Breakfast Scramble Quesadilla. Steak & Eggs sirloin, onions,",
        "item_desc": ""
      },
      {
        "item": "two eggs any style Breakfast Scramble Quesadilla. Classic feta, sea salt, crushed red pepper",
        "price": "$27",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "two eggs any style Breakfast Scramble Quesadilla.",
        "item_desc": "Classic feta, sea salt, crushed red pepper"
      },
      {
        "item": "add an Egg + Breakfast Scramble Quesadilla",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "add an Egg + Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "onions, capers Breakfast Scramble Quesadilla. Bacon & Egg scrambled or fried egg",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "onions, capers Breakfast Scramble Quesadilla. Bacon & Egg scrambled or fried egg",
        "item_desc": ""
      },
      {
        "item": "chopped bacon Breakfast Scramble Quesadilla",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "chopped bacon Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Plain Potato Cakes Breakfast Scramble Quesadilla. The Denver",
        "price": "$16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Plain Potato Cakes Breakfast Scramble Quesadilla. The Denver",
        "item_desc": ""
      },
      {
        "item": "peppers & onions, ham Breakfast Scramble Quesadilla. The Puerco crumbled chorizo, onion, jalapeno,",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "peppers & onions, ham Breakfast Scramble Quesadilla. The Puerco crumbled chorizo, onion, jalapeno,",
        "item_desc": ""
      },
      {
        "item": "queso fresco Breakfast Scramble Quesadilla. The Works",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "queso fresco Breakfast Scramble Quesadilla. The Works",
        "item_desc": ""
      },
      {
        "item": "cheddar, bacon, chicken, sour cream, scallion Breakfast Scramble Quesadilla",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "cheddar, bacon, chicken, sour cream, scallion Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "add Two Poached Eggs Breakfast Scramble Quesadilla",
        "price": "$6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "add Two Poached Eggs Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Nutella, Banana, Strawberry Breakfast Scramble Quesadilla",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Nutella, Banana, Strawberry Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla. Sweet",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla.",
        "item_desc": "Sweet"
      },
      {
        "item": "Ham, Egg, & Cheddar Breakfast Scramble Quesadilla. Mushrooms, Spinach, & Swiss",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Ham, Egg, & Cheddar Breakfast Scramble Quesadilla. Mushrooms, Spinach, & Swiss",
        "item_desc": ""
      },
      {
        "item": "add chicken + Breakfast Scramble Quesadilla",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "add chicken + Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Pancake Sampler Breakfast Scramble Quesadilla. your choice of 3 Jersey Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pancake Sampler Breakfast Scramble Quesadilla. your choice of 3 Jersey Omelet",
        "item_desc": ""
      },
      {
        "item": "pork roll, griddled onion, american Breakfast Scramble Quesadilla. California Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "pork roll, griddled onion, american Breakfast Scramble Quesadilla. California Omelet",
        "item_desc": ""
      },
      {
        "item": "spinach, turkey bacon, pepper jack, avocado Breakfast Scramble Quesadilla. Western Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "spinach, turkey bacon, pepper jack, avocado Breakfast Scramble Quesadilla. Western Omelet",
        "item_desc": ""
      },
      {
        "item": "onions, peppers, ham, cheddar Breakfast Scramble Quesadilla. Pj’s Classic Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "onions, peppers, ham, cheddar Breakfast Scramble Quesadilla. Pj’s",
        "item_desc": "Classic Omelet"
      },
      {
        "item": "mushrooms, peppers, broccoli, spinach, feta Breakfast Scramble Quesadilla. Smoked Salmon Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "mushrooms, peppers, broccoli, spinach, feta Breakfast Scramble Quesadilla. Smoked Salmon Omelet",
        "item_desc": ""
      },
      {
        "item": "lox, onions, capers, avocado, cream cheese Breakfast Scramble Quesadilla. Pj’s Veggie Omelet",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "lox, onions, capers, avocado, cream cheese Breakfast Scramble Quesadilla. Pj’s Veggie Omelet",
        "item_desc": ""
      },
      {
        "item": "peppers, broccoli, zucchini, squash Breakfast Scramble Quesadilla. Mediterranean Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "peppers, broccoli, zucchini, squash Breakfast Scramble Quesadilla. Mediterranean Omelet",
        "item_desc": ""
      },
      {
        "item": "sun-dried tomatoes, spinach, feta Breakfast Scramble Quesadilla. Pastrami & Swiss Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "sun-dried tomatoes, spinach, feta Breakfast Scramble Quesadilla. Pastrami & Swiss Omelet",
        "item_desc": ""
      },
      {
        "item": "hickory smoked angus pastrami, swiss Breakfast Scramble Quesadilla. Pj’s Special Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "hickory smoked angus pastrami, swiss Breakfast Scramble Quesadilla. Pj’s Special Omelet",
        "item_desc": ""
      },
      {
        "item": "onions, peppers, mushrooms, tomatoes Breakfast Scramble Quesadilla. Spanish Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "onions, peppers, mushrooms, tomatoes Breakfast Scramble Quesadilla. Spanish Omelet",
        "item_desc": ""
      },
      {
        "item": "sausage, avocado, cheddar, ranchero sauce Breakfast Scramble Quesadilla. Healthy Corner Savory",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "sausage, avocado, cheddar, ranchero sauce Breakfast Scramble Quesadilla. Healthy Corner Savory",
        "item_desc": ""
      },
      {
        "item": "sausage, english muffin Heart Smart Sandwich. Greek Yogurt Parfait",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "sausage, english muffin Heart Smart Sandwich. Greek Yogurt Parfait",
        "item_desc": ""
      },
      {
        "item": "mixed berries, bananas, granola Heart Smart Sandwich. Bacon & Egg Stuffed Avocado",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "mixed berries, bananas, granola Heart Smart Sandwich. Bacon & Egg",
        "item_desc": "Stuffed Avocado"
      },
      {
        "item": "w/ fresh fruit or mashed browns Heart Smart Sandwich",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "w/",
        "item_desc": "fresh fruit or mashed browns Heart Smart Sandwich"
      },
      {
        "item": "Fresh Fruit Medley Bowl Heart Smart Sandwich. Overnight Oats oat milk, honey banana strawberry | blueberry",
        "price": "$15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fresh Fruit Medley Bowl Heart Smart Sandwich. Overnight Oats oat milk, honey banana",
        "item_desc": "strawberry | blueberry"
      },
      {
        "item": "raspberry Heart Smart Sandwich. Choose from our fresh baked artisan bread options white, wheat, rye, ancient 9 grain, artisan ciabatta, french baguette, torpedo roll",
        "price": "$14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "raspberry Heart Smart Sandwich. Choose from our",
        "item_desc": "fresh baked artisan bread options white, wheat, rye, ancient 9 grain, artisan ciabatta, french baguette, torpedo roll"
      },
      {
        "item": "Grade A Pure Maple Syrup Heart Smart Sandwich",
        "price": "$3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Grade A Pure Maple Syrup Heart Smart Sandwich",
        "item_desc": ""
      },
      {
        "item": "Plain Two Heart Smart Sandwich. Chicken & Waffles chicken fritters, fries, real",
        "price": "$9.50 | $13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Plain",
        "item_desc": "Two Heart Smart Sandwich. Chicken & Waffles chicken fritters, fries, real"
      },
      {
        "item": "Feta Cheese Heart Smart Sandwich. Pork Roll, Fried Eggs, Sautéed Onions,",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Feta Cheese Heart Smart Sandwich. Pork Roll, Fried Eggs, Sautéed Onions,",
        "item_desc": ""
      },
      {
        "item": "American Cheese Heart Smart Sandwich. Kids’ Corner",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "American Cheese Heart Smart Sandwich. Kids’ Corner",
        "item_desc": ""
      },
      {
        "item": "add Chicken Breast",
        "price": "$3 | $7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "add Chicken Breast",
        "item_desc": ""
      },
      {
        "item": "Shoestring Fries or Cole Slaw sub Onion Rings + (10 & Under) | choice of Small Milk, Soda, or Juice",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Shoestring Fries or Cole Slaw",
        "item_desc": "sub Onion Rings + (10 & Under) | choice of Small Milk, Soda, or Juice"
      },
      {
        "item": "One Sausage Link (“One-Fer” Breakfast). served on Brioche Roll or Croissant **Consuming raw or undercooked meats,",
        "price": "$13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "One Sausage Link (“One-Fer” Breakfast).",
        "item_desc": "served on Brioche Roll or Croissant **Consuming raw or undercooked meats,"
      },
      {
        "item": "torpedo Turkey Club turkey, bacon, american,",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "torpedo Turkey Club turkey, bacon, american,",
        "item_desc": ""
      },
      {
        "item": "lettuce, tomato, mayo, white Pastrami Reuben",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "lettuce, tomato, mayo, white Pastrami Reuben",
        "item_desc": ""
      },
      {
        "item": "swiss, sauerkraut, thousand island, rye",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "swiss, sauerkraut, thousand island, rye",
        "item_desc": ""
      },
      {
        "item": "pepper jack, lettuce, tomato, torpedo Fat Tiger Sandwich. Grilled Chicken Caesar Wrap",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "pepper jack, lettuce, tomato, torpedo Fat Tiger Sandwich. Grilled Chicken Caesar Wrap",
        "item_desc": ""
      },
      {
        "item": "chicken, lettuce, croutons, caesar dressing Fat Tiger Sandwich. Buffalo Chicken Fritters crispy chicken fritters, buffalo sauce, pickles, lettuce, tomato, mayo",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "chicken, lettuce, croutons, caesar dressing Fat Tiger Sandwich. Buffalo Chicken Fritters",
        "item_desc": "crispy chicken fritters, buffalo sauce, pickles, lettuce, tomato, mayo"
      },
      {
        "item": "wrap or brioche roll Fat Tiger Sandwich",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "wrap or brioche roll Fat Tiger Sandwich",
        "item_desc": ""
      },
      {
        "item": "bacon, lettuce, tomato, avocado, rye BLTA. Chicken or Steak Quesadilla chicken breast or sirloin steak cheddar, lettuce, tomato,",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "bacon, lettuce, tomato, avocado, rye BLTA. Chicken or Steak Quesadilla chicken breast or sirloin steak cheddar, lettuce, tomato,",
        "item_desc": ""
      },
      {
        "item": "guac & sour cream BLTA",
        "price": "$22",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "guac & sour cream BLTA",
        "item_desc": ""
      },
      {
        "item": "croutons Tuscan Chicken Sandwich. Cobb romaine, hard boiled egg, bacon, cucumber, tomato,",
        "price": "$15.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "croutons Tuscan Chicken Sandwich. Cobb romaine, hard boiled egg, bacon, cucumber, tomato,",
        "item_desc": ""
      },
      {
        "item": "blue cheese dressing Tuscan Chicken Sandwich. Kale baby kale tossed w/ tuscan croutons crispy bacon, sunny",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "blue cheese dressing Tuscan Chicken Sandwich. Kale baby kale tossed w/ tuscan croutons",
        "item_desc": "crispy bacon, sunny"
      },
      {
        "item": "EVOO and buttermilk ranch Tuscan Chicken Sandwich",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "EVOO and buttermilk ranch Tuscan Chicken Sandwich",
        "item_desc": ""
      },
      {
        "item": "Chicken Noodle Tuscan Chicken Sandwich",
        "price": "$9",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Noodle Tuscan Chicken Sandwich",
        "item_desc": ""
      },
      {
        "item": "French Onion Tuscan Chicken Sandwich",
        "price": "$9",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French Onion Tuscan Chicken Sandwich",
        "item_desc": ""
      },
      {
        "item": "upgrade pancake Breakfast Combo. Plain Cheeseburger with Fries or Fresh Fruit Silver Dollar Pancakes",
        "price": "$1",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "upgrade pancake Breakfast Combo. Plain Cheeseburger",
        "item_desc": "with Fries or Fresh Fruit Silver Dollar Pancakes"
      },
      {
        "item": "upgrade pancakes Breakfast Combo. Grilled Cheese",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "upgrade pancakes Breakfast Combo. Grilled Cheese",
        "item_desc": ""
      },
      {
        "item": "with fries or fresh fruit Breakfast Combo. Mac n’ Cheese Chicken Tenders with fries or fresh fruit",
        "price": "$13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "with fries or fresh fruit Breakfast Combo. Mac n’ Cheese Chicken Tenders with fries or fresh fruit",
        "item_desc": ""
      },
      {
        "item": "whole or skim Breakfast Combo",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "whole or skim Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "Chocolate Milk, 12 oz Breakfast Combo",
        "price": "$4.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chocolate Milk, 12 oz Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "Hot Chocolate Breakfast Combo",
        "price": "$4.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hot Chocolate Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "Smores Hot Chocolate Breakfast Combo. Juice, 12 oz",
        "price": "$5.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Smores Hot Chocolate Breakfast Combo. Juice, 12 oz",
        "item_desc": ""
      },
      {
        "item": "orange, apple, cranberry, V-8, lemonade Breakfast Combo. Bottomless Fountain, 12 oz coke, diet coke, sprite, ginger ale, root beer,",
        "price": "$4.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "orange, apple, cranberry, V-8, lemonade Breakfast Combo. Bottomless Fountain, 12 oz coke, diet coke, sprite, ginger ale, root beer,",
        "item_desc": ""
      },
      {
        "item": "fanta orange, raspberry iced tea Breakfast Combo",
        "price": "$3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "fanta orange, raspberry iced tea Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "Cappuccino or Latte Breakfast Combo. Imported Italian Espresso",
        "price": "$4.50 | $5.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cappuccino or Latte Breakfast Combo. Imported Italian Espresso",
        "item_desc": ""
      },
      {
        "item": "single Breakfast Combo. Bottomless Hot Coffee",
        "price": "$3 | $5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "single Breakfast Combo. Bottomless Hot Coffee",
        "item_desc": ""
      },
      {
        "item": "regular or decaf Breakfast Combo",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "regular or decaf Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "Pj’s Cold Brew Breakfast Combo",
        "price": "$5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pj’s Cold Brew Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "Hot Tea Breakfast Combo. Chai Latte",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hot Tea Breakfast Combo. Chai Latte",
        "item_desc": ""
      },
      {
        "item": "harney & sons organic chai Breakfast Combo. Mac N’ Cheese",
        "price": "$5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "harney & sons organic chai Breakfast Combo. Mac N’ Cheese",
        "item_desc": ""
      },
      {
        "item": "cheddar, american, swiss, panko Breakfast Combo. Guacamole made fresh daily",
        "price": "$14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "cheddar, american, swiss, panko Breakfast Combo. Guacamole",
        "item_desc": "made fresh daily"
      },
      {
        "item": "house made tortilla chips Breakfast Combo. Onion Rings",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "house",
        "item_desc": "made tortilla chips Breakfast Combo. Onion Rings"
      },
      {
        "item": "special sauce Breakfast Combo. Loaded Nachos pepper jack, cheddar, diced onions, tomatoes, bell peppers, pico de gallo, jalapenos",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "special sauce Breakfast Combo. Loaded Nachos pepper jack, cheddar, diced onions, tomatoes, bell peppers, pico de gallo, jalapenos",
        "item_desc": ""
      },
      {
        "item": "sour cream Breakfast Combo. Italian Meatball Skillet",
        "price": "$17",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "sour cream Breakfast Combo. Italian Meatball Skillet",
        "item_desc": ""
      },
      {
        "item": "shaved parm fresh basil Breakfast Combo. Mozzarella Sticks (7)",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "shaved parm",
        "item_desc": "fresh basil Breakfast Combo. Mozzarella Sticks (7)"
      },
      {
        "item": "marinara sauce Breakfast Combo",
        "price": "$10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "marinara sauce Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "Pigs in a Blanket (8) Breakfast Combo",
        "price": "$10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pigs in a Blanket (8) Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "Hot Spinach & Artichoke Dip Breakfast Combo. Buffalo Wings (8)",
        "price": "$11",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Hot Spinach & Artichoke Dip Breakfast Combo. Buffalo Wings (8)",
        "item_desc": ""
      },
      {
        "item": "celery, blue c﻿heese dressing Breakfast Combo",
        "price": "$14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "celery, blue c﻿heese dressing Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "sausage, shaved parm RIGATONI VODKA",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "sausage, shaved parm RIGATONI VODKA",
        "item_desc": ""
      },
      {
        "item": "pesto GNOCCHI SORRENTINO",
        "price": "$15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "pesto GNOCCHI SORRENTINO",
        "item_desc": ""
      },
      {
        "item": "sunday sauce, shaved parm SPAGHETTI & MEATBALLS",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "sunday sauce, shaved parm SPAGHETTI & MEATBALLS",
        "item_desc": ""
      },
      {
        "item": "shangri la organic black tea pasta or brocolli florets",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "shangri la organic black tea pasta or brocolli florets",
        "item_desc": ""
      },
      {
        "item": "Tuscan Tomato pasta or brocolli florets. Greek feta, kalamata olives, tomatoes, cucumber, red",
        "price": "$9",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tuscan Tomato pasta or brocolli florets. Greek feta, kalamata olives, tomatoes, cucumber, red",
        "item_desc": ""
      },
      {
        "item": "vinegar dressing pasta or brocolli florets. Build Your Own Burger",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "vinegar dressing pasta or brocolli florets. Build Your Own Burger",
        "item_desc": ""
      },
      {
        "item": "American + pasta or brocolli florets",
        "price": "$1 | $1",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "American + pasta or brocolli florets",
        "item_desc": ""
      },
      {
        "item": "Bacon + pasta or brocolli florets",
        "price": "$1 | $2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bacon + pasta or brocolli florets",
        "item_desc": ""
      },
      {
        "item": "Pastrami +2 pasta or brocolli florets. Jersey Burger",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pastrami +2 pasta or brocolli florets. Jersey Burger",
        "item_desc": ""
      },
      {
        "item": "pork roll, american cheese, fried egg pasta or brocolli florets. Mexican Burger pepper jack cheese, guacamole, pico de",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "pork roll, american cheese, fried egg pasta or brocolli florets. Mexican Burger pepper jack cheese, guacamole, pico de",
        "item_desc": ""
      },
      {
        "item": "gallo pasta or brocolli florets. Smothered Cheeseburger smothered w/ sautéed onions &",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "gallo pasta or brocolli florets. Smothered Cheeseburger smothered w/ sautéed onions &",
        "item_desc": ""
      },
      {
        "item": "mushrooms pasta or brocolli florets. Turkey Burger all natural white & dark meat, sliced",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "mushrooms pasta or brocolli florets. Turkey Burger all natural white & dark meat, sliced",
        "item_desc": ""
      },
      {
        "item": "avocado, pesto mayo pasta or brocolli florets. Veggie Burger caramelized onions, lettuce, tomato,",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "avocado, pesto mayo pasta or brocolli florets. Veggie Burger caramelized onions, lettuce, tomato,",
        "item_desc": ""
      },
      {
        "item": "pj’s special sauce on a side pasta or brocolli florets. We are now serving Artisan",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "pj’s special sauce on a side pasta or brocolli florets. We are now serving Artisan",
        "item_desc": ""
      },
      {
        "item": "sunday sauce fresh basil, seeded torpedo Pj’s Parm Sandwiches. Meatball Parm house made meatballs, shaved parm, sunday",
        "price": "$16",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "sunday sauce",
        "item_desc": "fresh basil, seeded torpedo Pj’s Parm Sandwiches. Meatball Parm house made meatballs, shaved parm, sunday"
      },
      {
        "item": "sauce, seeded torpedo Pj’s Parm Sandwiches. Sausage Parm crumbled Italian sausage, shaved parm,",
        "price": "$17",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "sauce, seeded torpedo Pj’s Parm Sandwiches. Sausage Parm crumbled Italian sausage, shaved parm,",
        "item_desc": ""
      },
      {
        "item": "sunday sauce, seeded torpedo Pj’s Parm Sandwiches. Eggplant Parm breaded eggplant fresh mozzarella, sunday",
        "price": "$17",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "sunday sauce, seeded torpedo Pj’s Parm Sandwiches. Eggplant Parm breaded eggplant",
        "item_desc": "fresh mozzarella, sunday"
      },
      {
        "item": "sauce fresh basil, seeded torpedo Pj’s Parm Sandwiches. Served all day!",
        "price": "$16",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "sauce",
        "item_desc": "fresh basil, seeded torpedo Pj’s Parm Sandwiches. Served all day!"
      },
      {
        "item": "Gluten Free Pancakes",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Pancakes",
        "item_desc": ""
      },
      {
        "item": "Gluten Free Waffle",
        "price": "$17",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free Waffle",
        "item_desc": ""
      },
      {
        "item": "Gluten Free French Toast",
        "price": "$18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Gluten Free French Toast",
        "item_desc": ""
      },
      {
        "item": "Buckwheat Pancakes",
        "price": "$11 | $15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Buckwheat Pancakes",
        "item_desc": ""
      },
      {
        "item": "Buckwheat Waffle",
        "price": "$16",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Buckwheat Waffle",
        "item_desc": ""
      },
      {
        "item": "One Sausage Link Pj’s Famous Breakfast Combo",
        "price": "$18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "One Sausage Link Pj’s Famous Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "upgrade Pancakes Pj’s Famous Breakfast Combo",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "upgrade Pancakes Pj’s Famous Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "sub French Toast or Waffle Pj’s Famous Breakfast Combo. with Mashed Brown Potatoes & Toast",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "sub French Toast or Waffle Pj’s Famous Breakfast Combo.",
        "item_desc": "with Mashed Brown Potatoes & Toast"
      },
      {
        "item": "French Toast, Waffle or Upgrade Egg Breakfast",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French Toast, Waffle or Upgrade Egg Breakfast",
        "item_desc": ""
      },
      {
        "item": "substitute Bagel* OR. served with Fresh Fruit or Mashed Brown Potatoes",
        "price": "$2 | $3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "substitute Bagel* OR.",
        "item_desc": "served with Fresh Fruit or Mashed Brown Potatoes"
      },
      {
        "item": "substitute Bagel, Croissant, Wrap, or Gluten Free Breakfast Classics. Lox, Stock & Bagel",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "substitute Bagel, Croissant, Wrap, or Gluten Free Breakfast Classics. Lox, Stock & Bagel",
        "item_desc": ""
      },
      {
        "item": "lox, tomato, onion, capers, cream cheese Breakfast Classics",
        "price": "$20.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "lox, tomato, onion, capers, cream cheese Breakfast Classics",
        "item_desc": ""
      },
      {
        "item": "with choice of meat and cheese, kaiser Fried Egg Sandwich. Trenton Pork Roll, Egg, & Cheese",
        "price": "$14.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "with choice of meat and cheese, kaiser Fried Egg Sandwich. Trenton Pork Roll, Egg, & Cheese",
        "item_desc": ""
      },
      {
        "item": "american, sauteed onions, tomato, kaiser Fried Egg Sandwich. Huevos Ranchero Wrap eggs over hard, sausage,",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "american, sauteed onions, tomato, kaiser Fried Egg Sandwich. Huevos Ranchero Wrap eggs over hard, sausage,",
        "item_desc": ""
      },
      {
        "item": "ranchero sauce Fried Egg Sandwich",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "ranchero sauce Fried Egg Sandwich",
        "item_desc": ""
      },
      {
        "item": "eggs, chorizo, pepper jack, potatoes, peppers Breakfast Burrito",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "eggs, chorizo, pepper jack, potatoes, peppers Breakfast Burrito",
        "item_desc": ""
      },
      {
        "item": "eggs, bacon, cheddar, guac, sour cream Breakfast Scramble Quesadilla. Signatures with Fresh Fruit or Mashed Browns Benedicts",
        "price": "$19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "eggs, bacon, cheddar, guac, sour cream Breakfast Scramble Quesadilla. Signatures",
        "item_desc": "with Fresh Fruit or Mashed Browns Benedicts"
      },
      {
        "item": "canadian bacon, on english muffin Breakfast Scramble Quesadilla. Sammy Benny",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "canadian bacon, on english muffin Breakfast Scramble Quesadilla. Sammy Benny",
        "item_desc": ""
      },
      {
        "item": "lox, onions, capers, on english muffin Breakfast Scramble Quesadilla. Crabby Benny lump crab cakes, wilted spinach, on english",
        "price": "$20.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "lox, onions, capers, on english muffin Breakfast Scramble Quesadilla. Crabby Benny lump crab cakes, wilted spinach, on english",
        "item_desc": ""
      },
      {
        "item": "muffin Breakfast Scramble Quesadilla. Veggie Benny grilled portabello caps, wilted spinach, roasted",
        "price": "$21.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "muffin Breakfast Scramble Quesadilla. Veggie Benny grilled portabello caps, wilted spinach, roasted",
        "item_desc": ""
      },
      {
        "item": "red peppers, on english muffin Breakfast Scramble Quesadilla. Shakshuka over easy eggs spicy crushed tomato sauce,",
        "price": "$19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "red peppers, on english muffin Breakfast Scramble Quesadilla. Shakshuka over easy eggs",
        "item_desc": "spicy crushed tomato sauce,"
      },
      {
        "item": "onions, peppers, spinach, feta, crostini Breakfast Scramble Quesadilla. Mexishuka scrambled eggs, crumbled chorizo, mashed",
        "price": "$19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "onions, peppers, spinach, feta, crostini Breakfast Scramble Quesadilla. Mexishuka scrambled eggs, crumbled chorizo, mashed",
        "item_desc": ""
      },
      {
        "item": "avocado, pico de gallo, queso fresco Breakfast Scramble Quesadilla. Country Boy Hash over easy eggs, diced sirloin, peppers &",
        "price": "$20.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "avocado, pico de gallo, queso fresco Breakfast Scramble Quesadilla. Country Boy Hash over easy eggs, diced sirloin, peppers &",
        "item_desc": ""
      },
      {
        "item": "onions, over mashed browns Breakfast Scramble Quesadilla. Chicken & Waffles",
        "price": "$21.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "onions, over mashed browns Breakfast Scramble Quesadilla. Chicken & Waffles",
        "item_desc": ""
      },
      {
        "item": "chicken fritters, fries, real maple syrup Breakfast Scramble Quesadilla. Pj’s Skillets and Specialties Poached Eggs with Hollandaise Sauce Buttermilk Pancakes",
        "price": "$23.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "chicken fritters, fries, real maple syrup Breakfast Scramble Quesadilla. Pj’s Skillets and Specialties Poached Eggs",
        "item_desc": "with Hollandaise Sauce Buttermilk Pancakes"
      },
      {
        "item": "Pigs in a Blanket Breakfast Scramble Quesadilla",
        "price": "$18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pigs in a Blanket Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Nutty Multi-Grain Breakfast Scramble Quesadilla",
        "price": "$11 | $15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Nutty Multi-Grain Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Silver Dollars Breakfast Scramble Quesadilla",
        "price": "$13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Silver Dollars Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Pecan Breakfast Scramble Quesadilla",
        "price": "$11 | $15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pecan Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Chocolate Chip Breakfast Scramble Quesadilla. Peanut Butter",
        "price": "$11 | $15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chocolate Chip Breakfast Scramble Quesadilla. Peanut Butter",
        "item_desc": ""
      },
      {
        "item": "Oreo Breakfast Scramble Quesadilla. Chai, Pistachio,",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Oreo Breakfast Scramble Quesadilla. Chai, Pistachio,",
        "item_desc": ""
      },
      {
        "item": "Whipped Cream Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Whipped Cream Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Mixed Berry Blintz Breakfast Scramble Quesadilla",
        "price": "$14 | $19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mixed Berry Blintz Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Blueberry Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Blueberry Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Banana Coconut Rum Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Banana Coconut Rum Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Banana Breakfast Scramble Quesadilla",
        "price": "$11 | $15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Banana Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Cinnamon Swirl Breakfast Scramble Quesadilla. Nutella, Banana,",
        "price": "$11 | $15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cinnamon Swirl Breakfast Scramble Quesadilla. Nutella, Banana,",
        "item_desc": ""
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla",
        "price": "$15 | $21",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Strawberry Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Strawberry Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Banana Pecan Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Banana Pecan Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Banana Caramel Foster Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Banana Caramel Foster Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Smores Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Smores Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Tiramisu Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Tiramisu Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "add a scoop of Ice Cream Breakfast Scramble Quesadilla. Waffle French Toast Pj’s Hand-Spun Milkshakes",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "add a scoop of Ice Cream Breakfast Scramble Quesadilla. Waffle",
        "item_desc": "French Toast Pj’s Hand-Spun Milkshakes"
      },
      {
        "item": "your flavor Ice Cream | spike it 6 Breakfast Scramble Quesadilla. Espresso Chip Black & White Plain",
        "price": "$10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "your flavor Ice Cream | spike it",
        "item_desc": "6 Breakfast Scramble Quesadilla. Espresso Chip Black & White Plain"
      },
      {
        "item": "choice of two | spike it 6 Breakfast Scramble Quesadilla. Strawberry Banana Blueberry",
        "price": "$8",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "choice of two | spike it",
        "item_desc": "6 Breakfast Scramble Quesadilla. Strawberry Banana Blueberry"
      },
      {
        "item": "without meat Breakfast Scramble Quesadilla. ham, bacon, sausage, turkey sausage, pork roll, corned beef hash, canadian bacon, pastrami, turkey bacon, veggie sausage",
        "price": "$15 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "without meat Breakfast Scramble Quesadilla. ham, bacon, sausage, turkey sausage, pork roll, corned beef hash, canadian bacon, pastrami, turkey bacon, veggie sausage",
        "item_desc": ""
      },
      {
        "item": "Plain Jane Breakfast Scramble Quesadilla. Banana",
        "price": "$13.75 | $15.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Plain Jane Breakfast Scramble Quesadilla. Banana",
        "item_desc": ""
      },
      {
        "item": "Coconut Rum Breakfast Scramble Quesadilla",
        "price": "$16.75 | $18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Coconut Rum Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Banana Breakfast Scramble Quesadilla",
        "price": "$15.75 | $17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Banana Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla. Nutella, Banana,",
        "price": "$16.75 | $18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla. Nutella, Banana,",
        "item_desc": ""
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla",
        "price": "$17.75 | $19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Strawberry Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla",
        "price": "$16.75 | $18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Strawberry Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Banana Caramel Foster Breakfast Scramble Quesadilla",
        "price": "$17.75 | $19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Banana Caramel Foster Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Blueberry Breakfast Scramble Quesadilla. Strawberry & Cannoli",
        "price": "$15.75 | $17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Blueberry Breakfast Scramble Quesadilla. Strawberry & Cannoli",
        "item_desc": ""
      },
      {
        "item": "Cream Breakfast Scramble Quesadilla. Choice of Meat ham, bacon, sausage, turkey sausage, pork roll, corned beef hash, canadian bacon, pastrami,",
        "price": "$17.75 | $19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cream Breakfast Scramble Quesadilla. Choice of Meat ham, bacon, sausage, turkey sausage, pork roll, corned beef hash, canadian bacon, pastrami,",
        "item_desc": ""
      },
      {
        "item": "turkey bacon, veggie sausage Breakfast Scramble Quesadilla",
        "price": "$7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "turkey bacon, veggie sausage Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Pj’s Mashed Browns Breakfast Scramble Quesadilla",
        "price": "$6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pj’s Mashed Browns Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Two Eggs Breakfast Scramble Quesadilla. Croissant",
        "price": "$6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Two Eggs Breakfast Scramble Quesadilla. Croissant",
        "item_desc": ""
      },
      {
        "item": "strawberry jam, marmalade, or nutella Breakfast Scramble Quesadilla. Steak & Eggs sirloin, onions,",
        "price": "$5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "strawberry jam, marmalade, or nutella Breakfast Scramble Quesadilla. Steak & Eggs sirloin, onions,",
        "item_desc": ""
      },
      {
        "item": "two eggs any style Breakfast Scramble Quesadilla. Classic feta, sea salt, crushed red pepper",
        "price": "$26",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "two eggs any style Breakfast Scramble Quesadilla.",
        "item_desc": "Classic feta, sea salt, crushed red pepper"
      },
      {
        "item": "add an Egg + Breakfast Scramble Quesadilla",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "add an Egg + Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "onions, capers Breakfast Scramble Quesadilla. Bacon & Egg scrambled or fried egg",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "onions, capers Breakfast Scramble Quesadilla. Bacon & Egg scrambled or fried egg",
        "item_desc": ""
      },
      {
        "item": "chopped bacon Breakfast Scramble Quesadilla",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "chopped bacon Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Plain Potato Cakes Breakfast Scramble Quesadilla. The Denver",
        "price": "$16",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Plain Potato Cakes Breakfast Scramble Quesadilla. The Denver",
        "item_desc": ""
      },
      {
        "item": "peppers & onions, ham Breakfast Scramble Quesadilla. The Puerco crumbled chorizo, onion, jalapeno,",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "peppers & onions, ham Breakfast Scramble Quesadilla. The Puerco crumbled chorizo, onion, jalapeno,",
        "item_desc": ""
      },
      {
        "item": "queso fresco Breakfast Scramble Quesadilla. The Works",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "queso fresco Breakfast Scramble Quesadilla. The Works",
        "item_desc": ""
      },
      {
        "item": "cheddar, bacon, chili, sour cream, scallion Breakfast Scramble Quesadilla",
        "price": "$19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "cheddar, bacon, chili, sour cream, scallion Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "add Two Poached Eggs Breakfast Scramble Quesadilla",
        "price": "$6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "add Two Poached Eggs Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Mixed Berry Blintz Breakfast Scramble Quesadilla",
        "price": "$16.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Mixed Berry Blintz Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Nutella, Banana, Strawberry Breakfast Scramble Quesadilla",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Nutella, Banana, Strawberry Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Orange Marmalade Blintz Breakfast Scramble Quesadilla. Sweet",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Orange Marmalade Blintz Breakfast Scramble Quesadilla.",
        "item_desc": "Sweet"
      },
      {
        "item": "Spinach, Onion, & Sour Cream Breakfast Scramble Quesadilla. Mushrooms, Spinach, & Swiss",
        "price": "$15.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Spinach, Onion, & Sour Cream Breakfast Scramble Quesadilla. Mushrooms, Spinach, & Swiss",
        "item_desc": ""
      },
      {
        "item": "add chicken + Breakfast Scramble Quesadilla",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "add chicken + Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Lox & Stock, Cream Cheese Breakfast Scramble Quesadilla",
        "price": "$19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Lox & Stock, Cream Cheese Breakfast Scramble Quesadilla",
        "item_desc": ""
      },
      {
        "item": "Ham, Egg, & Cheddar Breakfast Scramble Quesadilla. Pj’s Hand-Spun Milkshakes Fruit Smoothies",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Ham, Egg, & Cheddar Breakfast Scramble Quesadilla. Pj’s Hand-Spun Milkshakes Fruit Smoothies",
        "item_desc": ""
      },
      {
        "item": "Pancake Sampler Breakfast Scramble Quesadilla. your choice of 3 Jersey Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pancake Sampler Breakfast Scramble Quesadilla. your choice of 3 Jersey Omelet",
        "item_desc": ""
      },
      {
        "item": "pork roll, griddled onion, american Breakfast Scramble Quesadilla. California Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "pork roll, griddled onion, american Breakfast Scramble Quesadilla. California Omelet",
        "item_desc": ""
      },
      {
        "item": "spinach, turkey bacon, pepper jack, avocado Breakfast Scramble Quesadilla. Western Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "spinach, turkey bacon, pepper jack, avocado Breakfast Scramble Quesadilla. Western Omelet",
        "item_desc": ""
      },
      {
        "item": "onions, peppers, ham, cheddar Breakfast Scramble Quesadilla. Pj’s Classic Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "onions, peppers, ham, cheddar Breakfast Scramble Quesadilla. Pj’s",
        "item_desc": "Classic Omelet"
      },
      {
        "item": "mushrooms, peppers, broccoli, spinach, feta Breakfast Scramble Quesadilla. Smoked Salmon Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "mushrooms, peppers, broccoli, spinach, feta Breakfast Scramble Quesadilla. Smoked Salmon Omelet",
        "item_desc": ""
      },
      {
        "item": "lox, onions, capers, avocado, cream cheese Breakfast Scramble Quesadilla. Pj’s Veggie Omelet",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "lox, onions, capers, avocado, cream cheese Breakfast Scramble Quesadilla. Pj’s Veggie Omelet",
        "item_desc": ""
      },
      {
        "item": "peppers, broccoli, zucchini, squash Breakfast Scramble Quesadilla. Mediterranean Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "peppers, broccoli, zucchini, squash Breakfast Scramble Quesadilla. Mediterranean Omelet",
        "item_desc": ""
      },
      {
        "item": "sun-dried tomatoes, spinach, feta Breakfast Scramble Quesadilla. Brooklyn Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "sun-dried tomatoes, spinach, feta Breakfast Scramble Quesadilla. Brooklyn Omelet",
        "item_desc": ""
      },
      {
        "item": "hickory smoked angus pastrami, swiss Breakfast Scramble Quesadilla. Pj’s Special Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "hickory smoked angus pastrami, swiss Breakfast Scramble Quesadilla. Pj’s Special Omelet",
        "item_desc": ""
      },
      {
        "item": "onions, peppers, mushrooms, tomatoes Breakfast Scramble Quesadilla. Spanish Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "onions, peppers, mushrooms, tomatoes Breakfast Scramble Quesadilla. Spanish Omelet",
        "item_desc": ""
      },
      {
        "item": "sausage, avocado, cheddar, ranchero sauce Breakfast Scramble Quesadilla. Healthy Corner Savory",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "sausage, avocado, cheddar, ranchero sauce Breakfast Scramble Quesadilla. Healthy Corner Savory",
        "item_desc": ""
      },
      {
        "item": "sausage, english muffin Heart Smart Sandwich. Greek Yogurt Parfait",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "sausage, english muffin Heart Smart Sandwich. Greek Yogurt Parfait",
        "item_desc": ""
      },
      {
        "item": "mixed berries, bananas, granola Heart Smart Sandwich. Bacon & Egg Stuffed Avocado",
        "price": "$16.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "mixed berries, bananas, granola Heart Smart Sandwich. Bacon & Egg",
        "item_desc": "Stuffed Avocado"
      },
      {
        "item": "w/ fresh fruit or mashed browns Heart Smart Sandwich",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "w/",
        "item_desc": "fresh fruit or mashed browns Heart Smart Sandwich"
      },
      {
        "item": "Fresh Fruit Medley Bowl Heart Smart Sandwich. Overnight Oats oat milk, honey banana strawberry | blueberry",
        "price": "$15.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fresh Fruit Medley Bowl Heart Smart Sandwich. Overnight Oats oat milk, honey banana",
        "item_desc": "strawberry | blueberry"
      },
      {
        "item": "raspberry Heart Smart Sandwich",
        "price": "$14.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "raspberry Heart Smart Sandwich",
        "item_desc": ""
      },
      {
        "item": "Grade A Pure Maple Syrup Heart Smart Sandwich",
        "price": "$4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Grade A Pure Maple Syrup Heart Smart Sandwich",
        "item_desc": ""
      },
      {
        "item": "Plain Two Heart Smart Sandwich. Kids’ Corner",
        "price": "$9 | $13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Plain Two Heart Smart Sandwich. Kids’ Corner",
        "item_desc": ""
      },
      {
        "item": "add Chicken Breast Philly Cheese Steak onions, mushrooms, peppers, tomatoes,",
        "price": "$3 | $7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "add Chicken Breast Philly Cheese Steak onions, mushrooms, peppers, tomatoes,",
        "item_desc": ""
      },
      {
        "item": "torpedo Turkey Club turkey, bacon, american,",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "torpedo Turkey Club turkey, bacon, american,",
        "item_desc": ""
      },
      {
        "item": "lettuce, tomato, mayo, white Pastrami or Turkey Reuben",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "lettuce, tomato, mayo, white Pastrami or Turkey Reuben",
        "item_desc": ""
      },
      {
        "item": "swiss, sauerkraut, thousand island, rye",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "swiss, sauerkraut, thousand island, rye",
        "item_desc": ""
      },
      {
        "item": "avocado, shredded cheddar Chicken Salad Wrap. Grilled Chicken Caesar Wrap",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "avocado, shredded cheddar Chicken Salad Wrap. Grilled Chicken Caesar Wrap",
        "item_desc": ""
      },
      {
        "item": "chicken, lettuce, croutons, caesar dressing Chicken Salad Wrap. Buffalo Chicken Fritters crispy chicken fritters, buffalo sauce, pickles, lettuce, tomato, mayo",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "chicken, lettuce, croutons, caesar dressing Chicken Salad Wrap. Buffalo Chicken Fritters",
        "item_desc": "crispy chicken fritters, buffalo sauce, pickles, lettuce, tomato, mayo"
      },
      {
        "item": "wrap or brioche roll Chicken Salad Wrap. Tuna Melt",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "wrap or brioche roll Chicken Salad Wrap. Tuna Melt",
        "item_desc": ""
      },
      {
        "item": "bacon, choice of cheese thick rye Chicken Salad Wrap",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "bacon, choice of cheese",
        "item_desc": "thick rye Chicken Salad Wrap"
      },
      {
        "item": "pepper jack, lettuce, tomato, torpedo Fat Tiger Sandwich",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "pepper jack, lettuce, tomato, torpedo Fat Tiger Sandwich",
        "item_desc": ""
      },
      {
        "item": "bacon, lettuce, tomato, avocado, rye BLTA. Fried Cod battered cod, american, lettuce, tartar sauce,",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "bacon, lettuce, tomato, avocado, rye BLTA. Fried Cod battered cod, american, lettuce, tartar sauce,",
        "item_desc": ""
      },
      {
        "item": "torpedo roll BLTA",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "torpedo roll BLTA",
        "item_desc": ""
      },
      {
        "item": "Fish & Chips Platter add BLTA. Grilled Cheese cheddar & american grilled cheese,",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Fish & Chips Platter",
        "item_desc": "add BLTA. Grilled Cheese cheddar & american grilled cheese,"
      },
      {
        "item": "Texas toast BLTA. Chicken or Steak Quesadilla chicken breast or sirloin steak cheddar, lettuce, tomato,",
        "price": "$15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Texas toast BLTA. Chicken or Steak Quesadilla chicken breast or sirloin steak cheddar, lettuce, tomato,",
        "item_desc": ""
      },
      {
        "item": "guac & sour cream BLTA",
        "price": "$22",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "guac & sour cream BLTA",
        "item_desc": ""
      },
      {
        "item": "Shoestring Fries or Cole Slaw sub Sweet Potato Fries or Onion Rings + Pj’s Tavern Fare (10 & Under) | choice of Small Milk, Soda, or Juice",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Shoestring Fries or Cole Slaw",
        "item_desc": "sub Sweet Potato Fries or Onion Rings + Pj’s Tavern Fare (10 & Under) | choice of Small Milk, Soda, or Juice"
      },
      {
        "item": "croutons Wear yours to breakfast next. Cobb romaine, hard boiled egg, bacon, cucumber, tomato,",
        "price": "$15.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "croutons Wear yours to breakfast next. Cobb romaine, hard boiled egg, bacon, cucumber, tomato,",
        "item_desc": ""
      },
      {
        "item": "blue cheese dressing Wear yours to breakfast next. Waldorf romaine, spinach, feta, grapes, apples, celery,",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "blue cheese dressing Wear yours to breakfast next. Waldorf romaine, spinach, feta, grapes, apples, celery,",
        "item_desc": ""
      },
      {
        "item": "walnuts, honey mayo Wear yours to breakfast next",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "walnuts, honey mayo Wear yours to breakfast next",
        "item_desc": ""
      },
      {
        "item": "Chicken Noodle Wear yours to breakfast next",
        "price": "$8",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chicken Noodle Wear yours to breakfast next",
        "item_desc": ""
      },
      {
        "item": "French Onion Wear yours to breakfast next",
        "price": "$9",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French Onion Wear yours to breakfast next",
        "item_desc": ""
      },
      {
        "item": "upgrade pancake Breakfast Combo. Plain Cheeseburger with Fries or Fresh Fruit Silver Dollar Pancakes",
        "price": "$1",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "upgrade pancake Breakfast Combo. Plain Cheeseburger",
        "item_desc": "with Fries or Fresh Fruit Silver Dollar Pancakes"
      },
      {
        "item": "upgrade pancakes Breakfast Combo. Grilled Cheese",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "upgrade pancakes Breakfast Combo. Grilled Cheese",
        "item_desc": ""
      },
      {
        "item": "with fries or fresh fruit Breakfast Combo. Mac n’ Cheese with fries or fresh fruit Chicken Tenders",
        "price": "$13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "with fries or fresh fruit Breakfast Combo. Mac n’ Cheese with fries or fresh fruit Chicken Tenders",
        "item_desc": ""
      },
      {
        "item": "whole or skim Breakfast Combo",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "whole or skim Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "Chocolate Milk, 12 oz Breakfast Combo",
        "price": "$4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chocolate Milk, 12 oz Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "Hot Chocolate Breakfast Combo",
        "price": "$4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hot Chocolate Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "Smores Hot Chocolate Breakfast Combo. Juice, 12 oz",
        "price": "$5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Smores Hot Chocolate Breakfast Combo. Juice, 12 oz",
        "item_desc": ""
      },
      {
        "item": "orange, apple, cranberry, V-8, lemonade Breakfast Combo. Bottomless Fountain, 12 oz coke, diet coke, sprite, ginger ale, root beer,",
        "price": "$4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "orange, apple, cranberry, V-8, lemonade Breakfast Combo. Bottomless Fountain, 12 oz coke, diet coke, sprite, ginger ale, root beer,",
        "item_desc": ""
      },
      {
        "item": "fanta orange, raspberry iced tea Breakfast Combo",
        "price": "$4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "fanta orange, raspberry iced tea Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "Cappuccino or Latte Breakfast Combo. Imported Italian Espresso",
        "price": "$4 | $5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cappuccino or Latte Breakfast Combo. Imported Italian Espresso",
        "item_desc": ""
      },
      {
        "item": "single Breakfast Combo. Bottomless Hot Coffee",
        "price": "$3 | $5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "single Breakfast Combo. Bottomless Hot Coffee",
        "item_desc": ""
      },
      {
        "item": "regular or decaf Breakfast Combo",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "regular or decaf Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "Pj’s Cold Brew Breakfast Combo",
        "price": "$4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pj’s Cold Brew Breakfast Combo",
        "item_desc": ""
      },
      {
        "item": "Hot Tea Breakfast Combo. Chai Latte",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hot Tea Breakfast Combo. Chai Latte",
        "item_desc": ""
      },
      {
        "item": "harney & sons organic chai Breakfast Combo. Bar Pretzel",
        "price": "$5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "harney & sons organic chai Breakfast Combo. Bar Pretzel",
        "item_desc": ""
      },
      {
        "item": "brushed butter, grain mustard Breakfast Combo. Guacamole made fresh daily",
        "price": "$10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "brushed butter, grain mustard Breakfast Combo. Guacamole",
        "item_desc": "made fresh daily"
      },
      {
        "item": "house made tortilla chips Breakfast Combo. Onion Rings",
        "price": "$13.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "house",
        "item_desc": "made tortilla chips Breakfast Combo. Onion Rings"
      },
      {
        "item": "special sauce Breakfast Combo. Shoestring Fries herb mayonnaise",
        "price": "$10.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "special sauce Breakfast Combo. Shoestring Fries herb mayonnaise",
        "item_desc": ""
      },
      {
        "item": "sub sweet potato fries + Breakfast Combo",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "sub",
        "item_desc": "sweet potato fries + Breakfast Combo"
      },
      {
        "item": "cheddar, jalapenos Breakfast Combo. Crispy Brussels Sprouts",
        "price": "$10.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "cheddar, jalapenos Breakfast Combo.",
        "item_desc": "Crispy Brussels Sprouts"
      },
      {
        "item": "shaved parm, salt & pepper Breakfast Combo. Mozzarella Sticks",
        "price": "$11.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "shaved parm, salt & pepper Breakfast Combo. Mozzarella Sticks",
        "item_desc": ""
      },
      {
        "item": "marinara sauce Breakfast Combo. Chicken Fritters",
        "price": "$10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "marinara sauce Breakfast Combo. Chicken Fritters",
        "item_desc": ""
      },
      {
        "item": "spicy mayo Breakfast Combo. Buffalo Wings",
        "price": "$15.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "spicy mayo Breakfast Combo. Buffalo Wings",
        "item_desc": ""
      },
      {
        "item": "celery, blue c heese dressing Breakfast Combo. 10% Starving Student Discount w/ valid ID or",
        "price": "$14.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "celery, blue c heese dressing Breakfast Combo. 10% Starving Student Discount w/ valid ID or",
        "item_desc": ""
      },
      {
        "item": "One Sausage Link (“One-Fer” Breakfast)",
        "price": "$13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "One Sausage Link (“One-Fer” Breakfast)",
        "item_desc": ""
      },
      {
        "item": "house made Tortilla Chips add Extra Cheese (“One-Fer” Breakfast). Mac n’ Cheese",
        "price": "$2 | $3 | $4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "house made Tortilla Chips",
        "item_desc": "add Extra Cheese (“One-Fer” Breakfast). Mac n’ Cheese"
      },
      {
        "item": "cheddar, american, swiss, panko (“One-Fer” Breakfast). Cheeseburger Mac",
        "price": "$18.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "cheddar, american, swiss, panko (“One-Fer” Breakfast). Cheeseburger Mac",
        "item_desc": ""
      },
      {
        "item": "ground beef, american, cheddar (“One-Fer” Breakfast). Buffalo Bleu diced grilled chicken, red bell peppers, bleu",
        "price": "$19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "ground beef, american, cheddar (“One-Fer” Breakfast). Buffalo Bleu diced grilled chicken, red bell peppers, bleu",
        "item_desc": ""
      },
      {
        "item": "cheese, Frank’s hot sauce (“One-Fer” Breakfast). Mushroom Mac sauteed mushrooms, fontina, mascarpone,",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "cheese, Frank’s hot sauce (“One-Fer” Breakfast). Mushroom Mac sauteed mushrooms, fontina, mascarpone,",
        "item_desc": ""
      },
      {
        "item": "truffle oil (“One-Fer” Breakfast). Cheesy Nachos pepper jack, cheddar, jalapenos",
        "price": "$19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "truffle oil (“One-Fer” Breakfast). Cheesy Nachos pepper jack, cheddar, jalapenos",
        "item_desc": ""
      },
      {
        "item": "sour cream (“One-Fer” Breakfast). Loaded Nachos pepper jack, cheddar, diced onions, tomatoes,",
        "price": "$14",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "sour cream (“One-Fer” Breakfast). Loaded Nachos pepper jack, cheddar, diced onions, tomatoes,",
        "item_desc": ""
      },
      {
        "item": "sour cream (“One-Fer” Breakfast). Nachos Supreme pepper jack, cheddar, diced on ions, tomatoes,",
        "price": "$16",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "sour cream (“One-Fer” Breakfast). Nachos Supreme pepper jack, cheddar, diced on ions, tomatoes,",
        "item_desc": ""
      },
      {
        "item": "sour cream (“One-Fer” Breakfast). Fresh Brewed Bottomless Iced Tea",
        "price": "$19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "sour cream (“One-Fer” Breakfast).",
        "item_desc": "Fresh Brewed Bottomless Iced Tea"
      },
      {
        "item": "shangri la organic black tea (“One-Fer” Breakfast)",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "shangri la organic black tea (“One-Fer” Breakfast)",
        "item_desc": ""
      },
      {
        "item": "Chili (“One-Fer” Breakfast). Greek feta, kalamata olives, tomatoes, cucumber, red",
        "price": "$9",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chili (“One-Fer” Breakfast). Greek feta, kalamata olives, tomatoes, cucumber, red",
        "item_desc": ""
      },
      {
        "item": "vinegar dressing (“One-Fer” Breakfast). served on Brioche Roll or Croissant **Consuming raw or undercooked meats,",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "vinegar dressing (“One-Fer” Breakfast).",
        "item_desc": "served on Brioche Roll or Croissant **Consuming raw or undercooked meats,"
      },
      {
        "item": "American +",
        "price": "$1 | $1",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "American +",
        "item_desc": ""
      },
      {
        "item": "Bacon +",
        "price": "$1 | $2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Bacon +",
        "item_desc": ""
      },
      {
        "item": "Pastrami +2 Jersey Burger",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pastrami +2 Jersey Burger",
        "item_desc": ""
      },
      {
        "item": "pork roll, american cheese, fried egg Mexican Burger pepper jack cheese, guacamole, pico de",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "pork roll, american cheese, fried egg Mexican Burger pepper jack cheese, guacamole, pico de",
        "item_desc": ""
      },
      {
        "item": "gallo Smothered Cheeseburger smothered w/ sautéed onions &",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "gallo Smothered Cheeseburger smothered w/ sautéed onions &",
        "item_desc": ""
      },
      {
        "item": "mushrooms Turkey Burger all natural white & dark meat, sliced",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "mushrooms Turkey Burger all natural white & dark meat, sliced",
        "item_desc": ""
      },
      {
        "item": "avocado, pesto mayo Beyond Veggie Burger caramelized onions, lettuce, tomato,",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "avocado, pesto mayo Beyond Veggie Burger caramelized onions, lettuce, tomato,",
        "item_desc": ""
      },
      {
        "item": "pj’s special sauce on a side",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "pj’s special sauce on a side",
        "item_desc": ""
      }
    ]
  },
  {
    "name": "Roots Ocean Prime",
    "items": [
      {
        "item": "French Onion Soup gruyère, croutons",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French Onion Soup gruyère, croutons",
        "item_desc": ""
      },
      {
        "item": "Lobster Bisque asparagus, lobster, chives",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Bisque asparagus, lobster, chives",
        "item_desc": ""
      },
      {
        "item": "Kobe Sliders cheddar, caramelized onions",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kobe Sliders cheddar, caramelized onions",
        "item_desc": ""
      },
      {
        "item": "Cheesesteak Sliders shaved filet mignon, sauteed onions & peppers, three cheeses",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cheesesteak Sliders shaved filet mignon, sauteed onions & peppers, three cheeses",
        "item_desc": ""
      },
      {
        "item": "NJ Burrata heirloom tomato, grilled ciabatta, balsamic, basil pesto",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "NJ Burrata heirloom tomato, grilled ciabatta, balsamic, basil pesto",
        "item_desc": ""
      },
      {
        "item": "Maine Lobster Bites lemon garlic, beurre blanc, gruyere, bread crumbs",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Maine Lobster Bites lemon",
        "item_desc": "garlic, beurre blanc, gruyere, bread crumbs"
      },
      {
        "item": "Hamachi Crudo blistered jalapeno, kombu ponzu, citrus, fried onion, togarashi",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hamachi Crudo blistered jalapeno, kombu ponzu, citrus, fried onion, togarashi",
        "item_desc": ""
      },
      {
        "item": "Yellowfin Tuna Tartare crushed avocado crispy wontons, wasabi cream, ponzu, sesame seeds",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Yellowfin Tuna Tartare crushed avocado",
        "item_desc": "crispy wontons, wasabi cream, ponzu, sesame seeds"
      },
      {
        "item": "Rhode Island Crispy Calamari cherry peppers, roasted red pepper“marinara”",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Rhode Island",
        "item_desc": "Crispy Calamari cherry peppers, roasted red pepper“marinara”"
      },
      {
        "item": "Roots Crispy Shrimp Scampi garlic, butter, white wine",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots",
        "item_desc": "Crispy Shrimp Scampi garlic, butter, white wine"
      },
      {
        "item": "Crispy Wagyu Dumplings honey sambal, mustard sauce",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Crispy Wagyu Dumplings honey sambal, mustard sauce",
        "item_desc": ""
      },
      {
        "item": "Spicy Fall Off The Bone Ribs baby back pork ribs",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spicy Fall Off The Bone Ribs baby back pork ribs",
        "item_desc": ""
      },
      {
        "item": "Colossal Lump Crab Cake lemon, tartar sauce",
        "price": "25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Colossal Lump Crab Cake lemon, tartar sauce",
        "item_desc": ""
      },
      {
        "item": "Applewood Smoked Slab Bacon maple glaze",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Applewood Smoked Slab Bacon maple glaze",
        "item_desc": ""
      },
      {
        "item": "Chilled Jumbo Shrimp cocktail sauce",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chilled Jumbo Shrimp cocktail sauce",
        "item_desc": ""
      },
      {
        "item": "Snow Crab Claws mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snow Crab Claws mustard and cocktail sauces",
        "item_desc": ""
      },
      {
        "item": "Local East Coast Oysters half shell, by the half dozen",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Local East Coast Oysters half shell, by the half dozen",
        "item_desc": ""
      },
      {
        "item": "Lobster Cocktail whole 1 1/4 lobster chilled, cocktail sauce",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Cocktail whole 1 1/4 lobster chilled, cocktail sauce",
        "item_desc": ""
      },
      {
        "item": "1/4 lb Colossal Lump Crab Cocktail sliced avocado, mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "1/4 lb Colossal Lump Crab Cocktail sliced avocado, mustard and cocktail sauces",
        "item_desc": ""
      },
      {
        "item": "Chilled Seafood Platter (2/4/6/8)Current MP lobster, oysters, shrimp cocktail, tuna tartare, snow crab claws",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chilled Seafood Platter (2/4/6/8)Current MP lobster, oysters, shrimp cocktail, tuna tartare, snow crab claws",
        "item_desc": ""
      },
      {
        "item": "Caesar Salad garlic croutons, grana padano",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Caesar Salad",
        "item_desc": "garlic croutons, grana padano"
      },
      {
        "item": "Wedge of Iceberg Lettuce tomato crispy red onions, bacon, blue cheese",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Wedge of Iceberg Lettuce tomato",
        "item_desc": "crispy red onions, bacon, blue cheese"
      },
      {
        "item": "Heirloom Tomato Salad heirloom tomato creamy Italian vinaigrette, blue cheese, red onion, garlic croutons, basil",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Heirloom Tomato Salad heirloom tomato",
        "item_desc": "creamy Italian vinaigrette, blue cheese, red onion, garlic croutons, basil"
      },
      {
        "item": "Arugula Salad spicy candied walnuts, crumbled blue cheese, shaved apple, cider vinaigrette",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Arugula Salad",
        "item_desc": "spicy candied walnuts, crumbled blue cheese, shaved apple, cider vinaigrette"
      },
      {
        "item": "Chopped Salad romaine, iceberg, tomato, corn, broccoli, carrot, feta, cucumber, asparagus, black peppercorn dressing",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Chopped Salad romaine, iceberg, tomato, corn, broccoli, carrot, feta, cucumber, asparagus, black peppercorn dressing",
        "item_desc": ""
      },
      {
        "item": "12 oz Petite Prime NY Strip Steak",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "12 oz Petite Prime NY Strip Steak",
        "item_desc": ""
      },
      {
        "item": "16 oz. Prime NY Strip Steak",
        "price": "54.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "16 oz. Prime NY Strip Steak",
        "item_desc": ""
      },
      {
        "item": "8 oz Petit Filet Mignon",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "8 oz Petit Filet Mignon",
        "item_desc": ""
      },
      {
        "item": "12 oz Filet Mignon",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "12 oz Filet Mignon",
        "item_desc": ""
      },
      {
        "item": "20 oz Dry Aged Cowboy Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "20 oz Dry Aged Cowboy Steak",
        "item_desc": ""
      },
      {
        "item": "16 oz Prime Ribeye Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "16 oz Prime Ribeye Steak",
        "item_desc": ""
      },
      {
        "item": "42 oz Prime Porterhouse Steak for Two",
        "price": "MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "42 oz Prime Porterhouse Steak for Two",
        "item_desc": ""
      },
      {
        "item": "Snake River Farms American Wagyu NY Strip Steak",
        "price": "79.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snake River Farms",
        "item_desc": "American Wagyu NY Strip Steak"
      },
      {
        "item": "Snake River Farms American Wagyu 12 oz. Ribeye",
        "price": "84.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snake River Farms",
        "item_desc": "American Wagyu 12 oz. Ribeye"
      },
      {
        "item": "Snake River Farms American Wagyu 8 oz. Petite Filet Mignon",
        "price": "74.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snake River Farms",
        "item_desc": "American Wagyu 8 oz. Petite Filet Mignon"
      },
      {
        "item": "Beef Wellington filet mignon, mushroom, asparagus, Hollandaise sauce (limited availability)",
        "price": "52.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Beef Wellington filet mignon, mushroom, asparagus, Hollandaise sauce (limited availability)",
        "item_desc": ""
      },
      {
        "item": "Roots Tailors Plate A surf & turf of petite cut filet mignon (6 oz) & two jumbo shrimp with a scampi butter sauce",
        "price": "47.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots Tailors Plate A surf & turf of petite cut filet mignon (6 oz) & two jumbo shrimp",
        "item_desc": "with a scampi butter sauce"
      },
      {
        "item": "Roots Chicken Parm red pepper marinara, parmesan creamy burrata",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots Chicken Parm red pepper marinara, parmesan",
        "item_desc": "creamy burrata"
      },
      {
        "item": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces",
        "price": "3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces",
        "item_desc": ""
      },
      {
        "item": "East Coast Halibut herb-crusted, dill, capers, beurre blanc",
        "price": "40.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "East Coast Halibut herb-crusted, dill, capers, beurre blanc",
        "item_desc": ""
      },
      {
        "item": "9 oz. South African Lobster TailCurrent MP Served Broiled or Steamed",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "9 oz. South African Lobster TailCurrent MP",
        "item_desc": "Served Broiled or Steamed"
      },
      {
        "item": "Horseradish-Crusted Faroe Island Salmon horseradish cream sauce and asparagus",
        "price": "35.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Horseradish-Crusted Faroe Island Salmon horseradish cream sauce and asparagus",
        "item_desc": ""
      },
      {
        "item": "True Dover Sole pan seared fillet served in a Meuniere sauce (Limited availability Thursday-Saturday)",
        "price": "64.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "True Dover Sole pan seared fillet",
        "item_desc": "served in a Meuniere sauce (Limited availability Thursday-Saturday)"
      },
      {
        "item": "Blue cheese hat",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Blue cheese hat",
        "item_desc": ""
      },
      {
        "item": "Lobster & Cherry peppers",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster & Cherry peppers",
        "item_desc": ""
      },
      {
        "item": "Jumbo Shrimp",
        "price": "6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jumbo Shrimp",
        "item_desc": ""
      },
      {
        "item": "Oscar Style colossal crab, asparagus, hollandaise",
        "price": "22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Oscar Style colossal crab, asparagus, hollandaise",
        "item_desc": ""
      },
      {
        "item": "Roots Steak Sauce (Complimentary)",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots Steak Sauce (Complimentary)",
        "item_desc": ""
      },
      {
        "item": "Au Poivre",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Au Poivre",
        "item_desc": ""
      },
      {
        "item": "Béarnaise3.95",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Béarnaise3.95",
        "item_desc": ""
      },
      {
        "item": "Hollandaise",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hollandaise",
        "item_desc": ""
      },
      {
        "item": "Horseradish Cream",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Horseradish Cream",
        "item_desc": ""
      },
      {
        "item": "Our Famous Mac & Cheese",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Our Famous Mac & Cheese",
        "item_desc": ""
      },
      {
        "item": "Truffle Pommes Frites",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Truffle Pommes Frites",
        "item_desc": ""
      },
      {
        "item": "Lobster Macaroni and Cheese",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Macaroni and Cheese",
        "item_desc": ""
      },
      {
        "item": "Onion Rings",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Onion Rings",
        "item_desc": ""
      },
      {
        "item": "Pomme Frites",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pomme Frites",
        "item_desc": ""
      },
      {
        "item": "Potatoes Au Gratin",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Potatoes Au Gratin",
        "item_desc": ""
      },
      {
        "item": "Classic Whipped Potatoes",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Classic Whipped Potatoes",
        "item_desc": ""
      },
      {
        "item": "Loaded Colossal Baked Potato",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Loaded Colossal Baked Potato",
        "item_desc": ""
      },
      {
        "item": "Creamed Corn",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Creamed Corn",
        "item_desc": ""
      },
      {
        "item": "Creamed Spinach",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Creamed Spinach",
        "item_desc": ""
      },
      {
        "item": "Roasted Asparagus",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roasted Asparagus",
        "item_desc": ""
      },
      {
        "item": "Broccoli Garlic & Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Broccoli",
        "item_desc": "Garlic & Oil"
      },
      {
        "item": "Roasted Wild Mushrooms Shiitake, Oyster, White Button, Herb Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roasted Wild Mushrooms Shiitake, Oyster, White Button, Herb Oil",
        "item_desc": ""
      },
      {
        "item": "Brussels Sprouts Honey Sambal, Bacon & Scallions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brussels Sprouts Honey Sambal, Bacon & Scallions",
        "item_desc": ""
      },
      {
        "item": "French Onion Soup gruyère, croutons",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French Onion Soup gruyère, croutons",
        "item_desc": ""
      },
      {
        "item": "Lobster Bisque asparagus, lobster, chives",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Bisque asparagus, lobster, chives",
        "item_desc": ""
      },
      {
        "item": "Kobe Sliders cheddar, caramelized onions",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kobe Sliders cheddar, caramelized onions",
        "item_desc": ""
      },
      {
        "item": "NJ Burrata heirloom tomato, grilled ciabatta, balsamic, basil pesto",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "NJ Burrata heirloom tomato, grilled ciabatta, balsamic, basil pesto",
        "item_desc": ""
      },
      {
        "item": "Petite Maine Lobster Bites lemon garlic, beurre blanc, gruyere, bread crumbs",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Petite Maine Lobster Bites lemon",
        "item_desc": "garlic, beurre blanc, gruyere, bread crumbs"
      },
      {
        "item": "Hamachi Crudo blistered jalapeno, kombu ponzu, citrus, fried onion, togarashi",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hamachi Crudo blistered jalapeno, kombu ponzu, citrus, fried onion, togarashi",
        "item_desc": ""
      },
      {
        "item": "Yellowfin Tuna Tartare crushed avocado crispy wontons, wasabi cream, ponzu, sesame seeds",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Yellowfin Tuna Tartare crushed avocado",
        "item_desc": "crispy wontons, wasabi cream, ponzu, sesame seeds"
      },
      {
        "item": "Rhode Island Crispy Calamari cherry peppers, roasted red pepper“marinara”",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Rhode Island",
        "item_desc": "Crispy Calamari cherry peppers, roasted red pepper“marinara”"
      },
      {
        "item": "Roots Crispy Shrimp Scampi garlic, butter, white wine",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots",
        "item_desc": "Crispy Shrimp Scampi garlic, butter, white wine"
      },
      {
        "item": "Crispy Wagyu Dumplings honey sambal, mustard sauce",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Crispy Wagyu Dumplings honey sambal, mustard sauce",
        "item_desc": ""
      },
      {
        "item": "Spicy Fall Off The Bone Ribs baby back pork ribs",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spicy Fall Off The Bone Ribs baby back pork ribs",
        "item_desc": ""
      },
      {
        "item": "Colossal Lump Crab Cake lemon, tartar sauce",
        "price": "25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Colossal Lump Crab Cake lemon, tartar sauce",
        "item_desc": ""
      },
      {
        "item": "Applewood Smoked Slab Bacon maple glaze",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Applewood Smoked Slab Bacon maple glaze",
        "item_desc": ""
      },
      {
        "item": "Chilled Jumbo Shrimp cocktail sauce",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chilled Jumbo Shrimp cocktail sauce",
        "item_desc": ""
      },
      {
        "item": "Snow Crab Claws mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snow Crab Claws mustard and cocktail sauces",
        "item_desc": ""
      },
      {
        "item": "Local East Coast Oysters half shell, by the half dozen",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Local East Coast Oysters half shell, by the half dozen",
        "item_desc": ""
      },
      {
        "item": "Lobster Cocktail whole 1 1/4 lobster chilled, cocktail sauce",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Cocktail whole 1 1/4 lobster chilled, cocktail sauce",
        "item_desc": ""
      },
      {
        "item": "1/4 lb Colossal Lump Crab Cocktail sliced avocado, mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "1/4 lb Colossal Lump Crab Cocktail sliced avocado, mustard and cocktail sauces",
        "item_desc": ""
      },
      {
        "item": "Chilled Seafood Platter (2/4/6/8)Current MP lobster, oysters, shrimp cocktail, tuna tartare, snow crab claws",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chilled Seafood Platter (2/4/6/8)Current MP lobster, oysters, shrimp cocktail, tuna tartare, snow crab claws",
        "item_desc": ""
      },
      {
        "item": "Caesar Salad garlic croutons, grana padano",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Caesar Salad",
        "item_desc": "garlic croutons, grana padano"
      },
      {
        "item": "Wedge of Iceberg Lettuce tomato crispy red onions, bacon, blue cheese",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Wedge of Iceberg Lettuce tomato",
        "item_desc": "crispy red onions, bacon, blue cheese"
      },
      {
        "item": "Heirloom Tomato Salad heirloom tomato creamy italian vinaigrette, blue cheese, red onion, garlic croutons, basil",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Heirloom Tomato Salad heirloom tomato",
        "item_desc": "creamy italian vinaigrette, blue cheese, red onion, garlic croutons, basil"
      },
      {
        "item": "Arugula Salad spicy candied walnuts, crumbled blue cheese, shaved apple, cider vinaigrette",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Arugula Salad",
        "item_desc": "spicy candied walnuts, crumbled blue cheese, shaved apple, cider vinaigrette"
      },
      {
        "item": "Chopped Salad romaine, iceberg, tomato, corn, broccoli, carrot, feta, cucumber, asparagus, black peppercorn dressing",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Chopped Salad romaine, iceberg, tomato, corn, broccoli, carrot, feta, cucumber, asparagus, black peppercorn dressing",
        "item_desc": ""
      },
      {
        "item": "12 oz Petite Prime NY Strip Steak",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "12 oz Petite Prime NY Strip Steak",
        "item_desc": ""
      },
      {
        "item": "16 oz. Prime NY Strip Steak",
        "price": "54.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "16 oz. Prime NY Strip Steak",
        "item_desc": ""
      },
      {
        "item": "8 oz Petit Filet Mignon",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "8 oz Petit Filet Mignon",
        "item_desc": ""
      },
      {
        "item": "12 oz Filet Mignon",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "12 oz Filet Mignon",
        "item_desc": ""
      },
      {
        "item": "20 oz Dry Aged Cowboy Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "20 oz Dry Aged Cowboy Steak",
        "item_desc": ""
      },
      {
        "item": "16 oz Prime Ribeye Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "16 oz Prime Ribeye Steak",
        "item_desc": ""
      },
      {
        "item": "42 oz Prime Porterhouse Steak for Two",
        "price": "(MP)",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "42 oz Prime Porterhouse Steak for Two",
        "item_desc": ""
      },
      {
        "item": "12 oz. NY Strip Steak",
        "price": "79.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "12 oz. NY Strip Steak",
        "item_desc": ""
      },
      {
        "item": "12 oz. Ribeye",
        "price": "84.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "12 oz. Ribeye",
        "item_desc": ""
      },
      {
        "item": "8 oz. Petite Filet Mignon",
        "price": "74.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "8 oz. Petite Filet Mignon",
        "item_desc": ""
      },
      {
        "item": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces, truffle aioli, blue cheese crust or roots cowboy butter",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces, truffle aioli, blue cheese crust or roots cowboy butter",
        "item_desc": ""
      },
      {
        "item": "Beef Wellington (limited availability) filet mignon, mushrooms, asparagus, hollandaise",
        "price": "52.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Beef Wellington (limited availability) filet mignon, mushrooms, asparagus, hollandaise",
        "item_desc": ""
      },
      {
        "item": "Roots Tailors Plate a surf & turf of petite 6 oz ilet, two jumbo shrimp with a scampi butter sauce",
        "price": "47.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots Tailors Plate a surf & turf of petite 6 oz ilet, two jumbo shrimp",
        "item_desc": "with a scampi butter sauce"
      },
      {
        "item": "Roots Chicken Parm red pepper marinara, parmesan creamy burrata",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots Chicken Parm red pepper marinara, parmesan",
        "item_desc": "creamy burrata"
      },
      {
        "item": "True Dover Sole pan seared fillet served in a meunière sauce (limited availability Thursday-Saturday)",
        "price": "64.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "True Dover Sole pan seared fillet",
        "item_desc": "served in a meunière sauce (limited availability Thursday-Saturday)"
      },
      {
        "item": "East Coast Halibut herb-crusted, dill, capers, beurre blanc",
        "price": "40.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "East Coast Halibut herb-crusted, dill, capers, beurre blanc",
        "item_desc": ""
      },
      {
        "item": "9 oz. South African Lobster Tail Served Broiled or Steamed",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "9 oz. South African Lobster Tail",
        "item_desc": "Served Broiled or Steamed"
      },
      {
        "item": "Horseradish-Crusted Faroe Island Salmon horseradish cream sauce and asparagus",
        "price": "35.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Horseradish-Crusted Faroe Island Salmon horseradish cream sauce and asparagus",
        "item_desc": ""
      },
      {
        "item": "Pan Seared Sea Scallops creamy mushroom risotto, crispy maitake mushrooms",
        "price": "38.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Pan Seared Sea Scallops",
        "item_desc": "creamy mushroom risotto, crispy maitake mushrooms"
      },
      {
        "item": "Our Famous Mac & Cheese",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Our Famous Mac & Cheese",
        "item_desc": ""
      },
      {
        "item": "Truffle Macaroni and Cheese",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Truffle Macaroni and Cheese",
        "item_desc": ""
      },
      {
        "item": "Lobster Macaroni and Cheese",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Macaroni and Cheese",
        "item_desc": ""
      },
      {
        "item": "Truffle Pommes Frites",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Truffle Pommes Frites",
        "item_desc": ""
      },
      {
        "item": "Pomme Frites",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pomme Frites",
        "item_desc": ""
      },
      {
        "item": "Onion Rings",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Onion Rings",
        "item_desc": ""
      },
      {
        "item": "Broccoli Garlic & Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Broccoli",
        "item_desc": "Garlic & Oil"
      },
      {
        "item": "Potatoes Au Gratin",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Potatoes Au Gratin",
        "item_desc": ""
      },
      {
        "item": "Classic Whipped Potatoes",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Classic Whipped Potatoes",
        "item_desc": ""
      },
      {
        "item": "Loaded Colossal Baked Potato",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Loaded Colossal Baked Potato",
        "item_desc": ""
      },
      {
        "item": "Creamed Corn sweet corn puree, roasted corn, pearl onions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Creamed Corn",
        "item_desc": "sweet corn puree, roasted corn, pearl onions"
      },
      {
        "item": "Creamed Spinach",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Creamed Spinach",
        "item_desc": ""
      },
      {
        "item": "Roasted Asparagus lemon aioli, parmesan, bread crumbs",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roasted Asparagus lemon aioli, parmesan, bread crumbs",
        "item_desc": ""
      },
      {
        "item": "Roasted Wild Mushrooms Shiitake, Oyster, White Button, Herb Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roasted Wild Mushrooms Shiitake, Oyster, White Button, Herb Oil",
        "item_desc": ""
      },
      {
        "item": "Brussels Sprouts Honey Sambal, Bacon & Scallions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brussels Sprouts Honey Sambal, Bacon & Scallions",
        "item_desc": ""
      },
      {
        "item": "French Onion Soup gruyère, croutons",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French Onion Soup gruyère, croutons",
        "item_desc": ""
      },
      {
        "item": "Lobster Bisque asparagus, lobster, chives",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Bisque asparagus, lobster, chives",
        "item_desc": ""
      },
      {
        "item": "Kobe Sliders cheddar, caramelized onions",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kobe Sliders cheddar, caramelized onions",
        "item_desc": ""
      },
      {
        "item": "Cheesesteak Sliders shaved filet mignon, sauteed onions & peppers, three cheeses",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cheesesteak Sliders shaved filet mignon, sauteed onions & peppers, three cheeses",
        "item_desc": ""
      },
      {
        "item": "NJ Burrata heirloom tomato, grilled ciabatta, balsamic, basil pesto",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "NJ Burrata heirloom tomato, grilled ciabatta, balsamic, basil pesto",
        "item_desc": ""
      },
      {
        "item": "Maine Lobster Bites lemon garlic, beurre blanc, gruyere, bread crumbs",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Maine Lobster Bites lemon",
        "item_desc": "garlic, beurre blanc, gruyere, bread crumbs"
      },
      {
        "item": "Yellowfin Tuna Tartare crushed avocado crispy wontons, wasabi cream, ponzu, sesame seeds",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Yellowfin Tuna Tartare crushed avocado",
        "item_desc": "crispy wontons, wasabi cream, ponzu, sesame seeds"
      },
      {
        "item": "Rhode Island Crispy Calamari cherry peppers, roasted red pepper“marinara”",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Rhode Island",
        "item_desc": "Crispy Calamari cherry peppers, roasted red pepper“marinara”"
      },
      {
        "item": "Roots Crispy Shrimp Scampi garlic, butter, white wine",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots",
        "item_desc": "Crispy Shrimp Scampi garlic, butter, white wine"
      },
      {
        "item": "Crispy Wagyu Dumplings honey sambal, mustard sauce",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Crispy Wagyu Dumplings honey sambal, mustard sauce",
        "item_desc": ""
      },
      {
        "item": "Spicy Fall Off The Bone Ribs baby back pork ribs",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spicy Fall Off The Bone Ribs baby back pork ribs",
        "item_desc": ""
      },
      {
        "item": "Colossal Lump Crab Cake lemon, tartar sauce",
        "price": "25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Colossal Lump Crab Cake lemon, tartar sauce",
        "item_desc": ""
      },
      {
        "item": "Applewood Smoked Slab Bacon maple glaze",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Applewood Smoked Slab Bacon maple glaze",
        "item_desc": ""
      },
      {
        "item": "Chilled Jumbo Shrimp cocktail sauce",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chilled Jumbo Shrimp cocktail sauce",
        "item_desc": ""
      },
      {
        "item": "Snow Crab Claws mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snow Crab Claws mustard and cocktail sauces",
        "item_desc": ""
      },
      {
        "item": "Local East Coast Oysters half shell, by the half dozen",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Local East Coast Oysters half shell, by the half dozen",
        "item_desc": ""
      },
      {
        "item": "Lobster Cocktail whole 1 1/4 lobster chilled, cocktail sauce",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Cocktail whole 1 1/4 lobster chilled, cocktail sauce",
        "item_desc": ""
      },
      {
        "item": "1/4 lb Colossal Lump Crab Cocktail sliced avocado, mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "1/4 lb Colossal Lump Crab Cocktail sliced avocado, mustard and cocktail sauces",
        "item_desc": ""
      },
      {
        "item": "Chilled Seafood Platter (2/4/6/8)Current MP lobster, oysters, shrimp cocktail, tuna tartare, snow crab claws",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chilled Seafood Platter (2/4/6/8)Current MP lobster, oysters, shrimp cocktail, tuna tartare, snow crab claws",
        "item_desc": ""
      },
      {
        "item": "Caesar Salad garlic croutons, grana padano",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Caesar Salad",
        "item_desc": "garlic croutons, grana padano"
      },
      {
        "item": "Wedge of Iceberg Lettuce tomato crispy red onions, bacon, blue cheese",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Wedge of Iceberg Lettuce tomato",
        "item_desc": "crispy red onions, bacon, blue cheese"
      },
      {
        "item": "Arugula Salad spicy candied walnuts, crumbled blue cheese, shaved apple, cider vinaigrette",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Arugula Salad",
        "item_desc": "spicy candied walnuts, crumbled blue cheese, shaved apple, cider vinaigrette"
      },
      {
        "item": "Chopped Salad romaine, iceberg, tomato, corn, broccoli, carrot, feta, cucumber, asparagus, black peppercorn dressing",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Chopped Salad romaine, iceberg, tomato, corn, broccoli, carrot, feta, cucumber, asparagus, black peppercorn dressing",
        "item_desc": ""
      },
      {
        "item": "Heirloom Tomato Salad heirloom tomato creamy italian vinaigrette, blue cheese, red onion, garlic croutons, basil",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Heirloom Tomato Salad heirloom tomato",
        "item_desc": "creamy italian vinaigrette, blue cheese, red onion, garlic croutons, basil"
      },
      {
        "item": "12 oz Petite Prime NY Strip Steak",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "12 oz Petite Prime NY Strip Steak",
        "item_desc": ""
      },
      {
        "item": "16 oz. Prime NY Strip Steak",
        "price": "54.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "16 oz. Prime NY Strip Steak",
        "item_desc": ""
      },
      {
        "item": "8 oz Petit Filet Mignon",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "8 oz Petit Filet Mignon",
        "item_desc": ""
      },
      {
        "item": "12 oz Filet Mignon",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "12 oz Filet Mignon",
        "item_desc": ""
      },
      {
        "item": "20 oz Dry Aged Cowboy Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "20 oz Dry Aged Cowboy Steak",
        "item_desc": ""
      },
      {
        "item": "16 oz. Prime Ribeye Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "16 oz. Prime Ribeye Steak",
        "item_desc": ""
      },
      {
        "item": "42 oz Prime Porterhouse Steak for Two(MP)",
        "price": "(MP)",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "42 oz Prime Porterhouse Steak for Two(MP)",
        "item_desc": ""
      },
      {
        "item": "Snake River Farms American Wagyu 12 oz NY Strip Steak",
        "price": "79.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snake River Farms",
        "item_desc": "American Wagyu 12 oz NY Strip Steak"
      },
      {
        "item": "Snake River Farms American Wagyu 12 oz. Ribeye",
        "price": "84.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snake River Farms",
        "item_desc": "American Wagyu 12 oz. Ribeye"
      },
      {
        "item": "Snake River Farms American Wagyu 8 oz. Petite Filet Mignon",
        "price": "74.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snake River Farms",
        "item_desc": "American Wagyu 8 oz. Petite Filet Mignon"
      },
      {
        "item": "Beef Wellington filet mignon, mushroom, asparagus, Hollandaise sauce (limited availability)",
        "price": "52.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Beef Wellington filet mignon, mushroom, asparagus, Hollandaise sauce (limited availability)",
        "item_desc": ""
      },
      {
        "item": "Roots Tailors Plate A surf & turf of petite cut filet mignon (6 oz) & two jumbo shrimp with a scampi butter sauce",
        "price": "47.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots Tailors Plate A surf & turf of petite cut filet mignon (6 oz) & two jumbo shrimp",
        "item_desc": "with a scampi butter sauce"
      },
      {
        "item": "Roots Chicken Parm red pepper marinara, parmesan creamy burrata",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots Chicken Parm red pepper marinara, parmesan",
        "item_desc": "creamy burrata"
      },
      {
        "item": "9 oz. South African Lobster Tail Served Broiled or Steamed",
        "price": "(Current MP)",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "9 oz. South African Lobster Tail",
        "item_desc": "Served Broiled or Steamed"
      },
      {
        "item": "East Coast Halibut herb-crusted, dill, capers, beurre blanc",
        "price": "40.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "East Coast Halibut herb-crusted, dill, capers, beurre blanc",
        "item_desc": ""
      },
      {
        "item": "Pan Seared Sea Scallops creamy mushroom risotto, crispy maitake mushrooms",
        "price": "38.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Pan Seared Sea Scallops",
        "item_desc": "creamy mushroom risotto, crispy maitake mushrooms"
      },
      {
        "item": "Horseradish Crusted Faroe Island Salmon horseradish cream sauce and asparagus",
        "price": "35.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Horseradish Crusted Faroe Island Salmon horseradish cream sauce and asparagus",
        "item_desc": ""
      },
      {
        "item": "True Dover Sole pan seared fillet served in a Meuniere sauce (Limited Availability Thursday-Saturday)Considered a delicacy, this fish is shipped directly from the Strait of Dover to ensure the mild and sweet flavor profile",
        "price": "64.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "True Dover Sole pan seared fillet",
        "item_desc": "served in a Meuniere sauce (Limited Availability Thursday-Saturday)Considered a delicacy, this fish is shipped directly from the Strait of Dover to ensure the mild and sweet flavor profile"
      },
      {
        "item": "Blue cheese hat",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Blue cheese hat",
        "item_desc": ""
      },
      {
        "item": "Lobster & Cherry peppers",
        "price": "28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster & Cherry peppers",
        "item_desc": ""
      },
      {
        "item": "Jumbo Shrimp",
        "price": "6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jumbo Shrimp",
        "item_desc": ""
      },
      {
        "item": "Oscar Style colossal crab, asparagus, hollandaise",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Oscar Style colossal crab, asparagus, hollandaise",
        "item_desc": ""
      },
      {
        "item": "Roots Steak Sauce (Complimentary)",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots Steak Sauce (Complimentary)",
        "item_desc": ""
      },
      {
        "item": "Au Poivre, Béarnaise sauce, hollandaise, horseradish cream, truffle aioli, Roots cowboy butter",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Au Poivre, Béarnaise sauce, hollandaise, horseradish cream, truffle aioli, Roots cowboy butter",
        "item_desc": ""
      },
      {
        "item": "Our Famous Mac & Cheese",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Our Famous Mac & Cheese",
        "item_desc": ""
      },
      {
        "item": "Truffle Mac & Cheese",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Truffle Mac & Cheese",
        "item_desc": ""
      },
      {
        "item": "Lobster Mac & Cheese",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Mac & Cheese",
        "item_desc": ""
      },
      {
        "item": "Pomme Frites",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pomme Frites",
        "item_desc": ""
      },
      {
        "item": "Truffle Pommes Frites",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Truffle Pommes Frites",
        "item_desc": ""
      },
      {
        "item": "Classic Whipped Potatoes",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Classic Whipped Potatoes",
        "item_desc": ""
      },
      {
        "item": "Roasted Asparagus lemon aioli, parmesan, bread crumbs",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roasted Asparagus lemon aioli, parmesan, bread crumbs",
        "item_desc": ""
      },
      {
        "item": "Brussels Sprouts honey sambal, bacon & scallions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brussels Sprouts honey sambal, bacon & scallions",
        "item_desc": ""
      },
      {
        "item": "Onion Rings",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Onion Rings",
        "item_desc": ""
      },
      {
        "item": "Colossal Loaded Baked Potato",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Colossal Loaded Baked Potato",
        "item_desc": ""
      },
      {
        "item": "Creamed Spinach",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Creamed Spinach",
        "item_desc": ""
      },
      {
        "item": "Roasted Wild Mushrooms Shiitake, Oyster, White Mushrooms, Herb Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roasted Wild Mushrooms Shiitake, Oyster, White Mushrooms, Herb Oil",
        "item_desc": ""
      },
      {
        "item": "Broccoli Garlic & Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Broccoli",
        "item_desc": "Garlic & Oil"
      },
      {
        "item": "Potatoes Au Gratin",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Potatoes Au Gratin",
        "item_desc": ""
      },
      {
        "item": "Creamed Corn pearl onions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Creamed Corn pearl onions",
        "item_desc": ""
      },
      {
        "item": "French Onion Soup gruyère, croutons",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French Onion Soup gruyère, croutons",
        "item_desc": ""
      },
      {
        "item": "Lobster Bisque asparagus, lobster, chives",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Bisque asparagus, lobster, chives",
        "item_desc": ""
      },
      {
        "item": "Kobe Sliders cheddar, caramelized onions",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kobe Sliders cheddar, caramelized onions",
        "item_desc": ""
      },
      {
        "item": "NJ Burrata heirloom tomato, grilled ciabatta, balsamic, basil pesto",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "NJ Burrata heirloom tomato, grilled ciabatta, balsamic, basil pesto",
        "item_desc": ""
      },
      {
        "item": "Maine Lobster Bites lemon garlic, beurre blanc, gruyere, bread crumbs",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Maine Lobster Bites lemon",
        "item_desc": "garlic, beurre blanc, gruyere, bread crumbs"
      },
      {
        "item": "Hamachi Crudo citrus-coriander vinaigrette, fried lemon, fennel, watermelon radish",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hamachi Crudo citrus-coriander vinaigrette, fried lemon, fennel, watermelon radish",
        "item_desc": ""
      },
      {
        "item": "Yellowfin Tuna Tartare crushed avocado crispy wontons, wasabi cream, ponzu, sesame seeds",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Yellowfin Tuna Tartare crushed avocado",
        "item_desc": "crispy wontons, wasabi cream, ponzu, sesame seeds"
      },
      {
        "item": "Rhode Island Crispy Calamari cherry peppers, roasted red pepper“marinara”",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Rhode Island",
        "item_desc": "Crispy Calamari cherry peppers, roasted red pepper“marinara”"
      },
      {
        "item": "Roots Crispy Shrimp Scampi garlic, butter, white wine",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots",
        "item_desc": "Crispy Shrimp Scampi garlic, butter, white wine"
      },
      {
        "item": "Crispy Wagyu Dumplings honey sambal, mustard sauce",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Crispy Wagyu Dumplings honey sambal, mustard sauce",
        "item_desc": ""
      },
      {
        "item": "Spicy Fall Off The Bone Ribs baby back pork ribs",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spicy Fall Off The Bone Ribs baby back pork ribs",
        "item_desc": ""
      },
      {
        "item": "Colossal Lump Crab Cake lemon, tartar sauce",
        "price": "25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Colossal Lump Crab Cake lemon, tartar sauce",
        "item_desc": ""
      },
      {
        "item": "Applewood Smoked Slab Bacon maple glaze",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Applewood Smoked Slab Bacon maple glaze",
        "item_desc": ""
      },
      {
        "item": "Chilled Jumbo Shrimp cocktail sauce",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chilled Jumbo Shrimp cocktail sauce",
        "item_desc": ""
      },
      {
        "item": "Snow Crab Claws mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snow Crab Claws mustard and cocktail sauces",
        "item_desc": ""
      },
      {
        "item": "Local East Coast Oysters half shell, by the half dozen",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Local East Coast Oysters half shell, by the half dozen",
        "item_desc": ""
      },
      {
        "item": "Lobster Cocktail whole 1 1/4 lobster chilled, cocktail sauce",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Cocktail whole 1 1/4 lobster chilled, cocktail sauce",
        "item_desc": ""
      },
      {
        "item": "1/4 lb Colossal Lump Crab Cocktail sliced avocado, mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "1/4 lb Colossal Lump Crab Cocktail sliced avocado, mustard and cocktail sauces",
        "item_desc": ""
      },
      {
        "item": "Chilled Seafood Platter (2/4/6/8)Current MP lobster, oysters, shrimp cocktail, tuna tartare, snow crab claws",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chilled Seafood Platter (2/4/6/8)Current MP lobster, oysters, shrimp cocktail, tuna tartare, snow crab claws",
        "item_desc": ""
      },
      {
        "item": "Caesar Salad garlic croutons, grana padano",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Caesar Salad",
        "item_desc": "garlic croutons, grana padano"
      },
      {
        "item": "Wedge of Iceberg Lettuce tomato crispy red onions, bacon, blue cheese",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Wedge of Iceberg Lettuce tomato",
        "item_desc": "crispy red onions, bacon, blue cheese"
      },
      {
        "item": "Arugula Salad spicy candied walnuts, crumbled blue cheese, shaved apple, cider vinaigrette",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Arugula Salad",
        "item_desc": "spicy candied walnuts, crumbled blue cheese, shaved apple, cider vinaigrette"
      },
      {
        "item": "Chopped Salad romaine, iceberg, tomato, corn, broccoli, carrot, feta, cucumber, asparagus, black peppercorn dressing",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Chopped Salad romaine, iceberg, tomato, corn, broccoli, carrot, feta, cucumber, asparagus, black peppercorn dressing",
        "item_desc": ""
      },
      {
        "item": "Heirloom Tomato Salad heirloom tomato creamy italian vinaigrette, blue cheese, red onion, garlic croutons, basil",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Heirloom Tomato Salad heirloom tomato",
        "item_desc": "creamy italian vinaigrette, blue cheese, red onion, garlic croutons, basil"
      },
      {
        "item": "12 oz Petite Prime NY Strip Steak",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "12 oz Petite Prime NY Strip Steak",
        "item_desc": ""
      },
      {
        "item": "16 oz. Prime NY Strip Steak",
        "price": "54.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "16 oz. Prime NY Strip Steak",
        "item_desc": ""
      },
      {
        "item": "8 oz Petit Filet Mignon",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "8 oz Petit Filet Mignon",
        "item_desc": ""
      },
      {
        "item": "12 oz Filet Mignon",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "12 oz Filet Mignon",
        "item_desc": ""
      },
      {
        "item": "20 oz Dry Aged Cowboy Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "20 oz Dry Aged Cowboy Steak",
        "item_desc": ""
      },
      {
        "item": "16 oz. Prime Ribeye Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "16 oz. Prime Ribeye Steak",
        "item_desc": ""
      },
      {
        "item": "42 oz Prime Porterhouse Steak for Two",
        "price": "(MP)",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "42 oz Prime Porterhouse Steak for Two",
        "item_desc": ""
      },
      {
        "item": "Snake River Farms American Wagyu 12 oz. NY Strip Steak",
        "price": "79.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snake River Farms",
        "item_desc": "American Wagyu 12 oz. NY Strip Steak"
      },
      {
        "item": "Snake River Farms American Wagyu 12 oz. Ribeye",
        "price": "84.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snake River Farms",
        "item_desc": "American Wagyu 12 oz. Ribeye"
      },
      {
        "item": "Snake River Farms Petite Filet Mignon 8 oz. Petite Filet Mignon",
        "price": "74.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snake River Farms",
        "item_desc": "Petite Filet Mignon 8 oz. Petite Filet Mignon"
      },
      {
        "item": "Beef Wellington filet mignon, mushroom, asparagus, Hollandaise sauce (limited availability)",
        "price": "52.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Beef Wellington filet mignon, mushroom, asparagus, Hollandaise sauce (limited availability)",
        "item_desc": ""
      },
      {
        "item": "Roots Tailors Plate A surf & turf of petite cut filet mignon (6 oz) & two jumbo shrimp with a scampi butter sauce",
        "price": "47.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots Tailors Plate A surf & turf of petite cut filet mignon (6 oz) & two jumbo shrimp",
        "item_desc": "with a scampi butter sauce"
      },
      {
        "item": "Roots Chicken Parm red pepper marinara, parmesan creamy burrata",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots Chicken Parm red pepper marinara, parmesan",
        "item_desc": "creamy burrata"
      },
      {
        "item": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces, truffle aioli, blue cheese crust, or Roots Cowboy Butter",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces, truffle aioli, blue cheese crust, or Roots Cowboy Butter",
        "item_desc": ""
      },
      {
        "item": "9 oz. South African Lobster Tail Served Broiled or Steamed",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "9 oz. South African Lobster Tail",
        "item_desc": "Served Broiled or Steamed"
      },
      {
        "item": "East Coast Halibut herb-crusted, dill, capers, beurre blanc",
        "price": "40.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "East Coast Halibut herb-crusted, dill, capers, beurre blanc",
        "item_desc": ""
      },
      {
        "item": "Horseradish-Crusted Faroe Island Salmon horseradish cream sauce and asparagus",
        "price": "35.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Horseradish-Crusted Faroe Island Salmon horseradish cream sauce and asparagus",
        "item_desc": ""
      },
      {
        "item": "True Dover Sole Pan seared fillet served in a Meunière sauce (limited availability Thursday-Saturday) Considered a delicacy this fish is shipped directly from the strait of Dover to ensure the mild and sweet flavor profile",
        "price": "64.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "True Dover Sole Pan seared fillet",
        "item_desc": "served in a Meunière sauce (limited availability Thursday-Saturday) Considered a delicacy this fish is shipped directly from the strait of Dover to ensure the mild and sweet flavor profile"
      },
      {
        "item": "Pan Seared Sea Scallops creamy mushroom risotto, crispy maitake mushrooms",
        "price": "38.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Pan Seared Sea Scallops",
        "item_desc": "creamy mushroom risotto, crispy maitake mushrooms"
      },
      {
        "item": "Blue cheese hat",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Blue cheese hat",
        "item_desc": ""
      },
      {
        "item": "Lobster & Cherry peppers",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster & Cherry peppers",
        "item_desc": ""
      },
      {
        "item": "Jumbo Shrimp",
        "price": "6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Jumbo Shrimp",
        "item_desc": ""
      },
      {
        "item": "Oscar Style colossal crab, asparagus, hollandaise",
        "price": "22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Oscar Style colossal crab, asparagus, hollandaise",
        "item_desc": ""
      },
      {
        "item": "Roots Steak Sauce (Complimentary)",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots Steak Sauce (Complimentary)",
        "item_desc": ""
      },
      {
        "item": "Au Poivre",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Au Poivre",
        "item_desc": ""
      },
      {
        "item": "Béarnaise",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Béarnaise",
        "item_desc": ""
      },
      {
        "item": "Hollandaise",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hollandaise",
        "item_desc": ""
      },
      {
        "item": "Horseradish Cream",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Horseradish Cream",
        "item_desc": ""
      },
      {
        "item": "Our Famous Mac & Cheese",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Our Famous Mac & Cheese",
        "item_desc": ""
      },
      {
        "item": "Truffle Macaroni & Cheese",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Truffle Macaroni & Cheese",
        "item_desc": ""
      },
      {
        "item": "Lobster Macaroni & Cheese",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Macaroni & Cheese",
        "item_desc": ""
      },
      {
        "item": "Onion Rings",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Onion Rings",
        "item_desc": ""
      },
      {
        "item": "Pomme Frites",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pomme Frites",
        "item_desc": ""
      },
      {
        "item": "Truffle Pommes Frites",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Truffle Pommes Frites",
        "item_desc": ""
      },
      {
        "item": "Potatoes Au Gratin",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Potatoes Au Gratin",
        "item_desc": ""
      },
      {
        "item": "Loaded Colossal Baked Potato",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Loaded Colossal Baked Potato",
        "item_desc": ""
      },
      {
        "item": "Classic Whipped Potatoes",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Classic Whipped Potatoes",
        "item_desc": ""
      },
      {
        "item": "Creamed Corn sweet corn puree, roasted corn, pearl onions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Creamed Corn",
        "item_desc": "sweet corn puree, roasted corn, pearl onions"
      },
      {
        "item": "Brussels Sprouts Honey Sambal, Bacon & Scallions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brussels Sprouts Honey Sambal, Bacon & Scallions",
        "item_desc": ""
      },
      {
        "item": "Roasted Asparagus Lemon Aioli, Parmesan",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roasted Asparagus Lemon Aioli, Parmesan",
        "item_desc": ""
      },
      {
        "item": "Broccoli Garlic & Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Broccoli",
        "item_desc": "Garlic & Oil"
      },
      {
        "item": "Roasted Wild Mushrooms Shiitake, Oyster, White Button, Herb Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roasted Wild Mushrooms Shiitake, Oyster, White Button, Herb Oil",
        "item_desc": ""
      },
      {
        "item": "Creamed Spinach",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Creamed Spinach",
        "item_desc": ""
      },
      {
        "item": "French Onion Soup gruyère, croutons",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "French Onion Soup gruyère, croutons",
        "item_desc": ""
      },
      {
        "item": "New England Clam Chowder bacon crumbles, brioche croutons, parsley",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "New England Clam Chowder bacon crumbles, brioche croutons, parsley",
        "item_desc": ""
      },
      {
        "item": "NJ Burrata heirloom tomato, grilled ciabatta, balsamic, basil pesto",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "NJ Burrata heirloom tomato, grilled ciabatta, balsamic, basil pesto",
        "item_desc": ""
      },
      {
        "item": "Kobe Sliders cheddar, caramelized onions",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Kobe Sliders cheddar, caramelized onions",
        "item_desc": ""
      },
      {
        "item": "Cheesesteak Sliders shaved filet mignon, sauteed onions & peppers, three cheeses",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cheesesteak Sliders shaved filet mignon, sauteed onions & peppers, three cheeses",
        "item_desc": ""
      },
      {
        "item": "Maine Lobster Bites lemon garlic, beurre blanc, gruyere, bread crumbs",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Maine Lobster Bites lemon",
        "item_desc": "garlic, beurre blanc, gruyere, bread crumbs"
      },
      {
        "item": "Yellowfin Tuna Tartare avocado crispy wontons, wasabi cream, ponzu, sesame seeds",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Yellowfin Tuna Tartare avocado",
        "item_desc": "crispy wontons, wasabi cream, ponzu, sesame seeds"
      },
      {
        "item": "Rhode Island Crispy Calamari cherry peppers & roasted red pepper “marinara”",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Rhode Island",
        "item_desc": "Crispy Calamari cherry peppers & roasted red pepper “marinara”"
      },
      {
        "item": "Roots Crispy Shrimp Scampi garlic, butter, white wine",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots",
        "item_desc": "Crispy Shrimp Scampi garlic, butter, white wine"
      },
      {
        "item": "Crispy Wagyu Dumplings honey sambal & mustard sauces",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Crispy Wagyu Dumplings honey sambal & mustard sauces",
        "item_desc": ""
      },
      {
        "item": "Spicy Fall Off The Bone Ribs baby back pork ribs",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Spicy Fall Off The Bone Ribs baby back pork ribs",
        "item_desc": ""
      },
      {
        "item": "Colossal Lump Crab Cake lemon & tartar sauce",
        "price": "25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Colossal Lump Crab Cake lemon & tartar sauce",
        "item_desc": ""
      },
      {
        "item": "Applewood Smoked Slab Bacon maple glaze",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Applewood Smoked Slab Bacon maple glaze",
        "item_desc": ""
      },
      {
        "item": "Chilled Jumbo Shrimp cocktail sauce",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chilled Jumbo Shrimp cocktail sauce",
        "item_desc": ""
      },
      {
        "item": "Snow Crab Claws mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snow Crab Claws mustard and cocktail sauces",
        "item_desc": ""
      },
      {
        "item": "Local East Coast Oysters half shell, by the half dozen",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Local East Coast Oysters half shell, by the half dozen",
        "item_desc": ""
      },
      {
        "item": "Lobster Cocktail whole 1 1/4 lobster chilled, cocktail sauce",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Cocktail whole 1 1/4 lobster chilled, cocktail sauce",
        "item_desc": ""
      },
      {
        "item": "1/4 lb Colossal Lump Crab Cocktail sliced avocado, mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "1/4 lb Colossal Lump Crab Cocktail sliced avocado, mustard and cocktail sauces",
        "item_desc": ""
      },
      {
        "item": "Chilled Seafood Platter (2/4/6/8)Current MP lobster, oysters, shrimp cocktail, tuna tartare, snow crab claws",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Chilled Seafood Platter (2/4/6/8)Current MP lobster, oysters, shrimp cocktail, tuna tartare, snow crab claws",
        "item_desc": ""
      },
      {
        "item": "Caesar Salad garlic croutons & grana padano",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Caesar Salad",
        "item_desc": "garlic croutons & grana padano"
      },
      {
        "item": "Warm Shrimp Salad truffle miso, spring mushrooms, avocado, tomato, champagne vinaigrette",
        "price": "27.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Warm Shrimp Salad truffle miso, spring mushrooms, avocado, tomato, champagne vinaigrette",
        "item_desc": ""
      },
      {
        "item": "Wedge of Iceberg Lettuce tomato crispy red onions, bacon, blue cheese",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Wedge of Iceberg Lettuce tomato",
        "item_desc": "crispy red onions, bacon, blue cheese"
      },
      {
        "item": "Arugula Salad spicy candied walnuts, crumbled blue cheese, shaved apple, cider vinaigrette",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Arugula Salad",
        "item_desc": "spicy candied walnuts, crumbled blue cheese, shaved apple, cider vinaigrette"
      },
      {
        "item": "Chopped Salad romaine, iceberg, tomato, corn, broccoli, carrot, feta, cucumber, asparagus, black peppercorn dressing",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Chopped Salad romaine, iceberg, tomato, corn, broccoli, carrot, feta, cucumber, asparagus, black peppercorn dressing",
        "item_desc": ""
      },
      {
        "item": "Heirloom Tomato Salad heirloom tomato creamy Italian vinaigrette, blue cheese, red onion, garlic croutons, basil",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Heirloom Tomato Salad heirloom tomato",
        "item_desc": "creamy Italian vinaigrette, blue cheese, red onion, garlic croutons, basil"
      },
      {
        "item": "Lobster Salad mixed greens, avocado, bacon, tomato, grana padano, lemon herb dressing",
        "price": "34.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Salad mixed greens, avocado, bacon, tomato, grana padano, lemon herb dressing",
        "item_desc": ""
      },
      {
        "item": "Katsu Salad mango, cherry tomatoes, red peppers, carrots, Napa cabbage, arugula, asian cilantro dressing, peanuts, jalapeno (choice of chicken or cauliflower milanese)",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Katsu Salad mango, cherry tomatoes, red peppers, carrots, Napa cabbage, arugula, asian cilantro dressing, peanuts, jalapeno (choice of chicken or cauliflower milanese)",
        "item_desc": ""
      },
      {
        "item": "12 oz Petite Prime NY Strip Steak",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "12 oz Petite Prime NY Strip Steak",
        "item_desc": ""
      },
      {
        "item": "16 oz. Prime NY Strip Steak",
        "price": "54.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "16 oz. Prime NY Strip Steak",
        "item_desc": ""
      },
      {
        "item": "8 oz Petit Filet Mignon",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "8 oz Petit Filet Mignon",
        "item_desc": ""
      },
      {
        "item": "12 oz Filet Mignon",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "12 oz Filet Mignon",
        "item_desc": ""
      },
      {
        "item": "20 oz Dry Aged Cowboy Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "20 oz Dry Aged Cowboy Steak",
        "item_desc": ""
      },
      {
        "item": "16 oz Prime Ribeye Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "16 oz Prime Ribeye Steak",
        "item_desc": ""
      },
      {
        "item": "42 oz Prime Porterhouse Steak for Two",
        "price": "(MP)",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "42 oz Prime Porterhouse Steak for Two",
        "item_desc": ""
      },
      {
        "item": "Snake River Farms American Wagyu 12 oz. NY Strip Steak",
        "price": "79.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snake River Farms",
        "item_desc": "American Wagyu 12 oz. NY Strip Steak"
      },
      {
        "item": "Snake River Farms American Wagyu 12 oz. Ribeye",
        "price": "84.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snake River Farms",
        "item_desc": "American Wagyu 12 oz. Ribeye"
      },
      {
        "item": "Snake River Farms American Wagyu 8 oz. Petite Filet Mignon",
        "price": "74.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Snake River Farms",
        "item_desc": "American Wagyu 8 oz. Petite Filet Mignon"
      },
      {
        "item": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces, Truffle aioli, blue cheese crust or Roots Cowboy Butter",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces, Truffle aioli, blue cheese crust or Roots Cowboy Butter",
        "item_desc": ""
      },
      {
        "item": "Roots Tailors Plate a surf & turf petite 6 oz filet, two jumbo shrimp with a scampi butter sauce",
        "price": "47.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots Tailors Plate a surf & turf petite 6 oz filet, two jumbo shrimp",
        "item_desc": "with a scampi butter sauce"
      },
      {
        "item": "Beef Wellington (limited availability) filet mignon, mushroom, asparagus, hollandaise sauce",
        "price": "52.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Beef Wellington (limited availability) filet mignon, mushroom, asparagus, hollandaise sauce",
        "item_desc": ""
      },
      {
        "item": "Roots Chicken Parm red pepper marinara, parmesan creamy burrata",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roots Chicken Parm red pepper marinara, parmesan",
        "item_desc": "creamy burrata"
      },
      {
        "item": "East Coast Halibut herb-crusted, dill, capers, beurre blanc",
        "price": "40.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "East Coast Halibut herb-crusted, dill, capers, beurre blanc",
        "item_desc": ""
      },
      {
        "item": "9 oz. South African Lobster Tail Served Broiled or Steamed",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "9 oz. South African Lobster Tail",
        "item_desc": "Served Broiled or Steamed"
      },
      {
        "item": "Horseradish-Crusted Faroe Island Salmon horseradish cream sauce and asparagus",
        "price": "35.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Horseradish-Crusted Faroe Island Salmon horseradish cream sauce and asparagus",
        "item_desc": ""
      },
      {
        "item": "True Dover Sole pan seared fillet, served in a Meuniere sauce considered a delicacy, this fish is shipped directly from the Strait of Dover to ensure the mild and sweet flavor profile",
        "price": "64.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "True Dover Sole pan seared fillet, served in a Meuniere sauce",
        "item_desc": "considered a delicacy, this fish is shipped directly from the Strait of Dover to ensure the mild and sweet flavor profile"
      },
      {
        "item": "Pan Seared Sea Scallops creamy mushroom risotto, crispy maitake mushrooms",
        "price": "38.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Pan Seared Sea Scallops",
        "item_desc": "creamy mushroom risotto, crispy maitake mushrooms"
      },
      {
        "item": "Grilled Yellowfin Tuna cooked rare, steakhouse fries, garden vegetable vinaigrette, basil",
        "price": "38.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Grilled Yellowfin Tuna",
        "item_desc": "cooked rare, steakhouse fries, garden vegetable vinaigrette, basil"
      },
      {
        "item": "Blue cheese hat",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Blue cheese hat",
        "item_desc": ""
      },
      {
        "item": "Lobster & Cherry peppers",
        "price": "28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster & Cherry peppers",
        "item_desc": ""
      },
      {
        "item": "Two Shrimp with beurre blanc",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Two Shrimp",
        "item_desc": "with beurre blanc"
      },
      {
        "item": "Oscar Style colossal crab, asparagus, hollandaise",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Oscar Style colossal crab, asparagus, hollandaise",
        "item_desc": ""
      },
      {
        "item": "Au Poivre",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Au Poivre",
        "item_desc": ""
      },
      {
        "item": "Béarnaise",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Béarnaise",
        "item_desc": ""
      },
      {
        "item": "Hollandaise",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Hollandaise",
        "item_desc": ""
      },
      {
        "item": "Horseradish Cream",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Horseradish Cream",
        "item_desc": ""
      },
      {
        "item": "Cowboy Butter",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Cowboy Butter",
        "item_desc": ""
      },
      {
        "item": "Our Famous Mac & Cheese",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Our Famous Mac & Cheese",
        "item_desc": ""
      },
      {
        "item": "Lobster Macaroni and Cheese",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Lobster Macaroni and Cheese",
        "item_desc": ""
      },
      {
        "item": "Pomme Frites",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Pomme Frites",
        "item_desc": ""
      },
      {
        "item": "Truffle Pommes Frites",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Truffle Pommes Frites",
        "item_desc": ""
      },
      {
        "item": "Potatoes Au Gratin",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Potatoes Au Gratin",
        "item_desc": ""
      },
      {
        "item": "Loaded Colossal Baked Potato",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Loaded Colossal Baked Potato",
        "item_desc": ""
      },
      {
        "item": "Classic Whipped Potatoes",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Classic Whipped Potatoes",
        "item_desc": ""
      },
      {
        "item": "Loaded Whipped Stuffed Potatoes",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Loaded Whipped",
        "item_desc": "Stuffed Potatoes"
      },
      {
        "item": "Onion Rings",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Onion Rings",
        "item_desc": ""
      },
      {
        "item": "Creamed Corn sweet corn puree, roasted corn, pearl onions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Creamed Corn",
        "item_desc": "sweet corn puree, roasted corn, pearl onions"
      },
      {
        "item": "Brussels Sprouts honey sambal, bacon, scallions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Brussels Sprouts honey sambal, bacon, scallions",
        "item_desc": ""
      },
      {
        "item": "Roasted Asparagus",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roasted Asparagus",
        "item_desc": ""
      },
      {
        "item": "Broccoli Garlic & Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Broccoli",
        "item_desc": "Garlic & Oil"
      },
      {
        "item": "Roasted Wild Mushrooms Shiitake, Oyster, White Button, Herb Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false,
        "item_name": "Roasted Wild Mushrooms Shiitake, Oyster, White Button, Herb Oil",
        "item_desc": ""
      },
      {
        "item": "Creamed Spinach",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Creamed Spinach",
        "item_desc": ""
      },
      {
        "item": "Sauteed Spinach & Garlic",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true,
        "item_name": "Sauteed Spinach & Garlic",
        "item_desc": "Garlic"
      }
    ]
  }
];
