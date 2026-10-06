const statuses = [
    [
        "✦ idk",
        "↳ add ideas here",
        "♡ hmm",
        "♫ sure music..."
    ],

    [
        "✦ wip",
        "wip",
        "wip",
        "wip",
    ],

    [
        "✦ wip cuh",
        "uhh",
        "hmm",
        "hello kieran r u still clicking"
    ],

    [
        "wip",
        "wip",
        "idk",
        "i said wip bro add your shits here"
    ]
];


function changeStatus() {

    const box = document.querySelector(".status-text");

    const random =
        statuses[Math.floor(Math.random() * statuses.length)];

    box.innerHTML = "";

    random.forEach(line => {

        const p = document.createElement("p");

        p.textContent = line;

        box.appendChild(p);

    });

}