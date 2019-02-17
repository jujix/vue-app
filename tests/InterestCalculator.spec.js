import Vue from 'vue'
import { mount } from "@vue/test-utils";
import InterestCalculator from "@/InterestCalculator.vue";

const wrapper = mount(InterestCalculator, {
  propsData: {
    year: 10,
    interest: 8,
    startingCapital: 0,
    recurringInvestment: 1500
  }
})

describe("InterestCalculator.vue", () => {
  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain(
      '<div><div id="totalCapital"><h2><b>' +
        "Total accumulated capital: 274419" +
        "</b></h2></div></div>"
    );
  });

  it('renders correctly with different props', () => {
    expect(wrapper.props().year).toBe(10)
    expect(wrapper.props().interest).toBe(8)
    expect(wrapper.props().startingCapital).toBe(0)
    expect(wrapper.props().recurringInvestment).toBe(1500)
  })
  })
