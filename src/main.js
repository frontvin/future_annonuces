import moment from 'moment';

const dateElements = Array.prototype.slice.call(document.querySelectorAll('.fusion-timeline-date'),0).sort(
    (a, b) =>
        moment(a.innerText, 'MMMM YYYY') - moment(b.innerText, 'MMMM YYYY')
);

let currentDateElement = dateElements[0]

for (let i = 0; i < dateElements.length; i++) {
    const currItemDate = moment(dateElements[i].innerText, 'MMMM YYYY');

    if (currItemDate.isAfter(moment()) || currItemDate.isSame(moment())) {
        currentDateElement = dateElements[i];
        break
    }
}

currentDateElement.classList.add('current-date');
const scrollTo = document.getElementsByClassName('current-date')[0];
scrollTo.scrollIntoView({behavior: 'smooth', block: 'start'});
