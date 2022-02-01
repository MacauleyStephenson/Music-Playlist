import { shallowMount } from "@vue/test-utils";
import Home from '@/views/Home.vue';
import songItem from '@/components/songItem.vue';

describe('Home.vue', () => {

	test('readers list of songs', () => {
		const songs = [
			{}, {}, {},
		];

		const component = shallowMount(Home, {
			data() {
				return {
					songs,
				};
			},
		});

		const items = component.findAllComponents(songItem);

		expect(items).toHaveLength(songs.length);
	});
});