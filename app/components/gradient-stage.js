import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
	generatedStyles: '',
	generateStyles () {
		const color1 = get(this, 'color1');
		const color2 = get(this, 'color2');
		const opacity = get(this, 'opacity');
		const gradDegree = get(this, 'gradDegree');
		const linearPosition = get(this, 'linearPosition');
		let newGradient;

		if (linearPosition) {
			newGradient = `background: linear-gradient(${gradDegree}deg, ${color1} 0%, ${color2} 100%); opacity: ${opacity}`;
		} else {
			newGradient = `background: radial-gradient(${color1}, ${color2}); opacity: ${opacity}`;
		}

		this.set('generatedStyles', newGradient);
  },
  didReceiveAttrs() {
	this._super(...arguments);
	this.generateStyles();
  }
});
