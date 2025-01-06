import { NEXT_PUBLIC_ASSET_URL } from '@/config';

export const getPptImageUrl = (path: string) => {
  if (!path) return path;

  if (path.startsWith('http')) return path;

  return `${NEXT_PUBLIC_ASSET_URL}/${path}`;
};
