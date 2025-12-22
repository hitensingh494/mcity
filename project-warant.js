     <script>
            function checkResult() 
                let searchQuery;
                searchQuery = document.getElementById("name").value.toLowerCase();
                    if (searchQuery === "rahul sharma"){
                        
                        document.getElementById("RahulSharmaOutput").style.display = "block"
                    }
                    else if (searchQuery === "Vedant singh"){
                        document.getElementById("badmosh").style.display = "block"
                    }
                    else if (searchQuery === "Virat Mishri"){
                        document.getElementById("chota badmosh").style.display = "block"
                    
                    }
                    else{
                        document.getElementById("no").innerText = `No results found.` 
                    }

            
        </script>