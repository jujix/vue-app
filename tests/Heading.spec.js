import { mount } from '@vue/test-utils'
import Heading from '@/Heading.vue'

const wrapper = mount(Heading)

describe('Heading.vue', () => {
    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('<div class=\"hello\"><h1></h1></div>')
      })
    
})