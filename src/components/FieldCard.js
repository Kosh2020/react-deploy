import React from 'react';

import cat from '../img/cat.png';



class FieldCard extends React.Component {

 constructor(props) {
        super(props);
        this.state={isDisabled:false,
                    isSelected: false,
                    isSelectedHover: false}

        this.btnTapped = this.btnTapped.bind(this);
        this.onMouseover = this.onMouseover.bind(this)
        this.onMouseout = this.onMouseout.bind(this)
  }

 btnTapped(props) {
    if (!this.props.isDisabled){
      this.setState({isSelected: ! this.state.isSelected});}
  }

 onMouseover() {
   if ( this.state.isSelected) { 
        this.setState({isSelectedHover:'true'});}
 }

 onMouseout () {
    this.setState({isSelectedHover:'false'});
 }

 

 render(){
  
   //выбираем надпись под пачкой
   const BottomMessage=(props)=> {
     let mess=<div className={bottomHead} >{this.props.bottom_head_normal} < button className='bottom_bottom' onClick={this.btnTapped} >купи.</ button></div>;

     if ( this.props.isDisabled) {console.log(bottomHead); mess=<div className={bottomHead} > {this.props.bottom_head_disabled } </div>;   } 
       else if ((!this.props.isDisabled)&&(this.state.isSelected)) { mess=<div className={bottomHead} > {this.props.bottom_head_selected} </div> }
     return mess
   }//BottomMessage

   //Выбираем надпись над "НЯМУШКОЙ"
   const Head1Message=(props)=> {
     let mess=this.props.cardHead1Normal;
     if (props.isSelectedHover==='true') { mess=this.props.cardHead1Hover} ;
     return <div className="head1_card"> {mess} </div>
   }

   //элементы, кот перекрашиваются при disable, selected...
   let classNameBorderCard='card-border'
   let classCard='card'
   let classNameBlueCirce='blue_circle'
   let bottomHead='bottom_head'
   if (this.props.isDisabled){classNameBorderCard+=' disabled'; classCard+=' disable'; classNameBlueCirce+=' disabled'; bottomHead+=' disbl'; }
   if (this.state.isSelected){classNameBorderCard+=' selected'; classNameBlueCirce+=' selected'}
   
   return (
    <div className="Field-card" key={this.props.id} > 
      <BottomMessage isDisabled={this.props.isDisabled } isSelected={this.state.isSelected} bottomHead={bottomHead} bottom_head_normal={this.props.bottom_head_normal} bottom_head_disabled={this.props.bottom_head_disabled} bottom_head_selected={this.props.bottom_head_selected} OnClick={this.btnTapped } />
        <div  className={classNameBorderCard} onClick={this.btnTapped } > 
          <div className={classCard} onMouseEnter ={this.onMouseover}  onMouseLeave={this.onMouseout} >
            <Head1Message cardHead1Normal={this.props.cardHead1Normal} cardHead1Hover={this.props.cardHead1Hover} isSelectedHover = {this.state.isSelectedHover}  />
            <div className="head2_card">Нямушка</div>
            <div className="head3_card"> {this.props.with_} </div>
            <div className="head4_card"> {this.props.portion} </div>
            <div className="head4_card"> {this.props.present} </div>
            <div className="head4_card"> {this.props.satisfied} </div>
            <div className={classNameBlueCirce}  ><span className="number_kg"> {this.props.numb_kg} </span><br/><span className="kg">кг</span></div>
            <img src={cat} alt="Кот" />      
          </div>
        </div>     
    </div>   
   );
}
}

export default FieldCard;