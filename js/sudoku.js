const sudoku = new Array(81).fill(0);

function GenerateSudoku(){
    sudoku[1] = 0;
}

function CheckSolution(){

    //horizontaler checker  mod ist maybe waaaaaay geiler
    var zeins = false; //zeile eins und so ykyk
    var zzwei = false;
    var zdrei = false;
    var zvier = false;
    var zfuenf = false;
    var zsechs = false;
    var zsieben = false;
    var zacht = false;
    var zneun = false;

    for(let y=0; y<=8; y++){ //y-achse abgrasen (i*9 als übersetzung in 1d array)
        var eins = false;
        var zwei = false;
        var drei = false;
        var vier = false;
        var fuenf = false;
        var sechs = false;
        var sieben = false;
        var acht = false;
        var neun = false;
        for(let x=0; x<=0; x++){

            switch(sudoku[(i*9) + x]){
                case 1:
                    eins = true;
                    break;
                case 2:
                    zwei = true;
                    break;
                case 3:
                    drei = true;
                    break;
                case 4:
                    vier = true;
                    break;
                case 5:
                    fuenf = true;
                    break;  
                case 6:
                    sechs = true;
                    break;
                case 7:
                    sieben = true;
                    break;
                case 8:
                    acht = true;
                    break;
                case 9:
                    neun = true;
                    break;
            }


        }
        
        if(eins && zwei && drei && vier && fuenf && sechs && sieben && acht && neun){
            switch(sudoku[y]){
                case 1:
                    zeins = true;
                    break;
                case 2:
                    zzwei = true;
                    break;
                case 3:
                    zdrei = true;
                    break;
                case 4:
                    zvier = true;
                    break;
                case 5:
                    zfuenf = true;
                    break;  
                case 6:
                    zsechs = true;
                    break;
                case 7:
                    zsieben = true;
                    break;
                case 8:
                    zacht = true;
                    break;
                case 9:
                    zneun = true;
                    break;
            }
        }



    }




    
}

