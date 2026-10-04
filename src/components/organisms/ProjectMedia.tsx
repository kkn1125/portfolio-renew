import { usePrefersReducedMotion } from "@hooks/useScrollReveal";
import { getImageUrl, ImageObject } from "@libs/getResource";
import { Button } from "@mui/material";
import { useState } from "react";

export default function ProjectMedia({ media }: { media: ImageObject }) {
  const reduced = usePrefersReducedMotion();
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const gif = /\.gif(?:\?|$)/i.test(media.src);
  const video = /\.mp4(?:\?|$)/i.test(media.src);
  const blocked = gif && reduced && !started;
  return (
    <figure className="project-media">
      {failed ? (
        <p className="media-fallback">미디어를 불러오지 못했습니다.</p>
      ) : blocked ? (
        <div className="media-fallback">
          <p>움직이는 화면은 재생을 선택하면 표시됩니다.</p>
          <Button variant="outlined" onClick={() => setStarted(true)}>
            애니메이션 보기
          </Button>
        </div>
      ) : video ? (
        <video
          controls
          playsInline
          preload="metadata"
          src={getImageUrl(media.src)}
          onError={() => setFailed(true)}
          aria-label={media.alt || "프로젝트 영상"}
        />
      ) : (
        <img
          src={getImageUrl(media.src)}
          alt={media.alt || "프로젝트 구현 화면"}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      {media.alt && <figcaption>{media.alt}</figcaption>}
    </figure>
  );
}
