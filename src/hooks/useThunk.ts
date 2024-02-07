import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export const useThunk = (thunk: any) => {
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg?: any) => {
      dispatch(thunk(arg)).unwrap();
    },
    [dispatch, thunk]
  );

  return [runThunk];
};
