import { useRef } from "react";

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<{ target: T; previous: T | undefined }>({
    target: value,
    previous: undefined,
  });

  if (ref.current.target !== value) {
    ref.current.previous = ref.current.target;
    ref.current.target = value;
  }

  return ref.current.previous;
}
