import SomethingApi from './something'

const repository = {
    something: SomethingApi,
}

export const useFactor = {
    basicUse: (name: keyof typeof repository) => repository[name]
}
const sd = useFactor.basicUse('something')