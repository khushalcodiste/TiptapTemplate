export interface SlideTheme {
  background: string;
  color: {
    primary: string;
    secondary: string;
    primaryDark: string;
  };
  fontFamily: string;
  fontColor: string;
  slideBorder?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;
    title: string;
    slideTheme: SlideTheme;
  }
}
