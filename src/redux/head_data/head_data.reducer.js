const INITIAL_STATE = {
    items_head : [
        {
            id:1,
            price: 100,
            title: 'AirPods Pro',
            imgUrl:"https://img.xfinitymobile.com/image/fetch/e_trim/w_420,h_420,c_fit,f_auto,q_auto,fl_lossy/https%3A%2F%2Fimg.xfinitymobile.com%2Fimage%2Fupload%2Fv1572896833%2Fclient%2Fcatalog%2Faccessories%2Fapple%2F190199246850_PRI.png"
            
        },
        {
            id:2,
            price: 70,
            title: 'AirPods',
            imgUrl:"https://www.worldshop.eu/medias/sys_master/h19/hd5/8912198533150.png"

        },
        {
            id:3,
            price: 200,
            title: 'AirPods Max',
            imgUrl:"https://www.apple.com/v/airpods-max/a/images/overview/hero__gnfk5g59t0qe_small.png"
        }
    ]
}

const headReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
        return state;
    }
}

export default headReducer;