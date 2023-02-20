import {ReactElement} from "react";

export type SysIdType = { id: string; };
export type PageContentType = IFeatures | IFlyingCarpet | IGallery  | IGrid | IHero | IRugItem | ITeaser | IText;
export type PageContentGuardType = {
  __typename: 'Features' | 'FlyingCarpet' | 'Gallery' | 'Grid' | 'Hero' | 'Rug'  | 'Teaser' | 'Text';
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

type HeroType = 'Landing' | 'Topic';
export interface IHero extends IPageContent {
  __typename: 'Hero';
  type: HeroType;
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

export type TeaserType = 'Kompetenz' | 'Kollektion' | 'Der fliegende Teppich';

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

export interface IRugItem {
  sys: SysIdType;
  __typename: 'Rug';
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  featuredImage: IAsset;
}

export interface IRugCollection {
  items: IRugItem[];
}

export interface IRugCollectionPaths {
  rugCollection: ICollectionPaths;
}

export type TGeolocation = {
  lat: number;
  lon: number;
};

export interface IRug {
  title: string;
  subtitle: string;
  slug: string;
  excerpt: string;
  description: any;
  name: string;
  origin: string;
  originGeolocation: TGeolocation;
  size: string;
  length: number;
  width: number;
  age: string;
  location: string;
  room: string;
  placing: string | null;
  featuredImage: IAsset;
  galleryCollection: {
    items: IAsset[];
  }
}

export interface IRugDefinition {
  name: string;
  origin: string;
  size: string;
  age: string;
}

export interface INavigationItem {
  title: string;
  page: {
    slug: string;
  };
  externalUrl: string;
}

export type BackgroundTypes = 'none' | 'light' | 'dark';

export interface IGallery {
  sys: SysIdType;
  __typename: 'Gallery';
  background: BackgroundTypes;
  itemsCollection: {
    items: IRugItem[];
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

export interface IGrid {
  __typename: 'Grid'
  sys: SysIdType;
  background: BackgroundTypes;
  layout: string;
  columnsCollection: {
    items: IGridCol[];
  }
}

export interface IGridCol {
  sys: SysIdType;
  __typename: 'Refernce' | 'Text';
  reference: IText;
  media: IAsset;
}

export interface IModal {
  handleClose: () => void;
  children: ReactElement;
  isOpen: boolean;
}

export type TFlyingCarpetTemplates = '4-1';
export type TFlyingCarpetBgColors = 'blue' | 'red';

export interface IFlyingCarpet {
  sys: SysIdType;
  __typename: 'FlyingCarpet'
  link: {
    __TypeName: 'Rug';
    slug: string;
  },
  template: TFlyingCarpetTemplates;
  backgroundColor: TFlyingCarpetBgColors;
  text: {
    json: JSON;
  };
  mediaCollection: {
    items: IAsset[];
  };
}

