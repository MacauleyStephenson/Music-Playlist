import SongItem from '@/components/SongItem.vue';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';

describe('songItem.vue', () => {

	test('renders song.display.name', () => {
		const song = {
			display_name: 'test',
		};

		const wrapper = shallowMount(SongItem, {
			propsData: {
				song,
			},
			global: {
				components: {
					'router-link': RouterLinkStub,
				},
			},
		});

		expect(wrapper.text()).toContain(song.display_name);
	});
});