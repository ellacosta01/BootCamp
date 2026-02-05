import { Routes } from '@angular/router';
import { UserComponent } from './view/user/user.component/user.component';
import { RickMortyComponent } from './services/rick-morty/rick-morty.component';

export const routes: Routes = [

        //{ path: '', redirectTo: 'users', pathMatch: 'full' },
        { path: '', redirectTo: 'rick-morty', pathMatch: 'full' },

        // { path: 'users', component: UserComponent },
        { path: 'rick-morty', component: RickMortyComponent }


];
