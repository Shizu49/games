  function copyButton(button) {
      const textElement = button.querySelector(&quot;p&quot;);
      const codeElement = button.closest(&quot;pre&quot;).querySelector(&quot;code&quot;);
      if (!codeElement) {
          textElement.innerText = &quot;Failed&quot;;
      } else {
          navigator.clipboard.writeText(codeElement.textContent.trim()).then(() =&gt; {
              textElement.innerText = &quot;Copied !&quot;;
          });
      }
      setTimeout(() =&gt; textElement.innerText = &quot; &quot;, 2000);
  }
