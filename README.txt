NAME or NAMES: Jason Tao, 50987585

If working in a group, briefly state the work done by each person.

COMMENTS: In the main function, we first call initialize to define the world geometry,
there are 4 spheres in the scene, sphere1 is the smallest sphere that can be moved with
keyboard and it is the light source. Then pizelRay is generated with raySetup function,
that can be used to set up pixel ray for each pixel. Then there are two rayCast functions 
to be called to generate colors for the reflected ray and initial ray, then it returns 
byColor to compute the color.Finally fragColor assigns colors to each fragments. 

Please add any comments that you wish to pass on to the graders or instructor.
Part a to f are done, third bounce is added. 
