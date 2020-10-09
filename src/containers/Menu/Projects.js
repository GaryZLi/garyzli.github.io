import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { connect } from 'react-redux';
import {updateProjectsList} from '../../actions';

const useStyles = makeStyles({
    projectsContainer: {
        height: 46,
        width: '100%',
        borderTop: '1px solid black',
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    projects: {
        height: '85%',
        width: '95%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        userSelect: 'none',
    },
    projectsText: {
        color: 'black',
        fontSize: 16,
    },
    projectsButton: {
        borderStyle: 'solid',
        borderWidth: '14px 0px 14px 22px',
        borderColor: 'transparent transparent transparent rgb(37, 192, 17)',
    },
});

const Projects = ({
    updateProjectsList,
    projectsList,
}) => {
    const classes = useStyles();

    const handleClick = () => updateProjectsList(!projectsList);

    const handleMouseEnter = () => updateProjectsList(true);

    const handleMouseLeave = () => updateProjectsList(false);

    return (
        <div
            className={classes.projectsContainer}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={classes.projects}
                style={{backgroundColor: projectsList? '#379bf8' : 'white'}}
            >
                <div className={classes.projectsText}>
                    All Projects
                </div>
                <div className={classes.projectsButton}/>
            </div>
        </div>
    );
};

const mapStatetoProps = ({projectsList}) => ({projectsList});

const mapDispatchToProps = {
    updateProjectsList,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Projects);