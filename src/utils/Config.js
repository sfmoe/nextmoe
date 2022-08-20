const siteURL = "https://moemartinez.com";

export const Config = {
    site: {
        owner: "Moe Martinez",
        title: "Front Engineer and Photographer",
        domain: "moemartinez.com",
        emailUser: "contact@moemartinez.com"
    },
    menuLinks: [
        {
            page: "Dev",
            path: "/development",
            alt: "developer portfolio"
        },        {
            page: "Location",
            path: "/portfolio/location",
            alt: "location portfolio - images created on location"
        },
        {
            page: "Studio",
            path: "/portfolio/studio",
            alt: "studio portfolio - images created in a studio setting"
        },
        {
            page: "Commercial | Editorial",
            path: "/portfolio/commercial",
            alt: "commercial and editorial tear sheets and photos"

        },
        {
            page: "Street",
            path: "/portfolio/street",
            alt: "street portfolio - candid photos shot on the street"
        },

        {
            page: "About",
            path: "/about",
            alt: "information about Moe Martinez"
        },
        // {
        //     page: "Presets",
        //     path: "/presets"
        // },
        {
            page: "Contact",
            path: "/contact",
            alt: "contact information page"
        },
        {
            page: "🌑",
            path: "#nightmode",
            classes: "toggle-nightmode",
            alt: "turn night mode on and off"
        }

    ]
};