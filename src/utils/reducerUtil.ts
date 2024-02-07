export const loadingReducer = (state: any, action: any) => {
  state.isLoading = true;
};

export const fetchingReducer = (state: any, action: any) => {
  state.isLoading = false;
  state.data = action.payload;
};

export const rejectedReducer = (state: any, action: any) => {
  state.isLoading = false;
  state.error = action.error;
};

export const addingReducer = (state: any, action: any) => {
  state.isLoading = false;
  state.data.push(action.payload);
};

export const removeReducer = (state: any, action: any) => {
  state.isLoading = false;
  state.data = state.data.filter((item: any) => {
    return item.id !== action.payload.id;
  });
};
