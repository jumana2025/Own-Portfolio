import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!pointer.matches) return undefined;
    document.documentElement.classList.add("custom-cursor-enabled");

    let x = -100;
    let y = -100;
    let ringX = x;
    let ringY = y;
    let frame;
    let hovering = false;

    const move = (event) => {
      x = event.clientX;
      y = event.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;

      const nextHovering = Boolean(event.target.closest("a, button, [role='button']"));
      if (nextHovering !== hovering) {
        hovering = nextHovering;
        ringRef.current?.classList.toggle("is-hovering", hovering);
        dotRef.current?.classList.toggle("is-hovering", hovering);
      }
    };

    const animateRing = () => {
      ringX += (x - ringX) * 0.18;
      ringY += (y - ringY) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      frame = window.requestAnimationFrame(animateRing);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("mousemove", move, { passive: true });
    frame = window.requestAnimationFrame(animateRing);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mousemove", move);
      window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("custom-cursor-enabled");
    };
  }, []);

  return createPortal(
    <div className="custom-cursor-layer" aria-hidden="true">
      <span ref={ringRef} className="custom-cursor-ring" />
      <span ref={dotRef} className="custom-cursor-dot" />
    </div>,
    document.body,
  );
}

export function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    let frame;
    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return createPortal(<span className="scroll-progress" ref={progressRef} aria-hidden="true" />, document.body);
}
