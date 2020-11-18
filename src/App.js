
import './App.css';
import './App.css';
import React from 'react';
import  FieldCard  from './components/FieldCard';

class App extends React.Component { 
  constructor(){
    super();
     this.state={ mainHead:'Ты сегодня покормил кота?',
                  cardsDatas : [{cardHead1Normal: 'Сказочное заморское яство', cardHead1Hover: 'Котэ не одобряет?', with_:"с фуагра",portion:"10 порций",  present:"мышь в подарок",   numb_kg:"0,5", bottom_head_normal:"Чего сидишь? Порадуй котэ,", bottom_head_disabled:" Печалька, с фуагра закончился", bottom_head_selected:"Печень утки разварная с артишоками", isSelected:false,  isDisabled:false,},
                                {cardHead1Normal: 'Сказочное заморское яство', cardHead1Hover: 'Котэ не одобряет?',with_:"с рыбой", portion:"40 порций",  present:"2 мыши в подарок", numb_kg:"2", bottom_head_normal:"Чего сидишь? Порадуй котэ,", bottom_head_disabled:" Печалька, с рыбой закончился",   bottom_head_selected:"Головы щучьи с чесноком да свежайшая семушка", isSelected:false,  isDisabled:false},
                                {cardHead1Normal: 'Сказочное заморское яство', cardHead1Hover: 'Котэ не одобряет?',with_:"с курой", portion:"100 порций", present:"5 мышей в подарок",numb_kg:"5", bottom_head_normal:"Чего сидишь? Порадуй котэ," , bottom_head_disabled:" Печалька, с курой закончился",   bottom_head_selected:"Филе из цыплят с трюфелями в бульоне", isSelected:false,  isDisabled:true}],
                }
  }//constructor
  
  render(){

    const cards = this.state.cardsDatas.map((item, index) => {
      return <FieldCard cardHead1Normal={item.cardHead1Normal} cardHead1Hover={item.cardHead1Hover} isDisabled={item.isDisabled} id={index} with_={item.with_} portion={item.portion} present={item.present} numb_kg={item.numb_kg} bottom_head_normal={item.bottom_head_normal} bottom_head_disabled={item.bottom_head_disabled} bottom_head_selected={item.bottom_head_selected} />;
    });

    return (
      <div className="container" >  
        <div className="center_block">
          <h1>{this.state.head1}</h1>
            <div className="main_field" > 
              {cards}
            </div>
        </div>  
      </div>   
    );
  }//render
}//class

export default App;
