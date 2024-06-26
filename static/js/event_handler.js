document.addEventListener('DOMContentLoaded', domReady);

function domReady() {
    new Dics({
        container: document.querySelectorAll('.b-dics')[0],
        hideTexts: false,
        textPosition: "bottom"
    });
    new Dics({
        container: document.querySelectorAll('.b-dics')[1],
        hideTexts: false,
        textPosition: "bottom"
    });
    new Dics({
        container: document.querySelectorAll('.b-dics')[2],
        hideTexts: false,
        textPosition: "bottom"
    });
}

function objectSceneEvent(idx,selector_id,navld) {
    let dics = document.querySelectorAll('.b-dics')[selector_id];
    let sections = dics.getElementsByClassName('b-dics__section');
    console.log(document.querySelectorAll('.b-dics'));
    let imagesLength = 3;

    updateImages(sections, idx, imagesLength, 'object');
    updateTabStates(navld, idx);
}

function updateImages(sections, idx, imagesLength, sliderType) {
    for (let i = 0; i < imagesLength; i++) {
        let imageContainer = sections[i].getElementsByClassName('b-dics__image-container')[0];
        if (imageContainer) {
            let image = imageContainer.getElementsByClassName('b-dics__image')[0];
            if (image) {
                let imageFolder = getImageFolder(idx, sliderType);
                let imageFileName = getImageFileName(i, sliderType);
                image.src = `resources/image/${imageFolder}/${imageFileName}`;
            }
        }
    }
}

function updateTabStates(navId, activeIdx) {
    let navItems = document.getElementById(navId).getElementsByClassName('nav-item');
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].children[0].className = (activeIdx === i) ? "nav-link active" : "nav-link";
    }
}

function getImageFolder(idx, sliderType) {
    let folders = ['garden', 'bonsai', 'counter', 'flowers', 'bicycle1', 'bicycle2', 'kitchen', 'room', 'stump', 'train', 'treehill','truck',
        'bicycle_pts1', 'bicycle_pts2', 'flowers_pts', 'treehill_pts', 'room_pts', 'stump_pts',
        'bicycle_elli', 'flowers_elli', 'treehill_elli', 'room_elli', 'stump_elli'];
    return folders[idx];
}

function getImageFileName(imageIndex, sliderType) {
    let filenames = ['3dgs.jpg', 'ours.jpg', 'gt.jpg'];
    return filenames[imageIndex];
}