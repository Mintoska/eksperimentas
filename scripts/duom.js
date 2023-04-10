export default class Salys{
  constructor({valiuta, linkas, populiacija, zemynas, salis, religion, dImage, id, karalyste}){
    this.salis = salis;
    this.zemynas = zemynas;
    this.populiacija = populiacija;
    this.valiuta = valiuta;
    this.religion = religion;
    this.dImage = dImage;
    this.id = id;
    this.karalyste = karalyste;
    this.linkas= linkas;
    
    return this.render();
  }
  render(){
    this.divCard = document.createElement('div');
    this.divCard.classList.add('card');

    this.heading = document.createElement('h1');
    this.headingText = document.createTextNode(`${this.salis} - ${this.zemynas}`);
    this.heading.appendChild(this.headingText);

    this.image = document.createElement('img');
    this.image.setAttribute('src', this.dImage);
    // this.image.setAttribute('alt', 'profile photo');
    this.image.addEventListener('click',function(e){
      // alert('ant paveiksliuko');
       this.bodis=document.querySelector('body');
       this.modalas1=document. createElement('div');
       this.modalas1.classList.add('modalas');
       this.modalas1.innerHTML="kazkokia info";
 
       this.uzdarymas = document.createElement('div');
       this.uzdarymas.innerHTML="x";
       this.uzdarymas.addEventListener('click',function(e){
        let bb = document.querySelector('body');
        let m1 = document.querySelector('.modalas');
        bb.removeChild(m1);
      });
      this.modalas1.appendChild(this.uzdarymas);
      this.bodis.appendChild(this.modalas1);
    });

    this.valPar = document.createElement('p');
    this.valParText = document.createTextNode(`Valiuta: ${this.valiuta}`);
    this.valPar.appendChild(this.valParText);

    this.relPar = document.createElement('p');
    this.relParText = document.createTextNode(`religion: ${this.religion}`);
    this.relPar.appendChild(this.relParText);

    this.popPar = document.createElement('p');
    this.popParText = document.createTextNode(`Populiacija: ${this.populiacija} mln`);
    this.popPar.appendChild(this.popParText);

    // this.linko = document.createElement('span');
    // this.linkoUrl = document.createTextNode(`explore more: ${this.linkas}`);
    // this.linko.appendChild(this.linkoUrl);
    this.linko = document.createElement('span');
    this.papildomasspan=document.createElement('span');
    this.papildomastxt=document.createTextNode('explore more: ');
    this.papildomasspan.appendChild(this.papildomastxt);
    this.lin=document.createElement('a');
    this.lin.setAttribute('href', this.linkas);
    this.lintxt= document.createTextNode("here");
    this.lin.appendChild(this.lintxt);
    this.linko.appendChild(this.papildomasspan);
    this.linko.appendChild(this.lin);


    this.karun=document.createElement('div');
    this.karunospav = document.createElement('img');
    this.karunospav.setAttribute('src', this.karuna() );
    this.karun.classList.add("karuna");
    this.karun.appendChild(this.karunospav);

    this.deleteButton = document.createElement('button');
    this.deleteButtonText = document.createTextNode('panaikinti');
    this.deleteButton.appendChild(this.deleteButtonText);
    this.deleteButton.classList.add("btnPanaikinti");
    this.delete();



    this.divCard.append(this.heading, this.image, this.popPar, this.valPar, this.relPar, this.linko, this.karun, this.deleteButton);

    return this.divCard;
  }
  karuna(){
  
   // return('uuuuuuu');
    if(this.karalyste === true){
     return 'pics/crown.png';
    } else if (this.karalyste === false) {
   return 'pics/one.png';
   
    }
  }

  delete(){
    this.deleteButton.addEventListener('click', () => {
      this.divCard.remove();
      fetch(`http://localhost:3000/salys/${this.id}`, { 
        method: "DELETE"
      });
    });
  }}





















