export const makedata = (n, t) => {
  return d3.range(100).map((d) => {
    const x = d * 50 + 50;
    const y = 250 + Math.sin(d * 0.5 + t) * 120;
    const y2 = 250 + Math.sin(d * 0.5 + t + Math.PI) * 120;
    const r = 10 + Math.sin(d * 0.05 + t * 2) * 10;

    return {
      x,
      y,
      y2,
      r,
      red: Math.floor(128 + 127 * Math.sin(x * 0.05 + 0.003 * t)),
      green: Math.floor(128 + 127 * Math.sin(y * 0.05 + 0.002 * t)),
      blue: Math.floor(128 + 127 * Math.sin(y2 * 0.1 + 0.001 * t)),
    };
  });
};
