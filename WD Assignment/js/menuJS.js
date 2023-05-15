
window.onload = function(){menuBody()}

function menuBody(){

const Waffle = [
    /*first product*/
    /*productImage, 
    productName, 
    description1, 
    description2, 
    price*/
    [
        "ClassicWaffle.jpeg",
        "Classic Waffle", 
        "Plain Waffle serves with <strong>Hight Quality Butter</strong>", 
        "Is all about classic to taste the <strong><b>Raw</b></strong> ingredians flavor.",
        "RM5.00"
    ],
    [
        "WaffleWithHoneySyrup.jpeg",
        "Honey Waffle", 
        "Plain Waffle serves with <strong>Hight Quality Honey Syrup</strong>", 
        "Is to taste the fresh and sweetness <strong><b>HONEY SYRUP</b></strong> with the Waffle",
        "RM5.50"
    ],
    [
        "WaffleWithFruit.png",
        "Waffle with Fruit", 
        "Plain Waffle serves with <strong>Fresh seosonal fruit</strong>", 
        "Enjoy the season, savor the <strong><b>flavors of the seasons</b></strong>",
        "RM6.00"
    ],
    [
        "WaffleWithIcecream.jpeg",
        "Icecream Waffle", 
        "Plain Waffle serves with <strong>Cool and refreshing Icecream</strong>", 
        "When two kinds of <strong><b>happiness</b></strong> are mixed together, why <b>REFUSE</b>",
        "RM6.50"
    ],
    [
        "ChocolateWaffle.jpeg",
        "Chocolate Waffle", 
        "Chocolate Waffle serves with <strong>Dark Chocolate Sauce</strong>", 
        "<strong><b>Chocolate</b></strong> will brings happiness, like night brings <b>Dawn</b>",
        "RM7.00"
    ]
];

const Beverage = [
    /*first product*/
    /*productImage, 
    productName, 
    description1, 
    description2, 
    price*/
    [
        "blackCoffee.jpeg",
        "Black Coffee", 
        "Pure Coffee with <strong>Arabica Coffee Bean</strong>", 
        "Is to taste the <strong>pure coffee</strong> and the smell of its",
        "RM6.00"
    ],
    [
        "cappuccino.jpeg",
        "Cappuccino", 
        "Half of exppresso and <strong>Half of Fresh Milk</strong>", 
        "Life is bitter, <strong><b>add some fresh milk</b></strong> to bright it",
        "RM13.00"
    ],
    [
        "blackTea.jpeg",
        "Black Tea", 
        "Pure tea taste the <strong>Smell</strong> and relax", 
        "Enjoy the gift of the <strong><b>tea plant</b></strong>, give us the best tea",
        "RM6.00"
    ],
    [
        "milkTea.jpeg",
        "Milk Tea", 
        "Pure tea with <stong>Fresh Milk</strong>", 
        "When tea is <strong>boring</strong> just add some </strong>",
        "RM11.00"
    ],
    [
        "earlGreyTea.jpeg",
        "Earl Grey Tea", 
        "<strong>Tranditiona</strong>l tea that use to serve with", 
        "<strong>Strong</strong> taste to fit with all kind of stuff, note <strong>refusetable</strong>",
        "RM13.00"
    ]
];

const Snack = [
    /*first product*/
    /*productImage, 
    productName, 
    description1, 
    description2, 
    price*/
    [
        "cheeseWedges.jpeg",
        "Cheese Wedges", 
        "Fried Potato with <strong>Hight Quality Cheese</strong>", 
        "Say Cheese to potato.",
        "RM10.00"
    ],
    [
        "frenchFries.jpeg",
        "French Fries", 
        "French freis with <strong> Fresh Potato</strong>", 
        "Classic Snack <strong>EVER</strong>",
        "RM5.50"
    ]
];

let txtWaffle = "";

for(let i =0; i < Waffle.length; i++){
txtWaffle += 
        '<div class="card menu" style="width:400px">'+
            '<img class="card-img-top" src="./images/'+Waffle[i][0]+'" alt="' + Waffle[i][1] + '">'+
            '<div class="card-body menuCard-waffle">'+
                '<h4 class="card-title">'+ Waffle[i][1] +'</h4>'+
                '<p class="card-text">'+ Waffle[i][2] +'</p>'+
                '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal-'+i+'">'+
                    'See Details'+
                '</button>'+
                
                '<!-- The Modal -->'+
                '<div class="modal" id="myModal-'+i+'">'+
                    '<div class="modal-dialog">'+
                        '<div class="modal-content">'+
                    
                            '<!-- Modal Header -->'+
                            '<div class="modal-header">'+
                                '<h4 class="modal-title">'+ Waffle[i][1] +'</h4>'+
                                '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                            '</div>'+
                    
                            '<!-- Modal body -->'+
                            '<div class="modal-body">'+ Waffle[i][3]+   "<br><br>Price" + Waffle[i][4] +
                            ' </div>'+
                    
                            '<!-- Modal footer -->'+
                            '<div class="modal-footer">'+
                            '<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+
                            '</div>'+
                    
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>';

}


let txtBeverage = "";

for(let i =0; i < Beverage.length; i++){
txtBeverage += 
        '<div class="card menu" style="width:400px">'+
            '<img class="card-img-top" src="./images/'+Beverage[i][0]+'" alt="' + Beverage[i][1] + '">'+
            '<div class="card-body menuCard-beverage">'+
                '<h4 class="card-title">'+ Beverage[i][1] +'</h4>'+
                '<p class="card-text">'+ Beverage[i][2] +'</p>'+
                '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal-b'+i+'">'+
                    'See Details'+
                '</button>'+
                
                '<!-- The Modal -->'+
                '<div class="modal" id="myModal-b'+i+'">'+
                    '<div class="modal-dialog">'+
                        '<div class="modal-content">'+
                    
                            '<!-- Modal Header -->'+
                            '<div class="modal-header">'+
                                '<h4 class="modal-title">'+ Beverage[i][1] +'</h4>'+
                                '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                            '</div>'+
                    
                            '<!-- Modal body -->'+
                            '<div class="modal-body">'+ Beverage[i][3]+   "<br><br>Price" + Beverage[i][4] +
                            ' </div>'+
                    
                            '<!-- Modal footer -->'+
                            '<div class="modal-footer">'+
                            '<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+
                            '</div>'+
                    
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>';

}


let txtSnack = "";

for(let i =0; i < Snack.length; i++){
txtSnack += 
        '<div class="card menu" style="width:400px">'+
            '<img class="card-img-top" src="./images/'+Snack[i][0]+'" alt="' + Snack[i][1] + '">'+
            '<div class="card-body menuCard-snack">'+
                '<h4 class="card-title">'+ Snack[i][1] +'</h4>'+
                '<p class="card-text">'+ Snack[i][2] +'</p>'+
                '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal-s'+i+'">'+
                    'See Details'+
                '</button>'+
                
                '<!-- The Modal -->'+
                '<div class="modal" id="myModal-s'+i+'">'+
                    '<div class="modal-dialog">'+
                        '<div class="modal-content">'+
                    
                            '<!-- Modal Header -->'+
                            '<div class="modal-header">'+
                                '<h4 class="modal-title">'+ Snack[i][1] +'</h4>'+
                                '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                            '</div>'+
                    
                            '<!-- Modal body -->'+
                            '<div class="modal-body">'+ Snack[i][3]+   "<br><br>Price" + Snack[i][4] +
                            ' </div>'+
                    
                            '<!-- Modal footer -->'+
                            '<div class="modal-footer">'+
                            '<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+
                            '</div>'+
                    
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>';

}
    document.getElementById("menuWaffle").innerHTML = txtWaffle;
    document.getElementById("menuBeverage").innerHTML = txtBeverage;
    document.getElementById("menuSnack").innerHTML = txtSnack;
}