import { useState } from "react";
import List from '@mui/material/List';

export const DropHeader = () => {

    const [openCategory, setOpenCategory] = useState(null);

    const handleClick = (id) => {
        setOpenCategory(openCategory === id ? null : id);
      };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader">
      {/* {categories?.map((cat) => (
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
      ))} */}
    </List>
      );

}