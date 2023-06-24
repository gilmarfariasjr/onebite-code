const arr = ["1ºnivel",["2ºnivel",42,true],[["3ºnivel","1ºitem","Olá, mundo!"],["3ºnivel","2ºitem","Olá, mundo!"]],[]]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[2][1][2])

const matriz = [
    ["l1,c1","l1,c2","l1,c3","l1,c4"],
    ["l2,c1","l2,c2","l2,c3","l2,c4"],
    ["l3,c1","l3,c2","l3,c3","l3,c4"],
]

console.table(matriz)

matriz.push(["nova linha"])
matriz[0].push("nova coluna")

console.table(matriz)