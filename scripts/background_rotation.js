// Load the root css variables
style_root = document.querySelector(':root')

// Set the images to be used
images = [
    'image2.png', 'image3.png', 'image3.png' 
]

function random_image(){
    // Get a random index postion of the images array
    array_index = Math.floor(Math.random() * images.length)

    // Change the --img variable based on the random index
    style_root.style.setProperty('--background_image', `url(static/${images[array_index]})`)
}

random_image()
