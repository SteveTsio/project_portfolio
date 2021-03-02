// json start


fetch("./assets/assets.json")
  .then((response) => response.json())
  .then((data) => {
    for(const i of data.Quotes){
        document.getElementById("leftPara").innerHTML = i.Quote1.text;
        document.getElementById("rightPara").innerHTML = i.Quote2.text;
    }
  // Second way --> document.getElementById("leftPara").innerHTML = data.Quotes[0].Quote1.text;
  });
