const INITIAL_STATE = {
    items_head : [
        {
            id:1,
            price: 20,
            title: 'Earbuds',
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/appletouch-c9f7c.appspot.com/o/bus1.png?alt=media&token=f9008f4b-436a-4bd0-8d98-9f6d12634983"
            
        },
        {
            id:2,
            price: 10,
            title: 'Weired Earbuds',
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/appletouch-c9f7c.appspot.com/o/weired2.png?alt=media&token=654750c9-f9fb-478b-9608-41a8964d0abb"

        },
        {
            id:3,
            price: 30,
            title: 'Headphones',
            imgUrl:"https://firebasestorage.googleapis.com/v0/b/appletouch-c9f7c.appspot.com/o/headphone1.png?alt=media&token=1ea526ac-87e6-4f2f-97a0-31f77d242361"
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