import ProjectDashboard from "@/app/components/ProjectDashboard";

const Project = async ({ params }: { params: Params }) => {
  const { id } = await params;

  return <ProjectDashboard id={id} />;
};

export default Project;
