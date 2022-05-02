export type LoadableResource<T> = {
  loading: boolean;
  error: boolean;
  data: T;
};
