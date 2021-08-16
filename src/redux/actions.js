export const loadPhotos = () => {
  return (dispatch) => {
    dispatch({
      type: "photos/load/start",
    });
    fetch("https://boiling-refuge-66454.herokuapp.com/images")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "photos/load/success",
          payload: json,
        });
      });
  };
};

export const loadModal = (id) => {
  return (dispatch) => {
    dispatch({
      type: "comment/upload/start",
    });
    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "modalPhoto/load/success",
          payload: json,
        });
      });
  };
};

export const upload = (id, name, text) => {
  return (dispatch) => {
    dispatch({
      type: "comments/upload/start",
      payload: {
        name: name,
        id: id,
        date: new Date(),
        text: text,
      },
    });
    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        id: id,
        date: new Date(),
        comment: text,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "comments/upload/success",
          payload: {
            name: name,
            id: id,
            date: new Date(),
            text: text,
          },
        });
      });
  };
};
