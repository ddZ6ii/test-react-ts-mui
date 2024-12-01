import { styled, Typography, TypographyProps } from "@mui/material";
import { useLocations } from "../hooks/useLocations";
import TourList from "./TourList";

export default function LocationList() {
  const { locations } = useLocations();
  return (
    <ul>
      {locations.map((location, index) => (
        <li key={location.id}>
          <Heading isFirst={index === 0}>Top {location.name} Tours</Heading>
          <TourList location={location} />
        </li>
      ))}
    </ul>
  );
}

interface HeadingProps extends TypographyProps {
  isFirst: boolean;
}

const Heading = styled(
  (props) => <Typography component="h2" variant="h4" {...props} />,
  { shouldForwardProp: (prop) => prop !== "isFirst" },
)<HeadingProps>(({ theme, isFirst }) => ({
  marginTop: isFirst ? theme.spacing(2) : theme.spacing(4),
  marginBottom: theme.spacing(2),
  fontWeight: theme.typography.fontWeightMedium,
}));
