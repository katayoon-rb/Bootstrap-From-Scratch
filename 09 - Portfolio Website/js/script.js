document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.getElementById('typing-text')
    const text = 'I am Brad Traversy.'

    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
        typingElement.textContent += text.charAt(i)
        }, 100 * i)
    }
})
