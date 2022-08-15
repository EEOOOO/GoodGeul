import { getDatabase } from "firebase/database";
import app from './firebase';

const database = getDatabase(app);

export default database;