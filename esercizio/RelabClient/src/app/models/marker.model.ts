export class Marker {
    icon : Icon;
   //Quando creo un nuovo marker e verifico quale label viene passata al costruttore, se contiene il testo   
   //“Gas naturale” o “Energia elettrica” (abbreviati in Gas e Elettrica) imposto l’icona e cancello 
   //l’etichetta
    constructor(public lat: number, public lng: number, public label?: string) 
    {
        if (this.label.includes("Gas")) {
            this.icon = new Icon ( './assets/img/fire.ico', 24 ); //da modificare per ogni icona
            this.label = "";
             return;
        }
        if(this.label.includes("elettrica"))
        {
            this.icon = new Icon ( './assets/img/battery.ico', 24 ); //da modificare per ogni icona
            this.label = "";
            return;
        }
    }
}

