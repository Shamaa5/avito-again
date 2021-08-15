import React from 'react';
import ModalCommentPost from "./ModalCommentPost";
import ModalPhotoComment from "./ModalPhotoComment";
import ClosingButton from "./ClosingButton";

function ModalFilial(props) {
    return (
        <div className="modalFilial">
            <ModalPhotoComment modal={props.modal}/>
            <ModalCommentPost modal={props.modal}/>
            <ClosingButton />
        </div>
    );
}

export default ModalFilial;