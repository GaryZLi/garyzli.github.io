import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { connect } from 'react-redux';
import {
    Slide,
    Fade,
} from '@material-ui/core';
import {updateScreen} from '../../actions';
import powerButton from '../../picSrc/powerbutton.jpg';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        background: 'linear-gradient(45deg, rgb(126, 177, 255), rgb(21, 165, 190), rgb(18, 71, 216), rgb(52, 95, 189))',
        backgroundSize: '400%, 400%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        userSelect: 'none',
    },
    loginButton: {
        height: 80,
        width: 80,
        display: 'inline-block',
        padding: '5px 10px',
        borderRadius: '50%',
        boxSizing: 'border-box',
        textDecoration: 'none',
        fontFamily: 'Roboto, sans-serif',
        textTransform: 'uppercase',
        fontWeight: 400,
        color: '#FFFFFF',

        boxShadow: 'inset 0 -0.6em 0.5em -0.25em rgba(0,0,0,0.50)',
        textAlign: 'center',
        position: 'relative',

        '&:hover': {
            cursor: 'pointer',
        },
        '&:active': {
            top: '0.3em',
            boxShadow: 'none',
        }
    },
    // loginButton: {
    //     borderRadius: '50%',
    //     '&:hover': {
    //         cursor: 'pointer',
    //     }
    // },
    text: {
        color: 'white',
        fontSize: 20,
    }
});

const LoginScreen = ({updateScreen}) => {
    const classes = useStyles();
    // const [styles, setStyles] = useState({
    //     height: 80,
    //     width: 80,
    // });

    // const handleDown = () => setStyles({
    //     height: 70,
    //     width: 70,
    //     border: '5px white solid',
    // });

    const handleUp = () => {
        // setStyles({
        //     height: 80,
        //     width: 80,
        // });

        updateScreen('desktopScreen');
    }

    return (
        <div className={classes.root}>
            <Slide in timeout={2500} direction={"left"}>
                <img 
                    className={classes.loginButton}
                    src={powerButton}
                    draggable='false'
                    alt='login button'
                    // onMouseDown={handleDown}
                    // onTouchStart={handleDown}
                    onMouseUp={handleUp}
                    onTouchEnd={handleUp}
                    // style={styles}
                />
            </Slide>
            <Fade in timeout={5000}>
                <p className={classes.text}>
                    Gary Li
                </p>
            </Fade>
        </div>
    );
};

const mapDispatchToProps = {
    updateScreen,
};

export default connect(null, mapDispatchToProps)(LoginScreen);