// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const newposition = () => {
  return Math.floor(Math.random() * 15)
}


function pAequorFactory (specimenNum, dna){
  return({
    specimenNum,
    dna,
    mutate() {
      const position = newposition()
      const newbase = returnRandBase()
      if (dna[position] != newbase){
        this.dna.splice(position, 1, newbase)
      } else if (dna[position] === newbase){
        this.dna.splice(position, 1, returnRandBase())
      }
      return this.dna
    },
    compareDNA(pAequor){
      const similar = 0;
      for (let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === pAequor.dna[i]) similar++;
      }
      similar = Math.floor((similar / this.dna.length) * 100);
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${similar}% DNA in common`)
    },
    willLikelySurvive(){
      let survivalchance = 0
      for (let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G') survivalchance++;
      }
      survivalchance = Math.floor(survivalchance*100/15)
      if (survivalchance >= 60){
        return true
      }
    },
    })
  }

const survivingSpecimen = [];
let idNum = 1;
while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idNum, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
    idNum++;
  }
}

console.log(survivingSpecimen)
