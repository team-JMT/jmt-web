interface TwoPoints {
  userPositionX: string;
  userPositionY: string;
  placeX: number;
  placeY: number;
}

const calculateDistance = ({
  userPositionX,
  userPositionY,
  placeX,
  placeY,
}: TwoPoints) => {
  const userX = Number(userPositionX);
  const userY = Number(userPositionY);
  if (userX === placeX && userY === placeY) {
    return 0;
  } else {
    const theta = userX - placeX;
    const distance =
      60 *
      1.1515 *
      (180 / Math.PI) *
      Math.acos(
        Math.sin(userY * (Math.PI / 180)) * Math.sin(placeY * (Math.PI / 180)) +
          Math.cos(userY * (Math.PI / 180)) *
            Math.cos(placeY * (Math.PI / 180)) *
            Math.cos(theta * (Math.PI / 180)),
      );
    return Math.round(distance * 1609.344); //m 단위
  }
};

export default calculateDistance;
