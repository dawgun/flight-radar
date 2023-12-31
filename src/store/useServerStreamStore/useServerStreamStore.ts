import { create } from "zustand";
import { ServerStreamStore } from "./types/streamStoreTypes";

const useServerStreamStore = create<ServerStreamStore>((set) => ({
  eventSource: {} as EventSource,
  planePosition: [0, 0],
  isPlayed: false,
  setPlanePosition: (newFlightPosition) =>
    set((state) => ({ ...state, planePosition: newFlightPosition })),
  startFlight: (newServerEvent: EventSource) =>
    set((state) => ({ ...state, eventSource: newServerEvent })),
  runPlay: () => set((state) => ({ ...state, isPlayed: true })),
  stopPlay: () => set((state) => ({ ...state, isPlayed: false })),
}));

export default useServerStreamStore;
