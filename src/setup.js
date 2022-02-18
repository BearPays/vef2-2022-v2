import { query } from "express";
import { createSchema } from "./lib/db.js";
import  dotenv from 'dotenv';

dotenv.config();

async function create() {
  // TODO setja upp gagnagrun + gögn
  await createSchema();

  await query('INSERT INTO notandi(username, password) VALUES($1, $2)',['bbm5', 'admin']);
  
}
create().catch((err) => {
  console.error('Error creating running setup', err);
});



  
