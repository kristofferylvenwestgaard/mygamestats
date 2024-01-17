'use server';
const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
import { v4 as uuidv4 } from 'uuid';

export async function newUser(currentState, formData) {
    //get form data from new user form submit
    const rawFormData = JSON.stringify({
        id: uuidv4(),
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirm: formData.get('confirmP'), 
    });
    const json = JSON.parse(rawFormData);
    console.log(json);
    //if password match, then hash password and add user to database
    if(json.password === json.confirm) {
        try {
            const hashedPassword = await bcrypt.hash(json.password, 10);
            const client = await db.connect();
            await client.sql`
            INSERT INTO users (id, name, email, password)
            VALUES (${json.id}, ${json.name}, ${json.email}, ${hashedPassword})
            ON CONFLICT (id) DO NOTHING;`;
            return "You've successfully signed up!";
        } catch(error) {
            console.log(error);
            return "An issue occured when trying to create your user!";
        }
    }
};