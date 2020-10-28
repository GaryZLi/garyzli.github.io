import * as types from './action-types';

export const initialState = {
    mobile: window.innerWidth < 900,
    screen: 'desktopScreen',
    view: 'startupScreen',
    menu: false,
    projectsList: false,
    scrollTop: 0,
    cmdList: [],
    taskbarWindows: [
        'Help'
    ],
    visibility: {
        'main.cpp': false,
        'Command Prompt': false,
        'Internet Explorer': false,
        'Help': true,
    },
    windows: {
        'main.cpp': false,
        'Command Prompt': false,
        'Internet Explorer': false,
        'Help': true,
    },
    currentTab: {
        name: 'About Me',
        index: 0,
    },
};

let temp;

const mainReducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    switch (action.type) {
        case types.CLEAR_STATE:
            return initialState;

        case types.UPDATE_MOBILE:
            return {
                ...state,
                mobile: action.mobile,
            };

        case types.UPDATE_SCREEN:
            temp = JSON.parse(JSON.stringify(initialState));
            temp.screen = action.screen;

            return {
                ...temp,
            };

        case types.UPDATE_VIEW:
            return {
                ...state,
                view: action.view,
            };

        case types.UPDATE_MENU:
            return {
                ...state,
                menu: action.active === undefined? !state.menu : action.active,
            };

        case types.UPDATE_WINDOW:            
            temp = JSON.parse(JSON.stringify(state));
            temp.windows[action.window] = action.open;
            temp.visibility[action.window] = action.open;
            temp.view = action.window;
            
            if (action.open) {
                if (temp.taskbarWindows.indexOf(action.window) < 0) {
                    temp.taskbarWindows.push(action.window);
                }
            }
            else {
                temp.taskbarWindows.splice(temp.taskbarWindows.indexOf(action.window), 1);
            }

            return temp;

        case types.UPDATE_VISIBILITY:            
            temp = state.visibility;
            temp[action.window] = action.visible;

            return {
                ...state,
                visibility: {
                    ...temp,
                },
            };

        case types.UPDATE_PROJECTS_LIST:
            return {
                ...state,
                projectsList: action.on,
            }

        case types.UPDATE_COMMAND_LIST:
            return {
                ...state,
                cmdList: action.cmd
                    ? [
                        ...state.cmdList,
                        action.cmd,
                    ]
                    : [],
            };
        
        case types.UPDATE_TAB:
            temp = JSON.parse(JSON.stringify(state));
            temp.currentTab = action.tab;
            temp.view = 'Internet Explorer';
            temp.visibility['Internet Explorer'] = true;
            temp.windows['Internet Explorer'] = true;

            if (temp.taskbarWindows.indexOf('Internet Explorer') < 0) {
                temp.taskbarWindows.push('Internet Explorer');
            }

            return temp;

        case types.UPDATE_SCROLLTOP:
            return {
                ...state,
                scrollTop: action.scrollTop,
            };

        case types.ADD_TASKBAR_WINDOW:
            if (!state.taskbarWindows.includes(action.name)) {
                return {
                    ...state,
                    taskbarWindows: [
                        ...state.taskbarWindows,
                        action.name,
                    ],
                };
            }
            
            return state;
        
        case types.REMOVE_TASKBAR_WINDOW:
            temp = state.taskbarWindows.filter(name => name !== action.name);

            return {
                ...state,
                taskbarWindows: [
                    ...temp,
                ]
            };

        default:
            return state;
    }
}

export default mainReducer;