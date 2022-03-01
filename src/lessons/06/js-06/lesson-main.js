
const actionBtnRef = document.querySelector('.actionBtn');
const clearBtnRef = document.querySelector('.delAtributeBtn');

actionBtnRef.addEventListener('click', () => {
    const imageRef = document.querySelector('.hero__image');
    console.log(imageRef.src);

    const isBtnPressed = actionBtnRef.classList.contains("js-completed");

    if (!isBtnPressed) {
    imageRef.src = "https://dictionary.cambridge.org/ru/images/full/cat_noun_001_02368.jpg?version=5.0.213"; 
    imageRef.alt = "gray cat";
    imageRef.width = 250;
    
    actionBtnRef.textContent = "previous cat"
    // actionBtnRef.classList.toggle('completed', 'done')    
    actionBtnRef.classList.add('js-completed')    
}
    if (isBtnPressed)
    {
    imageRef.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRYVFhYZGRgZHRwcHBwYHBocIR0jHhwaHBwcHxwcJC4lHB4tHxoZJzgmKy8xNTU2GiQ7QD00Py40NTEBDAwMEA8QHhISGjEhISE0NDQxNDQ0NDQ0NDQxMTQxNDQ0NDE0NDQ0NDE0NDQxNDQ0MTQxNDE3PzE0MTQ0ND0xNP/AABEIAKgBKwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIHAf/EAD4QAAEDAgQEBAMGBAYBBQAAAAEAAhEDIQQSMUEFUWFxBiKBkTKh8BNCUrHB0XKS4fEUI2KCorIVBxYzwtL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAB8RAQEAAgIDAQEBAAAAAAAAAAABAhEhMQMSQTJxIv/aAAwDAQACEQMRAD8A+MoiICIiAiIgIiICIiAr/wAOcDOIkkhrR946Dv8AWyoFvsE37LDUW6FwLzz8xkf8cqznbJw1jN3l+Yr/ANPnOaXYeqyo7XJOV3Zs2PRYuvhn03OY9pa5ky1wIIOmh6wt9hMU5pBDnCNC2DHWCtDj+H0uKUnNdlZiWtAZV/HuGP3iR3Ee/PHOz9NZYz4+Lou+Mwj6T3U6jS17CWuadQRqFwXZzEREBERAREQF3wuGfUcGU2uc42DWgkn0Ck8G4TVxVVtGiJc7nYADVxOwHNfXcDg8Pw2madEZqpEPrEDM4/hb+FnT3lZyy9WpjthsH4CxIbmqNawmPK5zc3P4Z5wPdZziuDNB5YQQ7edfr+i32Kx7ySS4g8+fr/ZUnjCgatOjXEF2Y03nuMzCfRr79FjHK71WssZrhjdu5/L+68rpWN7aCw/f1ufVc11cxERAREQEREBERAREQEREBERAREQEREBESEEjBYc1HsYNXED3K33EmjNlbowBoHaAFlfCMf4qlP4hHuOa11em5znQZvaFy8l5jr4/rhTpmP2VnwwvBzNc6RoRpaDGny0XCi1rS2fN0Ebq5pYarGbMGbzew7C5NtNFjtpB8d8FGNof4ukAa9JsVGtM52D7w5ubf0nkF8lX27DvLH/aMdmI1ny5hvmEaLC+OvDQpO/xNAf5FQk5Rf7N2pbb7s6Fbwy+VjLH7GLREXVzEREBdaVMuMAEnkLkzYADczsuS+jeBeDtosbjKrQXkzQYeegqkcmy7L1M7BTLL1m1k3Wk8OcJbw3DgOgYqsAXzcsGopiOW/WeQXHEuD9576nqVKoAPeXPJe86mJ9OQEq2pYRrtWj3ZHzBXHu7deoxeOwpA0t0UHGYfNhMQ2YLRnHTLqPVpd6d19BxeAw7RL3AdJJn8lQV20T9oGMc4ZHglxiRlJiBtbZOqu9x8bRSsTiJMNaxo6CT6ucSfmoq7uAiIgIiICIiAiIgIiICIiAiIgIiICIiAgRAUF/4cw7hWpVLeVzXXIBgEE+kSLr6UzhRcSHEx0LPYy5fIcA//MbImSB1vay+x4mix0XMaHcAix7GQQuWfcdME/C4ClSEtYC/8Tzf3sFxxb6+zABzDm39QbnvKo8Rw9w+AuI/0OkerdR6/NRqHEa1F0EZm7tIie41B+oU21pYOc7R1jH3m5XDqCIzAH815wdRr2vw1WMj2ls6/wALgeYkX+a/X49jgYgsNi38M827dxCh4MjOQTLbRqZnrvp81irGMxXhpzHPYXDM0kR+XobKL/7fq9Pf5LceI+H56hqh4aCBMwNBE9Vm6mLa0EZifX65/JdccrWLjFczw7U+85o5DWVz/wDBVJ1ETrKsn44TM9F1wtYPJAN48oPVa3Ymo58E8NCrWYxz4Bu6LwAJMLcY4sc8Nb5WNhrQNmtENHQKD4YwrqL3Vag+6QIvrz20UnMc+lhGvYf1XHLLddMZqLSi42ayB6fpy7qU/EZBdxc7roPTT67BQ6dQxb1i313UHEF5JDdd3foJ0HzSGnjH8SdmLQ4ydSPynX0XkYlzGVXTMU3nzfwEAchci67YfhrgQ5xDeQOv8qcVotbha72TMNEnzH4heCI2T6vEj5bjKIjM0EDdpkkHubkdf6TXlSquLcXEzY7G9lHeBsvQ87yiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgn8DZmxFBvOoz/sJX0nidZ9Cm14k53vJ6AvcW9gYC+Y8OeW1GOH3XNPsZX1zjeKpvDA27HNbHQjb1mFy8jr42fwuNL3hwfkJtMGR7D9VpaNdwaM7ftGx8UBw0nlI9jCyjAxpa4aT2nn+a0NDGZMxmGu8wgnoZEzeb+qxK3lHvFMokFzW5S6xaTY7n69VXPyhnxERuLOPr9TOq447EebyOkOjynYjcXjr8lQ1qz3mB67AEWnp/VXW0258QxRdmzPcR1KpS5z5yizR9fkrHG4N58sxfTqbD9FDdhnUyxpJ8+vKLW73XTFztRZIAnfr9dV0ZVLSDsDBXN7I6EH91M4fhw9xpm8szSBMESbrSL3AY0gNIc4tJA1PzHdavDvYct5uTynTflO/RYLCYB7ct5iZA/T5d1bMrva/I4n++ontIXHLGOkre06zLNa3M42tYDtyHXXuVyxlYsFvKXWsL9bnT5dlA4bimhuWCJE9ut9+qsRRYfO4AwLC+9tN+Xv6xqKmjxMUyXvE8pJJNp+gp+IrirSD2DyPZVBbe7msJHtEKrx2VzzMDXewmREC4urvD1GMwTxMBgIHctIJ9S5Zna5dPiBAOkg9b/PZeHL3WYWuIOxXMlep5hERAREQEREBERAREQEREBERAREQEREBEX60SUE/hGHL3229FsW0qj2AXsLZraet1L8P4FtKg0gNzuA8zbn3Vxh6ceZ+Wfq0Lllly64zhkzhajS3NETv+vsrZrCfI2Yk67HcD5/RUrFBtTQdv6Lq2hkaCb/6txG97kf2WWkSnw6GEwfLfmdNPmVXcFe01H03sG8HoZmd+RkK74nxmjRpw8noABLvnI91mR4qw+drjhnSNHZhI6jn7qyVLUHG03uxf2UOs6IPzM9lZ+LcOGnDxBLXNBjeYJHzHyXWlVp4uv9tScWvaPhMciJj61UXiLnvxDKbvK4G09HA5r9ArvlNcM5iaLg9zi0nzk8pkzAWo8IYJn+IriZhtuUG095XfHcN8gaXZnS5z3wfvGA4dpC8YZhpV2tYM7niXAX3tpbW/JLluJMdVWYrPSxZpgktLh+djP6q/41UZTexuQvJFyAYGwE8/rUr3xLC0sPWbiMQb2Ab1E6bnXZRKvirBuqZ3UXk6BxDYaP8AS0m3tdTv4vS2p0Ja14/D7b/nCknFFrGtEBxBjmANO2vzlWHDOIYavThj2XF7FpH8QN5UR9AVHktIltjaBbS2/wDUrLTMNw1bzOa2WgmSec3jfVT8biHDD5CCJiQJAt36RsrzAMDBlLfL15/uvXEME17SIBbtAveVYXl8d4i2Hm4P1uoitfEOAdRrOaZg3HZVS7RxoiIqgiIgIiICIiAiIgIiICIiAiIgIiICmcPw+d4aAdddh3soa0Xhaoxr8zh5gbax3iblS9LO30TD4YUqLRuAO2nWFTV3OLiXWHNWeIxZeyRAHZY/inEHNJaHEwuWt116i5q8VZTvOa21ukHYqCzjeIrvDaVMSbDNKoGS4S6dd1oPDnE2U3DNGvS3v+4VuOozvlx4lwlzq0VCXFrZdymTp0/dS+B8awNBzqWJwxq5iIIa10SAAILhvNwd1qONYYnJiqLS9rh5mi5c0wCLTsB2Letsu/BYV1QVftC1wkhjgQ4HlG95XL3uOW7NzTp6e01Lyj43DUsPjGVaGZtMvAg/hdb2BKufHeGDauGqNkEmDGux/NUHHHPLmHI5rJLml7S3NlvvqNFd4viLcU7DhhksbnffQwBE7brWNtktTLGS6iwYQ4Nzakt15GR+YHsu3hHDh+OxDnaMY1rZ/wBRJk9V6Zh/OAQQMtptcEEGTyJGvJcKPEG4XEPqGAKjNdBIPXdJSxU4/DtxWNrPqXp035WtHIQXETuTKlY3iPCX03UaVFzK0loDmkGQYLswLmkQCdfRVXDcU9j3vLHOpvJe/KC7JmvMDQdVJPDsJ9r9ucQ2/wCG59hN4tose/rbLO+mrhuSy/1y4Pwx9Kv/AJbgA5pIDtJBFuguF6PiLE0HubUpMB6SR6HQ+q1nh/Cl7ziXsLKbWwzNYkCfNfnqezVnPEPEaVZssvLoGUaxN4Gndbw3ZPZnPW+HT/zP2h8ohwNr/wBFdcPrPcACJjZfPqrzSeHaaGJvstNwfiYqRJAK1Ykp4+4cx1IPgBzTII+YIC+Xr6/4kpF9FwiY6/ruvkb2wSORXTG8MZR4REWmBERAREQEREBERAREQEREBERAREQFO4XXLXgDf61UFdKVQtMj5INjV4hULMrTY8oUengp80wd7grrwpoewEzHXc8gJutPR4czJLy0HlN7c407LneHScsZWe4nK0F3yHtN1EcwNd5wfrstBisRSZMHtF/7qrfiQ+QfSNfYKypYv/DniB9AQyoSAPgeS5rufUFbDA+O6eY5qAmBcBov1kz/AGK+TOZUYIuB7FSMPjHMv87FS4yrKv8Ax7xj/EvaQ0tIEBvfnG6r/CtQMloMuJv3H6CfkvGTPLhJJ2F9+l08PvZTqEvcGw61u0256rNn+dRqfrdfTMDgS4B83g3PXuPRY3xhBYWPNwcwPsPRbPAcYw7WBv2jD6gwOqxfiuoyoCWPa90gGCNJGsfmuWG98t5a0i+B+MnDVQ5wtGUjWb7dVu8T4mwGbOMM0v1JyMDhtPXVfOK2BDAHOlsDWNY5EKO/E5wS3UXsJJPVddS3bnvXDV+KPEb6zSxp+zZHlYA6X7GTyWUwQbmDQCY1BK40Kjy4eYNB57dp/RW7q7KIGUZ51cbj+YbrXSdvNak17w1zSOmvrZdcHQbRfma4xvIgdr6qXg8X9o9oa4W2JH0FacS4cx7fN5HRqDH/AG8pHqs7V7x2KY5ljEjlF45/ovlHEhFR0Een1Yrf1KL6dMtMPHITP8uo9lguKf8AyG0d1vFnJCREW2BERAREQEREBERAREQEREBERARF2FK0usNuZ7Dl10Qc2tJMASeimU6TWkZyCfwi8d4/6yO40UY1NmiB8z3K7YdoaM7gCNGg7nmRu0b87DnAarhVUNAm7yNXRIbFg1rYyk7CbDvabj6VVzfLYcgQVnuGTOYiXEyTMzN56rSsquc0D6+QXOukUtHhz3GMx+f7qY3h7aZ8zzP1zVjRwbx5yQ1v4nCJ6AauPYLjiMUxrhLPtHa+eQB1I29Z9FndV+0uH5x5nwwEXItHSdVLxOF4bljJWHlMvFxY3MDQnsrHAV2vDSWNzG7BpbWQ37rba9Cpb8bXc6AymGNgy/Tp2vHupyr34O4dhmF4ZiA/NAawiCy0xcSTF1VePvBbg52Jwwnd7Be+5C1GCc9nmD6TSRcBu/P2VlUxTiJOXqen5BJvey34+AtxJIBI2JX0TwF4MfWLMTiIDNWs57gu9bwqrFcPwx4jED7MjMW2yl5N2/wzsvqGE4k5oAAZECLwtZXfDM4UXjXgtJ5ZnxDaTLgtNy+0wOUCTZUPDuA8OkBmJfnLAQTob2Og5aLa42pnlxZRc69yZ7SDpy9VWsqObDXYakWaHLBG0iIjmY6LE3OG+2fxXBG0fKQHtJNxl/ZVOJwFEnyOh2ljcdD0Ws41WptYSBDTqPiaOWvwjloFlqDaLnEtljtgLh3obT6hWIg4XCPp1bgC9nDT2/ZafFYrM1jcoLvr5Li94ezK5s8nDbvImPkdiV0OHaxuYG462Pp+ivYzfG8a5oyHzMIIgzI/hcJgg9I7rLYhrwCWvL2dTmy9HNJIHfTqtdxtgeDA11ixn9ljqtNzHZmEyOViOfcdl0xc8kM1J1A9LfIW+S8WUvK1+kNf0+F3/wCXfI9N4hbBgrTL8REQEREBERAREQEREBERAREQdGEC+68ucSZNyh/JGNJIA3QdKNOTJsBcn9B1Oy6PfmcLQBYAbD6vO5JO68VnbN+EfM8/26eq80GEkR+yC+w7RDQAXEwABqTsABqT0VicUykY8rnjUasYeXJ7h/KP9W0rBUslPKfjePM6IyNI+AHZxHxHacv4lWs4flfoS0XMch+uw7rDa4oYxz4c4uc52kwTYxMbCbADftC91MJOjczyYj4oPXZ7p20G86Dw3EuaIcWsdEQCPIPwiTrz5aayrLhbSwtH4gLmCGgiZJG5Em2jecqKiYTD1GO1zF587iZznXJP4G2LjvHLKrE8SZUn8DTZxtmyfE7u6XQOQItCk1crmkj74c1g3DRMnuXg/wAsLNcRw+UOYzTKSI3DXBrSOhc6sf8AeFBo6gL2+R+82jp/VdKfCKjgMzyQdRMLMcKrPpEEyBDZnsJ19VsMH4lYZkQBEH67JpNuL/CzC7Q5h9a+q/RwyqweR7oGx+uauhxinbziTouFfjDBvNk0u1dRD2jzkagX6gzPPkvJx7KbJbJE+YjWJDZG0gFh65wq3HY37R8ZrAj+8crlV7qwAD58v3wdmn/LeB1gsI/hUE/G4aoXA5hldIBFwCb5HAyHMcCHCRoehCjf+KF3NlrmfEzWBzbOoHvfUjT1w7HZWupvdIaS0xcgNcSSOZZJI5gPH3l3xWL82UuDKjDlDwbQdJOwvIOml4Nro2/MBijPmi294PPS4PUX7rvjnhwsdB6xroNY5t9ouqGljXmSWhrmmKjdIvGcD8M2I2JtY2/amL/iEctuRBH5poSagkZbem/UHQhZnimEuSNlrsNkeLX3IiO7mjQHmBY69qvjGHI210Ok/L5Kylm2EfM3Xec4v8Q35jr9cuq642iZUVhykH6PMey6Obki7123nY/X5EesrggIiICIiAiIgIiICIiAgRAEBdfhHU/l/X8u65Ar9JQAFa8Gogvzuu1kuI/EQC4NjeYJjcNKqVbYOsGtAIuWvdIsdC0X3IGfX8SlF1TrOALi4kuvLtSTqb21XTDuLWF5NyfLPMb9hM9w3quGC+AlrpHWx9l+4mhLwzO0ZAG6kX+J2lvic5ZbRqbpcS6C1gzOubwYDdN3Fo9Sdla4THPeCQDmqHI3/i55sREksH8wUHHcPy0wMwl5zGCbhstZ8y/2C8jMwsgHyUpmN3Bzmn0dUZ7INC6q9ry9slrGAt0vDQ1p1Ju7Xq5xVTi67y8AuhuVogGNWAmd9XEqNg6xcx4e/KA0Ce72uiBrof5l0xNVjHAtfmcWNiASbDKTy+Jp9lBCexxeGkkvbrJmBr+/uprKhDfr/UP0XLC0so+0dMcz8l6xZLLRpM+plB1OOdaSYGi/K2LzEnOQbRtp9BcsDVa8FsDNFgd42nYqQMCx3mExuNwRqP6Ir8/xLniZ8+zm8t8w3/O684biALsj2kFwc22kuaWjW9zHsFzfhSzz03BwFy02I6wuTMc172BzACHAyOhkn2CaHWrUBLKzCZyg+rSWkmfinKCbbqRjqTarGPZbK0DX7kkBvXI45OvoqmiyWMAeAc7wJDvw07WH1K0ODwQyNDn5QJaTES14yvJHQ5YSojuc3MXmc7PikSHNJyyedjlPMEciV1NENHlcSCJG1jpI57WtIULDYRzKpM5iCcw05hzexEhW+IwxYyILsjoBtJa7zNP5n/ciuGEe1sOAcSND9BTcQzMBsHXA/C7cdjb3HJccM0kTGuv1spzMMCxwm8Tfpr8pUVjOJUNeapKlNavimH82aZm576HT39Vn8VShbjGUQi7yxyPyv+v5rkvTgvK0yIiICIiAiIgIiICIiAgREBERABVpQxHmaPKRlAggbtk/MlEUo0nBKzHQA2DO2lrm/ZccbgHOeSLd4OlkRYvbpHvG0gxrBmFmDcbku/NxXGs9zgYcTNNkAnk5jD/yY5EVRGpYQhlQTJIafZ7Rr6r3h6ZDMoALgSbj7puQOgN/9x5L8RRXviGIdUAY0QxkTGrjuSvWLxmZgYR54AJ7H9h80REQqdPJVDSYzAEd1bNqhhM6OsehHP8ARESkRcQxxdLHfMA+x1UZ2HiSYzEEBo1GYEOJGwgkDvOy/URXenhQ1jJA+J5joQwT0+E+y/RicxcxrtWu2P3fP/8AWPVEUGkwPD3ZnuIBJe6Lx94xfmunEnwPMD8OwGrXgDofK4IiRar8PUI+8SO0FTKIDjo4jnHOx3REFJjKVxrGY69mqJj8I0CQiLUSs7XbBUcoi25iIiAiIgIiIP/Z"; 
    imageRef.alt = "red cat"
    imageRef.setAttribute('width', 300);
    actionBtnRef.classList.remove('js-completed')    
    }
    
    
})

clearBtnRef.addEventListener('click', () => {
    const imageRef = document.querySelector('.hero__image');
    console.log(imageRef.src);
    imageRef.src = "";
    imageRef.alt = "";
})

actionsBtnRef = document.querySelectorAll('.js-actions .btn');
/*
console.log(actionsBtnRef);
console.log('"dataset"')
console.log(actionsBtnRef[0].dataset.act);
console.log(actionsBtnRef[1].dataset.act);
console.log(actionsBtnRef[2].dataset.act);
console.log('"getAttribute"')
console.log(actionsBtnRef[0].getAttribute('data-act'));
console.log(actionsBtnRef[1].getAttribute('data-act'));
console.log(actionsBtnRef[2].getAttribute('data-act'));
*/
// /*
console.log('"For" by "dataset"')
for (let index = 0; index < actionsBtnRef.length; index++) {
    console.log(actionsBtnRef[index].dataset.act)
}
console.log('"For" by "getAttribute"')
for (let index = 0; index < actionsBtnRef.length; index++) {
    console.log(actionsBtnRef[index].getAttribute('data-act'))
}
// */

/*
// """forEach""" will be the best for this action
console.log('//////////// Dataset \\\\\\\\\\\\');
actionsBtnRef.forEach( a => console.log(a.dataset.act));

console.log("//////////// getAttribute \\\\\\\\\\\\");
actionsBtnRef.forEach( a => console.log(a.getAttribute('data-act')));

const currentPageUrl = "./GOiT-Lessons/GO-IT-JS-lesson-06.html"
const linkRef = document.querySelector(`.nav__link[href="$CurrentPageUrl}"]`)
console.log(linkRef)
*/

/////////////////////////
console.log(document.querySelector('.hero').children)
console.log(document.querySelector('.hero').firstElementChild)
console.log(document.querySelector('.hero').lastElementChild)
console.log(document.querySelector('.hero').children[1])
console.log(document.querySelector('.hero').previousSibling)
// console.log(document.querySelector('.hero').nextSibling.firstChild.textContent)


////////// Creating in the memory, doesn't automaticaly add into document
const titleRef = document.createElement('h2');
titleRef.classList.add('section-title');
titleRef.textContent = 'Learning to create by "createElement"';
console.log(titleRef)
////////// DOM
document.body.appendChild(titleRef); // like a last child


const heroContainerRef = document.querySelector('.hero > .container')
const imageChangingMenuList = document.createElement('ul');
// actionBtnRef 
// clearBtnRef 

const groupBtnRef = document.createElement('button');
groupBtnRef.classList.add('Btn', 'groupBtn');
groupBtnRef.setAttribute('type', 'button');

groupBtnRef.textContent = "Regroup it!";

groupBtnRef.addEventListener('click', () => {
    /*
    imageChangingMenuList.prepend(groupBtnRef);
    groupBtnRef.after(actionBtnRef);
    imageChangingMenuList.append(clearBtnRef);
    */
    imageChangingMenuList.append(groupBtnRef, actionBtnRef, clearBtnRef);
    // heroContainerRef.appendChild(imageChangingMenuList);
    // heroContainerRef.insertBefore(imageChangingMenuList, document.querySelector('.hero__image'));
    heroContainerRef.insertBefore(imageChangingMenuList, heroContainerRef.firstElementChild);
})

heroContainerRef.prepend(groupBtnRef);


