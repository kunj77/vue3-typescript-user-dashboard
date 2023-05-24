
import { mount } from "@vue/test-utils";
import ComingSoon from "./src/components/ComingSoon/ComingSoon.vue";
import { describe, it, expect } from "vitest";

describe("ComingSoon.vue", () => {

  it("should renders text", () => {
    const message = "Coming Soon!";
    const wrapper = mount(ComingSoon);

    expect(wrapper.text()).toBe(message);
  });
});

