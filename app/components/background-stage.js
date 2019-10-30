import Component from '@ember/component';

export default Component.extend({
	message: 'Lets Play With Styles',
	color1: 'white',
	color2: 'black',
	opacity: .95,
	gradDegree: 17,
	actions: {
		updateGradDegree(newValueEvent) {
			let newVal = newValueEvent.target.value;
			this.set('gradDegree', newVal);
		},
	}	
});
