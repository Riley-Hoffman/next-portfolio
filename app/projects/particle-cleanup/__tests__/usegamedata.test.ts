import { renderHook, act } from "@testing-library/react";
import { useGameData } from "../hooks/useGameData";

describe("useGameData", () => {
  const initialGameData = {
    time: null,
    gameInProgress: true,
    cursorMessage: "",
    cursorMessageRead: true,
  };

  it("should initialize with default game data", () => {
    const { result } = renderHook(() => useGameData());

    const [gameData] = result.current;
    expect(gameData).toEqual(initialGameData);
  });

  it("should handle START_GAME action", () => {
    const { result } = renderHook(() => useGameData());
    const [, dispatch] = result.current;

    act(() => {
      dispatch({ type: "START_GAME" });
    });

    const [gameData] = result.current;
    expect(gameData).toEqual(initialGameData);
  });

  it("should handle END_GAME action", () => {
    const { result } = renderHook(() => useGameData());
    const [, dispatch] = result.current;

    act(() => {
      dispatch({ type: "END_GAME", time: 123 });
    });

    const [gameData] = result.current;
    expect(gameData).toEqual({
      ...initialGameData,
      time: 123,
      gameInProgress: false,
    });
  });

  it("should handle RESET_GAME action", () => {
    const { result } = renderHook(() => useGameData());
    const [, dispatch] = result.current;

    act(() => {
      dispatch({ type: "START_GAME" });
      dispatch({ type: "END_GAME", time: 123 });
    });

    act(() => {
      dispatch({ type: "RESET_GAME" });
    });

    const [gameData] = result.current;
    expect(gameData).toEqual(initialGameData);
  });

  it("should handle SET_CURSOR_MESSAGE action", () => {
    const { result } = renderHook(() => useGameData());
    const [, dispatch] = result.current;

    act(() => {
      dispatch({ type: "SET_CURSOR_MESSAGE", message: "New message" });
    });

    const [gameData] = result.current;
    expect(gameData).toEqual({
      ...initialGameData,
      cursorMessage: "New message",
      cursorMessageRead: false,
    });
  });

  it("should handle MARK_MESSAGE_READ action", () => {
    const { result } = renderHook(() => useGameData());
    const [, dispatch] = result.current;

    act(() => {
      dispatch({ type: "SET_CURSOR_MESSAGE", message: "New message" });
    });

    act(() => {
      dispatch({ type: "MARK_MESSAGE_READ" });
    });

    const [gameData] = result.current;
    expect(gameData).toEqual({
      ...initialGameData,
      cursorMessage: "New message",
      cursorMessageRead: true,
    });
  });
});
