var data = [
    { name: "Ajay", id:123456 },
    { name: "Vijay", id:123457 },
    { name: "Sanjay", id:123458 },
    { name: "Vijay", id:123470 },
    { name: "Deepak", id:123459 },
    { name: "Amit", id:123460 },
    { name: "Vijay", id:123472 },
    { name: "Ankit", id:123463 },
    { name: "Vijay", id:123469 },
    { name: "Deepak", id:123464 },
    { name: "Jagat", id:123465 },
    { name: "Vijay", id:123468 },
    { name: "Aksar", id:123466 },
    { name: "Vijay", id:123471 },
    { name: "Sanjay", id:123461 },
    { name: "Vijay", id:123467 },
    { name: "Zakir", id:123462 }
]
        
        
        // Declaring array in which the sorting index will be stored
        
        var data1 = []
        
        k=0
        data.forEach(z => {
            data1[k]=z.name
            k++
        });
        
        
        
 
        
        
        
        // Removing same entries in sorting index
    
        for(i=0;i<data1.length;i++)
        {   
            for(j=i+1;j<data1.length;j++)
            {
                if(data1[i]==data1[j])
                {
                 
                    data1.splice(j,1)
                }
            }
        }
        
        
        // sorting the sorting index
        data1.sort()
        
        

        filterData = `<tr><th>Employee Name</th><th>ID</th></tr>`
        data1.forEach(String => {
            
            data.forEach(value => {
                
                if(String == value.name){
                    filterData+= `<tr><td>${value.name}</td><td>${value.id}</td></tr>`
                }
                
                
            });
        });

        document.getElementById("dataTable").innerHTML = filterData