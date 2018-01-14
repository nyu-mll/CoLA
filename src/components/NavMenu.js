import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import React from 'react';

const NavMenu = (props) => (
  <IconMenu
    className="app-bar-icon-right"
    iconButtonElement={
      <IconButton><MoreVertIcon color="#fff"/></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Home" onClick={(e) => {props.changeNav('home')}}/>
    <MenuItem primaryText="About" onClick={(e) => {props.changeNav('about')}}/>
    <MenuItem primaryText="Upload" onClick={(e) => {props.changeNav('upload')}}/>
  </IconMenu>
);

export default NavMenu;
