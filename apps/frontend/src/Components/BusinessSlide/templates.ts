const TECH_STACK_TEMPLATES = { TABLE: 'table' };

const SOLUTION_TEMPLATES = {
  HEXAGON: 'hexagon',
  FLOATING: 'floating',
  FLOATING_TRIANGLE: 'floating-triangle',
  MAN_WITH_SUITCASE: 'man-with-suit-case',
  LEFT_ALIGN_POINTS: 'left-align-points',
  LEFT_ALIGN_CURVE_IMAGE_POINTS: 'left-align-curve-image-points',
  GRID_POINTS: 'grid-points',
};

const PORTFOLIO_TEMPLATES = {
  HEXAGON: 'hexagon',
  FLOATING: 'floating',
  FLOATING_TRIANGLE: 'floating-triangle',
  MAN_WITH_SUITCASE: 'man-with-suit-case',
  LEFT_ALIGN_POINTS: 'left-align-points',
  LEFT_ALIGN_CURVE_IMAGE_POINTS: 'left-align-curve-image-points',
};

const OBJECTIVE_TEMPLATES = {
  HEXAGON: 'hexagon',
  FLOATING: 'floating',
  FLOATING_TRIANGLE: 'floating-triangle',
  MAN_WITH_SUITCASE: 'man-with-suit-case',
  LEFT_ALIGN_POINTS: 'left-align-points',
  LEFT_ALIGN_CURVE_IMAGE_POINTS: 'left-align-curve-image-points',
};

const REQUIREMENT_TEMPLATES = { PARAGRAPH: 'paragraph', PARAGRAPH_ALIGN_RIGHT: 'right-align-para', POINTS: 'points' };

const MILESTONE_TEMPLATES = {
  ROAD_MAP: 'road-map',
  TIME_LINE_WITH_PIN: 'timeline-with-pin',
  ROAD_MAP_SHARP_EDGE: 'road-map-sharp-edge',
  TIME_LINE_CHEVRON: 'timeline-chevron',
};

const TIMELINE_TEMPLATES = {
  ROAD_MAP: 'road-map',
  TIME_LINE_WITH_PIN: 'timeline-with-pin',
  ROAD_MAP_SHARP_EDGE: 'road-map-sharp-edge',
  TIME_LINE_CHEVRON: 'timeline-chevron',
};

const INTRODUCTION_TEMPLATES = {
  TRIANGLE: 'triangle',
  HEXAGON: 'hexagon',
  CENTER_ALIGNED: 'center-aligned',
  GRID_IMAGE: 'grid-image',
};

const CONTACT_US_TEMPLATES = { LIST: 'list', ROUND_IMAGE: 'round-image' };

const BUSINESS_TEMPLATES = {
  introduction: INTRODUCTION_TEMPLATES,
  objective: OBJECTIVE_TEMPLATES,
  portfolio: PORTFOLIO_TEMPLATES,
  timeline: TIMELINE_TEMPLATES,
  tech: TECH_STACK_TEMPLATES,
  solutions: SOLUTION_TEMPLATES,
  requirements: REQUIREMENT_TEMPLATES,
  milestones: MILESTONE_TEMPLATES,
  contact: CONTACT_US_TEMPLATES,
  architecture: {},
} as const;

export default BUSINESS_TEMPLATES;
