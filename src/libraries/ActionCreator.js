const ActionCreator = type => {
    const actionCreator = payload => ({
        type,
        payload
    })
    actionCreator.type = type
    return actionCreator
}
  
export default ActionCreator