function printText(text: string): void {
    console.log(text)
}

printText("Hello!")

function getText(value: string, text?: ( string | number)): number {
    return Number(text)
}

console.log(getText("333", 43))

function getError(err: string): never {
    throw new Error(err)
}

// Customs

type TText = string

type TIds = (number | string)

let id: string = "dsaa-sdad-2342-asda"

console.log(id)

// interfaces

interface IFamily {
    son?: IHuman,
    mother?: IHuman
}

interface IHuman {
    readonly id: TIds,
    readonly height: number,
    readonly weight: number,
    readonly name: string,
    readonly surname: string,
    middleName?: string,
    family?: IFamily
}

interface IPerson extends IHuman {
    gender?: string,
    setData?: (height: number, weight: number, name: string, surname: string) => void
}

const man: IPerson = {
    id,
    height: 180,
    weight: 80,
    name: "Josh",
    surname: "Vatson",
    gender: "neutral",
    setData(height,weight,name,surname): void {
        this.height = height
        this.weight = weight
        this.name = name
        this.surname = surname
    },
    family: {
        son: {
            id,
            height: 180,
            weight: 80,
            name: "Josh",
            surname: "Vatson",
        }
    }
}

man.setData(160, 40, "Vasya", "Petrov")
console.log(man)