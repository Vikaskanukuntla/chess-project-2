import { useEffect, useState } from "react"

const WS_URL = "ws://localhost:3000"

export const useSocket = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket(WS_URL);

        ws.onopen = () => {
            console.log("WebSocket connected");
            setSocket(ws);
        };

        ws.onclose = () => {
            console.log("WebSocket closed");
            setSocket(null);
        };

        return () => {
            ws.close();
        };
    }, []);

    return socket;
};