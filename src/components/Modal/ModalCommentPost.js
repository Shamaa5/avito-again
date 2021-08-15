import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { upload } from "../../redux/actions";

function ModalCommentPost() {
  const dispatch = useDispatch();
  const params = useParams();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const uploadComment = () => {
    dispatch(upload(params.id, name, comment));
  };
  const addName = (e) => {
    setName(e.target.value);
  };
  const addComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          className="input"
          placeholder="Ваше имя"
          value={name}
          onChange={addName}
        />
      </div>
      <div>
        <input
          type="text"
          className="input"
          placeholder="Ваш комментарий"
          value={comment}
          onChange={addComment}
        />
      </div>
      <div>
        <button
          onClick={uploadComment}
        >
          Оставить комментарий
        </button>
      </div>
    </div>
  );
}

export default ModalCommentPost;
