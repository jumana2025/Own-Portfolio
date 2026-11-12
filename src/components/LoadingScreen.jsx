import React, { useEffect, useState } from "react";

export default function LoadingScreen({ exiting }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1150;
    const startedAt = performance.now();
    let frameId;

    const updateProgress = () => {
      const nextProgress = Math.min(Math.round(((performance.now() - startedAt) / duration) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress < 100) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    frameId = window.requestAnimationFrame(updateProgress);
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      className={`site-loader${exiting ? " is-exiting" : ""}`}
      role="status"
      aria-label="Loading portfolio"
      aria-hidden={exiting}
    >
      <div className="site-loader-content">
        <p className="site-loader-brand">JUMANAP<span>.</span>IN</p>
        <p className="site-loader-label">Full Stack Developer</p>
        <div
          className="site-loader-track"
          role="progressbar"
          aria-label="Portfolio loading progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <div className="site-loader-progress">
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
