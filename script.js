'use strict';


const images = [
    {'id': '1', 'url':'./images/hena.jpeg' },
    {'id': '2', 'url':'./images/awl.jpeg' },
    {'id': '3', 'url':'./images/zebra.jpeg' },
    {'id': '4', 'url':'./images/flamingo.jpeg' },
    {'id': '5', 'url':'./images/birds.jpeg' },
]


const containerItems = document.querySelector("#container-items")

const loadImages = (images, container) => {
    images.forEach(imagem => {
        container.innerHTML += `
            <div class="item">
                <img src="${imagem.url}"/>
            </div>
        `
    });
}

loadImages(images, containerItems);


let items = document.querySelectorAll(".item");

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll(".item");
};

document.querySelector("#previous")
.addEventListener("click", previous);


const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll(".item");
}

document.querySelector("#next")
.addEventListener("click", next);