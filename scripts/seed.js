const { db } = require('@vercel/postgres');
const {
  users,
  results,
  games,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedResults(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "results" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS results (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    CONSTRAINT fk_user_id
    FOREIGN KEY user_id REFERENCING users(id),
    place INT NOT NULL,
    track VARCHAR(255) NOT NULL,
    date DATE NOT NULL
  );
`;

    console.log(`Created "results" table`);

    // Insert data into the "invoices" table
    const insertedResults = await Promise.all(
      results.map(
        (result) => client.sql`
        INSERT INTO results (user_id, place, track, date)
        VALUES (${result.user_id}, ${result.place}, ${result.track}, ${result.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedResults.length} results`);

    return {
      createTable,
      results: insertedResults,
    };
  } catch (error) {
    console.error('Error seeding results:', error);
    throw error;
  }
}

async function seedGames(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS games (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "games" table`);

    // Insert data into the "customers" table
    const insertedGames = await Promise.all(
      games.map(
        (game) => client.sql`
        INSERT INTO games (id, name, image_url)
        VALUES (${game.id}, ${game.name}, ${game.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedGames.length} games`);

    return {
      createTable,
      games: insertedGames,
    };
  } catch (error) {
    console.error('Error seeding games:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedResults(client);
  await seedGames(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
