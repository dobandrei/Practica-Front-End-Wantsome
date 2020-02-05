function alphabetWar(battlefield) {
  let result = "";
  let myArray1 = battlefield.split("");
  let buncar = [];
  let buncar1s = battlefield.indexOf('[');
  let buncar1d = battlefield.indexOf(']');
  let twoBombs = false;
  while (buncar1s !== -1 && buncar1d !== -1) {
    buncar.push(buncar1s);
    buncar.push(buncar1d);
    buncar1s = battlefield.indexOf('[', buncar1s + 1);
    buncar1d = battlefield.indexOf(']', buncar1d + 1);
  }
  let bombs = 0;
  let bombsPosition = [];
  for (let i = 0; i < myArray1.length; i++) {
    if (myArray1[i] === "#") {
      bombs++;
      bombsPosition.push(i);
    }
  }
  if (bombs === 0) {
    for (let i = 0; i < myArray1.length; i++) {
      if (myArray1[i] === "[" || myArray1[i] === "]") { continue; }
      result += myArray1[i];
    }
    return result;
  } else {
    for (let j = 0; j < buncar.length; j += 2) {
      if (bombsPosition.length == j) {
        for (let i = 0; i < bombsPosition.length; i++) {
          if (bombsPosition[i] < buncar[j] && bombsPosition[i + 1] < buncar[j] ||
            bombsPosition[i] < buncar[j] && bombsPosition[i + 1] > buncar[j + 1] ||
            bombsPosition[i] > buncar[j + 1] && bombsPosition[i + 1] > buncar[j + 1]) { twoBombs = true; }
        }
        if (twoBombs === true) {
          twoBombs = false;
          continue;
        }
      } else {
        for (let i = j; i < bombsPosition.length; i++) {
          if (bombsPosition[i] < buncar[j] && bombsPosition[i + 1] < buncar[j] ||
            bombsPosition[i] > buncar[j - 2] && bombsPosition[i + 1] > buncar[j - 2] ||
            bombsPosition[i] < buncar[j] && bombsPosition[i + 1] > buncar[j + 1] ||
            bombsPosition[i] > buncar[j + 1] && bombsPosition[i + 1] > buncar[j + 1] ||
            bombsPosition[i + 1] < buncar[j + 2] && bombsPosition[i] < buncar[j + 2]) { twoBombs = true; }
        }
        if (twoBombs === true) {
          twoBombs = false;
          continue;
        }
      }
      for (let f = buncar[j] + 1; f < buncar[j + 1]; f++) {
        result += myArray1[f];
      }
    }
    return result;
  }
}


