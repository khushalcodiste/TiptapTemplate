import { SlideBaseExtension } from '@ndeck/tiptap-extensions';

export const SlideWrapperExtension = SlideBaseExtension().extend({
  addOptions() {
    return {
      showBorder: Boolean,
      enableTemplateDrawer: Boolean,
      onAction: () => {
        throw new Error(`SlideWrapperExtension not configured with onAction`);
      },
    };
  },
});
