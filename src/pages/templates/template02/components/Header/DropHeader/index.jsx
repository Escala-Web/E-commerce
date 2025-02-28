import { useState } from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useCategoryAll } from "../../../../../../hooks/Categories/useCategory";

export const DropHeader = () => {

    const [openCategory, setOpenCategory] = useState(null);
    const { categories } = useCategoryAll();

    const handleClick = (id) => {
        setOpenCategory(openCategory === id ? null : id);
      };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader">
      {categories?.map((cat) => (
        <div key={cat.id_category}>
          <ListItemButton onClick={() => handleClick(cat.id_category)}>
            <ListItemText primary={cat.name} />
            {cat.children && (openCategory === cat.id_category ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>

          {cat.children && (
            <Collapse in={openCategory === cat.id_category} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {cat?.children?.map((child) => (
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary={child.name} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          )}
        </div>
      ))}
    </List>
      );

}