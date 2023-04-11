document.addEventListener("DOMContentLoaded", function() {
    function copyAndDownloadCode() {
      hljs.highlightAll();
      document.querySelectorAll('.copy-btn').forEach(function(button) {
        button.addEventListener('click', function() {
          var code = this.parentElement.querySelector('code').textContent.trim();
          navigator.clipboard.writeText(code);
          this.classList.add('copied');
          this.innerText = 'Copiado';
          setTimeout(() => {
            this.classList.remove('copied');
            this.innerText = 'Copiar Código';
          }, 2000);
        });
      });
  
      document.querySelectorAll('.download-btn').forEach(function(button) {
        button.addEventListener('click', function() {
          var code = this.parentElement.querySelector('code').textContent.trim();
          var blob = new Blob([code], {type: 'text/plain'});
          var url = URL.createObjectURL(blob);
          var filename = this.dataset.filename || 'archivo.txt';
          var a = document.createElement('a');
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        });
      });        
    }

    copyAndDownloadCode();
  });
