// Actions used for sorting results in SectionDetails and Search components
export const CHANGE_ORDER = "CHANGE_ORDER";

export const changeOrderBy = (order) => ({
  type: CHANGE_ORDER,
  order,
});
