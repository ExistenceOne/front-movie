import { useState } from "react";

export function useSharedState(){
  const [currentPage, setCurrentPage] = useState(1);
  return { currentPage, setCurrentPage };
}
