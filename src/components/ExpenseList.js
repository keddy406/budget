import React from "react";
import Item from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expense ,handleEdit, handleDelete, clearItems}) => {
  return (
    <>
      <ul className="list">
        {expense.map((expense) => {
          return <Item key={expense.id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit}/>;
        })}
      </ul>
      {/* !expense ? button */}
      {expense.length > 0 && (
        <button className="btn" onClick={clearItems}>
          clear expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
