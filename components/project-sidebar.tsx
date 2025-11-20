import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

export function ProjectSidebar() {
  return (
    <aside className="w-full lg:w-[40%] xl:w-[35%] bg-white flex flex-col justify-between p-8 lg:p-12 lg:h-screen lg:sticky lg:top-0 border-r border-gray-100 z-10">
      {/* Header / Back Link */}
      <div className="mb-12 lg:mb-0">
        <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
          <ArrowLeft className="w-4 h-4" />
          All Projects
        </Link>
      </div>

      {/* Project Details */}
      <div className="flex flex-col gap-12 max-w-xl">
        <div className="grid grid-cols-[100px_1fr] gap-y-6 text-sm">
          <div className="text-gray-500">Client</div>
          <div className="font-medium">Kayu Lapis</div>

          <div className="text-gray-500">Year</div>
          <div className="font-medium">2025</div>

          <div className="text-gray-500">Type</div>
          <div className="font-medium">
            <div>Retail</div>
            <div>Catalog Product</div>
          </div>

          <div className="text-gray-500">Link</div>
          <div className="font-medium">
            <Link href="#" className="inline-flex items-center gap-1 hover:underline">
              Concept Design <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="text-gray-500">Tools</div>
          <div className="font-medium">Figma</div>
        </div>

        <div className="space-y-4">
          <div className="text-gray-500 text-sm">Overview</div>
          <p className="text-gray-900 leading-relaxed">
            Partnering with Kayu Lapis in 2025, we set out to make product selection faster and increase qualified inquiries. We designed a Figma system that includes brand components, product cards with thickness and finish variants, specification tables, comparison views, and inquiry prompts that guide buyers to action. The kit speeds catalog creation, keeps data consistent across channels, and prepares a smooth handoff to ecommerce or distributor portals.
          </p>
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="mt-12 lg:mt-0">
        <Link 
          href="#" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#FF4D30] rounded-full transition-all border-b-4 border-[#cc2211] active:border-b-0 active:translate-y-1 hover:brightness-110 w-full lg:w-auto"
        >
          Free Consultation
        </Link>
      </div>
    </aside>
  );
}
