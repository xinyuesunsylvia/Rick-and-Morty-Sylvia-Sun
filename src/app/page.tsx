import Image from "next/image";
import ImageFeed from "./components/ImageFeed/ImageFeed";
import "./page.module.css";

export default function Home() {
  return (
    <main className="main">
      <ImageFeed />
    </main>
  );
}
