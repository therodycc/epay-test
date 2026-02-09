import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../store/root-reducer";

const clientState = (state: AppState) => state.client;

const getAllClients = createSelector(clientState, (state) => state.result);

export const clientSelector = {
  getAllClients,
};
