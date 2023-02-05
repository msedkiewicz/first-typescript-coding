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

    function showParam(param: 'firstName' | 'lastName' | 'age'): string | number {
        return per[param]
    }

    let age = showParam('age')
    let firstName = showParam('firstName')
}