const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');


export default async function addUser(name, email, pw) {
const user = [{
    user_id,
    name: name,
    email: email,
    password: pw,
}];
const client = await db.connect();
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUser = await Promise.all(
      user.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (user_id, name, email, password)
        VALUES (${user.user_id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (user_id) DO NOTHING;
      `;
      }),
    );

    console.log(`Added ${insertedUser.length}`);
    await client.end();

    return {
      createTable,
      users: insertedUser,
    };
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
}