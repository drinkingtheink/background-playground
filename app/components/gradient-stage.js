import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
	generatedStyles: '',
  generateStyles () {
  	const color1 = get(this, 'color1');
		const color2 = get(this, 'color2');
		const opacity = get(this, 'opacity');
		const gradDegree = get(this, 'gradDegree');
		this.set('generatedStyles', `background: linear-gradient(${gradDegree}deg, ${color1} 0%, ${color2} 100%); opacity: ${opacity}`);
  },
  didReceiveAttrs() {
    this._super(...arguments);
    this.generateStyles();
	}
});
