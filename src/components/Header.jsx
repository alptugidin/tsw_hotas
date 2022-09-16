import React, { useEffect, useState } from 'react';

function Header({ gamepad }) {
  return (
    <div className="bg-white bg-opacity-10 rounded-md px-3 py-1 flex">
      <p className="text-xl text-white">Device: </p>
      {gamepad.id ? (
        <span className="text-xl font-semibold text-white whitespace-pre text-green-600">
          {' '}
          {gamepad.id}
        </span>
      ) : (
        <span className="text-xl text-red-600 whitespace-pre"> Not Connected</span>
      )}
    </div>
  );
}

export default Header;
