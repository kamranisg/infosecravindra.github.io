document.querySelector("#saveButton").addEventListener("click",function(){var e=document.querySelector("#title"),t=document.querySelector("#data"),c=e.value,l=t.value;console.log(c+" : "+l),db.collection("notes").add({title:c,data:l}).then(function(e){alert("Saved successfully with id: "+e.id)}).catch(function(e){alert("Failed "+e)})});