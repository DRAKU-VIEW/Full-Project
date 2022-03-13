import egg from "../../resources/img/eggcito.png";

const GenerateNormalDivs = (array) => {
  let normalDivs = "";
  for (let i in array) {
    normalDivs += `<div className='normalBoxGrid mx-3 my-4'>
                        <img className="centerEgg" src=${egg} alt="huevito" /><div className='text-div'>${array[i].followUser}
                        </div>
                      </div>`;
  }
  return normalDivs;
};

export { GenerateNormalDivs };
