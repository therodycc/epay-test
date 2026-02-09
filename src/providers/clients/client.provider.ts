import { Client } from "@/types";
import config from "../../config";
import Provider from "../provider";

class ClientProvider extends Provider {
  constructor() {
    super({ baseURL: `${config.app.url}/users` });
  }

  getAll() {
    return this.get("/");
  }

  create(data: Partial<Client>) {
    return this.post("/", data);
  }

  updateData(id: string, data: Partial<Client>) {
    return this.patch(`/${id}`, data);
  }

  remove(id: string) {
    return this.delete(`/${id}`);
  }
}

export default new ClientProvider();
