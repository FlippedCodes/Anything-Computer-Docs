// Edit on Github https://github.com/docsifyjs/docsify/blob/167596be51d8918efa2238a0e12eab14445e4022/docs/index.html#L193C16-L193C16
// footer https://github.com/boopathikumar018/docsify-darklight-theme/blob/master/docs/index.html        
function imageCaptionPlugin(hook, vm) {
  hook.doneEach(() => {
    const html = document.querySelector('main section article');
    const images = html.querySelectorAll('img');
    
    images.forEach((image) => {
      let caption = image.alt;
      // if title is set, update caption accordingly. otherwise update the title, to get a mouseover label.
      if (image.title) caption = image.title;
      else image.title = caption;
      const captionElement = document.createElement('p');
      captionElement.className = 'image-caption';
      captionElement.textContent = caption;
      image.after(captionElement);
    });
  });
}
// Add plugin to docsify's plugin array
window.$docsify = window.$docsify || {};
$docsify.plugins = [imageCaptionPlugin, ...($docsify.plugins || [])];
