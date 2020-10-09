import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import profilepic from '../../picSrc/profile.jpg';
import {
    updateTab,
    updateMenu,
} from '../../actions';

const useStyles = makeStyles({
    profile: {
        height: 90,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none'
    },
    profilePic: {
        height: '80%',
        borderRadius: 5,
        border: '2px solid #d3d1d1',
        marginLeft: 10,
        '&:hover': {
            cursor: 'pointer',
        }
    },
    profileText: {
        fontSize: 30,
        color: 'white',
        marginLeft: 10,
    },
});

const Profile = ({
    updateTab,
    updateMenu,
}) => {
    const classes = useStyles();

    const handleClick = () => {
        updateTab({
            name:"About Me",
            index: 0,
        });
        updateMenu();
    };

    return (
        <div className={classes.profile}>
            <img
                className={classes.profilePic}
                src={profilepic}
                alt='profile pic'
                draggable='false'
                onClick={handleClick}
            />
            <div className={classes.profileText}>
                Gary Li
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    updateTab,
    updateMenu,
};

export default connect(null, mapDispatchToProps)(Profile);