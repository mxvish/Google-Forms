function doGet(e) {
  i=Math.floor(Math.random()*4+1);
  switch(i){
  case 1:
    return HtmlService.createHtmlOutput('<script>window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSfPGcskSnW9jaNAWi3mopV-SVH1KA7aB4t1mHMP30Lj8Jz99Q/viewform?usp=sf_link";</script>');
  case 2:
    return HtmlService.createHtmlOutput('<script>window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSdDdJroUQnTYXeYgIIqX1uEXBH9u8w1WI2WRfT7l9ImuwZGRw/viewform?usp=sf_link";</script>');
  case 3:
    return HtmlService.createHtmlOutput('<script>window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSdO6n5V_EbIprwp-NzPYjJ_x2wqfoNYAPpNeXopTjZu-DWAgg/viewform?usp=sf_link";</script>');
  case 4:
    return HtmlService.createHtmlOutput('<script>window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSfdr9YxvVCxba-wYS857kaS-SjpOCIaHtwfMPSfgis90qLkTQ/viewform?usp=sf_link";</script>');
  }
//return HtmlService.createHtmlOutput('<script>window.location.href="https://forms.gle/GW54b44MBmS14Dnm8";</script>');
}
