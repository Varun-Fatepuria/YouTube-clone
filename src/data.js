export const API_KEY='AIzaSyBBRDLHm52LkbW9K3tt59ysoXe-MD0-zaY';

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+'M'
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+'K'
    }
    else{
        return value
    }
}