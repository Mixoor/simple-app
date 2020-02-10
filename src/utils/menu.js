export const menu = [
  {
    name: "Accueil",
    path:"/",
    icon: {
      name: "home",
      color: "black"
    },

    sousMenu: []
  },
  {
    name: "Planning",
    path:"/planning",
    icon: {
      name: "calendar alternate",
      color: "black"
    },
    sousMenu: []
  },
  {
    name: "Clients",
    path:"/clients",
    icon: {
      name: "users",
      color: "black"
    },
    sousMenu: []
  },
  {
    name: "Réservations",
    path:"/reservations",
    icon: {
      name: "history",
      color: "black"
    },
    sousMenu: []
  },
  {
    name: "Compétitions",
    path:"/comp",
    icon: {
      name: "flag checkered",
      color: "black"
    },
    sousMenu: [
      {
        name: "sous menu 1",
        path:"/some",

        icon: {
          name: "history",
          color: "black"
        }
      },
      {
        name: "sous menu 2",
        path:"/some2",

        icon: {
          name: "history",

          color: "black"
        }
      }
    ]
  },
  {
    name: "Ecole de sports",
    path:"/ecole",
    icon: {
      name: "industry",
      color: "black"
    },
    sousMenu: []
  },
  {
    name: "Communications",
    path:"/communication",
    icon: {
      name: "comments",
      color: "black"
    },
    sousMenu: [
      {
        name: "sous menu 1",
        path:"/sous3",
        icon: {
          name: "",
          color: "black"
        }
      },
      {
        name: "sous menu 2",
        path:"/sssss",
        icon: {
          name: "",
          color: "black"
        }
      }
    ]
  },
  {
    name: "Caisse",
    path:"/caisse",
    icon: {
      name: "desktop",
      color: "black"
    },
    sousMenu: []
  },
  {
    name: "Videos",
    path:"/video",
    icon: {
      name: "play",
      color: "black"
    },
    sousMenu: []
  },
  {
    name: "Prospection",
    path:"/pre",
    icon: {
      name: "crosshairs",
      color: "black"
    },
    sousMenu: []
  },
  {
    name: "Configuration",
    path:"/configuration",
    icon: {
      name: "options",
      color: "black"
    },
    sousMenu: []
  }
];

export const user = {
  name: "Chady Mbarki",
  profile: "/profile"
};
