// current data bank, move to firestore later
import heroImg1 from "@assets/images/hero/1.jpg";
import heroImg2 from "@assets/images/hero/2.jpg";
import heroImg3 from "@assets/images/hero/3.jpg";
import heroImg4 from "@assets/images/hero/4.jpg";
import heroImg5 from "@assets/images/hero/5.jpg";
import heroImg6 from "@assets/images/hero/6.jpg";
import { ActivityTypes } from "../types/types";

export const heroSlides = [
  {
    src: heroImg4,
    headingKey: "hero.slides.1.heading",
    subHeadingKey: "hero.slides.1.subHeading",
  },
  {
    src: heroImg2,
    headingKey: "hero.slides.2.heading",
    subHeadingKey: "hero.slides.2.subHeading",
  },
  {
    src: heroImg3,
    headingKey: "hero.slides.3.heading",
    subHeadingKey: "hero.slides.3.subHeading",
  },
  {
    src: heroImg1,
    headingKey: "hero.slides.4.heading",
    subHeadingKey: "hero.slides.4.subHeading",
  },
  {
    src: heroImg5,
    headingKey: "hero.slides.5.heading",
    subHeadingKey: "hero.slides.5.subHeading",
  },
  {
    src: heroImg6,
    headingKey: "hero.slides.6.heading",
    subHeadingKey: "hero.slides.6.subHeading",
  },
];

export const featuredStats = [
  { number: "10M+", descriptionKey: "featured.visitors" },
  { number: "50+", descriptionKey: "featured.beaches" },
  { number: "12K", descriptionKey: "featured.destinations" },
  { number: "5.0", descriptionKey: "featured.rating" },
];

export const HomeTopDestinationsImage = [
  "https://picsum.photos/900/500", // Image for the first attraction
  "https://picsum.photos/900/755", // Image for the second attraction
  "https://picsum.photos/950/900", // Image for the third attraction
  "https://picsum.photos/900/560", // Image for the fourth attraction
];

export const nigerianCities: City[] = [
  {
    id: "1",
    name: "Lagos",
    location: {
      lat: 6.5244,
      lng: 3.3792,
      city: "Lagos",
      spot: "Lekki Phase 1",
    },
    description: "The largest city in Nigeria and a major financial center.",
    attractions: [
      {
        id: "l1",
        name: "Nike Art Gallery",
        location: {
          lat: 6.4698,
          lng: 3.5852,
          city: "Lagos",
          spot: "Lekki Phase 1",
        },
        description: "A prominent art gallery showcasing Nigerian art.",
        type: "Museum",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Nike_Art_Gallery_Lagos.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/3/3a/Nike_Art_Gallery_Interior.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/c/c1/Nike_Art_Gallery_Lagos.jpg",
        ],
      },
      {
        id: "l2",
        name: "Lekki Conservation Centre",
        location: {
          lat: 6.4418,
          lng: 3.5347,
          city: "Lagos",
          spot: "Lekki Peninsula",
        },
        description: "Nature reserve with canopy walkway.",
        type: "Park",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/e/e7/Lekki_Conservation_Center_Canopy_Walkway.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/6/66/Lekki_Conservation_Center.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/4/4d/Lekki_Conservation_Center.jpg",
        ],
      },
      {
        id: "l3",
        name: "National Theatre",
        location: { lat: 6.4929, lng: 3.3815, city: "Lagos", spot: "Iganmu" },
        description: "Iconic cultural center for music, theater, and art.",
        type: "Landmark",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/7/73/National_Theatre_Lagos.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/d9/National_Theatre_Lagos.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/5/5e/National_Theatre_Lagos_2.jpg",
        ],
      },
      {
        id: "l4",
        name: "Idanre Hills",
        location: {
          lat: 7.1155,
          lng: 5.1274,
          city: "Idanre",
          spot: "Idanre Town",
        },
        description: "Ancient hills ideal for hiking with breathtaking views.",
        type: "Hiking",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/c/c9/Idanre_Hills.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/9/90/Idanre_Hills_Landscape.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/0a/Idanre_Hills_view.jpg",
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Abuja",
    location: {
      lat: 9.0765,
      lng: 7.3986,
      city: "Abuja",
      spot: "Three Arms Zone",
    },
    description: "The capital city of Nigeria.",
    attractions: [
      {
        id: "a1",
        name: "Aso Rock",
        location: {
          lat: 9.0579,
          lng: 7.4951,
          city: "Abuja",
          spot: "Three Arms Zone",
        },
        description: "Iconic rock formation and seat of government.",
        type: "Landmark",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/6/68/Aso_Rock_-_Abuja%2C_Nigeria.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/2/29/Aso_Rock_Abuja.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Aso_Rock_Abuja_Nigeria.jpg",
        ],
      },
      {
        id: "a2",
        name: "National Mosque",
        location: {
          lat: 9.0527,
          lng: 7.4931,
          city: "Abuja",
          spot: "Central District",
        },
        description: "Principal mosque of Nigeria.",
        type: "Monument",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/3/33/National_Mosque%2C_Abuja.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/5/59/National_Mosque_Abuja.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/a/a9/National_Mosque_Abuja.jpg",
        ],
      },
      {
        id: "a3",
        name: "Millennium Park",
        location: {
          lat: 9.0768,
          lng: 7.4985,
          city: "Abuja",
          spot: "Maitama District",
        },
        description: "Large park with lush greenery and walking paths.",
        type: "Park",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/d/d6/Millennium_Park_Abuja.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/Millennium_Park%2C_Abuja.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/c/c1/Millennium_Park_Abuja.jpg",
        ],
      },
      {
        id: "a4",
        name: "Gurara Falls",
        location: {
          lat: 9.3333,
          lng: 7.8333,
          city: "Gurara",
          spot: "Niger State",
        },
        description: "Waterfalls popular for picnics and scenic views.",
        type: "Park",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/1/17/Gurara_Falls_Abuja.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/f/f1/Gurara_Falls_Niger.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/2/24/Gurara_Falls.jpg",
        ],
      },
      {
        id: "a5",
        name: "Zuma Rock",
        location: {
          lat: 9.1035,
          lng: 7.222,
          city: "Madalla",
          spot: "Niger State",
        },
        description: "A large monolithic rock and major natural landmark.",
        type: "Mountain",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/5/5c/Zuma_Rock.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/4/43/Zuma_Rock_Abuja.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/0c/Zuma_Rock_Abuja_1.jpg",
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Kano",
    location: { lat: 12.0022, lng: 8.5919, city: "Kano", spot: "Old City" },
    description:
      "One of the oldest cities in Nigeria, known for its historical sites.",
    attractions: [
      {
        id: "k1",
        name: "Gidan Makama Museum",
        location: { lat: 12.0059, lng: 8.5181, city: "Kano", spot: "Old City" },
        description: "Museum with artifacts of Kano's rich history.",
        type: "Museum",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Gidan_Makama_Museum.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/d6/Gidan_Makama_Museum_Kano.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/3/31/Gidan_Makama_Museum_Interior.jpg",
        ],
      },
      {
        id: "k2",
        name: "Kano City Walls",
        location: {
          lat: 12.0022,
          lng: 8.5919,
          city: "Kano",
          spot: "Ancient City",
        },
        description: "Ancient walls built to protect the old city.",
        type: "Landmark",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/1/13/Kano_City_Walls.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kano_City_Walls_Historical.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/02/Kano_City_Walls_Sunset.jpg",
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Jos",
    location: { lat: 9.8965, lng: 8.8583, city: "Jos", spot: "Plateau State" },
    description: "Known for its scenic plateau and cooler climate.",
    attractions: [
      {
        id: "j1",
        name: "Shere Hills",
        location: {
          lat: 9.8667,
          lng: 8.95,
          city: "Jos",
          spot: "Plateau State",
        },
        description: "Mountainous area great for hiking and adventure.",
        type: "Hiking",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/e/e2/Shere_Hills.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/df/Shere_Hills_Jos.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/f/f0/Shere_Hills_Jos_Plateau.jpg",
        ],
      },
      {
        id: "j2",
        name: "Jos Wildlife Park",
        location: { lat: 9.9333, lng: 8.9, city: "Jos", spot: "Plateau State" },
        description: "Nature park with diverse wildlife and picnic areas.",
        type: "Park",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/7/7e/Jos_Wildlife_Park.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/3/3a/Jos_Wildlife_Park_2.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/d2/Jos_Wildlife_Park_3.jpg",
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Port Harcourt",
    location: {
      lat: 4.8156,
      lng: 7.0498,
      city: "Port Harcourt",
      spot: "Tourist Beach Road",
    },
    description:
      "A port city known for its oil industry and beautiful scenery.",
    attractions: [
      {
        id: "p1",
        name: "Port Harcourt Tourist Beach",
        location: {
          lat: 4.7896,
          lng: 7.0081,
          city: "Port Harcourt",
          spot: "Tourist Beach Road",
        },
        description: "Beach with scenic views and tourist facilities.",
        type: "Park",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/f/fd/Port_Harcourt_Tourist_Beach.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/9/92/Port_Harcourt_Beach.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/3/36/Port_Harcourt_Tourist_Beach_View.jpg",
        ],
      },
      {
        id: "p2",
        name: "Isaac Boro Park",
        location: {
          lat: 4.8119,
          lng: 7.0498,
          city: "Port Harcourt",
          spot: "City Center",
        },
        description: "Park dedicated to Nigerian freedom fighter Isaac Boro.",
        type: "Park",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/f/f8/Isaac_Boro_Park.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/5/5d/Isaac_Boro_Park_Sculpture.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/05/Isaac_Boro_Park_View.jpg",
        ],
      },
    ],
  },
  {
    id: "6",
    name: "Enugu",
    location: { lat: 6.5244, lng: 7.5086, city: "Enugu", spot: "Awhum" },
    description: "Known for its coal mining industry and vibrant culture.",
    attractions: [
      {
        id: "e1",
        name: "Awhum Waterfall",
        location: { lat: 6.7167, lng: 7.4333, city: "Enugu", spot: "Awhum" },
        description: "Spectacular waterfall located in Awhum.",
        type: "Park",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/4/4d/Awhum_Waterfall_Enugu.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/f/fd/Awhum_Waterfall_Enugu_2.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/e/ea/Awhum_Waterfall_Enugu_3.jpg",
        ],
      },
      {
        id: "e2",
        name: "Enugu Golf Course",
        location: {
          lat: 6.5073,
          lng: 7.5127,
          city: "Enugu",
          spot: "Independence Layout",
        },
        description: "A well-maintained golf course in the heart of Enugu.",
        type: "Golf Course",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/6/6b/Enugu_Golf_Course.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/01/Enugu_Golf_Course_View.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/1/1e/Enugu_Golf_Course_1.jpg",
        ],
      },
      {
        id: "e3",
        name: "Ngwo Pine Forest",
        location: {
          lat: 6.5175,
          lng: 7.4331,
          city: "Enugu",
          spot: "Ngwo",
        },
        description: "A serene forest with pine trees and a cool atmosphere.",
        type: "Nature Reserve",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/7/7f/Ngwo_Pine_Forest.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/9/94/Ngwo_Pine_Forest_Enugu.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/2/2c/Ngwo_Pine_Forest_View.jpg",
        ],
      },
    ],
  },
  {
    id: "7",
    name: "Cross River",
    location: {
      lat: 5.45,
      lng: 8.0,
      city: "Cross River",
      spot: "Cross River State",
    },
    description: "A state known for its natural beauty and diverse wildlife.",
    attractions: [
      {
        id: "c1",
        name: "Obudu Mountain Resort",
        location: {
          lat: 5.6895,
          lng: 9.4934,
          city: "Obudu",
          spot: "Obudu Mountain Resort",
        },
        description:
          "A stunning mountain resort offering cable car rides and beautiful landscapes.",
        type: "Resort",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/7/74/Obudu_Mountain_Resort.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/f/f4/Obudu_Mountain_Resort_2.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/3/3d/Obudu_Mountain_Resort_View.jpg",
        ],
      },
      {
        id: "c2",
        name: "Calabar Carnival",
        location: {
          lat: 4.9833,
          lng: 8.3375,
          city: "Calabar",
          spot: "Calabar Cultural Center",
        },
        description:
          "Africa’s biggest street party showcasing culture and music.",
        type: "Festival",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/0/05/Calabar_Carnival_2019.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/02/Calabar_Carnival_Float.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/6/65/Calabar_Carnival_Participants.jpg",
        ],
      },
      {
        id: "c3",
        name: "Cross River National Park",
        location: {
          lat: 5.2624,
          lng: 8.4521,
          city: "Akamkpa",
          spot: "Cross River National Park",
        },
        description: "A park rich in wildlife, home to rare species.",
        type: "Park",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/2/24/Cross_River_National_Park.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/1/13/Cross_River_National_Park_Scenery.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/e/ea/Cross_River_National_Park_Wildlife.jpg",
        ],
      },
      {
        id: "c4",
        name: "Drill Ranch",
        location: {
          lat: 5.2725,
          lng: 8.3328,
          city: "Calabar",
          spot: "Drill Ranch Sanctuary",
        },
        description:
          "Conservation center for endangered primates, especially drill monkeys.",
        type: "Wildlife",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/a/ab/Drill_Monkey_in_Cross_River_National_Park.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/5/5d/Drill_Monkey_Cross_River.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/8/81/Drill_Monkey_Sanctuary_Cross_River.jpg",
        ],
      },
      {
        id: "c5",
        name: "Tinapa Free Zone and Resort",
        location: {
          lat: 4.99,
          lng: 8.3,
          city: "Calabar",
          spot: "Tinapa Business Resort",
        },
        description:
          "A commercial and leisure resort offering entertainment and shopping.",
        type: "Resort",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/5/50/Tinapa_Resort_Calabar.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/a/a9/Tinapa_Free_Zone_Resort.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/e/e0/Tinapa_Business_Resort_Calabar.jpg",
        ],
      },
    ],
  },
];

export const getStepsConfig = (t: any) => [
  {
    icon: "dripicons dripicons-search",
    main: t("guide.steps.findDestination"),
    description: t("guide.steps.findDestinationDescription"),
    image: "https://picsum.photos/900/990",
  },
  {
    icon: "dripicons dripicons-message",
    main: t("guide.steps.bookTicket"),
    description: t("guide.steps.bookTicketDescription"),
    image: "https://picsum.photos/900/991",
  },
  {
    icon: "dripicons dripicons-conversation",
    main: t("guide.steps.meetPeople"),
    description: t("guide.steps.meetPeopleDescription"),
    image: "https://picsum.photos/900/992",
  },
  {
    icon: "dripicons dripicons-location",
    main: t("guide.steps.exploreNigeria"),
    description: t("guide.steps.exploreNigeriaDescription"),
    image: "https://picsum.photos/900/993",
  },
];

export const bestNatureImages = {
  Lagos: "https://picsum.photos/800/500?random=1",
  Abuja: "https://picsum.photos/800/500?random=2",
  Kano: "https://picsum.photos/800/500?random=3",
  Jos: "https://picsum.photos/800/500?random=4",
  "Port Harcourt": "https://picsum.photos/800/500?random=5",
  Enugu: "https://picsum.photos/800/500?random=6",
};

export const getBestNatureCities = (
  nigerianCities: { name: string; location: { city: string } }[]
) =>
  nigerianCities.slice(0, 6).map((city) => ({
    image: bestNatureImages[city.name as keyof typeof bestNatureImages],
    alt: city.name,
    location: city.location.city,
  }));

export const nigerianActivities: ActivityTypes[] = [
  {
    id: "1",
    name: "Nike Art Gallery Tour",
    description:
      "Explore Nigeria's largest art gallery featuring contemporary Nigerian art across four floors.",
    detailedDescription:
      "The Nike Art Gallery in Lagos is a four-story building housing an extensive collection of Nigerian art. Visitors can view and purchase works from prominent Nigerian artists while learning about the country’s rich cultural heritage.",
    city: "Lagos",
    image:
      "https://via.placeholder.com/800x600/FF9933/FFFFFF?text=Nike+Art+Gallery",
    images: [
      "https://via.placeholder.com/800x600/FF9933/FFFFFF?text=Nike+Art+Gallery+1",
      "https://via.placeholder.com/800x600/FF9933/FFFFFF?text=Nike+Art+Gallery+2",
      "https://via.placeholder.com/800x600/FF9933/FFFFFF?text=Nike+Art+Gallery+3",
    ],
    category: "Cultural",
    duration: "2-3 hours",
    price: "₦5,000",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Lekki Conservation Centre Canopy Walk",
    description:
      "Experience Africa's longest canopy walkway surrounded by nature.",
    detailedDescription:
      "The Lekki Conservation Centre offers a serene escape into nature. Its canopy walkway is the longest in Africa and provides stunning aerial views of the park’s flora and fauna.",
    city: "Lagos",
    image:
      "https://via.placeholder.com/800x600/4CAF50/FFFFFF?text=Lekki+Conservation",
    images: [
      "https://via.placeholder.com/800x600/4CAF50/FFFFFF?text=Lekki+Conservation+1",
      "https://via.placeholder.com/800x600/4CAF50/FFFFFF?text=Lekki+Conservation+2",
      "https://via.placeholder.com/800x600/4CAF50/FFFFFF?text=Lekki+Conservation+3",
    ],
    category: "Adventure",
    duration: "3-4 hours",
    price: "₦2,000",
    rating: 4.5,
  },
  {
    id: "3",
    name: "Yankari Game Reserve Safari",
    description:
      "Discover wildlife and natural warm springs in Nigeria's most popular game reserve.",
    detailedDescription:
      "The Yankari Game Reserve is home to a variety of wildlife, including elephants and baboons. Visitors can also enjoy a swim in the Wikki Warm Spring, which maintains a constant temperature year-round.",
    city: "Bauchi",
    image:
      "https://via.placeholder.com/800x600/795548/FFFFFF?text=Yankari+Safari",
    images: [
      "https://via.placeholder.com/800x600/795548/FFFFFF?text=Yankari+Safari+1",
      "https://via.placeholder.com/800x600/795548/FFFFFF?text=Yankari+Safari+2",
      "https://via.placeholder.com/800x600/795548/FFFFFF?text=Yankari+Safari+3",
    ],
    category: "Nature",
    duration: "Full day",
    price: "₦15,000",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Calabar Food Festival Tour",
    description:
      "Taste authentic Nigerian cuisine and learn about traditional cooking methods.",
    detailedDescription:
      "The Calabar Food Festival is a culinary journey through Nigerian cuisine. Guests can savor a wide variety of dishes while learning about their preparation and cultural significance.",
    city: "Calabar",
    image:
      "https://via.placeholder.com/800x600/E91E63/FFFFFF?text=Calabar+Food",
    images: [
      "https://via.placeholder.com/800x600/E91E63/FFFFFF?text=Calabar+Food+1",
      "https://via.placeholder.com/800x600/E91E63/FFFFFF?text=Calabar+Food+2",
      "https://via.placeholder.com/800x600/E91E63/FFFFFF?text=Calabar+Food+3",
    ],
    category: "Food",
    duration: "4 hours",
    price: "₦8,000",
    rating: 4.6,
  },
  {
    id: "5",
    name: "Olumo Rock Climbing",
    description:
      "Climb the historic Olumo Rock and learn about its cultural significance.",
    detailedDescription:
      "Olumo Rock is a historical site in Abeokuta with stunning views and rich Yoruba heritage. Guides offer insight into its significance in local culture.",
    city: "Abeokuta",
    image: "https://via.placeholder.com/800x600/9C27B0/FFFFFF?text=Olumo+Rock",
    images: [
      "https://via.placeholder.com/800x600/9C27B0/FFFFFF?text=Olumo+Rock+1",
      "https://via.placeholder.com/800x600/9C27B0/FFFFFF?text=Olumo+Rock+2",
      "https://via.placeholder.com/800x600/9C27B0/FFFFFF?text=Olumo+Rock+3",
    ],
    category: "Adventure",
    duration: "3 hours",
    price: "₦3,000",
    rating: 4.4,
  },
  {
    id: "6",
    name: "New Afrika Shrine Experience",
    description:
      "Enjoy live Afrobeat music and cultural performances at the legendary venue.",
    detailedDescription:
      "The New Afrika Shrine is a vibrant venue celebrating Afrobeat music and Nigerian culture. Visitors can enjoy live performances and immerse themselves in a lively atmosphere.",
    city: "Lagos",
    image:
      "https://via.placeholder.com/800x600/2196F3/FFFFFF?text=Afrika+Shrine",
    images: [
      "https://via.placeholder.com/800x600/2196F3/FFFFFF?text=Afrika+Shrine+1",
      "https://via.placeholder.com/800x600/2196F3/FFFFFF?text=Afrika+Shrine+2",
      "https://via.placeholder.com/800x600/2196F3/FFFFFF?text=Afrika+Shrine+3",
    ],
    category: "Entertainment",
    duration: "4-5 hours",
    price: "₦4,000",
    rating: 4.9,
  },
  {
    id: "7",
    name: "Osun Sacred Grove Tour",
    description:
      "Visit the UNESCO World Heritage site and learn about Yoruba traditions.",
    detailedDescription:
      "The Osun Sacred Grove is a tranquil sanctuary that showcases Yoruba religious and cultural traditions. Visitors can explore the site’s sculptures and learn about its history.",
    city: "Osogbo",
    image: "https://via.placeholder.com/800x600/FFC107/FFFFFF?text=Osun+Grove",
    images: [
      "https://via.placeholder.com/800x600/FFC107/FFFFFF?text=Osun+Grove+1",
      "https://via.placeholder.com/800x600/FFC107/FFFFFF?text=Osun+Grove+2",
      "https://via.placeholder.com/800x600/FFC107/FFFFFF?text=Osun+Grove+3",
    ],
    category: "Cultural",
    duration: "5 hours",
    price: "₦6,000",
    rating: 4.7,
  },
  {
    id: "8",
    name: "Cross River National Park Trek",
    description:
      "Explore Nigeria's biodiversity in one of the richest rainforest regions.",
    detailedDescription:
      "The Cross River National Park is a haven for biodiversity. Visitors can enjoy guided treks through its lush rainforest and discover rare plant and animal species.",
    city: "Calabar",
    image:
      "https://via.placeholder.com/800x600/009688/FFFFFF?text=Cross+River+Park",
    images: [
      "https://via.placeholder.com/800x600/009688/FFFFFF?text=Cross+River+Park+1",
      "https://via.placeholder.com/800x600/009688/FFFFFF?text=Cross+River+Park+2",
      "https://via.placeholder.com/800x600/009688/FFFFFF?text=Cross+River+Park+3",
    ],
    category: "Nature",
    duration: "Full day",
    price: "₦12,000",
    rating: 4.6,
  },
];

export interface TouristAttraction {
  id: string;
  name: string;
  location: Location;
  description: string;
  images: string[];
  type:
    | "Monument"
    | "Park"
    | "Museum"
    | "Landmark"
    | "Hiking"
    | "Mountain"
    | "Resort"
    | "Festival"
    | "Wildlife"
    | "Beach"
    | "Golf Course"
    | "Nature Reserve";
}

export interface Location {
  lat: number;
  lng: number;
  city: string;
  spot: string;
}

export interface City {
  id: string;
  name: string;
  location: Location;
  description: string;
  attractions: TouristAttraction[];
}
