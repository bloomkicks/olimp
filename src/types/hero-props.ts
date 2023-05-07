export type HeroIllustrationProps = {
  imgSrc: string;
  sx: any;
  alt?: string;
};

export type HeroProps = {
  heading: string;
  descTitle: string;
  description: string;
  planPoints: string[];
  planTitle?: string;
  illustration: HeroIllustrationProps;
};
