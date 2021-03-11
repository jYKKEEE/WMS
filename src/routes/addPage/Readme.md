AddPage. Sovelluksen lisäys ja poisto komponentti. Sisältää nappuloita jotka käynnistävät lisäys ja poisto toimintoja.

propseiksi:
Notifacation kommponentitn käyttö funktio messagehandler()
koko varasto shelfs[]
addshelf(), jolla lisätään varastoon hylly.

How To:

```js
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

<Router>
  <AddPage
    messageHandler={messageHandler}
    shelfs={shelfs}
    setActive={setActive}
    addShelf={addShelf}
  />
</Router>;
```
