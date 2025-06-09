//.function

function distanceFromHqInBlocks(pickupLocation) {
  const hq = 42;
  return Math.abs(pickupLocation - hq);
}
function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance > 2500) return "cannot travel that far";
  if (distance > 2000) return 25;
  if (distance > 400) return (distance - 400) * 0.02;
  return 0;
}
