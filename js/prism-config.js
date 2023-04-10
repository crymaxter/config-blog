// Crear elementos de script para cada URL
var script1 = document.createElement('script');
script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/prism.min.js';
var script2 = document.createElement('script');
script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-markup.min.js';
var script3 = document.createElement('script');
script3.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-css.min.js';
var script4 = document.createElement('script');
script4.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-javascript.min.js';
var script5 = document.createElement('script');
script5.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-python.min.js';
var script6 = document.createElement('script');
script6.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-yaml.min.js';
var script7 = document.createElement('script');
script7.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-docker.min.js';

// Agregar elementos de script al final del body
document.body.appendChild(script1);
document.body.appendChild(script2);
document.body.appendChild(script3);
document.body.appendChild(script4);
document.body.appendChild(script5);
document.body.appendChild(script6);
document.body.appendChild(script7);
