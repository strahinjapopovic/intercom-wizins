import { RotatingLines } from "react-loader-spinner";
const SpinnerLoader = () => {
    const Loader = () => {
        return (
            <p style={{textAlign: "center", padding: "0", margin: "0", }}>
                <RotatingLines
                strokeColor="aqua"
                strokeWidth="5"
                animationDuration="0.75"
                width="100%"
                visible={true}
                />
            </p>
        );
    }
    return (
      <>
        <div id="top">
            <section className="input-login-form" >
                <div id="input-login-sec" style={{backgroundColor: "rgb(240, 240, 240)", marginBottom: '20px', border: 'none', }}>
                    <p id="loading-title">Loading...</p>
                    <div style={{margin: "0 auto", backgroundColor: "rgb(23, 23, 23)", borderRadius: "10px", marginBottom: "40px", }}>
                       <Loader /> 
                    </div>
                </div>
            </section>
        </div>
      </>
    );
  }
export default SpinnerLoader;
