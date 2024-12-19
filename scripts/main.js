import { names } from "./words.js"
// Title Animation - Randomly cycle title with various names
{
    // Animation config
    const PAUSE = 1500
    const DELETE_SPEED = 40
    const TYPE_SPEED = 60

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const randomName = () => names[Math.floor(Math.random() * names.length)]
    const title = document.querySelector("#rp-word")

    function deleteTitle() {
        let interval = null
        let i = title.innerText.length

        interval = setInterval(() => {
            title.innerText = title.innerText.slice(0, i) + "​"
            i -= 1
            if (i < 0) {
                clearInterval(interval)
                setTimeout(async () => {
                    typeTitle()
                }, PAUSE)
            }
        }, DELETE_SPEED)
    }

    function typeTitle() {
        const newTitle = randomName()
        const randomColor = getRandomColor()
        document.querySelector(":root").style.setProperty("--title-color", randomColor)
        let interval = null
        let i = 0

        interval = setInterval(() => {
            if (i >= newTitle.length) {
                clearInterval(interval)
                setTimeout(async () => {
                    deleteTitle()
                }, PAUSE)
            }
            title.innerText = newTitle.slice(0, i) + "​"
            i += 1
        }, TYPE_SPEED)
    }

    addEventListener("load", () => {
        title.innerText = randomName()
        const randomColor = getRandomColor()
        document.querySelector(":root").style.setProperty("--title-color", randomColor)
        setTimeout(() => {
            deleteTitle()
        }, PAUSE)
    })

    const cursor = document.querySelector("#cursor")
    let cursorBlink = false
    setInterval(async () => {
        cursor.innerText = cursorBlink ? "█" : ""
        cursorBlink = !cursorBlink
    }, 530)

    function getRandomColor() {
        const letters = '89ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 8)];
        }
        return color;
    }
}