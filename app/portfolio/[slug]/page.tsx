import { ProjectSidebar } from "@/components/project-sidebar";
import { ProjectGallery } from "@/components/project-gallery";

export default function ProjectPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      <ProjectSidebar />
      <ProjectGallery />
    </div>
  );
}
