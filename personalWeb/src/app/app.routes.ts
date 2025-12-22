import { Routes } from '@angular/router';
import { Bienvenue } from './pages/bienvenue/bienvenue';
import { NonTrouvee } from './pages/non-trouvee/non-trouvee';
import { Connexion } from './pages/auth/connexion/connexion';
import { Taches } from './pages/taches/taches';
import { Board } from './pages/board/board';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/bienvenue',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: Bienvenue
    },
    {
        path: 'board',
        component:Board
    },
    {
        path: 'taches',
        component: Taches
    },
    {
        path: 'connexion',
        component: Connexion
    },
    {
        path: '**',
        component: NonTrouvee
    }
];
