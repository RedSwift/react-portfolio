import React from 'react'
import { Link } from 'react-router'
import MaterialAppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const AppBar = (props) => (
  <MaterialAppBar
    showMenuIconButton={false}
    title={props.pageName}
    iconElementRight={
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      >
        <MenuItem primaryText='Home' containerElement={<Link to='/'/>} />
        <MenuItem primaryText='Portfolio' containerElement={<Link to='/work'/>} />
        <MenuItem primaryText='About' containerElement={<Link to='/about'/>} />
        <MenuItem primaryText='Contact' containerElement={<Link to='/contact'/>} />
      </IconMenu>
    }
  />
)

AppBar.propTypes = {
  pageName: React.PropTypes.string
}

export default AppBar
