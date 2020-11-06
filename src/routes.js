import Home from "./components/Home"
import Cat from "./components/Cat"
import CatName from "./components/CatName"
import CatColor from "./components/CatColor"

export default [
    {
        name: "home",
        path: "/",
        exact: true,
        component: Home
    },
    {
        name: "Cat",
        path: "/cat",
        component: Cat,
        routes: [
            {
                name: "Name",
                path: "/cat",
                exact: true,
                component: CatName
            },
            {
                name: "Color",
                path: "cat/color/:color",
                exact: true,
                component: CatColor,
                linkPath: "/cat/color/orange"
            }
        ]
    }
]