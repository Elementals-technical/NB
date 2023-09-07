"use client";
import React, { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    //@ts-ignore
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      //@ts-ignore
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};
