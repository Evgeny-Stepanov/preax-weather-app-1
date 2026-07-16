export const getWindIconRotation = (direction) => {
  let rotationDegree;

  switch (direction) {
    case "Северо-западный":
      rotationDegree = 0;
      break;

    case "Северный":
      rotationDegree = 45;
      break;

    case "Северо-восточный":
      rotationDegree = 90;
      break;

    case "Восточный":
      rotationDegree = 135;
      break;

    case "Юго-восточный":
      rotationDegree = 180;
      break;

    case "Южный":
      rotationDegree = 225;
      break;

    case "Юго-западный":
      rotationDegree = 270;
      break;

    case "Западный":
      rotationDegree = 315;
      break;
  }

  return rotationDegree;
};
