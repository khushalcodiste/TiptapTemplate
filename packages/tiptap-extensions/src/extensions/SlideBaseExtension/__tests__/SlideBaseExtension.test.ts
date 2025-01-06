import { expect } from '@jest/globals';
import { generateHTML, generateJSON } from '@tiptap/html';

import { CodeBlockBaseExtension } from '@/extensions/CodeBlockBaseExtension/CodeBlockBaseExtension';
import { CurrencyAmountBaseExtension } from '@/extensions/CurrencyAmountBaseExtension';
import {
  HeadingBaseExtension,
  ParagraphBaseExtension,
  TableBaseExtension,
  TableRowBaseExtension,
  TextBaseExtension,
} from '@/extensions/DefaultExtensions';
import { DocumentBaseExtension } from '@/extensions/DocumentBaseExtension';
import { SlideBaseExtension, SlideBaseExtensionConfig } from '@/extensions/SlideBaseExtension/SlideBaseExtension';
import { SlideContentBaseExtension } from '@/extensions/SlideContentBaseExtension';
import { SlideListBaseExtension } from '@/extensions/SlideListBaseExtension';
import { SlideListWithTitleBaseExtension } from '@/extensions/SlideListWithTitleBaseExtension';
import { SlideTitleBaseExtension } from '@/extensions/SlideTitleBaseExtension';
import { TableCellBaseExtension } from '@/extensions/TableCellBaseExtension';
import { TableHeaderBaseExtension } from '@/extensions/TableHeaderBaseExtension';

const extensions = [
  DocumentBaseExtension(),
  CodeBlockBaseExtension(),
  TextBaseExtension,
  HeadingBaseExtension,
  ParagraphBaseExtension,
  SlideTitleBaseExtension(),
  SlideBaseExtension(),
  SlideContentBaseExtension(),
  SlideListWithTitleBaseExtension(),
  SlideListBaseExtension(),
  TableBaseExtension,
  TableCellBaseExtension,
  TableHeaderBaseExtension,
  CurrencyAmountBaseExtension(),
  TableRowBaseExtension,
];

test('SlideBaseExtensionConfig', () => {
  expect(SlideBaseExtensionConfig()).toMatchObject({ id: 'slide', name: 'Slide' });
});

test('SlideBaseExtensionConfig with version', () => {
  expect(SlideBaseExtensionConfig('V1')).toMatchObject({ id: 'slideV1', name: 'SlideV1' });
});

test('SlideBaseExtension introduction-slide compare json', () => {
  const sourceContent = {
    type: 'doc',
    content: [
      {
        type: 'Slide',
        attrs: {
          id: 'slide_tnwn823rynaskmbpl45da8c8',
          class: 'slide',
          title: 'Introduction',
          slideType: 'introduction-wrapper',
          slideTemplate: 'grid-image',
          backgroundImage: {
            id: 'img_zj6kh2otg0azszpc4dkb92lt',
            alt: '',
            src: '',
            query: '',
            content: '',
            keywords: ['blockchain development'],
            slideType: 'introduction',
            uploadKey: 'ndeck/images/pres_s29lqntvcs2va80lmj6tvcrs/img_zj6kh2otg0azszpc4dkb92lt.jpeg',
            orientation: 'portrait',
            extractedKeywords: ['blockchain development'],
            presentationKeywords: [],
          },
          backgroundImageAlt: {
            id: 'img_t6q7i7weyvmlynd8vo5bzoug',
            alt: '',
            src: '',
            query: '',
            content: '',
            keywords: ['blockchain development'],
            slideType: 'introduction',
            uploadKey: 'ndeck/images/pres_s29lqntvcs2va80lmj6tvcrs/img_t6q7i7weyvmlynd8vo5bzoug.jpeg',
            orientation: 'portrait',
            extractedKeywords: ['disruptive markets'],
            presentationKeywords: [],
          },
        },
        content: [
          {
            type: 'SlideTitleWrapper',
            attrs: {
              class: 'slide-title',
              slideType: 'introduction-title',
              slideTemplate: 'grid-image',
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'aakash g',
                    type: 'text',
                  },
                ],
              },
            ],
          },
          {
            type: 'SlideContentWrapper',
            attrs: {
              class: 'slide-content',
              slideType: 'introduction-content',
              slideTemplate: 'grid-image',
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Codiste specializes in providing custom AI-driven platforms and applications, focusing on blockchain development, machine learning, and augmented reality. The company prides itself on its collaborative culture and strong values, which guide their approach to serving clients and stakeholders. Codiste is dedicated to redefining operational paradigms and delivering exceptional results through innovative technology solutions. Their mission is to empower businesses to scale and innovate in disruptive markets.',
                    type: 'text',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const targetContent = {
    type: 'doc',
    content: [
      {
        type: 'Slide',
        attrs: {
          id: 'slide_tnwn823rynaskmbpl45da8c8',
          title: 'Introduction',
          class: 'slide',
          slideType: 'introduction-wrapper',
          slideTemplate: 'grid-image',
          backgroundImageId: 'img_zj6kh2otg0azszpc4dkb92lt',
          backgroundImageCaption: '',
          backgroundImageSrc: '',
          backgroundImageQuery: '',
          backgroundImageContent: '',
          backgroundImageUploadKey: 'ndeck/images/pres_s29lqntvcs2va80lmj6tvcrs/img_zj6kh2otg0azszpc4dkb92lt.jpeg',
          backgroundImageOrientation: 'portrait',
          backgroundImageAltId: 'img_t6q7i7weyvmlynd8vo5bzoug',
          backgroundImageAltCaption: '',
          backgroundImageAltSrc: '',
          backgroundImageAltQuery: '',
          backgroundImageAltContent: '',
          backgroundImageAltUploadKey: 'ndeck/images/pres_s29lqntvcs2va80lmj6tvcrs/img_t6q7i7weyvmlynd8vo5bzoug.jpeg',
          backgroundImageAltOrientation: 'portrait',
        },
        content: [
          {
            type: 'SlideTitleWrapper',
            attrs: { id: '', class: 'slide-title', slideType: 'introduction-title', slideTemplate: 'grid-image' },
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'aakash g' }] }],
          },
          {
            type: 'SlideContentWrapper',
            attrs: {
              id: '',
              class: 'slide-content',
              slideType: 'introduction-content',
              slideTemplate: 'grid-image',
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Codiste specializes in providing custom AI-driven platforms and applications, focusing on blockchain development, machine learning, and augmented reality. The company prides itself on its collaborative culture and strong values, which guide their approach to serving clients and stakeholders. Codiste is dedicated to redefining operational paradigms and delivering exceptional results through innovative technology solutions. Their mission is to empower businesses to scale and innovate in disruptive markets.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const html = generateHTML(sourceContent, extensions);
  const json = generateJSON(html, extensions);

  expect(json).toMatchObject(targetContent);
});

test('SlideBaseExtension portfolio-slide compare json', () => {
  const sourceContent = {
    type: 'doc',
    content: [
      {
        type: 'Slide',
        attrs: {
          id: 'slide_ojywkscrwfjkftdju9d3b5kx',
          class: 'slide',
          title: 'Portfolio',
          slideType: 'portfolio-wrapper',
          slideTemplate: 'man-with-suit-case',
          backgroundImage: {
            id: 'img_vgkgjhzqpyt1nldhz7mog9be',
            alt: '',
            src: '',
            query: '',
            content: '',
            keywords: ['various sectors'],
            slideType: 'portfolio',
            uploadKey: 'ndeck/images/pres_i31f4n3i0eojgckjoj0zy348/img_vgkgjhzqpyt1nldhz7mog9be.jpeg',
            orientation: 'portrait',
            extractedKeywords: [
              'various sectors',
              'real estate',
              'estate fintech',
              'fintech healthcare',
              'renewable energy',
              'decentralized crypto',
              'crypto launchpad',
              'NFT marketplace',
              'marketplace Codiste',
              'functional applications',
              'technical expertise',
              'client satisfaction',
              'positive feedback',
              'Ninza NFT',
              'innovative platform',
              'fungible tokens',
              'user experience',
              'strategic insights',
              'significant traction',
              'robust functionalities',
              'Crypto Launchpad',
              'comprehensive platform',
              'cryptocurrency projects',
              'token creation',
              'decentralized exchange',
              'exchange functionalities',
              'open communication',
              'innovative approach',
            ],
            presentationKeywords: [],
          },
          backgroundImageAlt: {
            id: 'img_u1vapxci0wwoiaeaz7pkktje',
            alt: '',
            src: '',
            query: '',
            content: '',
            keywords: ['various sectors'],
            slideType: 'portfolio',
            uploadKey: 'ndeck/images/pres_i31f4n3i0eojgckjoj0zy348/img_u1vapxci0wwoiaeaz7pkktje.jpeg',
            orientation: 'portrait',
            extractedKeywords: [
              'various sectors',
              'real estate',
              'estate fintech',
              'fintech healthcare',
              'renewable energy',
              'decentralized crypto',
              'crypto launchpad',
              'NFT marketplace',
              'marketplace Codiste',
              'functional applications',
              'technical expertise',
              'client satisfaction',
              'positive feedback',
              'Ninza NFT',
              'innovative platform',
              'fungible tokens',
              'user experience',
              'strategic insights',
              'significant traction',
              'robust functionalities',
              'Crypto Launchpad',
              'comprehensive platform',
              'cryptocurrency projects',
              'token creation',
              'decentralized exchange',
              'exchange functionalities',
              'open communication',
              'innovative approach',
            ],
            presentationKeywords: [],
          },
        },
        content: [
          {
            type: 'SlideTitleWrapper',
            attrs: {
              class: 'slide-title',
              slideType: 'portfolio-title',
              slideTemplate: 'man-with-suit-case',
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Portfolio Projects',
                    type: 'text',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'cff7dccb-3795-4b42-a832-12068c5d23d2',
                    type: 'text',
                  },
                ],
              },
            ],
          },
          {
            type: 'SlideContentWrapper',
            attrs: {
              class: 'slide-content',
              slideType: 'portfolio-content',
              slideTemplate: 'man-with-suit-case',
            },
            content: [
              {
                type: 'ListWithTitle',
                attrs: {
                  id: 'slide_ojywkscrwfjkftdju9d3b5kx',
                  class: 'list-with-title',
                  title: '',
                  slideType: 'portfolio-list-wrapper',
                  slideTemplate: 'man-with-suit-case',
                  backgroundImage: {
                    id: 'img_d06q022v1gg5swld6n3xyhdc',
                    alt: '',
                    src: 'ndeck/images/project_undefined',
                    query: '',
                    content: '',
                    keywords: ['Ninza NFT'],
                    slideType: 'portfolio',
                    uploadKey: 'ndeck/images/pres_i31f4n3i0eojgckjoj0zy348/img_d06q022v1gg5swld6n3xyhdc.jpeg',
                    orientation: 'portrait',
                    extractedKeywords: [
                      'Ninza NFT',
                      'innovative platform',
                      'fungible tokens',
                      'user experience',
                      'marketplace Codiste',
                      'strategic insights',
                      'significant traction',
                      'robust functionalities',
                    ],
                    presentationKeywords: [],
                  },
                },
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      {
                        text: 'Ninza NFT Marketplace',
                        type: 'text',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    content: [
                      {
                        text: 'cff7dccb-3795-4b42-a832-12068c5d23d2',
                        type: 'text',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'ListWithTitle',
                attrs: {
                  id: 'slide_ojywkscrwfjkftdju9d3b5kx',
                  class: 'list-with-title',
                  title: '',
                  slideType: 'portfolio-list-wrapper',
                  slideTemplate: 'man-with-suit-case',
                  backgroundImage: {
                    id: 'img_wd7gez4kov1b340da3veob7l',
                    alt: '',
                    src: 'ndeck/images/project_undefined',
                    query: '',
                    content: 'Multichain Decentralised Crypto Launchpad\n              ',
                    keywords: ['Crypto Launchpad'],
                    slideType: 'portfolio',
                    uploadKey: 'ndeck/images/pres_i31f4n3i0eojgckjoj0zy348/img_wd7gez4kov1b340da3veob7l.jpeg',
                    orientation: 'portrait',
                    extractedKeywords: [
                      'Crypto Launchpad',
                      'comprehensive platform',
                      'cryptocurrency projects',
                      'token creation',
                      'decentralized exchange',
                      'exchange functionalities',
                      'open communication',
                      'innovative approach',
                    ],
                    presentationKeywords: [],
                  },
                },
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      {
                        text: 'Multichain Decentralised Crypto Launchpad',
                        type: 'text',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    content: [
                      {
                        text: 'cff7dccb-3795-4b42-a832-12068c5d23d2',
                        type: 'text',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const targetContent = {
    type: 'doc',
    content: [
      {
        type: 'Slide',
        attrs: {
          id: 'slide_ojywkscrwfjkftdju9d3b5kx',
          title: 'Portfolio',
          class: 'slide',
          slideType: 'portfolio-wrapper',
          slideTemplate: 'man-with-suit-case',
          backgroundImageId: 'img_vgkgjhzqpyt1nldhz7mog9be',
          backgroundImageSrc: '',
          backgroundImageCaption: '',
          backgroundImageQuery: '',
          backgroundImageUploadKey: 'ndeck/images/pres_i31f4n3i0eojgckjoj0zy348/img_vgkgjhzqpyt1nldhz7mog9be.jpeg',
          backgroundImageContent: '',
          backgroundImageOrientation: 'portrait',
          backgroundImageAltId: 'img_u1vapxci0wwoiaeaz7pkktje',
          backgroundImageAltSrc: '',
          backgroundImageAltCaption: '',
          backgroundImageAltQuery: '',
          backgroundImageAltUploadKey: 'ndeck/images/pres_i31f4n3i0eojgckjoj0zy348/img_u1vapxci0wwoiaeaz7pkktje.jpeg',
          backgroundImageAltContent: '',
          backgroundImageAltOrientation: 'portrait',
          backgroundImage: null,
          backgroundImageAlt: null,
        },
        content: [
          {
            type: 'SlideTitleWrapper',
            attrs: {
              id: '',
              class: 'slide-title',
              slideType: 'portfolio-title',
              slideTemplate: 'man-with-suit-case',
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Portfolio Projects',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'cff7dccb-3795-4b42-a832-12068c5d23d2',
                  },
                ],
              },
            ],
          },
          {
            type: 'SlideContentWrapper',
            attrs: {
              id: '',
              class: 'slide-content',
              slideType: 'portfolio-content',
              slideTemplate: 'man-with-suit-case',
              backgroundImageId: '',
              backgroundImageSrc: '',
              backgroundImageCaption: '',
              backgroundImageQuery: '',
              backgroundImageUploadKey: '',
              backgroundImageContent: '',
              backgroundImageOrientation: '',
              backgroundImage: null,
            },
            content: [
              {
                type: 'ListWithTitle',
                attrs: {
                  id: 'slide_ojywkscrwfjkftdju9d3b5kx',
                  title: '',
                  class: 'list-with-title',
                  slideType: 'portfolio-list-wrapper',
                  slideTemplate: 'man-with-suit-case',
                  backgroundImageId: 'img_d06q022v1gg5swld6n3xyhdc',
                  backgroundImageSrc: 'ndeck/images/project_undefined',
                  backgroundImageCaption: '',
                  backgroundImageQuery: '',
                  backgroundImageUploadKey:
                    'ndeck/images/pres_i31f4n3i0eojgckjoj0zy348/img_d06q022v1gg5swld6n3xyhdc.jpeg',
                  backgroundImageContent: '',
                  backgroundImageOrientation: 'portrait',
                  backgroundImageAltId: '',
                  backgroundImageAltSrc: '',
                  backgroundImageAltCaption: '',
                  backgroundImageAltQuery: '',
                  backgroundImageAltUploadKey: '',
                  backgroundImageAltContent: '',
                  backgroundImageAltOrientation: 'portrait',
                  backgroundImage: null,
                  backgroundImageAlt: null,
                },
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      {
                        type: 'text',
                        text: 'Ninza NFT Marketplace',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    content: [
                      {
                        type: 'text',
                        text: 'cff7dccb-3795-4b42-a832-12068c5d23d2',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'ListWithTitle',
                attrs: {
                  id: 'slide_ojywkscrwfjkftdju9d3b5kx',
                  title: '',
                  class: 'list-with-title',
                  slideType: 'portfolio-list-wrapper',
                  slideTemplate: 'man-with-suit-case',
                  backgroundImageId: 'img_wd7gez4kov1b340da3veob7l',
                  backgroundImageSrc: 'ndeck/images/project_undefined',
                  backgroundImageCaption: '',
                  backgroundImageQuery: '',
                  backgroundImageUploadKey:
                    'ndeck/images/pres_i31f4n3i0eojgckjoj0zy348/img_wd7gez4kov1b340da3veob7l.jpeg',
                  backgroundImageContent: 'Multichain Decentralised Crypto Launchpad\n              ',
                  backgroundImageOrientation: 'portrait',
                  backgroundImageAltId: '',
                  backgroundImageAltSrc: '',
                  backgroundImageAltCaption: '',
                  backgroundImageAltQuery: '',
                  backgroundImageAltUploadKey: '',
                  backgroundImageAltContent: '',
                  backgroundImageAltOrientation: 'portrait',
                  backgroundImage: null,
                  backgroundImageAlt: null,
                },
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      {
                        type: 'text',
                        text: 'Multichain Decentralised Crypto Launchpad',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    content: [
                      {
                        type: 'text',
                        text: 'cff7dccb-3795-4b42-a832-12068c5d23d2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const html = generateHTML(sourceContent, extensions);
  const json = generateJSON(html, extensions);

  expect(json).toMatchObject(targetContent);
});
