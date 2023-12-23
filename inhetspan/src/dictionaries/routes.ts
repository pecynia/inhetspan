export interface Route {
    href: string
    label: string
    includeInHeader: boolean
    dropdown?: Route[]
}
  
export const routes: Route[] = [
    {
        href: "/",
        label: "Home",
        includeInHeader: true,
    },
    {
        href: "/huisartsen",
        label: "Huisartsen",
        includeInHeader: true,
    },
    {
        href: "/over",
        label: "Over het Span",
        includeInHeader: true,
        dropdown: [
            {
                href: "/wat-is-het-span",
                label: "Wat is het Span?",
                includeInHeader: true,
            },
            {
                href: "/kunst-in-het-span",
                label: "Kunst in het Span",
                includeInHeader: true,
            },
            {
                href: "/camerabewaking",
                label: "Camerabewaking",
                includeInHeader: true,
            },
        ]
    },
    {
        href: "/route",
        label: "Route",
        includeInHeader: true,
    },
    {
        href: "/kennisbank",
        label: "Kennisbank",
        includeInHeader: true,
    },
]
