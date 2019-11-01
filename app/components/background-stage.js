import Component from '@ember/component';
import { colorNames } from '../data/color-names';

const defaultColor1 = 'red';
const defaultColor2 = 'yellow';
const defaultOpacity = .7;
const defaultDegree = 90;

export default Component.extend({
	message: `“Everything you can imagine is real.” ― Pablo Picasso`,
	color1: defaultColor1,
	color2: defaultColor2,
	gradOpacity: defaultOpacity,
	gradDegree: defaultDegree,
	bgImgIndex: 1, 
	linearOrientation: true,
	colors: colorNames,
	actions: {
		updateGradDegree(newValueEvent) {
			let newVal = newValueEvent.target.value;
			this.set('gradDegree', newVal);
		},
		updateGradOpacity(newValueEvent) {
			let newVal = newValueEvent.target.value;
			this.set('gradOpacity', newVal);
		},
		updateMessage(newValueEvent) {
			let newVal = newValueEvent.target.value;
			this.set('message', newVal);
		},
		updateColor1(newValueEvent) {
			let newVal = newValueEvent.target.value;
			this.set('color1', newVal);
		},
		updateColor2(newValueEvent) {
			let newVal = newValueEvent.target.value;
			this.set('color2', newVal);
		},
		updateBgImgIndex() {
			let randomInt = Math.floor(Math.random() * 5) + 1;
			this.set('bgImgIndex', randomInt);
		},
		toggleGradientOrientation() {
			let currentOrientation = this.get('linearOrientation');
			let updatedOrientation = !currentOrientation;
			this.set('linearOrientation', updatedOrientation);
		}
	}
});
