import React from 'react'
import { useLocation } from "react-router-dom";

export default function pathValidation(param) {
  const { pathname } = useLocation();
  return pathname === param;
}
