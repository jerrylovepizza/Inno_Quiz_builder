import {CHANGE_RESULT, READ_RESULT} from "../constants/result";

export default function reducer(state = {
    conditions: [
        {
            "sum": "and",
            target: "Score",
            condition: "=",
            val: [
                0,
            ],
            redirect: "",
        }
    ]
}, action) {
    if (action.type == READ_RESULT) {
        if (typeof action.payload == "undefined")
            return state;
        
        if (action.payload)
            state = action.payload;

        return state;
    }

    if (action.type == CHANGE_RESULT) {
        let payload = action.payload;

        if (payload.type == "REMOVE") {
            let index = payload.index;
            let dstate = Object.assign({}, {
                conditions: state.conditions
            });
            
            
            dstate.conditions = [
                ...dstate.conditions.slice(0, index),
                ...dstate.conditions.slice(index + 1)
            ];

            return dstate;
        } else if (payload.type == "ADD") {

            let dstate = Object.assign({}, {
                conditions: state.conditions
            });

            if (dstate.conditions.length - 1 == payload.index) {
                dstate.conditions.push(
                    {
                        "sum": "or",
                        target: "Score",
                        condition: "=",
                        val: [
                            0,0
                        ],
                        redirect: "",
                    }
                );
            } else {
                dstate.conditions = [
                ...state.conditions.slice(0, payload.index),
                 {
                        "sum": "or",
                        target: "Score",
                        condition: "=",
                        val: [
                            0,0
                        ],
                        redirect: "",
                    },
                ...state.conditions.slice(payload.index)
                ];
            }            

            return dstate;

        } else if (payload.type == "CHANGE") {
            let index = payload.index;
            let dstate = Object.assign({}, {
                conditions: state.conditions
            });
            
            
            dstate.conditions = [
                ...dstate.conditions.slice(0, index),
                payload.result,
                ...dstate.conditions.slice(index + 1)
            ];

            return dstate;
        } else if (payload.type == "DELETE") {
            
            let index = payload.index;
            let count = payload.count;

            let dstate = Object.assign({}, {
                conditions: state.conditions
            });
            
            
            dstate.conditions = [
                ...dstate.conditions.slice(0, index),
                ...dstate.conditions.slice(index + count)
            ];

            return dstate;
        }

    }
    
    return state;
}