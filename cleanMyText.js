const cleanMyText = (text) => {
    let temp = [];
    text.split(' ').forEach((x)=>{
        if(x) {
            temp.push(x);
        }
    })
    if(text && temp.join(' ')){
        return temp.join(' ');
    }
}
