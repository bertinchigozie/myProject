import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import './EmailList.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import './EmailList.css';
import Section from "./Section";
import EmailRow from './EmailRow';

export default function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList-settings">
                <div className="emailList-settingsLeft">
                    <Checkbox />
                    <IconButton>
                       <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                       <RedoIcon />
                    </IconButton>
                    <IconButton>
                       <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList-settingRight">
                    <IconButton>
                       <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                       <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                       <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                       <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList-sections">
              <Section Icon={InboxIcon} title='Primary' color='red' selected />
              <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
              <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
            </div>
            <div className="emailList-List">
                <EmailRow 
                title='Twitch'
                subject='Hello sir!!!'
                description='This is the document'
                time='10pm'
                />
                <EmailRow 
                title='Twitch'
                subject='Hello sir!!!'
                description='This is the document'
                time='10pm'
                />
                <EmailRow 
                title='Twitch'
                subject='Hello sir!!!'
                description='This is the document'
                time='10pm'
                />
                <EmailRow 
                title='Twitch'
                subject='Hello sir!!!'
                description='This is the document. can you read through it and explain what you it is all about. thanks '
                time='10pm'
                />
                <EmailRow 
                title='Twitch'
                subject='Hello sir!!!'
                description='This is the document'
                time='10pm'
                />
            </div>
        </div>
    )
}

