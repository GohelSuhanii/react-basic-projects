import React from "react";

const UserCard = ({ name, age, email, isOnline }) => {
  return (
    <>
      <div className="border-rounded p-4 shadow-md w-64 text-gray-800 ">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p>Age:{age}</p>
        <p>Email:{email}</p>
        <p className={isOnline ? "text-green-500" : "text-red-500"}>
          {isOnline ? "online" : "offline"}
        </p>
      </div>
    </>
  );
};

export default UserCard;
