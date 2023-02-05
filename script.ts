{
    type Person = {
        firstName: string;
        lastName: string;
        age: number
    }

    const per: Person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    }

    type paramType = 'firstName' | 'lastName' | 'age';
    type paramReturnType = string | number;

    function showParam(param: paramType): paramReturnType {
        return per[param];
    }

    let age: number = <number>showParam('age');
    let firstName: string = <string>showParam('firstName');
}