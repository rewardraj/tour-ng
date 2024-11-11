import { City } from './types';

export const nigerianCities: City[] = [
  {
    id: '1',
    name: 'Lagos',
    location: { lat: 6.5244, lng: 3.3792 },
    description: 'The largest city in Nigeria and a major financial center.',
    attractions: [
      {
        id: 'l1',
        name: 'Nike Art Gallery',
        location: { lat: 6.4698, lng: 3.5852 },
        description: 'A prominent art gallery showcasing Nigerian art.',
        type: 'museum'
      },
      {
        id: 'l2',
        name: 'Lekki Conservation Centre',
        location: { lat: 6.4418, lng: 3.5347 },
        description: 'Nature reserve with canopy walkway.',
        type: 'park'
      }
    ]
  },
  {
    id: '2',
    name: 'Abuja',
    location: { lat: 9.0765, lng: 7.3986 },
    description: 'The capital city of Nigeria.',
    attractions: [
      {
        id: 'a1',
        name: 'Aso Rock',
        location: { lat: 9.0579, lng: 7.4951 },
        description: 'Iconic rock formation and seat of government.',
        type: 'landmark'
      },
      {
        id: 'a2',
        name: 'National Mosque',
        location: { lat: 9.0527, lng: 7.4931 },
        description: 'Principal mosque of Nigeria.',
        type: 'monument'
      }
    ]
  }
];
