menu_list_array = [ 
    "Veg Margherita Pizza",
"VEg Iatalian Pizza",
"Chicken Tandoori Pizza",
"Paneer Pataka pizza",
"Double layer cheese pizza",
"cheese veg pizza",
"peppy paneer pizza"]; //Add more Pizza item names

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("display_meny").innerHTML = htmldata;
}

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("add_item").value;
    //Use the push() function to push the item into menu_list_array
    menu_list_array.push(item);
}

