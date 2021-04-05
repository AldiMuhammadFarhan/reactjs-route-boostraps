import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Beranda from './beranda';
import Tentang from './tentang';
import Karya from './karya';
import Kontak from './kontak';

let Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/tentang" component={Tentang} />
        <Route path="/karya" component={Karya} />
        <Route path="/kontak" component={Kontak} />
    </Switch>
)

export default Utama;