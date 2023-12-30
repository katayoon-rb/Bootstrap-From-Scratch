const topics = [
    "1 Pricing Card",
    "2 Ratings Component",
    "3 User List"
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
                        <h5 class="fw-bold">${topic.split(' ').slice(1).join(' ')}</h5>
                    </div>
                    <div class="d-grid">
                        <a href="./${topic}">
                            <button class="btn btn-dark rounded-4 my-2">Go to Projects</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
}
