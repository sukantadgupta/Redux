const redux = require('redux');

const couterReducer = (state = {counter : 0}, action) =>{

    if(action.type === 'incrementBy2'){

    return {
        counter : state.counter + 2
    }
}

 if(action.type === 'decrementBy2'){

    return {
        counter : state.counter - 2
    }
}
}

const store = redux.createStore(couterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({type: 'incrementBy2' })
store.dispatch({type: 'incrementBy2' })

store.dispatch({type: 'incrementBy2' })



store.dispatch({type: 'decrementBy2' })




