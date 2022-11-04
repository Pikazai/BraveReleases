const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://brave.com/static-assets/images/optimized/desktop-hero-screenshot@1x.png" alt="" />'
  title.innerHTML = 'Đây là server update Brave Tool'
  excerpt.innerHTML =
    'Brave Tool sẽ thường xuyên được cập nhật dựa trên bản cập nhật của trình duyệt Brave.'
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
  name.innerHTML = 'Pikazai'
  date.innerHTML = 'Feb 23, 1990'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
