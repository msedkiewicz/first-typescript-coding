{
    var per_1 = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    };
    function showParam(param) {
        return per_1[param];
    }
    var age = showParam('age');
    var firstName = showParam('firstName');
}
