function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MYTl8lc96a":
        Script1();
        break;
      case "6H5RnwIbTcg":
        Script2();
        break;
      case "5xKoYjyVtqr":
        Script3();
        break;
      case "5xyrMhKOwRK":
        Script4();
        break;
      case "5gxLsLXOLOM":
        Script5();
        break;
      case "62DF1N74dDl":
        Script6();
        break;
      case "5m6aUg2IgIl":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="1.mp3";
audio.load();
audio.play();

}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.6;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.8;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

