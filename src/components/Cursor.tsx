import { usePrevious } from "@/hooks/usePrevious";
import { ValueOf } from "@/lib/types";
import cn from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

const CursorVariants = {
  default: "default",
  pointer: "pointer",
  arrow: "arrow",
} as const;

const CursorDirections = {
  left: "left",
  right: "right",
} as const;

const Cursor: React.FC = () => {
  const [cursorStyle, setCursorStyle] = useState<React.CSSProperties>({});
  const [cursorVariant, setCursorVariant] = useState<
    ValueOf<typeof CursorVariants>
  >(CursorVariants.default);
  const [cursorDirection, setCursorDirection] = useState<
    ValueOf<typeof CursorDirections>
  >(CursorDirections.left);
  const prevCursorVariant =
    usePrevious<ValueOf<typeof CursorVariants>>(cursorVariant);
  const cursorWrapperEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let left = e.clientX;
      let top = e.clientY;
      // "firstElementChild" used to support default cursor pointer state
      const wrapperEl = cursorWrapperEl.current?.firstElementChild;

      if (wrapperEl) {
        const htmlEl = document.getElementsByTagName("html")[0]!;
        const { width, height } = wrapperEl.getBoundingClientRect();
        left = Math.max(
          width / 2,
          Math.min(htmlEl.clientWidth - width / 2, left)
        );
        top = Math.max(
          height / 2,
          Math.min(htmlEl.clientHeight - height / 2, top)
        );
      }

      setCursorStyle({
        left: `${left}px`,
        top: `${top}px`,
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.classList.contains("cursor-arrow")) {
        if (target.classList.contains("cursor-arrow-right")) {
          setCursorDirection(CursorDirections.right);
        } else {
          setCursorDirection(CursorDirections.left);
        }
        setCursorVariant(CursorVariants.arrow);
      } else if (target.closest(".cursor-pointer")) {
        setCursorVariant(CursorVariants.pointer);
      } else {
        setCursorVariant(CursorVariants.default);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const relatedTarget = e.relatedTarget as HTMLElement;

      if (
        (!relatedTarget?.closest(".cursor-pointer") &&
          target?.classList?.contains(".cursor-pointer")) ||
        target?.classList?.contains(".cursor-arrow")
      ) {
        setCursorVariant(prevCursorVariant || CursorVariants.default);
      }
    };

    const body = document.getElementsByTagName("body")[0];

    if (body) {
      body.addEventListener("mousemove", handleMouseMove);
      body.addEventListener("mouseenter", handleMouseEnter, true);
      body.addEventListener("mouseleave", handleMouseLeave, true);
    }

    return () => {
      if (body) {
        body.removeEventListener("mousemove", handleMouseMove);
        body.removeEventListener("mouseenter", handleMouseEnter, true);
        body.removeEventListener("mouseleave", handleMouseLeave, true);
      }
    };
  }, []);

  const renderCursor = () => {
    switch (cursorVariant) {
      case CursorVariants.arrow:
        return (
          <div
            className={cn(
              "relative flex h-10 w-20 items-center",
              cursorDirection === CursorDirections.left
                ? "animate-bounce-left"
                : "animate-bounce-right"
            )}
          >
            <span className="h-0.5 w-[60%] bg-yellow-400/80" />
            <span className="aspect-square h-[80%] -translate-x-4 rotate-45 border-r-2 border-t-2 border-yellow-400/80" />
          </div>
        );
      default:
        return (
          <span
            className={cn(
              "relative flex h-8 w-8 transition-all duration-200 ease-in-out",
              {
                "scale-[1.8]": cursorVariant === CursorVariants.pointer,
              }
            )}
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-85"></span>
            <span
              className={cn(
                "relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-yellow-400/80 bg-yellow-400/50",
                {
                  "before:h-2 before:w-2 before:rounded-full before:bg-yellow-400/50":
                    cursorVariant === CursorVariants.pointer,
                }
              )}
            ></span>
          </span>
        );
    }
  };

  return (
    <div
      className={cn("pointer-events-none fixed z-[9999] hidden md:block")}
      style={{
        top: cursorStyle.top,
        left: cursorStyle.left,
        transform: "translate(-50%, -50%)",
      }}
      ref={cursorWrapperEl}
    >
      {renderCursor()}
    </div>
  );
};

export default Cursor;
