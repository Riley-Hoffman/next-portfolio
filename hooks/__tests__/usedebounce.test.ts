import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "../useDebounce";

jest.useFakeTimers();

describe("useDebounce", () => {
  it("calls the function immediately and blocks subsequent calls within the delay", () => {
    const mockFunction = jest.fn();
    const delay = 500;

    const { result } = renderHook(() => useDebounce(mockFunction, delay));

    act(() => {
      result.current("arg1");
      result.current("arg2");
    });

    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith("arg1");

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    act(() => {
      result.current("arg3");
    });

    expect(mockFunction).toHaveBeenCalledTimes(2);
    expect(mockFunction).toHaveBeenCalledWith("arg3");
  });

  it("resets the timeout after each delay period", () => {
    const mockFunction = jest.fn();
    const delay = 300;

    const { result } = renderHook(() => useDebounce(mockFunction, delay));

    act(() => {
      result.current("arg1");
    });

    act(() => {
      jest.advanceTimersByTime(delay - 100);
    });

    expect(mockFunction).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    act(() => {
      result.current("arg2");
    });

    expect(mockFunction).toHaveBeenCalledTimes(2);
    expect(mockFunction).toHaveBeenCalledWith("arg2");
  });

  it("does not call the function if the timeout has not passed", () => {
    const mockFunction = jest.fn();
    const delay = 500;

    const { result } = renderHook(() => useDebounce(mockFunction, delay));

    act(() => {
      result.current("arg1");
    });

    act(() => {
      result.current("arg2");
    });

    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith("arg1");

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    act(() => {
      result.current("arg3");
    });

    expect(mockFunction).toHaveBeenCalledTimes(2);
    expect(mockFunction).toHaveBeenCalledWith("arg3");
  });
});
