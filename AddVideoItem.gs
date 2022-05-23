function myFunction() {
  var form = FormApp.create('New Form');
  form.addVideoItem()
    .setTitle('Video Title')
    .setHelpText('Video Caption')
    .setVideoUrl('www.youtube.com/watch?v=YykjpeuMNEk');

form.addVideoItem()
    .setTitle('Video Title')
    .setHelpText('Video Caption')
    .setVideoUrl('www.youtube.com/watch?v=QtXby3twMmI');

form.addVideoItem()
    .setTitle('Video Title')
    .setHelpText('Video Caption')
    .setVideoUrl('1234abcdxyz');
}
