import { Routes } from '@angular/router';
import { Bienvenue } from './pages/bienvenue/bienvenue';
import { NonTrouvee } from './pages/non-trouvee/non-trouvee';

export const routes: Routes = [
    {
        path: '',
        component: Bienvenue
    },
    {
        path: '**',
        component: NonTrouvee
    }
];
