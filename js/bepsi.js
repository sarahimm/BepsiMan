//sodaMan object

var BepsiMan = {
    state : 'right',

    go_left : function(){
        this.state = 'left'
    },
    go_right : function(){
        this.state = 'right'
    },
    display : function(){
        var elements = "<p>"
        elements += "BepsiMan going <b>" + this.state;
        elements += "</b></p>";
        document.getElementById("output").innerHTML += elements;
      },       
};

BepsiMan.display();
BepsiMan.go_left();
BepsiMan.display();
BepsiMan.go_right();
BepsiMan.display();

