import Image from "next/image";
import { ProjectFooter } from "@/components/project-footer"
import { siteImages } from "@/lib/site-images"

export function ProjectGallery() {
  return (
    <main className="w-full lg:w-[60%] xl:w-[65%] bg-[#1A1A1A] text-white min-h-screen p-4 lg:p-8">
      <div className="flex flex-col gap-4 lg:gap-8">
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-800">
          <Image
            src={siteImages.project.hero}
            alt="Kayu Lapis website homepage on laptop"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-800">
            <Image
              src={siteImages.project.detail1}
              alt="Kayu Lapis product detail interface"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-800">
            <Image
              src={siteImages.project.detail2}
              alt="Kayu Lapis mobile experience"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-800">
          <Image
            src={siteImages.project.catalog}
            alt="Kayu Lapis product catalog on laptop"
            fill
            className="object-cover"
          />
        </div>

        <ProjectFooter />
      </div>
    </main>
  );
}
