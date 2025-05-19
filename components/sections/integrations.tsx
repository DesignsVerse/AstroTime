"use client"
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const integrations = [
  {
    name: "Epic Systems",
    logo: "/m/Epic.avif"
  },
  {
    name: "Allscripts",
    logo: "/m/Allscripts.avif"
  },
  {
    name: "Cerner",
    logo: "/m/Cerner.avif"
  },
  {
    name: "EClinicalWorks",
    logo: "/m/ECW.avif"
  },
  {
    name: "Epic Systems",
    logo: "/m/Epic.avif"
  },
  {
    name: "Allscripts",
    logo: "/m/Allscripts.avif"
  },
  {
    name: "Cerner",
    logo: "/m/Cerner.avif"
  },
  {
    name: "EClinicalWorks",
    logo: "/m/ECW.avif"
  },
];

export function Integrations() {
  // Duplicate the array to create a seamless loop
  const duplicatedIntegrations = [...integrations, ...integrations];
  
  return (
    <section className="bg-[#F9FAFB] py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h2 className="text-sm font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
            INTEGRATED WITH ANY HEALTH RECORD SYSTEM
          </h2>
        </div>
        
        {/* First Marquee - Moving Right */}
        <div className="relative mt-16 h-32 w-full overflow-hidden">
          <div className="absolute flex w-[calc(250px*16)] animate-marqueeRight whitespace-nowrap">
            {duplicatedIntegrations.map((integration, index) => (
              <div key={`right-${index}`} className="mx-4">
                <Card className="bg-white shadow-sm w-40 h-24">
                  <CardContent className="flex h-full items-center justify-center p-4">
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      width={160}
                      height={80}
                      className="object-contain"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Second Marquee - Moving Left */}
        <div className="relative mt-8 h-32 w-full overflow-hidden">
          <div className="absolute flex w-[calc(250px*16)] animate-marqueeLeft whitespace-nowrap">
            {duplicatedIntegrations.reverse().map((integration, index) => (
              <div key={`left-${index}`} className="mx-4">
                <Card className="bg-white shadow-sm w-40 h-24">
                  <CardContent className="flex h-full items-center justify-center p-4">
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      width={160}
                      height={80}
                      className="object-contain"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add these styles to your global CSS */}
      <style jsx global>{`
        @keyframes marqueeRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeLeft {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marqueeRight {
          animation: marqueeRight 30s linear infinite;
        }
        .animate-marqueeLeft {
          animation: marqueeLeft 30s linear infinite;
        }
      `}</style>
    </section>
  );
}