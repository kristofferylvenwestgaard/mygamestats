import {sql} from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function getUser(email) {
    noStore();
    try {
        const user = await sql`SELECT * FROM users WHERE email=${email}`;
        return user.rows[0];
    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch user data.');
    }
}