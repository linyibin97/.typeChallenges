// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyCapitalize<'foobar'>, 'Foobar'>>,
  Expect<Equal<MyCapitalize<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<MyCapitalize<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<MyCapitalize<''>, ''>>,
  Expect<Equal<MyCapitalize<'a'>, 'A'>>,
  Expect<Equal<MyCapitalize<'b'>, 'B'>>,
  Expect<Equal<MyCapitalize<'c'>, 'C'>>,
  Expect<Equal<MyCapitalize<'d'>, 'D'>>,
  Expect<Equal<MyCapitalize<'e'>, 'E'>>,
  Expect<Equal<MyCapitalize<'f'>, 'F'>>,
  Expect<Equal<MyCapitalize<'g'>, 'G'>>,
  Expect<Equal<MyCapitalize<'h'>, 'H'>>,
  Expect<Equal<MyCapitalize<'i'>, 'I'>>,
  Expect<Equal<MyCapitalize<'j'>, 'J'>>,
  Expect<Equal<MyCapitalize<'k'>, 'K'>>,
  Expect<Equal<MyCapitalize<'l'>, 'L'>>,
  Expect<Equal<MyCapitalize<'m'>, 'M'>>,
  Expect<Equal<MyCapitalize<'n'>, 'N'>>,
  Expect<Equal<MyCapitalize<'o'>, 'O'>>,
  Expect<Equal<MyCapitalize<'p'>, 'P'>>,
  Expect<Equal<MyCapitalize<'q'>, 'Q'>>,
  Expect<Equal<MyCapitalize<'r'>, 'R'>>,
  Expect<Equal<MyCapitalize<'s'>, 'S'>>,
  Expect<Equal<MyCapitalize<'t'>, 'T'>>,
  Expect<Equal<MyCapitalize<'u'>, 'U'>>,
  Expect<Equal<MyCapitalize<'v'>, 'V'>>,
  Expect<Equal<MyCapitalize<'w'>, 'W'>>,
  Expect<Equal<MyCapitalize<'x'>, 'X'>>,
  Expect<Equal<MyCapitalize<'y'>, 'Y'>>,
  Expect<Equal<MyCapitalize<'z'>, 'Z'>>,
]


// ============= Your Code Here =============
type MyCapitalize<S extends string> = 
  S extends `${infer I}${infer R}` 
    ? (
        I extends 'a' ? `A${R}` :
        I extends 'b' ? `B${R}` :
        I extends 'c' ? `C${R}` :
        I extends 'd' ? `D${R}` :
        I extends 'e' ? `E${R}` :
        I extends 'f' ? `F${R}` :
        I extends 'g' ? `G${R}` :
        I extends 'h' ? `H${R}` :
        I extends 'i' ? `I${R}` :
        I extends 'j' ? `J${R}` :
        I extends 'k' ? `K${R}` :
        I extends 'l' ? `L${R}` :
        I extends 'm' ? `M${R}` :
        I extends 'n' ? `N${R}` :
        I extends 'o' ? `O${R}` :
        I extends 'p' ? `P${R}` :
        I extends 'q' ? `Q${R}` :
        I extends 'r' ? `R${R}` :
        I extends 's' ? `S${R}` :
        I extends 't' ? `T${R}` :
        I extends 'u' ? `U${R}` :
        I extends 'v' ? `V${R}` :
        I extends 'w' ? `W${R}` :
        I extends 'x' ? `X${R}` :
        I extends 'y' ? `Y${R}` :
        I extends 'z' ? `Z${R}` :
        S
      )
    : S

  // S extends `${infer I}${infer R}` 
  //   ? `${Uppercase<I>}${R}`
  //   : S
  