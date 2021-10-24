const showAll = document.getElementById('all')
const showStudyItems = document.getElementById('study')
const showSocialMedia = document.getElementById('social-media')
const showEntertainmentItems = document.getElementById('entertainment')
const showWorkItems = document.getElementById('work')
const showStores = document.getElementById('stores')

const allItems = document.getElementsByClassName('col-md-1')
const studyItems = document.getElementsByClassName('study')
const socialMedia = document.getElementsByClassName('social-media')
const entertainmentItems = document.getElementsByClassName('entertainment')
const workItems = document.getElementsByClassName('work')
const storesItems = document.getElementsByClassName('stores')


showAll.addEventListener('click', () => {
    for(let i = 0; i < allItems.length; i++) {
        allItems[i].style.display = 'block'
         
    }
}) 

showSocialMedia.addEventListener('click', () => {
    for(let i = 0; i < allItems.length; i++) {
        if(allItems[i].classList[0] != 'social-media') {
            allItems[i].style.display = 'none'
        } else {
            allItems[i].style.display = 'block'
        }
    }
})

showStudyItems.addEventListener('click', () => {
    for(let i = 0; i < allItems.length; i++) {
        if(allItems[i].classList[0] != 'study') {
            allItems[i].style.display = 'none'
        } else {
            allItems[i].style.display = 'block'
        }
    }
})

showEntertainmentItems.addEventListener('click', () => {
    for(let i = 0; i < allItems.length; i++) {
        if(allItems[i].classList[0] != 'entertainment') {
            allItems[i].style.display = 'none'
        } else {
            allItems[i].style.display = 'block'
        }
    }
})

showWorkItems.addEventListener('click', () => {
    for(let i = 0; i < allItems.length; i++) {
        if(allItems[i].classList[0] != 'work') {
            allItems[i].style.display = 'none'
        } else {
            allItems[i].style.display = 'block'
        }
    }
})

showStores.addEventListener('click', () => {
    for(let i = 0; i < allItems.length; i++) {
        if(allItems[i].classList[0] != 'stores') {
            allItems[i].style.display = 'none'
        } else {
            allItems[i].style.display = 'block'
        }
    }
})