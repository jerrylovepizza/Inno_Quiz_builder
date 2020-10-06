export const MC_MODEL = {
    id: 1,
    title: "",
    description: "",
    type: "MC",
    required: false,
    remember_info: "",
    is_image: false,
    mul_answer: false,
    btn_text: "Next",
    scored_question: false,
    mul_answers: 1,
    add_img: false,
    img: "",
    img_align: "",
    answers: [
        {title: "Answer", url: "", score: 0},
        {title: "Answer", url: "", score: 0}
    ],
    others: []
};

export const FB_MODEL = {
    id: 1,
    title: "",
    description: "",
    remember_info: "",
    type: "FB",
    is_logo: false,
    logo: "",
    logo_align: "",
    add_img : false,
    img: "",
    img_align: "",
    social: false,
    btn_text: "Next",
};

export const TX_MODEL = {
    id: 1,
    title: "",
    type: "TX",
    description: "",
    text: "",
    required: false,
    remember_info: "",
    add_img : false,    
    img: "",
    img_align: "",    
    scored_question: false,
    score: 0,
    btn_text: "Next",
};

export const RT_MODEL = {
    id: 1,
    title: "",
    type: "RT",
    description: "",
    text: "",
    required: false,
    barchart: false,
    scale: 10,
    left: "Left",
    right: "Right",
    middle: "Middle",
    add_img : false,
    img: "",
    img_align: "",
    scored_question: false,
    score: 0,
    btn_text: "Next",
};

export const PH_MODEL = {
    id: 1,
    title: "",
    type: "PH",
    description: "",
    text: "",
    required: false,    
    img: "",
    img_align: "",
    add_img : false,
    scored_question: false,
    score: 0,
    country_code: "",
    btn_text: "Next",
};

export const EM_MODEL = {
    id: 1,
    title: "",
    type: "EM",
    description: "",
    text: "",
    required: false,
    remember_info: "",
    add_img : false,    
    img: "",
    img_align: "",    
    scored_question: false,
    score: 0,
    btn_text: "Next",
};


export const WS_MODEL = {
    id: 1,
    title: "",
    type: "WS",
    description: "",
    text: "",
    required: false,
    remember_info: "",    
    img: "",
    img_align: "",
    add_img : false,    
    scored_question: false,
    score: 0,
    btn_text: "Next",
};

export const YN_MODEL = {
    id: 1,
    title: "",
    type: "YN",
    description: "",
    answers: [
        "Yes",
        "No"
    ],
    text: "",
    required: false,    
    img: "",
    img_align: "",
    add_img : false,    
    scored_question: false,
    score: 0,
    btn_text: "Next",
};

export const RD_MODEL = {
    id: 1,
    title: "",
    type: "RD",
    description: "",
    category: ["category"],
    topic: ["topic"],
    text: [-1],
    required: false,
    scored_question: false,
    score: 0,
    btn_text: "Next",
};

export const FU_MODEL = {
    id: 1,
    title: "",
    type: "FU",
    description: "",    
    text: "",
    required: false,    
    scored_question: false,
    score: 0,
    btn_text: "Next",
};

export const HF_MODEL = {
    id: 1,
    title: "",
    type: "HF",
    description: "",    
    text: "",
    key: "",
    btn_text: "Next",
};

export const Get_Question_Model = function(val) {

    let question = "";

    switch (val) {
        case "MC":
            question = Object.assign({}, MC_MODEL);
            break;
        case "FB":
            question = Object.assign({}, FB_MODEL);
            break;
        case "TX":
            question = Object.assign({}, TX_MODEL);
            break;
        case "RT":
            question = Object.assign({}, RT_MODEL);
            break;
        case "PH":
            question = Object.assign({}, PH_MODEL);
            break;
        case "EM":
            question = Object.assign({}, EM_MODEL);
            break;
        case "WS":
            question = Object.assign({}, WS_MODEL);
            break;
        case "YN":
            question = Object.assign({}, YN_MODEL);
            break;
        case "RD":
            question = Object.assign({}, RD_MODEL);
            break;
        case "FU":
            question = Object.assign({}, FU_MODEL);
            break;
        case "HF":
            question = Object.assign({}, HF_MODEL);
            break;
    }

    return question;
}

export const Get_TypeName = function(val) {

    switch (val) {
        case "MC":
            return "Multiple Choice";
            break;
        case "FB":
            return "Front/back Cover";
            break;
        case "TX":
            return "Text";
            break;
        case "RT":
            return "Rating";
            break;
        case "PH":
            return "Phone";
            break;
        case "EM":
            return "Email";
            break;
        case "WS":
            return "Website";
            break;
        case "YN":
            return "Yes/No";
            break;
        case "RD":
            return "Radio";
            break;
        case "FU":
            return "File Upload";
            break;
        case "HF":
            return "Hidden Field";
            break;
    }

    return "";
    // const availabe = ["MC",
    //     "TX",
    //     "EM",
    //     "PH",
    //     "WS"
    //     ];
    
}