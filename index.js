let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.textContent = 'Rizzo'
content.append(header)



let firstDiv = document.createElement('div')
firstDiv.setAttribute('class', 'dog-content')


let image = document.createElement('img')
image.setAttribute('class', 'dog-image')
image.setAttribute('src',  './assets/rizzo.jpg')

let secondDiv = document.createElement('div')
secondDiv.setAttribute('class', 'dog-details')


let h3 = document.createElement('h3')
h3.textContent = 'Description:'

let p = document.createElement('p')
p.textContent = 'This is gentle dog is aloof toward her owner, and never comes when called. She always scts as though any stranger she meets will harm her, and dislikes other animals.'


let feedTime = document.createElement('h3')
feedTime.textContent = 'Feeding Times:'


let unOrderList = document.createElement('ul')

let list1 = document.createElement('li')
let list2 = document.createElement('li')
let list3 = document.createElement('li')

list1.textContent = '9:00 am'
list2.textContent = '12:00 pm'
list3.textContent = '5:00 pm'


content.append(firstDiv,secondDiv)

firstDiv.append(image, secondDiv)

secondDiv.append(h3, p, feedTime )

secondDiv.append(list1,list2,list3)









