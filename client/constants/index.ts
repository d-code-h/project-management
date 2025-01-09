import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  Home,
  Layers3,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react";

export const links = [
  {
    icon: Home,
    label: "Home",
    href: "/",
  },
  {
    icon: Briefcase,
    label: "Timeline",
    href: "/timeline",
  },
  {
    icon: Search,
    label: "Search",
    href: "/search",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
  {
    icon: User,
    label: "Users",
    href: "/users",
  },
  {
    icon: Users,
    label: "Teams",
    href: "/teams",
  },
];

export const sidebarLinks = [
  {
    icon: AlertCircle,
    label: "Urgent",
    href: "/priority/urgent",
  },
  {
    icon: AlertTriangle,
    label: "Medium",
    href: "/priority/medium",
  },
  {
    icon: AlertOctagon,
    label: "Low",
    href: "/priority/low",
  },
  {
    icon: Layers3,
    label: "Backlog",
    href: "/priority/backlog",
  },
];
