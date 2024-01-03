export const TABLEDATA = [{
    'name': 'MLK- STR-001',
    'Demand By': 'PK Road Store',
    'Mobile No': '9810198101',
    'Demand TO': 'WHS- Gurgaon',
    'Item': '2',
    'Status': 'Pending',
},
{
    'name': 'MLK- STR-002',
    'Demand By': 'PK Road Store',
    'Mobile No': '9810198101',
    'Demand TO': 'WHS- Gurgaon',
    'Item': '2',
    'Status': 'Partial Approved',
},

{
    'name': 'MLK- STR-003',
    'Demand By': 'PK Road Store',
    'Mobile No': '9810198101',
    'Demand TO': 'WHS- Gurgaon',
    'Item': '2',
    'Status': 'Pending',
},

{
    'name': 'MLK- STR-004',
    'Demand By': 'PK Road Store',
    'Mobile No': '9810198101',
    'Demand TO': 'WHS- Gurgaon',
    'Item': '2',
    'Status': 'Pending',
},

{
    'name': 'MLK- STR-005',
    'Demand By': 'PK Road Store',
    'Mobile No': '9810198101',
    'Demand TO': 'WHS- Gurgaon',
    'Item': '2',
    'Status': 'Partial Approved',
},


]

export type SETCOLORSTATUSTYPES = keyof typeof SETCOLORSTATUS;
export const SETCOLORSTATUS  = {
    'Partial Approved': '#FE8730',
    'Pending': '#73CF2B',
}
export const STATE = [{ name: "Haryana", id: "Haryana" },
{ name: "Delhi", id: "Delhi" },
{ name: "Punjab", id: "Punjab" },
{ name: "Jharkhand", id: "Jharkhand" },
{ name: "Karnataka", id: "Karnataka" },
{ name: "Himachal Pradesh", id: "Himachal Pradesh" },
{ name: "Maharashtra", id: "Maharashtra" },
{ name: "Rajasthan", id: "Rajasthan" },
{ name: "Uttar Pradesh", id: "Uttar Pradesh" },
{ name: "Bihar", id: "Bihar" },
{ name: "Goa", id: "Goa" },
]
export const CITY = [{ name: "Gurgaon", id: "Gurgaon" },
{ name: "Rohtak", id: "Rohtak" },
{ name: "Hisar", id: "Hisar" },
{ name: "Jind", id: "Jind" },
{ name: "Jhajjar", id: "Jhajjar" },
{ name: "Sirsa", id: "Sirsa" },
{ name: "Rewari", id: "Rewari" },
{ name: "Panipat", id: "Panipat" },
]
export const STORE = [{ name: "Store 1", id: "Store 1" },
{ name: "Store 2", id: "Store 2" },
{ name: "Store 3", id: "Store 3" },
{ name: "Store 4", id: "Store 4" },
{ name: "Store 5", id: "Store 5" },
{ name: "Store 6", id: "Store 6" },
{ name: "Store 7", id: "Store 7" },
{ name: "Store 8", id: "Store 8" },
]
export const STORE_MANAGEMENT = [
    {
        to: '/',
        name: 'Demand Create'
    },
    {
        to: '/dashboard',
        name: 'Demand Dashboard'

    },

]

