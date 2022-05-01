import { Link } from "react-router-dom";

export default function Details({ backPath }: { backPath: string }) {
  return (
    <>
      <h1>Details</h1>
      <Link to={backPath}>Back</Link>
    </>
  );
}
