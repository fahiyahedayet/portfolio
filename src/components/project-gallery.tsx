
"use client";

import { useEffect, useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export default function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [paused, images.length]);

  function previousImage() {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  }

  function nextImage() {
    setActiveIndex((current) => (current + 1) % images.length);
  }

  if (images.length === 0) {
    return (
      <div className="gallery-empty">
        Add project screenshots to display them here.
      </div>
    );
  }

  return (
    <section
      className="project-gallery"
      aria-label={`${title} screenshots`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="gallery-main">
        <div className="gallery-top-label">
          <span className="gallery-live-dot" />
          PROJECT PREVIEW
          <span className="gallery-counter">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
        </div>

        <div className="gallery-image-stage">
          {images.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              className={`gallery-image ${
                index === activeIndex ? "gallery-image-active" : ""
              }`}
              loading={index === 0 ? "eager" : "lazy"}
              draggable={false}
            />
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-arrow gallery-arrow-left"
              onClick={previousImage}
              aria-label="Previous screenshot"
            >
              ←
            </button>

            <button
              type="button"
              className="gallery-arrow gallery-arrow-right"
              onClick={nextImage}
              aria-label="Next screenshot"
            >
              →
            </button>
          </>
        )}

        <div className="gallery-progress">
          <span
            key={activeIndex}
            className={`gallery-progress-bar ${
              paused ? "gallery-progress-paused" : ""
            }`}
          />
        </div>
      </div>

      {images.length > 1 && (
        <div className="gallery-thumbnails" aria-label="Choose screenshot">
          {images.map((image, index) => (
            <button
              key={`${image}-thumb-${index}`}
              type="button"
              className={`gallery-thumbnail ${
                index === activeIndex ? "gallery-thumbnail-active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show screenshot ${index + 1}`}
              aria-pressed={index === activeIndex}
            >
              <img
                src={image}
                alt=""
                loading="lazy"
                draggable={false}
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
