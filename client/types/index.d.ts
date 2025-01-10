declare interface Project {
  id: number;
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}

declare interface User {
  userId?: number;
  username: string;
  email: string;
  profilePictureUrl?: string;
  cognitoId?: string;
  teamId?: number;
}

declare interface Attachment {
  id: number;
  fileURL: string;
  fileName: string;
  taskId: number;
  uploadedById: number;
}

declare interface Task {
  id: number;
  title: string;
  description?: string;
  status?: Status;
  priority?: Priority;
  tags?: string;
  startDate?: string;
  dueDate?: string;
  points?: number;
  projectId: number;
  authorUserId?: number;
  assignedUserId?: number;

  author?: User;
  assignee?: User;
  comments?: Comment[];
  attachments?: Attachment[];
}

declare interface SearchResults {
  tasks?: Task[];
  projects?: Project[];
  users?: User[];
}

declare interface Team {
  teamId: number;
  teamName: string;
  productOwnerUserId?: number;
  projectManagerUserId?: number;
}

declare interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

declare interface ProjectProps {
  id: string;
}

declare type BoardProps = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

declare type TaskProps = {
  task: Task;
};

declare interface ModalNewTaskProps {
  isOpen: boolean;
  onClose: () => void;
  id?: string | null;
}

declare interface TabButtonProps {
  name: string;
  icon: React.ReactNode;
  setActiveTab: (tabName: string) => void;
  activeTab: string;
}

declare interface ProjectHeaderProps {
  activeTab: string;
  setActiveTab: (tabName: string) => void;
}

declare interface NewTypeProps {
  name: string;
  buttonComponent?: ReactNode;
  isSmallText?: boolean;
}

declare type TaskTypeItems = "task" | "milestone" | "project";
