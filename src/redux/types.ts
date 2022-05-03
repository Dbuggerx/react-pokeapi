export type LoadableResource<T, E = boolean> = {
  loading: boolean;
  error: E;
  data: T;
};
