/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable linebreak-style */
import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from 'vee-validate';
import { required, min, max, alpha_spaces as alphaSpaces, alpha_spaces, email, min_value as minVal, max_value as maxVal } from '@vee-validate/rules';

export default {
	install(app) {
		app.component('VeeForm', VeeForm);
		app.component('VeeField', VeeField);
		app.component('ErrorMessage', ErrorMessage);

		defineRule('required', required);
		defineRule('min', min);
		defineRule('max', max);
		defineRule('alpha_spaces', alpha_spaces);
		defineRule('email', email);
		defineRule('min_value', minVal);
		defineRule('max_value', maxVal);
	},
};
