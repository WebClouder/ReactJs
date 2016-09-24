import {SWITCH, SWITCH_BY_INDEX, INIT_TABS} from '../constants/actionTypes/tab';

export function switchTab(tabTitle) {
    return {
        type: SWITCH,
        nextTab: tabTitle
    }
};

export function switchTabByIndex(index) {
    return {
        type: SWITCH_BY_INDEX,
        nextTabIndex: index
    }
};

export function initTabs(tabs) {
    return {
        type: INIT_TABS,
        tabs: tabs
    }
}