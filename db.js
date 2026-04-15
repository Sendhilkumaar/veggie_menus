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
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cream of Vegetable Soup A recipe brimming with the freshness of vegetables and the delicate flavor of cream",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Sweet Corn Veg Soup Chinese Style creamy soup with sweet corn & diced vegetables",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cream of Tomato Soup Thick and hearty classic tomato soup spiced up with hints of butter & freshly fried croutons",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hot & Sour Veg Soup Chinese Style creamy soup with sweet corn & diced vegetables",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Veg Clear Soup Continental Style Veg broth with juliennes of crispy fresh vegetables",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Medhu Vadai Crispy deep fried South Indian lentil doughnut served with varieties of chutney & sambar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Sambar Vadai South Indian lentil doughnut soaked in sambar and garnished with chopped onions & cilantro",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Masala Vadai South Indian deep fried snack made with lentils, onions and traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Keerai Vadai South Indian deep fried snack made with chopped spinach, lentils, onions and traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Vaazhaipoo Vadai Chef’s Special deep fried South Indian snack made with chopped plantain flowers, lentils, onions and traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Onion Pakoda Deep fried juliennes of onion mixed with besan flour & Indian house spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mixed Veg Pakoda Deep fried juliennes of vegetables mixed with besan flour & Indian house spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Paneer Tikka Cubes of Paneer marinate with all the festive flavors cooked to perfection in traditional style Clay Oven",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Aloo Bonda( For Dinner only) Seasoned potato dumpling coated with besan flour and deep fried",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Kuzhi Paniyaram South Indian style seasoned rice & lentil batter balls blended with onion, green chillies shallow fried in cast pans",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bajji( Only for Dinner) South Indian street delicacy made with choice of above vegetables coated with besan flour blended with traditional spices & deep fried – served with chutneys",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Choice of 65's Classic South Indian appetizer with choice of above options marinated in traditional spice blend and deep fried to perfection",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Choice of Chilli Fries Indo-Chinese creation with choice of above options stir-fried with capsicum, onion and tantalizing Chinese sauces",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Choice of Pepper Fries Indo-Chinese creation with choice of above options stir-fried with pepper, capsicum, onion and tantalizing Chinese sauces",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bonda Deep fried dumpling made with lentil batter & peppercorns",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "French Fries Yummy deep fried potato fingers tossed with salt and pepper to taste",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Rasamalai Rich Bengali dessert made from spongy cottage cheese & sweetened milk",
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
        "is_vegetarian": false
      },
      {
        "item": "Pineapple Rava Kesari South Indian dessert made with semolina, pineapple & sugar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brown Sugar Kesari South Indian dessert made with semolina, pineapple & brown sugar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Payasam of the Day South Indian milk pudding flavored with cardamom, raisins & nuts",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kulfi Frozen Indian dessert made from thickened milk & nuts",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Idly Most popular South-Indian steamed rice & lentil cakes served with varieties of chutney, sambar & gun powder/milagaipodi",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Rava Idly( Weekends Only) Popular idli with a difference – made with semolina, nuts and traditional spices served with varieties of chutney, sambar & gun powder/milagaipodi",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Idiyappam( For Dinner only) Steamed rice flour string hoopers – a South Indian culinary speciality served with vegetable kurma & coconut milk",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cocktail Sambar Idly Mini idlies soaked in sambar & topped with ghee",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Ghee Pongal South Indian speciality made from rice & lentil cooked to perfection with peppercorns, nuts & house spices seasoned with ghee - served with varieties of chutney & sambar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Rava Kichadi A healthy breakfast option made with semolina and vegetables lightly tempered with spices cooked to perfection",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chapathi Kurma South Asian unleavened flat wheat bread served with vegetable kurma & raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Poori Masala Fluffy deep fried Indian bread served with seasoned potato masala",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Parotta Kurma South Indian layered flat bread served with vegetable kurma & raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Plain Dosai Classic South Indian thin crepe made of rice & lentil",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Onion Dosai Classic South Indian thin crepe made of rice & lentil topped with chopped onions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Podi Dosai Classic South Indian thin crepe made of rice & lentil topped with gun powder / milagaipodi",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Masala Dosai Classic South Indian thin crepe made of rice & lentil filled with seasoned potato masala",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Mysore Masala Dosai Classic South Indian thin crepe made of rice & lentil spread with spicy house chutney & filled with seasoned potato masala",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Paneer Masala Dosai Classic South Indian thin crepe made of rice & lentil filled with shredded cottage cheese and spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cheese Dosai Classic South Indian thin crepe made of rice & lentil filled with shredded mozzarella cheese",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Paper Roast Classic South Indian crispy thin shaped crepe made of rice & lentil",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Ghee Roast Classic South Indian crispy thin cone shaped crepe made of rice & lentil topped with ghee",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Kal Dosai Classic South Indian thick crepe made of rice & lentil",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Rava Dosai Popular Dosai with a difference – made with semolina",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Onion Rava Dosai Popular Dosai with a difference – made with semolina topped with chopped onions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Rava Masala Dosai Popular Dosai with a difference – made with semolina filled with seasoned potato masala",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Plain Uthappam South Indian soft pancake made of rice & lentil",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Onion Uthappam South Indian soft pancake made of rice & lentil topped with chopped onions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Small Onion Uthappam South Indian soft pancake made of rice & lentil topped with sliced shallots of small onions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Podi Uthappam South Indian soft pancake made of rice & lentil topped with gun powder / milagaipodi",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Masala Uthappam South Indian soft pancake made of rice & lentil topped with onions, tomatoes, green chillies, cilantro, curry leaves & gun powder / milagaipodi",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Idly Vadai 2 pcs Idli & Medhu Vadai served with varieties of chutney, sambar & gun powder/milagaipodi",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Pongal Vadai Ghee Pongal & Medhu Vadai served with varieties of chutney & sambar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Mini Tiffin Perfect way to begin the day – Idli, Medhu Vada, Ghee Pongal, Rava Kichudi & Mini Dosa served with chutney & sambar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "South Indian Rush Lunch Vegetable Biriyani, Rice of the day, Poriyal, Yogurt Rice, Chapati & Veg Kurma",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "South Indian Thali Steamed Rice, Sambar, Rasam, Kootu, Poriyal, Kaara Kozhambu, Chapati, Kurma, Yoghurt, Appalam, Pickle & Sweet",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Appam South Indian delight made with fermented rice batter & coconut milk – served with vegetable kurma & coconut milk",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Adai Aviyal( Only for Dinner) Spicy & flavourful variant of dosa served with an assortment of vegetables in yogurt and coconut gravy - A Kerala speciality",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chole Bhature( Only for Dinner) Big fluffy deep fried Indian bread served with Punjabi style spicy chick peas masala",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Veg Kothu Parotta South Indian street delicacy made with minced layered flat bread sautéed with vegetables, green chillies & house spices - served with vegetable kurma & raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chilli Parotta South Indian street delicacy made with diced layered flat bread sautéed with onions, bell peppers & chilli sauce - served with raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ceylon Parotta Sri Lankan style hand tossed folded soft flat bread - served with vegetable kurma & raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Set Dosai Vada Curry(Only for Dinner) South Indian soft yellow crepe made of rice, lentil & seasonings - served with Chettinad special tasty lentil curry",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Ennai Kathirikai Kuzhambu Tamarind based tangy curry cooked with marinated Egg-plant, onions & tomatoes",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Paruppu Urundai Tamarind based tangy curry cooked with lentil dumpling, onions & tomatoes",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Karuvepillai Poondu Kuzhambu Tamarind based tangy curry cooked with whole garlic, onions, curry leaves & tomatoes",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sundakkai Vathal Kuzhambu Tamarind based tangy curry cooked with dried turkey berries (Sundakaai Vathal), onions & tomatoes",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Paal Katti Pattani Kurma Mildly spiced South Indian style preparation with cottage cheese, green peas & house spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Kaai Kari Kurma Mixed vegetables cooked in coconut based curry with traditional South Indian spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Mushroom Chettinad Spicy Chettinad style preparation with mushroom, onions & traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Koon Curry Mushroom curry made in Kerala style coconut based preparation",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Dal Tadka Moong Dal boiled and cooked with onion, tomatoes and tempered with traditional Indian spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Dal Makhani Delicious creamy lentil preparation as made in the traditional Punjabi Dhabas",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Dal Palak Punjabi style nutritious spinach & lentil recipe cooked with traditional Indian spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chana Masala Popular Punjabi curry made with chickpeas onion, tomatoes and house spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Paneer Butter Masala Cottage cheese cubes cooked in a rich & creamy mildly spiced masala base",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Paneer Makhani Cottage cheese cubes simmered in a creamy tomato based Indian gravy",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Palak Paneer Chunks of soft cottage cheese simmered in a spiced spinach puree garnished with cream",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Kadai Paneer Cottage cheese cubes tossed with onions, tomatoes & bell peppers in a flavorful Indian masala base",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Malai Kofta Shallow fried shredded cottage cheese dumplings cooked in a rich smooth gravy",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Kadai Mushroom Mushroom tossed with onions, tomatoes & bell peppers in a flavorful Indian masala base",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Paneer Khurchan Strips of cottage cheese tossed with juliennes of onion, tomato and capsicum sautéed in onion sauce & Indian spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Paneer Mughlai Cottage cheese cubes cooked in creamy, fragrant and delicately spiced curry",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Methi Malai Matar Shredded cottage cheese, fenugreek leaves & green peas cooked with mild spices in a rich creamy gravy",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Kadai Vegetables Mixed vegetables tossed with onions, tomatoes & bell peppers in a flavourful Indian masala base",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Vegetable Jalfrezi Juliennes of mixed vegetables tossed with onion, tomato and capsicum in onion sauce & Indian spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Aloo Matar Cubes of fried potato & green peas sautéed in a flavorful Indian sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Khumb Masala Punjabi style preparation made with mushroom, onion, tomato & traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bhindi Masala Ladies finger pieces deep fried & sautéed with onions, tomatoes & Indian spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Navratan Korma Rich Mughal style mildly spiced curry made with mixed vegetables, fruits, nuts and traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Mili Juli Sabzi Creamy curry cooked to perfection with mixed vegetables, onions, tomatoes & traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Matar Mushroom Mushroom and green peas cooked with khoa & traditional spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Matar Paneer Cottage cheese and green peas cooked in a flavorful onion & tomato sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Parotta South Indian multi layered flat bread",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chapathi South Asian unleavened flat wheat bread",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Naan Traditional Punjabi bread baked in clay oven",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Butter Naan Traditional Punjabi bread baked in clay oven & brushed with butter",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Naan Traditional Punjabi bread baked in clay oven topped with chopped garlic & brushed with butter",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roti Traditional Punjabi wheat bread baked in clay oven",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lacha Parotta Multi Layered wheat bread baked in clay oven",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Onion Kulcha Traditional Punjabi bread stuffed with finely chopped Onion & baked in clay oven",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Aloo Kulcha Traditional Punjabi bread stuffed with seasoned potato & baked in clay oven",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Paneer Kulcha Traditional Punjabi bread stuffed with seasoned grated cottage cheese & baked in clay oven",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Kashmiri Naan Traditional Punjabi bread baked in clay oven topped with chopped dry fruits, nuts & brushed with butter",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Variety Rice Traditional South Indian lunch box rice recipes)",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vegetable Dum Biryani Classic South Indian preparation made of long grain basmati rice, mixed vegetables & traditional spices cooked under dum – served with veg kurma & raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Jeera Rice Long grain basmati rice cooked with cumin seeds, whole spices & ghee",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Choice of Pulao's Aromatic & flavourful recipe made from long grain basmati rice cooked with choice of above option& whole spices tempered in ghee",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Choice of Fried Rice Chinese classic preparation made from long grain basmati rice cooked with choice of above option garnished with scallions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Choice of Noodles Chinese classic preparation made from steamed noodles cooked with choice of above option garnished with scallions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Plantastik Vegetable Laba South Indian Street Delicacy made with thick layered bread coated with Plantastik. 100 % plant based protein(moong bean) to a delicate bundle of perfection - served with Vegetable kurma & raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Plantastik Veg Fried Rice Chinese classic preparation made from long grain basmati rice cooked with fresh vegetables and Plantastik 100% plant based protein(moong bean) garnished with scallions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Plantastik Dosai Classic South Indian thin crepe made of rice & lentil with a generous coat of Plantastik 100% plant based protein(moong bean) made to perfection",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Plantastik Veg Kothu Parotta South Indian street delicacy made with minced layered flat bread sauteed with vegetables, Plantastik 100% plant based protein (moong bean), green chillies & house spices - Served with Vegetable kurma & raitha",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Plantastik Schezwan Fried Rice Spicy Chinese classic preparation made from long grain basmati rice cooked with fresh vegetables and Plantastik 100% plant based protein (moong bean) garnished with scallions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Vegetable Cutlet Deep fried snack seasoned with mixed vegetables - served with chutney",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Vegetable Samosa Deep fried snack stuffed with seasoned potatoes, peas and traditional spices – served with 2 chutney’s",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bhel Puri Puffed rice mixed with sev, crisp puris, roasted peanuts, onions and spiced with traditional chutney’s",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chana Samosa Lip smacking chat recipe with samosas, chick pea masala, various chutneys and spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cutlet Chana Famous street food chat recipe with seasoned potato cutlet, chick pea masala, various chutneys and spices",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Madras Filter Coffee",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Masala Tea",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Green Tea",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Avocado Milkshake",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Soda",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Watermelon Juice",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Adhirasam",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
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
        "is_vegetarian": false
      },
      {
        "item": "Roasted Eggplant, Red Pepper & Tomato Soup (V) sourdough fig jam grilled cheese bite",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Artisan Cheeseboard (V) local honeycomb, golden raisins, pumpkin seed crackers",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Winter Hummus Board (V) heirloom carrot and dill, zaatar, warm pita pillow, feta cheese, garden vegetables",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Wedge Salad crispy fried shallots, cherry tomatoes, bacon, Fulper Farm Feta, pickled red onions, buttermilk blue",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Harvest Winter Salad (GF/V) young lettuces, port wine poached pears, candied walnuts, smoked moody blue cheese, radish, cucumber, rose vinaigrette",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Organic Kale Salad (GF/VGN) young kale, roasted acorn squash, sun dried tomatoes, pickled cauliflower, feta cheese, radish and carrot, pumpkin seed vinaigrette",
        "price": "14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Crispy Rhode Island Calamari house-made pickled vegetables, pickled jalapeño, arugula, basil aioli",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local Yellowfin Tuna Tartare avocado, deviled egg, sliced watermelon radish, filone crisps",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local Burrata (V) figs, aleppo pepper spiced honeynut squash, pomegranate seeds, arugula and basil oil, filone toast",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bang Bang Cauliflower (GF/V) sweet & sour chili glaze, fresno chiles, sesame seeds, scallions",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Marinated Beet Salad (GF/V) arugula, blood oranges, radish, gold and chioggia beets, truffle oil, goat yogurt, chives",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Margherita (V) fresh mozzarella, crushed tomatoes, basil",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Local Mushroom Flatbread (V) spinach, ricotta cheese, pecorino romano",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fig Flatbread fig jam, Speck, duck fat potatoes, fontina cheese, rosemary",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pepperoni Flatbread local artsanal pepperoni, local burrata, pickled jalapeño, baby arugula, basil",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Butternut Squash Ravioli (VGN) Chanterelle mushrooms, leeks, swiss chard, toasted walnuts, pomegranate seeds, vegan tree nut butter, basil",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Katsu Salad mango, cherry tomatoes, red peppers, carrots, Napa cabbage, arugula, Asian cilantro dressing, peanuts, jalapeno",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spinach Mushroom & 3 Cheese Quiche (V) leeks, salsa verde, arugula salad",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Jerk Shrimp Tacos (3 pcs) (GF) red cabbage, pickled red onion, avocado puree, chili salsa, cilantro",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hand Pressed Beef Burger Midwest 100% ground chuck, aged cheddar, house-made b&b pickles, aioli, lettuce (add bacon +2)",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Grain Bowl (V) sauteed kale, roasted cauliflower, cranberries, cashews, crispy fried brussels sprout leaves",
        "price": "28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Grilled Chicken Pita Pillow hummus, avocado, tomato, cucumber, arugula, lemon-oregano dressing, sweet potato chips",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spaghetti Squash & Chicken Ricotta Meatballs (GF) charred tomato sauce, swiss chard, hon shimeji mushrooms, basil, parmesan",
        "price": "28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crispy Chicken Sandwich gruyere, tomato, house-made b&b pickles, savoy cabbage ranch slaw, fries",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sourdough Grilled Cheese (V) fig jam, fontina and Comte cheese, red endive & roasted eggplant, red pepper & tomato soup",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spiced Faroe Island Salmon Salad (GF) young spinach, quinoa, lentils, cauliflower, pickled red onion, raisins, saffron emulsion",
        "price": "25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Stir Fried Pork & Soba Noodles roasted broccoli, Jimmy Nardello peppers, green onions, ginger, heirloom garlic, cilantro",
        "price": "28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Root Vegetables carrot caramel",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roasted Local Mushrooms (GF/VGN) black truffle oil",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Broccolini Caesar fresh lemon, parmesan crumbs, garlic chips",
        "price": "9.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Brussels Sprouts, Grapes and Shallots (VGN) caraway-mustard vinaigrette",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Fingerling Potatoes (GF/VGN) rosemary oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Hand-Cut Fries (VGN) sea salt",
        "price": "9.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hand Cut Truffle Fries (V) sea salt",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Avocado (GF/VGN) sea salt, olive oil",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roasted Eggplant, Red Pepper & Tomato Soup (V) sourdough fig jam grilled cheese bite",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "New England Clam Chowder garlic parmesan croutons & crispy bacon",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Harvest Fall Salad (GF/V) young lettuces, port wine poached pears, candied walnuts, smoked moody blue cheese, radish, cucumber, roise vinaigrette",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Organic Kale Salad (GF/V) young kale, roasted acorn squash, sun dried tomatoes, pickled cauliflower, feta cheese, radish and carrot, pumpkin seed vinaigrette",
        "price": "14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fall Hummus Board (V) heirloom carrot and dill, zaatar, warm pita pillow, feta cheese, garden vegetables",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Local Yellowfin Tuna Tartare avocado, deviled egg, sliced watermelon radish, filone crisps",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Artisan Cheeseboard (V) local honeycomb, golden raisins sunflower seed crackers",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bang Bang Cauliflower (GF/VGN) sweet & sour chili glaze, fresno chiles, sesame seeds, scallions",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Crispy Rhode Island Calamari house- made pickled vegetables, arugula, pickled jalapeño, basil aioli",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local Burrata (V) figs, Aleppo spiced honeynut squash, pomegranate seeds, arugula and basil oil, filone toast",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Marinated Beet Salad (GF/V) arugula, pistachios, blood oranges, radish, gold and chioggia beets, truffle oil, goat yogurt, chives",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Margherita (V) fresh mozzarella, crushed tomatoes, basil",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Local Mushroom Flatbread (V) spinach, Fulper Farms riccota cheese, local egg, pecorino romano, truffle oil",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fig Flatbread fig jam, Speck, duck fat potatoes, fontina cheese, rosemary",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pepperoni Flatbread local artisanal pepperoni, local burrata, pickled jalapeño, baby arugula, basil",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Organic Egg Frittata (GF/V) Fulper Farms Ricotta, spinach, perserved tomato, pickled red onion, arugula salad",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Jerk Shrimp Tacos (3 pcs) (GF) red cabbage, pickled red onion, avocado puree, chili salsa, cilantro",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crispy Chicken Sandwich house-made b&b pickles, honey-mustard slaw, pickled jalapeno",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hand Pressed Beef Burger Midwest 100% ground chuck, aged cheddar, house-made b&b pickles, lettuce, aioli (add bacon +2)",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Grain Bowl (V) sauteed kale, roasted cauliflower, cranberries, cashews, crispy fried brussels sprout leaves",
        "price": "28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Grilled Chicken Pita Pillow hummus, avocado, tomato, cucumber, arugula, lemon-oregano dressing, sweet potato chips",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spaghetti Squash & Chicken Ricotta Meatballs (GF) charred tomato sauce, swiss chard, hon shimeji mushrooms, basil, parmesan",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Butternut Squash Ravioli (VGN) Chanterelle mushrooms, leeks, swiss chard, toasted walnuts, pomegranate seeds, vegan tree nut butter, basil",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Katsu Salad mango, cherry tomatoes, red peppers, carrots, Napa cabbage, arugula, asian cilantro dressing, peanuts, jalapeno",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sourdough Grilled Cheese (V) fig jam, fontina and Comte cheese, red endive & roasted eggplant, red pepper. & tomato soup",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spiced Faroe Island Salmon Salad (GF) young spinach, quinoa, lentils, cauliflower, pickles red onion, raisins, saffron emulsion",
        "price": "25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Steak & Eggs Flat iron steak, organic eggs, acorn squash hash, crispy fingerling potatoes, salsa verde",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Stir-Fried Pork & Soba Noodles roasted broccoli, Jimmy Nardello peppers, green onions, ginger, heirloom garlic, cilantro",
        "price": "28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
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
        "is_vegetarian": false
      },
      {
        "item": "Cheese Pizza",
        "price": "Mini $15.99; Sm $17.99; Lg $19.99; Xl $21.99; Sic $27.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Hawaiian Pizza Ham and Pineapple",
        "price": "Sm $25.99; Lg $27.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meat Pizza Pepperoni, Sausage, Meatball, Ham",
        "price": "Sm $27.99; Lg $31.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "White Pizza No sauce, Mozzarella and Ricotta Cheese",
        "price": "Sm $22.99; Lg $26.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Veggie Pizza Green Peppers, Mushrooms, Tomatoes, and Onions",
        "price": "Sm $30.99; Lg $32.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Four Cheese Pizza Mozzarella, Ricotta, Feta, and Romano",
        "price": "Sm $27.99; Lg $31.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Patti Special Pizza Bacon, Garlic, Jalapeno, and Pepperoni",
        "price": "Sm $30.99; Lg $32.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "White Spinach Pizza No sauce, Mozzarella, Ricotta Cheese, and Spinach",
        "price": "Sm $27.99; Lg $31.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "BBQ Chicken Pizza",
        "price": "Sm $30.99; Lg $34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Buffalo Chicken Pizza",
        "price": "Sm $30.99; Lg $34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Parm Pizza",
        "price": "Sm $30.99; Lg $34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Chicken Parm Pizza",
        "price": "Sm $30.99; Lg $34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Margherita Pizza",
        "price": "Sm $27.99; Lg $31.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "House Special Pizza Pepperoni, Sausage, Meatball, Green Peppers, Mushrooms, Olives, and Onions",
        "price": "Mini $26.50; Sm $32.99; Lg $36.99; Xl $39.99; Sic $44.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Supreme Pizza Pepperoni, Sausage, Green Peppers, Mushrooms, and Onions",
        "price": "Mini $25.50; Sm $30.99; Lg $32.99; Xl $34.99; Sic $42.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Wings",
        "price": "10 . $17.99; 20 . $29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "4 Garlic Knots with Sauce",
        "price": "$9.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "8 Garlic Knots with Sauce",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 Garlic Knots with Sauce",
        "price": "$17.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Bread",
        "price": "8in. $7.99; 12in. $8.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Bread with Cheese",
        "price": "8in. $9.99; 12in. $10.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Meatball Appetizer",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sausage Appetizer",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Onion Rings",
        "price": "Sm. $8.99; Lg. $11.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Fries",
        "price": "Sm. $6.25; Lg. $9.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mozzarella Sticks",
        "price": "$12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jalapeno Poppers",
        "price": "$12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lasagna",
        "price": "$17.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ravioli",
        "price": "$16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Ziti",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Ziti with Meatballs or Sausage",
        "price": "$16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spaghetti with Marinara Sauce",
        "price": "$14.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spaghetti with Meatballs or Sausage",
        "price": "$15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Spaghetti",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Spaghetti with Meatballs or Sausage",
        "price": "$16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eggplant Parmigiana",
        "price": "$16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Eggplant Parmigiana with Spaghetti and Marinara sauce",
        "price": "$18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Parmigiana",
        "price": "$16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Parmigiana with Spaghetti and Marinara sauce",
        "price": "$18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meatball Parmigiana Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sausage Parmigiana Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eggplant Parmigiana Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Parmigiana Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken, Bacon, and Ranch Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sausage, Peppers, and Onions Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Philly Cheese Steak Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Philly Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Buffalo Chicken Hot Heroes",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Extra Cheese Hot Heroes",
        "price": "8 in. $2.50; 12 in. $2.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Submarine Deli Sandwiches. Ham, Salami, American Cheese, Lettuce, Sliced Tomatoes, Oregano, Salt & Pepper, Oil & Vinegar",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ham & Cheese Deli Sandwiches. Ham, American Cheese, Lettuce, Sliced Tomatoes, Pickles, Mayonnaise, and Mustard",
        "price": "8 in. $14.00; 12 in. $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Large Calzone with Ricotta and Mozzarella Cheese Calzone. Add regular toppings for $3.99 or premium toppings for $4.99",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Stromboli Stromboli. Add regular toppings for $3.99 or premium toppings for $4.99",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Greek Salad Lettuce, Tomatoes, Cucumbers, Peperoncinis, Greek Olives, Onions, and Feta Cheese. A scoop of potato salad may be added at $0.99",
        "price": "Sm. $12.50; Lg. $16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Tossed Salad Lettuce, Tomatoes, Cucumbers and Sliced Onions",
        "price": "Sm. $8.50; Lg. $11.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chef Salad Lettuce, Tomatoes, Mozzarella Cheese, Ham, Salami, Banana Peppers, and Olives",
        "price": "Sm. $14.50; Lg. $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Antipasto Salad Lettuce, Tomatoes, Mozzarella Cheese, Ham, Peperoncinis, Greek Olives, and Onions",
        "price": "Sm. $14.50; Lg. $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spinach Salad",
        "price": "Sm. $12.50; Lg. $16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Buffalo Chicken Salad",
        "price": "Lg. $17.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Potato Salad",
        "price": "Lg. $10.25/td>",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Extra salad dressing",
        "price": "Sm. $1.99; Lg. $2.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cannoli",
        "price": "1 . $7.25; 4 . $27.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brownie",
        "price": "$5.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brownoli Vanilla cannoli cream in the center of two chocolate chip brownies and dusted with powdered sugar",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Zeppoli add chocolate sauce for $1.99",
        "price": "$10.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cookie (dozen by request in advance)",
        "price": "$5.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Side Cannoli Cream",
        "price": "$1.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Side of Marinara Sauce Others",
        "price": "$2.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pint of Marinara Sauce Others",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
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
        "is_vegetarian": false
      },
      {
        "item": "Nacho Grande Beef, Cheese, Tomatoes, Black Olives, Onions add Jalapeños for .95",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Fries",
        "price": "Small- $4.25, Large- $5.45",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheese Fries",
        "price": "Small- $4.95, Large- $5.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Pizza Fries ​",
        "price": "$5.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet Potato Fries",
        "price": "Small- $4.75, Large- $5.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Onion Rings ​",
        "price": "$6.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mozzarella Sticks (6) ​",
        "price": "$8.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Bread",
        "price": "$6.25 | With Cheese $7.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Nachos With Cheese Or Salsa: With Cheese & Salsa",
        "price": "Small $4.75, Large $5.75 | Small- $5.75, Large- $6.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Or Meatballs ​",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wings",
        "price": "(12) $16.95, (24) $31.95, (36) $46.95, (50) $64.95, (75) $89.95, (100) $109.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Side of Sautéed Broccoli or Spinach ​",
        "price": "$9.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Side of Sautéed Broccoli Rabe ​ Fried Calamari ​ Soup ​",
        "price": "$12.95 | $11.95 | $6.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tossed Green Salad Lettuce, tomatoes, green peppers & onions",
        "price": "Small- $5.45, Large- $6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Antipasto Ham, capicola, provolone, salami & black olives",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chef Salad Ham, turkey, egg & provolone",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tuna Salad Tossed salad with a scoop of tuna",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caesar Salad",
        "price": "$8.95 | Romaine lettuce, oven toasted croutons mixed with classic Caesar dressing. Add Chicken for $4.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caprese Salad",
        "price": "Romaine lettuce w fresh mozzarella, sliced tomatoes & garn w roasted peppers. Balsamic dressing on side. Small- $9.25, Large- $12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Extra Dressing ​",
        "price": "$0.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Greek Salad ​ ​",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheese ​",
        "price": "10” Personal - $9.95, 14” Medium- $13.45, Large- 16” $16.95, 18” Jumbo- $18.95 | Sicilian- $21.95 | Deep Dish- $15.94",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gluten-free 12” (One Size Only)",
        "price": "$15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Veggie Broccoli, spinach, tomatoes, mushrooms & onions:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95, Sicilian- $32.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Works Pepperoni, sausage, mushrooms, green peppers, onions:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95, Sicilian- $32.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Ziti ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Parmigiana ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eggplant Parmigiana ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Buffalo Chicken",
        "price": "10” Personal- $15.95, 14” Medium- $21.95, 16” Large- $25.95, 18” Jumbo- $27.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cool Ranch Chicken Chicken, bacon, tomatoes & ranch dressing:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Special Sauce ​",
        "price": "10” Personal- $15.95, 14” Medium- $20.95, 16” Large- $24.95, 18” Jumbo- $27.95, Sicilian- $29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tomato Pie",
        "price": "10” Personal- $15.95, 14” Medium- $21.95, 16” Large- $17.95, 18” Jumbo- $20.95, Sicilian- $22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bruschetta Tomatoes, garlic & pesto sauce: ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Taco Pizza Ground beef, lettuce, tomatoes & cheddar:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Deep Dish",
        "price": "14” Medium- $14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vodka Sauce",
        "price": "10” Personal- $13.95, 14” Medium- $21.95, 16” Large- $24.95, 18” Jumbo- $26.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Penne Vodka Pizza",
        "price": "10” Personal- $16.95, 14” Medium- $21.95, 16” Large- $25.95, 18” Jumbo- $27.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Margarita Pizza",
        "price": "10” Personal- $13.45, 14” Medium- $15.95, 16” Large- $18.95, 18” Jumbo- $20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brooklyn Pizza Square 16”x16”, Extra Thin:",
        "price": "Sicilian- $22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meat Lover ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95, Sicilian- $32.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "BBQ Chicken ​",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95, Sicilian- $32.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Four Cheese Red or White:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Mexico Ground beef, jalapeños, onions & tomatoes",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Al’s Favorite Chicken, spinach & romano cheese:",
        "price": "10” Personal- $15.95, 14” Medium- $22.95, 16” Large- $26.95, 18” Jumbo- $28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Texas Bacon, onions & tomatoes ​ Pan Pizzas All pan pizzas take one hour.",
        "price": "10” Personal- $15.95, 14” Medium- $21.95, 16” Large- $25.95, 18” Jumbo- $27.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bacon, Ham & Mushroom ​",
        "price": "$25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Primavera",
        "price": "$25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Alfredo",
        "price": "$25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Veggie ​",
        "price": "$25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cheese Steak Special",
        "price": "$25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meat Lover ​",
        "price": "$25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Special Sauce Pan Pizzas ​",
        "price": "$22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spaghetti",
        "price": "with: Tomato Sauce- $13.95, Meatballs- $16.95, Sausage- $17.95, Garlic & Mushroom Red or White Sauce- $16.95, Meat Sauce- $16.95, Spaghetti Marinara (Sautéed garlic in red sauce)- $14.95, Clam Sauce (Red or white)- 17.95, Pesto Sauce (Nuts-Free) - $16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Penne Arrabiata Hot & spicy. Prosciutto & sautéed onions",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Marsala ​ ​",
        "price": "$21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Francese",
        "price": "$21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Ziti",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pasta Primavera Broccoli, tomatoes & mushrooms in a cream sauce.",
        "price": "$17.95 | Add Chicken for $3.00.",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fettuccine Alfredo",
        "price": "$16.95 | Add Chicken for $4.00.",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Stuffed Shells ​",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vodka Rigatoni",
        "price": "$16.95 | Add Chicken $4.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meat Or Cheese Tortellini Choice of sauce",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gnocchi Choice of alfredo, tomato or vodka sauce",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meat Sauce ​",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ravioli",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Ravioli ​",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lasagna ​",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Manicotti ​",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Ravioli With Pink Sauce ​",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Parmigiana ​ Calzones & Stromboli",
        "price": "with: Chicken $20.95, Eggplant $20.95, Veal $21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Calzone Ricotta, mozzarella & ham:",
        "price": "Small- $10.95, Large- $21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Stromboli Sausage, peppers, mushrooms, onions, pepperoni & mozzarella:",
        "price": "Small- $10.95, Large- $21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Extra Toppings",
        "price": "Small- .85, Large- $1.35",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Extra Sauce ​ Nutella Pizza ​ Hot Subs Subs are 12” long.",
        "price": "$0.50 | $11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eggplant Parmigiana",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Parmigiana ​",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Veal Parmigiana ​",
        "price": "$13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Veal Cutlet Lettuce & tomatoes",
        "price": "$13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pepper & Egg ​",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pepper & Egg with Cheese ​",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Sausage Sub Peppers & Onions .60, Parmigiana 1.00",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meatball",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meatball Parmigiana ​",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheese Steak Toppings Additional .60 ​",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pizza Steak ​",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Cheese Steak Toppings Additional .60",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sausage & Broccoli Rabe Add Cheese .60",
        "price": "$13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Ranch Sub Fried chicken with mozzarella, bacon, tomatoes & ranch dressing ​ Cold Subs All served with lettuce, tomato, onions, spices, oil & vinegar. Subs come in 7” Half and 14” Whole sizes.",
        "price": "$13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Italian Hoagie Ham, salami, prosciutto, capicola & provolone:",
        "price": "7” Half- $7.45, 14” Whole- $13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "American Ham, salami & provolone:",
        "price": "7” Half- $6.55, 14” Whole- $11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Turkey Hoagie",
        "price": "7” Half- $7.45, 14” Whole- $13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roast Beef",
        "price": "7” Half- $7.45, 14” Whole- $13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tuna",
        "price": "7” Half- $7.45, 14” Whole- $13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ham",
        "price": "7” Half- $7.45, 14” Whole- $13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ham & Cheese",
        "price": "7” Half- $7.45, 14” Whole- $12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12” Prosciutto & Fresh Mozzarella ​ Wraps All served with French fries.",
        "price": "12” Whole- $13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Caesar Wrap ​",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Prosciutto & Mozzarella Wrap ​",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "The Mercer Lettuce, tomato, onion, mayo, and choice of cheese:",
        "price": "$9.95 burger, $12.95 platter",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "The “T” State Topped with sauteed mushrooms, onions, and Monterey Jack cheese:",
        "price": "$9.95 burger, $12.95 platter",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "The Rider Mozzarella cheese. pizza sauce, mushrooms:",
        "price": "$9.95 burger, $12.95 platter",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "The Rutgers Cheddar cheese, bacon, diced tomatoes, and onions:",
        "price": "$9.95 burger, $12.95 platter",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "The Princeton Swiss cheese, tomato, sautéed onions, and mushrooms:",
        "price": "$9.95 burger, $12.95 platter",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "The Windsor Grilled burger or chicken breast: ​ Desserts",
        "price": "$8.95 burger, $10.95 platter",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cannoli ​",
        "price": "$5.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "10” Nutella Pizza ​ ​ ​ ​",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
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
        "is_vegetarian": false
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
        "is_vegetarian": false
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken cutlet Panko breaded, deep-fried chicken cutlet.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp tempura Breaded and fried shrimp",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tofu Tofu lightly battered and fried with teriyaki sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Japchae (잡채) Cellophane noodles stir-fried with julienned vegetables.",
        "price": "$17.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Broccoli With oyster sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gold Pumpkin mash salad Mashed pumpkin with dried cranberries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Edamame Steamed whole soy bean",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fried veg. gyoza 2 fried vegi dumplings",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Seaweed salad Seaweed tossed in sesame and rice vinegar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French fries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Fries Deep fried skin-on potato",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Edamame Steamed whole soybean in pod lightly salted.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gyoza Fried or steamed dumplings (6pcs beef or 5pcs veg).",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seafood and Scallion Pancake (해물파전) Shrimp, calamari, and green onion grilled pancake.",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kimchi Pancake (김치전) Kimchi and vegetable grilled pancake.",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Vegetable pancake(야채전) Mixed vegetable grilled pancake",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spring Roll (3 pcs) Crispy fried vegetables in a wonton wrapper.",
        "price": "$5.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Shrimp Shumai (6 pcs) Japanese steamed shrimp dumpling.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seaweed Salad Seaweed tossed in sesame and rice vinegar.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gyoza Soup Beef or vegetable dumpling soup.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Miso Soup Miso broth with cubed tofu and scallion.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fried butterfly Shrimp 8 breaded and deep-fried shrimp",
        "price": "$10.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kimchi Fried Rice(김치 볶음밥) Fried rice stir-fried with kimchi and assorted vegetables.",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bibimbap (비빔밥) Rice mixed with julienned vegetables , egg and choice of meat in red chili past or soy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bulgogi (불고기) Grilled thinly sliced beef marinated in sweet soy, ginger, garlic, and sesame sauce.",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "$34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan-fried Pork (제육볶음) Pan-fried sliced pork mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan-Fried Calamari (오징어 볶음) Panfried squid and mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bossam (보쌈) Boiled pork, salted napa cabbage, radish kimchi and salted shrimp",
        "price": "$39.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Black bean fried rice(짜장 볶음밥) Black bean ragu with sauteed pork sauce over the fried rice",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "$22.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Soft tofu stew (순두부 찌개) Spicy stew of soft tofu, red chili paste, assorted vegetables and choice of meat",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Black Bean Noodle(짜장면) Wheat noodles in black bean ragu with sauteed pork and vegetables",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Asian Noodle Cioppino (해물짬뽕) Wheat noodles in a spicy stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spicy Beef Stew (육개장) Shredded beef and vegetables in a spicy broth.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jumbo Kalbi Tang (왕 갈비 탕) Beef rib soup with Jumbo beef rib, jujube, glass noodles, mushroom & sliced egg",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pho Noodle Soup (쌀국수) Rice noodles in clear beef broth. Served with bean sprouts, thai basil, cilantro, and peppers.",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "non spicy asian noodle (백짬뽕) Wheat noodles in a white stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Curry Rice (카레 라이스) Vegetable Japanese curry",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Katsu with Curry (카레 돈까스) Katsu with vegetables Japanese curry",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cold Soba Noodle with Shrimp Tempura(새우튀김 냉모밀) Chilled buckwheat noodles garnished with radish, scallions & seaweed in Cold Katsuobushi broth and Shrimp Tempura",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet and Sour Pork (탕수육) Lightly battered and fried pork and vegetable mixed with sweet and sour glaze.",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet & sour chicken (치킨 탕수육) Lightly battered and fried chicken mixed vegetables with sweet & sour glaze",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fried rice (볶음밥) Fried rice with assorted vegetables and choice of meat",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Basil fried rice (베이즐 볶음밥) Fried rice with assorted vegetables and choice of meat with thai basil",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Katsu (돈까스) Panko breaded, deep-fried meat, and over white rice (chicken , pork, fish ).",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "$25.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pork Bulgogi (돼지 불고기) Grilled thinly sliced pork marinated in sweet soy, ginger, garlic and sesame sauce",
        "price": "$26.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "K1 BULGOGI BEEF Maki (불고기 롤) Beef marinated in bulgogi sauce, egg, carrots, cucumbers, mayo with onion",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "K3 YUBU Maki (유부 롤) V Marinated yubu(tofu skin), egg, carrots, radish pickle , mayo with onion",
        "price": "$11.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "K2 SHRIMP TEMPURA Maki (새우튀김 롤) Shrimp tempura, egg, carrots, cucumbers, mayo with onion",
        "price": "$12.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brow Rice Whole grain brown rice.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Panchan (Single) Season Korean side dishes.",
        "price": "$6.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Panchan (Set of Three) Season Korean side dishes.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "$2.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "San Pelligrino Sparkling Water (16 oz)",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Boylan's (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "San Pelligrino Limonata (11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seagrams Ginger Ale (10 oz) Ginger-flavored ale",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Coca-Cola (12 oz) Classic cola flavor in a 12 oz",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sprite (12 oz)",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Coca-Cola Mexican Cola (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fiji Still Water (16 oz) Refreshing still water from Fiji, perfect for any occasion.",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Joe's Tea (20 oz) Refreshing brew served in a 20 oz cup.",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mott's Apple Juice (8 oz) 100% Juice , No Sugar added, NON-GMO",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sanpellegrino sparkling Orange ( 11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tropicana Orange Juice (10oz) 100 % Juice",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Beef Bulgogi (불고기) Grilled thinly sliced beef marinated in sweet soy, ginger, garlic, and sesame sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken cutlet Panko breaded, deep-fried chicken cutlet.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp tempura Breaded and fried shrimp",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tofu Tofu lightly battered and fried with teriyaki sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Japchae (잡채) Cellophane noodles stir-fried with julienned vegetables.",
        "price": "$17.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Broccoli With oyster sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gold Pumpkin mash salad Mashed pumpkin with dried cranberries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Edamame Steamed whole soy bean",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fried veg. gyoza 2 fried vegi dumplings",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Seaweed salad Seaweed tossed in sesame and rice vinegar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French fries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Fries Deep fried skin-on potato",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Edamame Steamed whole soybean in pod lightly salted.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gyoza Fried or steamed dumplings (6pcs beef or 5pcs veg).",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seafood and Scallion Pancake (해물파전) Shrimp, calamari, and green onion grilled pancake.",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kimchi Pancake (김치전) Kimchi and vegetable grilled pancake.",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Vegetable pancake(야채전) Mixed vegetable grilled pancake",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spring Roll (3 pcs) Crispy fried vegetables in a wonton wrapper.",
        "price": "$5.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Shrimp Shumai (6 pcs) Japanese steamed shrimp dumpling.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seaweed Salad Seaweed tossed in sesame and rice vinegar.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gyoza Soup Beef or vegetable dumpling soup.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Miso Soup Miso broth with cubed tofu and scallion.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fried butterfly Shrimp 8 breaded and deep-fried shrimp",
        "price": "$10.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kimchi Fried Rice(김치 볶음밥) Fried rice stir-fried with kimchi and assorted vegetables.",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bibimbap (비빔밥) Rice mixed with julienned vegetables , egg and choice of meat in red chili past or soy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bulgogi (불고기) Grilled thinly sliced beef marinated in sweet soy, ginger, garlic, and sesame sauce.",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "$34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan-fried Pork (제육볶음) Pan-fried sliced pork mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan-Fried Calamari (오징어 볶음) Panfried squid and mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bossam (보쌈) Boiled pork, salted napa cabbage, radish kimchi and salted shrimp",
        "price": "$39.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Black bean fried rice(짜장 볶음밥) Black bean ragu with sauteed pork sauce over the fried rice",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "$22.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Soft tofu stew (순두부 찌개) Spicy stew of soft tofu, red chili paste, assorted vegetables and choice of meat",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Black Bean Noodle(짜장면) Wheat noodles in black bean ragu with sauteed pork and vegetables",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Asian Noodle Cioppino (해물짬뽕) Wheat noodles in a spicy stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spicy Beef Stew (육개장) Shredded beef and vegetables in a spicy broth.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jumbo Kalbi Tang (왕 갈비 탕) Beef rib soup with Jumbo beef rib, jujube, glass noodles, mushroom & sliced egg",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pho Noodle Soup (쌀국수) Rice noodles in clear beef broth. Served with bean sprouts, thai basil, cilantro, and peppers.",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "non spicy asian noodle (백짬뽕) Wheat noodles in a white stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Curry Rice (카레 라이스) Vegetable Japanese curry",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Katsu with Curry (카레 돈까스) Katsu with vegetables Japanese curry",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cold Soba Noodle with Shrimp Tempura(새우튀김 냉모밀) Chilled buckwheat noodles garnished with radish, scallions & seaweed in Cold Katsuobushi broth and Shrimp Tempura",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet and Sour Pork (탕수육) Lightly battered and fried pork and vegetable mixed with sweet and sour glaze.",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet & sour chicken (치킨 탕수육) Lightly battered and fried chicken mixed vegetables with sweet & sour glaze",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fried rice (볶음밥) Fried rice with assorted vegetables and choice of meat",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Basil fried rice (베이즐 볶음밥) Fried rice with assorted vegetables and choice of meat with thai basil",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Katsu (돈까스) Panko breaded, deep-fried meat, and over white rice (chicken , pork, fish ).",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "$25.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pork Bulgogi (돼지 불고기) Grilled thinly sliced pork marinated in sweet soy, ginger, garlic and sesame sauce",
        "price": "$26.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "K1 BULGOGI BEEF Maki (불고기 롤) Beef marinated in bulgogi sauce, egg, carrots, cucumbers, mayo with onion",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "K3 YUBU Maki (유부 롤) V Marinated yubu(tofu skin), egg, carrots, radish pickle , mayo with onion",
        "price": "$11.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "K2 SHRIMP TEMPURA Maki (새우튀김 롤) Shrimp tempura, egg, carrots, cucumbers, mayo with onion",
        "price": "$12.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brow Rice Whole grain brown rice.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Panchan (Single) Season Korean side dishes.",
        "price": "$6.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Panchan (Set of Three) Season Korean side dishes.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "$2.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "San Pelligrino Sparkling Water (16 oz)",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Boylan's (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "San Pelligrino Limonata (11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seagrams Ginger Ale (10 oz) Ginger-flavored ale",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Coca-Cola (12 oz) Classic cola flavor in a 12 oz",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sprite (12 oz)",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Coca-Cola Mexican Cola (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fiji Still Water (16 oz) Refreshing still water from Fiji, perfect for any occasion.",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Joe's Tea (20 oz) Refreshing brew served in a 20 oz cup.",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mott's Apple Juice (8 oz) 100% Juice , No Sugar added, NON-GMO",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sanpellegrino sparkling Orange ( 11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tropicana Orange Juice (10oz) 100 % Juice",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Beef Bulgogi (불고기) Grilled thinly sliced beef marinated in sweet soy, ginger, garlic, and sesame sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken cutlet Panko breaded, deep-fried chicken cutlet.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp tempura Breaded and fried shrimp",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tofu Tofu lightly battered and fried with teriyaki sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Japchae (잡채) Cellophane noodles stir-fried with julienned vegetables.",
        "price": "$17.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Broccoli With oyster sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gold Pumpkin mash salad Mashed pumpkin with dried cranberries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Edamame Steamed whole soy bean",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fried veg. gyoza 2 fried vegi dumplings",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Seaweed salad Seaweed tossed in sesame and rice vinegar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French fries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Fries Deep fried skin-on potato",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Edamame Steamed whole soybean in pod lightly salted.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gyoza Fried or steamed dumplings (6pcs beef or 5pcs veg).",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seafood and Scallion Pancake (해물파전) Shrimp, calamari, and green onion grilled pancake.",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kimchi Pancake (김치전) Kimchi and vegetable grilled pancake.",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Vegetable pancake(야채전) Mixed vegetable grilled pancake",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spring Roll (3 pcs) Crispy fried vegetables in a wonton wrapper.",
        "price": "$5.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Shrimp Shumai (6 pcs) Japanese steamed shrimp dumpling.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seaweed Salad Seaweed tossed in sesame and rice vinegar.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gyoza Soup Beef or vegetable dumpling soup.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Miso Soup Miso broth with cubed tofu and scallion.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fried butterfly Shrimp 8 breaded and deep-fried shrimp",
        "price": "$10.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kimchi Fried Rice(김치 볶음밥) Fried rice stir-fried with kimchi and assorted vegetables.",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bibimbap (비빔밥) Rice mixed with julienned vegetables , egg and choice of meat in red chili past or soy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bulgogi (불고기) Grilled thinly sliced beef marinated in sweet soy, ginger, garlic, and sesame sauce.",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "$34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan-fried Pork (제육볶음) Pan-fried sliced pork mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan-Fried Calamari (오징어 볶음) Panfried squid and mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bossam (보쌈) Boiled pork, salted napa cabbage, radish kimchi and salted shrimp",
        "price": "$39.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Black bean fried rice(짜장 볶음밥) Black bean ragu with sauteed pork sauce over the fried rice",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "$22.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Soft tofu stew (순두부 찌개) Spicy stew of soft tofu, red chili paste, assorted vegetables and choice of meat",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Black Bean Noodle(짜장면) Wheat noodles in black bean ragu with sauteed pork and vegetables",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Asian Noodle Cioppino (해물짬뽕) Wheat noodles in a spicy stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spicy Beef Stew (육개장) Shredded beef and vegetables in a spicy broth.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jumbo Kalbi Tang (왕 갈비 탕) Beef rib soup with Jumbo beef rib, jujube, glass noodles, mushroom & sliced egg",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pho Noodle Soup (쌀국수) Rice noodles in clear beef broth. Served with bean sprouts, thai basil, cilantro, and peppers.",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "non spicy asian noodle (백짬뽕) Wheat noodles in a white stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Curry Rice (카레 라이스) Vegetable Japanese curry",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Katsu with Curry (카레 돈까스) Katsu with vegetables Japanese curry",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cold Soba Noodle with Shrimp Tempura(새우튀김 냉모밀) Chilled buckwheat noodles garnished with radish, scallions & seaweed in Cold Katsuobushi broth and Shrimp Tempura",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet and Sour Pork (탕수육) Lightly battered and fried pork and vegetable mixed with sweet and sour glaze.",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet & sour chicken (치킨 탕수육) Lightly battered and fried chicken mixed vegetables with sweet & sour glaze",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fried rice (볶음밥) Fried rice with assorted vegetables and choice of meat",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Basil fried rice (베이즐 볶음밥) Fried rice with assorted vegetables and choice of meat with thai basil",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Katsu (돈까스) Panko breaded, deep-fried meat, and over white rice (chicken , pork, fish ).",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "$25.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pork Bulgogi (돼지 불고기) Grilled thinly sliced pork marinated in sweet soy, ginger, garlic and sesame sauce",
        "price": "$26.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "K1 BULGOGI BEEF Maki (불고기 롤) Beef marinated in bulgogi sauce, egg, carrots, cucumbers, mayo with onion",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "K3 YUBU Maki (유부 롤) V Marinated yubu(tofu skin), egg, carrots, radish pickle , mayo with onion",
        "price": "$11.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "K2 SHRIMP TEMPURA Maki (새우튀김 롤) Shrimp tempura, egg, carrots, cucumbers, mayo with onion",
        "price": "$12.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brow Rice Whole grain brown rice.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Panchan (Single) Season Korean side dishes.",
        "price": "$6.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Panchan (Set of Three) Season Korean side dishes.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "$2.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "San Pelligrino Sparkling Water (16 oz)",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Boylan's (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "San Pelligrino Limonata (11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seagrams Ginger Ale (10 oz) Ginger-flavored ale",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Coca-Cola (12 oz) Classic cola flavor in a 12 oz",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sprite (12 oz)",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Coca-Cola Mexican Cola (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fiji Still Water (16 oz) Refreshing still water from Fiji, perfect for any occasion.",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Joe's Tea (20 oz) Refreshing brew served in a 20 oz cup.",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mott's Apple Juice (8 oz) 100% Juice , No Sugar added, NON-GMO",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sanpellegrino sparkling Orange ( 11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tropicana Orange Juice (10oz) 100 % Juice",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Beef Bulgogi (불고기) Grilled thinly sliced beef marinated in sweet soy, ginger, garlic, and sesame sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken cutlet Panko breaded, deep-fried chicken cutlet.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp tempura Breaded and fried shrimp",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tofu Tofu lightly battered and fried with teriyaki sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Japchae (잡채) Cellophane noodles stir-fried with julienned vegetables.",
        "price": "$17.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Broccoli With oyster sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gold Pumpkin mash salad Mashed pumpkin with dried cranberries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Edamame Steamed whole soy bean",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fried veg. gyoza 2 fried vegi dumplings",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Seaweed salad Seaweed tossed in sesame and rice vinegar",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French fries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Fries Deep fried skin-on potato",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Edamame Steamed whole soybean in pod lightly salted.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gyoza Fried or steamed dumplings (6pcs beef or 5pcs veg).",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seafood and Scallion Pancake (해물파전) Shrimp, calamari, and green onion grilled pancake.",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kimchi Pancake (김치전) Kimchi and vegetable grilled pancake.",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Vegetable pancake(야채전) Mixed vegetable grilled pancake",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spring Roll (3 pcs) Crispy fried vegetables in a wonton wrapper.",
        "price": "$5.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Shrimp Shumai (6 pcs) Japanese steamed shrimp dumpling.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seaweed Salad Seaweed tossed in sesame and rice vinegar.",
        "price": "$9.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gyoza Soup Beef or vegetable dumpling soup.",
        "price": "$7.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Miso Soup Miso broth with cubed tofu and scallion.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fried butterfly Shrimp 8 breaded and deep-fried shrimp",
        "price": "$10.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kimchi Fried Rice(김치 볶음밥) Fried rice stir-fried with kimchi and assorted vegetables.",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bibimbap (비빔밥) Rice mixed with julienned vegetables , egg and choice of meat in red chili past or soy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bulgogi (불고기) Grilled thinly sliced beef marinated in sweet soy, ginger, garlic, and sesame sauce.",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kalbi (갈비) Grilled beef short ribs marinated in sweet say, ginger, garlic, and sesame sauce.",
        "price": "$34.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan-fried Pork (제육볶음) Pan-fried sliced pork mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan-Fried Calamari (오징어 볶음) Panfried squid and mixed vegetables in sweet and spicy red pepper garlic sauce with wheat noodle",
        "price": "$29.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bossam (보쌈) Boiled pork, salted napa cabbage, radish kimchi and salted shrimp",
        "price": "$39.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Black bean fried rice(짜장 볶음밥) Black bean ragu with sauteed pork sauce over the fried rice",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet & sour crispy Eggplant (가지 탕수) Lightly battered and fried eggplants with sweet and sour glaze sauce.",
        "price": "$22.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Soft tofu stew (순두부 찌개) Spicy stew of soft tofu, red chili paste, assorted vegetables and choice of meat",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Black Bean Noodle(짜장면) Wheat noodles in black bean ragu with sauteed pork and vegetables",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Asian Noodle Cioppino (해물짬뽕) Wheat noodles in a spicy stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spicy Beef Stew (육개장) Shredded beef and vegetables in a spicy broth.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jumbo Kalbi Tang (왕 갈비 탕) Beef rib soup with Jumbo beef rib, jujube, glass noodles, mushroom & sliced egg",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pho Noodle Soup (쌀국수) Rice noodles in clear beef broth. Served with bean sprouts, thai basil, cilantro, and peppers.",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "non spicy asian noodle (백짬뽕) Wheat noodles in a white stew with vegetables and choice of topping",
        "price": "$16.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Curry Rice (카레 라이스) Vegetable Japanese curry",
        "price": "$15.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Katsu with Curry (카레 돈까스) Katsu with vegetables Japanese curry",
        "price": "$19.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "General Tso's chicken (깐풍기) Chicken lightly battered and fried in sweet and tangy sauce",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cold Soba Noodle with Shrimp Tempura(새우튀김 냉모밀) Chilled buckwheat noodles garnished with radish, scallions & seaweed in Cold Katsuobushi broth and Shrimp Tempura",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet and Sour Pork (탕수육) Lightly battered and fried pork and vegetable mixed with sweet and sour glaze.",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet & sour chicken (치킨 탕수육) Lightly battered and fried chicken mixed vegetables with sweet & sour glaze",
        "price": "$24.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fried rice (볶음밥) Fried rice with assorted vegetables and choice of meat",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Basil fried rice (베이즐 볶음밥) Fried rice with assorted vegetables and choice of meat with thai basil",
        "price": "$14.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Katsu (돈까스) Panko breaded, deep-fried meat, and over white rice (chicken , pork, fish ).",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Bulgogi (치킨 불고기) Grilled chicken marinated in sweet soy sauce",
        "price": "$25.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pork Bulgogi (돼지 불고기) Grilled thinly sliced pork marinated in sweet soy, ginger, garlic and sesame sauce",
        "price": "$26.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "K1 BULGOGI BEEF Maki (불고기 롤) Beef marinated in bulgogi sauce, egg, carrots, cucumbers, mayo with onion",
        "price": "$13.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "K3 YUBU Maki (유부 롤) V Marinated yubu(tofu skin), egg, carrots, radish pickle , mayo with onion",
        "price": "$11.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "K2 SHRIMP TEMPURA Maki (새우튀김 롤) Shrimp tempura, egg, carrots, cucumbers, mayo with onion",
        "price": "$12.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brow Rice Whole grain brown rice.",
        "price": "$3.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Panchan (Single) Season Korean side dishes.",
        "price": "$6.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Panchan (Set of Three) Season Korean side dishes.",
        "price": "$18.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "White rice Steamed white rice served as a side dish.",
        "price": "$2.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "San Pelligrino Sparkling Water (16 oz)",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Boylan's (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "San Pelligrino Limonata (11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seagrams Ginger Ale (10 oz) Ginger-flavored ale",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Coca-Cola (12 oz) Classic cola flavor in a 12 oz",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sprite (12 oz)",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Coca-Cola Mexican Cola (12 oz)",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fiji Still Water (16 oz) Refreshing still water from Fiji, perfect for any occasion.",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Joe's Tea (20 oz) Refreshing brew served in a 20 oz cup.",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mott's Apple Juice (8 oz) 100% Juice , No Sugar added, NON-GMO",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sanpellegrino sparkling Orange ( 11.15 oz) can",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tropicana Orange Juice (10oz) 100 % Juice",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
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
        "is_vegetarian": false
      },
      {
        "item": "Caprese Skewers (25/50)",
        "price": "$35",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Vodka or Alfredo Choice of Pasta",
        "price": "$45",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Ziti",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "ItalianAntipasto Skewers (25/50)",
        "price": "$45",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fried Calamari",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Clams Oreganato/Casino Puttanesca Choice of Pasta",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Choiceof Sauce:PinkCreamorMarinara Puttanesca Choice of Pasta",
        "price": "$30",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Knots Puttanesca Choice of Pasta",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Rigatoni Bolognese Puttanesca Choice of Pasta. Mozzarella Sticks (20/40)",
        "price": "$35",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meat Lasagna Puttanesca Choice of Pasta",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Veggie Lasagna Puttanesca Choice of Pasta",
        "price": "$45",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Eggplant Rollatini (12/24) Puttanesca Choice of Pasta",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Stuffed Shells Puttanesca Choice of Pasta",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meatballs (20/40) Puttanesca Choice of Pasta",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Manicotti Puttanesca Choice of Pasta. Jumbo Party Wings",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sausage,Peppers&Onion (rollsextra) Puttanesca Choice of Pasta",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "(Half Tray 50 wings / Full Tray 100 Wings) Puttanesca Choice of Pasta",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bufalo, BBQor Garlic Parmesan, Puttanesca Choice of Pasta",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eggplant Parmigiano Puttanesca Choice of Pasta. Drunken Fried Gnocchi",
        "price": "$60",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Fingers & French Fries(20/40) Puttanesca Choice of Pasta. Vodka SauceToppedwithFreshMozzarella Half/Full",
        "price": "$52",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "with Orecchiette Caesar Salad",
        "price": "$35",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tortellini Prosciutto E Piselli Arugula Salad",
        "price": "$60",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "RigatoniwithPestoCream Seasonal Salad",
        "price": "$55",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cacciatore Chicken Entree",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tortellini Choice of Sauce Chicken Entree",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Francese Chicken Entree. 3ft/ 6ft Subs 2ayotiead",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Marsala Chicken Entree",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Parmigiano Chicken Entree. Piccata",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Italian Chicken Entree. /145",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Turkey Chicken Entree. /145",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Saltimbocca Chicken Entree. Chicken Cutlet s75/145",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roast Beef s Chicken Entree. /155",
        "price": "$80",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Creamy Chicken Cutlet Marsala Chicken Entree",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vegetarian Chicken Entree. /145",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Napolitano Chicken Entree. /175",
        "price": "$90",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Drunken Chicken Parmigiano Chicken Entree. VodkaSauce ToppedwithFreshMozzarella Grilled Chicken Italian s80/155",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tuna Chicken Entree. /145",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Caesar Veal Entree",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Bacon Ranch Veal Entree",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cacciatore Veal Entree",
        "price": "$90",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Francese Veal Entree",
        "price": "$90",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Buffalo Veal Entree",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken BBQ Veal Entree",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Marsala Veal Entree",
        "price": "$90",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Fingers Veal Entree",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roast Beef Bacon Veal Entree",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Milanese Veal Entree",
        "price": "$90",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Fried Eggplant Veal Entree",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Parmigiano Veal Entree. Sub Platters",
        "price": "$90",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Piccata Veal Entree. Chooseupto3optionspertray",
        "price": "$90",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Saltimbocca Veal Entree. Italian S75",
        "price": "$100",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roast Beef Tray",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Cutlet",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Napolitano",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Grilled Salmon",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Salmon Puttanesca",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Italiano",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Salmon Piccata",
        "price": "$75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Choice of sauce: Fra Diavolo, Francese, Parmigianoor Scampi",
        "price": "$65",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tiramisu Serves 12-15 people Scallops Choice of sauce Market Large Cannoli",
        "price": "$48",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mussels or Clams Choice of sauce New York Style Cheesecake Market price Bianco, Fra Diavolo or Marinara",
        "price": "$60",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mussels & Clams Mixed Choice of sauce Market price",
        "price": "$60",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
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
        "is_vegetarian": false
      },
      {
        "item": "Southern Fried Southern Fried Chicken Sandwich",
        "price": "$ 16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Philly Cheesesteak Ribeye & Provolone cheese, with onions & peppers. $ 17 Philly Cheesesteak",
        "price": "$ 17",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fig & Pig Prosciutto, creamy goat cheese, fig preserves, sliced figs, Fig & Pig",
        "price": "$ 16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wild Mushroom Wild mushrooms, parmesan, brick cheese, arugula Wild Mushroom",
        "price": "$ 17.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "MVP Pepperoni, classic meatballs, ham, candied bacon MVP",
        "price": "$ 18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pepperoni Hand-cut pepperoni & brick cheese. $ 16.50 Pepperoni",
        "price": "$ 16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fries",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sweet Potato Tots",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Broccoli",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Jasmine Rice",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Coleslaw",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheddar Mashed Potatoes",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Southern Green Beans",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Macaroni and Cheese",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Grilled Shrimp",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fried Shrimp",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "St. Louis Style St. Louis Style Pork Spareribs",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mixed Berries Cheesecake New York style cheesecake with seasonal berries, Mixed Berries Cheesecake",
        "price": "$ 11",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Apple Crumble Granny Smith apples, caramel sauce & vanilla ice cream. $ 9.50 Apple Crumble",
        "price": "$ 9.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ultimate Brownie Warm chocolate walnut brownie, vanilla ice cream, Ultimate Brownie",
        "price": "$ 9.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Homerun App Classic meatballs, chicken tenders, white queso and Homerun App",
        "price": "$ 23",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spiked Calamari Tossed with cherry peppers & a side of spicy marinara. $ 15 Spiked Calamari",
        "price": "$ 15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "House Baked Jumbo Pretzel Salted pretzel with white queso & sriracha ranch. $ 12.50 House Baked Jumbo Pretzel",
        "price": "$ 12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Loaded Game Day Nachos Choice of chicken or spicy beef, black beans, Loaded Game Day Nachos",
        "price": "$ 20",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "White Queso and Chips With pico de gallo. $ 10.50 White Queso and Chips",
        "price": "$ 10.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Classic Meatballs Ground beef & pork, spicy marinara, grated parmesan Classic Meatballs",
        "price": "$ 12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fried Deviled Eggs Golden fried egg whites, candied bacon, jalapeño & Fried Deviled Eggs",
        "price": "$ 11",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mozzarella Bricks Hand cut, panko parmesan crusted mozzarella Mozzarella Bricks",
        "price": "$ 12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Knockout Shrimp Lightly fried shrimp with our sweet & spicy knockout Knockout Shrimp",
        "price": "$ 15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Duck Wings Crispy duck wings, brick sauce & cilantro with Duck Wings",
        "price": "$ 18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Salad Choice of grilled or Cajun spiced shrimp, mesclun mix, Shrimp Salad",
        "price": "$ 19.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Thai Chicken Salad Chicken, red bell peppers, Napa cabbage, cilantro, Thai Chicken Salad",
        "price": "$ 18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "House or Caesar Salad $ 8.50 House or Caesar Salad",
        "price": "$ 8.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "cup Brick House Chili",
        "price": "$ 9.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "cup Soup of the Day",
        "price": "$ 8",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Soup & Salad Soup of the Day with choice of House, Caesar, Soup & Salad",
        "price": "$ 16",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fish & Chips Beer battered wild caught white fish served with malt Fish & Chips",
        "price": "$ 19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mahi Mahi Grilled or blackened wild caught Mahi Mahi, roasted Mahi Mahi",
        "price": "$ 23",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seared Atlantic Salmon* Jasmine rice & green beans. $ 22 Seared Atlantic Salmon*",
        "price": "$ 22",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Add House Salad, Caesar Salad Add House Salad, Caesar Salad or Cup of Soup of the Day",
        "price": "$ 6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "5 Wings $ 11 5 Wings",
        "price": "$ 11",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "10 Wings $ 20 10 Wings",
        "price": "$ 20",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "20 Wings $ 38 20 Wings",
        "price": "$ 38",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tavern BBQ Sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Buffalo Sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brick Sauce",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lemon Pepper",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Nashville Hot",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hot Honey",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Add A Patty $ 5 Add A Patty",
        "price": "$ 5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brick Burger Classic The classic double patty with American cheese, Brick Burger Classic",
        "price": "$ 17",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Triple Play Cheeseburger Triple decker, American cheese, Provolone cheese, Triple Play Cheeseburger",
        "price": "$ 19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "South Paw Double patty, guacamole, caramelized red onions, South Paw",
        "price": "$ 18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "No Bun Intended Bunless, double patty, shaved ham, bacon, white No Bun Intended",
        "price": "$ 18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Beyond Burger® Plant-based burger, smoked Provolone cheese, grilled Beyond Burger®",
        "price": "$ 18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Colossal Burger 4 Decker Burger, cheddar, Colossal Burger",
        "price": "$ 24",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mushrooms",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Caramelized Caramelized Red Onions",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jalapeños",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pico de Gallo",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fried Egg",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bacon",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Guacamole",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "BBQ Ribs Half rack of St. Louis style pork spareribs, Tavern BBQ BBQ Ribs",
        "price": "$ 29",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken & Waffles Homemade Belgian waffles, hand battered Chicken & Waffles",
        "price": "$ 18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Tenders Hand battered crispy tenders with Chicken Tenders",
        "price": "$ 16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Pot Pie Pulled chicken, red potatoes, peas, thyme, Chicken Pot Pie",
        "price": "$ 18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ribeye Steak* 12oz Ribeye steak with garlic butter, cheddar mashed potatoes & broccoli. $ 35 Ribeye Steak*",
        "price": "$ 35",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sirloin Steak* 8 oz Sirloin steak marinated for 24 hours, Sirloin Steak*",
        "price": "$ 24",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Drunken Chops Two brined center cut pork chops with whiskey glaze, Drunken Chops",
        "price": "$ 30",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Rigatoni Pasta Spicy basil marinara sauce, mozzarella cheese, topped Baked Rigatoni Pasta",
        "price": "$ 20",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Add House Salad, Caesar Salad or Cup of Soup of the Day $ 6 Add House Salad, Caesar Salad or Cup of Soup of the Day",
        "price": "$ 6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Call Me Old Fashioned Woodford Reserve Bourbon Whiskey, Call Me Old Fashioned",
        "price": "$ 13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Up in Smoke Bulleit Straight American Rye Whiskey, Up in Smoke",
        "price": "$ 13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Manhattan Maker’s Mark Bourbon Whisky, sweet vermouth, Manhattan",
        "price": "$ 14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Luxury Rita Patrón Silver Tequila, Cointreau Orange Liqueur, Luxury Rita",
        "price": "$ 15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mi Casa Margarita Casamigos Blanco Tequila, Cointreau Orange Liqueur, Mi Casa Margarita",
        "price": "$ 14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Watermelon Sunrise Don Julio Blanco Tequila, triple sec, Red Bull Red Edition, Watermelon Sunrise",
        "price": "$ 13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ranch Water Teremana Resposado Tequila, Topo Chico, lime juice $ 14.50 Ranch Water",
        "price": "$ 14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Blackberry Collins Tito’s Handmade Vodka, St-Germain Elderflower Liqueur, Blackberry Collins",
        "price": "$ 11.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crown Apple Mule Crown Royal Regal Apple Whisky, Crown Apple Mule",
        "price": "$ 14",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Moscow Mule Tito’s Handmade Vodka, Fever-Tree Ginger Beer, Moscow Mule",
        "price": "$ 10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Raspberry Mule Svedka Raspberry Vodka, Fever-Tree Ginger Beer, Raspberry Mule",
        "price": "$ 11.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bullish Mule Tito's Handmade Vodka, fresh lime juice, Bullish Mule",
        "price": "$ 13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mango Mojito Cruzan Mango Rum, Monin Mojito Syrup, triple sec, Mango Mojito",
        "price": "$ 10.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sparkling Sangria New Amsterdam Mango Vodka, La Marca Prosecco, Sparkling Sangria",
        "price": "$ 12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Game Day Punch Bacardí Superior Rum, Fever-Tree Ginger Ale, Game Day Punch",
        "price": "$ 13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Unneccessary Freshness Bulleit Bourbon, triple sec, pineapple & lime juices, Unneccessary Freshness",
        "price": "$ 15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Loaded Strawberry Lemonade Grey Goose Vodka, Reál Strawberry Purée, Loaded Strawberry Lemonade",
        "price": "$ 13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Espresso Martini Smirnoff Vanilla Vodka, Kahlúa Coffee Liqueur, Espresso Martini",
        "price": "$ 14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bloody Good Mary Tito’s Handmade Vodka, Zing Zang Bloody Mary Mix, Bloody Good Mary",
        "price": "$ 13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Zombie Bacardí Superior Rum, Don Q 151 Rum, Zombie",
        "price": "$ 12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bud Light",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Budweiser",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Coors Light",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Corona Extra",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Heineken 0.0 Heineken 0.0 (Non-Alcoholic)",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Heineken",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "High Noon High Noon Hard Seltzers (Varies By Location)",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Michelob Ultra",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Miller Lite",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Modelo Especial",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bell’s Brewery Bell’s Brewery Two Hearted IPA",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Blue Moon Blue Moon Belgian White Ale",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Dos Equis Especial Lager",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Elysian Space Dust IPA",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Guinness Draught Stout",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kona Big Wave Golden Ale",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pacifico",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Samuel Adams Samuel Adams (Seasonal)",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shiner Bock",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Stella Artois",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Yuengling",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "New Belgium New Belgium Voodoo Ranger Juicy Haze IPA",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "glass Carmel Road",
        "price": "$ 13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "glass Ecco Domani",
        "price": "$ 10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "glass Decoy by Duckhorn",
        "price": "$ 14",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "(Bottle) Sonoma-Cutrer 'Russian River Ranches'",
        "price": "$ 42",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "glass La Marca",
        "price": "$ 12",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "(Split) Chandon Rosé",
        "price": "$ 13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "(Half Bottle) Veuve Clicquot 'Yellow Label'",
        "price": "$ 59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Monday - Friday 3pm-6pm",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Knockout Shrimp $ 7 Knockout Shrimp",
        "price": "$ 7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fried Deviled Eggs $ 5 Fried Deviled Eggs",
        "price": "$ 5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tavern Wings (Pick Your Flavor | Pick Your Spice Level) $ 8.50 Tavern Wings",
        "price": "$ 8.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Classic Meatballs $ 5.75 Classic Meatballs",
        "price": "$ 5.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "White Queso and Chips $ 4.75 White Queso and Chips",
        "price": "$ 4.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "House Baked Jumbo Pretzel $ 5.50 House Baked Jumbo Pretzel",
        "price": "$ 5.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spiked Calamari $ 7 Spiked Calamari",
        "price": "$ 7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Duck Wings $ 8.50 Duck Wings",
        "price": "$ 8.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mozzarella Bricks $ 5.75 Mozzarella Bricks",
        "price": "$ 5.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Well Spirits | Domestic Draft Pints",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Imports & Craft Draft Pints",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tito’s Handmade Vodka | Bacardi Superior Rum",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tanqueray Gin | Jack Daniel’s Whiskey",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Captain Morgan Spiced Rum | Jose Cuervo Gold Tequila",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "House Gold Margarita | Mango Mojito | Moscow Mule",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sparkling Sangria | Call Me Old Fashioned",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Deviled Eggs Hardboiled eggs, candied bacon, jalapeño & paprika. Deviled Eggs",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tavern Wings A full pound with buffalo or brick sauce, served with ranch, blue cheese or sriracha ranch. Tavern Wings",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "HOUSE SALAD Mixed greens, tomatoes, cheddar cheese HOUSE SALAD",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Thai Chicken Salad Chicken, red bell peppers, napa cabbage, cilantro, peanut sauce & honey lime vinaigrette. Thai Chicken Salad",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Salad Choice of grilled or Cajun spiced shrimp, Shrimp Salad",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "CAESAR Crisp romaine, Caesar dressing, CAESAR",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mahi Mahi Grilled or blackened wild caught Mahi Mahi, roasted Mahi Mahi",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seared Atlantic Salmon Seared Atlantic Salmon, jasmine rice & Seared Atlantic Salmon",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ribeye Steak* 12oz Ribeye steak with garlic butter, cheddar mashed potatoes & broccoli. Ribeye Steak*",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Southern Green Southern Green Beans",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cheddar Mashed Cheddar Mashed Potatoes",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "MONDAY - FRIDAY 3pm-6pm",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fried Deviled Eggs",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "House Baked Jumbo Pretzel",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Knockout Shrimp",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Domestic Draft Pints",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Well Spirits",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$5 Imports & Craft Draft Pints",
        "price": "$5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$7 Select Wines by The Glass",
        "price": "$7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Moscow Mule",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mango Mojito",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "House Gold Margarita",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Twisted Old Fashioned",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sparkling Sangria",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jose Cuervo Tequila",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Captain Morgan Rum",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jack Daniel’s Whiskey",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tanqueray Gin",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bacardi Superior Rum",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tito's Handmade Vodka",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
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
        "is_vegetarian": false
      },
      {
        "item": "MALAI CHICKEN KABAB Chicken chunks marinated in ginger and garlic broiled in the Tandoor",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "FISH TANDOORI Chunks of fresh salmon marinated in herbs and spices broiled in the Tandoor",
        "price": "$16.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Tandoori Fresh, king size shrimp gently seasoned and slowly broiled over charcoal in the Tandoor",
        "price": "$16.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tawa Chicken Chicken grilled to perfection with onions, green peppers and oriental spices",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Samosas Fried turnover deliciously filled with mildly spiced savory spiced ground chicken",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Tawa Large King size shrimp sauteed with onions, green peppers and mild tender spices",
        "price": "$17.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tandoori Mixed Grill A combination of our appetizing Tandoori Chicken, Chicken Tikka, Malai kabab, Boti Kabab, Shrimp Tandoori and Fish Tikka",
        "price": "$28.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vegetable Samosa Fried turnover deliciously filled with mildly spiced potatoes and peas",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Aloo Tikki Potato Patties and peas flavoured with chilli peppers and coriander",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Harabhara Kabab Fresh spinach balls scrumptiously spiced and deep fried",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Assorted Pakora Fresh vegetables dipped in a deliciously spiced batter and fried to golden perfection",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Mix Appetizer For Two A combination of vegetable samosa assorted pakoras and papdam",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Aloo Tikki Chaat Crispy aloo tikki topped with chickpeas, yogurt & delicious chutneys.",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Samosa Chaat Vegetable samosas topped with chickpeas, yogurt & delicious chutneys.",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Panir Tikka Marinated cubes of homemade cheese barbecued in charcoal oven",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chili Paneer Cubes of homemade cheese tossed in a sweet spicy and tangy-chili sauce",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Tomato Soup Delicately spiced tomato soup",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mulligatawny Soup An Anglo-Indian invention of spicy split pea soup",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Navratna Korma A royal entree.. nine garden fresh vegetables gently simmered in coconut spice laced cream sauce with nuts",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Vegetable Jalfrezi Garden fresh vegetables cooked in a tangy tomato based sauce with Indian herbs & Spices.",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Vegetable Makhani Fresh vegetables cooked in a rich onion, tomato & cream based sauce.",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Malai Kofta Homemade vegetable balls cooked in a mildly spiced creamy sauce with coconut and nuts",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Paneer Masala Homemade cheese cubes mixed with onions and tomatoes cooked in our special sauce",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Kadhai Paneer Tender cubes of homemade cheese with sauteed garlic, ginger and tomatoes",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Kashmiri Dum Aloo Potatoes filled with cheese and then cooked in a mild creamy sauce",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Palak Paneer Fresh, homemade Indian cheese gently cooked with garden spinach and mild spices",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chana Saag Chickpea gently cooked with garden spinach and mild spices.",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Aloo Palak Potato gently cooked with garden spinach and mild spices",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Mutter Panir Peas and homemade cheese cubes cooked in mildly spiced sauce",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Aloo Gobhi Fresh cauliflower and potatoes cooked with onions tomatoes, green beans and Indian seasoning",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Baingan Bhartha Eggplant roasted in tandoor cooked with green peas, fresh tomatoes, onions, ginger and garlic",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bhindi Masala Okra sauteed with onions, tomatoes and oriental spices",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Tikka Masala Tender boneless pieces of chicken broiled in the Tandoor then cooked in a rich tomato, onion and cream sauce",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Makhani Tandoor baked chicken cooked in oriental spices with tomatoes and butter",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Curry Curried chicken pieces cooked in light Asian spices",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Vindaloo Fresh chicken exotically prepared in very spicy gravy",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Korma Chicken pieces cooked in a mild cream sauce with fresh green coriander",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Cashmere Chunks of chicken cooked in a mild cream sauce with cashew nuts and golden raisins",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Saagwala Boneless chicken pieces sauteed with spinach and enhanced with mild Indian spices",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Karahi Boneless white chicken sauteed with garlic, ginger and tomatoes",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chili Chicken Chunks of white chicken marinated and cooked with onions, green peppers and chili Sauce.",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Jalfrezi Tender pieces of chicken with veggies, onions, tomato's and spices",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Curry Chunks of tender lamb cooked in a mildly spiced sauce",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Vindaloo Spiced lamb cooked in a very spicy sauce",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Tikka Masala Tender boneless chunks of lamb cooked in a rich tomato, onion and cream sauce",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Rogan Josh Tender cubes of lamb marinated in Eastern spices sauteed with chopped tomatoes in a creamy sauce",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Korma An exotic preparation of lamb in a creamy spiced sauce",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Nargisi Tender lamb prepared in a mildly spiced creamy and coconut sauce with eggs.",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Karahi Chunks of lamb and Northern spices cooked with tomatoes, onions and green peppers",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Saagwala Tender lamb prepared with fresh spinach, coriander and other fragrant herbs",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Achari Lamb cooked with onions, garlic, tomatoes and fresh chili peppers, flavored with pickled spices",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fish Curry Cooked with fresh ginger and garlic in a lightly spiced sauce",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Curry Cooked with fresh ginger and garlic in a lightly spiced sauce",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fish Vindaloo Exotically prepared in a very spicy sauce",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Vindaloo Exotically prepared in a very spicy sauce",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Nargisi Large, fresh shrimp prepared in a special coconut sauce with eggs",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Karahi Shrimp cooked with onions, tomatoes, green peppers and light spices and uncommon flavour",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Tikka Masala Extra large shrimp broiled in the tandoor, cooked in a rich tomato, onion and cream sauce",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fish Tikka Masala Fresh salmon broiled in the tandoor, then cooked in a rich tomato, onion and cream sauce",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chili Fish Fresh salmon marinated and cooked with onions, green peppers and chili sauce",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "CHICKEN TIKKA Marinated chunks of chicken barbecued in the charcoal oven",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "MALAI CHICKEN KABAB Chicken chunks marinated in ginger and garlic, broiled in the tandoor",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tandoori Chicken Chicken marinated in fresh spices & lemon, then barbecued over flaming charcoal in the tandoor",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "TANDOORI FISH TIKKA Chunks of fresh salmon marinated in herbs and spices, broiled in the Tandoor",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tandoori Shrimp Fresh, king-size Shrimp gently seasoned and slowly broiled over charcoal in the Tandoor",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "BOTI KABAB Tender morsels of lamb marinated in special spices, then broiled in the Tandoor",
        "price": "$26.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seekh Kabab Mildly spiced minced lamb skewered & grilled over charcoal",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Paneer Tikka Marinated cubes of homemade cheese barbecued in charcoal oven",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Biryani Basmati rice cooked with chicken mixed with onions, fresh ginger, cashew nuts and golden raisins, flavored with delicate spices",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Biryani Gorgeously tender pieces of lamb cooked with long grain basmati rice, cashew nuts, golden raisins and exotic spices",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Biryani Special basmati rice cooked with shrimp, cashew nuts, golden raisins and delicate light spices",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vegetable Biryani Indian basmati rice cooked with fresh vegetables, cashew nuts, raisins and exotic spices",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Naan Traditional white bread, baked in the tandoor",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Naan Healthy unleavened bread stuffed with fresh garlic",
        "price": "$6.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Paneer Kulcha Exotic unleavened bread filled with homemade cheese and spices",
        "price": "$7.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Onion Kulcha Scrumptiously unleavened bread stuffed with onions and spices",
        "price": "$7.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tandoori Roti Whole wheat bread baked in the tandoor",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Paratha Buttered pan-baked, wheat flat bread",
        "price": "$8.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Aloo Paratha Paratha bread stuffed with delicately spiced potatoes",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bread Basket A combo of three house favorite breads Naan, Onion Kulcha and Tandoori Roti",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Daal Makhani Black beans and lentils simmered in cream for hours lightly fried in butter with fresh onion, ginger and garlic",
        "price": "$17.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Yellow Dal Tadka Yellow lentils delicately cooked with browned onions in aromatic spices",
        "price": "$17.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chana Masala Chick peas and tomatoes cooked in traditional spices",
        "price": "$17.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Raita Grated cucumber made in homemade yogurt",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Achar Hot and spicy Indian pickle",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Papdam Three thin and crispy lentil flat breads",
        "price": "$6.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Kachumber Diced onions, tomatoes, chili peppers and chopped coriander with hint of lemon juice",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mango Chutney A special preparation of sweet and mango slices",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Persian Falooda Rose flavoured milk mixed with falooda sev. tukmurla seeds and topped with ice cream",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mango D'fengo Chef's special creation with fresh mangoes and fruits",
        "price": "$8.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gulab Jamun Milk and cheese balls dipped in syrup, served warm",
        "price": "$8.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Rasmalai Homemade cheese simmered with milk and nuts, served cold",
        "price": "$8.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Kulfi Authentic Indian Ice Cream, flavored with pistachio and cashew nuts",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lassi Sweet and Salted",
        "price": "$7.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Flavoured Lassi Mango",
        "price": "$7.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mango Milk Shake",
        "price": "$7.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Indian Masala Iced Tea",
        "price": "$7.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Indian Masala Tea",
        "price": "$4.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Coffee",
        "price": "$4.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Soda Coke, Diet Coke, Sprite or Ginger Ale",
        "price": "$3.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Veg Combo",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Combo",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Combo",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seafood Combo",
        "price": "$27.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tandoori Combo",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "CHICKEN TIKKA Marinated chunks of chicken barbecued in the charcoal oven.",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "MALAI CHICKEN KABAB Chicken chunks marinated in ginger and garlic broiled in the Tandoor",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "FISH TANDOORI Chunks of fresh salmon marinated in herbs and spices broiled in the Tandoor",
        "price": "$16.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Tandoori Fresh, king size shrimp gently seasoned and slowly broiled over charcoal in the Tandoor",
        "price": "$16.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tawa Chicken Chicken grilled to perfection with onions, green peppers and oriental spices",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Samosas Fried turnover deliciously filled with mildly spiced savory spiced ground chicken",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Tawa Large King size shrimp sauteed with onions, green peppers and mild tender spices",
        "price": "$17.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tandoori Mixed Grill A combination of our appetizing Tandoori Chicken, Chicken Tikka, Malai kabab, Boti Kabab, Shrimp Tandoori and Fish Tikka",
        "price": "$28.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vegetable Samosa Fried turnover deliciously filled with mildly spiced potatoes and peas",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Aloo Tikki Potato Patties and peas flavoured with chilli peppers and coriander",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Harabhara Kabab Fresh spinach balls scrumptiously spiced and deep fried",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Assorted Pakora Fresh vegetables dipped in a deliciously spiced batter and fried to golden perfection",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Mix Appetizer For Two A combination of vegetable samosa assorted pakoras and papdam",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Aloo Tikki Chaat Crispy aloo tikki topped with chickpeas, yogurt & delicious chutneys.",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Samosa Chaat Vegetable samosas topped with chickpeas, yogurt & delicious chutneys.",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Panir Tikka Marinated cubes of homemade cheese barbecued in charcoal oven",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chili Paneer Cubes of homemade cheese tossed in a sweet spicy and tangy-chili sauce",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Assorted Pakora",
        "price": "$130.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vegetable Samosa",
        "price": "$130.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Aloo Tikki",
        "price": "$130.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Harabhara Kabab",
        "price": "$130.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "All-In-One Pakora",
        "price": "$130.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chili Paneer",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Paneer Tikka",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Tikka",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Malai Chicken Kabab",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tawi Chicken",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken 65",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tandoori Chicken",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seekh Kabab",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meat Samosa",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Navratan Korma",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Malai Kofta",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Paneer Masala",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Vegetable Jalfrezi",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Methi Mutter Malai",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baingan Bhartha",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Aloo Baingan",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Kashmiri Dum Aloo",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Mutter Paneer",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Aloo Gobi",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bhindi Masala",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vegetable Makhani",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Palak Paneer",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Shahi Paneer Bhurjee",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Paneer Karahi",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chilli Paneer",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Vegetable Biryani",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Tikka Masala",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Makhani",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Maharaja (With Bones)",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Cashmere",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Roganjosh",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Curry",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Vindaloo",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilli Chicken",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Madras",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Dhaba Chicken",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Karahi",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Saagwala",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hariyali Chicken",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Korma",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Achari",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Biryani",
        "price": "$150.00 | $85.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Curry",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Vindaloo",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Karahi",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Nargisi",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Roganjosh",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Korma",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Pasanda",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Saagwala",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Achari",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lamb Biryani",
        "price": "$160.00 | $90.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fish Curry",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fish Chilli",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Curry",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Vindaloo",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Karahi",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tawa Shrimp",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Biryani",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tandoori Fish Tikka",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Tandoori",
        "price": "$180.00 | $95.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Dal Makhani",
        "price": "$120.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chana Masala",
        "price": "$120.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Rajma Masala",
        "price": "$140.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Punjabi Kadi Pakora",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jira Rice",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pea Pulav",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Vegetable Mughlai Pulav",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "White Rice",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Naan",
        "price": "$100.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tandoori Roti",
        "price": "$100.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Paratha",
        "price": "$140.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Naan",
        "price": "$110.00 | $60.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Aloo Paratha",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Onion Kulcha",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Paneer Kulcha",
        "price": "$150.00 | $80.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cucumber Raita",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Boondi Raita",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Dahi Wada",
        "price": "$130.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kachumbar",
        "price": "$70.00 | $40.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cut-Indian Salad",
        "price": "$70.00 | $40.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mango Chutney",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Papadum",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Achar",
        "price": "$90.00 | $50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gulab Jamun",
        "price": "$120.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Rasmalai",
        "price": "$120.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gajar Halwa",
        "price": "$120.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kheer",
        "price": "$120.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Panchratan Halwa",
        "price": "$120.00 | $70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
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
        "is_vegetarian": false
      },
      {
        "item": "​ Tuna tartare, cabbage, nori ​ _ ​ Oxtail Papardelle pecorino, parsley, olive oil ​ or ​ Hokkaido Sea Scallops vin blanc, radish, beet vinaigrette ​ _ ​ Black Cod saffron, leeks, hedgehog mushrooms ​ _ ​ Duck fregola, mushroom, black truffle ​ or ​ Wagyu Delmonico potato, mushroom, braised greens ​ _",
        "price": "($10 supplement) | ($30 supplement)",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Menus A La Carte Menu 5-Course Tasting Menu Chef's Tasting Menu Bar Menu Easter Brunch 2026 Mother's Day 2026 Menus",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Menus A La Carte Menu 5-Course Tasting Menu Chef's Tasting Menu Bar Menu Easter Brunch 2026 Mother's Day 2026 Menus",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
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
        "is_vegetarian": false
      },
      {
        "item": "White Pizza Mozzarella & white sauce.",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tomato Basil Pizza Tomatoes, fresh basil & garlic.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hawaiian Pizza Pineapple & ham.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheese Steak Pizza Cheese steak, peppers & onions.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Buffalo Chicken & Blue Cheese Pizza",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "BBQ Chicken Pizza",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meat Lover's Pizza Bacon, ham, sausage, pepperoni.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Parm Pizza",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Trio Cheese White Sauce Pizza Extra cheese, mozzarella & ricotta.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spinaci e Fungi White Sauce Pizza Mushrooms, spinach & garlic.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Veggie Pizza Tomatoes, mushrooms, green peppers, black olives, onions.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "The Works Pizza Onions, green peppers, sausage, pepperoni, mushrooms & black olives.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Fajita Pizza",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Bacon Ranch Pizza",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cheese Pizza",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Margherita Pizza Italian plum tomato sauce, fresh mozzarella, basil & olive oil.",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Pizza Alla Vodka Pizza Fresh mozzarella, tomato cream vodka sauce, seasonal fresh mushrooms, peas & prosciutto di parma.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Arugula Con Prosciutto Pizza Fresh mozzarella, Sliced prosciutto di Parma topped with baby arugula, shaved Parmigiano & drizzled with balsamic reduction.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Clam Pie Oreganata Fresh mozzarella, baby clams & our gourmet bread crumbs seasoned & baked to perfection.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mushroom Madness Pizza Fresh mozzarella, freshly seasoned sliced mushrooms, shitake mushrooms, plum tomato sauce & drizzled with imported white truffle oil.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Quattro Stagioni 4 Seasons Pizza Plum tomato sauce, fresh mozzarella, sun dried tomatoes, geate olives, prosciutto di parma, & freshly seasoned mushrooms, great for any season.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Quattro Formaggi 4 Cheese Pizza Fresh mozzarella, plum tomato sauce & a delicious blend of imported Provolone, fontina & pecorino Romano cheese.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Smoking Genteel Pizza Smoked fresh mozzarella, roasted pepper cream sauce wood-fired roasted peppers, sausage & topped with Imported Pecorino Romano.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Dawn's Burrata Pizza Fresh mozzarella, garlic sauce, burrata, cherry tomatoes, basil & balsamic syrup.",
        "price": "$18.70",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hot Honey Pizza Cup & char pepperoni & hot honey.",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cauliflower Cheese Pizza",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gluten Free Cauliflower Napolitana Plain Pie",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gluten Free Cauliflower White Pizza Mozzarella & white sauce.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gluten Free Cauliflower Tomato Basil Pizza Tomatoes, fresh basil & garlic.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gluten Free Cauliflower Hawaiian Pizza Pineapple & ham.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cauliflower Cheese Steak Pizza Cheese steak, peppers & onions.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cauliflower Buffalo Chicken & Blue Cheese Pizza",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cauliflower BBQ Chicken Pizza",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cauliflower Meat Lover's Pizza Bacon, ham, sausage, pepperoni.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cauliflower Chicken Parm Pizza",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cauliflower Trio Cheese White Sauce Pizza Extra cheese, mozzarella & ricotta.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gluten Free Cauliflower Spinaci e Fungi White Sauce Pizza Mushrooms, spinach & garlic.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gluten Free Cauliflower Veggie Pizza Tomatoes, mushrooms, green peppers, black olives, onions.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gluten Free Cauliflower The Works Pizza Onions, green peppers, sausage, pepperoni, mushrooms & black olives.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cauliflower Chicken Fajita Pizza",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cauliflower Chicken Bacon Ranch Pizza",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cauliflower Margherita Pizza Italian plum tomato sauce, fresh mozzarella, basil & olive oil.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gluten Free Cauliflower Pizza Alla Vodka Pizza Fresh mozzarella, tomato cream vodka sauce, seasonal fresh mushrooms, peas & prosciutto di parma.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cauliflower Arugula Con Prosciutto Pizza Fresh mozzarella, Sliced prosciutto di Parma topped with baby arugula, shaved Parmigiano & drizzled with balsamic reduction.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cauliflower Clam Pie Oreganata Fresh mozzarella, baby clams & our gourmet bread crumbs seasoned & baked to perfection.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cauliflower Mushroom Madness Pizza Fresh mozzarella, freshly seasoned sliced mushrooms, shitake mushrooms, plum tomato sauce & drizzled with imported white truffle oil.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gluten Free Cauliflower Quattro Stagioni 4 Seasons Pizza Plum tomato sauce, fresh mozzarella, sun dried tomatoes, geate olives, prosciutto di parma, & freshly seasoned mushrooms, great for any season.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cauliflower Quattro Formaggi 4 Cheese Pizza Fresh mozzarella, plum tomato sauce & a delicious blend of imported Provolone, fontina & pecorino Romano cheese.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gluten Free Cauliflower Smoking Genteel Pizza Smoked fresh mozzarella, roasted pepper cream sauce wood-fired roasted peppers, sausage & topped with Imported Pecorino Romano.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Cauliflower Dawn's Burrata Pizza Fresh mozzarella, garlic sauce, burrata, cherry tomatoes, basil & balsamic syrup.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gluten Free Cauliflower Hot Honey Pizza Cup & char pepperoni & hot honey.",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Bread",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Bread with Melted Mozzarella Cheese",
        "price": "$6.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "French Fries",
        "price": "$6.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mozzarella Sticks",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Tenders",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheese Fries",
        "price": "$8.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Fresh Mussels",
        "price": "$16.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fried Calamari",
        "price": "$16.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Buffalo Wings",
        "price": "$15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Breaded Zucchini Sticks",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Broccoli Bites",
        "price": "$8.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Loaded Fries Fries with bacon.",
        "price": "$9.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Buffalo Fries Hot sauce & blue cheese dressing.",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cajun Fries",
        "price": "$7.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Knots",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jalapeno Poppers",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Side Meatballs",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Side Broccoli",
        "price": "$5.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cream of Tomato Basil Soup",
        "price": "$6.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garden Salad Spring mix, tomatoes, onions, peppers, cucumbers with balsamic dressing.",
        "price": "$11.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Verde Salad Spring mix, sliced apples, tomatoes, walnuts, crumbled blue cheese and blue cheese dressing.",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Caesar Salad Romaine lettuce and homemade croutons tossed with a caesar dressing.",
        "price": "$12.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Prosciutto, Mozzarella & Tomato Salad Mozzarella wrapped in prosciutto and tomato servel over spring mix with a balsamic vinaigrette.",
        "price": "$15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spinach Salad Spinach, bacon, fresh mozzarella, tomatoes, boiled eggs and creamy italian dressing.",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Antipasto Salad Mozzarella, ham, pepperoni, salami, roasted peppers black olive, artichokes over spring mix with creamy italian dressing.",
        "price": "$15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sauteed Scallop Salad Scallops sauteed in a mediterranean mix of vegetables over spring mix.",
        "price": "$15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Caprese Salad Sliced tomatoes, fresh mozzarella, basil, roasted peppers drizzled with balsamic syrup.",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Arugula Salad Pears, walnuts, tomatoes, lemon vinaigrette.",
        "price": "$12.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brianna’s Strawberry Salad Spring mix, romaine, strawberries, walnuts, blue cheese crumbled & balsamic syrup.",
        "price": "$14.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Burrata Salad Spring mix, tomato, and roasted peppers drizzled with balsamic.",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Greek Salad Iceberg lettuce, tomato, cucumbers, onions, kalamata olives feta cheese, & peppers with greek dressing.",
        "price": "$15.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Calzone Calzones & Strombolis. Filled with ricotta & mozzarella cheese",
        "price": "$13.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Stromboli Calzones & Strombolis. Mozzarella cheese wrapped in pizza dough",
        "price": "$13.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Calzedia Calzones & Strombolis. Stuffed with fresh tomato, chicken, spinach, mozzarella & pesto dipping sauce",
        "price": "$15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheesesteak Sandwich",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Cheesesteak Sandwich",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Italian Sub Ham, pepperoni, salami, mozzarella, lettuce, tomato, onions, oil & vinegar served on hoagie roll.",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Grilled Chicken Mozzarella Sandwich Chicken, melted mozzarella, lettuce, tomato, onions & mayo served on a hoagie roll.",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tomato, Eggplant & Mozzarella Sandwich Tomato, eggplant & mozzarella drizzled with balsamic a served on a hoagie roll.",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Smoked Turkey Sandwich Turkey, lettuce, sliced tomatoes, onion drizzle with oil and vinegar severd on a hoagie roll.",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eggplant Parmigiana Sandwich",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Grilled Buffalo Chicken Sandwich Chicken tossed in buffalo sauce, lettuce & blue cheese served on a hoagie roll.",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meatball Parmigiana Sandwich",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Parmigiana Sandwich",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Drunken Chicken Parmigiana Sandwich With vodka sauce.",
        "price": "$11.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sausage Parmigiana Sandwich",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sausage, Peppers & Onions Sandwich",
        "price": "$9.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spring Veggie Wrap Tomato, eggplant, mushrooms, roasted peppers, mozzarella, lettuce & balsamic.",
        "price": "$12.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cajun Chicken Sandwich Cajun Chicken, lettuce, tomato, onions & mayo served on a hoagie roll.",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Turkey Wrap Turkey, tomatoes, roasted peppers, mozzarella, lettuce & honey mustard.",
        "price": "$12.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Veal Parmigiana Sandwich",
        "price": "$11.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Caesar Wrap",
        "price": "$12.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brielle’s Chicken Caprese Sandwich Grilled chicken, arugula, sliced tomato, fresh mozzarella, roasted peppers and balsamic syrup",
        "price": "$10.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Cutlet Sandwich Chicken cutlet with lettuce, tomato, onions & mayo.",
        "price": "$10.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spaghetti Marinara Pasta",
        "price": "$15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spaghetti with Meatballs Pasta",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Penne with Broccoli Pasta. Penne and broccoli in garlic and oil or marinara sauce",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cheese Tortellini Marinara Pasta",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Pasta Alfredo Pasta",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheese Ravioli Pasta",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spaghetti Vongole Pasta. Baby clams sautéed in white wine and garlic or in a marinara sauce",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Linguine & Sun Dried Tomatoes Pasta. Spinach & sun-dried tomatoes served in a light alfredo sauce",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Baked Ziti Pasta. Ricotta cheese, marinara, topped with melted mozzarella",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spaghetti Bolognese Pasta. With pink meat sauce",
        "price": "$18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fusilli Puttanesca Pasta. Fusilli pasta, black olives, capers and anchovies served in a spicy sauce",
        "price": "$18.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Penne Vodka Pasta. Penne served in a pink vodka cream sauce",
        "price": "$17.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cavatelli & Sausage Pasta. Cavatelli with hot sausage and broccoli rabe served in a light marinara sauce",
        "price": "$19.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Penne with Broccoli Rabe & Sausage Pasta. Sauteed broccoli rabe with white wine, garlic, olive oil and sausage",
        "price": "$19.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tortellini Fungi Pasta. Tortellini, wild mushroom, chicken, peas and prosciutto in a demi cream sauce",
        "price": "$19.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fettuccine Alfredo Pasta",
        "price": "$18.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Penne Classico Pasta. Fresh diced tomatoes, garlic, basil, fresh mozzarella with a touch of marinara",
        "price": "$18.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pasta Arrabiata Pasta. Pepperoncini peppers, diced tomatoes, fresh garlic & marinara",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Penne Pasta",
        "price": "$13.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eggplant Parmigiana Fresh breaded eggplant served with our own homemade marinara sauce and topped with mozzarella and served on a bed of linguini.",
        "price": "$20.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Francaise Chicken breast sauteed with lemon butter sauce served over linguini.",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Marsala Grilled breast of chicken with sauteed mushrooms and our own marsala wine sauce served on a bed of linguini.",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Parmigiana Lightly breaded chicken breasts served with our homemade marinara sauce and mozzarella cheese over a bed of linguini.",
        "price": "$22.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken A La Gentel Sauteed Chicken with Prosciutto, Spinach, Tomatoes and Fresh Mozzarella. Served Napoleon Style",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Veal Francaise",
        "price": "$23.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Veal Parmigiana Fresh Veal Cutlets Served on a Bed of Linguini with Our Homemade Marinara Sauce. and Topped with Melted Mozzarella",
        "price": "$23.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Veal Marsala Veal gently sauteed in our own marsala wine sauce with fresh mushrooms. Served over a bed a linguini.",
        "price": "$23.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eggplant Rollotini Breaded eggplant stuffed with spinach, ricotta cheese and garlic topped with our homemade marinara sauce and melted mozzarella served with linguini.",
        "price": "$21.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Veal Saltimbucca Pan seared veal cutlet topped with sliced ham, spinach. Mushrooms and melted mozzarella served over linguini in a demi sauce..",
        "price": "$24.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Saltimbucca Pan seared chicken topped with sliced ham, spinach, mushrooms and melted mozzarella, served over linguini in a demi sauce.",
        "price": "$23.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Chicken Marsala",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Chicken Frances",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Calmarone Breaded and fried calamari served sauteed in our homemade marinara sauce. Served over linguini.",
        "price": "$22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Fusilli Jumbo shrimp with sauteed mushrooms, shallots, roasted red peppers and artichoke hearts in a lemon white wine sauce.",
        "price": "$22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Pomodoro Jumbo shrimp, diced tomatoes, garlic feta cheese and baby spinach sauteed in white wine served over fettuccini.",
        "price": "$22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Seafood Fra Diavolo Mussels, shrimp, scallops, clams and calamari served over linguini in a spicy marinara.",
        "price": "$24.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shrimp Scampi Shrimp sauteed with white wine and fresh garlic over linguini.",
        "price": "$22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mussels Linguine Mussels sauteed in a white wine garlic sauce or in a homemade marinara sauce over linguini.",
        "price": "$22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tea",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Coffee",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Soda",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Iced Tea",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lemonade",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pellegrino",
        "price": "$2.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cannoli",
        "price": "$4.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Zeppoli",
        "price": "$6.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Tenders Catering",
        "price": "$47.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Fries Catering",
        "price": "$35.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gralic Knots Catering",
        "price": "$25.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Turkey Sub Catering",
        "price": "$70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Italian Sub Catering",
        "price": "$70.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Grilled Chicken Sandwich With roasted peppers & mixed greens.",
        "price": "$82.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caesar Salad Catering 24-HOUR NOTICE.",
        "price": "$45.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garden Salad Catering 24-HOUR NOTICE.",
        "price": "$45.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Green Salad 24-HOUR NOTICE.",
        "price": "$50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brianna's Strawberry Salad 24-HOUR NOTICE.",
        "price": "$50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Antipasto Salad Catering 24-HOUR NOTICE.",
        "price": "$55.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mussels Marinara Catering 24-HOUR NOTICE.",
        "price": "$60.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meatballs Marinara Catering 24-HOUR NOTICE.",
        "price": "$60.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Italian Sausage Marinara Catering 24-HOUR NOTICE.",
        "price": "$60.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sausage, Peppers, Onions Catering 24-HOUR NOTICE.",
        "price": "$65.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Penne Classico Catering 24-HOUR NOTICE.",
        "price": "$65.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Ziti Catering 24-HOUR NOTICE.",
        "price": "$52.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Penne Vodka Catering 24-HOUR NOTICE.",
        "price": "$55.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spaghetti Bolognese Catering 24-HOUR NOTICE.",
        "price": "$60.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cavatelli Sausage Catering 24-HOUR NOTICE.",
        "price": "$60.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Penne Broccoli Catering 24-HOUR NOTICE.",
        "price": "$55.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Spaghetti Marinara Catering 24-HOUR NOTICE.",
        "price": "$44.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baked Manicotti Catering 24-HOUR NOTICE.",
        "price": "$45.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Marsala Catering 24-HOUR NOTICE.",
        "price": "$65.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Eggplant Parmigiana Catering 24-HOUR NOTICE.",
        "price": "$50.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chicken Parmigiana Catering 24-HOUR NOTICE.",
        "price": "$65.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Francaise Catering 24-HOUR NOTICE.",
        "price": "$65.00",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Napolitana Plain Pie Non Display Products",
        "price": "$18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
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
        "is_vegetarian": false
      },
      {
        "item": "$ 17.95 THE VILLAGE SALAD (HORIATIKI) Local tomato, red onions, cucumber, green peppers, feta cheese, Kalamata olives, topped with organic olive oil and vinegar (gf,vg,vn*) $ 17.95",
        "price": "$ 17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 17.95 MAROULI SALAD Fresh romaine lettuce mixed with olive oil, herbs, and feta cheese $ 17.95",
        "price": "$ 17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 17.95 BEETS SALAD Beets, arugula, oranges, walnuts, fresh Greek herbs, topped with yogurt sauce and balsamic vinaigrette (gf,vg) $ 17.95",
        "price": "$ 17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 24.95 GREEK SPREADS Tzatziki, spicy feta, eggplant & hummus served with pita bread (gf,vg) $ 24.95",
        "price": "$ 24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 26.95 OCTOPUS Grilled marinated octopus with fava beans purée, Greek herbs, olive oil vinaigrette (gf) $ 26.95",
        "price": "$ 26.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 18.95 FETA FOURNOU Baked feta with tomatoes, peppers, olive oil and herbs, baked in oven $ 18.95",
        "price": "$ 18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 21.95 FRIED CALAMARI Fried squid olive and lemon vinaigrette Greek herbs & marinara sauce $ 21.95",
        "price": "$ 21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 18.95 HALLOUMI Grilled halloumi cheese, drunken figs and honey with balsamic glaze (gf,vg) $ 18.95",
        "price": "$ 18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 19.95 ZUCCHINI FRITTERS Pan fried savory zucchini patties made from shredded zucchini, eggs and flour $ 19.95",
        "price": "$ 19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 15.95 DOLMADES Grape leaves stuffed with rice & Greek herbs, yogurt (gf, vg, vn*) $ 15.95",
        "price": "$ 15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 10.95 HUMMUS Chick pea, garlic, lemon, tahini & olive oil served with pita bread (vg,vn) $ 10.95",
        "price": "$ 10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 19.95 KEFTEDES Greek homestyle meatballs $ 19.95",
        "price": "$ 19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 17.95 GIGANTES large white beans baked in rich herby tomato sauce w/ onions, garlic, olive oil $ 17.95",
        "price": "$ 17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 22.95 SHRIMP SAGANAKI Shrimp with cherry tomoatoes, feta, and ouzo $ 22.95",
        "price": "$ 22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 26.95 GREEK GYRO PLATTER Choice of (Pork, chicken, beef/lamb, veggies, tomato fritters), wrapped in pita with tzatziki, onions & tomatoes, served with village salad & one side (gf*,vg*,vn*) $ 26.95",
        "price": "$ 26.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 34.95 LAMB SOUVLAKI Grilled lamb kebab served with village salad & one side (gf) $ 34.95",
        "price": "$ 34.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 36.95 STIFADO BEEF BRISKET Slow cooked tender brisket with mashed potatoes $ 36.95",
        "price": "$ 36.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 44.95 LAMB CHOPS Grilled marinated lamb chops, village salad & one side (gf) $ 44.95",
        "price": "$ 44.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 26.95 CHICKEN SOUVLAKI Grilled chicken kebab served with village salad & one side (gf) $ 26.95",
        "price": "$ 26.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 32.95 VILLAGE STUFFED CHICKEN Stuffed chicken breast filled with feta, spinach, tomatoes, onions, peppers, dill, lemon butter sauce, village salad & one side (gf) $ 32.95",
        "price": "$ 32.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 98.95 MIX GRILL PLATTER FOR 2 Pork gyro, chicken gyro, beef/ lamb gyro, Greek sausage, sticks of pork & chicken souvlaki, keftedes, Greek fries, pita bread, grilled vegetables, feta cheese & tomatoes $ 98.95",
        "price": "$ 98.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 179.95 MIX GRILL PLATTER FOR 4 Pork gyro, chicken gyro, beef/ lamb gyro, Greek sausage, sticks of pork & chicken souvlaki, keftedes, Greek fries, pita bread, grilled vegetables, feta cheese & tomatoes $ 179.95",
        "price": "$ 179.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 28.95 MOUSAKAS Slow cooked ground beef, eggplant, potatoes & bechamel sauce on the top $ 28.95",
        "price": "$ 28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 28.95 PASTITSIO Greek style lasagna with slow cooked ground beef and bechamel sauce on the top $ 28.95",
        "price": "$ 28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 41.95 GRILLED BRANZINO Grilled whole bone - in branzino with olive oil lemon vinaigrette, served with village salad & one side (gf) $ 41.95",
        "price": "$ 41.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 24.95 GREEK TERINA Eggplant layers with cheese, tomato, olive oil and herbs $ 24.95",
        "price": "$ 24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 33.95 SOLOMOS Grilled Alaskan salmon served with village salad & one side (gf) $ 33.95",
        "price": "$ 33.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 23.95 HOMESTYLE SPINACH PIE Served with village salad (vg) $ 23.95",
        "price": "$ 23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 30.95 SHRIMP SOUVLAKI Shrimp kebab over rice, baby kale & avocado (gf) $ 30.95",
        "price": "$ 30.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 38.95 GREEK PAELLA FOR ONE Variety of shrimp, mussels, calamari, octopus, chicken, greek sausage, greek herbs, olive oil & pita bread $ 38.95",
        "price": "$ 38.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 76.95 GREEK PAELLA FOR TWO Variety of shrimp, mussels, calamari, octopus, chicken, greek sausage, greek herbs, olive oil & pita bread $ 76.95",
        "price": "$ 76.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 24.95 STUFFED PEPPERS Roasted bell peppers with rice, eggplant, tomatoes, Greek herbs, olive oil, served with lemon potatoes & yogurt (gf,vg,vn*) $ 24.95",
        "price": "$ 24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 8.95 GREEK FRIES Hand cut fries topped with feta & oregano (vg,vn*) $ 8.95",
        "price": "$ 8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 8.95 GREEK STYLE LEMON POTATOES Baked in the oven potatoes with lemon juice and olive oil (vg,vn) $ 8.95",
        "price": "$ 8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 8.95 GREEK RICE Rice with olive oil and lemon (vg) $ 8.95",
        "price": "$ 8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 8.95 GREEK SALAD Tomato, cucumbers, onions, with feta cheese and olives (vg,vn*) $ 8.95",
        "price": "$ 8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 12.95 GALAKTOBOUREKO Fillo dough filled with semolina custard, topped with Greek honey & syrup $ 12.95",
        "price": "$ 12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 12.95 BAKLAVA Fillo dough filled with crushed almond & walnuts, topped with Greek honey & syrup $ 12.95",
        "price": "$ 12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 12.95 BOUGATSA Handmade dough filled with a blend of semolina custard $ 12.95",
        "price": "$ 12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 12.95 PORTOKALOPITA Homemade orange cake $ 12.95",
        "price": "$ 12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 12.95 EKMEK KATAIFI Shredded dough with Greek honey, layers of Greek and french cream topped with walnuts $ 12.95",
        "price": "$ 12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 3.95",
        "price": "$ 3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 4.95 AMERICANO $ 4.95",
        "price": "$ 4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 6.95 LATTE / CAPPUCCINO $ 6.95",
        "price": "$ 6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 5.95",
        "price": "$ 5.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 6.95 GREEK FRAPPE (ICED) $ 6.95",
        "price": "$ 6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 3.95 AMERICAN COFFEE $ 3.95",
        "price": "$ 3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 5.95 GREEK MOUNTAIN TEA $ 5.95",
        "price": "$ 5.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 4.95 SODA / ICED TEA / LEMONADE $ 4.95",
        "price": "$ 4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 14.95 THE GREEK PARFAIT Granola, organic Greek yogurt, fresh fruits & Greek honey $ 14.95",
        "price": "$ 14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 15.95 GREEK STYLE PANCAKES Topped with crushed walnuts, powder sugar, maple syrup 15.95 | add fresh fruits 4.50 $ 15.95",
        "price": "$ 15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 15.95 GREEK FRENCH TOAST Topped with crushed walnuts, sugar powder, maple syrup 15.95 | add fresh fruits 4.50 $ 15.95",
        "price": "$ 15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 14.95 SPANAKI SANDWICH Scrambled eggs, local spinach, cherry tomatoes, feta cheese served with Greek fries $ 14.95",
        "price": "$ 14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 16.95 THE SUPER GREEK Three over medium eggs, onions, peppers, cherry tomatoes, Kalamata olives, feta, mushrooms, avocado & Greek fries 16.95 | add Greek sausage 2.95 $ 16.95",
        "price": "$ 16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 14.95 LOCAL SPINACH FETA OMELETTE Fresh spinach, feta, cherry tomatoes, onions, with Greek fries $ 14.95",
        "price": "$ 14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "$ 15.95 LOCAL GYRO OMELETTE Choice of (beef/lamb, pork) onions, cherry tomatoes, feta cheese & Greek fries $ 15.95",
        "price": "$ 15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 16.95 LAMB BURGER Lamb patty, spicy feta yogurt sauce, kasseri cheese, onions, tomatoes served on pita & Greek fries $ 16.95",
        "price": "$ 16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$ 4.95 Breakfast sides (4.95) Bacon, Greek sausage, Greek fries, Fruits, Avocado $ 4.95",
        "price": "$ 4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
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
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Private Dining $39 Two Course Brunch Menu $49 Three Course Brunch Menu $59 Three Course Dinner Menu $69 Four Course Dinner Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$39 Two Course Brunch Menu",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$49 Three Course Brunch Menu",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$59 Three Course Dinner Menu",
        "price": "$59",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "$69 Four Course Dinner Menu",
        "price": "$69",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
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
        "is_vegetarian": false
      },
      {
        "item": "baguettes and 7 Grain Heroes (lettuce, tomato, onion included) Cold Sandwiches and Hoagies",
        "price": "$3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "OatmealRaisinCookies Cold Sandwiches and Hoagies. w/creamcheese&lox",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Double FudgeBrownie Hoagie",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "w/egg Olives Famous Chicken Salad. PorkRoll&Cheese",
        "price": "$3.79",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "RockyRoad Brownie Olives Famous Chicken Salad",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baklava (best in town!) Egg White Sandwich",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Western Omelet Egg White Sandwich",
        "price": "$8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pecan Bar Egg White Sandwich",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Turkey Breast Egg White Sandwich",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Egg White Omelet (Choice of2 of the following: Spinach, Egg White Sandwich. Lemon Bar",
        "price": "$3.79",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Ham Egg White Sandwich",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Onion, Tomato, or Pepper) Egg White Sandwich. Baby Cakes (assorted flavors)",
        "price": "$6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Turbo Omelet (Six egg whites with grilled chicken or Tuna Salad (white albacore)",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Assorted Cheese Tuna Salad (white albacore)",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Linzer Tarts Egg Salad",
        "price": "$3.79",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "w/ Greek Honey or Banana Egg Salad",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "CaramelFlan Seafood Salad",
        "price": "$3.49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Muffin (assorted flavors) Seafood Salad",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Plain Croissant/Chocolate Croissant Seafood Salad",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Grilled Chicken w/Fresh Mozzarlla & Tomato on a Baguette BreakfastSpecials. #1 Egg Whites with spinach, feta and tomato ona",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Extras: Cheese BreakfastSpecials",
        "price": "$1 | $1 | $2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "whole wheat wrap Beverages&Snacks",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Peppers Beverages&Snacks",
        "price": "$2 | $1",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "#2Egg Whites with avocado and sliced tomatoon apita Beverages&Snacks",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Avocado Beverages&Snacks",
        "price": "$2 | $2 | $4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "lg Beverages&Snacks",
        "price": "$2.10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sm Beverages&Snacks. Fresh brewed coffee (reg./decaf.) #3 — Two eggs over easy or hard on corn tortillas",
        "price": "$1.85",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Gluten Free Wrap Beverages&Snacks",
        "price": "$2 | $2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "1g Beverages&Snacks",
        "price": "$2.10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "with cheese Beverages&Snacks",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "toasted 7-grain bread Beverages&Snacks",
        "price": "$8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Milk Beverages&Snacks",
        "price": "$2.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "ChocolateMilk Beverages&Snacks. Fresh Mozzarella, Tomato & Basil #5—Protein Egg Sandwich - Six Egg whites w/your choice of",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Soda (20 oz.) Beverages&Snacks",
        "price": "$2.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "turkey or grilled chicken on a whole wheat wrap Beverages&Snacks",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Waters (sm./lg.) Beverages&Snacks",
        "price": "$1.75 | $2.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sparkling Water (sm./lg.) Beverages&Snacks",
        "price": "$3 | $4.99",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "white tortilla wrap w/avocado and salsa verde Beverages&Snacks",
        "price": "$8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chips (small bags) Beverages&Snacks",
        "price": "$2.49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Middle Eastern Platter (w/pita) Beverages&Snacks",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "#7The SoCal-Two fried eggs with avocado, sprouts and Beverages&Snacks",
        "price": "$9.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "tomatoes on sliced 7-grain toast Greek Salad (w/pita)",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "assortment of prepared food made fresh Greek Salad (w/pita). Falafel Platter (tzatziki, hummus, grape leaves, pita)",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "on a croissant Greek Salad (w/pita)",
        "price": "$7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Avocado & Salsa Verde on a bed ofgarden salad",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Cheddar, Avocado, house Spicy Aioli on Brioche on a bed ofgarden salad. Spanakopita (Greek spinach pie)",
        "price": "$6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "(Your Choice of Bacon or Sausage) on a bed ofgarden salad. Ives",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Halloumi Pita (with fries, lettuce, tomato, tzatziki & hot sauce) on a bed ofgarden salad. Add avocado or tator tots to any sandwich+s2.00 each Hot Specials",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "We have an assortmentof fresh salads available on a bed ofgarden salad. daily...delicious! Check out our lunch and dinner specials",
        "price": "$9.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gyro in Pita (with tzatiki sauce on a gilled pita, lettuce, tomato, onion) on a bed ofgarden salad. Online! Grilled Italian Chicken Sandwich (w/provolone, lettuce, tomato, mayo)",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Souvlaki in Pita (gilled chicken, tzatziki, letuce, tomato, onion) on a bed ofgarden salad. Good Food... Always",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Malibu Chicken Souvlaki (w/avocado, crumbled feta, tzatziki,lettuce, tomato) on a bed ofgarden salad",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Teriyaki Chicken Sandwich (withmontereyjack,lettuce, tomato, mayo) Kid's Menu",
        "price": "$12.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "SantaFe Chicken Sandwich(w/bacon, avocado, monterey jack, chipotle mayo) Kid's Menu",
        "price": "$14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sm Peanut Butter & Jelly Sandwich. Meatball Sub (w/melted provolone)",
        "price": "$10.95 | $18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Nutella on White or Wheat Toast Peanut Butter & Jelly Sandwich",
        "price": "$4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Moussaka (Wonderfully delicious Greek eggplant casserole) Peanut Butter & Jelly Sandwich",
        "price": "$5.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Hot Dog on Torpedo Roll Peanut Butter & Jelly Sandwich. 609-921-1569",
        "price": "$5.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Boars Head Hot Dog (on torpedo roll) Peanut Butter & Jelly Sandwich",
        "price": "$8.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "B.L.T. (Bacon, lettuce, tomato on white toast with mahyo Peanut Butter & Jelly Sandwich. 22 Witherspoon Street·Princeton B.A.L.T. (Bacon, avocado, lettuce, tomato on 7-grain toast withranch dressing)",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sm Peanut Butter & Jelly Sandwich. French Fries Prices subiect to change www.olivesprinceton.com",
        "price": "$5.95 | $7.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "BROWN SUGAR GLAZED BONELESS HAM (8-12ppl)",
        "price": "$87",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "BONELESS ROASTED LEG OF LAMB sliced lemon herb roasted leg of lamb (4 lbs min, 8 ppl) lb",
        "price": "$23",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "GRILLED SALMON - with tomato and basil or yogurt cucumber dill sauce Minimum 2 pieces per piece WHOLE ROASTED TENDERLOIN OF BEEF",
        "price": "$18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "w/merlot wine sauce or creamy horseradish sauce (6-8ppl) 5 lb",
        "price": "$265",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "PENNE VODKA 9x13 (8-12ppl) VEGETABLES & SIDES DISHES (minimum 2 lbs.)",
        "price": "$55",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Herb Roasted or Greek Lemon Potatoes /lb",
        "price": "$9",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Wild Rice Pilaf /lb",
        "price": "$9",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Asparagus with Red Peppers & Cashews /lb",
        "price": "$14",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Green Beans Almondine /lb",
        "price": "$12",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Sweet Potato Wedges /lb",
        "price": "$12",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Balsamic Grilled Vegetables /lb Order by 4 p.m. Monday, March 30th Call us at 609-921-1569 to place your orders!",
        "price": "$12",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Mini Maryland Crabcakes with Cocktail Sauce Menu 2026. dz",
        "price": "$36",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Grilled Baby Lamb Chops with Tzatziki Sauce Menu 2026. dz",
        "price": "$49",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Buffalo Chicken Spring Rolls Menu 2026. dz",
        "price": "$24",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Assorted Mini Quiche Menu 2026. dz",
        "price": "$24",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pigs in a Blanket Menu 2026. dz",
        "price": "$18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spinach Phyllo Triangles Menu 2026. dz",
        "price": "$24",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Vegetable Spring Rolls Menu 2026. dz",
        "price": "$14",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Jumbo Coconut Shrimp Menu 2026. dz Minimum 2 dozen",
        "price": "$30",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Small (3 lbs.) SHRIMP COCKTAIL",
        "price": "$110 | $198",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "prepared in oven ready dish (6-10ppl) SPINACH ARTICHOKE DIP",
        "price": "$39",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Bacon Cheddar, Ham & Brie, Broccoli Cheddar, Spinach Mushroom (10”, 4-6 ppl) HOMEMADE QUICHE",
        "price": "$30",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "small (5-8 ppl) BREAKFAST TRAY",
        "price": "$35 | $55 | $85",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "butter, & jelly (min 6ppl) BAGEL TRAY. pp Olives Open April 5th 8 a.m. – 3 p.m",
        "price": "$3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "ganache and beautifully decorated EASTER EGG CAKE",
        "price": "$40",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "with vanilla butter cream topped with white chocolate shavings 3-D EASTER BUNNY CAKE",
        "price": "$50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "fresh lemon curd LEMON CHIFFON",
        "price": "$55",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "decorated with walnuts CARROT CAKE",
        "price": "$45",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "topped with fresh whipped cream and glazed strawberries STRAWBERRY & CREAM CHEESECAKE",
        "price": "$45",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "vanilla, chocolate, raspberry, pistachio (1 dozen min) FRENCH MACARONS. ea",
        "price": "$3.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "choice of vanilla or chocolate SPRING & EASTER CUPCAKES. each",
        "price": "$3.79",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "with fresh toasted meringue RASPBERRY LEMON MERINGUE TART",
        "price": "$40",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "small (8 ppl) COOKIE TRAY",
        "price": "$54 | $89",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "small (8 ppl) MINIATURE SWEETS",
        "price": "$64 | $112",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "EASTER BREAD long braided MINIATURE SWEETS",
        "price": "$12 | $15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "CIABATTA sm MINIATURE SWEETS",
        "price": "$5 | $7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "small (2-4ppl) GREEN SALADS. CAESAR SALAD- romaine with homemade croutons, grated parmesan, and our signature caesar dressing SPINACH STRAWBERRY SALAD - with pecans & goat cheese with a poppy seed dressing Easter",
        "price": "$21 | $49 | $75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
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
        "is_vegetarian": false
      },
      {
        "item": "Eye of The Tiger...$19/$26",
        "price": "$19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hooked on Honey Pie...$18.75/$24.50",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "The V Thang..$19.50/$26",
        "price": "$19.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Meat Meat Meat Pie...$19.50/$26",
        "price": "$19.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Buffalo Soldier..$18/$23",
        "price": "$18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "The Greek..$19.50/$26",
        "price": "$19.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "The Diva...$21.50/$27.50",
        "price": "$21.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "The French Onion...$19/$24",
        "price": "$19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jamming With You...$18/$24",
        "price": "$18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Classic Pies...$10/$14/$18.50",
        "price": "$10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brooklyn Pie...$10.50/$15/$20",
        "price": "$10.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Sauceless Pie...$11/$16.50/$21",
        "price": "$11",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tomato Pie...$9.50/$13/$17.50",
        "price": "$9.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Arugula Salad...$8.50",
        "price": "$8.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Baby Kale...$8.50",
        "price": "$8.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Extra Virgin Olive Oil...$12/$20",
        "price": "$12",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Add chicken....$3.75",
        "price": "$3.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pepperoni Slider...$5.25",
        "price": "$5.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken or Eggplant Parm Slider...$5.75",
        "price": "$5.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Garlic Bread Pizza...$9.50",
        "price": "$9.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Large Bavarian Pretzel...$11",
        "price": "$11",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Nutella Pie...$11.50",
        "price": "$11.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
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
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Waffle",
        "price": "$17.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free French Toast",
        "price": "$18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "One Sausage Link Pj’s Famous Breakfast Combo",
        "price": "$18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "upgrade Pancakes Pj’s Famous Breakfast Combo",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sub French Toast or Waffle Pj’s Famous Breakfast Combo. with Mashed Brown Potatoes & Toast",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "French Toast, Waffle or Upgrade Egg Breakfast",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "substitute Bagel* OR. served with Fresh Fruit or Mashed Brown Potatoes",
        "price": "$2 | $3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "substitute Bagel, Croissant, Wrap, or Gluten Free Breakfast Classics. Lox, Stock & Bagel",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "lox, tomato, onion, capers, cream cheese Breakfast Classics",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "with choice of meat and cheese, kaiser Fried Egg Sandwich. Trenton Pork Roll, Egg, & Cheese",
        "price": "$14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "american, sauteed onions, tomato, kaiser Fried Egg Sandwich. Huevos Ranchero Wrap eggs over hard, sausage,",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "ranchero sauce Fried Egg Sandwich",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "eggs, chorizo, pepper jack, potatoes, peppers Breakfast Burrito",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "eggs, bacon, cheddar, guac, sour cream Breakfast Scramble Quesadilla. Skillets with Fresh Fruit or Mashed Browns Benedicts",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "canadian bacon, on english muffin Breakfast Scramble Quesadilla. Sammy Benny",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "lox, onions, capers, on english muffin Breakfast Scramble Quesadilla. Porky Benny famous Trenton pork roll, sautéed onions, on",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "english muffin Breakfast Scramble Quesadilla. Veggie Benny grilled portabello caps, wilted spinach, roasted",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "red peppers, on english muffin Breakfast Scramble Quesadilla. Shakshuka over easy eggs, spicy crushed tomato sauce,",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "onions, peppers, spinach, feta, crostini Breakfast Scramble Quesadilla. Mexishuka scrambled eggs, crumbled chorizo, mashed",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "avocado, pico de gallo, queso fresco Breakfast Scramble Quesadilla. Country Boy Hash over easy eggs, diced sirloin, peppers &",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "onions, over mashed browns Breakfast Scramble Quesadilla. Indian Ramen ramen noodles, diced tomato, onions, peppers, shredded amul, cilantro, fried over",
        "price": "$21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "easy egg Breakfast Scramble Quesadilla. Poached Eggs with Hollandaise Sauce Buttermilk Pancakes our signature Large Buttermilk Pancakes since 1962",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pigs in a Blanket Breakfast Scramble Quesadilla",
        "price": "$19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Nutty Multi-Grain Breakfast Scramble Quesadilla",
        "price": "$11.50 | $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Silver Dollars Breakfast Scramble Quesadilla",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pecan Breakfast Scramble Quesadilla",
        "price": "$12.50 | $16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chocolate Chip Breakfast Scramble Quesadilla. Peanut Butter",
        "price": "$11.50 | $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Oreo Breakfast Scramble Quesadilla. Chai, Vanilla,",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Whipped Cream Breakfast Scramble Quesadilla. Brown Sugar Pineapple &",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ham Cakes Breakfast Scramble Quesadilla",
        "price": "$14.50 | $19.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Blueberry Breakfast Scramble Quesadilla",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Banana Breakfast Scramble Quesadilla",
        "price": "$11.50 | $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Banana Pecan Breakfast Scramble Quesadilla",
        "price": "$14.50 | $19.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Banana Caramel Foster Breakfast Scramble Quesadilla",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cinnamon Swirl Breakfast Scramble Quesadilla. Nutella, Banana,",
        "price": "$11.50 | $15.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla",
        "price": "$15.50 | $21.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tres Leches Breakfast Scramble Quesadilla",
        "price": "$14.50 | $19.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Smores Breakfast Scramble Quesadilla",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tiramisu Breakfast Scramble Quesadilla",
        "price": "$13.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "add a scoop of Ice Cream Breakfast Scramble Quesadilla. Waffle | French Toast Pj’s Hand-Spun Milkshakes",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "your flavor Ice Cream Breakfast Scramble Quesadilla. Espresso Chip Black & White Plain",
        "price": "$10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "choice of two Breakfast Scramble Quesadilla. Strawberry Banana Blueberry",
        "price": "$8",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "without meat Breakfast Scramble Quesadilla. ham, bacon, sausage, turkey sausage, pork roll, corned beef hash, canadian bacon, pastrami, turkey bacon, veggie sausage",
        "price": "$15.50 | $18.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Plain Jane Breakfast Scramble Quesadilla",
        "price": "$13.95 | $15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Banana Breakfast Scramble Quesadilla. Banana Caramel",
        "price": "$16.95 | $18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Foster Breakfast Scramble Quesadilla",
        "price": "$17.95 | $19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla. Chicken & Waffles chicken fritters, fries, real",
        "price": "$16.95 | $18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "maple syrup Breakfast Scramble Quesadilla",
        "price": "$23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla. Nutella, Banana,",
        "price": "$16.95 | $18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla",
        "price": "$17.95 | $19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Blueberry Breakfast Scramble Quesadilla",
        "price": "$15.95 | $17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Strawberry & Cannoli Breakfast Scramble Quesadilla. Choice of Meat ham, bacon, sausage, turkey sausage, pork roll, corned beef hash, canadian bacon, pastrami,",
        "price": "$17.95 | $19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "turkey bacon, veggie sausage Breakfast Scramble Quesadilla",
        "price": "$7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pj’s Mashed Browns Breakfast Scramble Quesadilla",
        "price": "$6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Two Eggs Breakfast Scramble Quesadilla. Croissant",
        "price": "$6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "strawberry jam, marmalade, or nutella Breakfast Scramble Quesadilla. Steak & Eggs sirloin, onions,",
        "price": "$5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "two eggs any style Breakfast Scramble Quesadilla. Classic feta, sea salt, crushed red pepper",
        "price": "$27",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "add an Egg + Breakfast Scramble Quesadilla",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "onions, capers Breakfast Scramble Quesadilla. Bacon & Egg scrambled or fried egg",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "chopped bacon Breakfast Scramble Quesadilla",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Plain Potato Cakes Breakfast Scramble Quesadilla. The Denver",
        "price": "$16.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "peppers & onions, ham Breakfast Scramble Quesadilla. The Puerco crumbled chorizo, onion, jalapeno,",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "queso fresco Breakfast Scramble Quesadilla. The Works",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "cheddar, bacon, chicken, sour cream, scallion Breakfast Scramble Quesadilla",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "add Two Poached Eggs Breakfast Scramble Quesadilla",
        "price": "$6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Nutella, Banana, Strawberry Breakfast Scramble Quesadilla",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla. Sweet",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Ham, Egg, & Cheddar Breakfast Scramble Quesadilla. Mushrooms, Spinach, & Swiss",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "add chicken + Breakfast Scramble Quesadilla",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pancake Sampler Breakfast Scramble Quesadilla. your choice of 3 Jersey Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "pork roll, griddled onion, american Breakfast Scramble Quesadilla. California Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "spinach, turkey bacon, pepper jack, avocado Breakfast Scramble Quesadilla. Western Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "onions, peppers, ham, cheddar Breakfast Scramble Quesadilla. Pj’s Classic Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "mushrooms, peppers, broccoli, spinach, feta Breakfast Scramble Quesadilla. Smoked Salmon Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "lox, onions, capers, avocado, cream cheese Breakfast Scramble Quesadilla. Pj’s Veggie Omelet",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "peppers, broccoli, zucchini, squash Breakfast Scramble Quesadilla. Mediterranean Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "sun-dried tomatoes, spinach, feta Breakfast Scramble Quesadilla. Pastrami & Swiss Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "hickory smoked angus pastrami, swiss Breakfast Scramble Quesadilla. Pj’s Special Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "onions, peppers, mushrooms, tomatoes Breakfast Scramble Quesadilla. Spanish Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "sausage, avocado, cheddar, ranchero sauce Breakfast Scramble Quesadilla. Healthy Corner Savory",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sausage, english muffin Heart Smart Sandwich. Greek Yogurt Parfait",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "mixed berries, bananas, granola Heart Smart Sandwich. Bacon & Egg Stuffed Avocado",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "w/fresh fruit or mashed browns Heart Smart Sandwich",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fresh Fruit Medley Bowl Heart Smart Sandwich. Overnight Oats oat milk, honey banana | strawberry | blueberry",
        "price": "$15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "raspberry Heart Smart Sandwich. Choose from our fresh baked artisan bread options white, wheat, rye, ancient 9 grain, artisan ciabatta, french baguette, torpedo roll",
        "price": "$14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Grade A Pure Maple Syrup Heart Smart Sandwich",
        "price": "$3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Plain - Two Heart Smart Sandwich. Chicken & Waffles chicken fritters, fries, real",
        "price": "$9.50 | $13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Feta Cheese Heart Smart Sandwich. Pork Roll, Fried Eggs, Sautéed Onions,",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "American Cheese Heart Smart Sandwich. Kids’ Corner",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "add Chicken Breast",
        "price": "$3 | $7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shoestring Fries or Cole Slaw | sub Onion Rings + (10 & Under) | choice of Small Milk, Soda, or Juice",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "One Sausage Link (“One-Fer” Breakfast). served on Brioche Roll or Croissant **Consuming raw or undercooked meats,",
        "price": "$13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "torpedo Turkey Club turkey, bacon, american,",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "lettuce, tomato, mayo, white Pastrami Reuben",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "swiss, sauerkraut, thousand island, rye",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "pepper jack, lettuce, tomato, torpedo Fat Tiger Sandwich. Grilled Chicken Caesar Wrap",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "chicken, lettuce, croutons, caesar dressing Fat Tiger Sandwich. Buffalo Chicken Fritters crispy chicken fritters, buffalo sauce, pickles, lettuce, tomato, mayo",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "wrap or brioche roll Fat Tiger Sandwich",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "bacon, lettuce, tomato, avocado, rye BLTA. Chicken or Steak Quesadilla chicken breast or sirloin steak cheddar, lettuce, tomato,",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "guac & sour cream BLTA",
        "price": "$22",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "croutons Tuscan Chicken Sandwich. Cobb romaine, hard boiled egg, bacon, cucumber, tomato,",
        "price": "$15.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "blue cheese dressing Tuscan Chicken Sandwich. Kale baby kale tossed w/ tuscan croutons, crispy bacon, sunny",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "EVOO and buttermilk ranch Tuscan Chicken Sandwich",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Noodle Tuscan Chicken Sandwich",
        "price": "$9",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Onion Tuscan Chicken Sandwich",
        "price": "$9",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "upgrade pancake Breakfast Combo. Plain Cheeseburger with Fries or Fresh Fruit Silver Dollar Pancakes",
        "price": "$1",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "upgrade pancakes Breakfast Combo. Grilled Cheese",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "with fries or fresh fruit Breakfast Combo. Mac n’ Cheese Chicken Tenders with fries or fresh fruit",
        "price": "$13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "whole or skim Breakfast Combo",
        "price": "$3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chocolate Milk, 12 oz Breakfast Combo",
        "price": "$4.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hot Chocolate Breakfast Combo",
        "price": "$4.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Smores Hot Chocolate Breakfast Combo. Juice, 12 oz",
        "price": "$5.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "orange, apple, cranberry, V-8, lemonade Breakfast Combo. Bottomless Fountain, 12 oz coke, diet coke, sprite, ginger ale, root beer,",
        "price": "$4.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "fanta orange, raspberry iced tea Breakfast Combo",
        "price": "$3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cappuccino or Latte Breakfast Combo. Imported Italian Espresso",
        "price": "$4.50 | $5.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "single Breakfast Combo. Bottomless Hot Coffee",
        "price": "$3 | $5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "regular or decaf Breakfast Combo",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pj’s Cold Brew Breakfast Combo",
        "price": "$5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hot Tea Breakfast Combo. Chai Latte",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "harney & sons organic chai Breakfast Combo. Mac N’ Cheese",
        "price": "$5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "cheddar, american, swiss, panko Breakfast Combo. Guacamole made fresh daily",
        "price": "$14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "house made tortilla chips Breakfast Combo. Onion Rings",
        "price": "$13.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "special sauce Breakfast Combo. Loaded Nachos pepper jack, cheddar, diced onions, tomatoes, bell peppers, pico de gallo, jalapenos",
        "price": "$10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sour cream Breakfast Combo. Italian Meatball Skillet",
        "price": "$17",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "shaved parm, fresh basil Breakfast Combo. Mozzarella Sticks (7)",
        "price": "$11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "marinara sauce Breakfast Combo",
        "price": "$10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pigs in a Blanket (8) Breakfast Combo",
        "price": "$10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hot Spinach & Artichoke Dip Breakfast Combo. Buffalo Wings (8)",
        "price": "$11",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "celery, blue c﻿heese dressing Breakfast Combo",
        "price": "$14.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sausage, shaved parm RIGATONI VODKA",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "pesto GNOCCHI SORRENTINO",
        "price": "$15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "sunday sauce, shaved parm SPAGHETTI & MEATBALLS",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "shangri la organic black tea pasta or brocolli florets",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tuscan Tomato pasta or brocolli florets. Greek feta, kalamata olives, tomatoes, cucumber, red",
        "price": "$9",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "vinegar dressing pasta or brocolli florets. Build Your Own Burger",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "American + pasta or brocolli florets",
        "price": "$1 | $1",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bacon + pasta or brocolli florets",
        "price": "$1 | $2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pastrami +2 pasta or brocolli florets. Jersey Burger",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "pork roll, american cheese, fried egg pasta or brocolli florets. Mexican Burger pepper jack cheese, guacamole, pico de",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "gallo pasta or brocolli florets. Smothered Cheeseburger smothered w/ sautéed onions &",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "mushrooms pasta or brocolli florets. Turkey Burger all natural white & dark meat, sliced",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "avocado, pesto mayo pasta or brocolli florets. Veggie Burger caramelized onions, lettuce, tomato,",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "pj’s special sauce on a side pasta or brocolli florets. We are now serving Artisan",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sunday sauce, fresh basil, seeded torpedo Pj’s Parm Sandwiches. Meatball Parm house made meatballs, shaved parm, sunday",
        "price": "$16",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sauce, seeded torpedo Pj’s Parm Sandwiches. Sausage Parm crumbled Italian sausage, shaved parm,",
        "price": "$17",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sunday sauce, seeded torpedo Pj’s Parm Sandwiches. Eggplant Parm breaded eggplant , fresh mozzarella, sunday",
        "price": "$17",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "sauce, fresh basil, seeded torpedo Pj’s Parm Sandwiches. Served all day!",
        "price": "$16",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Pancakes",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free Waffle",
        "price": "$17",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Gluten Free French Toast",
        "price": "$18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Buckwheat Pancakes",
        "price": "$11 | $15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Buckwheat Waffle",
        "price": "$16",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "One Sausage Link Pj’s Famous Breakfast Combo",
        "price": "$18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "upgrade Pancakes Pj’s Famous Breakfast Combo",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sub French Toast or Waffle Pj’s Famous Breakfast Combo. with Mashed Brown Potatoes & Toast",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "French Toast, Waffle or Upgrade Egg Breakfast",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "substitute Bagel* OR. served with Fresh Fruit or Mashed Brown Potatoes",
        "price": "$2 | $3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "substitute Bagel, Croissant, Wrap, or Gluten Free Breakfast Classics. Lox, Stock & Bagel",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "lox, tomato, onion, capers, cream cheese Breakfast Classics",
        "price": "$20.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "with choice of meat and cheese, kaiser Fried Egg Sandwich. Trenton Pork Roll, Egg, & Cheese",
        "price": "$14.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "american, sauteed onions, tomato, kaiser Fried Egg Sandwich. Huevos Ranchero Wrap eggs over hard, sausage,",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "ranchero sauce Fried Egg Sandwich",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "eggs, chorizo, pepper jack, potatoes, peppers Breakfast Burrito",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "eggs, bacon, cheddar, guac, sour cream Breakfast Scramble Quesadilla. Signatures with Fresh Fruit or Mashed Browns Benedicts",
        "price": "$19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "canadian bacon, on english muffin Breakfast Scramble Quesadilla. Sammy Benny",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "lox, onions, capers, on english muffin Breakfast Scramble Quesadilla. Crabby Benny lump crab cakes, wilted spinach, on english",
        "price": "$20.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "muffin Breakfast Scramble Quesadilla. Veggie Benny grilled portabello caps, wilted spinach, roasted",
        "price": "$21.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "red peppers, on english muffin Breakfast Scramble Quesadilla. Shakshuka over easy eggs, spicy crushed tomato sauce,",
        "price": "$19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "onions, peppers, spinach, feta, crostini Breakfast Scramble Quesadilla. Mexishuka scrambled eggs, crumbled chorizo, mashed",
        "price": "$19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "avocado, pico de gallo, queso fresco Breakfast Scramble Quesadilla. Country Boy Hash over easy eggs, diced sirloin, peppers &",
        "price": "$20.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "onions, over mashed browns Breakfast Scramble Quesadilla. Chicken & Waffles",
        "price": "$21.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "chicken fritters, fries, real maple syrup Breakfast Scramble Quesadilla. Pj’s Skillets and Specialties Poached Eggs with Hollandaise Sauce Buttermilk Pancakes",
        "price": "$23.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pigs in a Blanket Breakfast Scramble Quesadilla",
        "price": "$18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Nutty Multi-Grain Breakfast Scramble Quesadilla",
        "price": "$11 | $15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Silver Dollars Breakfast Scramble Quesadilla",
        "price": "$13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pecan Breakfast Scramble Quesadilla",
        "price": "$11 | $15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chocolate Chip Breakfast Scramble Quesadilla. Peanut Butter",
        "price": "$11 | $15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Oreo Breakfast Scramble Quesadilla. Chai, Pistachio,",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Whipped Cream Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mixed Berry Blintz Breakfast Scramble Quesadilla",
        "price": "$14 | $19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Blueberry Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Banana Coconut Rum Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Banana Breakfast Scramble Quesadilla",
        "price": "$11 | $15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cinnamon Swirl Breakfast Scramble Quesadilla. Nutella, Banana,",
        "price": "$11 | $15",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla",
        "price": "$15 | $21",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Banana Pecan Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Banana Caramel Foster Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Smores Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Tiramisu Breakfast Scramble Quesadilla",
        "price": "$13 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "add a scoop of Ice Cream Breakfast Scramble Quesadilla. Waffle | French Toast Pj’s Hand-Spun Milkshakes",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "your flavor Ice Cream | spike it - 6 Breakfast Scramble Quesadilla. Espresso Chip Black & White Plain",
        "price": "$10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "choice of two | spike it - 6 Breakfast Scramble Quesadilla. Strawberry Banana Blueberry",
        "price": "$8",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "without meat Breakfast Scramble Quesadilla. ham, bacon, sausage, turkey sausage, pork roll, corned beef hash, canadian bacon, pastrami, turkey bacon, veggie sausage",
        "price": "$15 | $18",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Plain Jane Breakfast Scramble Quesadilla. Banana",
        "price": "$13.75 | $15.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Coconut Rum Breakfast Scramble Quesadilla",
        "price": "$16.75 | $18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Banana Breakfast Scramble Quesadilla",
        "price": "$15.75 | $17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla. Nutella, Banana,",
        "price": "$16.75 | $18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla",
        "price": "$17.75 | $19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Strawberry Breakfast Scramble Quesadilla",
        "price": "$16.75 | $18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Banana Caramel Foster Breakfast Scramble Quesadilla",
        "price": "$17.75 | $19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Blueberry Breakfast Scramble Quesadilla. Strawberry & Cannoli",
        "price": "$15.75 | $17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cream Breakfast Scramble Quesadilla. Choice of Meat ham, bacon, sausage, turkey sausage, pork roll, corned beef hash, canadian bacon, pastrami,",
        "price": "$17.75 | $19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "turkey bacon, veggie sausage Breakfast Scramble Quesadilla",
        "price": "$7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pj’s Mashed Browns Breakfast Scramble Quesadilla",
        "price": "$6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Two Eggs Breakfast Scramble Quesadilla. Croissant",
        "price": "$6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "strawberry jam, marmalade, or nutella Breakfast Scramble Quesadilla. Steak & Eggs sirloin, onions,",
        "price": "$5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "two eggs any style Breakfast Scramble Quesadilla. Classic feta, sea salt, crushed red pepper",
        "price": "$26",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "add an Egg + Breakfast Scramble Quesadilla",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "onions, capers Breakfast Scramble Quesadilla. Bacon & Egg scrambled or fried egg",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "chopped bacon Breakfast Scramble Quesadilla",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Plain Potato Cakes Breakfast Scramble Quesadilla. The Denver",
        "price": "$16",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "peppers & onions, ham Breakfast Scramble Quesadilla. The Puerco crumbled chorizo, onion, jalapeno,",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "queso fresco Breakfast Scramble Quesadilla. The Works",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "cheddar, bacon, chili, sour cream, scallion Breakfast Scramble Quesadilla",
        "price": "$19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "add Two Poached Eggs Breakfast Scramble Quesadilla",
        "price": "$6",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Mixed Berry Blintz Breakfast Scramble Quesadilla",
        "price": "$16.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Nutella, Banana, Strawberry Breakfast Scramble Quesadilla",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caramel Apple Cinnamon Breakfast Scramble Quesadilla",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Orange Marmalade Blintz Breakfast Scramble Quesadilla. Sweet",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spinach, Onion, & Sour Cream Breakfast Scramble Quesadilla. Mushrooms, Spinach, & Swiss",
        "price": "$15.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "add chicken + Breakfast Scramble Quesadilla",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lox & Stock, Cream Cheese Breakfast Scramble Quesadilla",
        "price": "$19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Ham, Egg, & Cheddar Breakfast Scramble Quesadilla. Pj’s Hand-Spun Milkshakes Fruit Smoothies",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pancake Sampler Breakfast Scramble Quesadilla. your choice of 3 Jersey Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "pork roll, griddled onion, american Breakfast Scramble Quesadilla. California Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "spinach, turkey bacon, pepper jack, avocado Breakfast Scramble Quesadilla. Western Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "onions, peppers, ham, cheddar Breakfast Scramble Quesadilla. Pj’s Classic Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "mushrooms, peppers, broccoli, spinach, feta Breakfast Scramble Quesadilla. Smoked Salmon Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "lox, onions, capers, avocado, cream cheese Breakfast Scramble Quesadilla. Pj’s Veggie Omelet",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "peppers, broccoli, zucchini, squash Breakfast Scramble Quesadilla. Mediterranean Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "sun-dried tomatoes, spinach, feta Breakfast Scramble Quesadilla. Brooklyn Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "hickory smoked angus pastrami, swiss Breakfast Scramble Quesadilla. Pj’s Special Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "onions, peppers, mushrooms, tomatoes Breakfast Scramble Quesadilla. Spanish Omelet",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "sausage, avocado, cheddar, ranchero sauce Breakfast Scramble Quesadilla. Healthy Corner Savory",
        "price": "$20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sausage, english muffin Heart Smart Sandwich. Greek Yogurt Parfait",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "mixed berries, bananas, granola Heart Smart Sandwich. Bacon & Egg Stuffed Avocado",
        "price": "$16.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "w/fresh fruit or mashed browns Heart Smart Sandwich",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fresh Fruit Medley Bowl Heart Smart Sandwich. Overnight Oats oat milk, honey banana | strawberry | blueberry",
        "price": "$15.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "raspberry Heart Smart Sandwich",
        "price": "$14.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Grade A Pure Maple Syrup Heart Smart Sandwich",
        "price": "$4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Plain Two Heart Smart Sandwich. Kids’ Corner",
        "price": "$9 | $13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "add Chicken Breast Philly Cheese Steak onions, mushrooms, peppers, tomatoes,",
        "price": "$3 | $7",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "torpedo Turkey Club turkey, bacon, american,",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "lettuce, tomato, mayo, white Pastrami or Turkey Reuben",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "swiss, sauerkraut, thousand island, rye",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "avocado, shredded cheddar Chicken Salad Wrap. Grilled Chicken Caesar Wrap",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "chicken, lettuce, croutons, caesar dressing Chicken Salad Wrap. Buffalo Chicken Fritters crispy chicken fritters, buffalo sauce, pickles, lettuce, tomato, mayo",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "wrap or brioche roll Chicken Salad Wrap. Tuna Melt",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "bacon, choice of cheese, thick rye Chicken Salad Wrap",
        "price": "$17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "pepper jack, lettuce, tomato, torpedo Fat Tiger Sandwich",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "bacon, lettuce, tomato, avocado, rye BLTA. Fried Cod battered cod, american, lettuce, tartar sauce,",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "torpedo roll BLTA",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Fish & Chips Platter - add BLTA. Grilled Cheese cheddar & american grilled cheese,",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Texas toast BLTA. Chicken or Steak Quesadilla chicken breast or sirloin steak cheddar, lettuce, tomato,",
        "price": "$15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "guac & sour cream BLTA",
        "price": "$22",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Shoestring Fries or Cole Slaw | sub Sweet Potato Fries or Onion Rings + Pj’s Tavern Fare (10 & Under) | choice of Small Milk, Soda, or Juice",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "croutons Wear yours to breakfast next. Cobb romaine, hard boiled egg, bacon, cucumber, tomato,",
        "price": "$15.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "blue cheese dressing Wear yours to breakfast next. Waldorf romaine, spinach, feta, grapes, apples, celery,",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "walnuts, honey mayo Wear yours to breakfast next",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chicken Noodle Wear yours to breakfast next",
        "price": "$8",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Onion Wear yours to breakfast next",
        "price": "$9",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "upgrade pancake Breakfast Combo. Plain Cheeseburger with Fries or Fresh Fruit Silver Dollar Pancakes",
        "price": "$1",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "upgrade pancakes Breakfast Combo. Grilled Cheese",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "with fries or fresh fruit Breakfast Combo. Mac n’ Cheese with fries or fresh fruit Chicken Tenders",
        "price": "$13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "whole or skim Breakfast Combo",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chocolate Milk, 12 oz Breakfast Combo",
        "price": "$4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hot Chocolate Breakfast Combo",
        "price": "$4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Smores Hot Chocolate Breakfast Combo. Juice, 12 oz",
        "price": "$5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "orange, apple, cranberry, V-8, lemonade Breakfast Combo. Bottomless Fountain, 12 oz coke, diet coke, sprite, ginger ale, root beer,",
        "price": "$4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "fanta orange, raspberry iced tea Breakfast Combo",
        "price": "$4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cappuccino or Latte Breakfast Combo. Imported Italian Espresso",
        "price": "$4 | $5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "single Breakfast Combo. Bottomless Hot Coffee",
        "price": "$3 | $5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "regular or decaf Breakfast Combo",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pj’s Cold Brew Breakfast Combo",
        "price": "$4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hot Tea Breakfast Combo. Chai Latte",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "harney & sons organic chai Breakfast Combo. Bar Pretzel",
        "price": "$5",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "brushed butter, grain mustard Breakfast Combo. Guacamole made fresh daily",
        "price": "$10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "house made tortilla chips Breakfast Combo. Onion Rings",
        "price": "$13.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "special sauce Breakfast Combo. Shoestring Fries herb mayonnaise",
        "price": "$10.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sub sweet potato fries + Breakfast Combo",
        "price": "$2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "cheddar, jalapenos Breakfast Combo. Crispy Brussels Sprouts",
        "price": "$10.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "shaved parm, salt & pepper Breakfast Combo. Mozzarella Sticks",
        "price": "$11.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "marinara sauce Breakfast Combo. Chicken Fritters",
        "price": "$10",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "spicy mayo Breakfast Combo. Buffalo Wings",
        "price": "$15.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "celery, blue c heese dressing Breakfast Combo. 10% Starving Student Discount w/ valid ID or",
        "price": "$14.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "One Sausage Link (“One-Fer” Breakfast)",
        "price": "$13",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "house made Tortilla Chips | add Extra Cheese (“One-Fer” Breakfast). Mac n’ Cheese",
        "price": "$2 | $3 | $4",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "cheddar, american, swiss, panko (“One-Fer” Breakfast). Cheeseburger Mac",
        "price": "$18.25",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "ground beef, american, cheddar (“One-Fer” Breakfast). Buffalo Bleu diced grilled chicken, red bell peppers, bleu",
        "price": "$19.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "cheese, Frank’s hot sauce (“One-Fer” Breakfast). Mushroom Mac sauteed mushrooms, fontina, mascarpone,",
        "price": "$18.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "truffle oil (“One-Fer” Breakfast). Cheesy Nachos pepper jack, cheddar, jalapenos",
        "price": "$19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sour cream (“One-Fer” Breakfast). Loaded Nachos pepper jack, cheddar, diced onions, tomatoes,",
        "price": "$14",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sour cream (“One-Fer” Breakfast). Nachos Supreme pepper jack, cheddar, diced on ions, tomatoes,",
        "price": "$16",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "sour cream (“One-Fer” Breakfast). Fresh Brewed Bottomless Iced Tea",
        "price": "$19",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "shangri la organic black tea (“One-Fer” Breakfast)",
        "price": "$3",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chili (“One-Fer” Breakfast). Greek feta, kalamata olives, tomatoes, cucumber, red",
        "price": "$9",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "vinegar dressing (“One-Fer” Breakfast). served on Brioche Roll or Croissant **Consuming raw or undercooked meats,",
        "price": "$17.75",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "American +",
        "price": "$1 | $1",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Bacon +",
        "price": "$1 | $2",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pastrami +2 Jersey Burger",
        "price": "$16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "pork roll, american cheese, fried egg Mexican Burger pepper jack cheese, guacamole, pico de",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "gallo Smothered Cheeseburger smothered w/ sautéed onions &",
        "price": "$19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "mushrooms Turkey Burger all natural white & dark meat, sliced",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "avocado, pesto mayo Beyond Veggie Burger caramelized onions, lettuce, tomato,",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "pj’s special sauce on a side",
        "price": "$18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
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
        "is_vegetarian": false
      },
      {
        "item": "Lobster Bisque asparagus, lobster, chives",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kobe Sliders cheddar, caramelized onions",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheesesteak Sliders shaved filet mignon, sauteed onions & peppers, three cheeses",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "NJ Burrata heirloom tomato, grilled ciabatta, balsamic, basil pesto",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Maine Lobster Bites lemon garlic, beurre blanc, gruyere, bread crumbs",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hamachi Crudo blistered jalapeno, kombu ponzu, citrus, fried onion, togarashi",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Yellowfin Tuna Tartare crushed avocado, crispy wontons, wasabi cream, ponzu, sesame seeds",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Rhode Island Crispy Calamari cherry peppers, roasted red pepper“marinara”",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Crispy Shrimp Scampi garlic, butter, white wine",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crispy Wagyu Dumplings honey sambal, mustard sauce",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Fall Off The Bone Ribs baby back pork ribs",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Colossal Lump Crab Cake lemon, tartar sauce",
        "price": "25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Applewood Smoked Slab Bacon maple glaze",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilled Jumbo Shrimp cocktail sauce",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snow Crab Claws mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local East Coast Oysters half shell, by the half dozen",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Cocktail whole 1 1/4 lobster chilled, cocktail sauce",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "1/4 lb Colossal Lump Crab Cocktail sliced avocado, mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilled Seafood Platter (2/4/6/8)Current MP lobster, oysters, shrimp cocktail, tuna tartare, snow crab claws",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caesar Salad garlic croutons, grana padano",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wedge of Iceberg Lettuce tomato, crispy red onions, bacon, blue cheese",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Heirloom Tomato Salad heirloom tomato, creamy Italian vinaigrette, blue cheese, red onion, garlic croutons, basil",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Arugula Salad spicy candied walnuts, crumbled blue cheese, shaved apple, cider vinaigrette",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chopped Salad romaine, iceberg, tomato, corn, broccoli, carrot, feta, cucumber, asparagus, black peppercorn dressing",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "12 oz Petite Prime NY Strip Steak",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz. Prime NY Strip Steak",
        "price": "54.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "8 oz Petit Filet Mignon",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Filet Mignon",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "20 oz Dry Aged Cowboy Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz Prime Ribeye Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "42 oz Prime Porterhouse Steak for Two",
        "price": "MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu NY Strip Steak",
        "price": "79.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu 12 oz. Ribeye",
        "price": "84.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu 8 oz. Petite Filet Mignon",
        "price": "74.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Beef Wellington filet mignon, mushroom, asparagus, Hollandaise sauce (limited availability)",
        "price": "52.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Tailors Plate A surf & turf of petite cut filet mignon (6 oz) & two jumbo shrimp with a scampi butter sauce",
        "price": "47.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Chicken Parm red pepper marinara, parmesan, creamy burrata",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces",
        "price": "3.50",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "East Coast Halibut herb-crusted, dill, capers, beurre blanc",
        "price": "40.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "9 oz. South African Lobster TailCurrent MP Served Broiled or Steamed",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish-Crusted Faroe Island Salmon horseradish cream sauce and asparagus",
        "price": "35.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "True Dover Sole pan seared fillet, served in a Meuniere sauce (Limited availability Thursday-Saturday)",
        "price": "64.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Blue cheese hat",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Lobster & Cherry peppers",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jumbo Shrimp",
        "price": "6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Oscar Style colossal crab, asparagus, hollandaise",
        "price": "22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Steak Sauce (Complimentary)",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Au Poivre",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Béarnaise3.95",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hollandaise",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish Cream",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Our Famous Mac & Cheese",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Truffle Pommes Frites",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Macaroni and Cheese",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Onion Rings",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pomme Frites",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Potatoes Au Gratin",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Classic Whipped Potatoes",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Loaded Colossal Baked Potato",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Creamed Corn",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Creamed Spinach",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roasted Asparagus",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Broccoli Garlic & Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roasted Wild Mushrooms Shiitake, Oyster, White Button, Herb Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brussels Sprouts Honey Sambal, Bacon & Scallions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Onion Soup gruyère, croutons",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Bisque asparagus, lobster, chives",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kobe Sliders cheddar, caramelized onions",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "NJ Burrata heirloom tomato, grilled ciabatta, balsamic, basil pesto",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Petite Maine Lobster Bites lemon garlic, beurre blanc, gruyere, bread crumbs",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hamachi Crudo blistered jalapeno, kombu ponzu, citrus, fried onion, togarashi",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Yellowfin Tuna Tartare crushed avocado, crispy wontons, wasabi cream, ponzu, sesame seeds",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Rhode Island Crispy Calamari cherry peppers, roasted red pepper“marinara”",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Crispy Shrimp Scampi garlic, butter, white wine",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crispy Wagyu Dumplings honey sambal, mustard sauce",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Fall Off The Bone Ribs baby back pork ribs",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Colossal Lump Crab Cake lemon, tartar sauce",
        "price": "25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Applewood Smoked Slab Bacon maple glaze",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilled Jumbo Shrimp cocktail sauce",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snow Crab Claws mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local East Coast Oysters half shell, by the half dozen",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Cocktail whole 1 1/4 lobster chilled, cocktail sauce",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "1/4 lb Colossal Lump Crab Cocktail sliced avocado, mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilled Seafood Platter (2/4/6/8)Current MP lobster, oysters, shrimp cocktail, tuna tartare, snow crab claws",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caesar Salad garlic croutons, grana padano",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wedge of Iceberg Lettuce tomato, crispy red onions, bacon, blue cheese",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Heirloom Tomato Salad heirloom tomato, creamy italian vinaigrette, blue cheese, red onion, garlic croutons, basil",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Arugula Salad spicy candied walnuts, crumbled blue cheese, shaved apple, cider vinaigrette",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chopped Salad romaine, iceberg, tomato, corn, broccoli, carrot, feta, cucumber, asparagus, black peppercorn dressing",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "12 oz Petite Prime NY Strip Steak",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz. Prime NY Strip Steak",
        "price": "54.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "8 oz Petit Filet Mignon",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Filet Mignon",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "20 oz Dry Aged Cowboy Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz Prime Ribeye Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "42 oz Prime Porterhouse Steak for Two",
        "price": "(MP)",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz. NY Strip Steak",
        "price": "79.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz. Ribeye",
        "price": "84.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "8 oz. Petite Filet Mignon",
        "price": "74.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces, truffle aioli, blue cheese crust or roots cowboy butter",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Beef Wellington (limited availability) filet mignon, mushrooms, asparagus, hollandaise",
        "price": "52.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Tailors Plate a surf & turf of petite 6 oz ilet, two jumbo shrimp with a scampi butter sauce",
        "price": "47.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Chicken Parm red pepper marinara, parmesan, creamy burrata",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "True Dover Sole pan seared fillet, served in a meunière sauce (limited availability Thursday-Saturday)",
        "price": "64.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "East Coast Halibut herb-crusted, dill, capers, beurre blanc",
        "price": "40.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "9 oz. South African Lobster Tail Served Broiled or Steamed",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish-Crusted Faroe Island Salmon horseradish cream sauce and asparagus",
        "price": "35.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan Seared Sea Scallops creamy mushroom risotto, crispy maitake mushrooms",
        "price": "38.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Our Famous Mac & Cheese",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Truffle Macaroni and Cheese",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Lobster Macaroni and Cheese",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Truffle Pommes Frites",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pomme Frites",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Onion Rings",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Broccoli Garlic & Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Potatoes Au Gratin",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Classic Whipped Potatoes",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Loaded Colossal Baked Potato",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Creamed Corn sweet corn puree, roasted corn, pearl onions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Creamed Spinach",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roasted Asparagus lemon aioli, parmesan, bread crumbs",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Wild Mushrooms Shiitake, Oyster, White Button, Herb Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brussels Sprouts Honey Sambal, Bacon & Scallions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "French Onion Soup gruyère, croutons",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Bisque asparagus, lobster, chives",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kobe Sliders cheddar, caramelized onions",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheesesteak Sliders shaved filet mignon, sauteed onions & peppers, three cheeses",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "NJ Burrata heirloom tomato, grilled ciabatta, balsamic, basil pesto",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Maine Lobster Bites lemon garlic, beurre blanc, gruyere, bread crumbs",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Yellowfin Tuna Tartare crushed avocado, crispy wontons, wasabi cream, ponzu, sesame seeds",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Rhode Island Crispy Calamari cherry peppers, roasted red pepper“marinara”",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Crispy Shrimp Scampi garlic, butter, white wine",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crispy Wagyu Dumplings honey sambal, mustard sauce",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Fall Off The Bone Ribs baby back pork ribs",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Colossal Lump Crab Cake lemon, tartar sauce",
        "price": "25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Applewood Smoked Slab Bacon maple glaze",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilled Jumbo Shrimp cocktail sauce",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snow Crab Claws mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local East Coast Oysters half shell, by the half dozen",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Cocktail whole 1 1/4 lobster chilled, cocktail sauce",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "1/4 lb Colossal Lump Crab Cocktail sliced avocado, mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilled Seafood Platter (2/4/6/8)Current MP lobster, oysters, shrimp cocktail, tuna tartare, snow crab claws",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caesar Salad garlic croutons, grana padano",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wedge of Iceberg Lettuce tomato, crispy red onions, bacon, blue cheese",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Arugula Salad spicy candied walnuts, crumbled blue cheese, shaved apple, cider vinaigrette",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chopped Salad romaine, iceberg, tomato, corn, broccoli, carrot, feta, cucumber, asparagus, black peppercorn dressing",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Heirloom Tomato Salad heirloom tomato, creamy italian vinaigrette, blue cheese, red onion, garlic croutons, basil",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "12 oz Petite Prime NY Strip Steak",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz. Prime NY Strip Steak",
        "price": "54.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "8 oz Petit Filet Mignon",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Filet Mignon",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "20 oz Dry Aged Cowboy Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz. Prime Ribeye Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "42 oz Prime Porterhouse Steak for Two(MP)",
        "price": "(MP)",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu 12 oz NY Strip Steak",
        "price": "79.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu 12 oz. Ribeye",
        "price": "84.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu 8 oz. Petite Filet Mignon",
        "price": "74.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Beef Wellington filet mignon, mushroom, asparagus, Hollandaise sauce (limited availability)",
        "price": "52.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Tailors Plate A surf & turf of petite cut filet mignon (6 oz) & two jumbo shrimp with a scampi butter sauce",
        "price": "47.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Chicken Parm red pepper marinara, parmesan, creamy burrata",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "9 oz. South African Lobster Tail Served Broiled or Steamed",
        "price": "(Current MP)",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "East Coast Halibut herb-crusted, dill, capers, beurre blanc",
        "price": "40.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan Seared Sea Scallops creamy mushroom risotto, crispy maitake mushrooms",
        "price": "38.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Horseradish Crusted Faroe Island Salmon horseradish cream sauce and asparagus",
        "price": "35.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "True Dover Sole pan seared fillet, served in a Meuniere sauce (Limited Availability Thursday-Saturday)Considered a delicacy, this fish is shipped directly from the Strait of Dover to ensure the mild and sweet flavor profile",
        "price": "64.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Blue cheese hat",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Lobster & Cherry peppers",
        "price": "28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jumbo Shrimp",
        "price": "6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Oscar Style colossal crab, asparagus, hollandaise",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Steak Sauce (Complimentary)",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Au Poivre, Béarnaise sauce, hollandaise, horseradish cream, truffle aioli, Roots cowboy butter",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Our Famous Mac & Cheese",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Truffle Mac & Cheese",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Lobster Mac & Cheese",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pomme Frites",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Truffle Pommes Frites",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Classic Whipped Potatoes",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roasted Asparagus lemon aioli, parmesan, bread crumbs",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Brussels Sprouts honey sambal, bacon & scallions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Onion Rings",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Colossal Loaded Baked Potato",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Creamed Spinach",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roasted Wild Mushrooms Shiitake, Oyster, White Mushrooms, Herb Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Broccoli Garlic & Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Potatoes Au Gratin",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Creamed Corn pearl onions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "French Onion Soup gruyère, croutons",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Bisque asparagus, lobster, chives",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Kobe Sliders cheddar, caramelized onions",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "NJ Burrata heirloom tomato, grilled ciabatta, balsamic, basil pesto",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Maine Lobster Bites lemon garlic, beurre blanc, gruyere, bread crumbs",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hamachi Crudo citrus-coriander vinaigrette, fried lemon, fennel, watermelon radish",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Yellowfin Tuna Tartare crushed avocado, crispy wontons, wasabi cream, ponzu, sesame seeds",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Rhode Island Crispy Calamari cherry peppers, roasted red pepper“marinara”",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Crispy Shrimp Scampi garlic, butter, white wine",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crispy Wagyu Dumplings honey sambal, mustard sauce",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Fall Off The Bone Ribs baby back pork ribs",
        "price": "17.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Colossal Lump Crab Cake lemon, tartar sauce",
        "price": "25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Applewood Smoked Slab Bacon maple glaze",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilled Jumbo Shrimp cocktail sauce",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snow Crab Claws mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local East Coast Oysters half shell, by the half dozen",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Cocktail whole 1 1/4 lobster chilled, cocktail sauce",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "1/4 lb Colossal Lump Crab Cocktail sliced avocado, mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilled Seafood Platter (2/4/6/8)Current MP lobster, oysters, shrimp cocktail, tuna tartare, snow crab claws",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caesar Salad garlic croutons, grana padano",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wedge of Iceberg Lettuce tomato, crispy red onions, bacon, blue cheese",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Arugula Salad spicy candied walnuts, crumbled blue cheese, shaved apple, cider vinaigrette",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chopped Salad romaine, iceberg, tomato, corn, broccoli, carrot, feta, cucumber, asparagus, black peppercorn dressing",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Heirloom Tomato Salad heirloom tomato, creamy italian vinaigrette, blue cheese, red onion, garlic croutons, basil",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "12 oz Petite Prime NY Strip Steak",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz. Prime NY Strip Steak",
        "price": "54.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "8 oz Petit Filet Mignon",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Filet Mignon",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "20 oz Dry Aged Cowboy Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz. Prime Ribeye Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "42 oz Prime Porterhouse Steak for Two",
        "price": "(MP)",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu 12 oz. NY Strip Steak",
        "price": "79.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu 12 oz. Ribeye",
        "price": "84.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: Petite Filet Mignon 8 oz. Petite Filet Mignon",
        "price": "74.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Beef Wellington filet mignon, mushroom, asparagus, Hollandaise sauce (limited availability)",
        "price": "52.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Tailors Plate A surf & turf of petite cut filet mignon (6 oz) & two jumbo shrimp with a scampi butter sauce",
        "price": "47.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Chicken Parm red pepper marinara, parmesan, creamy burrata",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces, truffle aioli, blue cheese crust, or Roots Cowboy Butter",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "9 oz. South African Lobster Tail Served Broiled or Steamed",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "East Coast Halibut herb-crusted, dill, capers, beurre blanc",
        "price": "40.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish-Crusted Faroe Island Salmon horseradish cream sauce and asparagus",
        "price": "35.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "True Dover Sole Pan seared fillet, served in a Meunière sauce (limited availability Thursday-Saturday) Considered a delicacy this fish is shipped directly from the strait of Dover to ensure the mild and sweet flavor profile",
        "price": "64.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan Seared Sea Scallops creamy mushroom risotto, crispy maitake mushrooms",
        "price": "38.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Blue cheese hat",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Lobster & Cherry peppers",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Jumbo Shrimp",
        "price": "6.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Oscar Style colossal crab, asparagus, hollandaise",
        "price": "22.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Steak Sauce (Complimentary)",
        "price": "",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Au Poivre",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Béarnaise",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hollandaise",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish Cream",
        "price": "3.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Our Famous Mac & Cheese",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Truffle Macaroni & Cheese",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Lobster Macaroni & Cheese",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Onion Rings",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pomme Frites",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Truffle Pommes Frites",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Potatoes Au Gratin",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Loaded Colossal Baked Potato",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Classic Whipped Potatoes",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Creamed Corn sweet corn puree, roasted corn, pearl onions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Brussels Sprouts Honey Sambal, Bacon & Scallions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Asparagus Lemon Aioli, Parmesan",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Broccoli Garlic & Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roasted Wild Mushrooms Shiitake, Oyster, White Button, Herb Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Creamed Spinach",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "French Onion Soup gruyère, croutons",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "New England Clam Chowder bacon crumbles, brioche croutons, parsley",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "NJ Burrata heirloom tomato, grilled ciabatta, balsamic, basil pesto",
        "price": "16.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Kobe Sliders cheddar, caramelized onions",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cheesesteak Sliders shaved filet mignon, sauteed onions & peppers, three cheeses",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Maine Lobster Bites lemon garlic, beurre blanc, gruyere, bread crumbs",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Yellowfin Tuna Tartare avocado, crispy wontons, wasabi cream, ponzu, sesame seeds",
        "price": "20.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Rhode Island Crispy Calamari cherry peppers & roasted red pepper “marinara”",
        "price": "18.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Crispy Shrimp Scampi garlic, butter, white wine",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Crispy Wagyu Dumplings honey sambal & mustard sauces",
        "price": "21.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Spicy Fall Off The Bone Ribs baby back pork ribs",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Colossal Lump Crab Cake lemon & tartar sauce",
        "price": "25.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Applewood Smoked Slab Bacon maple glaze",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilled Jumbo Shrimp cocktail sauce",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snow Crab Claws mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Local East Coast Oysters half shell, by the half dozen",
        "price": "19.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Lobster Cocktail whole 1 1/4 lobster chilled, cocktail sauce",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "1/4 lb Colossal Lump Crab Cocktail sliced avocado, mustard and cocktail sauces",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Chilled Seafood Platter (2/4/6/8)Current MP lobster, oysters, shrimp cocktail, tuna tartare, snow crab claws",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Caesar Salad garlic croutons & grana padano",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Warm Shrimp Salad truffle miso, spring mushrooms, avocado, tomato, champagne vinaigrette",
        "price": "27.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Wedge of Iceberg Lettuce tomato, crispy red onions, bacon, blue cheese",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Arugula Salad spicy candied walnuts, crumbled blue cheese, shaved apple, cider vinaigrette",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Chopped Salad romaine, iceberg, tomato, corn, broccoli, carrot, feta, cucumber, asparagus, black peppercorn dressing",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Heirloom Tomato Salad heirloom tomato, creamy Italian vinaigrette, blue cheese, red onion, garlic croutons, basil",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Lobster Salad mixed greens, avocado, bacon, tomato, grana padano, lemon herb dressing",
        "price": "34.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Katsu Salad mango, cherry tomatoes, red peppers, carrots, Napa cabbage, arugula, asian cilantro dressing, peanuts, jalapeno (choice of chicken or cauliflower milanese)",
        "price": "24.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Petite Prime NY Strip Steak",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz. Prime NY Strip Steak",
        "price": "54.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "8 oz Petit Filet Mignon",
        "price": "49.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "12 oz Filet Mignon",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "20 oz Dry Aged Cowboy Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "16 oz Prime Ribeye Steak",
        "price": "59.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "42 oz Prime Porterhouse Steak for Two",
        "price": "(MP)",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu 12 oz. NY Strip Steak",
        "price": "79.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu 12 oz. Ribeye",
        "price": "84.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Snake River Farms: American Wagyu 8 oz. Petite Filet Mignon",
        "price": "74.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish Cream, Au Poivre, Hollandaise, Béarnaise Sauces, Truffle aioli, blue cheese crust or Roots Cowboy Butter",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roots Tailors Plate a surf & turf petite 6 oz filet, two jumbo shrimp with a scampi butter sauce",
        "price": "47.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Beef Wellington (limited availability) filet mignon, mushroom, asparagus, hollandaise sauce",
        "price": "52.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roots Chicken Parm red pepper marinara, parmesan, creamy burrata",
        "price": "31.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "East Coast Halibut herb-crusted, dill, capers, beurre blanc",
        "price": "40.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "9 oz. South African Lobster Tail Served Broiled or Steamed",
        "price": "Current MP",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish-Crusted Faroe Island Salmon horseradish cream sauce and asparagus",
        "price": "35.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "True Dover Sole pan seared fillet, served in a Meuniere sauce - considered a delicacy, this fish is shipped directly from the Strait of Dover to ensure the mild and sweet flavor profile",
        "price": "64.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pan Seared Sea Scallops creamy mushroom risotto, crispy maitake mushrooms",
        "price": "38.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Grilled Yellowfin Tuna cooked rare, steakhouse fries, garden vegetable vinaigrette, basil",
        "price": "38.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Blue cheese hat",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Lobster & Cherry peppers",
        "price": "28.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Two Shrimp with beurre blanc",
        "price": "15.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Oscar Style colossal crab, asparagus, hollandaise",
        "price": "23.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Au Poivre",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Béarnaise",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Hollandaise",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Horseradish Cream",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Cowboy Butter",
        "price": "4.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Our Famous Mac & Cheese",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Lobster Macaroni and Cheese",
        "price": "29.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Pomme Frites",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Truffle Pommes Frites",
        "price": "13.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Potatoes Au Gratin",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Loaded Colossal Baked Potato",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Classic Whipped Potatoes",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Loaded Whipped Stuffed Potatoes",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Onion Rings",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Creamed Corn sweet corn puree, roasted corn, pearl onions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Brussels Sprouts honey sambal, bacon, scallions",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Roasted Asparagus",
        "price": "11.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Broccoli Garlic & Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Roasted Wild Mushrooms Shiitake, Oyster, White Button, Herb Oil",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": false
      },
      {
        "item": "Creamed Spinach",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      },
      {
        "item": "Sauteed Spinach & Garlic",
        "price": "10.95",
        "menu_section": null,
        "category_section": null,
        "is_food": true,
        "is_vegetarian": true
      }
    ]
  }
];
