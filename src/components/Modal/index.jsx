import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadModal } from "../../redux/actions";
import ModalFilial from "./ModalFilial";

function Modal() {
  const modal = useSelector((state) => state.modal.items);
  const loading = useSelector((state) => state.modal.loading);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    if (params.id !== undefined) {
      dispatch(loadModal(params.id));
    }
  }, [dispatch, params]);

  if (loading) {
    return <div className="modalPreloader"> ...Loading, please wait</div>;
  }
  return <div className={parseInt(params.id) ? "modalContainer" : "hide"}>
    <ModalFilial modal={modal}/>
  </div>;
}

export default Modal;
