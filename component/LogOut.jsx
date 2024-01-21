import "../styles/logout.css";

const LogOut = () => {
  return (
    <div className="box">
      <center>
        <h1>SUCCESSFULLY LOGGED OUT</h1>
        <h1>CLICK HERE FOR LOG IN</h1>

        <a href="/login">
          <button>Login</button>
        </a>
      </center>
    </div>
  );
};
export default LogOut;
