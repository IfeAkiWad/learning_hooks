function reducer(state, action) {
    switch (action.type) {
      case 'CHECK_EMOJI':
        return state.map(mood => mood.id === action.id ? { ...mood, check: !mood.check } : mood)
      default:   
        return state
    }
}

export default reducer