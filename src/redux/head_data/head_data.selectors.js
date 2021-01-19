import {createSelector} from 'reselect';


const selectHead = state => state.head;

export const selectHeadData = createSelector(
    [selectHead],
    (head) => head.items_head
)