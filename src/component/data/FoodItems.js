const FoodItems = [
  {
    id: 1,
    title: "Tea",
    price: "10",
    name: "Tea - Refreshing Popular Beverage for All Seasons,Refreshing, Soothing, Warm ",
    image: "https://i.pinimg.com/736x/e5/b7/a8/e5b7a86fca1fa66c018fb16df303016d.jpg",
    rating: "4.6",
    approxTime: "3 mins",
    quantity: "150 ml"
  },
  {
    id: 2,
    title: "Coffee",
    price: "15",
    name: "Coffee - Energizing Morning Brew with Bold Flavors,Robust, Energizing",
    image: "https://i.pinimg.com/736x/25/bf/e5/25bfe592202a363eda69bf013ac6dba0.jpg",
    rating: "4.6",
    approxTime: "8 mins",
    quantity: "150 ml"
  },
  {
    id: 3,
    title: "Hot Milk",
    price: "20",
    name: "Hot Milk - Comforting Beverage for Relaxation,Creamy, Warm, Comforting",
    image: "https://i.pinimg.com/736x/84/7e/d5/847ed5190b241488a0143f1551a35c9e.jpg",
    rating: "4.6",
    approxTime: "10 mins",
    quantity: "200 ml"
  },
  {
    id: 4,
    title: "Biscuit",
    price: "10",
    name: "Biscuit - Crisp, Tasty Snack for Tea Time, Classic, Tasty",
    image: "https://i.pinimg.com/736x/ff/b3/54/ffb354e2229150b398f60ba300707a51.jpg",
    rating: "4.6",
    approxTime: "2 mins",
    quantity: "100 gm"
  },
  {
    id: 5,
    title: "Sweet Lassi",
    price: "30",
    name: "Sweet Lassi - Refreshing, Creamy Yogurt Drink, Creamy, Sweet, Chilled",
    image: "https://i.pinimg.com/736x/85/04/9f/85049f79282915f0b9271b648996230d.jpg",
    rating: "4.6",
    approxTime: "3 mins",
    quantity: "200 ml"
  },
  {
    id: 6,
    title: "Vada Pav",
    price: "16",
    name: "Vada Pav - Spicy, Crispy Marathi Street Snack, Crispy, Savory",
    image: "https://i.pinimg.com/736x/52/a2/f8/52a2f8d7f76cf306c0ac48a3e3e7a336.jpg",
    rating: "4.6",
    approxTime: "6 mins",
    quantity: "1 piece"
  },
  {
    id: 7,
    title: "Chicken Cutlet Pav",
    price: "40",
    name: "Chicken Cutlet Pav - Juicy, Flavorful Street Food, Juicy, Crispy, Flavorful",
    image: "https://i.pinimg.com/736x/9b/41/e1/9b41e1a256d969f4ee608eae3cfe49bd.jpg",
    rating: "4.6",
    approxTime: "5 mins",
    quantity: "1 piece"
  },
  {
    id: 8,
    title: "Samosa Pav",
    price: "18",
    name: "Samosa Pav - Crunchy Delight with Spicy Filling, Crispy, Spicy, Hearty",
    image: "https://i.pinimg.com/736x/9c/6a/70/9c6a7049e4dff1bc7c3422c40c3b83ca.jpg",
    rating: "4.6",
    approxTime: "3 mins",
    quantity: "1 piece"
  },
  {
    id: 9,
    title: "Bread Patice",
    price: "20",
    name: "Bread Patice - Fluffy Bread Stuffed with Spices, Crunchy, Spicy, Delicious",
    image: "https://m.media-amazon.com/images/X/bxt1/M/Pbxt1xySmqmkWKl._SL828_QL90_FMwebp_.jpg",
    rating: "4.6",
    approxTime: "9 mins",
    quantity: "1 piece"
  },
  {
    id: 10,
    title: "Kanda Poha",
    price: "30",
    name: "Kanda Poha - Tasty, Light Breakfast Dish,  Light, Tangy, Savory",
    image: "https://i.pinimg.com/736x/f3/95/1c/f3951c926de1485b2bb8fa7edf173ca9.jpg",
    rating: "4.6",
    approxTime: "7 mins",
    quantity: "150 gm"
  },
  {
    id: 11,
    title: "Upma",
    price: "30",
    name: "Upma - Spicy and Healthy South Indian Breakfast, Nutritious, Savory, Comforting",
    image: "https://www.rajbhog.com/wp-content/uploads/2022/11/Upma-The-classic-Indian-breakfast-dish-870x635.jpg",
    rating: "4.6",
    approxTime: "3 mins",
    quantity: "150 gm"
  },
  {
    id: 12,
    title: "Sheera",
    price: "35",
    name: "Sheera - Sweet and Warm Soothing Dessert,  Sweet, Warm, Fluffy",
    image: "https://www.cookwithkushi.com/wp-content/uploads/2022/08/sheera_recipe_suji_halwa_indian_dessert.jpg",
    rating: "4.6",
    approxTime: "6 mins",
    quantity: "150 gm"
  },
  {
    id: 13,
    title: "Misal 4 Pav",
    price: "50",
    name: "Misal Pav - Spicy, Tangy Maharashtrian Favorite, Hearty, Nutritious",
    image: "https://i.pinimg.com/736x/56/3b/33/563b33c26459b8f6897f6c38e03207a7.jpg",
    rating: "4.6",
    approxTime: "16 mins",
    quantity: "1 plate"
  },
  {
    id: 14,
    title: "Usal 4 Pav",
    price: "45",
    name: "Usal Pav - Zesty, High-Protein Street Dish, Spicy, Rich, Flavor-packed",
    image: "https://static.toiimg.com/photo/59218334.cms",
    rating: "4.6",
    approxTime: "12 mins",
    quantity: "1 plate"
  },
  {
    id: 15,
    title: "Puri Bhaji",
    price: "40",
    name: "Puri Bhaji - Crispy Puris with Flavorful Potato Curry, Soft, Hearty, Delicious",
    image: "https://i.pinimg.com/736x/98/90/05/9890058b90d5b3cdcb77c200fcb2e276.jpg",
    rating: "4.6",
    approxTime: "13 mins",
    quantity: "1 plate"
  },
  {
    id: 16,
    title: "Chhole Puri",
    price: "50",
    name: "Chhole Puri - Spicy Chickpea Curry with Crisp Puris, Spicy, Tangy, Filling",
    image: "https://i.pinimg.com/736x/b1/5c/53/b15c53ba9fcc8a167e0c9d4042c81002.jpg",
    rating: "4.6",
    approxTime: "15 mins",
    quantity: "1 plate"
  },
  {
    id: 17,
    title: "Chapati Bhaji",
    price: "40",
    name: "Chapati Bhaji - Flavorful Veg Curry with Soft Rotis, Comforting, Flavorful, Wholesome",
    image: "https://i.pinimg.com/736x/69/7e/b0/697eb0849fd9aa19ddb79877da63958d.jpg",
    rating: "4.6",
    approxTime: "11 mins",
    quantity: "100gm bhaji and 2 Roti"
  },
  {
    id: 18,
    title: "Dal Rice",
    price: "40",
    name: "Dal Rice - Hearty Comfort Meal with Tasty Lentils, Simple, Nutritious, Satisfying",
    image: "https://i.pinimg.com/736x/7b/77/0b/7b770b7a8cbb00d9bd0bdf3ba94883a3.jpg",
    rating: "4.6",
    approxTime: "6 mins",
    quantity: "1 plate"
  },
  {
    id: 19,
    title: "Dahi Rice",
    price: "45",
    name: "Dahi Rice - Simple and Cooling Indian Comfort Food, Cool, Refreshing, Light",
    image: "https://i.pinimg.com/736x/cf/60/68/cf60688defc7977efd97ee6db3b32459.jpg",
    rating: "4.6",
    approxTime: "8 mins",
    quantity: "1 plate"
  },
  {
    id: 20,
    title: "Rice Plate",
    price: "60",
    name: "Rice Plate - Wholesome and Filling Full Meal, Balanced, Filling, Classic",
    image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/13-_april/Every_day_lunch_plate_with_konkani_style_kodle_kadabu_bitter_gord_and_aloo-3.jpg",
    rating: "4.6",
    approxTime: "15 mins",
    quantity: "1 plate"
  },
  {
    id: 21,
    title: "Chicken Rice Plate",
    price: "70",
    name: "Chicken Rice Plate - Hearty, Flavor-packed Chicken Meal, Savory, Tender, Protein-packed",
    image: "https://www.shutterstock.com/image-photo/pilaf-chicken-drumstick-light-plate-600nw-2060463305.jpg",
    rating: "4.6",
    approxTime: "18 mins",
    quantity: "1 plate"
  },
  {
    id: 22,
    title: "Egg Rice Plate",
    price: "65",
    name: "Egg Rice Plate - Protein-rich and Satisfying Dish,  Protein-rich, Flavorful, Hearty",
    image: "https://i.pinimg.com/736x/70/53/37/70533793683a3e6c07753fe0f36e4c60.jpg",
    rating: "4.6",
    approxTime: "10 mins",
    quantity: "1 plate"
  },
  {
    id: 23,
    title: "Dal Gosht Rice (Friday)",
    price: "75",
    name: "Dal Gosht Rice - Rich and Flavorful Classic Dish, Spicy, Rich, Hearty",
    image: "https://i.pinimg.com/736x/be/8b/11/be8b1101f5e9c14dcd74c4ec5378a32a.jpg",
    rating: "4.6",
    approxTime: "18 mins",
    quantity: "1 plate"
  },
  {
    id: 24,
    title: "Chicken Pulav Half",
    price: "80",
    name: "Chicken Pulav - Fragrant Rice and Tender Chicken, Aromatic, Spicy, Filling",
    image: "https://i.pinimg.com/736x/1f/35/01/1f35015065985e4096d3066e251f0c13.jpg",
    rating: "4.6",
    approxTime: "12 mins",
    quantity: "1 half plate"
  },
  {
    id: 25,
    title: "Chicken Biryani Half",
    price: "90",
    name: "Chicken Biryani - Aromatic, Spicy Rice with Savory Chicken, Fragrant, Spicy, Savory",
    image: "https://i.pinimg.com/736x/b2/de/5c/b2de5cb647a23e3eb8b54fb1f35e135f.jpg",
    rating: "4.6",
    approxTime: "13 mins",
    quantity: "1 half plate"
  },
  
  {
    id: 26,
    title: "Chicken Kheema 6 Pav",
    price: "85",
    name: "Chicken Kheema Pav Popular Dish, Spicy, Flavorful, Hearty",
    image: "https://i.pinimg.com/736x/a9/d6/50/a9d65015d6aa4bfacea20b0aa15df409.jpg",
    rating: "4.6",
    approxTime: "18 mins",
    quantity: "6 pav"
  },
  {
    id: 27,
    title: "Dal Khichdi",
    price: "50",
    name: "Dal Khichdi Popular Dish, Nutritious, Comforting, Hearty",
    image: "https://i.pinimg.com/736x/45/6d/73/456d732689b262b0688ff28223b18816.jpg",
    rating: "4.6",
    approxTime: "12 mins",
    quantity: "200 gm"
  },
  {
    id: 28,
    title: "Dal Tadka",
    price: "55",
    name: "Dal Tadka Popular Dish, Spicy, Tangy, Flavorful",
    image: "https://i.pinimg.com/736x/10/7a/7d/107a7de87ca01e4379993059a1280bf2.jpg",
    rating: "4.6",
    approxTime: "15 mins",
    quantity: "200 gm"
  },
  {
    id: 29,
    title: "Dal Fry",
    price: "55",
    name: "Dal Fry - Hearty, Spicy, Rich",
    image: "https://i.pinimg.com/736x/a2/af/5c/a2af5ceb4787f223570157b6fcfeee8d.jpg",
    rating: "4.6",
    approxTime: "14 mins",
    quantity: "200 gm"
  },
  {
    id: 30,
    title: "Aloo Matar",
    price: "50",
    name: "Aloo Matar - Savory, Wholesome, Comforting",
    image: "https://i.pinimg.com/736x/45/1a/02/451a02b279a80cc43cd9383d814541a2.jpg",
    rating: "4.6",
    approxTime: "19 mins",
    quantity: "200 gm"
  },
  {
    id: 31,
    title: "Paneer Matar",
    price: "70",
    name: "Paneer Matar - Creamy, Protein-rich, Flavorful",
    image: "https://i.pinimg.com/736x/ab/e8/7e/abe87e141c8ac81290730af7f651f17e.jpg",
    rating: "4.6",
    approxTime: "16 mins",
    quantity: "200 gm"
  },
  {
    id: 32,
    title: "Bread Omelette",
    price: "40",
    name: "Bread Omelette - Savory, Wholesome, Quick",
    image: "https://i.pinimg.com/736x/8f/8b/5a/8f8b5aca05fe378a5107cbf5bd44044d.jpg",
    rating: "4.6",
    approxTime: "13 mins",
    quantity: "1 plate"
  },
  {
    id: 33,
    title: "Omelette Pav Single",
    price: "35",
    name: "Omelette Pav - Light, Fluffy, Quick",
    image: "https://i.pinimg.com/736x/09/85/fc/0985fc0ee1f6e3f798f3bdc663df14ad.jpg",
    rating: "4.6",
    approxTime: "13 mins",
    quantity: "2 pav"
  },
  {
    id: 34,
    title: "Bhurji Pav Single",
    price: "45",
    name: "Bhurji Pav - Scrambled, Spicy, Satisfying",
    image: "https://i.pinimg.com/736x/3f/ff/a3/3fffa3b2c4ee9f55a412ac38d825f8d1.jpg",
    rating: "4.6",
    approxTime: "12 mins",
    quantity: "4 pav"
  },
  {
    id: 35,
    title: "Chicken Fried Rice Half",
    price: "50",
    name: "Chicken Fried Rice - Spicy, Flavorful, Hearty",
    image: "https://i.pinimg.com/736x/10/5d/71/105d71ea81e8e015211b34d86047e65f.jpg",
    rating: "4.6",
    approxTime: "14 mins",
    quantity: "250 gm"
  },
  {
    id: 36,
    title: "Chicken Noodle Half",
    price: "50",
    name: "Chicken Noodle - Delicious, Spicy, Nutritious",
    image: "https://i.pinimg.com/736x/c2/e7/21/c2e721dd8638b64ec13cfeaa6051d8e4.jpg",
    rating: "4.6",
    approxTime: "12 mins",
    quantity: "250 gm"
  },
  {
    id: 37,
    title: "Veg. Fried Rice Half",
    price: "60",
    name: "Veg. Fried Rice - Flavorful, Filling, Healthy",
    image: "https://i.pinimg.com/736x/ec/bd/ec/ecbdeca3a2f1ace8ce5ffa8492fd181e.jpg",
    rating: "4.6",
    approxTime: "18 mins",
    quantity: "250 gm"
  },
  {
    id: 38,
    title: "Veg. Noodle Half",
    price: "65",
    name: "Veg. Noodle - Tasty, Crunchy, Hearty",
    image: "https://i.pinimg.com/736x/a1/d6/1d/a1d61d04c329c5d50fdea717d07f4b84.jpg",
    rating: "4.6",
    approxTime: "13 mins",
    quantity: "250 gm"
  },
  {
    id: 39,
    title: "Bhaji",
    price: "55",
    name: "Bhaji - Savory, Fresh, Wholesome",
    image: "https://i.pinimg.com/736x/33/e2/0b/33e20bcca61bb6167ba8f7386cac186f.jpg",
    rating: "4.6",
    approxTime: "9 mins",
    quantity: "200 gm"
  },
  {
    id: 40,
    title: "Chhole",
    price: "50",
    name: "Chhole - Spicy, Tangy, Filling",
    image: "https://i.pinimg.com/736x/33/e2/0b/33e20bcca61bb6167ba8f7386cac186f.jpg",
    rating: "4.6",
    approxTime: "15 mins",
    quantity: "200 gm"
  },
  {
    id: 41,
    title: "Chicken Korma",
    price: "85",
    name: "Chicken Korma - Tender, Spicy, Rich",
    image: "https://i.pinimg.com/736x/1c/a5/8c/1ca58caf2cc28513b25a9b8e1ed091de.jpg",
    rating: "4.6",
    approxTime: "10 mins",
    quantity: "1 plate"
  },
  {
    id: 42,
    title: "Egg Curry",
    price: "65",
    name: "Egg Curry - Spicy, Rich, Flavorful",
    image: "https://i.pinimg.com/736x/cd/19/e1/cd19e1bba92541a6f06c6094893ffe16.jpg",
    rating: "4.6",
    approxTime: "13 mins",
    quantity: "1 plate"
  },
  {
    id: 43,
    title: "Roti",
    price: "15",
    name: "Roti - Soft, Warm, Fresh",
    image: "https://i.pinimg.com/736x/08/81/60/0881603dca57977a8b0ee0800f2fc530.jpg",
    rating: "4.6",
    approxTime: "13 mins",
    quantity: "1 piece"
  },
  {
    id: 44,
    title: "Papad",
    price: "10",
    name: "Papad - Crunchy, Spicy, Savory",
    image: "https://bajarhaat.com/wp-content/uploads/2024/06/Masala-Papad.webp",
    rating: "4.6",
    approxTime: "10 mins",
    quantity: "1 piece"
  },
  {
    id: 45,
    title: "Dahi Curd",
    price: "20",
    name: "Dahi Curd - Cool, Refreshing, Mild",
    image: "https://i.pinimg.com/736x/7b/82/51/7b8251f15a271dc196009f14b7a77126.jpg",
    rating: "4.6",
    approxTime: "8 mins",
    quantity: "1 bowl"
  }
  
];
  
  export default FoodItems;
  