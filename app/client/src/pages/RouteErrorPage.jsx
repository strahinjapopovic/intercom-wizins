import { useRouteError } from "react-router-dom";
//-------------------------------------------------------------------------//
export default function ErrorPage() {
  const error = useRouteError();
  console.error(useRouteError());
  return (
    <div id="error-page" style={{width:'80%', backgroundColor: 'black', color: 'aqua', border: '2px solid aqua', borderRadius: '10px', margin: '20px auto', padding: '20px', }}>
      <h1 style={{color: 'aqua', fontSize: '50px', }}>Oops!</h1>
      <p style={{alignContent: 'center', }}>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Page: {error.statusText}<br />Status Code: {error.status}<br />Data {error.data}</i>
      </p>
    </div>
  );
}