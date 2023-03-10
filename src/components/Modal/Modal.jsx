import { useRef } from "react";
import "./index.css";

const Modal = ({ modalOpened, setModalOpen, postId }) => {
  const closeModal = () => {
    setModalOpen((prev) => !prev);
  };

  //modificherà il contenuto del post

  const modifyPost = (event) => {
    event.preventDefault();
    fetch(`https://dummyjson.com/posts/${postId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body: `${postModifierText.current.value}`,
        title: `${postModifierTitle.current.value}`,
      }),
    })
      .then((res) => res.json())
      .then(console.log)
      .then(closeModal)
      .then(
        (postModifierTitle.current.value = ""),
        (postModifierText.current.value = "")
      );
  };

  const postModifierTitle = useRef(null);
  const postModifierText = useRef(null);

  return (
    <div className={`Modal ${modalOpened && "opened"}`}>
      <div className="modalOverflow" onClick={closeModal}></div>
      <div className="modifyPost">
        <div className="modifyHeader">
          <h3 className="closeModify" onClick={closeModal}>
            X
          </h3>
          <h3>Modify</h3>
          <img
            src="https://img.icons8.com/color/256/twitter--v1.png"
            alt="Logo"
          />
        </div>
        <div className="modifyContent">
          <form action="Modify" onSubmit={modifyPost}>
            <input
              type="text"
              ref={postModifierTitle}
              name="titleModify"
              className="titleModify"
              placeholder="New title"
            />

            <input
              type="text"
              ref={postModifierText}
              name="textModify"
              className="textModify"
              placeholder="New text"
            />
            <input type="submit" value={"submit"} className="submitModify" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
