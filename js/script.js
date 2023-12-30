const topics = [
    "02 - Fundamentals",
    "03 - Fundamentals",
    "04 - Dynamic Js Components",
    "05 - Mini-Project Challenges",
    "07 - Ebook Website",
    "08 - Corso Training Website",
    "09 - Portfolio Website",
    "10 - Yavin Office Design",
    "11 - Vera Software Solutions"
]

const container = document.querySelector('.container')

for (let i = 0; i < topics.length; i += 3) {
    let thisTopics = generateItem(topics[i])
    thisTopics += generateItem(topics[i + 1])
    thisTopics += generateItem(topics[i + 2])

    container.innerHTML += `
        <div class="row mt-5">${thisTopics}</div>
    `
}


function generateItem(topic) {
    return `
        <div class="col-md-4">
            <div class="card rounded-4 shadow-lg border-0 mb-3 px-2 py-3">
                <div class="card-body">
                    <div class="p-2">
                        <h5 class="fw-bold">${topic}</h5>
                    </div>
                    <div class="d-grid">
                        <a href="./${topic}/index.html">
                            <button class="btn btn-dark rounded-4 my-2">Go to Projects</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
}
