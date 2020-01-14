const initialState = {
  sectionData: 'DEFAULT DATA'
};

function sectionReducer(state = initialState, action) {
  let newState = {};

  switch(action.type) {
    case "UPDATE_SECTION":
      newState = {sectionData: action.newSectionData};
      break;
    default:
      newState = {...state};
  }

  return newState;
}

export default sectionReducer;

// hm mm mm m m m 