import { createId } from '@paralleldrive/cuid2';

type ResourceIdType =
  | 'diagram'
  | 'img'
  | 'req'
  | 'slide'
  | 'audio'
  | 'video'
  | 'pdf'
  | 'proj'
  | 'foun'
  | 'user'
  | 'cmp'
  | 'sub'
  | 'works'
  | 'pres'
  | 'web'
  | 'speech';

export const createUniqueId = (resource: ResourceIdType) => `${resource}_${createId()}`;
