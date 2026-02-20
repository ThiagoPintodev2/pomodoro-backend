import express from "express";
import { cors } from "hono/cors";
import { getSupabase } from "./src/supabase";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (c) => {
  const { data } = getSupabase(c.env);
  console.log(data)
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
