function letter(col)
{
    var letterarray = ["a","b","c","d","e","f","g","h"];
    return letterarray[col];
}


function drawboard() 
{
    var drawTable = "<table id='candytable' width='320' height='320' align='center'>";
    for(var row = 0; row < 8; row++)
    {
        drawTable = drawTable + "<tr>";
            for(var col = 0; col < 8; col++) 
            {
                var colName = letter(col);
                var cellColor =  board.getCandyAt(row, col);
                var textColor = "white";
                if( cellColor == "yellow") 
                {
                    textColor = "#A9A9A9";
                }
                drawTable = drawTable + "<td style='background-color:"+cellColor+";color:"+textColor+"'>"+colName+(row+1)+"</td>";             
            }
        drawTable = drawTable+ "</tr>";  
    }
    drawTable = drawTable+"</table>";  
    return drawTable;
}