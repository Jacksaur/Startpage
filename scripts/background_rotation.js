// Load the root css variables
style_root = document.querySelector(':root')

function random_image(){
    // Get a random index postion of the images array - Number must match amount of images
    random_number = Math.floor(Math.random() * 5)

    // Change the --img variable based on the random index
    style_root.style.setProperty('--background_image', `url(static/image${random_number + 1}.png)`)
}

random_image()