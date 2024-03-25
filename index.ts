import { macro } from "./macro.ts" with { type: "macro" };

{
	const { a, b, c } = macro();
	console.log(a, b, c); // a b c
}
{
	const { a, c, b } = macro();
	console.log(a, b, c); // a undefined b
}
{
	const { b, a, c } = macro();
	console.log(a, b, c); // undefined b c
}
{
	const { b, c, a } = macro();
	console.log(a, b, c); // undefined b c
}
{
	const { c, a, b } = macro();
	console.log(a, b, c); // undefined b c
}
{
	const { c, b, a } = macro();
	console.log(a, b, c); // undefined b c
}
