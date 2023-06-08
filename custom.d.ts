declare module "*.scss"{
    type Styles = {
        [selector: string]: string
      }

      const styles: Styles;

      export default styles;
}

declare module '*.jpg';
declare module '*.svg';
declare module '*.png';
