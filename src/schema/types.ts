import { ReactElement } from 'react';
import { Metadata } from "next";

export type SysIdType = { id: string; };
export type PageContentType = IFeatures | IFlyingCarpet | IGallery | IGrid | IHero | IRugItem | ITeaser | IText;
export type PageContentGuardType = {
  __typename: 'Features' | 'FlyingCarpet' | 'Gallery' | 'Grid' | 'Hero' | 'Rug' | 'Teaser' | 'Text';
};

export interface IEntry {
  sys: SysIdType;
  __typename: 'Rug';
  slug: string;
}

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

interface ICollectionSitemapData {
  items: {
    slug: string;
    sys: {
      publishedAt: Date;
    }
  }[];
}

export interface IMetadata extends Metadata {
  slug?: string;
  ogImage?: IAsset;
}

export interface IPageMetadata {
  metadata: IMetadata;
}

export interface IPageCollectionPaths {
  pageCollection: ICollectionPaths;
}

export interface IPageCollectionSitemapData {
  pageCollection: ICollectionSitemapData;
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
  sliderCollection: {
    items: IAsset[];
  };
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
  name: string;
  featuredImage: IAsset;
}

export interface IRugCollection {
  items: IRugItem[];
}

export interface IRugCollectionPaths {
  rugCollection: ICollectionPaths;
}

export interface IRugCollectionSitemapData {
  rugCollection: ICollectionSitemapData;
}

export type TGeolocation = {
  lat: number;
  lon: number;
};

export type TColorTypes = 'Red' | 'Orange' | 'Yellow' | 'Brown' | 'Green' | 'Blue' | 'Purple' | 'Pink' | 'Black' | 'Gray' | 'White';

export interface IOrgin {
  name: string;
  location: TGeolocation;
}

export interface IRug {
  title: string;
  subtitle: string;
  slug: string;
  excerpt: string;
  description: any;
  name: string;
  type: string;
  origin: IOrgin,
  country: {
    name: string;
    geolocation: TGeolocation;
  }
  length: number;
  width: number;
  dating: string;
  location: string;
  room: string;
  placing: string | null;
  featuredImage: IAsset;
  ogImage: IAsset;
  galleryCollection: {
    items: IAsset[];
  }
  colors: TColorTypes[];
  palette: Record<string, string>;
}

export interface IRugDefinition {
  name: string;
  size: string;
  dating: string;
  location: string;
  origin: string;
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

export interface ISitemapEntry {
  url: string;
  lastModified: string | Date
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: number;
}
