import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

export default function Layout(props) {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className='d-flex justify-content-center'>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          history.push(`/${newValue}`);
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          value="bubble"
          label="Buble"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          value="selection"
          label="Selection"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </div>
  );
}
