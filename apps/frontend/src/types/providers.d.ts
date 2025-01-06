import { IMAGES_PROVIDERS } from '@/constants/presentation';

export type ImageSearchProviders = keyof typeof IMAGES_PROVIDERS;

export interface ImageSearchProviderState {
  provider: ImageSearchProviders;
}

export type ImageSearchProviderAction = Partial<ImageSearchProviderState>;

export type ImageProviderItem = {
  id: string;
  src: string;
  width?: number;
  height?: number;
  thumbnail?: string;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  downloadLocation?: string;
  alt?: string;
};

export type ImageProviderResult = {
  hasMore: boolean;
  nextPage: number;
  results: ImageProviderItem[];
};
