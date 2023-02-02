let randomNumber = Math.floor(Math.random() * 100) + 1
        console.log(randomNumber)

        let count = 15;
        const compteur = document.getElementById("compteur");

        function choixNiveau(){
            const select = document.getElementById("niveau");
            const niveau = select.value;
            randomNumber = Math.floor(Math.random() * 100) + 1
            console.log(randomNumber)
            
            if(niveau=="facile"){
                count = 15;
                select.setAttribute("class","green");
            }else if(niveau=="moyen"){
                count = 10;
                select.setAttribute("class","orange");
            }else if(niveau=="difficile"){
                count=6;
                select.setAttribute("class","red");
            }
            compteur.innerHTML = count;
        }
        

        function testValeurSaisie(){
            const valeur_saisie = document.getElementById("number").value;
            const historique = document.getElementById("historique");
            const reset = document.getElementById("reset");
            const fin = document.getElementById("fin");
            let reponse ="";
            const resultat=document.getElementById("final");
            const tentative=document.getElementById("tentative");
            count--;
            if(count==0){
                compteur.innerHTML = 0;
                reponse.innerHTML = "";
                resultat.innerHTML = "Perdu ...";
                reset.setAttribute("type","submit");
                fin.setAttribute("class","front");
            }else if (count>0){
                compteur.innerHTML = count;
                if (valeur_saisie>randomNumber){
                    reponse = "est trop grand";
                }else if (valeur_saisie<randomNumber){
                    reponse = "est trop petit";
                }else if(valeur_saisie==randomNumber){
                    compteur.innerHTML = 0;
                    reponse = "c'est gagné !";
                    resultat.innerHTML = "Gagné !!!";
                    reset.setAttribute("type","submit");
                    fin.setAttribute("class","front");
                }
            }
            historique.innerHTML+=`<p> ${valeur_saisie} ${reponse}</p>`
        }