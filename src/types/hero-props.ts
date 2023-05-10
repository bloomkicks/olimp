export type HeroIllustrationProps = {
  imgSrc: string;
  width: number;
  height: number;
  sx: any;
  alt?: string;
};

export type HeroProps = {
  heading: string;
  descTitle: string;
  description: string;
  planPoints?: { title: string; href?: string }[];
  planTitle?: string;
  illustration: HeroIllustrationProps;
};
