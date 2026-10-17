import HeaderBlock from "@/components/blocks/header/1/header-block";
import HeroBlock from "@/components/blocks/hero/1/hero-block";
import LogoCloudBlock from "@/components/blocks/logo-cloud/3/logo-cloud-block";
import StatsBlock from "@/components/blocks/stats/1/stats-block";
import GalleryBlock from "@/components/blocks/gallery/1/gallery-block";
import MenuBlock from "@/components/blocks/menu/1/menu-block";
import TestimonialsBlock from "@/components/blocks/testimonials/1/testimonials-block";
import FaqsBlock from "@/components/blocks/faqs/1/faqs-block";
import CtaBlock from "@/components/blocks/cta/1/cta-block";
import FooterBlock from "@/components/blocks/footer/1/footer-block";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <HeaderBlock />
      <main>
        <HeroBlock />
        <LogoCloudBlock />
        <StatsBlock />
        <GalleryBlock />
        <MenuBlock />
        <TestimonialsBlock />
        <FaqsBlock />
        <CtaBlock />
      </main>
      <FooterBlock />
    </div>
  );
}
