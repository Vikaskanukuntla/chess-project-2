import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import cors from "cors";

import { GameManager } from "./GameManager.js";
import authRouter from "./route/auth.js";
import { connectDB } from "./db/db.js"; 

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);


connectDB();

const server = http.createServer(app);


const wss = new WebSocketServer({ server });

const gameManager = new GameManager();

wss.on("connection", function connection(ws) {
    gameManager.addUser(ws);

    ws.on("close", () => gameManager.removeUser(ws));
});

server.listen(3000, () => {
    console.log("HTTP + WS server running on 3000");
});