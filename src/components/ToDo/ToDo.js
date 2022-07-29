import { useState } from "react";

import styled from "styled-components";

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

  // TODO: FIX ARCHIVE BUTTON

  const handleSubmit = (event) => {
    event.preventDefault();
    editTask(id, newTitle);
    setIsEditing(false);
  };
  return (
    <>
      {isEditing ? (
        <EditForm onSubmit={handleSubmit}>
          <EditFormInputSection>
            <label htmlFor="edit-input"></label>
            <input
              id="edit-input"
              placeholder={`edit ${title}`}
              onChange={(event) => setNewTitle(event.target.value)}
            ></input>
          </EditFormInputSection>
          <EditFormButtonSection>
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
          </EditFormButtonSection>
        </EditForm>
      ) : (
        <ToDoContainer completed={completed}>
          <ToDoTitle completed={completed}>{title}</ToDoTitle>
          {completed && !archived ? (
            <ButtonGroup>
              <UncompletedButton onClick={toggleCompleted}>
                Uncompleted
              </UncompletedButton>
              <ArchiveButton type="button" onClick={toggleArchived}>
                archive
              </ArchiveButton>
            </ButtonGroup>
          ) : archived ? (
            <ButtonGroup>
              <DeleteButton type="button" onClick={deleteItems}>
                delete
              </DeleteButton>
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
        </ToDoContainer>
      )}
    </>
  );
}

export default ToDo;

const EditForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding-left: 0.1em;
  padding-bottom: 1em;
`;

const EditFormInputSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditFormButtonSection = styled.section`
  display: flex;
  align-items: center;
`;

const ToDoTitle = styled.p`
  display: flex;
  flex-wrap: wrap;
  text-align: auto;
  max-width: 40%;
  word-break: break-word;
`;

const ToDoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.completed ? "#4285f4" : "white")};
  font-size: 1rem;
  color: ${(props) => (props.completed ? "white" : "black")};
  border-bottom: ${(props) =>
    props.completed ? "1px solid white" : "1px solid black"};
  font-weight: bold;
  padding-left: 0.1em;
  &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
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

const UncompletedButton = styled.button`
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
  font-weight: bold;
  padding: 0.5em 1em;
  font-size: 0.8rem;
  border: none;
  background: #aa66cc;
  color: #fff;
  cursor: pointer;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  &:hover {
    background: #9933cc;
  }

  &:active {
    background: #bad;
  }
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
