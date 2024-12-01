export interface Tour {
  id: number;
  name: string;
  duration: number;
  rating: number;
  numberOfReviews: number;
  price: number;
  image: string;
}

export interface Location {
  id: number;
  name: string;
  tours: Tour[];
}
