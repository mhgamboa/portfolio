import { ThemeToggle } from "@/components/theme-toggle";
import { ContactForm } from "@/components/contact-form";
import { Bio } from "@/components/index/Bio";
import { Services } from "@/components/index/Services";
import { Projects } from "@/components/index/Projects";
import { Companies } from "@/components/index/Companies";
import Profile from "@/components/index/Profile";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#69a1f0] dark:bg-[#1a1a2e] text-black dark:text-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-6">
          <ThemeToggle />
        </div>

        <Profile />
        <Bio />
        <Services />
        <Projects />
        <Companies />
        <ContactForm />

        {/* Footer */}
        <footer className="text-center pb-8">
          <p className="text-sm">
            © {new Date().getFullYear()} Marcus Gamboa. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
