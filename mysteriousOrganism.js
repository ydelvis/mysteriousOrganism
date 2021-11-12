/* This project generates sample organisms with different DNA strands.
    It can also compare different organisms and determine their chances of
    survival based on their DNA

                                                        -By ydelvis

    #AmaliTechTraining   #Codecademy 
*/


// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // factory function
  function pAequorFactory(specimenNum, dna){
    return{
      specimenNum,
      dna,
      mutate(){
        let baseIndex = Math.floor(Math.random()* 15)
        let base = this.dna[baseIndex]
        const dnaBases = ['A', 'T', 'C', 'G']
        let newBase = ''
        do {
          newBase = dnaBases[Math.floor(Math.random()*4)]
        } while (newBase === base);
        
        console.log(`Mutating '${dna[baseIndex]}' at Index ${baseIndex} to '${newBase}'`)
        
        this.dna[baseIndex] = newBase;
      },
  
      compareDNA(specimen){
        let numOfIdentical = 0
        for (let i = 0; i < this.dna.length -1; i++){
          if (this.dna[i] === specimen.dna[i]){
            numOfIdentical +=1
          }
        }
  
        let percentageIdentical = Math.floor((numOfIdentical/this.dna.length)*100)
  
        console.log(`Specimen ${this.specimenNum} and Specimen ${specimen.specimenNum} have ${percentageIdentical}% DNA in common.`)
          },
        
      willLikelySurvive(){
        let counter = 0
        for (let base of this.dna){
          if (base === 'C' || base === 'G'){
            counter +=1;
          }
        }
  
        let percentageIdentical = Math.floor((counter/this.dna.length)*100) 
      
      return (percentageIdentical >= 60)
      }
      
    }
  }
  
  // Creating sample organisms
  const specimen1 = pAequorFactory('001', mockUpStrand());
  const specimen2 = pAequorFactory('002',mockUpStrand());
  
  //console.log(specimen1.dna)
  //specimen1.mutate()
  //console.log(specimen2.dna)
  
  //console.log(specimen1.willLikelySurvive())
  //console.log(specimen2.willLikelySurvive())
  
  // function to automatically generate 30 organisms that can survive
  function thirtySurvivorInstance(){
    let survivorList = [];
    let specimenNum = 1
    
      do {
      let specimen = pAequorFactory(specimenNum, mockUpStrand());
      if (specimen.willLikelySurvive()){
         
         specimenNum += 1;
        survivorList.push(specimen)
      }
  
    } while (survivorList.length <30);
  
    return survivorList
  }
  
  // generating 30 survivors
  const survivorSpecimenList = thirtySurvivorInstance();
  
  //console.log(survivorSpecimenList)
  
  // displaying speciment numbers of the 30 generated specimen and their respective dna
  for (let specimen of survivorSpecimenList){
    console.log('Specimen '+ specimen.specimenNum)
    console.log(specimen.dna)
  }
  
  