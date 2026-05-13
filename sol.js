
function knightMoves (start, end) {
    console.log(`Start -> [ ${start} ] & End -> [ ${end} ]`)
    let visited = new Set()
    let parentMapper = {}
    let que = [[start, null]]
    const possibleTurns = [[2, 1], [1, 2], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]]

    while (que.length !== 0) {
        const currNode = que.shift()
        const curr = currNode[0]
        const parent = currNode[1]
        // console.log("The popped edge ->  " + curr + " parent -> " + parent)
        const key = `${curr[0]},${curr[1]}`

        if (!visited.has(key)) {
            parentMapper[key] = parent
            visited.add(key)
        } else continue

        if (curr[0] === end[0] && curr[1] === end[1]) {
            let store = curr
            let path = [curr]
            while (store[0] !== start[0] || store[1] !== start[1]) {
                store = parentMapper[`${store[0]},${store[1]}`]
                path.push(store)
            }
            path.reverse()
            console.log(`you made it in ${path.length - 1} moves! Heres your path: `)
            path.forEach (item => console.log(`[ ${item} ]`))
            return 
        }
        
        for (let i = 0; i < possibleTurns.length; i++) {
            const [x, y] = curr
            const [px, py] = possibleTurns[i]

            const pusher = [x + px, y + py]
            if (pusher[0] >= 0  && pusher[0] <= 7 && pusher[1] >= 0  && pusher[1] <= 7) {
                que.push([pusher, curr])
            }
        }
    }
}

knightMoves([3,3],[4,3])