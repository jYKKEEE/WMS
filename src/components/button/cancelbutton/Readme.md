Cancelbutton-komponentti on sovelluksen yleinen cancel painike,
jonka tehtävänä on muuttaa sovelluksen tila normaaliksi eli FALSEksi.
Painike näkyy vain jos jokin tiloista on true.
Propseina komponentille annetaan active tila ja setActive, jolla muuttaa tilaa.

How To:

```js
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

const [active, setActive] = useState({ add: true });

<Router>
  <Cancel
    active={active}
    setActive={() => {
      setActive((prevState) => ({
        ...prevState,
        add: false,
      }));
    }}
  />
</Router>;
```
