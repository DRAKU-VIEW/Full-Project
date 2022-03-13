const GridConstructor = (modelG, layout) => {
  let matrix = [],
    res = 0,
    aux = 0,
    k = 0;
  for (let i in modelG) {
    if (i == 0) res = 0;
    else res += modelG[i].sizeVideo;
    if (res >= layout) {
      res = 0;
      matrix.push([...new Array(aux)]);
      aux = 0;
    }
    res = res + modelG[i].sizeVideo;
    aux += 1;
    if (i == modelG.length - 1) matrix.push([...new Array(aux)]);
  }
  for (let i in matrix) {
    for (let j in matrix[i]) {
      matrix[i][j] = modelG[k];
      k++;
    }
  }
  return matrix;
};
const GenerateDivs = (widthScreen, arrFib, modelG) => {
  let divs = "",
    k = 0;
  let layout = ComputeIndex(widthScreen, arrFib);
  let matrix = GridConstructor(modelG, layout);
  for (let i in matrix) {
    divs += `<div className='flex-container'>`;
    for (let j in matrix[i]) {
      divs += `<div style="
                            width:${matrix[i][j].sizeVideo}px;
                            
                        " 
                    className='boxGrid mx-3 my-3'>
                    <video className="w-100 " controls src=${matrix[i][j].movie} ></video>
                    <h6 className='text-center'>${matrix[i][j].title}</h6></div>`;
      k++;
    }
    divs += `</div>`;
  }

  return divs;
};
const GenerateFibonacci = (number, x1, x2) => {
  var fibonacci = [];
  fibonacci[0] = x1;
  fibonacci[1] = x2;
  for (var i = 2; i < number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
};
const ComputeIndex = (widthScreen, arrFib) => {
  let i = 0,
    flag = false,
    fibo = 0;
  while (!flag) {
    if (widthScreen < arrFib[0]) {
      i = 0;
      fibo = arrFib[i];
      flag = true;
    } else if (arrFib[i] < widthScreen && widthScreen < arrFib[i + 1]) {
      fibo = arrFib[i];
      flag = true;
    }
    i = i + 1;
  }
  return fibo - 20;
};
export { GenerateDivs, GenerateFibonacci };
