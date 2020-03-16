// Checks if noteText is contained in magazineText or not.
// But if a word is used twice in note, 
// it should be found twice and in magazine, etc.

function harmlessRansomeNote(noteText, magazineText) {
    let noteArray = noteText.split(" ")
    let magazineArray = magazineText.split(" ")
    let magazineObj = {}
    let result = true
  
    magazineArray.forEach(word => {
      if (!magazineObj[word]) magazineObj[word] = 0;
      magazineObj[word]++
    })
  
    noteArray.forEach(word => {
      if (magazineObj[word] > 0) magazineObj[word]--;
      else result = false 
    })
  
    console.log(result)
}
  
  note = "adipiscing lacinia Suspendisse dolor metus metus"
  
  mag = "Lorem ipsum ipsum dolor sit amet consectetur consectetur adipiscing elit Ut velit metus metus interdum quis risus id varius lacinia neque Suspendisse eget luctus lectus"
  
  harmlessRansomeNote(note, mag)