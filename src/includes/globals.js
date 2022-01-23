import _ from 'lodash';

export default {
	install(app) {
		const baseComponets = require.context(
			'../components/base/', false, /[A-Za-z0-9-_,\s]+\.vue$/i,
		);

		baseComponets.keys().forEach((fileName) => {
			const componentConfig = baseComponets(fileName);
			const componentName = _.upperFirst(_.camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')),
			);


			//export default
			app.component(`Base${componentName}`, componentConfig.default || componentConfig);
		});
	},
};