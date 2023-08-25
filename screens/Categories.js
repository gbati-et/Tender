import { Text, View , ScrollView, TouchableOpacity} from 'react-native';
import React, {Component, useState} from 'react';
import COLORS from '../constants/colors';
import CheckBox from 'react-native-check-box';
import { Title } from 'react-native-paper';

const Data=require('../components/Data.json')


class Categories extends Component {
 
 
  constructor(props){
    super(props)
    this.state ={
      data:Data
    }

   }
   onchecked(id){
    const data = this.state.data
    const index = data.findIndex(x => x.id === id);
    data[index].checked = !data[index].checked
    this.setState(data)
   };

   getSelecteddata(){
    var keys = this.state.data.map((t)=>{t.key})
    var checks = this.state.datamap((t)=> t.checked)
    let Selected =[]
    for(let i=0 ; i (checks.length);i++){
      if(checks[i]==true){
        Selected.push(keys[i])
      }
    }
    alert(Selected)
   }


   renderdata(){ 
   return this.state.data.map((item,key) =>{ 
  return (
    <ScrollView horizontal={true}>
      
       < TouchableOpacity style={{flexDirection:"row", alignItems:'center',}}
       key = {key} onPress={()=> (this.onchecked(item.id))}>
        
          
              <CheckBox value={item.checked} onvalueChange = {()=>{this.onchecked(item.id)}} />
             
             
          <Text style={{fontWeight:"bold"}}>{item.key}</Text>
        
          {this.renderdata()}
     </TouchableOpacity>
    </ScrollView>
  )
     } )
   
}
render(){
  <Title>choose </Title>

}
}


export default Categories;