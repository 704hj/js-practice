const c = 'hi' as any;

type Person = { name: string; age: number; }

const josh = {
    age : '2',
    name: '캡틴'
}

josh.name = '효주'

type Person1 = { name: string; age: number; }

const b1 = {} as Person;
b1.name = 'Thor';