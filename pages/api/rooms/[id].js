


import nc from "next-connect";
import { getSingelRoom, removeRoom, updateRoom} from "@/contollers/roomControllers";
import dbConncect from "@/config/db";
import errorHandler from "@/middlewares/errorHandler";

const handler = nc(errorHandler);
dbConncect();


handler.get(getSingelRoom);
handler.put(updateRoom);
handler.delete(removeRoom);
export default handler;
