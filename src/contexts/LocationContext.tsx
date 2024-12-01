import { createContext, ReactElement, useState } from "react";
import initialLocations from "../data.json";
import { Location } from "@/types";

interface ILocationContext {
  locations: Location[];
}

interface LocationProviderProps {
  children: ReactElement;
}

export const LocationContext = createContext<ILocationContext | null>(null);

export function LocationProvider({ children }: LocationProviderProps) {
  const [locations, _setLocations] = useState<Location[]>(initialLocations);

  const contextValue = {
    locations,
  };

  return (
    <LocationContext.Provider value={contextValue}>
      {children}
    </LocationContext.Provider>
  );
}
