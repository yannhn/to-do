import { useState } from "react";

import styled from "styled-components";

// import ToDoDate from "./ToDoDate";

function ToDo({
  id,
  title,
  completed,
  archived,
  toggleCompleted,
  toggleArchived,
  deleteItems,
  editTask,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    editTask(id, newTitle);
    setIsEditing(false);
  };
  return (
    <>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <section>
            <label>CHANGE</label>
            <input
              onChange={(event) => setNewTitle(event.target.value)}
            ></input>
          </section>
          <section>
            <CancelEditButton
              type="button"
              onClick={() => {
                setIsEditing(false);
                setNewTitle("");
              }}
            >
              CANCEL
            </CancelEditButton>
            <SaveEditButton type="submit">SAVE</SaveEditButton>
          </section>
        </form>
      ) : (
        <ToDoContainer completed={completed}>
          <p completed={completed}>{title}</p>
          <HideButton archived={archived}>
            {completed ? (
              <ButtonGroup>
                <UncompletedButton onClick={toggleCompleted}>
                  Uncompleted
                </UncompletedButton>
                <ArchiveButton type="button" onClick={toggleArchived}>
                  archive
                </ArchiveButton>
              </ButtonGroup>
            ) : (
              <ButtonGroup completed={completed}>
                <CompleteButton onClick={toggleCompleted}>
                  complete
                </CompleteButton>
                <EditButton onClick={() => setIsEditing(true)}>edit</EditButton>
                <DeleteButton type="button" onClick={deleteItems}>
                  delete
                </DeleteButton>
              </ButtonGroup>
            )}
          </HideButton>
        </ToDoContainer>
      )}
    </>
  );
}

export default ToDo;

const ToDoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.completed ? "#4285f4" : "white")};
  font-size: 1rem;
  color: ${(props) => (props.completed ? "white" : "black")};
  border-bottom: 1px solid black;
  font-weight: bold;
  padding-left: 0.1em;
  &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

const HideButton = styled.section`
  display: ${(props) => (props.archived ? "none" : "")};
`;

const ButtonGroup = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 0 0.4em 0 2em;
`;

const CompleteButton = styled.button`
  padding: 0.5em 1em;
  font-size: 0.8rem;
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: #2bbbad;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #00695c;
  }

  &:active {
    background: #bad;
  }
`;

const UncompletedButton = styled.button``;

const EditButton = styled.button`
  padding: 0.5em 1em;
  font-size: 0.8rem;
  border: none;
  background: #4285f4;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #0d47a1;
  }

  &:active {
    background: #bad;
  }
`;

const DeleteButton = styled.button`
  padding: 0.5em 1em;
  font-size: 0.8rem;
  border: none;
  background: #ff4444;
  color: #fff;
  cursor: pointer;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  &:hover {
    background: #cc0000;
  }

  &:active {
    background: #bad;
  }
`;

const ArchiveButton = styled.button`
  font-size: 0.8rem;
  border: none;
`;

const CancelEditButton = styled.button`
  padding: 0.5em 1em;
  font-size: 0.8rem;
  border: none;
  background: #ff4444;
  color: #fff;
  cursor: pointer;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  &:hover {
    background: #cc0000;
  }

  &:active {
    background: #bad;
  }
`;

const SaveEditButton = styled.button`
  padding: 0.5em 1em;
  font-size: 0.8rem;
  border: none;
  background: #00c851;
  color: #fff;
  cursor: pointer;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  &:hover {
    background: #007e33;
  }

  &:active {
    background: #bad;
  }
`;
