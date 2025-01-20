import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import TaskIcon from "@mui/icons-material/Task";
import ArticleIcon from "@mui/icons-material/Article";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const sidebarButtons = [
  {
    id: 0,
    label: "Clients",
    icon: <PeopleIcon />,
    href: "/users",
  },
  {
    id: 1,
    label: "Tasks",
    icon: <TaskIcon />,
    href: "/tasks",
  },
  {
    id: 2,
    label: "Documents",
    icon: <ArticleIcon />,
    href: "/docs",
  },
  {
    id: 3,
    label: "Communication",
    icon: <ConnectWithoutContactIcon />,
    href: "/communicate",
  },
  {
    id: 4,
    label: "Analytics",
    icon: <AnalyticsIcon />,
    href: "/analytics",
  },
  {
    id: 5,
    label: "Admin",
    icon: <ManageAccountsIcon />,
    href: "/admin",
  },
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        borderRadius: 1,
        border: "1px solid #d4d4d4",
        padding: 1,
      }}
    >
      <List>
        {sidebarButtons.map((button) => (
          <ListItem key={button.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{button.icon}</ListItemIcon>
              <ListItemText>{button.label}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
