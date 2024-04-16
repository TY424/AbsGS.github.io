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
}

function objectSceneEvent(idx,selector_id,navld) {
    let dics = document.querySelectorAll('.b-dics')[selector_id];
    let sections = dics.getElementsByClassName('b-dics__section');
    console.log(document.querySelectorAll('.b-dics'));
    let imagesLength = 3;

    updateImages(sections, idx, imagesLength, 'object');
    updateTabStates(navld, idx);
}

function objectSceneEvent_pts(idx) {
    let dics = document.querySelectorAll('.b-dics')[1];
    let sections = dics.getElementsByClassName('b-dics__section');
    let imagesLength = 3;

    updateImages(sections, idx, imagesLength, 'object');
   updateTabStates('object-scale-pts', idx);
}

function objectSceneEvent_pts(idx) {
    let dics = document.querySelectorAll('.b-dics')[1];
    let sections = dics.getElementsByClassName('b-dics__section');
    let imagesLength = 3;

    updateImages(sections, idx, imagesLength, 'object');
   updateTabStates('object-scale-pts', idx);
}

// function dropobjectSceneEvent(idx) {
//    let dics = document.querySelectorAll('.b-dics')[1];
//    let sections = dics.getElementsByClassName('b-dics__section');
//    let columnNames = ['00', '10', '30', '50', '70', '90', '99'];
//
//    let imageSuffix = '00019.png';
//    let paths = [
//        `resources/drop/3dgs/${columnNames[idx]}/${imageSuffix}`,
//        `resources/drop/ours/${columnNames[idx]}/${imageSuffix}`,
//        `resources/drop/gt/${columnNames[idx]}/${imageSuffix}` // Fix for GT path
//    ];
//
//    for (let i = 0; i < sections.length; i++) {
//        let imageContainer = sections[i].getElementsByClassName('b-dics__image-container')[0];
//        if (imageContainer) {
//            let image = imageContainer.getElementsByClassName('b-dics__image')[0];
//            if (image) {
//                image.src = paths[i];
//            }
//        }
//    }
//
//    updateTabStates('dropobject-scale-recon', idx);
// }

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
    let folders = ['garden', 'bonsai', 'counter', 'flowers', 'bicycle', 'kitchen', 'room', 'stump', 'train', 'treehill',
        'bicycle_pts', 'flowers_pts', 'treehill_pts', 'room_pts', 'stump_pts',
        'bicycle_elli', 'flowers_elli', 'treehill_elli', 'room_elli', 'stump_elli'];
    return folders[idx];
}

function getImageFileName(imageIndex, sliderType) {
    let filenames = ['3dgs.png', 'ours.png', 'gt.png'];
    return filenames[imageIndex];
}