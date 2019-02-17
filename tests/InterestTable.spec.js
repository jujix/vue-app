import { mount } from "@vue/test-utils";
import InterestTable from "@/InterestTable.vue";

const wrapper = mount(InterestTable, {
  propsData: {
    year: 10,
    investment: 1500,
    startingCapital: 0,
    recurringInvestment: 1500
  }
})

describe("InterestTable.vue", () => {
  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain(
      "<div id=\"calculatedInterestTable\"><table><tbody><tr><th>Year</th> <th>Investment</th> <th>Gained interest</th> <th>Total capital</th></tr> <tr><th>10</th> <th>1500</th> <th>0</th> <th>1500</th></tr><tr><th>10</th> <th>1500</th> <th>0</th> <th>1500</th></tr><tr><th>10</th> <th>1500</th> <th>0</th> <th>1500</th></tr><tr><th>10</th> <th>1500</th> <th>0</th> <th>1500</th></tr><tr><th>10</th> <th>1500</th> <th>0</th> <th>1500</th></tr><tr><th>10</th> <th>1500</th> <th>0</th> <th>1500</th></tr><tr><th>10</th> <th>1500</th> <th>0</th> <th>1500</th></tr><tr><th>10</th> <th>1500</th> <th>0</th> <th>1500</th></tr><tr><th>10</th> <th>1500</th> <th>0</th> <th>1500</th></tr><tr><th>10</th> <th>1500</th> <th>0</th> <th>1500</th></tr></tbody></table></div>"
    );
  });

  it('renders correctly with different props', () => {
    expect(wrapper.props().year).toBe(10)
    expect(wrapper.props().investment).toBe(1500)
    expect(wrapper.props().startingCapital).toBe(0)
    expect(wrapper.props().recurringInvestment).toBe(1500)
  })

});
