var data = [
    { name: "Ajay", id:123456 },
    { name: "Vijay", id:123457 },
    { name: "Sanjay", id:123458 },
    { name: "Deepak", id:123459 },
    { name: "Amit", id:123460 },
    { name: "Sanjay", id:123461 },
    { name: "Zakir", id:123462 }
]


// Declaring array in which the sorting index will be stored

var data1 = []

k=0
data.forEach(z => {
    data1[k]=z.name
    k++
});


// sorting the sorting index

data1.sort()
var length = data1.length


// Removing same entries in sorting index

for(i=0;i<length;i++)
{   
    for(j=i+1;j<length;j++)
    {
        if(data1[i]==data1[j])
        {
            data1.splice(j,1)
        }
    }
}



filterData = `<tr><th>Employee Name</th><th>ID</th></tr>`
data1.forEach(String => {
    
    data.forEach(value => {
        
        if(String == value.name){
            filterData+= `<tr><td>${value.name}</td><td>${value.id}</td></tr>`
        }
        
        
    });
});

// document.getElementById("dataTable").innerHTML = filterData
