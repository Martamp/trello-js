"use strict";const toggleEdit=e=>{e.stopPropagation(),document.querySelector(".js-edit").classList.toggle("show"),document.querySelector(".js-edit").classList.remove("d-none")};document.querySelectorAll(".js-card, .js-edit-close").forEach(e=>{e.addEventListener("click",toggleEdit)});const preventEditClosing=e=>{e.stopPropagation()};document.querySelector(".js-edit-modal").addEventListener("click",preventEditClosing);import"./edit.js";import"./menu.js";const toggleMenu=()=>{document.querySelector(".js-menu").classList.toggle("show")};document.querySelectorAll(".js-menu-btn").forEach(e=>{e.addEventListener("click",toggleMenu)});