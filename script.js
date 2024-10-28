function Generate()
{
    let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let gridItems = document.getElementsByClassName("grid-item");
    let tempArr = [...numberArr];

    for (let i = 0; i < numberArr.length; i++) {
        let randomNum = Math.floor(Math.random()  * tempArr.length);
        gridItems[i].innerHTML = tempArr[randomNum];
        tempArr.splice(randomNum, 1);
    }
}