import { HomeHero } from "@/components/home/HomeHero";
import { HomeFeatures } from "@/components/home/HomeFeatures";
import { HomeActions } from "@/components/home/HomeActions";

export default function Home() {
  return (
    <div className="container py-8 space-y-12">
      <HomeHero />
      <HomeFeatures />
      <HomeActions />
    </div>
  );
}