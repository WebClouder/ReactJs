import {SWITCH, SWITCH_BY_INDEX, INIT_TABS} from '../constants/actionTypes/tab';

export default function tabsReducer (state=[], action){
    switch(action.type){
        case SWITCH:
            let nextTab = action.nextTab;
            state.forEach(tab => {
                if(tab.title === nextTab){
                    tab.active = true;
                }else{
                    tab.active = false;
                }
            });
            return state;
        case SWITCH_BY_INDEX:
            let nextTabIndex = action.nextTabIndex;
            let tabs = state.map((tab, i) => {
                if(i === nextTabIndex){
                    tab.active = true;
                }else{
                    tab.active = false;
                }
                return tab;
            });
            return tabs;
        case INIT_TABS:
            return actions.tabs;
        default:
            return state;
    }
}