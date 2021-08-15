import React from "react";

function ModalPhotoComment(props) {
  return (
    <div className="modalPhotoСomment">
      <div className="modalImg">
        <img src={props.modal.url} alt=""/>
      </div>
      <div className="comments">
        {props.modal.id === undefined
          ? ""
          : props.modal.comments.map((comment) => {
                let timestamp = comment.date
                const date = new Date(timestamp).toLocaleDateString()
              return <div className="comAndDate"  key={Math.random()}>
                   <div className="date">
                       {date}
                   </div>
                  <div className="comment">
                      {comment.text}
                  </div>
              </div>;
            })}
      </div>
    </div>
  );
}

export default ModalPhotoComment;
