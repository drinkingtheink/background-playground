import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  generatedStyles: '',
  generateStyles () {
    const bgImgIndex = get(this, 'bgImgIndex');
    this.set('generatedStyles', `background: url("/banners/bg${bgImgIndex}.jpeg") no-repeat; background-size: cover; background-position: center;`);
  },
  didReceiveAttrs() {
    this._super(...arguments);
    this.generateStyles();
  }  
});
