import DemandCreate from "../components/design-systems/Templates/DemandCreate";
import DemandDashboard from "../components/design-systems/Templates/DemandDashboard";
export interface Route {
    path: string;
    Element: React.ComponentType;
}
export const ROUTES: Route[] = [

    {
        path: '/',
        Element: DemandCreate
    },
    {
        path: '/demanddashboard',
        Element: DemandDashboard
    },
]