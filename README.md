# Brackets

## Task

Implement function `check(str, bracketsConfig)`, that for given brackets sequence will return `true` if it is correct and `false` otherwise

In the second param there is `bracketsConfig` - the array of pairs open-closed brackets. Each subarray includes only 2 elements - opening and closing bracket

```js
check('()', [['(', ')']]) // -> true
check('((()))()', [['(', ')']]) // -> true
check('())(', [['(', ')']]) // -> false
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
check('[(])', [['(', ')'], ['[', ']']]) // -> false
check('[]()', [['(', ')'], ['[', ']']]) // -> true
check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true
```

Write your code in `src/index.js`

<h1>Husan Berdiev</h1>
<h2>Graduate education at the National University of Uzbekistan named after Mirzo Ulugbek in 2008</h2>
<b>hberdiev@gmail.com</b>
+998 99 858 9794
<ol>
  <li>Head of Department in Uzinfocom, since 2011</li>
  <li>Deputy Director in Academic lyceum under WIUT, 2010-2011</li>  
  <li>Director in private company, 2009-2010</li>
  <li>Chief Accountant in private company, 2006-2009</li>
  <li>Asistant in USAID, 2005-2006</li>
  <li>Computer's operator in Academic lyceum under UWED, 2002-2005</li>
</ol>
