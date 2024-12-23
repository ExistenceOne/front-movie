import { useState } from "react";

export function useSharedState(){
  const [currentPage, setCurrentPage] = useState(0);
  return { currentPage, setCurrentPage };
}
