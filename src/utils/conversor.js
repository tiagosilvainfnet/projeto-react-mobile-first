const detectVariant = (material, valor) => {
    if(material){
        return valor;
    }else{
        switch(valor){
            case 'contained':
                return 'solid';
            case 'outlined':
                return 'outline';
            case 'text':
                return 'ghost';
            default:
                return 'solid';
        }
    }
}

export { detectVariant };