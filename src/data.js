const tours = [
  {
    id: 13,
    title: 'Chardham Package',
    image: '/images/chardham.webp',
    price: 'Rs 15,000',
    description: 'A complete 10-day spiritual journey covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Starting from Haridwar and returning to Haridwar with a scheduled pickup at 9:00 AM.',
    itinerary: [
      { day: 1, title: 'Haridwar to Barkot', description: 'Pickup From Haridwar Railway Station At 9:00 Am. Drive to Barkot. Night stay at Barkot.' },
      { day: 2, title: 'Barkot - Yamunotri - Barkot', description: 'Visit Yamunotri and return to Barkot. Night stay at Barkot.' },
      { day: 3, title: 'Barkot to Uttarkashi', description: 'Drive to Uttarkashi. Night stay at Uttarkashi.' },
      { day: 4, title: 'Uttarkashi - Gangotri - Uttarkashi', description: 'Visit Gangotri and return to Uttarkashi. Night stay at Uttarkashi.' },
      { day: 5, title: 'Uttarkashi to Sersi/Sitapur', description: 'Drive to Sersi/Sitapur. Night stay at Sersi/Sitapur.' },
      { day: 6, title: 'Sersi/Sitapur to Kedarnath', description: 'Trek or take a helicopter to Kedarnath. Night stay at Kedarnath (Camp).' },
      { day: 7, title: 'Kedarnath to Sersi/Sitapur', description: 'Return from Kedarnath to Sersi/Sitapur. Night stay at Sersi/Sitapur.' },
      { day: 8, title: 'Sersi/Sitapur - Tungnath - Pipalkoti', description: 'Visit Tungnath and drive to Pipalkoti. Night stay at Pipalkoti.' },
      { day: 9, title: 'Pipalkoti - Badrinath - Mana Gaon - Pipalkoti', description: 'Visit Badrinath and Mana Gaon. Night stay at Pipalkoti.' },
      { day: 10, title: 'Pipalkoti to Haridwar', description: 'Drive back to Haridwar and drop at railway station.' }
    ],
    inclusions: ['Railway Station Pickup/Drop (9:00 AM)', 'Accommodation on sharing basis', 'Breakfast and Dinner', 'Sightseeing as per itinerary'],
    exclusions: ['Helicopter tickets', 'Pony/Palki charges', 'Lunch', 'Personal expenses']
  },
  {
    id: 14,
    title: 'Do Dham Package',
    image: '/images/badrinath.webp',
    price: 'Rs 10,000',
    description: 'A divine journey to Kedarnath and Badrinath, the two most sacred Dhams. Starting from Haridwar and returning to Haridwar.',
    itinerary: [
      { day: 1, title: 'Haridwar to Sersi/Sitapur', description: 'Pickup and drive to Sersi/Sitapur. Night stay at Sersi/Sitapur.' },
      { day: 2, title: 'Sersi/Sitapur to Kedarnath', description: 'Visit Kedarnath. Night stay at Kedarnath (Camp).' },
      { day: 3, title: 'Kedarnath to Sersi/Sitapur', description: 'Return to Sersi/Sitapur. Night stay at Sersi/Sitapur.' },
      { day: 4, title: 'Sersi/Sitapur to Pipalkoti', description: 'Drive to Pipalkoti via Tungnath. Night stay at Pipalkoti.' },
      { day: 5, title: 'Pipalkoti to Badrinath', description: 'Visit Badrinath and Mana Village. Night stay at Pipalkoti.' },
      { day: 6, title: 'Pipalkoti to Haridwar', description: 'Drop at Haridwar railway station.' }
    ],
    inclusions: ['Railway Station Pickup/Drop', 'Accommodation', 'Breakfast and Dinner'],
    exclusions: ['Trek charges', 'Lunch', 'Personal expenses']
  },
  {
    id: 15,
    title: 'Kedarnath Package',
    image: '/images/kedarnath.webp',
    price: 'Rs 8,500',
    description: 'A focused spiritual trip to the holy Kedarnath temple in the Himalayas. Starting from Haridwar and returning to Haridwar.',
    itinerary: [
      { day: 1, title: 'Haridwar to Sersi/Sitapur', description: 'Pickup and drive to Sersi/Sitapur. Night stay at Sersi/Sitapur.' },
      { day: 2, title: 'Sersi/Sitapur to Kedarnath', description: 'Trek to Kedarnath. Night stay at Kedarnath (Camp).' },
      { day: 3, title: 'Kedarnath to Sersi/Sitapur', description: 'Return trek to Sersi/Sitapur. Night stay at Sersi/Sitapur.' },
      { day: 4, title: 'Sersi/Sitapur to Haridwar', description: 'Drive back and drop at Haridwar railway station.' }
    ],
    inclusions: ['Haridwar Pickup/Drop', 'Camp Stay at Kedarnath', 'Hotel Stay at Sersi', 'Breakfast and Dinner'],
    exclusions: ['Helicopter tickets', 'Pony charges', 'Lunch']
  }
];

export default tours;
