const distanceConverter = (distance: number) => {
  if (distance >= 1000) {
    return Math.round(distance / 100) / 10 + 'km';
  } else {
    return distance + 'm';
  }
};

export default distanceConverter;
