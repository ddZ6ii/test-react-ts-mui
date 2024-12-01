import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useLocations } from "@/hooks/useLocations";
import { Typography } from "@mui/material";

export default function Tour() {
  const { id } = useParams();
  const { locations } = useLocations();

  const tour = useMemo(
    () =>
      locations
        .find((location) =>
          location.tours.some((tour) => tour.id === Number(id)),
        )
        ?.tours.find((tour) => tour.id === Number(id)),
    [locations, id],
  );

  return (
    <Typography component="h1" variant="h4">
      {tour?.name}
    </Typography>
  );
}
