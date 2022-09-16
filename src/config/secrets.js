const env = process.env;

export const API_SECRET = env.API_SECRET ? env.API_SECRET : "pw4";
export const MONGO_DB_URL = "mongodb+srv://natan:natan@cluster0.wtc9g.mongodb.net/?retryWrites=true&w=majority";