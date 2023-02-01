import { renderHook, act } from "@testing-library/react";
import useStore from "./src/App";

describe("INITIAL RENDER", () => {
  const { result } = renderHook(useStore);

  it("count should initialize correctly", () => {
    expect(result.current.count).toStrictEqual(1);
  });
});

describe("STATE CHANGES", () => {
  const { result } = renderHook(useStore);

  it("count should update correctly", () => {
    const { result } = renderHook(useStore);

    act(() => {
      result.current.UnknownAction();
    });

    expect(result.current.count).toStrictEqual(2);
  });
  it("count should update correctly", () => {
    const { result } = renderHook(useStore);

    act(() => {
      result.current.UnknownAction();
    });

    expect(result.current.count).toStrictEqual(3);
  });
  it("count should update correctly", () => {
    const { result } = renderHook(useStore);

    act(() => {
      result.current.UnknownAction();
    });

    expect(result.current.count).toStrictEqual(4);
  });
});
