import slice from "./slice";
export const actions = slice.actions;
export default slice.reducer;

export type State = ReturnType<typeof slice["reducer"]>;
export type Actions = typeof slice["actions"];
