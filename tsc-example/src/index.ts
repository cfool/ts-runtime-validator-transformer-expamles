import { trvalidate } from 'ts-runtime-validator-transformer'

interface A {
  name: string;
}

enum B { opt1, opt2 }

console.log(
  trvalidate<A>({ name: 'hello world' })
)
console.log(
  trvalidate<A>({ })
)
console.log(
  trvalidate<string>('hello world')
)

console.log(
  trvalidate<B>(B.opt1)
)

console.log(
  trvalidate<B>('opt1')
)