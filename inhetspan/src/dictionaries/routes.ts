export interface Route {
    href: string
    label: string
    includeInHeader: boolean
    dropdown?: Route[]
}
  
export const routes: Route[] = [
    {
        href: "/",
        label: "Zorgverleners",
        includeInHeader: true,
    },
    // {
    //     href: "/huisartsen",
    //     label: "Huisartsen",
    //     includeInHeader: true,
    // },
    {
        href: "/over",
        label: "Over het Span",
        includeInHeader: true,
        dropdown: [
            {
                href: "/wat-is-span",
                label: "Wat is Span?",
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
        href: "/faq",
        label: "FAQ",
        includeInHeader: true,
    },
]
