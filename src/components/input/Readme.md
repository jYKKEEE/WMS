Tyylitelty input kenttä, joka ottaa tuotteen id:n ja nimen vastaan addformissa.

```js
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const [id, setId] = useState('');

const handleId = (e) => {
  setId(e.target.value);
};

<Router>
  <Input text={'Product id:'} value={id} onChange={handleId} />
</Router>;
```
