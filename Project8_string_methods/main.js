const full_sentence = () => {
    let sen1 = "Hi there! "
    let sen2 = "My name is jacob its nice"
    let sen3 = " to meet you"
    let sentence = sen1.concat(sen2,sen3) //concatenates ll 3 sentences into one sentence
    document.querySelector('#concat').innerHTML = sentence;
}

full_sentence()


const slice_func = () => {
    let sentence = "Hi there my name is jacob, hows it going?"
    let newSentence = sentence.slice(3, 12); //selects the chracters starting at index 3 and ends at index 12
    document.querySelector('#slice').innerHTML = newSentence;
}

slice_func()

const string_func = () => {
    let x = 53
    document.querySelector('#string').innerHTML = x.toString() // converts x to a string value
}

string_func()


const precesion_func = () => {
    let x = 53.12922
    document.querySelector('#precesion').innerHTML = x.toPrecision(4) // rounds the value of x to tbe desired character count (4)
}

precesion_func()
