import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>oops!!!</h1>
      <h2>Something Went Wrong!!</h2>
      <h3>{err.status} {err.statusText}</h3>
      <h4>{err.data}</h4>
    </div>
  );
};

export default Error;
