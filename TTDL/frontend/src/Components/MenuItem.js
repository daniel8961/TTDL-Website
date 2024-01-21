export const MenuItem = [
    {
        label: 'Home', 
        url: '/',
        cNameItem: 'nav-item',
        cNameLink: 'nav-item-link',
    },
    {
        label: 'About',
        url: '/about',
        cNameItem: 'nav-item',
        cNameLink: 'nav-item-link'
    },
    {
        label: 'Portfolio',
        url: '/portfolio',
        cNameItem: 'nav-item',
        cNameLink: 'nav-item-link',
        subItem: [
            {
                label: 'Skills',
                url: '/portfolio/skills',
                cNameItem: 'sub-item',
                cNameLink: 'sub-item-link',
            },
            {
                label: 'Skills',
                url: '/portfolio/skills',
                cNameItem: 'sub-item',
                cNameLink: 'sub-item-link',
            },
        ],
    },
    {
        label: 'Contact',
        url: '/contact',
        cNameItem: 'nav-item',
        cNameLink: 'nav-item-link'
    }
];