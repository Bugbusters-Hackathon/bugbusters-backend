import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export const readJSON = (path) => require(path)

export const getRandomInt=(max)=> {
    return Math.floor(Math.random() * max);
}