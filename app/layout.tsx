import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LightRays from "../components/LightRays"
import Navbar from "../components/Navbar";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const SchibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const MartianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevMeet",
  description: "A hub for dev events..",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("min-h-screen", "antialiased", SchibstedGrotesk.variable, MartianMono.variable, "font-sans", geist.variable)}
    >


      <body className="min-h-screen bg-[#0d0d12] text-white">
        <Navbar />


        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <LightRays
            lineColor="#0a3d4e"
            glowColor="#044c59"
            speed={0.08}
            scale={6}
            rotation={0}
            rotationSpeed={0.1}
            layers={2}
            waveAmplitude={0.012}
            waveFrequency={3}
            waveSpeed={0.12}
            layerSpeed={0.025}
            twist={0.08}
            twistFrequency={5}
            twistSpeed={1}
            lineFrequency={5}
            lineSpacing={2}
            lineSharpness={12}
            glowFalloff={12}
            glowIntensity={0.8}
            brightness={0.8}
            blueBoost={0.85}
            vignette={1}
            grain={0.025}
            dpr={1}
            lightMode={false}
            fps={60}
            paused={false}
          />
        </div>
        <main> {children}</main>

      </body>
    </html>
  );
}
