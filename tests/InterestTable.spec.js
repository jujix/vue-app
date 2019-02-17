import { mount } from "@vue/test-utils";
import InterestTable from "@/InterestTable.vue";

const wrapper = mount(InterestTable);

describe("InterestTable.vue", () => {
  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain(
        "<div id=\"calculatedInterestTable\"><table><tbody><tr>"+
        "<th>Year</th> <th>Investment</th> <th>Gained interest</th> <th>Total capital</th>"+
        "</tr> </tbody></table></div>"
    );
  });
});
