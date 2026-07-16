"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";

export default function Clarity() {
  useEffect(() => {
    clarity.init("xna9tcidrz");
  }, []);

  return null;
}