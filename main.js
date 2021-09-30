var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/Nf6TsvNf/SAK.jpg", "https://i.postimg.cc/0NbbJTCS/SKK.jpg" , "https://i.postimg.cc/7hy6dfr1/CK.jpg", "https://i.postimg.cc/Y9F0dQZq/JA.jpg", "https://i.postimg.cc/wxh3JcDw/MK.jpg"];
var names = ["Fmaily Book","Swapna (Mom)", "Subhash (Dad)", "Chandrika (Paternal Grandma)", "Jayasree (Maternal Grandma)", "Mohanan (Maternal Grandpa)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = names.length
    if(i >= numbers_of_family_member_in_array)
      {
          i = 0;
      }

    document.getElementById("family_member_image").src = images[i];
    document.getElementById("family_member_name").innerHTML = names[i];
}
