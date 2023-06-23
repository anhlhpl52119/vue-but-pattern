export default {
    getName: () => {
        return 'base name'
    },
    getAddress: (addressNum :number) => {
        return `address is: ${addressNum}`
    },
    getOther: (otherInfo: string) => {
        return `${otherInfo}`
    }
}