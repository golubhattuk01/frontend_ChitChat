import "../styles/msg.css";
const SingleMsg = ({ element, curr }) => {
  return (
    <div>
      {element.userId.username === curr.username ? (
        <div className={`singleMsg  floatLeft`}>
          <div className="info">
            <img src={element.userId.avatar} alt="user photo" />
            <p>{element.userId.fullName}</p>
          </div>
          <div className="msg">
            <h3>{element.msgItem}</h3>
          </div>
        </div>
      ) : (
        <div className={`singleMsg floatRight`}>
          <div className="info">
            <img src={element.userId.avatar} alt="user photo" />
            <p>{element.userId.fullName}</p>
          </div>
          <div className="msg">
            <h3>{element.msgItem}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleMsg;
