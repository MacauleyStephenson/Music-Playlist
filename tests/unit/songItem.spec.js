import SongItem from '@/components/SongItem.vue';
import { shallowMount } from '@vue/test-utils';

describe('songItem.vue', () => {

	test('renders song.display.name', () => {
		const song = {
			display_name: 'test',
		};

		const wrapper = shallowMount(SongItem, {
			propsData: {
				song,
			},
		});

		expect(wrapper.text()).toContain(song.display_name);
	});
});