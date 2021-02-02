const INITIAL_STATE = {
    items_head : [
        {
            id:1,
            price: 20,
            title: 'Earbuds',
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/appletouch-c9f7c.appspot.com/o/bus4.png?alt=media&token=f58fe27e-f7d1-4d64-80b3-d518e5a289e6"
            
        },
        {
            id:2,
            price: 10,
            title: 'Weired Earbuds',
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/appletouch-c9f7c.appspot.com/o/weired2.png?alt=media&token=6ddbf9e3-52b4-4165-ae8f-3323cd18296e"

        },
        {
            id:3,
            price: 30,
            title: 'Headphones',
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/appletouch-c9f7c.appspot.com/o/headphone1.png?alt=media&token=e389270a-c3c4-46ac-aab7-666ee1024b57"
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