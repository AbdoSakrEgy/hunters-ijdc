"use client";
import { useEffect } from "react";

import AOS from "aos";

export default function AOSAnimationInit() {
  useEffect(() => {
    AOS.init();
  }, []);
  return null;
}
