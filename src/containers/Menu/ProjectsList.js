import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {connect} from 'react-redux';
import ListWrapper from '../../components/ListWrapper';
import {
    updateProjectsList,
    updateTab,
    updateMenu,
} from '../../actions';
import {
    tabs,
} from '../../data';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        boxShadow: '10px 10px 8px #000, 5px 10px 8px #000, 1px 10px 8px #000',
        borderColor: '#000',
        borderLeftWidth: 1,
        borderTopLeftRadius: 10,
        borderTopWidth: 1,
        bottom: 0,
    },
    list: {
        height: 30,
        width: '100%',
        '&:hover': {
            backgroundColor: '#379bf8',
            cursor: 'pointer',
        }
    },
    firstList: {
        borderTopLeftRadius: 10,
    }
});

const ProjectsList = ({
    updateProjectsList,
    updateTab,
    updateMenu,
}) => {
    const classes = useStyles();

    const handleClick = name => {
        updateTab({
            name,
            index: tabs.findIndex(tab => tab.name === name),
        });
        updateMenu();
    };

    const handleMouseEnter = () => updateProjectsList(true);

    const handleMouseLeave = () => updateProjectsList(false);

    return (
        <div
            className={classes.root}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {
                tabs
                    .filter(tab => tab.name !== 'About Me' && tab.name !== 'Resume')
                    .map((proj, id) => 
                        <ListWrapper
                            key={proj.name}
                            className={
                                id === 0
                                ? [classes.list, classes.firstList].join(' ')
                                : classes.list
                            }
                            text={proj.name}
                            handleClick={() => handleClick(proj.name)}
                        />
                    )
            }
        </div>
    );
};

const mapStatetoProps = ({projectsList}) => ({projectsList});

const mapDispatchToProps = {
    updateProjectsList,
    updateTab,
    updateMenu,
};

export default connect(mapStatetoProps, mapDispatchToProps)(ProjectsList);