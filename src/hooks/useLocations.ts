import { useContext } from "react";
import { LocationContext } from "@/contexts/LocationContext";

export function useLocations() {
  const locationContext = useContext(LocationContext);
  if (locationContext === null) {
    throw new Error("Location context was used outside of its provider.");
  }
  return locationContext;
}
