import axios from "./axios.js";
import { renderPrviewImage } from "./render.js";

const url = location.search
const newUrl = new URLSearchParams(url).get("id")
const singleImage = document.querySelector("#preview-image-contanier")
const video = document.querySelector("#preview-image")
const singleRender = (data) => {
     console.log(data)
     video.src = data.video_files[0].link + "?auto=compress&cs=tinysrgb&w=800&lazy=load"
}
fetch(`https://api.pexels.com/videos/videos/2499611`, {
     headers: {
          Authorization: "9M4xfzW8fOoURoq50RkevVJ3vZ5JsRtc9I8oPeW4sfprnJUcwuZo8Fk3"
     }
})
     .then(response => response.json())
     .then(data => singleRender(data))