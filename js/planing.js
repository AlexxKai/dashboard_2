google.charts.load("current", { packages: ["gantt"] });
google.charts.setOnLoadCallback(drawChart);

function toMilliseconds(minutes) {
  return minutes * 60 * 1000;
}

function drawChart() {
  var otherData = new google.visualization.DataTable();
  otherData.addColumn("string", "Task ID");
  otherData.addColumn("string", "Task Name");
  otherData.addColumn("string", "Resource");
  otherData.addColumn("date", "Start");
  otherData.addColumn("date", "End");
  otherData.addColumn("number", "Duration");
  otherData.addColumn("number", "Percent Complete");
  otherData.addColumn("string", "Dependencies");

  otherData.addRows([
    [
      "toTrain",
      "Walk to train stop",
      "walk",
      null,
      null,
      toMilliseconds(5),
      100,
      null,
    ],
    [
      "music",
      "Listen to music",
      "music",
      null,
      null,
      toMilliseconds(70),
      100,
      null,
    ],
    [
      "wait",
      "Wait for train",
      "wait",
      null,
      null,
      toMilliseconds(10),
      100,
      "toTrain",
    ],
    [
      "train",
      "Train ride",
      "train",
      null,
      null,
      toMilliseconds(45),
      75,
      "wait",
    ],
    [
      "toWork",
      "Walk to work",
      "walk",
      null,
      null,
      toMilliseconds(10),
      0,
      "train",
    ],
    [
      "work",
      "Sit down at desk",
      null,
      null,
      null,
      toMilliseconds(2),
      0,
      "toWork",
    ],
  ]);

  var options = {
    height: 275,
    width: "100%",
    gantt: {
      defaultStartDate: new Date(2024, 1, 25),
    },
  };

  var chart = new google.visualization.Gantt(
    document.getElementById("train")
  );

  chart.draw(otherData, options);
}