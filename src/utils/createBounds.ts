type Point = { x: number; y: number };

export function createBounds(points: Point[]): naver.maps.LatLngBounds {
  const minX = Math.min(...points.map((p) => p.y));
  const minY = Math.min(...points.map((p) => p.x));
  const maxX = Math.max(...points.map((p) => p.y));
  const maxY = Math.max(...points.map((p) => p.x));

  return new naver.maps.LatLngBounds(
    new naver.maps.LatLng(minX, minY),
    new naver.maps.LatLng(maxX, maxY),
  );
}
