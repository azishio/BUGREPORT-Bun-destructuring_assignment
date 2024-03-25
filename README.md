# bun_destructuring_assignment

This is a ribozitry for a bug report on Bun.

The problem occurs when a function that returns an object is treated as a macro and the value is retrieved by a split assignment.

## reproduction procedure
Perform the following
```bash
bun install
bun run index.ts
```
This program expects to output ↓
```
a b c
a b c
a b c
a b c
a b c
a b c
```

but actually outputs ↓
```
a b c
a undefined c
undefined b c
undefined b c
undefined b c
undefined b c
```

(Translated by DeepL)
