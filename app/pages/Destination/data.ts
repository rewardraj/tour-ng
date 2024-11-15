import { City } from "./types";

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
      },
      {
        id: "l3",
        name: "National Theatre",
        location: { lat: 6.4929, lng: 3.3815, city: "Lagos", spot: "Iganmu" },
        description: "Iconic cultural center for music, theater, and art.",
        type: "Landmark",
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
      },
      {
        id: "j2",
        name: "Jos Wildlife Park",
        location: { lat: 9.9333, lng: 8.9, city: "Jos", spot: "Plateau State" },
        description: "Nature park with diverse wildlife and picnic areas.",
        type: "Park",
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
        description: "Golf course and recreational area.",
        type: "Park",
      },
      {
        id: "e3",
        name: "Udi Hills",
        location: { lat: 6.3, lng: 7.5, city: "Enugu", spot: "Udi" },
        description: "Ideal spot for mountain climbing and scenic views.",
        type: "Mountain",
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
      },
    ],
  },
];
