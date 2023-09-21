export interface MenuItem {
  title: string;
  location: string;
}

export interface FlipCardData {
  id: number;
  image: string;
  alt: string;
  isFlipped?: boolean;
  tempID?: number;
}
