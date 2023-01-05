import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { Slide, Fade, CircularProgress } from "@material-ui/core";
import { updateScreen } from "../../actions";

const rotationAnimationTime = 2000;
const lineInAnimationTime = 1000;
const boxShadowAnimationTime = 1000;

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    background: "black",
    backgroundSize: "400%, 400%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    userSelect: "none",
  },
  loginButton: {
    height: 80,
    width: 80,
    display: "inline-block",
    padding: "5px 10px",
    borderRadius: "50%",
    // boxSizing: "borderBox"',',    textDecoration: "none",
    fontFamily: "Roboto, sans-serif",
    textTransform: "uppercase",
    fontWeight: 400,
    color: "#FFFFFF",

    boxShadow: "inset 0 -0.6em 0.5em -0.25em rgba(0,0,0,0.50)",
    textAlign: "center",
    position: "relative",

    "&:hover": {
      cursor: "pointer",
    },
    "&:active": {
      top: "0.3em",
      boxShadow: "none",
    },
  },
  // loginButton: {
  //     borderRadius: '50%',
  //     '&:hover': {
  //         cursor: 'pointer',
  //     }
  // },
  text: {
    color: "white",
    fontSize: 20,
  },
});

const BUTTON_COLOR = "#4287f5";
const GLOW_COLOR = "#03e8fc";

const buttonStyles = makeStyles({
  root: {
    height: 100,
    width: 100,
    backgroundColor: BUTTON_COLOR,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    '&:hover': {
        cursor: 'pointer',
    },

    '&:active': {
        transform: 'scale(0.4)',
    }
  },
  hollowCirlce: {
    backgroundColor: "black",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    height: "70%",
    width: "70%",
    position: "relative",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    rotate: "180deg",
    transition: 'all 2000ms ease',
    overflow: 'hidden'
  },
  halfCircle: {
    height: "50%",
    width: "50%",
    borderRadius: "50%",
    border: "10px solid transparent",
    borderTopColor: BUTTON_COLOR,
    borderLeftColor: BUTTON_COLOR,
    position: 'absolute',
    transition: `all ${rotationAnimationTime}ms ease`,
},
  line: {
    height: '50%',
    width: '10%',
    borderTopLeftRadius: '50px',
    borderTopRightRadius: '50px',
    backgroundColor: BUTTON_COLOR,
    marginBottom: 'auto',
    transition: `all ${lineInAnimationTime}ms ease`,
  }
});

const LoginScreen = ({ updateScreen }) => {
  const classes = useStyles();

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
        setTimeout(() => setFadeIn(true), 2200);
  }, []);

  const handleUp = () => updateScreen("desktopScreen");

  return (
    <div className={classes.root}>
      <Button action={handleUp} />
      <Fade in={fadeIn} timeout={7000}>
        <p className={classes.text}>Gary Li</p>
      </Fade>
    </div>
  );
};

const Button = ({ action }) => {
  const classes = buttonStyles();
  const percentage = 30;

  const [rotate, setRotate] = useState(180);
  const [lineTranslate, setLineTranslate] = useState(-100);
  const [boxShadowActive, setBoxShadowActive] = useState(false);

  useEffect(() => {
    setRotate(0);
    setTimeout(() => {
        setLineTranslate(0);
    }, rotationAnimationTime);

    setTimeout(() => {
      setBoxShadowActive(true);
    }, rotationAnimationTime + lineInAnimationTime);
  }, []);

  return (
    <div
      className={classes.root}
      onMouseUp={action}
      onTouchEnd={action}
      style={{
        boxShadow: boxShadowActive ? `0 0 0.3em 0.3em ${GLOW_COLOR}` : null,
        transition: `all ${boxShadowAnimationTime}ms ease`,
      }}
    >
      <div
        className={classes.hollowCirlce}
        style={{
          height: "80%",
          width: "80%",
          boxShadow: boxShadowActive ? `inset 0 0 0.3em 0.2em ${GLOW_COLOR}` : null,
          transition: `all ${boxShadowAnimationTime}ms ease`,

        }}
      >
        <div
          className={classes.innerCircle}
          style={{
            rotate: `${rotate}deg`,
          }}
        >
          <div
            className={classes.line}
            style={{
              transform: `translateY(${lineTranslate}%)`,
            }}
          />
          <div
            className={classes.halfCircle}
            style={{
              transform: `rotate(${315 - percentage}deg)`,
            }}
          />
          <div
            className={classes.halfCircle}
            style={{
              transform: `rotate(${135 + percentage}deg)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  updateScreen,
};

export default connect(null, mapDispatchToProps)(LoginScreen);
