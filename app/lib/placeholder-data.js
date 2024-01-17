// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
  {
    id: '7e8eb626-1044-42ee-bb0f-30009db69117',
    name: 'KrisKros',
    email: 'user2@nextmail.com',
    password: '123456',
  },
];

const results = [
  {
    id: 'b969c724-8b48-4b03-8107-8905935fad73',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    place: '3',
    track: 'Jeddah International Circuit',
    date: '09/01/2024',
  },
];

const games = [
  {
    id: '9878f946-78b8-4f75-a32b-0cfc150598ef',
    name: 'F1 23',
    image_url: '/customers/hector-simpson.png',
  },
];



module.exports = {
  users,
  results,
  games
};
