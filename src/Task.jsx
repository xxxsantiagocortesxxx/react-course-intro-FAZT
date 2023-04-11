import "./task.css";

export const TaskCard = ({ ready }) => {
  return (
    <div className={ready ? "card1" : "card2"}>
      <h1>mi primer tarea</h1>

      <span>{ready ? "tarea realizada" : "tarea pendiente"}</span>
    </div>
  );
};
