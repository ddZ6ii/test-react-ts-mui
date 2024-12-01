import { Grid2 } from "@mui/material";
import TourCard from "./TourCard";
import { Location } from "@/types";

interface TourListProps {
  location: Location;
}

export default function TourList({ location }: TourListProps) {
  return (
    <ul>
      <Grid2 container spacing={2}>
        {location.tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </Grid2>
    </ul>
  );
}
