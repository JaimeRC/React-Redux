export default ({ dispatch }) => next => action => {

    //Check to see if the action
    //has promise on its 'payload'property
    //If it does, then wait for it to resolve
    //If it doesn't, then send the action on to the
    //next middleware

    if (!action.payload || !action.payload.then) {
        next(action)
    }

    //We want to wait for a promise to resolve
    //(get its data!!!) and then create a new action
    //with that data nd dispatch it 

    action.payload.then(function (response) {
        const newAction = { ...action, payload: response }
        dispatch(newAction)
    })

}



/*this is the same:
export default function({disptch}){
    return function(next){
        return function(action){

        }
    }
}*/