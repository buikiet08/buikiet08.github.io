const chatbutton = document.getElementById('chat-button');
const chatmess = document.getElementById('chat-mess');
const closemess = document.getElementById('close-mess');
const ontop = document.querySelector('.button-top')
const header = document.getElementById('header')
const menu = document.getElementById('menu');
const buttonbars = document.getElementById('button-bars');
// icon messes
const iconCloseMesses = document.getElementById('icon-close-chat-messes')
// chat messes
const chatMesses = document.querySelector('.chat-messes')
// chat container
const chatContainer = document.querySelector('.chat');
// app
const app = document.querySelector('.app');
// reloader 
const reloader = document.querySelector('.reloader')

// sau 5s hiện button chat
setTimeout(() => {
    chatContainer.style.display = 'block';
}, 7000)

//reloader website sau 2s
function Reloader () {
    setTimeout(() => {
        app.style.display = 'block';
        reloader.style.display = 'none';
    }, 2000)
}
Reloader();
// on / off chat mess
// on chat
chatbutton.addEventListener('click', () => {
    chatmess.classList.toggle('activeChat')
})
// close chat
closemess.addEventListener('click', () => {
    chatmess.classList.toggle('activeChat')
})

// off chat messes
iconCloseMesses.addEventListener('click', () => {
    chatMesses.style.display = 'none'
})

// button on top ẩn / hiện
window.addEventListener('scroll', () => {
    if(window.scrollY > 500) {
        ontop.style.opacity = 1
    }
    else if(window.scrollY < 500){
        ontop.style.opacity = 0
    }
})
// click button top
ontop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})

// hiện header khi scroll
window.addEventListener('scroll', () => {
    if(window.scrollY > 200) {
        header.classList.add('header-scroll')
    }
    else if(window.scrollY < 200) {
        header.classList.remove('header-scroll')
    }
})

// xử lí bật tắt menu
buttonbars.addEventListener('click', () => {
    menu.classList.toggle('active')
})


// xử lý form mess
const nameInput = document.getElementById('name')
const mailInput = document.getElementById('mail')
const submitForm = document.getElementById('submitForm')
let aa;
submitForm.addEventListener('click', handleSubmit)
function handleSubmit () {
    console.log('nlalval')
    if(nameInput.value == '') {
        document.getElementById('error-name').style.display = 'block'
    }else if(mailInput.value == '') {
        document.getElementById('error-mail').style.display = 'block'
    }
    else{
        document.getElementById('error-name').style.display = 'none'
        document.getElementById('error-mail').style.display = 'none'
    }
}

// xử lý bật tắt setting
const settingButton = document.querySelector('.settings');
const settingBox = document.querySelector('.setting-box');
const settingClose = document.querySelector('.setting-box_close');

settingButton.addEventListener('click', () => {
    settingButton.classList.add('active-settings');
    settingBox.classList.add('active-settingbox')
});

settingClose.addEventListener('click', () => {
    settingButton.classList.remove('active-settings');
    settingBox.classList.remove('active-settingbox')
})

// xử lý chuyển đổi darkmode
const darkmodeButton = document.querySelector('.setting-box_darkmode');

darkmodeButton.addEventListener('click', () => {
    reloader.style.display = 'flex';
    app.style.display = 'none';
    app.classList.toggle('darkmode');
    reloader.classList.toggle('darkmode');
    Reloader();
    // if(app.includes(classList.add('darkmode'))) {
    //     darkmodeButton.innerHTML = `
    //     <div class="setting-box_darkmode-icon">
    //         <ion-icon class="sunny" name="sunny"></ion-icon>
    //     </div>
    //     <h2>Light Node</h2>  
    //     `
    //     console.log('hahaah')
    // }else{
    //     darkmodeButton.innerHTML = `
    //     <div class="setting-box_darkmode-icon">
    //         <ion-icon class="sunny" name="sunny"></ion-icon>
    //     </div>
    //     <h2>Light Node</h2>  
    //     `
    // }
})

// xử lý chuyển đổi màu button
const colorSetting =[
    {
        id:1,
        background: '#0c5adb'},
    {
        id:2,
        background: '#8176ff'},
    {
        id:3,
        background: '#6b9839'},
    {
        id:4,
        background: '#fd5c55'},
    {
        id:5,
        background: '#e350b8'},
    {
        id:6,
        background: '#46aeef'},
    {
        id:7,
        background: '#179ea8'},
    {
        id:8,
        background: '#d48b91'},
    {
        id:9,
        background: '#e76f51'},
    {
        id:10,
        background: '#457b9d'},
    {
        id:11,
        background: '#b18fcf'},    
    {
        id:12,
        background: '#d4a373'},
]
const settingColor = document.querySelector('.setting-box_color');
const colors = document.querySelectorAll('.color')
const buttons = document.querySelectorAll('.button')

colors.forEach((color, index) => {
    color.addEventListener('click', () => {
        colorSetting.forEach((e, indexe) => {
            if(indexe == index) {
                buttons.forEach( (button) => {
                    button.style.background = e.background
                    button.style.borderColor = e.background
                })
            }
        })
    })   
})




