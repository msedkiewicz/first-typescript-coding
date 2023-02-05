interface DataFunc {
    (data: DataArray): void
}

interface DataArray {
    [index: number]: string | number;
}

const showData: DataFunc = function (data: DataArray): void {
    console.log(data)
}

const numbers: DataArray = [1, 2, 3];
const numbersAndString: DataArray = ['John', 4, 'Amanda'];

showData(numbers);
showData(numbersAndString);