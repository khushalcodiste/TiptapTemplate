/**
 * Generic Attribute type for flexible attribute management
 *
 * @template T - The type of the attribute's value
 */
export type Attribute<T> = {
  /**
   * Default value for the attribute
   */
  default?: T;

  /**
   * Indicates whether the attribute should be rendered
   */
  rendered?: boolean;

  /**
   * Function to render HTML attributes based on the current attributes
   * @param attributes - Current attributes object
   * @returns Rendered HTML attributes or null
   */
  renderHTML?: ((attributes: Record<string, never>) => Record<string, never> | null) | null;

  /**
   * Function to parse HTML element and extract attribute value
   * @param element - HTML element to parse
   * @returns Parsed attribute value or null
   */
  parseHTML?: ((element: HTMLElement) => T | null) | null;

  /**
   * Indicates whether the attribute should be kept when splitting content
   */
  keepOnSplit?: boolean;

  /**
   * Indicates whether the attribute is required
   */
  isRequired?: boolean;
};

export interface ImageSearchOptions {
  id: string;
  src: string;
  alt: string;
  query?: string;
  uploadKey: string;
  content: string;
  text?: string; /// @deprecated
  orientation?: 'portrait' | 'landscape';
  slideId: BUSINESS_SLIDE_TYPE;
  caption?: string;
}

export type SlideExtensionAttributes = {
  id: Attribute;
  title: Attribute;
  class: Attribute;
  slideType: Attribute;
  slideTemplate: Attribute;
  backgroundImage: Attribute<ImageSearchOptions>;
  backgroundImageAlt: Attribute<ImageSearchOptions>;
};
