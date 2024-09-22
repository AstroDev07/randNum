# randNum
Esta función genera un número aleatorio emtre los 2 números que se incluyen en los argumentos de la misma.

Por defecto, si la función no recibe nimgún parámetro, esta genera un número aleatorio entre 0 y 1.

```js
console.log(randNum()) // 0.686893241
```

Los argumentos de la función deben ser obligatoriamente números, y estos deben ser escritos separados por coma:

```js
console.log(randNum(1, 10)) // 5.287918832
```

También se pueden gemerar números negativos:

```js
console.log(randNum(-5, 0)) // -3.14682739936
```

Si desea que el número gemerado sea un entero, puede usar la función `Math.round()` o similares:

```js
console.log(Math.round(randNum(-10, 10))) // -2
```
