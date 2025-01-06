import { JSONContent } from '@tiptap/core';

import { DefaultTheme } from 'styled-components';

import { PRESENTATION_SLIDE_ACTIONS } from '@/constants/presentation';
import { PROCESS_STATUS_LIST } from '@/constants/status';
import { ThemeFont } from '@/types/theme';
import { CompanyProfile } from '@/types/user';

export const PresentationStyle = {
  legacy: 'legacy',
  business: 'business',
};

export interface Presentation {
  id: string;
  docId: string;
  title: string;
  topicName: string;
  owner: string;
  workspace?: string;
  isPublic: boolean;
  story?: string;
  status: (typeof PROCESS_STATUS_LIST)[number];
  deletedAt: Date;
  style: string;
  themeId: string;
  fontId: string;
  presenterAudioId: string;
  presenterAudioUrl: string;
  presenterAudioProgress: number;
  presenterAudioStatus: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  presenterAudioDurations: number[];
  presenterVideoId: string;
  presenterVideoUrl: string;
  presenterVideoProgress: number;
  presenterVideoStatus: (typeof PROCESS_STATUS_LIST)[number];
  generateVideo: boolean;
}

export interface PresentationVideoStatus {
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  percentage: number;
  previewUrl?: string;
}

export interface PresentationsListOwner {
  id: string;
  name: string;
  email: string;
  profilePic: string;
}

export interface PresentationsListThumbnail {
  updatedAt: string;
  url: string;
}

export interface PresentationsListAttrs {
  src: string;
  class: string;
  slideType: string;
}

export interface PresentationsListContent2 {
  type: string;
  text: string;
}

export interface PresentationsListContent {
  type: string;
  content: PresentationsListContent2[];
}

export interface PresentationsListItem {
  id: string;
  docId: string;
  title: string;
  topicName: string;
  owner: PresentationsListOwner;
  isPublic: boolean;
  style: keyof typeof PresentationStyle;
  createdAt: string;
  updatedAt: string;
  thumbnailUrl: string;
}

export interface PresentationSlide {
  id: string;
  jsonData: JSONContent;
  slideSpeechId: string;
  slideSpeechStatus: string;
  slideSpeechText: string;
  slideNumber: number;
}

export type PresentationSlideResponse = {
  data: {
    presentation: Presentation;
    content: JSONContent;
    slides: PresentationSlide[];
    companyProfile: CompanyProfile;
    maxSlides: number;
    speechStatus: 'finish' | 'wait';
  };
};

export type PresentationUserConfig = {
  maxSlides: number;
};

export type ThemesResponse = {
  data: { themes: DefaultTheme[]; fonts: ThemeFont[] };
};

export interface PresentationActionState {
  exportingPpt: boolean;
  videoExportModal: boolean;
  showPreviewVideo: boolean;
  showUpgradeModelForVideoCredits: boolean;
}

interface PresentationViewState {
  themeId: string;
  fontId: string;
  slides: PresentationSlide[];
  slideId: string | null;
}

type PresentationViewAction = Partial<PresentationViewState>;

export type PresentationSlideActions = keyof typeof PRESENTATION_SLIDE_ACTIONS;

export interface PresentationStateOptions {
  maxSlides: number;
  totalSlides: number;
  activeSlideId: PresentationViewState['slideId'];
  disableAddSlide: boolean;
}

export interface DashboardPageState {
  limit: number;
  search: string;
  page: number;
  view: 'list' | 'table';
}

export type DashboardPageStateKeys = keyof DashboardPageState;

export interface ImageSearchOptions {
  id: string;
  src: string;
  alt: string;
  query?: string;
  uploadKey: string;
  content: string;
  orientation?: 'portrait' | 'landscape';
  slideType: BUSINESS_SLIDE_TYPE;
  keywords: string[];
  extractedKeywords: string[];
  presentationKeywords: string[];
}

export interface SlideExtensionAttributes extends Attributes {
  id: {
    default: string;
  };
  title: {
    default: string;
  };
  class: {
    default: string;
  };
  slideType: {
    default: string;
  };
  slideTemplate: {
    default: string;
  };
  backgroundImage: {
    default: ImageSearchOptions;
    parseHTML?: (element) => ImageSearchOptions;
  };
  backgroundImageAlt: {
    default: ImageSearchOptions;
    parseHTML?: (element) => ImageSearchOptions;
  };
}

export interface SlideWrapperPreviewExtensionOptions {
  onSelectSlide: (slideId: string) => void;
  showInlineIndex: boolean;
  showFloatingIndex: boolean;
  showBorder: boolean;
  showTitle: boolean;
}
