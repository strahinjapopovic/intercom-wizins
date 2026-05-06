import { useLocation } from "react-router-dom";
//-------------------------------------------------------------------------//
const ErrorPage = () => {
  const location = useLocation();
  const currentPath: string = location.pathname;
  return (
    <div id="error-page" style={{ width: '80%', backgroundColor: 'black', color: 'aqua', border: '2px solid aqua', borderRadius: '10px', margin: '20px auto', padding: '20px', }}>
      <h1 style={{ color: 'aqua', fontSize: '50px', }}>Oops!</h1>
      <p style={{ alignContent: 'center', }}>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Page: Not Found<br />Status Code: 404<br />Data Error: No route matches URL "{currentPath}"</i>
      </p>
    </div>
  );
}
export default ErrorPage;