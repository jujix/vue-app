import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Heading from '@/Heading.vue'

const wrapper = mount(Heading, {
  propsData: {
    msg: "Investment interest calculator",
  }
})

// helper function
function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('Heading.vue', () => {
    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('<div class=\"hello\"><h1>Investment interest calculator</h1></div>')
      })

      it('renders correctly with different props', () => {
        expect(wrapper.props().msg).toBe("Investment interest calculator")
      })
    
})