import { Route } from '@angular/router';
import {
    HasLoggedInGuard,
    HasNotLoggedInGuard,
    OnBoardingGuard,
    UserGuard
} from '@cwp/core/guard';
import { PageDetailsComponent } from './modules/page-setting/containers/page-details/page-details.component';
import { PageSettingComponent } from './modules/page-setting/page-setting.component';

export const remotesAppClientRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
    {
        path: 'page',
        canActivate: [HasLoggedInGuard, UserGuard],
        component: PageSettingComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./modules/page-setting/page/page/page.module').then(m => m.PageModule)
            },
            {
                path: 'editing',
                loadChildren: () => import('./modules/page-setting/page/page-editing/page-editing.module').then(m => m.PageEditingModule)
            },
            {
                path: ':id',
                component: PageDetailsComponent,
            }
        ]
    },
    {
        path: 'auth',
        canActivate: [HasNotLoggedInGuard],
        loadChildren: () =>
            import('./modules/authentication/authentication.module').then(
                (m) => m.AuthenticationModule
            ),
    },
    {
        path: 'onboarding',
        canActivate: [OnBoardingGuard], // onboarding rồi thì ko cho vào nữa // TODO :linh
        loadChildren: () =>
            import('./modules/onboarding/onboarding.module').then(
                (m) => m.ClientOnboardingModule
            ),
    },

    {
        path: 'account',
        canActivate: [HasLoggedInGuard, UserGuard],
        loadChildren: () =>
            import('./modules/account/account.module').then(
                (m) => m.ClientAccountModule
            ),
    },
    {
        path: 'marketplace',
        canActivate: [HasLoggedInGuard, UserGuard],
        loadChildren: () =>
            import('./modules/marketplace/marketplace.module').then(
                (m) => m.ClientMarketplaceModule
            ),
    },
    {
        path: 'community',
        canActivate: [HasLoggedInGuard, UserGuard],
        loadChildren: () =>
            import('./modules/community/community.module').then(
                (m) => m.ClientCommunityModule
            ),
    },
    {
        path: 'customer-support',
        canActivate: [HasLoggedInGuard, UserGuard],
        loadChildren: () =>
            import('./modules/customer-support/customer-support.module').then(
                (m) => m.ClientCustomerSupportModule
            ),
    },
    {
        path: 'payment',
        canActivate: [HasLoggedInGuard, UserGuard],
        loadChildren: () =>
            import('./modules/payment/payment.module').then(
                (m) => m.ClientPaymentModule
            ),
    },
    {
        path: 'chat',
        canActivate: [HasLoggedInGuard, UserGuard],
        loadChildren: () =>
            import('./modules/chat/chat.module').then((m) => m.ClientChatModule),
    },
];
