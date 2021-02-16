Button komponenttiä käytetään sovelluksessa yleisenä nappina.
Propseina annetaan text,link ja action.
text: asettaa nappiin tekstin,
link: linkitys muodossa "/minne" (voi jättää myös tyhjäksi ' ' ).
action: functiot jota napin painallus suorittaa.

How To:

```js
import { BrowserRouter as Router } from 'react-router-dom';
<Router>
  <Button text='nappi' link='' action={() => {}} />
</Router>;
```
