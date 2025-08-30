function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6YHZqy31H7k":
        Script1();
        break;
      case "60FA7EsNluD":
        Script2();
        break;
      case "6id1mVIlb4j":
        Script3();
        break;
      case "6mRiYD3oFmd":
        Script4();
        break;
      case "5tdPiF5khFu":
        Script5();
        break;
      case "5Ug6AZE1SBZ":
        Script6();
        break;
      case "5z47dwGXnVU":
        Script7();
        break;
      case "6hRAXTQvbZJ":
        Script8();
        break;
      case "5mnP8h3Fsw3":
        Script9();
        break;
      case "6jNIdXRred1":
        Script10();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6JZephpLQpI');
const duration = 750;
const easing = 'ease-out';
const id = '6CRqs4SekdZ';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6JZephpLQpI');
const duration = 750;
const easing = 'ease-out';
const id = '6CRqs4SekdZ_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5lAnglV3h3N');
const duration = 750;
const easing = 'ease-out';
const id = '5g1M9uUYMy9';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
