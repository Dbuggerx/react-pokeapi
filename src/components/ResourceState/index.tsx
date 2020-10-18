import React from "react";
import type { LoadableResource } from "../../redux/types";
import ErrorMessage from "../ErrorMessage";
import LoadingSpinner from "../LoadingSpinner";

const ResourceState: React.FC<{
  state: LoadableResource<unknown> | undefined;
}> = ({ state }) => {
  if (!state) return <ErrorMessage message="No data" />;
  if (state.error) return <ErrorMessage message={state.error} />;
  if (state.loading) return <LoadingSpinner />;
  if (!state.data) return <ErrorMessage message="No data" />;
  return null;
};

export default ResourceState;
