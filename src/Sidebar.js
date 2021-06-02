import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneIcon from '@material-ui/icons/Phone';
import DuoIcon from '@material-ui/icons/Duo';
import PersonIcon from '@material-ui/icons/Person';



const Sidebar = () => {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar-compose">Compose</Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number="34" selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number="34" />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number="34" />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number="34" />
            <SidebarOption Icon={NearMeIcon} title="Sent" number="34"/>   
         <SidebarOption Icon={NoteIcon} title="Drafts" number="34" />
         <SidebarOption Icon={ExpandMoreIcon} title="More" number="34" />

         <div className="sidebar-footer">
             <div className="sidebar-footerIcons">
                 <IconButton>
                     <PersonIcon />
                 </IconButton>
                 <IconButton>
                     <DuoIcon />
                 </IconButton>
                 <IconButton>
                     <PhoneIcon />
                 </IconButton>
             </div>
         </div>
        </div>
    );
}

export default Sidebar;
