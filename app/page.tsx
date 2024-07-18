"use client";

import React from "react";

function App() {
  const openAppViaUniversalLink = () => {
    const currentDomain = window.location.host;
    const universalLink = `https://${currentDomain}/deeplink/`;
    window.location.href = universalLink;
  };

  return (
    <div className="flex flex-1 flex-col justify-center items-center content-center mt-[100px]">
      <h1 className="text-3xl font-bold">Universal Links Demo</h1>
      <button
        className="border-2 border-black px-4 py-2 rounded-xl mt-10 font-bold"
        onClick={openAppViaUniversalLink}
      >
        Open App
      </button>
    </div>
  );
}

export default App;
