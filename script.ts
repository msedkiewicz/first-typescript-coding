{
    let foo: string | number | boolean;
    foo = 'bar';
    foo = 12;
    foo = false;

    const bar: number = 12;

    function baz(param: string): string | number | boolean {
        return param;
    }
}