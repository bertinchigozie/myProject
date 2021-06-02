import React from 'react';
import './Mail.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import EmailIcon from '@material-ui/icons/Email';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



const Mail = () => {
    return (
        <div className='mail'>
            
                <div className="mail-tools">
                    <div className="mail-tools-left">
                          <IconButton>
                              <ArrowBackIcon />
                          </IconButton>
                          <IconButton>
                              <MoveToInboxIcon />
                          </IconButton>
                          <IconButton>
                              <ErrorIcon />
                          </IconButton>
                          <IconButton>
                              <EmailIcon />
                          </IconButton>
                          <IconButton>
                              <DeleteIcon />
                          </IconButton>
                          <IconButton>
                              <LabelImportantIcon />
                          </IconButton>
                          <IconButton>
                              <MoreVertIcon />
                          </IconButton>
                    </div>
                    <div className="mail-tools-right">
                          <IconButton>
                              <UnfoldMoreIcon />
                          </IconButton>
                          <IconButton>
                              <PrintIcon />
                          </IconButton>
                          <IconButton>
                              <ExitToAppIcon />
                          </IconButton>
                          
                    </div>
                </div>
        <div className="mail-body">         
            <div className="mail-body-header">
              <h2>Subject</h2>
              <LabelImportantIcon  className="mail-important" />
              <p>Title</p>
              <p className="mail-time">10pm</p>
            </div>
            
            <div className="mail-message">
                <p>Hello Mr sean, Good morning! </p>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet doloremque exercitationem assumenda recusandae eligendi repellendus quaerat reprehenderit qui, voluptates laudantium. Quisquam molestias amet, at saepe possimus reprehenderit quis est odit?</p>
            </div>

            </div>
        </div>
    );
}

export default Mail;

