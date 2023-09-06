export const middleware = (store: any) => (next: any) => (action: any) => {
  switch (
    action.type
    // case TYPE_REDUCER.UPDATE_LOFT_2D_SETTING: {
    //   break;
    // }
  ) {
  }

  let result = next(action);

  return result;
};
