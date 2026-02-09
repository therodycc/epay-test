import { Client } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ClientStateI {
  result: Client[] | null;
}

const clientState: ClientStateI = {
  result: null
};

export const clientSlice = createSlice({
  name: "client",
  initialState: clientState,
  reducers: {
    setClientState: (
      state: ClientStateI,
      action: PayloadAction<Partial<ClientStateI>>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setClientState } = clientSlice.actions;

export default clientSlice.reducer;
