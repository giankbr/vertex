import Image from "next/image";
import { ProjectFooter } from "@/components/project-footer"

export function ProjectGallery() {
  return (
    <main className="w-full lg:w-[60%] xl:w-[65%] bg-[#1A1A1A] text-white min-h-screen p-4 lg:p-8">
      <div className="flex flex-col gap-4 lg:gap-8">
        {/* Main Hero Image - Laptop Mockup */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-800">
          <Image
            src="/kayu-lapis-homepage-laptop.jpg"
            alt="Kayu Lapis Website Homepage on Laptop"
            fill
            className="object-cover"
          />
        </div>

        {/* Secondary Images Grid - Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-800">
             <Image
              src="/kayu-lapis-detail-abstract.jpg"
              alt="Kayu Lapis Abstract Detail View"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-800">
             <Image
              src="/kayu-lapis-journal-section.jpg"
              alt="Kayu Lapis Journal Section UI"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Image - Product Catalog Laptop Mockup */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-800">
          <Image
            src="/kayu-lapis-product-catalog-laptop.jpg"
            alt="Kayu Lapis Product Catalog on Laptop"
            fill
            className="object-cover"
          />
        </div>

        {/* Project Footer */}
        <ProjectFooter />
      </div>
    </main>
  );
}
