// Mock data for Peak Odysseys - Nepal Hiking Team style clone

export const brand = {
  name: 'Peak Odysseys',
  tagline: 'Walk, Explore and Discover',
  phone: '+977 9851058678',
  whatsapp: '+977 9851058678',
  email: 'sales@peakodysseys.com',
  rating: 5.0,
  reviewsCount: 2701,
};

export const navItems = [
  {
    label: 'NEPAL',
    columns: [
      { title: 'Trekking Regions', items: ['Everest Region', 'Annapurna Region', 'Langtang Region', 'Manaslu Region', 'Upper Mustang'] },
      { title: 'Activities', items: ['Trekking', 'Peak Climbing', 'Cultural Tours', 'Wildlife Safari', 'Helicopter Tours'] },
      { title: 'Destinations', items: ['Kathmandu', 'Pokhara', 'Chitwan', 'Lumbini', 'Nagarkot'] },
    ],
  },
  {
    label: 'TIBET',
    columns: [
      { title: 'Popular Tours', items: ['Lhasa Tour', 'Everest North Base Camp', 'Mt. Kailash Tour', 'Namtso Lake', 'Tibet Overland'] },
    ],
  },
  {
    label: 'BHUTAN',
    columns: [
      { title: 'Bhutan Experiences', items: ['Glimpse of Bhutan', 'Cultural Bhutan Tour', 'Bhutan Trekking', 'Festival Tours'] },
    ],
  },
  {
    label: 'NEPAL TREKKING',
    columns: [
      { title: 'By Region', items: ['Everest Trekking', 'Annapurna Trekking', 'Langtang Trekking', 'Manaslu Trekking', 'Restricted Area Trekking'] },
      { title: 'By Type', items: ['Teahouse Trek', 'Camping Trek', 'Luxury Trek', 'Short Treks', 'Off-the-Beaten Path'] },
    ],
  },
  {
    label: 'TOUR PACKAGES',
    columns: [
      { title: 'Tour Categories', items: ['Cultural Tours', 'Day Tours', 'Wildlife Tours', 'Honeymoon Tours', 'Photography Tours'] },
    ],
  },
  {
    label: 'TRAVEL GUIDE',
    columns: [
      { title: 'Resources', items: ['Travel Insurance', 'Visa Information', 'Packing List', 'Best Time to Travel', 'Acclimatization Guide'] },
    ],
  },
  {
    label: 'ABOUT US',
    columns: [
      { title: 'Company', items: ['Our Story', 'Our Team', 'Awards', 'Reviews', 'Sustainability'] },
    ],
  },
];

export const bestSellers = [
  {
    id: 'everest-base-camp-trek',
    title: 'Everest Base Camp Trek',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80',
    days: '16 days',
    reviews: 346,
    price: 1525,
    badge: 'Group Tours',
    badgeColor: 'emerald',
  },
  {
    id: 'annapurna-base-camp-trek',
    title: 'Annapurna Base Camp Trek',
    image: 'https://images.unsplash.com/photo-1578589591337-864142c03335?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80',
    days: '14 days',
    reviews: 70,
    price: 1090,
    badge: 'Best Price',
    badgeColor: 'red',
  },
  {
    id: 'manaslu-circuit-trek',
    title: 'Manaslu Circuit Trek',
    image: 'https://images.unsplash.com/photo-1645788421204-0e4eb1d2a518?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80',
    days: '14 days',
    reviews: 37,
    price: 1380,
    badge: 'Featured',
    badgeColor: 'orange',
  },
  {
    id: 'annapurna-circuit-trek',
    title: 'Annapurna Circuit Trek',
    image: 'https://images.unsplash.com/photo-1646140393840-62afb77e3358?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80',
    days: '14 days',
    reviews: 80,
    price: 1250,
    badge: 'Group Tours',
    badgeColor: 'emerald',
  },
  {
    id: 'langtang-valley-trek',
    title: 'Langtang Valley Trek',
    image: 'https://images.unsplash.com/photo-1718179634911-8551f8b0cccf?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80',
    days: '10 days',
    reviews: 34,
    price: 750,
    badge: 'Top Seller',
    badgeColor: 'sky',
  },
  {
    id: 'gokyo-lakes-trek',
    title: 'Gokyo Lakes Trek',
    image: 'https://images.unsplash.com/photo-1645033393637-9089ab100756?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80',
    days: '13 days',
    reviews: 52,
    price: 1295,
    badge: 'Featured',
    badgeColor: 'orange',
  },
];

export const categories = [
  { name: 'Nepal Trekking', count: 105, icon: 'hiker' },
  { name: 'Nepal Tours', count: 16, icon: 'van' },
  { name: 'Peak Climbing', count: 10, icon: 'boot' },
];

export const departures = [
  { trip: 'Everest Base Camp Trek', duration: '16 Days', from: '15th May', to: '30th May', status: 'Guaranteed', seats: 2, price: 1525, was: 1601.25 },
  { trip: 'Annapurna Circuit Trek', duration: '14 Days', from: '18th May', to: '31st May', status: 'Guaranteed', seats: 2, price: 1250, was: 1312.5 },
  { trip: 'Annapurna Panorama Trek', duration: '08 Days', from: '15th May', to: '22nd May', status: 'Guaranteed', seats: 2, price: 710, was: 745.5 },
  { trip: 'Gokyo Lake Luxury Trek', duration: '15 Days', from: '15th May', to: '29th May', status: 'Guaranteed', seats: 2, price: 3290, was: 3454.5 },
  { trip: 'Mohare Danda Trek with Poon Hill', duration: '07 Days', from: '15th May', to: '21st May', status: 'Guaranteed', seats: 2, price: 890, was: 934.5 },
  { trip: 'Nagarkot Chisapani Hiking Tours', duration: '03 Days', from: '15th May', to: '17th May', status: 'Guaranteed', seats: 2, price: 350, was: 367.5 },
];

export const luxuryTrips = [
  {
    id: 'everest-base-camp-luxury',
    title: 'Everest Base Camp Luxury Trek',
    image: 'https://images.unsplash.com/photo-1697012511691-52b2c14a133d?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80',
    days: '16 days',
    reviews: 19,
    price: 2625,
    badge: 'Private Trip',
    badgeColor: 'orange',
  },
  {
    id: 'annapurna-luxury',
    title: 'Annapurna Luxury Trek',
    image: 'https://images.unsplash.com/photo-1582466521533-0c6aa82f4be5?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80',
    days: '09 days',
    reviews: 5,
    price: 1750,
    badge: 'Featured',
    badgeColor: 'orange',
  },
  {
    id: 'everest-luxury',
    title: 'Everest Luxury Trek',
    image: 'https://images.unsplash.com/photo-1716746023060-d6dc0b1dcbb2?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80',
    days: '11 days',
    reviews: 3,
    price: 2450,
    badge: 'Private Trip',
    badgeColor: 'orange',
  },
];

export const featuredHolidays = [
  {
    id: 'annapurna-panorama',
    title: 'Annapurna Panorama Trek',
    image: 'https://images.unsplash.com/photo-1645033393602-4f7623917853?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80',
    days: '08 days',
    reviews: 24,
    price: 710,
    badge: 'Group Tours',
    badgeColor: 'emerald',
  },
  {
    id: 'glimpse-of-bhutan',
    title: 'Glimpse of Bhutan Tour',
    image: 'https://images.unsplash.com/photo-1571330177831-a12160efd5e7?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80',
    days: '05 days',
    reviews: 7,
    price: 1450,
    badge: 'Top Seller',
    badgeColor: 'sky',
  },
  {
    id: 'everest-chola-pass',
    title: 'Everest Chola Pass Trek',
    image: 'https://images.unsplash.com/photo-1609660062508-1ac4a930232d?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80',
    days: '19 days',
    reviews: 27,
    price: 1750,
    badge: 'Best Price',
    badgeColor: 'red',
  },
];

export const tripOfMonth = {
  title: 'Langtang Gosaikunda Trek',
  days: '16 days',
  price: 995,
  image: 'https://images.unsplash.com/photo-1635390335522-ca0b7ff2fa71?crop=entropy&cs=srgb&fm=jpg&w=1600&q=80',
};

export const story = {
  title: 'Relearning the ABCs of hiking on the Annapurna Base Camp trek, part one: Getting the band (back) together',
  author: 'Mark Smeltz',
  date: '18 Nov, 2023',
  image: 'https://images.unsplash.com/photo-1598313795136-a202370958af?crop=entropy&cs=srgb&fm=jpg&w=1400&q=80',
  avatar: 'https://i.pravatar.cc/96?img=12',
};

export const blogPosts = [
  { id: 1, title: 'Best Time for Upper Mustang Trek', date: '12 May, 2026', image: 'https://images.unsplash.com/photo-1645033393602-4f7623917853?crop=entropy&cs=srgb&fm=jpg&w=900&q=80' },
  { id: 2, title: 'Upper Mustang Height, Elevation, and Altitude', date: '08 May, 2026', image: 'https://images.unsplash.com/photo-1509883488717-779cd2d85976?crop=entropy&cs=srgb&fm=jpg&w=900&q=80' },
  { id: 3, title: 'Tips on Choosing Right Tour Operator in Nepal', date: '07 May, 2026', image: 'https://images.unsplash.com/photo-1544735716-9f30e75e84dc?crop=entropy&cs=srgb&fm=jpg&w=900&q=80' },
  { id: 4, title: 'Mount Everest Vs Mount Kilimanjaro: Which Trek to Choose First?', date: '06 May, 2026', image: 'https://images.unsplash.com/photo-1645788421204-0e4eb1d2a518?crop=entropy&cs=srgb&fm=jpg&w=900&q=80' },
];

export const faqs = [
  { q: 'I\u2019m interested in trekking. What package would you recommend?', a: 'Peak Odysseys offers a wide range of trekking packages across the Himalayas. Depending on your time, fitness level, and the kind of experience you want, you can choose from short treks, classic teahouse treks, restricted-area expeditions or luxury packages. Browse our packages or talk to our team for a personalised recommendation.' },
  { q: 'What safety measures are adopted by Peak Odysseys during a trek?', a: 'We follow strict safety protocols on every trek. Our lead guides are trained in wilderness first aid, carry oximeters, oxygen, comprehensive first-aid kits and rescue equipment. In emergencies, the team quickly assesses the situation and arranges either descent or helicopter evacuation.' },
  { q: 'How does Peak Odysseys help trekkers with acclimatization?', a: 'All itineraries include built-in acclimatization days at strategic altitudes. Our guides continuously monitor your health and adjust pace, altitude gain and rest to ensure a safe, gradual ascent.' },
  { q: 'How do I get in touch with Peak Odysseys?', a: 'You can call or WhatsApp us 24/7 at +977 9851058678, email sales@peakodysseys.com, fill out the contact form on our website or visit our office in Kathmandu.' },
  { q: 'What should my travel insurance cover?', a: 'Travel insurance is mandatory and should cover high-altitude trekking, helicopter evacuation, medical emergencies, trip cancellations and lost baggage. We are happy to recommend trusted providers.' },
  { q: 'Can I choose a private tour, which can be customized?', a: 'Yes \u2014 every trek and tour can be customised. Choose your dates, route, accommodation level and pace, and we will tailor the itinerary to match.' },
  { q: 'Does Peak Odysseys offer one-day hikes or cultural tour packages?', a: 'Absolutely. We run day hikes around Kathmandu Valley, cultural tours, wildlife safaris and luxury experiences in Nepal, Bhutan and Tibet.' },
  { q: 'Why should I choose Peak Odysseys for my trip?', a: 'We are a team of mountain locals with decades of combined experience. Safety, authenticity, flexibility and genuine hospitality sit at the core of everything we do \u2014 backed by hundreds of five-star reviews.' },
];

export const footerLinks = {
  company: ['About Us', 'Our Team', 'Careers', 'Sustainability', 'Reviews', 'Awards'],
  destinations: ['Nepal', 'Tibet', 'Bhutan', 'Everest Region', 'Annapurna Region'],
  resources: ['Travel Guide', 'Visa Info', 'Insurance', 'Packing List', 'FAQs'],
  legal: ['Terms & Conditions', 'Privacy Policy', 'Booking Policy', 'Refund Policy'],
};
