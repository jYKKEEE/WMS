TempMenu on tilapäis säilö tuotteille.
Tempmenu näkyy ruudun alareunassa, JOS temp tilassa on tuotteita.
View buttonilla siirrytään varsinaiseen temp-näkymään

Propseina menu tarvitsee temp taulukon ja setActive tilan.

```js
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import TempMenu from './tempmenu';

const [active, setActive] = useState({ temp: true });
const [temp, setTemp] = useState([{ id: 12345, name: 'tuote' }]);

<Router>
  <TempMenu temp={temp} setActive={setActive} />
</Router>;
```
