interface Info {
    lable: string,
    student: string,

}

export const quarterinfo: Array<Info> = [
    {
        lable: "Block chain",
        student: "3500 "

    },
    {
        lable: "Network",
        student: "1200"

    }, {
        lable: "Panaverse",
        student: "550"

    },
]

interface Qdetail {
    number: number,
    name: string,
    detail: string,

}

export const quarterDetail: Array<Qdetail> = [
    {
        number: 1,
        name: "Q1",
        detail: "This is quarter 1 detail."

    },

    {
        number: 2,
        name: "Q2",
        detail: "This is quarter 2 detail."

    },

    {
        number: 3,
        name: "Q3",
        detail: "This is quarter 3 detail."
    },

] 
