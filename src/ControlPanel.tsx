type Props = {
  onRotate: (dir: "left" | "right" | "up" | "down") => void;
};

export function ControlPanel({ onRotate }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <button onClick={() => onRotate("up")}>⬆️</button>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => onRotate("left")}>⬅️</button>
        <button onClick={() => onRotate("right")}>➡️</button>
      </div>
      <button onClick={() => onRotate("down")}>⬇️</button>
    </div>
  );
}
