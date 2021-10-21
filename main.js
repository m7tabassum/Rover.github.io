var menulist=["https://media.istockphoto.com/vectors/cartoon-with-contour-of-pizza-slice-with-melted-cheese-and-pepperoni-vector-id843213562?k=20&m=843213562&s=612x612&w=0&h=0ML1zVRu1IlKl9uOPvyqpH6QL5AluzbwgL2rsSZIqgg=",
"https://media.istockphoto.com/vectors/cartoon-vector-pizza-vector-id1277017688?k=20&m=1277017688&s=612x612&w=0&h=JSXY2AKlOdmHtRmrjY3fUQtf52d7d8Cwc5YRZsRI3MM=",
"https://cdn4.vectorstock.com/i/1000x1000/11/63/pizza-cheese-slice-vector-4011163.jpg",
"https://littlecaesarsksa.com/wp-content/uploads/2018/07/Chicken-BBQ.png"];
var i=0;
function changepizza(){
    document.getElementById("img1").src=menulist[i];
    i++;
    if(i>3){i=0;}
}