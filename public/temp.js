createMarkUp(){
    var styles=[];
    var markup=[];
    
    Object.keys(this.state.structure).map((tag)=> {
        styles=[];
        Object.keys(this.state.structure[tag]).map((key)=>{
            return styles.push(`${key}:'${this.state.structure[tag][key]}'`);
        });
        if(this.props.item===undefined)
        return markup.push(`<${tag} src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2297835/2018/3/14/11521020286596-Roadster-Men-Tshirts-4241521020286395-1.jpg" style={{${styles.join()}}}>${this.state.structure[tag].name} </${tag}>`);
        else
        return markup.push(`<${tag} style={{${styles.join()}}}>${this.props.item[this.state.structure[tag].name]} </${tag}>`);
        
    });


    return {__html: markup.join()}; 
}