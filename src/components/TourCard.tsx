import {
  Box,
  Grid2,
  Grid2Props,
  Paper,
  Rating,
  RatingProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Tour } from "@/types";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <GridItem>
      <NavLink to={`/tours/${tour.id.toString()}`}>
        <li>
          <Card elevation={3}>
            <img src={tour.image} alt={tour.name} className="card-thumbnail" />
            <Content>
              <Heading>{tour.name}</Heading>
              <Container>
                <DurationIcon />
                <Span>{tour.duration} hours</Span>
              </Container>
              <Container flexWrap={"wrap"}>
                <Container flexWrap={"nowrap"}>
                  <CustomerRating value={tour.rating} />
                  <Span mr={1}>{tour.rating}</Span>
                </Container>
                <Span>({tour.numberOfReviews} reviews)</Span>
              </Container>
              <Span variant="h5">From ${tour.price}</Span>
            </Content>
          </Card>
        </li>
      </NavLink>
    </GridItem>
  );
}

const GridItem = styled((props) => (
  <Grid2
    size={{
      sm: 6,
      md: 4,
      lg: 3,
    }}
    {...props}
  />
))<Grid2Props>();

const Card = styled(Paper)({
  overflow: "hidden",
});

const Content = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "grid",
  gap: theme.spacing(1),
}));

const Heading = styled((props) => (
  <Typography component="h3" variant="h6" {...props} />
))<TypographyProps>();

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
}));

const Span = styled((props) => (
  <Typography variant="body2" {...props} />
))<TypographyProps>();

const DurationIcon = styled(AccessTimeIcon)({
  fontSize: "inherit",
});

const CustomerRating = styled((props) => (
  <Rating readOnly precision={0.5} {...props} />
))<RatingProps>();
