import Component from '@ember/component';

export default Component.extend({
	message: 'Compose Yourself a Lovely Background',
	color1: 'white',
	color2: 'red',
	gradOpacity: .7,
	gradDegree: 90,
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
