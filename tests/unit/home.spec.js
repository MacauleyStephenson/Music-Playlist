import { shallowMount } from "@vue/test-utils";
import Home from '@/views/Home.vue';
import songItem from '@/components/songItem.vue';

jest.mock('@/includes/firebase', () => { });

describe('Home.vue', () => {

	test('readers list of songs', () => {
		const songs = [
			{}, {}, {},
		];

		Home.methods.getSongs = () => false;

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