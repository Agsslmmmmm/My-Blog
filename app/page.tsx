import Image from "next/image";
import HeroSection from '@/components/HeroSection'
import BlogSection from '@/components/BlogSection'

export default function Home() {

  return (
    <main className="dark:bg-slate-600">
      <HeroSection />
      <BlogSection />
    </main>
  );
}
