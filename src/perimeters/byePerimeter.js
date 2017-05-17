import BasePerimeter from './BasePerimeter';

export default new BasePerimeter({
  purpose: 'bye',

  govern: {
    'can route': () => true,

    'can viewParagraph': function () {
      return this.isAdmin();
    },
  },
});
