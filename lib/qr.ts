export function drawDemoQR(canvas: HTMLCanvasElement, seedStr: string): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const N = 29;
  const s = canvas.width / N;
  let seed = 0;
  for (let i = 0; i < seedStr.length; i++) {
    seed = (seed * 31 + seedStr.charCodeAt(i)) >>> 0;
  }
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  const inFinder = (x: number, y: number) =>
    (x < 8 && y < 8) || (x > N - 9 && y < 8) || (x < 8 && y > N - 9);

  const finder = (x: number, y: number) => {
    ctx.fillStyle = "#0b0b0c";
    ctx.fillRect(x * s, y * s, 7 * s, 7 * s);
    ctx.fillStyle = "#fff";
    ctx.fillRect((x + 1) * s, (y + 1) * s, 5 * s, 5 * s);
    ctx.fillStyle = "#0b0b0c";
    ctx.fillRect((x + 2) * s, (y + 2) * s, 3 * s, 3 * s);
  };

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0b0b0c";
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (inFinder(x, y)) continue;
      if (rnd() > 0.52) ctx.fillRect(x * s, y * s, s, s);
    }
  }
  finder(0, 0);
  finder(N - 7, 0);
  finder(0, N - 7);

  ctx.fillRect((N - 9) * s, (N - 9) * s, 5 * s, 5 * s);
  ctx.fillStyle = "#fff";
  ctx.fillRect((N - 8) * s, (N - 8) * s, 3 * s, 3 * s);
  ctx.fillStyle = "#0b0b0c";
  ctx.fillRect((N - 7) * s, (N - 7) * s, 1 * s, 1 * s);
}
