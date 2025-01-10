import ProjectDashboard from "@/app/components/ProjectDashboard";

const Project = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return <ProjectDashboard id={id} />;
};

export default Project;
