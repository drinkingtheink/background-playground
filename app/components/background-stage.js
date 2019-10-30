import Component from '@ember/component';

export default Component.extend({
	message: 'Lets Play With Styles',
	color1: 'white',
	color2: 'red',
	gradOpacity: .5,
	gradDegree: 17,
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
	}	
});
