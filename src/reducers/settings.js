import {CHANGE_FONT, RESTORE_STYLE, READ_SETTINGS, CHANGE_COLOR, CHANGE_PARAGRAPH, CHANGE_BACKGROUND } from "../constants/styles";

const initialfonts = [
    {
        family: "open-sans",
        weight: "400",
        size: 22,
    },
    {
        family: "open-sans",
        weight: "400",
        size: 17,
    },
    {
        family: "open-sans",
        weight: "400",
        size: 14,
    },
    {
        family: "open-sans",
        weight: "400",
        size: 12,
    },
    {
        family: "open-sans",
        weight: "400",
        size: 13,
    }
];

const initialColors = [
    {
        color: "565555",
        alpha: 100
    },
    {
        color: "565555",
        alpha: 100
    },
    {
        color: "888888",
        alpha: 100
    },
    {
        color: "00AEDA",
        alpha: 100,
    },
    {
        color: "FFFFFF",
        alpha: 100,
    },
    {
        color: "565555",
        alpha: 100,
    },
    {
        color: "DADADA",
        alpha: 100,
    },
    {
        color: "FDFDFD",
        alpha: 100,
    },   
    {
        color: "EAC338",
        alpha: 100,
    },
    {
        color: "006799",
        alpha: 100,
    },
    {
        color: "00AEDA",
        alpha: 100,
    },
    {
        color: "EAC338",
        alpha: 100,
    },
    {
        color: "",
        alpha: 100,
    }
];
const initialParagraph = [
    {
        align: "center",
        spacing: 1.5
    },
    {
        align: "center",
        spacing: 1.5
    },
    {
        align: "left",
        spacing: 1.5
    },
];

const initialBackground = [
    {// progress bar
        option: true
    }
]

export default function reducer(state = {
    
    font: initialfonts,
    paragraph: initialParagraph,
    color: initialColors,
    background: initialBackground,

}, action) {
    
    if (action.type == READ_SETTINGS) {
        let setting = action.payload;

        if (setting) {
            let newstate = setting;
            if (!setting.color.length) {
                newstate.color = JSON.parse(JSON.stringify(initialColors));
            }
            if (!newstate.paragraph || !newstate.paragraph.length) {
                newstate.paragraph = JSON.parse(JSON.stringify(initialParagraph));
            }

            if (!newstate.background || !newstate.background.length) {
                newstate.background = JSON.parse(JSON.stringify(initialBackground));
            }

            return newstate;
        }

        return state;
    }

    if (action.type == CHANGE_PARAGRAPH) {
        let newstate = {...state};
        let index = action.payload.index;

        newstate.paragraph = [
            ...newstate.paragraph.slice(0, index),
            action.payload.paragraph,
            ...newstate.paragraph.slice(index + 1)
        ];
       
        return newstate;
    }

    if (action.type == CHANGE_FONT) {
        let newstate = {...state};
        let index = action.payload.index;

        newstate.font = [
            ...newstate.font.slice(0, index),
            action.payload.font,
            ...newstate.font.slice(index + 1)
        ];
       
        return newstate;
    }
    if (action.type == RESTORE_STYLE) {
        let newstate = {...state};
        let restore = action.payload;

        switch (restore) {
            case "Fonts":
                newstate.font = JSON.parse(JSON.stringify(initialfonts));
                break;
            case "Colors":
                newstate.color = JSON.parse(JSON.stringify(initialColors));
                break;
            case "Paragraph":
                newstate.paragraph = JSON.parse(JSON.stringify(initialParagraph));
                break;

            case "Background":
                newstate.background = JSON.parse(JSON.stringify(initialBackground));
                break;
        }

        return newstate;
    }

    if (action.type == CHANGE_COLOR) {
        let newstate = {...state};
        let index = action.payload.index;

        newstate.color = [
            ...newstate.color.slice(0, index),
            action.payload.color,
            ...newstate.color.slice(index + 1)
        ];

        return newstate;
    }

    if (action.type == CHANGE_BACKGROUND) {
        let newstate = {...state};
        let index = action.payload.index;

        newstate.background = [
            ...newstate.background.slice(0, index), 
            action.payload.data,
            ...newstate.background.slice(index + 1),
        ]

        return newstate;
    }
    return state;
}