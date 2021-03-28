const arr = [1, 2, [1.1, 1.2, 1.3], 3];
function generateList(arr) {
    const result = document.createElement("ul");
    for (let i of arr) {
        if (Array.isArray(i)) {
            result.appendChild(generateList(i));
        } else {
            const li = document.createElement("li");
            li.innerText = i;
            result.appendChild(li);
        }
    }
    return result;
}
let list = generateList(arr);
document.body.appendChild(list);