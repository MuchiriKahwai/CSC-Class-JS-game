d3. select ("#BringSuspects") . on( "click", function()
{ d3   .select("#Suspectbox")
       .classed( "hidden",false);
 }
 )
d3. select("#Suspectbox") .on ("click", function() 
{d3.select ("#Suspectbox0")
    .classed("hidden", false) ;
}
)
d3. select("#Suspectbox0") .on ("mouseenter", function() 
{d3.select ("#Suspectbox1")
    .classed("hidden", false);
}
)

d3. select("#Suspectbox1") .on ("mouseenter", function() 
{d3.select ("#Suspectbox2")
    .classed("hidden", false);
}
)
d3. select("#Suspectbox2") .on ("mouseenter", function() 
{d3.select ("#Suspectbox3")
    .classed("hidden", false);
}
)

 d3. select("#Suspectbox3") .on ("mouseenter", function() 
{d3.select ("#empty")
    .classed("hidden", false);
}
)

 
