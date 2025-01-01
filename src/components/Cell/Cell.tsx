// import React from "react";

// interface CellProps {
//   value: "X" | "O" | null;
//   onClick: () => void;
// }

// const Cell: React.FC<CellProps> = ({ value, onClick }) => {
//   return (
//     <div style={styles.cell} onClick={onClick}>
//       {value}
//     </div>
//   );
// };

// const styles = {
//   cell: {
//     width: "100px",
//     height: "100px",
//     backgroundColor: "#f0f0f0",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: "24px",
//     fontWeight: "bold",
//     color: "#333",
//     cursor: "pointer",
//     border: "1px solid #ddd",
//   },
// };

// export default Cell;


import React from "react";

interface CellProps {
  value: "X" | "O" | null;
  onClick: () => void;
}

export default function Cell({ value, onClick }: CellProps) {
  return (
    <div style={styles.cell} onClick={onClick}>
      {value}
    </div>
  );
};

const styles = {
  cell: {
    width: "100px",
    height: "100px",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    cursor: "pointer",
    border: "1px solid #ddd",
  },
};

