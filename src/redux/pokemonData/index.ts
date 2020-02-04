import slice from "./slice";
export const actions = slice.actions;
export default slice.reducer;
export { default as epics } from "./epics";

export type State = ReturnType<typeof slice["reducer"]>;
export type Actions = typeof slice["actions"];
