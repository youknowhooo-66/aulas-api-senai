let popA = 80000, popB = 200000
let cresA = 0.03, cresB = 0.015
let anos = 0

        while (popA < popB) {
            anos++;
            popA += popA * cresA;
            popB += popB * cresB;
        }

        alert("Após " + anos + " anos, o país A ultrapassou o país B em número de habitantes.");
        alert("População do país A: " + popA);
        alert("População do país B: " + popB);
