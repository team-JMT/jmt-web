type Point = { x: number; y: number };

export function calculateCenter(points: Point[]): Point {
  let totalX = 0;
  let totalY = 0;

  points.forEach((point) => {
    totalX += point.x;
    totalY += point.y;
  });

  return { x: totalX / points.length, y: totalY / points.length };
}
