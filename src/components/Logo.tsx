export function logoImg({ size = 30 }: { size?: number }) {
  return (
    <svg style={{ width: size, height: size }}>
      <image href="favicon.svg"></image>
    </svg>
  );
}
