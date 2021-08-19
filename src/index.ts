import express from "express";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const app = express();

app.get("/api/users", async (_, res) => {
  res.send(await prisma.user.findMany());
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:8000/api/users`)
);
