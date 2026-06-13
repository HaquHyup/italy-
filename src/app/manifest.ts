import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "이탈리아 여행",
    short_name: "Italy Trip",
    description: "2026년 6월 이탈리아 여행 일정과 바우처를 한눈에 보는 여행 앱",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f7f4ef",
    theme_color: "#8f3f2f",
    orientation: "portrait",
    icons: [
      {
        src: "/app-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable"
      }
    ]
  };
}
