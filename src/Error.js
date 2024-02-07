import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  //Object destructuring
  const { data, status, statusText } = err;

  return (
    <>
      <h1>Oops</h1>
      <h2>Something Went Wrong!</h2>
      <h2>
        {data} <br></br> {status} <br></br> {statusText}
      </h2>
      {/* <h2>{err.status + ":" + err.statusText + ":" + err.data}</h2> */}
    </>
  );
};

export default Error;
