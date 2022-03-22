const CreateActionSetType = function (type) {
    return {
      type: "ACTION_SET_TYPE",
      payload: type
    }
    
  }
  
  const CreateActionSetJoke = function (joke) {
    return {
      type: "ACTION_SET_JOKE",
      payload: joke
    }
  
  }

  const CreateActionSetSetup = function (setup) {
    return {
      type: "ACTION_SET_SETUP",
      payload: setup
    }
  
  }

  const CreateActionSetDelivery = function (delivery) {
    return {
      type: "ACTION_SET_DELIVERY",
      payload: delivery
    }
  
  }
  
  export {CreateActionSetType, CreateActionSetJoke, CreateActionSetSetup, CreateActionSetDelivery};