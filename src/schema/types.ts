type SysIdType = { id: string; };
export type PageContentType = IHero | ITeaser | IText | ICarousel | IGallery | IReferenceItem | IFeatures;
export type PageContentGuardType = {
  __typename: 'Hero' | 'Teaser' | 'Text' | 'Carousel' | 'Gallery' | 'Reference' | 'Features';
};

export interface IPage {
  title: string;
  slug: string;
  contentContainerCollection: {
    items: (IHero | ITeaser)[];
  };
}

interface ICollectionPaths {
  items: { slug: string; }[];
}

export interface IPageCollectionPaths {
  pageCollection: ICollectionPaths;
}

export interface IPageContent {
  sys: SysIdType;
}

export interface IHero extends IPageContent {
  __typename: 'Hero';
  sys: SysIdType;
  image: IAsset;
  title: string;
}

export interface IAsset {
  url: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

export interface ITeasersCollection {
  items: ITeaser[];
}

export type TeaserType = 'Kompetenz' | 'Referenz' | 'Der fliegende Teppich';

export interface ITeaser {
  sys: SysIdType;
  __typename: 'Teaser';
  slug: string;
  type: TeaserType;
  title: string;
  subtitle: string;
  excerpt: string;
  text: Pick<IText, 'richText'> | null;
  link: ILink | null;
  image: IAsset;
}

export interface IText {
  sys: SysIdType;
  __typename: 'Text';
  name: string;
  excerpt: string;
  leadText: string;
  richText: {
    json: JSON;
  };
}

export interface ILink {
  title: string;
  page?: {
    slug: string;
  };
  externalUrl?: string;
}

export interface IReferenceItem {
  sys: SysIdType;
  __typename: 'Reference';
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  featuredImage: IAsset;
}

export interface IReferenceCollection {
  items: IReferenceItem[];
}

export interface IReference {
  title: string;
  subtitle: string;
  excerpt: string;
  body: string;
  description: any;
  definition: IReferenceDefintion;
  detailImage: IAsset;
  galleryItems: IAsset[];
}

export interface IReferenceCollectionPaths {
  referenceCollection: ICollectionPaths;
}

export interface IReferenceDefintion {
  name: string;
  origin: string;
  size: string;
  age: string;
  location: string;
  room: string;
  placing: string | null;
}

export interface IRug {
  name: string;
  text: string;
  origin: string;
  palette: string[] | null;
  detailImage: IAsset;
}

export interface IReferenceQueryData {
  title: string;
  subtitle: string;
  excerpt: string;
  body: string;
  description: any;
  location: string;
  room: string;
  placing: string | null;
  rug: {
    name: string;
    text: string;
    origin: string;
    size: string;
    age: string;
    palette: string;
    detailImage: IAsset;
  };
  galleryCollection: {
    items: IAsset[];
  };
}

export interface INavigationItem {
  title: string;
  page: {
    slug: string;
  };
  externalUrl: string;
}

export interface ICarousel {
  sys: SysIdType;
  __typename: 'Carousel';
  displayItems: number;
  autoplay: boolean;
  autoplaySpeed: number;
  itemsCollection: {
    items: IReferenceItem[];
  };
}

export type BackgroundTypes = 'none' | 'light' | 'dark';

export interface IGallery {
  sys: SysIdType;
  __typename: 'Gallery';
  background: BackgroundTypes;
  itemsCollection: {
    items: IReferenceItem[];
  };
}

export interface IFeatures {
  sys: SysIdType;
  __typename: 'Features';
  background: BackgroundTypes;
  sectionsCollection: {
    items: IText[];
  }
}