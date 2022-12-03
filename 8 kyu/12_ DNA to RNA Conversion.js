// DESCRIPTION:
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// Question:
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
}
// Solution:
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  // Create an empty array.
  let arr = [];
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      //   if char === T then we are going to push that char to empty array.
      arr.push(dna[i].replace("T", "U"));
    } else arr.push(dna[i]);
    //     else just return the same char.
  }
  const rna = arr.join("");
  //   join methods is used to convert array to string.

  return rna;
}
