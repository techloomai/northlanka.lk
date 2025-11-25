import { ConstructionBanner } from "@/components/construction-banner";
import { Header } from "@/components/header";
import { HeroComingSoon } from "@/components/hero-coming-soon";
import { Services } from "@/components/services";
import { AirlinesStrip } from "@/components/airlines-strip";
import { Notify } from "@/components/notify";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ConstructionBanner />
      <Header />
      <main className="flex-1">
        <HeroComingSoon />
        <Services />
        <AirlinesStrip />
        <Notify />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
