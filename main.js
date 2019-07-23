const pictures = ['image1', 'image2',
    'image3', 'image4', 'image5',
    'image6', 'image7', 'image8', 'image9', 'image10', 'image11', 'image12'
]

const img = []
for (const picture of pictures) {
    img.push(`<div class="mask">
<picture>
<img class="image" src="img/${picture}.jpg" alt="${picture}">
 </img>
</picture>
</div>`)
}

const $gallery = document.getElementById('gallery')
$gallery.innerHTML = img.join('')

const images = document.querySelectorAll('.image')

const popup = document.querySelector('.popupimage img')

const sit = document.getElementById('popup')

for (const image of images) {
    image.addEventListener('click', function (e) {
        const newsrc = image.src

        const Title = document.getElementById('popupTitle')
        Title.textContent = this.alt
        popup.src = newsrc

        sit.style.display = 'flex'

        console.log(newsrc)
    })
}

span = document.getElementsByClassName('close')[0]
span.onclick = function () {
    sit.style.display = 'none'
}