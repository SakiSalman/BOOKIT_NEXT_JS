import nc from "next-connect";
import { allRoom, newRoom } from "@/contollers/roomControllers";
import dbConncect from "@/config/db";

const handler = nc();
dbConncect();


handler.get(allRoom);
handler.post(newRoom);
export default handler;
