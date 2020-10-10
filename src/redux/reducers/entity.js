const entity = ({types}) => {

  const [requestType, logout, updateSuccessType, removeSuccessType,
    starredFetch, fetchFailure, fetchSuccess, clearCache] = types;

  const initialState = {
    // for create or update an entity
    updateSuccess: false,
    // for delete an entity
    deleteSuccess: false,
    isLoaded: false,
    isUpdating: false,
  };

  return (state = initialState, action) => {
    switch (action.type) {
      case logout:
      case requestType:
        return {
          ...initialState,
        };
      case updateSuccessType:
        return {
          ...state,
          updateSuccess: true,
        };
      case starredFetch:
      case fetchFailure:
        return {
          ...state,
          isLoaded: false
        };
      case fetchSuccess:
        return {
          ...state,
          isLoaded: true,
        };
      case removeSuccessType:
        return {
          ...state,
          deleteSuccess: true,
        };
      case clearCache:
        return {
          ...initialState,
        };
      default:
        return state;
    }
  }

};

export default entity;
