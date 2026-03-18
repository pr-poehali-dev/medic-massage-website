import HeroNav from "@/components/HeroNav";
import ServicesSections from "@/components/ServicesSections";
import ConversionSections from "@/components/ConversionSections";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)", color: "var(--graphite)" }}>
      <HeroNav />
      <ServicesSections />
      <ConversionSections />
    </div>
  );
}
