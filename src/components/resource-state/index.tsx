import ErrorMessage from "../error-message";
import LoadingSpinner from "../loading-spinner";
import type { LoadableResource } from "../../redux/types";

export default function ResourceState({
  state,
}: {
  state: LoadableResource<unknown> | undefined;
}) {
  if (!state) return null;
  if (state.error) return <ErrorMessage message="Error!" />;
  if (state.loading) return <LoadingSpinner />;
  if (!state.data) return <ErrorMessage message="No data" />;
  return null;
}
