import { JSONContent } from '@tiptap/core';

import { CompanyProfile } from '@/types/user';

const introductionSlide = ({
  slideId,
  preview,
  companyProfile,
}: {
  slideId: string;
  preview: boolean;
  companyProfile: CompanyProfile;
}) => {
  return {
    type: 'Slide',
    attrs: {
      id: slideId,
      title: 'Introduction',
      class: 'slide',
      slideType: 'introduction-wrapper',
      slideTemplate: 'grid-image',
      backgroundImage: {
        text: preview
          ? 'Simform\n\n\n  Spreadd is a pioneering platform that empowers creators in the digital economy by providing tools for collaboration, content monetization, and campaign management. Focused on transparency and leveraging blockchain technology, it enhances authenticity and trust within the creator economy, fostering meaningful partnerships between creators and brands.'
          : 'Write something',
        imageId: '672c70e397db943c4e9b4d85',
        keywords: [],
        src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d85.jpeg' : '',
        alt: '',
        query: '',
      },
      backgroundImageAlt: {
        text: preview
          ? 'Simform\n\n\n  Spreadd is a pioneering platform that empowers creators in the digital economy by providing tools for collaboration, content monetization, and campaign management. Focused on transparency and leveraging blockchain technology, it enhances authenticity and trust within the creator economy, fostering meaningful partnerships between creators and brands.'
          : 'Write something',
        imageId: '672c70e397db943c4e9b4d85',
        keywords: [],
        src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d85.jpeg' : '',
        alt: '',
        query: '',
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
                type: 'text',
                text: companyProfile?.name || 'Company Name',
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
                type: 'text',
                text: preview
                  ? 'Spreadd is a pioneering platform that empowers creators in the digital economy by providing tools for collaboration, content monetization, and campaign management. Focused on transparency and leveraging blockchain technology, it enhances authenticity and trust within the creator economy, fostering meaningful partnerships between creators and brands.'
                  : 'Write something',
              },
            ],
          },
        ],
      },
    ],
  } as JSONContent;
};

const objectiveSlide = ({
  slideId,
  preview,
}: {
  slideId: string;
  preview: boolean;
  companyProfile: CompanyProfile;
}) => {
  return {
    type: 'Slide',
    attrs: {
      id: slideId,
      title: 'Objectives',
      class: 'slide',
      slideType: 'objective-list-wrapper',
      slideTemplate: 'left-align-curve-image-points',
      backgroundImage: {
        text: preview
          ? 'Objectives\n\n\n  \n    Seamless Omnichannel Shopping Experience\n    Create a unified shopping journey across web, mobile, and in-store to enhance customer engagement and satisfaction.\n  \n  \n    Enhanced Sales Conversion Rates\n    Integrate multiple sales channels to improve conversion rates and drive revenue growth for Stubbs and Wootton.\n  \n  \n    Advanced Customer Insights\n    Leverage analytics to understand customer behavior and tailor offerings, fostering brand loyalty and repeat purchases.\n  \n  \n    Positioning as Luxury Retail Leader\n    Establish Stubbs and Wootton as an innovative leader in luxury retail through a user-friendly ecommerce platform.'
          : 'Write something',
        imageId: '672c70e397db943c4e9b4d8b',
        keywords: [],
        src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d8b.jpeg' : '',
        alt: '',
        query: '',
      },
    },
    content: [
      {
        type: 'SlideTitleWrapper',
        attrs: {
          class: 'slide-title',
          slideType: 'objective-list-title',
          slideTemplate: 'left-align-curve-image-points',
        },
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: preview ? 'Objectives' : 'Write something',
              },
            ],
          },
        ],
      },
      {
        type: 'SlideContentWrapper',
        attrs: {
          class: 'slide-content',
          slideType: 'objective-list-content',
          slideTemplate: 'left-align-curve-image-points',
        },
        content: [
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'objective-list-list-wrapper',
              slideTemplate: 'left-align-curve-image-points',
              backgroundImage: {
                text: preview
                  ? 'Seamless Omnichannel Shopping Experience\n    Create a unified shopping journey across web, mobile, and in-store to enhance customer engagement and satisfaction.'
                  : 'Write something',
                imageId: '672c70e397db943c4e9b4d8c',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d8c.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Seamless Omnichannel Shopping Experience' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Create a unified shopping journey across web, mobile, and in-store to enhance customer engagement and satisfaction.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'objective-list-list-wrapper',
              slideTemplate: 'left-align-curve-image-points',
              backgroundImage: {
                text: preview
                  ? 'Enhanced Sales Conversion Rates\n    Integrate multiple sales channels to improve conversion rates and drive revenue growth for Stubbs and Wootton.'
                  : 'Write something',
                imageId: '672c70e397db943c4e9b4d8d',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d8d.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Enhanced Sales Conversion Rates' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Integrate multiple sales channels to improve conversion rates and drive revenue growth for Stubbs and Wootton.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'objective-list-list-wrapper',
              slideTemplate: 'left-align-curve-image-points',
              backgroundImage: {
                text: preview
                  ? 'Advanced Customer Insights\n    Leverage analytics to understand customer behavior and tailor offerings, fostering brand loyalty and repeat purchases.'
                  : 'Write something',
                imageId: '672c70e397db943c4e9b4d8e',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d8e.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Advanced Customer Insights' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Leverage analytics to understand customer behavior and tailor offerings, fostering brand loyalty and repeat purchases.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'objective-list-list-wrapper',
              slideTemplate: 'left-align-curve-image-points',
              backgroundImage: {
                text: preview
                  ? 'Positioning as Luxury Retail Leader\n    Establish Stubbs and Wootton as an innovative leader in luxury retail through a user-friendly ecommerce platform.'
                  : 'Write something',
                imageId: '672c70e397db943c4e9b4d8f',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d8f.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Positioning as Luxury Retail Leader' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Establish Stubbs and Wootton as an innovative leader in luxury retail through a user-friendly ecommerce platform.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  } as JSONContent;
};

const requirementsSlide = ({
  slideId,
  preview,
}: {
  slideId: string;
  preview: boolean;
  companyProfile: CompanyProfile;
}) => {
  return {
    type: 'Slide',
    attrs: {
      id: slideId,
      title: 'Project requirements',
      class: 'slide',
      slideType: 'requirements-wrapper',
      slideTemplate: 'paragraph',
      backgroundImage: {
        text: preview
          ? 'Requirements\n\n\n  \n    Ecommerce Website Development\n    Create a responsive ecommerce website that allows users to browse products and complete transactions securely.\n  \n  \n    Mobile Application Development\n    Develop a mobile application enabling users to manage shopping carts and access personalized recommendations on-the-go.\n  \n  \n    User Account Management\n    Implement user account creation and management features, including order tracking and personalized offerings based on preferences.\n  \n  \n    Performance and Security Standards\n    Ensure system performance metrics meet load times under three seconds and maintain PCI compliance for secure payment processing.'
          : 'Write something',
        imageId: '672c70e397db943c4e9b4d91',
        keywords: [],
        src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d91.jpeg' : '',
        alt: '',
        query: '',
      },
    },
    content: [
      {
        type: 'SlideTitleWrapper',
        attrs: {
          class: 'slide-title',
          slideType: 'requirements-title',
          slideTemplate: 'paragraph',
        },
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: preview ? 'Requirements' : 'Write something',
              },
            ],
          },
        ],
      },
      {
        type: 'SlideContentWrapper',
        attrs: {
          class: 'slide-content',
          slideType: 'requirements-content',
          slideTemplate: 'paragraph',
        },
        content: [
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'requirements-list-wrapper',
              slideTemplate: 'paragraph',
              backgroundImage: {
                text: preview
                  ? 'Ecommerce Website Development\n    Create a responsive ecommerce website that allows users to browse products and complete transactions securely.'
                  : 'Write something',
                imageId: '672c70e397db943c4e9b4d92',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d92.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Ecommerce Website Development' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Create a responsive ecommerce website that allows users to browse products and complete transactions securely.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'requirements-list-wrapper',
              slideTemplate: 'paragraph',
              backgroundImage: {
                text: preview
                  ? 'Mobile Application Development\n    Develop a mobile application enabling users to manage shopping carts and access personalized recommendations on-the-go.'
                  : 'Write something',
                imageId: '672c70e397db943c4e9b4d93',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d93.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Mobile Application Development' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Develop a mobile application enabling users to manage shopping carts and access personalized recommendations on-the-go.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'requirements-list-wrapper',
              slideTemplate: 'paragraph',
              backgroundImage: {
                text: preview
                  ? 'User Account Management\n    Implement user account creation and management features, including order tracking and personalized offerings based on preferences.'
                  : 'Write something',
                imageId: '672c70e397db943c4e9b4d94',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d94.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'User Account Management' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Implement user account creation and management features, including order tracking and personalized offerings based on preferences.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'requirements-list-wrapper',
              slideTemplate: 'paragraph',
              backgroundImage: {
                text: preview
                  ? 'Performance and Security Standards\n    Ensure system performance metrics meet load times under three seconds and maintain PCI compliance for secure payment processing.'
                  : 'Write something',
                imageId: '672c70e397db943c4e9b4d95',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d95.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Performance and Security Standards' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Ensure system performance metrics meet load times under three seconds and maintain PCI compliance for secure payment processing.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  } as JSONContent;
};

const techStackSlide = ({
  slideId,
  preview,
}: {
  slideId: string;
  preview: boolean;
  companyProfile: CompanyProfile;
}) => {
  return {
    type: 'Slide',
    attrs: {
      id: slideId,
      title: 'Project Tech-stack',
      class: 'slide',
      slideType: 'tech-stack-table-wrapper',
      slideTemplate: 'table',
      backgroundImage: {
        text: preview
          ? 'Tech Stack\n\n\n  \n    \n      \n        Category\n        Technology List\n      \n    \n    \n      \n        Frontend\n        React.js, React Native\n      \n      \n        Backend\n        Node.js\n      \n      \n        Database\n        MongoDB\n      \n      \n        Integration\n        RESTful APIs, Payment Gateways, Shipping Providers'
          : 'Write something',
        imageId: '672c70e597db943c4e9b4da2',
        keywords: [],
        src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e597db943c4e9b4da2.jpeg' : '',
        alt: '',
        query: '',
      },
    },
    content: [
      {
        type: 'SlideTitleWrapper',
        attrs: {
          class: 'slide-title',
          slideType: 'tech-stack-table-title',
          slideTemplate: 'table',
        },
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: preview ? 'Tech Stack' : 'Write something',
              },
            ],
          },
        ],
      },
      {
        type: 'SlideContentWrapper',
        attrs: {
          class: 'slide-content',
          slideType: 'tech-stack-table-content',
          slideTemplate: 'table',
        },
        content: [
          {
            type: 'table',
            content: [
              {
                type: 'tableRow',
                content: [
                  {
                    type: 'tableHeader',
                    attrs: {
                      colspan: 1,
                      rowspan: 1,
                      colwidth: null,
                    },
                    content: [
                      {
                        type: 'paragraph',
                        content: [
                          {
                            type: 'text',
                            text: preview ? 'Category' : 'Write something',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'tableHeader',
                    attrs: {
                      colspan: 1,
                      rowspan: 1,
                      colwidth: null,
                    },
                    content: [
                      {
                        type: 'paragraph',
                        content: [
                          {
                            type: 'text',
                            text: preview ? 'Technology List' : 'Write something',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'tableRow',
                content: [
                  {
                    type: 'tableCell',
                    attrs: {
                      colspan: 1,
                      rowspan: 1,
                      colwidth: null,
                    },
                    content: [
                      {
                        type: 'paragraph',
                        content: [
                          {
                            type: 'text',
                            text: preview ? 'Frontend' : 'Write something',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'tableCell',
                    attrs: {
                      colspan: 1,
                      rowspan: 1,
                      colwidth: null,
                    },
                    content: [
                      {
                        type: 'paragraph',
                        content: [
                          {
                            type: 'text',
                            text: preview ? 'React.js, React Native' : 'Write something',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'tableRow',
                content: [
                  {
                    type: 'tableCell',
                    attrs: {
                      colspan: 1,
                      rowspan: 1,
                      colwidth: null,
                    },
                    content: [
                      {
                        type: 'paragraph',
                        content: [
                          {
                            type: 'text',
                            text: preview ? 'Backend' : 'Write something',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'tableCell',
                    attrs: {
                      colspan: 1,
                      rowspan: 1,
                      colwidth: null,
                    },
                    content: [
                      {
                        type: 'paragraph',
                        content: [
                          {
                            type: 'text',
                            text: preview ? 'Node.js' : 'Write something',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'tableRow',
                content: [
                  {
                    type: 'tableCell',
                    attrs: {
                      colspan: 1,
                      rowspan: 1,
                      colwidth: null,
                    },
                    content: [
                      {
                        type: 'paragraph',
                        content: [
                          {
                            type: 'text',
                            text: preview ? 'Database' : 'Write something',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'tableCell',
                    attrs: {
                      colspan: 1,
                      rowspan: 1,
                      colwidth: null,
                    },
                    content: [
                      {
                        type: 'paragraph',
                        content: [
                          {
                            type: 'text',
                            text: preview ? 'MongoDB' : 'Write something',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'tableRow',
                content: [
                  {
                    type: 'tableCell',
                    attrs: {
                      colspan: 1,
                      rowspan: 1,
                      colwidth: null,
                    },
                    content: [
                      {
                        type: 'paragraph',
                        content: [
                          {
                            type: 'text',
                            text: preview ? 'Integration' : 'Write something',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'tableCell',
                    attrs: {
                      colspan: 1,
                      rowspan: 1,
                      colwidth: null,
                    },
                    content: [
                      {
                        type: 'paragraph',
                        content: [
                          {
                            type: 'text',
                            text: preview ? 'RESTful APIs, Payment Gateways, Shipping Providers' : 'Write something',
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
      },
    ],
  } as JSONContent;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
const architectureSlide = ({
  slideId,
  preview,
}: {
  slideId: string;
  preview: boolean;
  companyProfile: CompanyProfile;
}) => {
  return {
    type: 'Slide',
    attrs: {
      id: '672c70e397db943c4e9b4d9c',
      title: 'Architecture Diagram',
      class: 'slide',
      slideType: 'architecture-wrapper',
      slideTemplate: 'DEFAULT',
      backgroundImage: {
        text: preview
          ? 'graph TD\n    A[Unified Commerce Platform]\n\n    subgraph "User Interfaces"\n        B[Web Interface]\n        C[Mobile App]\n        D[In-Store Kiosk]\n    end\n\n    subgraph "Core Services"\n        E[Inventory Management Service]\n        F[Customer Management Service]\n        G[Order Management Service]\n        H[Payment Service Integration]\n        I[Shipping Service Integration]\n        J[Analytics Service]\n        K[Recommendation Engine]\n        L[Marketing Service]\n    end\n\n    subgraph "API Gateway"\n        M[API Gateway]\n    end\n\n    subgraph "Data Storage"\n        N[Customer Data Store]\n        O[Inventory Data Store]\n        P[Order Data Store]\n        Q[Analytics Data Store]\n    end\n\n    subgraph "Cloud Infrastructure"\n        R[AWS Cloud]\n    end\n\n    A --> B\n    A --> C\n    A --> D\n\n    B --> M\n    C --> M\n    D --> M\n\n    M --> E\n    M --> F\n    M --> G\n    M --> H\n    M --> I\n    M --> J\n    M --> K\n    M --> L\n\n    E --> O\n    F --> N\n    G --> P\n    J --> Q\n\n    E -->|Sync| O\n    F -->|Sync| N\n    G -->|Sync| P\n\n    K -->|Data Analysis| Q\n    L -->|Data Analysis| Q\n\n    R -->|Hosts| E\n    R -->|Hosts| F\n    R -->|Hosts| G\n    R -->|Hosts| H\n    R -->|Hosts| I\n    R -->|Hosts| J\n    R -->|Hosts| K\n    R -->|Hosts| L\n    R -->|Hosts| M\n    R -->|Hosts| N\n    R -->|Hosts| O\n    R -->|Hosts| P\n    R -->|Hosts| Q'
          : 'Write something',
        imageId: '672c70e397db943c4e9b4d9e',
        keywords: [],
        src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d9e.jpeg' : '',
        alt: '',
        query: '',
      },
    },
    content: [
      {
        type: 'codeBlock',
        attrs: {
          id: slideId,
          class: 'language-mermaid',
          slideType: 'architecture-list-wrapper',
          slideTemplate: 'DEFAULT',
        },
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: preview
                  ? 'graph TD\n    A[Unified Commerce Platform]\n\n    subgraph "User Interfaces"\n        B[Web Interface]\n        C[Mobile App]\n        D[In-Store Kiosk]\n    end\n\n    subgraph "Core Services"\n        E[Inventory Management Service]\n        F[Customer Management Service]\n        G[Order Management Service]\n        H[Payment Service Integration]\n        I[Shipping Service Integration]\n        J[Analytics Service]\n        K[Recommendation Engine]\n        L[Marketing Service]\n    end\n\n    subgraph "API Gateway"\n        M[API Gateway]\n    end\n\n    subgraph "Data Storage"\n        N[Customer Data Store]\n        O[Inventory Data Store]\n        P[Order Data Store]\n        Q[Analytics Data Store]\n    end\n\n    subgraph "Cloud Infrastructure"\n        R[AWS Cloud]\n    end\n\n    A --> B\n    A --> C\n    A --> D\n\n    B --> M\n    C --> M\n    D --> M\n\n    M --> E\n    M --> F\n    M --> G\n    M --> H\n    M --> I\n    M --> J\n    M --> K\n    M --> L\n\n    E --> O\n    F --> N\n    G --> P\n    J --> Q\n\n    E -->|Sync| O\n    F -->|Sync| N\n    G -->|Sync| P\n\n    K -->|Data Analysis| Q\n    L -->|Data Analysis| Q\n\n    R -->|Hosts| E\n    R -->|Hosts| F\n    R -->|Hosts| G\n    R -->|Hosts| H\n    R -->|Hosts| I\n    R -->|Hosts| J\n    R -->|Hosts| K\n    R -->|Hosts| L\n    R -->|Hosts| M\n    R -->|Hosts| N\n    R -->|Hosts| O\n    R -->|Hosts| P\n    R -->|Hosts| Q\n'
                  : 'Write something',
              },
            ],
          },
        ],
      },
    ],
  } as JSONContent;
};

const portfolioSlide = ({
  slideId,
  preview,
}: {
  slideId: string;
  preview: boolean;
  companyProfile: CompanyProfile;
}) => {
  return {
    type: 'Slide',
    attrs: {
      id: slideId,
      title: 'Portfolio',
      class: 'slide',
      slideType: 'portfolio-wrapper',
      slideTemplate: 'man-with-suit-case',
      backgroundImage: {
        text: preview
          ? 'Portfolio Projects\n  Spreadd empowers creators by connecting them with brands through innovative tools for collaboration and monetization in the digital economy.\n\n\n  \n    Campaign Marketplace\n    The Campaign Marketplace streamlines collaboration between creators and brands, ensuring timely payouts and enhancing visibility for creators.\n  \n  \n    Creator Store\n    The Creator Store allows creators to monetize their influence by curating products from brands, turning their content into a shop for their audience.'
          : 'Write something',
        imageId: '672c70e397db943c4e9b4d87',
        keywords: [],
        src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d87.jpeg' : '',
        alt: '',
        query: '',
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
                type: 'text',
                text: preview ? 'Portfolio Projects' : 'Write something',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: preview
                  ? 'Spreadd empowers creators by connecting them with brands through innovative tools for collaboration and monetization in the digital economy.'
                  : 'Write something',
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
              class: 'list-with-title',
              slideType: 'portfolio-list-wrapper',
              slideTemplate: 'man-with-suit-case',
              backgroundImage: {
                text: preview
                  ? 'Campaign Marketplace\n    The Campaign Marketplace streamlines collaboration between creators and brands, ensuring timely payouts and enhancing visibility for creators.'
                  : 'Write something',
                imageId: '672c70e397db943c4e9b4d88',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d88.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Campaign Marketplace' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'The Campaign Marketplace streamlines collaboration between creators and brands, ensuring timely payouts and enhancing visibility for creators.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'portfolio-list-wrapper',
              slideTemplate: 'man-with-suit-case',
              backgroundImage: {
                text: preview
                  ? 'Creator Store\n    The Creator Store allows creators to monetize their influence by curating products from brands, turning their content into a shop for their audience.'
                  : 'Write something',
                imageId: '672c70e397db943c4e9b4d89',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d89.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Creator Store' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'The Creator Store allows creators to monetize their influence by curating products from brands, turning their content into a shop for their audience.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  } as JSONContent;
};

const solutionsSlide = ({
  slideId,
  preview,
}: {
  slideId: string;
  preview: boolean;
  companyProfile: CompanyProfile;
}) => {
  return {
    type: 'Slide',
    attrs: {
      id: slideId,
      title: 'Solutions',
      class: 'slide',
      slideType: 'solutions-wrapper',
      slideTemplate: 'floating',
      backgroundImage: {
        text: preview
          ? 'Solution\n\n\n  \n    Unified Commerce Platform\n    Develop a unified commerce platform that integrates web, mobile, and in-store experiences, ensuring real-time inventory and customer data synchronization.\n  \n  \n    Advanced Analytics Integration\n    Implement advanced analytics tools to track customer behavior and preferences, allowing for personalized recommendations and targeted marketing strategies.\n  \n  \n    API-First Architecture\n    Adopt an API-first architecture to facilitate seamless integration with third-party services like payment gateways and shipping providers for enhanced functionality.\n  \n  \n    Scalable Cloud Infrastructure\n    Utilize AWS for a scalable cloud infrastructure, ensuring high availability and performance while accommodating future growth and traffic spikes efficiently.'
          : 'Write something',
        imageId: '672c70e397db943c4e9b4d97',
        keywords: [],
        src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d97.jpeg' : '',
        alt: '',
        query: '',
      },
    },
    content: [
      {
        type: 'SlideTitleWrapper',
        attrs: {
          class: 'slide-title',
          slideType: 'solutions-title',
          slideTemplate: 'floating',
        },
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: preview ? 'Solution' : 'Write something',
              },
            ],
          },
        ],
      },
      {
        type: 'SlideContentWrapper',
        attrs: {
          class: 'slide-content',
          slideType: 'solutions-content',
          slideTemplate: 'floating',
        },
        content: [
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'solutions-list-wrapper',
              slideTemplate: 'floating',
              backgroundImage: {
                text: preview
                  ? 'Unified Commerce Platform\n    Develop a unified commerce platform that integrates web, mobile, and in-store experiences, ensuring real-time inventory and customer data synchronization.'
                  : 'Write something',
                imageId: '672c70e397db943c4e9b4d98',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d98.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Unified Commerce Platform' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Develop a unified commerce platform that integrates web, mobile, and in-store experiences, ensuring real-time inventory and customer data synchronization.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'solutions-list-wrapper',
              slideTemplate: 'floating',
              backgroundImage: {
                text: preview
                  ? 'Advanced Analytics Integration\n    Implement advanced analytics tools to track customer behavior and preferences, allowing for personalized recommendations and targeted marketing strategies.'
                  : 'Write something',
                imageId: '672c70e397db943c4e9b4d99',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d99.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Advanced Analytics Integration' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Implement advanced analytics tools to track customer behavior and preferences, allowing for personalized recommendations and targeted marketing strategies.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'solutions-list-wrapper',
              slideTemplate: 'floating',
              backgroundImage: {
                text: preview
                  ? 'API-First Architecture\n    Adopt an API-first architecture to facilitate seamless integration with third-party services like payment gateways and shipping providers for enhanced functionality.'
                  : 'Write something',
                imageId: '672c70e397db943c4e9b4d9a',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d9a.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'API-First Architecture' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Adopt an API-first architecture to facilitate seamless integration with third-party services like payment gateways and shipping providers for enhanced functionality.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'solutions-list-wrapper',
              slideTemplate: 'floating',
              backgroundImage: {
                text: preview
                  ? 'Scalable Cloud Infrastructure\n    Utilize AWS for a scalable cloud infrastructure, ensuring high availability and performance while accommodating future growth and traffic spikes efficiently.'
                  : 'Write something',
                imageId: '672c70e397db943c4e9b4d9b',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e397db943c4e9b4d9b.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Scalable Cloud Infrastructure' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Utilize AWS for a scalable cloud infrastructure, ensuring high availability and performance while accommodating future growth and traffic spikes efficiently.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  } as JSONContent;
};

const contactUsSlide = ({
  slideId,
  preview,
}: {
  slideId: string;
  preview: boolean;
  companyProfile: CompanyProfile;
}) => {
  return {
    type: 'Slide',
    attrs: {
      id: slideId,
      title: 'Contact us',
      class: 'slide',
      slideType: 'contact-us-wrapper',
      slideTemplate: 'round-image',
      backgroundImage: {
        text: preview
          ? 'Contact Us\n        \n        \n          \n            Sohil Shah\n            \n              \n                aa@aaaaaaaaa.com'
          : 'Write something',
        imageId: '672c70e597db943c4e9b4db0',
        keywords: ['contact', 'sohil', 'shah', 'aaaaaaaaa', 'com'],
        src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e597db943c4e9b4db0.jpeg' : '',
        alt: '',
        query: '',
      },
    },
    content: [
      {
        type: 'SlideTitleWrapper',
        attrs: {
          class: 'slide-title',
          slideType: 'contact-us-title',
          slideTemplate: 'round-image',
        },
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: preview ? 'Contact Us' : 'Write something',
              },
            ],
          },
        ],
      },
      {
        type: 'SlideContentWrapper',
        attrs: {
          class: 'slide-content',
          slideType: 'contact-us-content',
          slideTemplate: 'round-image',
        },
        content: [
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'contact-us-list-wrapper',
              slideTemplate: 'round-image',
              backgroundImage: {
                text: preview
                  ? 'Sohil Shah\n            \n              \n                aa@aaaaaaaaa.com'
                  : 'Write something',
                imageId: '672c70e597db943c4e9b4db1',
                keywords: ['sohil', 'shah', 'aaaaaaaaa', 'com'],
                src: '', // preview ? 'users/ndeck/images/user_6728d6ea1f45bb16ea0a931f' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Sohil Shah' : 'Write something',
                  },
                ],
              },
              {
                type: 'ListWrapper',
                attrs: {
                  class: 'list-wrapper',
                  slideType: 'contact-us-list-wrapper',
                  slideTemplate: 'round-image',
                },
                content: [
                  {
                    type: 'bulletList',
                    content: [
                      {
                        type: 'listItem',
                        content: [
                          {
                            type: 'paragraph',
                            content: [
                              {
                                type: 'text',
                                text: preview ? 'aa@aaaaaaaaa.com' : 'Write something',
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
          },
        ],
      },
    ],
  } as JSONContent;
};

const milestonesSlide = ({
  slideId,
  preview,
}: {
  slideId: string;
  preview: boolean;
  companyProfile: CompanyProfile;
}) => {
  return {
    type: 'Slide',
    attrs: {
      id: slideId,
      title: 'Milestones',
      class: 'slide',
      slideType: 'milestones-wrapper',
      slideTemplate: 'road-map-sharp-edge',
      backgroundImage: {
        text: preview
          ? 'Milestones\n\n\n  \n    Kickoff and Requirements Gathering (2 weeks)\n    Complete project kickoff and gather detailed requirements from stakeholders.\n  \n  \n    Design Phase (4 weeks)\n    Develop and refine wireframes and prototypes for web and mobile applications for client approval.\n  \n  \n    Development Iterations (16 weeks)\n    Implement core functionalities followed by advanced features through iterative releases every three weeks.\n  \n  \n    User Acceptance Testing and Launch (2 weeks)\n    Conduct user acceptance testing, gather feedback, and officially launch the omnichannel ecommerce solution.'
          : 'Write something',
        imageId: '672c70e597db943c4e9b4da4',
        keywords: [],
        src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e597db943c4e9b4da4.jpeg' : '',
        alt: '',
        query: '',
      },
    },
    content: [
      {
        type: 'SlideTitleWrapper',
        attrs: {
          class: 'slide-title',
          slideType: 'milestones-title',
          slideTemplate: 'road-map-sharp-edge',
        },
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: preview ? 'Milestones' : 'Write something',
              },
            ],
          },
        ],
      },
      {
        type: 'SlideContentWrapper',
        attrs: {
          class: 'slide-content',
          slideType: 'milestones-content',
          slideTemplate: 'road-map-sharp-edge',
        },
        content: [
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'milestones-list-wrapper',
              slideTemplate: 'road-map-sharp-edge',
              backgroundImage: {
                text: preview
                  ? 'Kickoff and Requirements Gathering (2 weeks)\n    Complete project kickoff and gather detailed requirements from stakeholders.'
                  : 'Write something',
                imageId: '672c70e597db943c4e9b4da5',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e597db943c4e9b4da5.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Kickoff and Requirements Gathering (2 weeks)' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Complete project kickoff and gather detailed requirements from stakeholders.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'milestones-list-wrapper',
              slideTemplate: 'road-map-sharp-edge',
              backgroundImage: {
                text: preview
                  ? 'Design Phase (4 weeks)\n    Develop and refine wireframes and prototypes for web and mobile applications for client approval.'
                  : 'Write something',
                imageId: '672c70e597db943c4e9b4da6',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e597db943c4e9b4da6.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Design Phase (4 weeks)' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Develop and refine wireframes and prototypes for web and mobile applications for client approval.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'milestones-list-wrapper',
              slideTemplate: 'road-map-sharp-edge',
              backgroundImage: {
                text: preview
                  ? 'Development Iterations (16 weeks)\n    Implement core functionalities followed by advanced features through iterative releases every three weeks.'
                  : 'Write something',
                imageId: '672c70e597db943c4e9b4da7',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e597db943c4e9b4da7.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Development Iterations (16 weeks)' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Implement core functionalities followed by advanced features through iterative releases every three weeks.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'milestones-list-wrapper',
              slideTemplate: 'road-map-sharp-edge',
              backgroundImage: {
                text: preview
                  ? 'User Acceptance Testing and Launch (2 weeks)\n    Conduct user acceptance testing, gather feedback, and officially launch the omnichannel ecommerce solution.'
                  : 'Write something',
                imageId: '672c70e597db943c4e9b4da8',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e597db943c4e9b4da8.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'User Acceptance Testing and Launch (2 weeks)' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Conduct user acceptance testing, gather feedback, and officially launch the omnichannel ecommerce solution.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  } as JSONContent;
};

const timelineSlide = ({ slideId, preview }: { slideId: string; preview: boolean; companyProfile: CompanyProfile }) => {
  return {
    type: 'Slide',
    attrs: {
      id: slideId,
      title: 'Timeline',
      class: 'slide',
      slideType: 'timeline-wrapper',
      slideTemplate: 'timeline-chevron',
      backgroundImage: {
        text: preview
          ? 'Timeline\n\n\n  \n    Project Initiation\n    Kickoff the project by gathering requirements and aligning with stakeholders to ensure clarity and direction for the development process.\n  \n  \n    Design Development\n    Create and refine wireframes and prototypes for both web and mobile applications, ensuring a user-friendly interface and experience.\n  \n  \n    Iterative Development\n    Implement core functionalities followed by advanced features through a series of iterative releases, enhancing the platform progressively.\n  \n  \n    Testing and Launch\n    Conduct thorough user acceptance testing, gather feedback, and officially launch the omnichannel ecommerce solution to the market.'
          : 'Write something',
        imageId: '672c70e597db943c4e9b4daa',
        keywords: [],
        src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e597db943c4e9b4daa.jpeg' : '',
        alt: '',
        query: '',
      },
    },
    content: [
      {
        type: 'SlideTitleWrapper',
        attrs: {
          class: 'slide-title',
          slideType: 'timeline-title',
          slideTemplate: 'timeline-chevron',
        },
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: preview ? 'Timeline' : 'Write something',
              },
            ],
          },
        ],
      },
      {
        type: 'SlideContentWrapper',
        attrs: {
          class: 'slide-content',
          slideType: 'timeline-content',
          slideTemplate: 'timeline-chevron',
        },
        content: [
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'timeline-list-wrapper',
              slideTemplate: 'timeline-chevron',
              backgroundImage: {
                text: preview
                  ? 'Project Initiation\n    Kickoff the project by gathering requirements and aligning with stakeholders to ensure clarity and direction for the development process.'
                  : 'Write something',
                imageId: '672c70e597db943c4e9b4dab',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e597db943c4e9b4dab.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Project Initiation' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Kickoff the project by gathering requirements and aligning with stakeholders to ensure clarity and direction for the development process.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'timeline-list-wrapper',
              slideTemplate: 'timeline-chevron',
              backgroundImage: {
                text: preview
                  ? 'Design Development\n    Create and refine wireframes and prototypes for both web and mobile applications, ensuring a user-friendly interface and experience.'
                  : 'Write something',
                imageId: '672c70e597db943c4e9b4dac',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e597db943c4e9b4dac.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Design Development' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Create and refine wireframes and prototypes for both web and mobile applications, ensuring a user-friendly interface and experience.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'timeline-list-wrapper',
              slideTemplate: 'timeline-chevron',
              backgroundImage: {
                text: preview
                  ? 'Iterative Development\n    Implement core functionalities followed by advanced features through a series of iterative releases, enhancing the platform progressively.'
                  : 'Write something',
                imageId: '672c70e597db943c4e9b4dad',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e597db943c4e9b4dad.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Iterative Development' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Implement core functionalities followed by advanced features through a series of iterative releases, enhancing the platform progressively.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
          {
            type: 'ListWithTitle',
            attrs: {
              class: 'list-with-title',
              slideType: 'timeline-list-wrapper',
              slideTemplate: 'timeline-chevron',
              backgroundImage: {
                text: preview
                  ? 'Testing and Launch\n    Conduct thorough user acceptance testing, gather feedback, and officially launch the omnichannel ecommerce solution to the market.'
                  : 'Write something',
                imageId: '672c70e597db943c4e9b4dae',
                keywords: [],
                src: '', // preview ? 'ndeck/images/672c70b997db943c4e9b4d77/672c70e597db943c4e9b4dae.jpeg' : '',
                alt: '',
                query: '',
              },
            },
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview ? 'Testing and Launch' : 'Write something',
                  },
                ],
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: preview
                      ? 'Conduct thorough user acceptance testing, gather feedback, and officially launch the omnichannel ecommerce solution to the market.'
                      : 'Write something',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  } as JSONContent;
};

export const BUSINESS_SLIDE_TEMPLATES = {
  introductionSlide,
  portfolioSlide,
  objectiveSlide,
  requirementsSlide,
  solutionsSlide,
  // architectureSlide, // <- Not needed
  techStackSlide,
  milestonesSlide,
  timelineSlide,
  contactUsSlide,
} as const;

export type SlideTemplateType = keyof typeof BUSINESS_SLIDE_TEMPLATES;
