import { useRouteError } from "react-router-dom";

export const Error = () => {
    const err=useRouteError();
    console.log(err);
    
  return (
    <> 
      <h1>Error Occured!</h1>
      <h2>Please verify the page again and ,Continue...</h2>
      <h2>{err.status} :{err.statusText}</h2>
    </>
  );
};
