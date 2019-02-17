import { mount } from "@vue/test-utils";
import InterestCalculator from "@/InterestCalculator.vue";

const wrapper = mount(InterestCalculator);

describe("InterestCalculator.vue", () => {
  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain(
      '<div><div id="totalCapital"><h2><b>' +
        "Total accumulated capital: NaN" +
        "</b></h2></div></div>"
    );
  });
});
