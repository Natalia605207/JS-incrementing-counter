const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = Number(counter.getAttribute('data-target'));
        const initialState = Number(counter.innerText);
        const increment = target / 400;

        if(initialState < target){
            counter.innerText = `${Math.ceil(initialState + increment)}`;
            setTimeout(updateCounter, 1);
        } 
        else {
            counter.innerText = target;
        }
    }
    updateCounter();
})