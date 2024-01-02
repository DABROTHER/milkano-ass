import DemandDashboard from "../components/design-systems/Templates/DemandDashboard";
interface Route {
    path: string;
    Element: React.ComponentType;
  }
export const ROUTES:Route[] = [
    {
        path: '/',
        Element: DemandDashboard
    }
]