// Animations au scroll

const ratio = .1

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
    observer.observe(r)
})


// fonctions des boutons
const caseInGrid = document.querySelectorAll('.case')

function highlight(classe) {
    caseInGrid.forEach(element => {
        element.classList.remove('masked')
        if(!element.matches(classe))
            element.classList.add('masked')
    });
}