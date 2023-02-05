{
    type fooType = string | number | boolean;
    let foo: fooType;
    foo = 'bar';
    foo = 12;
    foo = false;

    const bar = 12;

    type bazType = string | number | boolean;
    function baz(param: string): bazType {
        return param;
    }
}