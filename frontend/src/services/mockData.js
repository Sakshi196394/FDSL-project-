export const restaurantInfo = {
  name: "Hotel Vahinisaheb",
  nameMarathi: "हॉटेल वहिनी साहेब",
  taglineMarathi: "महाराष्ट्रीयन चवीचा खरा आस्वाद",
  description:
    "Experience the authentic taste of Maharashtra, prepared with traditional recipes, fresh ingredients and the warmth of Maharashtrian hospitality.",
  address: "Shikrapur, Pune, Maharashtra",
  phone: "+91 XXXXX XXXXX",
  hours: "11:00 AM – 11:00 PM",
  rating: "4.8 / 5 Customer Rating",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Shikrapur,Pune,Maharashtra&output=embed",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Shikrapur%2CPune%2CMaharashtra"
};

export const whyChooseUsFeatures = [
  {
    icon: "🍛",
    title: "Authentic Taste",
    description: "Traditional Maharashtrian recipes"
  },
  {
    icon: "🌿",
    title: "Fresh Ingredients",
    description: "Fresh and quality ingredients"
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Friendly",
    description: "A perfect place for families"
  },
  {
    icon: "✨",
    title: "Hygienic & Clean",
    description: "Clean and comfortable ambience"
  }
];

export const menuCategories = [
  { id: "all", label: "All" },
  { id: "veg", label: "Veg" },
  { id: "nonveg", label: "Non-Veg" },
  { id: "breads", label: "Breads" },
  { id: "drinks", label: "Beverages" }
];

export const initialMenuItems = [
  {
    id: 1,
    name: "महाराष्ट्रीयन थाळी",
    category: "veg",
    price: 280,
    badge: "BEST SELLER",
    icon: "🍛",
    description:
      "Complete traditional Maharashtrian meal with authentic flavours."
  },
  {
    id: 2,
    name: "मटण रस्सा",
    category: "nonveg",
    price: 320,
    badge: "CHEF'S PICK",
    icon: "🍗",
    description: "Rich and spicy traditional Maharashtrian mutton curry."
  },
  {
    id: 3,
    name: "भरली वांगी",
    category: "veg",
    price: 180,
    badge: "POPULAR",
    icon: "🥘",
    description: "Stuffed brinjals cooked with authentic Maharashtrian masala."
  },
  {
    id: 4,
    name: "भाकरी",
    category: "breads",
    price: 50,
    badge: "TRADITIONAL",
    icon: "🫓",
    description: "Traditional Maharashtrian millet flatbread."
  },
  {
    id: 5,
    name: "ताक",
    category: "drinks",
    price: 40,
    badge: "FRESH",
    icon: "🥛",
    description: "Refreshing traditional Maharashtrian buttermilk."
  },
  {
    id: 6,
    name: "चिकन मसाला",
    category: "nonveg",
    price: 260,
    badge: "SIGNATURE",
    icon: "🍖",
    description: "Spicy chicken cooked with our signature masala."
  }
];

export const mealBuilderOptions = {
  mainCourse: [
    { name: "Veg Thali", price: 180, calories: 550 },
    { name: "Maharashtrian Thali", price: 280, calories: 750 },
    { name: "Mutton Rassa", price: 320, calories: 650 },
    { name: "Chicken Masala", price: 260, calories: 580 }
  ],
  bread: [
    { name: "Bhakri", price: 50, calories: 120 },
    { name: "Chapati", price: 40, calories: 100 }
  ],
  rice: [
    { name: "Steamed Rice", price: 90, calories: 180 },
    { name: "Jeera Rice", price: 120, calories: 220 }
  ],
  drink: [
    { name: "Taak", price: 40, calories: 60 },
    { name: "Sol Kadhi", price: 60, calories: 80 }
  ],
  dessert: [
    { name: "Shrikhand", price: 100, calories: 250 },
    { name: "Puran Poli", price: 120, calories: 300 }
  ]
};

export const signatureDishes = [
  {
    id: "sig-1",
    name: "Maharashtrian Thali",
    icon: "🍛",
    description: "A complete celebration of traditional Maharashtrian flavours."
  },
  {
    id: "sig-2",
    name: "Kolhapuri Mutton",
    icon: "🍗",
    description: "Bold, spicy and rich mutton prepared with traditional masala."
  },
  {
    id: "sig-3",
    name: "Bhakri & Pithla",
    icon: "🫓",
    description: "A timeless Maharashtrian combination loved by generations."
  }
];

export const statisticsData = [
  { value: "15+", label: "Years of Service" },
  { value: "50K+", label: "Happy Customers" },
  { value: "40+", label: "Signature Dishes" },
  { value: "4.8★", label: "Customer Rating" }
];

export const galleryItems = [
  { id: 1, icon: "🍛", title: "Authentic Maharashtrian Thali", tag: "Food" },
  { id: 2, icon: "🏠", title: "Warm Dining Ambience", tag: "Ambience" },
  { id: 3, icon: "🔥", title: "Chulivarchi Traditional Cooking", tag: "Kitchen" },
  { id: 4, icon: "🥘", title: "Bharli Vangi Handi", tag: "Food" },
  { id: 5, icon: "🫓", title: "Fresh Hot Jowar Bhakri", tag: "Food" },
  { id: 6, icon: "🌿", title: "Organic & Fresh Spices", tag: "Kitchen" },
  { id: 7, icon: "🍗", title: "Spicy Kolhapuri Non-Veg", tag: "Food" },
  { id: 8, icon: "🪔", title: "Traditional Maharashtrian Hospitality", tag: "Interior" }
];

export const customerReviews = [
  {
    id: 1,
    author: "Rahul P.",
    rating: 5,
    text: "The Maharashtrian thali was absolutely delicious. Everything tasted authentic."
  },
  {
    id: 2,
    author: "Sneha K.",
    rating: 5,
    text: "Amazing food and beautiful ambience. Definitely one of my favourite restaurants."
  },
  {
    id: 3,
    author: "Aditya S.",
    rating: 5,
    text: "The bhakri and pithla reminded me of traditional homemade Maharashtrian food."
  }
];
