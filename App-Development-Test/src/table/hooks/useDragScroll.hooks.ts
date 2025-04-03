import { useRef } from "react";

function useDragScroll() {
  const tableRef = useRef<HTMLDivElement | null>(null);
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (tableRef.current) {
      isMouseDown.current = true;
      startX.current = e.clientX;
      scrollLeft.current = tableRef.current.scrollLeft;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMouseDown.current && tableRef.current) {
      const x = e.clientX;
      const scroll = scrollLeft.current - (x - startX.current);
      tableRef.current.scrollLeft = scroll;
    }
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
  };

  const handleMouseLeave = () => {
    isMouseDown.current = false;
  };

  return {
    tableRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave
  };
}

export default useDragScroll;
