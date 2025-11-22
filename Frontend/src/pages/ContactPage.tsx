import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-16">
        <Contact />
      </div>
    </div>
  );
}
